// ข้อความด้านล่างคัดจากภาพที่เจ้าของส่งมาจริง (SMS KTC, CardX, ttb, UOB และแจ้งเตือนแอป ttb, SCB Connect)
import test from "node:test";
import assert from "node:assert/strict";
import { parseCardAlert, cleanMerchant, merchantSimilar, scrubOtp } from "../lib/card-alert.mjs";
import { EMAIL_KTC, EMAIL_CARDX_USD, EMAIL_KPLUS_BILL, EMAIL_KPLUS_TRANSFER, EMAIL_SCB_TOPUP } from "./email-samples.mjs";

const NOW = new Date("2026-11-18T00:00:00+07:00"); // เวลาจำลอง (ตรวจว่าวันที่ในข้อความสมเหตุสมผล)

test("KTC: ขอบคุณที่ใช้บัตร (ตัดเงินแล้ว)", () => {
    const r = parseCardAlert("ขอบคุณที่ใช้บัตร KTC X-5703 ยอด 399 THB @Google YouTubePremiu");
    assert.equal(r.kind, "expense");
    assert.equal(r.amount, 399);
    assert.equal(r.merchant, "Google YouTubePremiu");
    assert.equal(r.card, "KTC-5703");
    assert.equal(r.bank, "KTC");
    assert.equal(r.otp, false);
});

test("KTC: ยอดมีหลักพัน + ตัดรหัสท้ายร้าน", () => {
    const r = parseCardAlert("ขอบคุณที่ใช้บัตร KTC X-5703 ยอด 1,000 THB @Google CLOUD KSKR6H");
    assert.equal(r.amount, 1000);
    assert.equal(r.merchant, "Google CLOUD");
});

test("KTC: SMS ที่มี OTP (ซื้อออนไลน์) แกะยอดและร้าน ตัด AMP*", () => {
    const r = parseCardAlert("บัตร KTC ยอด 1,303.32 THB OTP=280447 สำหรับ AMP*3BB FIBRE3 ห้ามเปิดเผยรหัส (Ref.HRJOKI)");
    assert.equal(r.kind, "expense");
    assert.equal(r.amount, 1303.32);
    assert.equal(r.merchant, "3BB FIBRE3");
    assert.equal(r.otp, true);
    assert.equal(r.bank, "KTC");
    const r2 = parseCardAlert("บัตร KTC ยอด 533.93 THB OTP=016817 สำหรับ AMP*AIS SERVICE ห้ามเปิดเผยรหัส (Ref.KYBBYC)");
    assert.equal(r2.amount, 533.93);
    assert.equal(r2.merchant, "AIS SERVICE");
});

test("KTC: ซ่อน OTP ในเครื่องแล้ว ยังแกะได้เหมือนเดิม", () => {
    const r = parseCardAlert(scrubOtp("บัตร KTC ยอด 533.93 THB OTP=016817 สำหรับ AMP*AIS SERVICE ห้ามเปิดเผยรหัส (Ref.KYBBYC)"));
    assert.equal(r.amount, 533.93);
    assert.equal(r.merchant, "AIS SERVICE");
});

test("CardX: รหัส OTP ซื้อออนไลน์", () => {
    const r = parseCardAlert("โปรดตรวจสอบก่อนยืนยันธุรกรรม บัตร CardX XX-8642 จำนวน 2246 THB รหัส OTP=164102 ใช้ใน 5 นาที ห้ามบอก OTP นี้ แก่ผู้อื่น @THE REVENUE DEPARTMENT Ref:Qvfhw หากไม่ได้ทำรายการโทร. 1468");
    assert.equal(r.kind, "expense");
    assert.equal(r.amount, 2246);
    assert.equal(r.merchant, "THE REVENUE DEPARTMENT");
    assert.equal(r.card, "CardX-8642");
    assert.equal(r.otp, true);
});

test("ttb: ยอดชำระ THB0 (เช็กบัตรเฉยๆ) ข้ามเงียบ", () => {
    const r = parseCardAlert("ยอดชำระของคุณคือ THB0 และรหัส OTP คือ 453938 (AwFGQK) กับ LP LINE SERVICES จากบัตรเครดิต ttb หมายเลข 405016******0518");
    assert.deepEqual(r, { kind: "ignore", reason: "zero_amount" });
});

test("ttb: ถ้ายอดชำระมากกว่า 0 ให้บันทึก ร้านอยู่ระหว่าง 'กับ' และ 'จากบัตร'", () => {
    const r = parseCardAlert("ยอดชำระของคุณคือ THB250.50 และรหัส OTP คือ 482243 (ziOHla) กับ SHOPEE จากบัตรเครดิต ttb หมายเลข 405016******0518");
    assert.equal(r.amount, 250.5);
    assert.equal(r.merchant, "SHOPEE");
    assert.equal(r.card, "ttb-0518");
});

test("ttb: แจ้งเตือนในแอป ใช้จ่ายผ่านบัตร (มีวันเวลา)", () => {
    const r = parseCardAlert("ใช้จ่ายผ่านบัตร ท่านใช้จ่าย 175.00 THB ที่ LPTH*PF_LM_Dragon W58rr - TH ผ่านบัตรเครดิต ทีทีบี หมายเลข xx0518 (17/11/2026@13:23) หากมีข้อสงสัยโทร 1428", NOW);
    assert.equal(r.kind, "expense");
    assert.equal(r.amount, 175);
    assert.equal(r.merchant, "LINE MAN Dragon");
    assert.equal(r.card, "ttb-0518");
    assert.equal(r.date, "2026-11-17");
    assert.equal(r.time, "13:23");
});

test("SCB Connect: รายการเงินออกจากบัญชี (จากข้อความภาพหน้าจอ)", () => {
    const text = `รายการเงินออก
-25.00 บาท
จากบัญชี X-6172
รายการ DSC-จ่ายบิล TRUE LIFESTYLE RETAIL COMPANY LIMITED
วันที่/เวลา 14/11/2026 13:18
ยอดเงินที่ใช้ได้ 223.99 บาท
ดูรายการเดินบัญชี`;
    const r = parseCardAlert(text, NOW);
    assert.equal(r.kind, "expense");
    assert.equal(r.amount, 25);
    assert.equal(r.bank, "SCB");
    assert.equal(r.card, "SCB-6172");
    assert.equal(r.merchant, "จ่ายบิล TRUE LIFESTYLE RETAIL COMPANY LIMITED");
    assert.equal(r.date, "2026-11-14");
});

test("ข้อความที่ต้องข้ามเงียบ: eStatement, โอนชำระบัตร, โอนพร้อมเพย์, อนุมัติบัตร, ยืนยันตัวตน", () => {
    const skip = [
        "Dear customer, your Credit Card eStatement is ready for viewing. Please log in to UOB TMRW or Personal Internet Banking to view your statement.",
        "คุณทำรายการโอนชำระ/ตั้งชำระยอด14780.16 บาทให้กับUOB Master Card เรียบร้อยแล้ว",
        "โอนพร้อมเพย์5000.00บ. ไป x5294 สำเร็จ",
        "KTC อนุมัติบัตรเครดิตเพิ่มให้ท่านแล้ว รอรับบัตรภายใน 7 วันทำการ",
        "ยินดีด้วย!! บัตรเครดิตของท่านได้รับการอนุมัติแล้ว ธนาคารจะจัดส่งบัตรให้ภายใน 7 วันทำการ",
        "ยืนยันตัวตนสำเร็จแล้ว"
    ];
    for (const t of skip) {
        const r = parseCardAlert(t);
        assert.equal(r && r.kind, "ignore", t);
    }
});

test("สลิปโอนเงินจริงและข้อความทั่วไป ไม่ถูกตีเป็นแจ้งเตือนบัตร (คืน null ให้ไปทางสลิป)", () => {
    assert.equal(parseCardAlert(""), null);
    assert.equal(parseCardAlert("สวัสดีครับ วันนี้กินข้าวไหม"), null);
    assert.equal(parseCardAlert("K PLUS\nโอนเงินสำเร็จ\n10 พ.ย. 69 14:23 น.\nไปยัง\nร้าน ข้าวมันไก่ป้าแดง\nจำนวน:\n150.00 บาท\nเลขที่รายการ:\n016314142312345678"), null);
});

test("ล้างชื่อร้าน และเทียบชื่อร้านที่ถูกตัดไม่เท่ากัน", () => {
    assert.equal(cleanMerchant("AMP*AIS SERVICE"), "AIS SERVICE");
    assert.equal(merchantSimilar("Google YouTubePremiu", "YouTube Premium"), true);
    assert.equal(merchantSimilar("3BB FIBRE3", "AMP*3BB FIBRE3"), true);
    assert.equal(merchantSimilar("SHOPEE", "AIS SERVICE"), false);
    assert.equal(merchantSimilar("", "AIS"), false);
});

test("scrubOtp: ซ่อนรหัส OTP ทุกแบบที่เจอในภาพ", () => {
    assert.match(scrubOtp("บัตร KTC ยอด 533.93 THB OTP=016817 สำหรับ AMP*AIS"), /OTP=\*{6}/);
    assert.match(scrubOtp("ยอดชำระของคุณคือ THB0 และรหัส OTP คือ 453938 (AwFGQK)"), /OTP คือ \*{6}/);
    assert.equal(scrubOtp("ขอบคุณที่ใช้บัตร KTC ยอด 399 THB"), "ขอบคุณที่ใช้บัตร KTC ยอด 399 THB");
});


// ---------- อีเมลธนาคาร/บัตร (ข้อความจริงจากภาพหน้าจอ Outlook ของเจ้าของ) ----------
test("อีเมล KTC: บันทึกรายจ่าย ได้ชื่อร้านและบัตร", () => {
    const r = parseCardAlert(EMAIL_KTC, NOW);
    assert.equal(r.kind, "expense");
    assert.equal(r.amount, 399);
    assert.equal(r.merchant, "Google YouTubePremiu");
    assert.equal(r.card, "KTC-1111");
});

test("อีเมล CardX เป็น USD: ข้าม (ยังไม่รู้ยอดบาทจริง) ถ้าเป็นบาท บันทึกพร้อมวันที่", () => {
    const usd = parseCardAlert(EMAIL_CARDX_USD, NOW);
    assert.equal(usd.kind, "ignore");
    assert.equal(usd.reason, "foreign_currency");
    assert.equal(usd.currency, "USD");
    const thb = parseCardAlert(EMAIL_CARDX_USD.replace("20.00 USD", "1,250.50 บาท"), NOW);
    assert.equal(thb.kind, "expense");
    assert.equal(thb.amount, 1250.5);
    assert.equal(thb.merchant, "ANTHROPIC* CLAUDE SUB");
    assert.equal(thb.card, "CardX-2222");
    assert.equal(thb.date, "2026-11-06");
});

test("อีเมล K PLUS ชำระค่าสินค้า: รายจ่าย ร้าน บัญชี วันที่ และเลขที่รายการ (กันซ้ำกับสลิป)", () => {
    const r = parseCardAlert(EMAIL_KPLUS_BILL, NOW);
    assert.equal(r.kind, "expense");
    assert.equal(r.amount, 1387.79);
    assert.equal(r.merchant, "สุกี้ตี๋น้อย-ตะวันนา 2 บางกะปิ");
    assert.equal(r.card, "KBank-1234");
    assert.equal(r.date, "2026-06-13");
    assert.equal(r.time, "19:51");
    assert.equal(r.transRef, "016000000000BQR00001");
});

test("อีเมลโอนเงิน K PLUS และเติมเงินพร้อมเพย์ SCB Easy: ข้าม (สลิปบันทึกแทน)", () => {
    assert.deepEqual(parseCardAlert(EMAIL_KPLUS_TRANSFER, NOW), { kind: "ignore", reason: "transfer" });
    assert.deepEqual(parseCardAlert(EMAIL_SCB_TOPUP, NOW), { kind: "ignore", reason: "wallet_topup" });
});
