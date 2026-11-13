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
