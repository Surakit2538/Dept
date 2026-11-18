// รายการที่ระบบบันทึกอัตโนมัติ (สลิปตอนปิดแอปธนาคาร, SMS/อีเมลบัตร) = "ยังไม่ยืนยัน" จนกว่าเจ้าของจะยืนยันหรือแก้ไข
import test from "node:test";
import assert from "node:assert/strict";
import { createShortcutHandler, LATEST_AUTO_VERSION } from "../lib/shortcut-service.mjs";
import { createFakeFirestore, createFakeRes } from "./fake-firestore.mjs";

const ME = "GAME";
function setup() {
    const db = createFakeFirestore();
    db.seed("members", "me", { name: ME });
    db.seed("members", "aoy", { name: "AOY" });
    const handler = createShortcutHandler({
        db: {}, fs: db.fs,
        verifyDeviceToken: async (_db, req) => {
            const h = req.headers.authorization;
            if (h === "Bearer me") return { authenticated: true, memberId: "me", name: ME };
            if (h === "Bearer aoy") return { authenticated: true, memberId: "aoy", name: "AOY" };
            return { authenticated: false, status: 401, message: "x" };
        },
        env: {}, fetchFn: async () => ({ ok: true }), now: () => Date.parse("2026-11-17T05:00:00Z")
    });
    const call = async (body, who = "me") => {
        const res = createFakeRes();
        await handler({ method: "POST", headers: { authorization: "Bearer " + who }, body }, res);
        return res;
    };
    return { db, call };
}

const SLIP = `K PLUS
โอนเงินสำเร็จ
17 พ.ย. 69 11:23 น.
ไปยัง
ร้าน ข้าวมันไก่ป้าแดง
จำนวน:
150.00 บาท
เลขที่รายการ:
016314142312345678`;
const SMS = "ขอบคุณที่ใช้บัตร KTC X-5703 ยอด 399 THB @Google YouTubePremiu";

test("สลิปอัตโนมัติ: บันทึกเป็นยังไม่ยืนยัน ตอบรหัสรายการและเวอร์ชันสคริปต์ล่าสุด", async () => {
    const { db, call } = setup();
    const r = await call({ action: "auto", text: SLIP });
    assert.equal(r.body.status, "saved");
    assert.ok(r.body.id, "ต้องมีรหัสรายการไว้ทำปุ่มในแจ้งเตือน");
    assert.equal(r.body.type, "expense");
    assert.equal(r.body.amount, 150);
    assert.equal(r.body.scriptVersion, LATEST_AUTO_VERSION);
    const row = db.all("wallet_entries")[0];
    assert.equal(row.unconfirmed, true);
    assert.equal(row.source, "ios_auto");
});

test("SMS บัตร: บันทึกเป็นยังไม่ยืนยัน และคำตอบที่เงียบก็มีเวอร์ชันสคริปต์", async () => {
    const { db, call } = setup();
    const r = await call({ action: "auto", text: SMS });
    assert.ok(r.body.id);
    assert.equal(db.all("wallet_entries")[0].unconfirmed, true);
    const quiet = await call({ action: "auto", text: "ยืนยันตัวตนสำเร็จแล้ว" });
    assert.equal(quiet.body.message, "");
    assert.equal(quiet.body.scriptVersion, LATEST_AUTO_VERSION);
});

test("สแกนสลิปเองแล้วเลือกส่วนตัว (ไม่ใช่อัตโนมัติ): ไม่ติดป้ายยังไม่ยืนยัน", async () => {
    const { db, call } = setup();
    await call({ action: "parse", text: SLIP });
    await call({ action: "save", splitType: "personal" });
    assert.equal(db.all("wallet_entries")[0].unconfirmed, undefined);
});

test("wallet-list ส่งป้ายยังไม่ยืนยันให้เว็บ และ wallet-confirm ยืนยันได้เฉพาะของตัวเอง", async () => {
    const { db, call } = setup();
    const id = (await call({ action: "auto", text: SMS })).body.id;
    const list = await call({ action: "wallet-list", month: "2026-11" });
    assert.equal(list.body.items.find((x) => x.id === id).unconfirmed, true);
    const other = await call({ action: "wallet-confirm", id }, "aoy");
    assert.equal(other.body.confirmed, 0);
    assert.equal(db.all("wallet_entries")[0].unconfirmed, true);
    const ok = await call({ action: "wallet-confirm", ids: [id] });
    assert.equal(ok.body.confirmed, 1);
    assert.equal(db.all("wallet_entries")[0].unconfirmed, false);
    assert.equal((await call({ action: "wallet-confirm", ids: [] })).statusCode, 400);
});

test("แก้จากหน้าแก้ไข (confirm:true) = ยืนยันด้วย แต่จัดหมวดหลายรายการไม่นับเป็นการยืนยัน", async () => {
    const { db, call } = setup();
    const id = (await call({ action: "auto", text: SMS })).body.id;
    await call({ action: "wallet-update", items: [{ id, icon: "fa-film" }] });
    assert.equal(db.all("wallet_entries")[0].unconfirmed, true);
    await call({ action: "wallet-update", id, confirm: true });
    assert.equal(db.all("wallet_entries")[0].unconfirmed, false);
});

test("wallet-get: ดึงรายการเดียวของตัวเองได้ ของคนอื่นหรือไม่มีอยู่ไม่ได้", async () => {
    const { call } = setup();
    const id = (await call({ action: "auto", text: SMS })).body.id;
    const r = await call({ action: "wallet-get", id });
    assert.equal(r.statusCode, 200);
    assert.equal(r.body.item.id, id);
    assert.equal(r.body.item.unconfirmed, true);
    assert.equal(r.body.item.card, "KTC-5703");
    assert.equal((await call({ action: "wallet-get", id }, "aoy")).statusCode, 403);
    assert.equal((await call({ action: "wallet-get", id: "nope" })).statusCode, 404);
});

test("สลิปโอนให้เพื่อน: ยังไม่บันทึก ส่งชื่อเพื่อนและยอดให้แจ้งเตือน แล้วกด บันทึกเป็นรายจ่าย ได้ภายหลัง", async () => {
    const db = createFakeFirestore();
    db.seed("members", "me", { name: ME, realName: "สุรกิจ พัฒนเธียรสกุล" });
    db.seed("members", "ben", { name: "BEN", realName: "Somchai Jaidee" });
    const handler = createShortcutHandler({
        db: {}, fs: db.fs,
        verifyDeviceToken: async () => ({ authenticated: true, memberId: "me", name: ME }),
        env: {}, fetchFn: async () => ({ ok: true }), now: () => Date.parse("2026-11-17T05:00:00Z")
    });
    const call = async (body) => { const res = createFakeRes(); await handler({ method: "POST", headers: { authorization: "Bearer me" }, body }, res); return res; };
    const slip = "K PLUS\nโอนเงินสำเร็จ\n17 พ.ย. 69 11:23 น.\nจาก\nนาย สุรกิจ พ\nไปยัง\nMR. SOMCHAI JAIDEE\nจำนวน:\n100.00 บาท\nเลขที่รายการ:\n016314142399999999";
    const r = await call({ action: "auto", text: slip });
    assert.equal(r.body.kind, "paid_back");
    assert.equal(r.body.counterparty, "BEN");
    assert.equal(r.body.amount, 100);
    assert.equal(db.count("wallet_entries"), 0, "ยังไม่บันทึกเป็นรายจ่าย");
    const saved = await call({ action: "save", splitType: "personal" });
    assert.equal(saved.body.status, "saved");
    assert.ok(saved.body.id);
    assert.equal(db.count("wallet_entries"), 1);
    assert.equal(db.all("wallet_entries")[0].unconfirmed, undefined, "เจ้าของเลือกเองแล้ว ไม่ต้องติดป้ายยังไม่ยืนยัน");
});
