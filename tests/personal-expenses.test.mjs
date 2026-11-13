import test from "node:test";
import assert from "node:assert/strict";
import { createShortcutHandler } from "../lib/shortcut-service.mjs";
import { createLineIdAuthenticator } from "../lib/line-auth.mjs";
import { createFakeFirestore, createFakeRes } from "./fake-firestore.mjs";

const NOV13 = Date.parse("2026-11-13T05:00:00Z");

function setup() {
    const db = createFakeFirestore();
    db.seed("members", "me", { name: "G A M E 👾", lineUserId: "U_me" });
    db.seed("members", "other", { name: "AOY", lineUserId: "U_other" });

    // รายการส่วนตัวของเรา (2 เดือน) และของคนอื่น
    db.seed("personal_expenses", "p1", { payer: "G A M E 👾", date: "2026-11-10", desc: "ค่าไฟ", amount: 1084.97, bank: "SCB", timestamp: 1 });
    db.seed("personal_expenses", "p2", { payer: "G A M E 👾", date: "2026-11-12", desc: "ข้าว", amount: 60, bank: "KBANK", timestamp: 2 });
    db.seed("personal_expenses", "p3", { payer: "G A M E 👾", date: "2026-10-30", desc: "เดือนก่อน", amount: 99.5, bank: "KBANK", timestamp: 3 });
    db.seed("personal_expenses", "x1", { payer: "AOY", date: "2026-11-11", desc: "ของ AOY", amount: 500, bank: "TTB", timestamp: 4 });

    const lineCalls = [];
    const fetchFn = async (url, opts) => {
        lineCalls.push({ url, body: opts.body });
        const params = new URLSearchParams(opts.body);
        const tok = params.get("id_token");
        if (tok === "good-me") return { ok: true, json: async () => ({ sub: "U_me" }) };
        if (tok === "good-other") return { ok: true, json: async () => ({ sub: "U_other" }) };
        if (tok === "good-nomember") return { ok: true, json: async () => ({ sub: "U_nobody" }) };
        return { ok: false, json: async () => ({ error: "invalid_request" }) };
    };

    const handler = createShortcutHandler({
        db: {}, fs: db.fs,
        verifyDeviceToken: async (_db, req) =>
            req.headers.authorization === "Bearer device"
                ? { authenticated: true, memberId: "me", name: "G A M E 👾" }
                : { authenticated: false, status: 401, message: "รหัสไม่ถูกต้อง" },
        authenticateIdToken: createLineIdAuthenticator({ db: {}, fs: db.fs, fetchFn, channelId: "123" }),
        env: {}, fetchFn: async () => ({ ok: true }), now: () => NOV13
    });
    const call = async (body, headers = {}) => {
        const res = createFakeRes();
        await handler({ method: "POST", headers, body }, res);
        return res;
    };
    return { db, call, lineCalls };
}

test("list: เฉพาะของตัวเอง ในเดือนที่เลือก เรียงใหม่ไปเก่า พร้อมยอดรวม", async () => {
    const { call } = setup();
    const r = await call({ action: "list", month: "2026-11", idToken: "good-me" });
    assert.equal(r.statusCode, 200);
    assert.equal(r.body.status, "listed");
    assert.deepEqual(r.body.items.map((i) => i.id), ["p2", "p1"]);
    assert.equal(r.body.total, 1144.97);
    assert.equal(r.body.count, 2);
    assert.ok(!r.body.items.some((i) => i.id === "x1"), "ห้ามเห็นรายการของคนอื่น");
});

test("list: ไม่ระบุเดือน = เดือนนี้ (ไทย) และเดือนอื่นเลือกได้", async () => {
    const { call } = setup();
    assert.equal((await call({ action: "list", idToken: "good-me" })).body.month, "2026-11");
    const oct = await call({ action: "list", month: "2026-10", idToken: "good-me" });
    assert.deepEqual(oct.body.items.map((i) => i.id), ["p3"]);
    assert.equal((await call({ action: "list", month: "ไม่ใช่เดือน", idToken: "good-me" })).body.month, "2026-11");
});

test("list/delete ใช้รหัสอุปกรณ์ (Bearer) ได้เหมือนกัน", async () => {
    const { call } = setup();
    const r = await call({ action: "list", month: "2026-11" }, { authorization: "Bearer device" });
    assert.equal(r.body.count, 2);
});

test("delete: ลบรายการของตัวเองได้ และหายจากรายการ", async () => {
    const { call, db } = setup();
    const d = await call({ action: "delete", id: "p1", idToken: "good-me" });
    assert.equal(d.statusCode, 200);
    assert.equal(d.body.status, "deleted");
    assert.equal(d.body.success, true);
    assert.equal(db.has("personal_expenses", "p1"), false);
    assert.equal(db.has("personal_expenses", "p2"), true);
    const r = await call({ action: "list", month: "2026-11", idToken: "good-me" });
    assert.deepEqual(r.body.items.map((i) => i.id), ["p2"]);
});

test("delete: ลบของคนอื่นไม่ได้ (403) และรายการยังอยู่", async () => {
    const { call, db } = setup();
    const d = await call({ action: "delete", id: "x1", idToken: "good-me" });
    assert.equal(d.statusCode, 403);
    assert.equal(db.has("personal_expenses", "x1"), true);
});

test("delete: ไม่พบรายการ (404) / รหัสแปลก (400)", async () => {
    const { call } = setup();
    assert.equal((await call({ action: "delete", id: "nope", idToken: "good-me" })).statusCode, 404);
    assert.equal((await call({ action: "delete", id: "", idToken: "good-me" })).statusCode, 400);
    assert.equal((await call({ action: "delete", id: "a/b", idToken: "good-me" })).statusCode, 400);
});

test("ยืนยันตัวตน: LINE token ผิด/หมดอายุ → 401, ไม่มีสมาชิกผูก LINE → 403, ไม่มีอะไรเลย → 401", async () => {
    const { call } = setup();
    assert.equal((await call({ action: "list", idToken: "bad" })).statusCode, 401);
    assert.equal((await call({ action: "list", idToken: "good-nomember" })).statusCode, 403);
    assert.equal((await call({ action: "list" })).statusCode, 401);
});

test("LINE token ใช้ได้เฉพาะ list/delete ไม่ใช้กับ parse/save/auto (ต้องมีรหัสอุปกรณ์)", async () => {
    const { call, db } = setup();
    for (const action of ["parse", "save", "auto"]) {
        const r = await call({ action, text: "จำนวน 10.00 บาท", splitType: "personal", idToken: "good-me" });
        assert.equal(r.statusCode, 401, action);
    }
    assert.equal(db.count("pending_slips"), 0);
});

test("คนที่สองลบ/ดูของตัวเอง ไม่ปะปนกัน", async () => {
    const { call } = setup();
    const r = await call({ action: "list", month: "2026-11", idToken: "good-other" });
    assert.deepEqual(r.body.items.map((i) => i.id), ["x1"]);
});
