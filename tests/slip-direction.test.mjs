// 2d: จับคู่ชื่อแบบยืดหยุ่น + แยกประเภทสลิป (รายรับ / เพื่อนคืนหนี้ / โอนคืนเพื่อน / รายจ่าย)
import test from "node:test";
import assert from "node:assert/strict";
import { nameMatches, classifyDirection } from "../lib/names.mjs";
import { parseSlipText } from "../lib/slip-core.mjs";
import { matchReceiverName } from "../api/slipok-helpers.js";
import { createShortcutHandler } from "../lib/shortcut-service.mjs";
import { createFakeFirestore, createFakeRes } from "./fake-firestore.mjs";

const ME = { name: "G A M E 👾", realName: "สุรกิจ พัฒนเธียรสกุล" };
const OTHERS = [
    { name: "AOY", realName: "สมหญิง ใจดี" },
    { name: "BEN", realName: "Somchai Jaidee" },
    { name: "NOREAL", realName: "" }
];

test("nameMatches: ตัดคำนำหน้า, ย่อนามสกุล, ชื่อต้องตรง, นามสกุลต่างกัน = ไม่ตรง", () => {
    assert.equal(nameMatches("นาย สุรกิจ พ", "สุรกิจ พัฒนเธียรสกุล").matched, true);
    assert.equal(nameMatches("นาย สุรกิจ พ.", "สุรกิจ พัฒนเธียรสกุล").matched, true);
    assert.equal(nameMatches("น.ส. สมหญิง ใจดี", "สมหญิง ใจดี").confidence >= 0.9, true);
    assert.equal(nameMatches("MR. SOMCHAI JAIDEE", "Somchai Jaidee").matched, true);
    assert.equal(nameMatches("นาย สุรกิจ พ", "สุรกิจ ศรีสุข").matched, false);
    assert.equal(nameMatches("นาย กิตติ ก", "สุรกิจ พัฒนเธียรสกุล").matched, false);
    assert.equal(nameMatches("", "สุรกิจ").matched, false);
    assert.equal(nameMatches("สุรกิจ", "สุรกิจ พัฒนเธียรสกุล").confidence < 0.8, true); // มีแต่ชื่อต้น = มั่นใจน้อยกว่า
});

test("classifyDirection: ครบทุกประเภท", () => {
    const c = (sender, receiver, me = ME) => classifyDirection({ sender, receiver }, me, OTHERS);
    assert.equal(c("นาย กิตติ ก", "นาย สุรกิจ พัฒนเธียรสกุล").kind, "income");
    assert.equal(c("นาย กิตติ ก", "นาย สุรกิจ พัฒนเธียรสกุล").confident, true);
    assert.equal(c("", "นาย สุรกิจ พัฒนเธียรสกุล").confident, false);
    const back = c("นางสาว สมหญิง ใ", "นาย สุรกิจ พัฒนเธียรสกุล");
    assert.deepEqual([back.kind, back.counterparty], ["received_back", "AOY"]);
    const paid = c("นาย สุรกิจ พ", "MR. SOMCHAI JAIDEE");
    assert.deepEqual([paid.kind, paid.counterparty], ["paid_back", "BEN"]);
    assert.equal(c("นาย สุรกิจ พ", "ร้าน ข้าวมันไก่ป้าแดง").kind, "expense");
    assert.equal(c("นาย สุรกิจ พ", "นาย สุรกิจ พัฒนเธียรสกุล").kind, "self_transfer");
    assert.equal(c("นาย สุรกิจ พ", "ร้าน ข้าวมันไก่ป้าแดง", { name: "X" }).reason, "no_real_name"); // ยังไม่ตั้งชื่อจริง → เหมือนเดิม
    assert.equal(c("นาย สุรกิจ พ", "สมศักดิ์ ไม่มีชื่อจริงในระบบ").kind, "expense");
});

test("extractSender ผ่าน parseSlipText: มีป้าย 'จาก' และแบบไม่มีป้าย", () => {
    const withLabel = parseSlipText(["SCB", "จ่ายบิลสำเร็จ", "จาก", "นาย สุรกิจ พ.", "xxx-xxx651-9", "ไปยัง", "METROPOLITAN", "ELECTRICITY AUTHORITY", "จำนวนเงิน", "1,084.97"].join("\n"));
    assert.equal(withLabel.sender, "นาย สุรกิจ พ.");
    assert.equal(withLabel.payee, "METROPOLITAN ELECTRICITY AUTHORITY");
    const noLabel = parseSlipText(["K PLUS", "โอนเงินสำเร็จ", "นาย กิตติ ก", "xxx-x-x1234-x", "ไปยัง", "ร้าน ข้าวมันไก่ป้าแดง", "จำนวน:", "150.00 บาท"].join("\n"));
    assert.equal(noLabel.sender, "นาย กิตติ ก");
});

test("matchReceiverName: ผ่านเมื่อสลิปย่อนามสกุล, ไม่ผ่านเมื่อคนละคน", () => {
    assert.equal(matchReceiverName({ displayName: "นาย สุรกิจ พ", name: "" }, "สุรกิจ พัฒนเธียรสกุล").matched, true);
    assert.equal(matchReceiverName({ displayName: "นาย กิตติ ก", name: "" }, "สุรกิจ พัฒนเธียรสกุล").matched, false);
});

// ---------- ทดสอบผ่านบริการจริง (parse / auto / save) ----------
const NOV13 = Date.parse("2026-11-13T05:00:00Z");
function setup() {
    const db = createFakeFirestore();
    db.seed("members", "me", { name: "G A M E 👾", lineUserId: "U_me", realName: "สุรกิจ พัฒนเธียรสกุล" });
    db.seed("members", "aoy", { name: "AOY", realName: "สมหญิง ใจดี" });
    const handler = createShortcutHandler({
        db: {}, fs: db.fs,
        verifyDeviceToken: async () => ({ authenticated: true, memberId: "me", name: "G A M E 👾" }),
        env: {}, fetchFn: async () => ({ ok: true }), now: () => NOV13
    });
    const call = async (body) => {
        const res = createFakeRes();
        await handler({ method: "POST", headers: { authorization: "Bearer d" }, body }, res);
        return res;
    };
    return { db, call };
}
const slip = (from, to, amount, ref) => ["โอนเงินสำเร็จ", "10 พ.ย. 69 14:23 น.", from, "xxx-x-x1234-x", "ไปยัง", to, "xxx-x-x5678-x", "จำนวน:", amount + " บาท", "เลขที่รายการ:", ref].join("\n");

test("parse: บอกประเภท (kind) ในคำตอบ และเก็บใน pending", async () => {
    const { call, db } = setup();
    const r = await call({ action: "parse", text: slip("นาย กิตติ ก", "นาย สุรกิจ พัฒนเธียรสกุล", "500.00", "REF000000000001") });
    assert.equal(r.body.status, "ok");
    assert.equal(r.body.kind, "income");
    assert.match(r.body.message, /เงินเข้า/);
    assert.equal(db.all("pending_slips")[0].kind, "income");
});

test("auto: เงินเข้าจากคนนอก (มั่นใจ) → บันทึกเป็นรายรับในกระเป๋า ไม่ใช่รายจ่าย", async () => {
    const { call, db } = setup();
    const r = await call({ action: "auto", text: slip("นาย กิตติ ก", "นาย สุรกิจ พัฒนเธียรสกุล", "500.00", "REF000000000002") });
    assert.equal(r.body.status, "saved");
    const w = db.all("wallet_entries");
    assert.equal(w.length, 1);
    assert.deepEqual([w[0].type, w[0].amount, w[0].desc], ["income", 500, "รับจาก นาย กิตติ ก"]);
    assert.equal(db.count("transactions"), 0);
});

test("auto: เพื่อนโอนคืนหนี้ → ไม่นับรายรับ ไม่บันทึกอะไร", async () => {
    const { call, db } = setup();
    const r = await call({ action: "auto", text: slip("นางสาว สมหญิง ใ", "นาย สุรกิจ พัฒนเธียรสกุล", "150.00", "REF000000000003") });
    assert.equal(r.body.status, "ignored");
    assert.match(r.body.message, /AOY/);
    assert.equal(db.count("wallet_entries"), 0);
});

test("auto: โอนให้เพื่อน → ไม่บันทึกเป็นรายจ่าย; โอนเข้าบัญชีตัวเอง → ไม่บันทึก", async () => {
    const { call, db } = setup();
    const a = await call({ action: "auto", text: slip("นาย สุรกิจ พ", "นางสาว สมหญิง ใจดี", "150.00", "REF000000000004") });
    assert.equal(a.body.status, "ignored");
    const b = await call({ action: "auto", text: slip("นาย สุรกิจ พ", "นาย สุรกิจ พัฒนเธียรสกุล", "999.00", "REF000000000005") });
    assert.equal(b.body.status, "ignored");
    assert.equal(db.count("wallet_entries"), 0);
});

test("auto: เงินเข้าแต่ไม่ทราบผู้โอน → ไม่บันทึกเอง (กันผิด) / จ่ายร้านค้า → รายจ่ายส่วนตัวเหมือนเดิม", async () => {
    const { call, db } = setup();
    const unknownSender = ["โอนเงินสำเร็จ", "ไปยัง", "นาย สุรกิจ พัฒนเธียรสกุล", "จำนวน:", "70.00 บาท", "เลขที่รายการ:", "REF000000000006"].join("\n");
    assert.equal((await call({ action: "auto", text: unknownSender })).body.status, "ignored");
    assert.equal(db.count("wallet_entries"), 0);
    const shop = await call({ action: "auto", text: slip("นาย สุรกิจ พ", "ร้าน ข้าวมันไก่ป้าแดง", "60.00", "REF000000000007") });
    assert.equal(shop.body.status, "saved");
    assert.equal(db.all("wallet_entries")[0].type, "expense");
});

test("save splitType=income (กดเลือกเองจากเมนู) → รายรับ", async () => {
    const { call, db } = setup();
    await call({ action: "parse", text: slip("นาย กิตติ ก", "ร้านที่ไม่ใช่เรา", "80.00", "REF000000000008") });
    const s = await call({ action: "save", splitType: "income" });
    assert.equal(s.body.status, "saved");
    assert.equal(db.all("wallet_entries")[0].type, "income");
});
