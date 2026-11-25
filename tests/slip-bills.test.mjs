// สลิปจริงจาก SCB 25 พ.ย. 2569 (ชื่อ/เลขเปลี่ยนเป็นค่าสมมติแล้ว): โอนเข้าบัญชีตัวเอง, จ่ายบิลบัตร KTC และกรุงศรี
// เคยพัง: Live Text อ่านป้าย "จาก" "ไปยัง" ติดกัน -> ผู้โอนกลายเป็น "ไปยัง" และบันทึกเป็นรายรับ,
// จ่ายบิลบัตรถูกบันทึกเป็นรายจ่ายซ้ำ, "ชำระ" ที่อ่านเป็น "ชาระ" กลายเป็นหมวดกาแฟ, ชื่อกลางๆ ที่จำไว้ทำให้สลิปอื่นกลายเป็นกาแฟ
import test from "node:test";
import assert from "node:assert/strict";
import { parseSlipText, isCardBillText, cardBillLast4, isCardPaymentPayee, resolveIcon } from "../lib/slip-core.mjs";
import { isGenericName, lookupLearned, rememberName } from "../lib/learned-names.mjs";
import { cardForPayment } from "../lib/card-cycle.mjs";
import { createShortcutHandler } from "../lib/shortcut-service.mjs";
import { createFakeFirestore, createFakeRes } from "./fake-firestore.mjs";

const ME = "ธนกร พงษ์ประเสริฐ";
const SELF_STACKED = `SCB\nโอนเงินสำเร็จ\n25 พ.ย. 2569 - 18:43\nรหัสอ้างอิง: 202611253xrB2SiTEST000001\nจาก\nไปยัง\nนาย ธนกร พ.\nxxx-xxx111-1\nนาย ธนกร พงษ์ประเสริฐ\nx-2222\nจำนวนเงิน\n1,000.00`;
const KTC_BILL = `SCB\nจ่ายบิลสำเร็จ\n25 พ.ย. 2569 - 18:57\nรหัสอ้างอิง: 202611250BMLTEST0000002\nจาก\nนาย ธนกร พ.\nxxx-xxx111-1\nไปยัง\nKRUNGTHAI CARD PUBLIC\nCOMPANY LIMITED\nBiller ID : 010754500011021\nหมายเลขบัตร : 5239 10xx xxxx 4321\nจำนวนเงิน\n917.00`;
const BAY_BILL = `SCB\nจ่ายบิลสำเร็จ\n25 พ.ย. 2569 - 18:56\nรหัสอ้างอิง: 202611255hluTEST0000003\nจาก\nนาย ธนกร พ.\nxxx-xxx111-1\nไปยัง\nบริษัท บัตรกรุงศรีอยุธยา\nบัญชีรับชาระ : xxx-xxx333-3\nหมายเลขบัตร/รหัสลูกค้า/Ref.1 : 5468 48xx xxxx 8765\nจำนวนเงิน\n1,640.51`;

test("ป้ายซ้อน (จาก/ไปยัง ติดกัน): ได้ผู้โอนและผู้รับถูกคน ไม่ใช่คำว่า ไปยัง", () => {
    const p = parseSlipText(SELF_STACKED);
    assert.equal(p.sender, "นาย ธนกร พ.");
    assert.equal(p.payee, "นาย ธนกร พงษ์ประเสริฐ");
});

test("จ่ายบิลบัตร: ชื่อบริษัทบัตร หรือหมายเลขบัตรแบบปิดเลข = จ่ายบิลบัตร ได้เลขท้ายไว้ติ๊กบัตร", () => {
    assert.ok(isCardPaymentPayee("KRUNGTHAI CARD PUBLIC COMPANY LIMITED"));
    assert.ok(isCardPaymentPayee("บริษัท บัตรกรุงศรีอยุธยา"));
    assert.ok(!isCardPaymentPayee("ร้านข้าวมันไก่"));
    assert.ok(isCardBillText(KTC_BILL) && isCardBillText(BAY_BILL));
    assert.ok(!isCardBillText(SELF_STACKED));
    assert.equal(cardBillLast4(KTC_BILL), "4321");
    assert.equal(cardBillLast4(BAY_BILL), "8765");
});

test("ชา ต้องเป็นเครื่องดื่มจริง: ชาระ (Live Text อ่าน ชำระ ผิด) / ชาบู / ชาร์จ ไม่ใช่กาแฟ", () => {
    assert.equal(resolveIcon("บัญชีรับชาระ"), "fa-receipt");
    assert.equal(resolveIcon("ชาบูชิ"), "fa-receipt");
    assert.equal(resolveIcon("ชาไข่มุก"), "fa-mug-hot");
    assert.equal(resolveIcon("ร้าน ชา ป้าแดง"), "fa-mug-hot");
    assert.equal(resolveIcon("Cafe Amazon"), "fa-mug-hot");
});

test("ชื่อกลางๆ (โอนเงิน (SCB), รับจาก ...) ไม่จำ และไม่ใช้ชื่อที่เคยจำไว้", () => {
    assert.ok(isGenericName("โอนเงิน (SCB)") && isGenericName("โอนเงิน") && isGenericName("รับจาก ไปยัง") && isGenericName("จ่ายบิล"));
    assert.ok(!isGenericName("KSHER*SHOP123"));
    const old = [{ k: "expense:โอนเงิน (scb)", desc: "กาแฟ", icon: "fa-mug-hot", at: 1 }];
    assert.equal(lookupLearned(old, "expense", "โอนเงิน (SCB)"), null, "ที่เคยจำผิดไว้ไม่ถูกใช้");
    assert.deepEqual(rememberName(old, { type: "expense", from: "โอนเงิน (SCB)", desc: "ค่าน้ำ", icon: "fa-bolt", at: 2 }), [], "ไม่จำ และล้างของเดิมทิ้ง");
    assert.equal(rememberName([], { type: "expense", from: "KSHER*SHOP123", desc: "กาแฟอเมซอน", icon: "fa-mug-hot", at: 3 }).length, 1);
});

test("ติ๊กบัตรที่จ่ายแล้ว: KRUNGTHAI CARD = KTC, บัตรกรุงศรี = Krungsri (เลือกตามเลขท้ายก่อน)", () => {
    const cards = [
        { id: "k", bank: "KTC", last4: "4321", statementDay: 5, dueDay: 25, paid: {} },
        { id: "b1", bank: "Krungsri", last4: "8765", statementDay: 5, dueDay: 25, paid: {} },
        { id: "b2", bank: "Krungsri", last4: "1111", statementDay: 5, dueDay: 25, paid: {} }
    ];
    const today = "2026-11-20";
    assert.equal(cardForPayment(cards, "KRUNGTHAI CARD PUBLIC COMPANY LIMITED", today), "k");
    assert.equal(cardForPayment(cards, "บริษัท บัตรกรุงศรีอยุธยา 8765", today), "b1");
    assert.equal(cardForPayment(cards, "บริษัท บัตรกรุงศรีอยุธยา", today), "", "กรุงศรีมี 2 ใบ ไม่มีเลขท้าย = ไม่เดา");
});

test("auto (สลิปจริงทั้ง 3 ใบ): ไม่บันทึกอะไรเลย โอนเข้าบัญชีตัวเอง / จ่ายบิลบัตร 2 ใบ", async () => {
    for (const text of [SELF_STACKED, KTC_BILL, BAY_BILL]) {
        const db = createFakeFirestore();
        db.seed("members", "me", { name: "GAME", realName: ME });
        const h = createShortcutHandler({ db: {}, fs: db.fs, env: {}, now: () => Date.parse("2026-11-25T12:00:00Z"), verifyDeviceToken: async () => ({ authenticated: true, memberId: "me", name: "GAME" }) });
        const res = createFakeRes();
        await h({ method: "POST", headers: { authorization: "Bearer x" }, body: { action: "auto", text } }, res);
        assert.equal(res.body.status, "ignored", text.slice(4, 30));
        assert.ok(["self_transfer", "card_payment"].includes(res.body.kind), res.body.kind);
        assert.equal(db.count("wallet_entries"), 0);
    }
});
