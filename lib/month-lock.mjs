/**
 * ปิดเดือน (เจ้าของเลือกแบบ ก. 22 พ.ย. 2569)
 * - เดือนจบตอนเที่ยงคืนสิ้นเดือน (เวลาไทย) เดือนที่จบแล้ว = "ปิด": เพิ่ม/ลบบิลกลุ่มของเดือนนั้นไม่ได้ ยกเว้นผู้ดูแลหลัก
 *   (แก้ชื่อ/หมวดได้ เพราะไม่กระทบยอด · โอนเคลียร์และส่งสลิปของเดือนเก่ายังทำได้ตามปกติ)
 * - วันที่ 1 เวลา 10 โมง บอทเตือนยอดค้างของเดือนที่เพิ่งปิด (แทนวันที่ 25 เดิม) ยอดจึงไม่เปลี่ยนหลังเตือน
 * กฎ Firestore ทำแบบเดียวกัน (monthStart() ใน firestore.rules) ฟังก์ชันล้วน ทดสอบใน tests/month-lock.test.mjs
 */
export const DEBT_REMIND_DAY = "01";
const TH_M = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];

/** เดือนปัจจุบันตามเวลาไทย "YYYY-MM" */
export function bangkokMonthOf(ms) {
    return new Date(Number(ms) + 7 * 60 * 60 * 1000).toISOString().slice(0, 7);
}

/** เดือนก่อนหน้า "YYYY-MM" */
export function prevMonth(month) {
    const [y, m] = String(month).split("-").map(Number);
    return m === 1 ? `${y - 1}-12` : `${y}-${String(m - 1).padStart(2, "0")}`;
}

/** วันแรกของเดือนที่ยังเปิดอยู่ (บิลกลุ่มต้องลงวันที่ตั้งแต่วันนี้ขึ้นไป) "YYYY-MM-01" */
export function openFrom(ms) {
    return bangkokMonthOf(ms) + "-01";
}

/** วันที่หรือเดือนนี้อยู่ในเดือนที่ปิดแล้วไหม (ค่าแปลก = ไม่ปิด ให้ตัวตรวจอื่นจัดการ) */
export function isClosedMonth(dateOrMonth, ms) {
    const m = String(dateOrMonth || "").slice(0, 7);
    return /^\d{4}-(0[1-9]|1[0-2])$/.test(m) && m < bangkokMonthOf(ms);
}

/** ชื่อเดือนสั้น เช่น "พ.ย. 2569" */
export function monthShortTh(month) {
    const [y, m] = String(month).split("-").map(Number);
    return TH_M[m - 1] ? `${TH_M[m - 1]} ${y + 543}` : String(month);
}

/** ข้อความเมื่อพยายามเพิ่ม/ลบบิลของเดือนที่ปิดแล้ว */
export function closedMonthMessage(dateOrMonth) {
    return `เดือน ${monthShortTh(String(dateOrMonth).slice(0, 7))} ปิดยอดแล้ว เพิ่มหรือลบบิลของเดือนนี้ไม่ได้ (ยอดเคลียร์เงินจะได้ไม่เปลี่ยน) ถ้าจำเป็นให้ผู้ดูแลหลักทำให้`;
}

/** ตอนนี้ต้องเตือนหนี้ไหม และของเดือนไหน (cron รายวัน 10 โมง): วันที่ 1 = เดือนที่เพิ่งปิด */
export function debtReminderMonth(ms) {
    const today = new Date(Number(ms) + 7 * 60 * 60 * 1000).toISOString().slice(0, 10);
    return today.slice(8, 10) === DEBT_REMIND_DAY ? prevMonth(today.slice(0, 7)) : null;
}
