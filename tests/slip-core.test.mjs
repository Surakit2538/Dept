// รันด้วย: node --test tests/
// หมายเหตุ: ข้อความ OCR ด้านล่างเป็นตัวอย่างจำลองตามรูปแบบสลิปทั่วไป ไม่ใช่สลิปจริง
// เมื่อได้ข้อความ OCR จริงที่แกะผิด ให้เพิ่มเป็นเคสใหม่ที่นี่ (ลบข้อมูลส่วนตัวออกก่อน)
import test from "node:test";
import assert from "node:assert/strict";
import {
    parseSlipText,
    buildEqualSplits,
    parseNameList,
    resolveParticipants,
    normalizeOcrText,
    extractAmount
} from "../lib/slip-core.mjs";

const KPLUS = `K PLUS
โอนเงินสำเร็จ
10 พ.ย. 69 14:23 น.
นาย กิตติ ก
xxx-x-x1234-x
ธ.กสิกรไทย
ไปยัง
ร้าน ข้าวมันไก่ป้าแดง
xxx-x-x5678-x
ธ.ไทยพาณิชย์
จำนวน:
150.00 บาท
ค่าธรรมเนียม:
0.00 บาท
เลขที่รายการ:
016314142312345678`;

const SCB = `SCB EASY
โอนเงินสำเร็จ
10 พ.ย. 2569 - 14:23
จาก นาย กิตติ ก
xxx-x-x1234-x
ไปยัง 7-ELEVEN สาขา 123
จำนวนเงิน 1,250.50 บาท
ค่าธรรมเนียม 0.00 บาท
รหัสอ้างอิง 202611101423ABCD1234`;

const TTB = `ttb touch
Transfer successful
10 Nov 2026 14:23
To: MR. SOMCHAI JAIDEE
Amount THB 89.00
Fee THB 0.00
Reference No. 20261110TTB998877`;

const NO_REF = `โอนเงินสำเร็จ
10 พ.ย. 69 14:23 น.
นาย กิตติ ก
ไปยัง นางสาว แมว มาก
จำนวน 300.00 บาท`;

const NOT_SLIP = `Hello world
Photo of a cat
IMG_2026`;

test("K PLUS: ยอด/ธนาคาร/ผู้รับ/เลขอ้างอิง", () => {
    const r = parseSlipText(KPLUS);
    assert.equal(r.amount, 150);
    assert.equal(r.bank, "KBANK");
    assert.equal(r.payee, "ร้าน ข้าวมันไก่ป้าแดง");
    assert.equal(r.transRef, "016314142312345678");
    assert.equal(r.dedupKey, "ref:016314142312345678");
    assert.equal(r.strong, true);
});

test("SCB: ยอดมีคอมมา + ป้ายบรรทัดเดียวกัน", () => {
    const r = parseSlipText(SCB);
    assert.equal(r.amount, 1250.5);
    assert.equal(r.bank, "SCB");
    assert.equal(r.payee, "7-ELEVEN สาขา 123");
    assert.equal(r.transRef, "202611101423ABCD1234");
});

test("ttb: ข้อความอังกฤษ + THB นำหน้า", () => {
    const r = parseSlipText(TTB);
    assert.equal(r.amount, 89);
    assert.equal(r.bank, "TTB");
    assert.equal(r.payee, "MR. SOMCHAI JAIDEE");
    assert.equal(r.transRef, "20261110TTB998877");
});

test("ไม่มีเลขอ้างอิง: ใช้ fingerprint (strong เมื่อมีวันและเวลา)", () => {
    const r = parseSlipText(NO_REF);
    assert.equal(r.amount, 300);
    assert.equal(r.transRef, "");
    assert.match(r.dedupKey, /^fp:[0-9a-f]{32}$/);
    assert.equal(r.strong, true);
    // อ่านซ้ำได้ key เดิม
    assert.equal(parseSlipText(NO_REF).dedupKey, r.dedupKey);
});

test("ไม่มีวันเวลา: fingerprint เป็น weak", () => {
    const r = parseSlipText("ไปยัง ร้านกาแฟ\nจำนวน 60.00 บาท");
    assert.equal(r.amount, 60);
    assert.equal(r.strong, false);
});

test("ไม่ใช่สลิป: ยอดเป็น 0 และไม่มี dedupKey", () => {
    const r = parseSlipText(NOT_SLIP);
    assert.equal(r.amount, 0);
    assert.equal(r.dedupKey, "");
});

test("ข้อความว่าง/ไม่ใช่ string ไม่ทำให้พัง", () => {
    assert.equal(parseSlipText("").amount, 0);
    assert.equal(parseSlipText(null).amount, 0);
    assert.equal(parseSlipText(undefined).amount, 0);
    assert.equal(parseSlipText(12345).amount, 0);
});

test("รับข้อความเป็น array (หลายบล็อกจาก OCR)", () => {
    const r = parseSlipText(["โอนเงินสำเร็จ", "จำนวนเงิน", "45.50 บาท"]);
    assert.equal(r.amount, 45.5);
});

test("เลขไทยถูกแปลงเป็นเลขอารบิก", () => {
    assert.equal(normalizeOcrText("๑๕๐.๐๐"), "150.00");
    assert.equal(parseSlipText("จำนวนเงิน ๑๕๐.๐๐ บาท").amount, 150);
});

test("ไม่เอาค่าธรรมเนียมหรือยอดคงเหลือมาเป็นยอดโอน", () => {
    assert.equal(extractAmount("ค่าธรรมเนียม 5.00 บาท\nยอดคงเหลือ 9,999.00 บาท\nจำนวนเงิน 20.00 บาท"), 20);
    assert.equal(extractAmount("ค่าธรรมเนียม 5.00 บาท"), 0);
});

test("ไม่เอาเวลา/วันที่แบบจุดมาเป็นยอดเงิน", () => {
    assert.equal(extractAmount("เวลา 14.23 น."), 0);
    assert.equal(extractAmount("วันที่ 10.11.2026"), 0);
});

test("หารเท่า: ผลรวมเท่ายอดเดิมเสมอ", () => {
    const s = buildEqualSplits(100, ["A", "B", "C"]);
    const sum = Object.values(s).reduce((a, b) => a + b, 0);
    assert.equal(Math.round(sum * 100), 10000);
    assert.deepEqual(s, { A: 33.34, B: 33.33, C: 33.33 });
    assert.deepEqual(buildEqualSplits(300, ["A", "B"]), { A: 150, B: 150 });
    assert.deepEqual(buildEqualSplits(0.01, ["A", "B"]), { A: 0.01, B: 0 });
});

test("รายชื่อจาก Shortcut: รองรับขึ้นบรรทัดใหม่, ⭐, (ฉัน), ตัวพิมพ์เล็ก", () => {
    assert.deepEqual(parseNameList("⭐ G A M E 👾 (ฉัน)\nboy aoy\n\n  P'CHAMP "), ["G A M E 👾", "BOY AOY", "P'CHAMP"]);
    assert.deepEqual(parseNameList(["aoy", "AOY"]), ["AOY", "AOY"]);
    assert.deepEqual(parseNameList(undefined), []);
});

test("resolveParticipants: ตัดชื่อซ้ำ และแยกชื่อที่ไม่รู้จัก", () => {
    const r = resolveParticipants(["AOY", "AOY", "NOBODY", "TPALM"], ["AOY", "TPALM", "PAJUNT"]);
    assert.deepEqual(r.participants, ["AOY", "TPALM"]);
    assert.deepEqual(r.unknown, ["NOBODY"]);
});

// ---------------------------------------------------------------------------
// รูปแบบสลิปจริงที่ผู้ใช้ส่งมา (SCB จ่ายบิล / K PLUS โอนเงิน) ข้อความด้านล่างเป็นการจำลองลำดับ
// ที่ Live Text น่าจะอ่านได้ ยังไม่ใช่ผลลัพธ์จริงจาก iPhone ถ้าของจริงต่างไป ให้แก้เป็นเคสใหม่
// ---------------------------------------------------------------------------
const SCB_BILL = `SCB
จ่ายบิลสำเร็จ
09 พ.ย. 2569 - 11:54
รหัสอ้างอิง: 202611090WNBHkeUOT0VXV45y
จาก
นาย สุรกิจ พ.
xxx-xxx651-9
ไปยัง
METROPOLITAN
ELECTRICITY AUTHORITY
Biller ID : 099400016520011
อ้างอิง 1 : 010014568000002570
อ้างอิง 2 : 000704339914301069
จำนวนเงิน
1,084.97
ผู้รับเงินสามารถสแกนคิวอาร์โค้ดนี้เพื่อ
ตรวจสอบสถานะการจ่ายเงิน`;

const KPLUS_REAL = `โอนเงินสำเร็จ
6 พ.ย. 69 20:26 น.
K+
นาย สุรกิจ พ
ธ.กสิกรไทย
xxx-x-x7002-x
นาย สุรกิจ พัฒนเธียรสกุล
ธ.ไทยพาณิชย์
xxx-x-x0617-x
เลขที่รายการ:
016310202618COR01495
จำนวน:
10,000.00 บาท
ค่าธรรมเนียม:
0.00 บาท
สแกนตรวจสอบสลิป`;

test("สลิป SCB จ่ายบิลจริง: ยอดไม่มีหน่วย, ผู้รับชื่อยาวหลายบรรทัด, เลขอ้างอิงตัวพิมพ์ผสม", () => {
    const r = parseSlipText(SCB_BILL);
    assert.equal(r.amount, 1084.97);
    assert.equal(r.bank, "SCB");
    assert.equal(r.payee, "METROPOLITAN ELECTRICITY AUTHORITY");
    assert.equal(r.transRef, "202611090WNBHkeUOT0VXV45y");
    assert.equal(r.strong, true);
});

test("สลิป K PLUS จริง: ไม่มีป้าย 'ไปยัง' ใช้ชื่อผู้รับที่ขึ้นหลังสุด, ธนาคารจาก 'ธ.กสิกรไทย'", () => {
    const r = parseSlipText(KPLUS_REAL);
    assert.equal(r.amount, 10000);
    assert.equal(r.bank, "KBANK");
    assert.equal(r.payee, "นาย สุรกิจ พัฒนเธียรสกุล");
    assert.equal(r.transRef, "016310202618COR01495");
    assert.equal(r.slipTime, "20:26");
});

test("ผู้รับหลังป้าย 'ไปยัง' ไม่ดึงวันที่หรือเวลาที่ตามมาต่อท้ายชื่อ", () => {
    const r = parseSlipText("ไปยัง\n7-ELEVEN\n09 พ.ย. 2569\nจำนวนเงิน 50.00 บาท");
    assert.equal(r.payee, "7-ELEVEN");
});
