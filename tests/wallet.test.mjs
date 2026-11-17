// 2c: กระเป๋า (wallet_entries): เพิ่มรายรับ/รายจ่าย, ดู, สรุป, ลบ, ย้ายข้อมูลเดิม
import test from "node:test";
import assert from "node:assert/strict";
import { createShortcutHandler } from "../lib/shortcut-service.mjs";
import { createLineIdAuthenticator } from "../lib/line-auth.mjs";
import { buildWalletEntry, migratePersonalExpenses } from "../lib/wallet-service.mjs";
import { createFakeFirestore, createFakeRes } from "./fake-firestore.mjs";

const NOV13 = Date.parse("2026-11-13T05:00:00Z");

function setup() {
    const db = createFakeFirestore();
    db.seed("members", "me", { name: "G A M E 👾", lineUserId: "U_me" });
    db.seed("members", "other", { name: "AOY", lineUserId: "U_other" });
    db.seed("personal_expenses", "p1", { payer: "G A M E 👾", date: "2026-11-10", desc: "ค่าไฟ", amount: 1000, bank: "SCB", timestamp: 1 });
    // กลุ่ม: GAME จ่าย 300 หารกับ AOY (ส่วนของ GAME = 150)
    db.seed("transactions", "t1", { date: "2026-11-02", payer: "G A M E 👾", amount: 300, splits: { "G A M E 👾": 150, AOY: 150 } });
    db.seed("settlements", "s1", { status: "verified", month: "2026-11", from: "AOY", to: "G A M E 👾", amount: 150 });
    const fetchFn = async (_u, opts) => {
        const tok = new URLSearchParams(opts.body).get("id_token");
        if (tok === "good-me") return { ok: true, json: async () => ({ sub: "U_me" }) };
        if (tok === "good-other") return { ok: true, json: async () => ({ sub: "U_other" }) };
        return { ok: false, json: async () => ({ error: "x" }) };
    };
    const handler = createShortcutHandler({
        db: {}, fs: db.fs,
        verifyDeviceToken: async () => ({ authenticated: true, memberId: "me", name: "G A M E 👾" }),
        authenticateIdToken: createLineIdAuthenticator({ db: {}, fs: db.fs, fetchFn, channelId: "1" }),
        env: {}, fetchFn: async () => ({ ok: true }), now: () => NOV13
    });
    const call = async (body, headers = {}) => {
        const res = createFakeRes();
        await handler({ method: "POST", headers, body }, res);
        return res;
    };
    return { db, call };
}

test("buildWalletEntry: ตรวจประเภท จำนวน วันที่", () => {
    const ctx = { ownerName: "g a m e 👾", nowMs: NOV13 };
    const ok = buildWalletEntry({ type: "income", amount: "25000.456", desc: "เงินเดือน" }, ctx);
    assert.equal(ok.ok, true);
    assert.equal(ok.entry.amount, 25000.46);
    assert.equal(ok.entry.date, "2026-11-13");
    assert.equal(ok.entry.month, "2026-11");
    assert.equal(ok.entry.payer, ok.entry.ownerName);
    for (const bad of [{ type: "x", amount: 1 }, { type: "income", amount: 0 }, { type: "income", amount: -5 }, { type: "income", amount: "abc" }, { type: "income", amount: 1, date: "13/11/2026" }, { type: "income", amount: 2e9 }]) {
        assert.equal(buildWalletEntry(bad, ctx).ok, false, JSON.stringify(bad));
    }
});

test("wallet-add: รายรับ (ด้วย LINE login) ลงกระเป๋าของตัวเอง และเห็นเฉพาะเจ้าของ", async () => {
    const { call, db } = setup();
    const r = await call({ action: "wallet-add", type: "income", amount: 25000, desc: "เงินเดือน", idToken: "good-me" });
    assert.equal(r.body.status, "saved");
    assert.equal(db.count("wallet_entries"), 1);
    const mine = await call({ action: "wallet-list", month: "2026-11", idToken: "good-me" });
    assert.equal(mine.body.income, 25000);
    assert.equal(mine.body.expense, 1000); // ของเดิมใน personal_expenses ยังเห็น (ช่วงเปลี่ยนผ่าน)
    const other = await call({ action: "wallet-list", month: "2026-11", idToken: "good-other" });
    assert.equal(other.body.count, 0);
});

test("list เดิม (รายจ่ายส่วนตัว) ไม่แสดงรายรับ", async () => {
    const { call } = setup();
    await call({ action: "wallet-add", type: "income", amount: 500, idToken: "good-me" });
    await call({ action: "wallet-add", type: "expense", amount: 40, desc: "กาแฟ", idToken: "good-me" });
    const l = await call({ action: "list", month: "2026-11", idToken: "good-me" });
    assert.equal(l.body.items.every((i) => i.type === "expense"), true);
    assert.equal(l.body.total, 1040);
});

test("wallet-add ซ้ำด้วย dedupKey → ไม่บันทึกซ้ำ", async () => {
    const { call, db } = setup();
    await call({ action: "wallet-add", type: "income", amount: 100, dedupKey: "k1", idToken: "good-me" });
    const r = await call({ action: "wallet-add", type: "income", amount: 100, dedupKey: "k1", idToken: "good-me" });
    assert.equal(r.body.status, "duplicate");
    assert.equal(db.count("wallet_entries"), 1);
});

test("wallet-add: ข้อมูลผิด → 400 และต้องล็อกอิน", async () => {
    const { call } = setup();
    assert.equal((await call({ action: "wallet-add", type: "income", amount: -1, idToken: "good-me" })).statusCode, 400);
    assert.equal((await call({ action: "wallet-add", type: "income", amount: 5, idToken: "bad" })).statusCode >= 400, true);
});

test("wallet-summary: รายรับ, รายจ่ายส่วนตัว, ส่วนในกลุ่ม, สุทธิ, ได้คืนแล้ว (บาท)", async () => {
    const { call } = setup();
    await call({ action: "wallet-add", type: "income", amount: 25000, idToken: "good-me" });
    const s = await call({ action: "wallet-summary", month: "2026-11", idToken: "good-me" });
    assert.equal(s.body.income, 25000);
    assert.equal(s.body.personalExpense, 1000);
    assert.equal(s.body.groupShare, 150);
    assert.equal(s.body.expenseTotal, 1150);
    assert.equal(s.body.net, 23850);
    assert.equal(s.body.receivedBack, 150); // AOY โอนคืน: ไม่นับเป็นรายรับ
});

test("wallet-delete: ลบของตัวเองได้ ของคนอื่นไม่ได้ และลบรายการที่ย้ายมาจากของเดิมได้ทั้งสองที่", async () => {
    const { call, db } = setup();
    const add = await call({ action: "wallet-add", type: "income", amount: 10, idToken: "good-me" });
    const id = add.body.id;
    assert.equal((await call({ action: "wallet-delete", id, idToken: "good-other" })).statusCode, 403);
    assert.equal((await call({ action: "wallet-delete", id, idToken: "good-me" })).body.status, "deleted");
    assert.equal(db.has("wallet_entries", id), false);

    await migratePersonalExpenses({ db: {}, fs: db.fs });
    assert.equal(db.has("wallet_entries", "p1"), true);
    await call({ action: "wallet-delete", id: "p1", idToken: "good-me" });
    assert.equal(db.has("wallet_entries", "p1"), false);
    assert.equal(db.has("personal_expenses", "p1"), false);
});

test("migratePersonalExpenses: ย้ายด้วย id เดิม ทำซ้ำได้ ไม่ซ้ำในรายการ ไม่ลบของเดิม", async () => {
    const { call, db } = setup();
    const a = await migratePersonalExpenses({ db: {}, fs: db.fs });
    assert.deepEqual([a.total, a.migrated, a.skipped], [1, 1, 0]);
    const b = await migratePersonalExpenses({ db: {}, fs: db.fs });
    assert.deepEqual([b.migrated, b.skipped], [0, 1]);
    assert.equal(db.has("personal_expenses", "p1"), true);
    const e = db.all("wallet_entries")[0];
    assert.equal(e.type, "expense");
    assert.equal(e.ownerName, "G A M E 👾");
    assert.equal(e.month, "2026-11");
    const l = await call({ action: "wallet-list", month: "2026-11", idToken: "good-me" });
    assert.equal(l.body.count, 1, "รายการเดียวกัน (id เดียวกัน) ต้องไม่ซ้ำสองครั้ง");
});

import fsNode from "node:fs";
test("Widget อ่านรายจ่ายส่วนตัวจาก wallet_entries ด้วย (ไม่นับรายรับ ไม่ซ้ำ id)", () => {
    const w = fsNode.readFileSync(new URL("../api/widget-summary.js", import.meta.url), "utf8");
    assert.match(w, /collection\(db, 'wallet_entries'\)/);
    assert.match(w, /w\.type === 'income'/);
    assert.match(w, /seen\.has\(d\.id\)/);
});

test("wallet-list since: ดึงหลายเดือนในครั้งเดียว", async () => {
    const { call, db } = setup();
    db.seed("wallet_entries", "w-oct", { ownerName: "G A M E 👾", payer: "G A M E 👾", type: "income", amount: 500, date: "2026-10-05", month: "2026-10", timestamp: 1 });
    db.seed("wallet_entries", "w-aug", { ownerName: "G A M E 👾", payer: "G A M E 👾", type: "income", amount: 700, date: "2026-08-05", month: "2026-08", timestamp: 1 });
    const r = await call({ action: "wallet-list", since: "2026-09", idToken: "good-me" });
    assert.deepEqual(r.body.items.map((i) => i.id).sort(), ["p1", "w-oct"].sort());
    const one = await call({ action: "wallet-list", month: "2026-10", idToken: "good-me" });
    assert.deepEqual(one.body.items.map((i) => i.id), ["w-oct"]);
});

test("ประหยัดการอ่าน: wallet-list อ่านเฉพาะเดือนที่ขอ ไม่อ่านทั้งประวัติ", async () => {
    const { call, db } = setup();
    for (let i = 0; i < 120; i++) {
        const m = `2026-${String((i % 10) + 1).padStart(2, "0")}`;
        db.seed("wallet_entries", `bulk${i}`, { ownerName: "G A M E 👾", payer: "G A M E 👾", type: "expense", amount: 1, date: `${m}-05`, month: m, timestamp: i });
    }
    db.resetReads();
    const one = await call({ action: "wallet-list", month: "2026-03", idToken: "good-me" });
    assert.equal(one.body.count, 12);
    // อ่านรายการเดือนนั้น 12 + รายการส่วนตัวเดิม (p1) 1 + สมาชิกที่ล็อกอิน 1 ไม่ใช่ 120+
    assert.ok(db.reads() <= 20, `อ่าน ${db.reads()} เอกสาร`);
    db.resetReads();
    await call({ action: "wallet-list", since: "2026-09", idToken: "good-me" });
    assert.ok(db.reads() < 60, `since อ่าน ${db.reads()} เอกสาร`);
});

test("wallet-add แบบรายเดือน: บันทึกรายการ + แม่แบบ, ดู/หยุดได้เฉพาะของตัวเอง", async () => {
    const { call, db } = setup();
    const r = await call({ action: "wallet-add", type: "expense", amount: 599, desc: "ค่าเน็ต", date: "2026-11-10", recurring: true, idToken: "good-me" });
    assert.equal(r.body.status, "saved");
    assert.equal(r.body.recurring, true);
    assert.equal(db.count("wallet_entries"), 1);
    assert.equal(db.count("wallet_templates"), 1);
    const tpl = db.all("wallet_templates")[0];
    assert.equal(tpl.billingDay, 10);
    assert.equal(tpl.lastGeneratedMonth, "2026-11");
    // รายรับไม่ทำแม่แบบ และไม่ส่ง recurring ก็ไม่ทำ
    await call({ action: "wallet-add", type: "income", amount: 100, recurring: true, idToken: "good-me" });
    await call({ action: "wallet-add", type: "expense", amount: 10, idToken: "good-me" });
    assert.equal(db.count("wallet_templates"), 1);
    const mine = await call({ action: "wallet-template-list", idToken: "good-me" });
    assert.equal(mine.body.items.length, 1);
    const other = await call({ action: "wallet-template-list", idToken: "good-other" });
    assert.equal(other.body.items.length, 0);
    const id = mine.body.items[0].id;
    const bad = await call({ action: "wallet-template-stop", id, idToken: "good-other" });
    assert.equal(bad.statusCode, 403);
    const ok = await call({ action: "wallet-template-stop", id, idToken: "good-me" });
    assert.equal(ok.statusCode, 200);
    const after = await call({ action: "wallet-template-list", idToken: "good-me" });
    assert.equal(after.body.items.length, 0);
});

test("wallet-update: แก้ชื่อ/หมวดของรายการส่วนตัวของตัวเอง (รวมรายการเก่าใน personal_expenses) แก้ของคนอื่นไม่ได้", async () => {
    const { call, db } = setup();
    const add = await call({ action: "wallet-add", type: "expense", amount: 500, desc: "ผ่อน CIVIC", idToken: "good-me" });
    const id = add.body.id;
    const bad = await call({ action: "wallet-update", id, icon: "fa-car", idToken: "good-other" });
    assert.equal(bad.statusCode, 403);
    const ok = await call({ action: "wallet-update", id, icon: "fa-car", desc: "ผ่อนรถ", idToken: "good-me" });
    assert.equal(ok.statusCode, 200);
    const e = db.all("wallet_entries").find((x) => x.amount === 500);
    assert.equal(e.icon, "fa-car");
    assert.equal(e.desc, "ผ่อนรถ");
    assert.equal(e.amount, 500);
    // รายการเก่า (personal_expenses) ก็แก้ได้
    const old = await call({ action: "wallet-update", id: "p1", icon: "fa-bolt", idToken: "good-me" });
    assert.equal(old.statusCode, 200);
    assert.equal(db.all("personal_expenses")[0].icon, "fa-bolt");
    // ไอคอนที่ไม่ถูกรูปแบบ / ไม่มีข้อมูล / ไม่พบรายการ
    assert.equal((await call({ action: "wallet-update", id, icon: "<img>", idToken: "good-me" })).statusCode, 400);
    assert.equal((await call({ action: "wallet-update", id, idToken: "good-me" })).statusCode, 400);
    assert.equal((await call({ action: "wallet-update", id: "nope", icon: "fa-car", idToken: "good-me" })).statusCode, 404);
});

test("wallet-update แบบหลายรายการ: จัดหมวดทีเดียว แก้เฉพาะของตัวเอง รายงานตัวที่ล้มเหลว", async () => {
    const { call, db } = setup();
    const a = (await call({ action: "wallet-add", type: "expense", amount: 100, desc: "ผ่อน CIVIC", idToken: "good-me" })).body.id;
    const b = (await call({ action: "wallet-add", type: "expense", amount: 50, desc: "Netflix", idToken: "good-me" })).body.id;
    const theirs = (await call({ action: "wallet-add", type: "expense", amount: 20, desc: "ของคนอื่น", idToken: "good-other" })).body.id;
    const r = await call({ action: "wallet-update", items: [{ id: a, icon: "fa-car" }, { id: b, icon: "fa-bolt" }, { id: theirs, icon: "fa-bolt" }, { id: "nope", icon: "fa-bolt" }, { id: a, icon: "<x>" }], idToken: "good-me" });
    assert.equal(r.statusCode, 200);
    assert.equal(r.body.updated, 2);
    assert.equal(r.body.failed.length, 3);
    const byDesc = Object.fromEntries(db.all("wallet_entries").map((e) => [e.desc, e.icon]));
    assert.equal(byDesc["ผ่อน CIVIC"], "fa-car");
    assert.equal(byDesc["Netflix"], "fa-bolt");
    assert.notEqual(byDesc["ของคนอื่น"], "fa-bolt");
    assert.equal((await call({ action: "wallet-update", items: [], idToken: "good-me" })).statusCode, 400);
});

test("แก้หมวดของรายการที่มาจากรายเดือน: แม่แบบถูกแก้ตามด้วย (เดือนถัดไปไม่ต้องแก้ซ้ำ) รวมรายการเก่าที่ยังไม่ผูกแม่แบบ", async () => {
    const { call, db } = setup();
    // รายการใหม่: ผูกแม่แบบด้วย templateId
    const r = await call({ action: "wallet-add", type: "expense", amount: 599, desc: "ค่าเน็ต", date: "2026-11-10", recurring: true, idToken: "good-me" });
    const entry = db.all("wallet_entries").find((e) => e.desc === "ค่าเน็ต");
    assert.ok(entry.templateId, "รายการต้องผูก templateId");
    await call({ action: "wallet-update", id: r.body.id, icon: "fa-bolt", desc: "ค่าเน็ตบ้าน", idToken: "good-me" });
    let tpl = db.all("wallet_templates").find((t) => Number(t.amount) === 599);
    assert.equal(tpl.icon, "fa-bolt");
    assert.equal(tpl.desc, "ค่าเน็ตบ้าน");
    // รายการเก่า (ไม่มี templateId) จับคู่ด้วยชื่อ+ยอดเดิม
    db.seed("wallet_entries", "old1", { ownerName: "G A M E 👾", payer: "G A M E 👾", type: "expense", amount: 518, desc: "Netflix", date: "2026-11-01", month: "2026-11", icon: "fa-wallet", timestamp: 1 });
    db.seed("wallet_templates", "tOld", { ownerName: "G A M E 👾", type: "expense", amount: 518, desc: "Netflix", icon: "fa-wallet", billingDay: 1, active: true, lastGeneratedMonth: "2026-11" });
    await call({ action: "wallet-update", id: "old1", icon: "fa-film", idToken: "good-me" });
    tpl = db.all("wallet_templates").find((t) => Number(t.amount) === 518);
    assert.equal(tpl.icon, "fa-film");
    // แม่แบบของคนอื่น (ชื่อซ้ำ ยอดซ้ำ) ไม่ถูกแตะ
    db.seed("wallet_templates", "tOther", { ownerName: "AOY", type: "expense", amount: 518, desc: "Netflix", icon: "fa-wallet", billingDay: 1, active: true });
    await call({ action: "wallet-update", id: "old1", icon: "fa-bolt", idToken: "good-me" });
    assert.equal(db.all("wallet_templates").find((t) => t.ownerName === "AOY").icon, "fa-wallet");
});

test("wallet-template-update: แก้ชื่อ ยอด หมวดของรายเดือน เฉพาะของตัวเอง และตรวจค่า", async () => {
    const { call, db } = setup();
    await call({ action: "wallet-add", type: "expense", amount: 518, desc: "Netflx", date: "2026-11-01", recurring: true, idToken: "good-me" });
    const id = (await call({ action: "wallet-template-list", idToken: "good-me" })).body.items[0].id;
    assert.equal((await call({ action: "wallet-template-update", id, desc: "x", idToken: "good-other" })).statusCode, 403);
    const ok = await call({ action: "wallet-template-update", id, desc: "Netflix", amount: 599, icon: "fa-film", idToken: "good-me" });
    assert.equal(ok.statusCode, 200);
    const t = db.all("wallet_templates")[0];
    assert.deepEqual([t.desc, t.amount, t.icon], ["Netflix", 599, "fa-film"]);
    assert.equal((await call({ action: "wallet-template-update", id, amount: -5, idToken: "good-me" })).statusCode, 400);
    assert.equal((await call({ action: "wallet-template-update", id, icon: "<x>", idToken: "good-me" })).statusCode, 400);
    assert.equal((await call({ action: "wallet-template-update", id, idToken: "good-me" })).statusCode, 400);
    assert.equal((await call({ action: "wallet-template-update", id: "nope", desc: "x", idToken: "good-me" })).statusCode, 404);
});
