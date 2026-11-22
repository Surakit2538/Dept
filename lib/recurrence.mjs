/**
 * รอบของรายการที่ทำซ้ำ (ฟังก์ชันล้วน ใช้ทั้ง cron เซิร์ฟเวอร์ และเว็บ) ห้าม import แพ็กเกจ npm
 * แม่แบบ (subscription_templates / wallet_templates) มี:
 *   every      1 | 3 | 6 | 12  (ไม่มี = 1 ทุกเดือน แบบเดิม)
 *   startMonth 1..12           เดือนแรกที่จ่าย (เดือนที่ถึงรอบ = startMonth, +every, ...) ไม่มี = ทุกเดือนถึงรอบ
 *   billingDay 1..31           วันที่ (เดือนที่ไม่มีวันนั้น = วันสุดท้ายของเดือน)
 */
export const EVERY = [1, 3, 6, 12];
export const TH_MONTH = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];

export function everyOf(t) {
    const e = Number(t && t.every);
    return EVERY.includes(e) ? e : 1;
}
export function startOf(t) {
    const m = Number(t && t.startMonth);
    return Number.isInteger(m) && m >= 1 && m <= 12 ? m : 1;
}

/** เดือน "YYYY-MM" ถึงรอบจ่ายของแม่แบบนี้ไหม */
export function isDueMonth(t, month) {
    const e = everyOf(t);
    if (e === 1) return true;
    const m = Number(String(month).slice(5, 7));
    return (((m - startOf(t)) % e) + e) % e === 0;
}

/** เดือนที่จ่ายใน 1 ปี (เลข 1..12 เรียง) */
export function dueMonths(t) {
    return Array.from({ length: 12 }, (_, i) => i + 1).filter((m) => isDueMonth(t, `2000-${String(m).padStart(2, "0")}`));
}

/** จ่ายกี่ครั้งต่อปี */
export const timesPerYear = (t) => 12 / everyOf(t);

/** ป้ายสั้น: "ทุกวันที่ 5" / "ทุก 3 เดือน วันที่ 10" / "ทุก 6 เดือน วันที่ 10" / "ทุกปี 15 มี.ค." */
export function freqLabel(t) {
    const e = everyOf(t);
    const d = Math.min(31, Math.max(1, Number(t && t.billingDay) || 1));
    if (e === 1) return `ทุกวันที่ ${d}`;
    if (e === 12) return `ทุกปี ${d} ${TH_MONTH[startOf(t) - 1]}`;
    return `ทุก ${e} เดือน วันที่ ${d}`;
}
/** ป้ายรอบอย่างเดียว: "" (ทุกเดือน) / "ทุก 3 เดือน" / "ทุก 6 เดือน" / "ทุกปี" */
export function freqTag(t) {
    const e = everyOf(t);
    return e === 1 ? "" : e === 12 ? "ทุกปี" : `ทุก ${e} เดือน`;
}

/** ตรวจค่าจากเว็บ คืน { every, startMonth } หรือ null ถ้าผิด (ไม่ส่งมา = ทุกเดือน) */
export function cleanRecurrence(body, fallbackMonth = 1) {
    const b = body && typeof body === "object" ? body : {};
    if (b.every === undefined || b.every === null || b.every === "") return { every: 1, startMonth: startOf({ startMonth: fallbackMonth }) };
    const e = Number(b.every);
    if (!EVERY.includes(e)) return null;
    const s = b.startMonth === undefined ? Number(fallbackMonth) : Number(b.startMonth);
    if (!Number.isInteger(s) || s < 1 || s > 12) return null;
    return { every: e, startMonth: s };
}
