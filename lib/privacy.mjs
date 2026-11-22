/**
 * ซ่อนข้อมูลจริงในฐานข้อมูล: ทุกบิล / ประวัติเคลียร์เงิน / แม่แบบบิลรายเดือน มีป้าย people = ชื่อคนที่เกี่ยวข้อง
 * (ชื่อแบบเดียวกับ token.member ในบัตรผ่านเว็บ: ช่องว่างเดียว ตัวใหญ่) กฎ Firestore ให้อ่านได้เฉพาะคนที่อยู่ใน people
 * ส่วนยอด "ใครต้องโอนให้ใคร" ต้องใช้ข้อมูลทั้งกลุ่ม จึงให้เซิร์ฟเวอร์คำนวณ (action clear-plan) แล้วส่งเฉพาะบรรทัดของคนถาม
 * ฟังก์ชันล้วน ไม่แตะฐานข้อมูล (ทดสอบใน tests/privacy.test.mjs)
 */
import { normalizeName, computeMonthLedger, toDisplayPlan } from "./ledger.mjs";

// สวิตช์เปิดซ่อน (ผู้ดูแลหลักเปิดเองหลังเติมป้ายข้อมูลเก่าครบ) อ่านด้วยเซิร์ฟเวอร์เท่านั้น
export const PRIVACY_COL = "app_config";
export const PRIVACY_ID = "privacy";
// คอลเลกชันที่ต้องมีป้าย people
export const PEOPLE_COLS = ["transactions", "settlements", "subscription_templates"];

const uniq = (names) => [...new Set(names.map(normalizeName).filter(Boolean))].sort();

/** คนที่เกี่ยวข้องกับบิล/แม่แบบ: คนจ่าย + คนหารทุกคน (รวมคนที่ส่วนเป็น 0) */
export function billPeople(t) {
    if (!t || typeof t !== "object") return [];
    const splits = t.splits && typeof t.splits === "object" ? Object.keys(t.splits) : [];
    return uniq([t.payer, ...splits]);
}

/** คนที่เกี่ยวข้องกับประวัติเคลียร์เงิน: คนโอน + คนรับ */
export function settlementPeople(s) {
    if (!s || typeof s !== "object") return [];
    return uniq([s.from, s.to]);
}

/** ป้ายที่ถูกต้องของเอกสารในคอลเลกชันนั้น */
export function peopleFor(col, data) {
    return col === "settlements" ? settlementPeople(data) : billPeople(data);
}

/** ป้ายของเอกสารนี้ตรงแล้วหรือยัง (ใช้ตอนเติมป้ายข้อมูลเก่า เขียนเฉพาะที่ยังไม่ตรง) */
export function peopleUpToDate(col, data) {
    const want = peopleFor(col, data);
    const have = Array.isArray(data && data.people) ? [...data.people].sort() : null;
    return Boolean(have) && have.length === want.length && have.every((n, i) => n === want[i]);
}

/** ใส่ป้าย people ให้เอกสารก่อนเขียน (คืนสำเนาใหม่) */
export function withPeople(col, data) {
    return { ...data, people: peopleFor(col, data) };
}

/**
 * แผนโอนของเดือน (ตัวเลขชุดเดียวกับหน้าเว็บเดิม: ใช้รายชื่อสมาชิกชุดเดียวกัน + computeMonthLedger + ปัดบาท)
 * all=true (ผู้ดูแลหลักที่เปิด ดูข้อมูลของทุกคน) ได้ทุกบรรทัด ไม่งั้นได้เฉพาะบรรทัดที่ตัวเองเป็นคนโอนหรือคนรับ
 */
export function planLinesFor({ name, memberNames, transactions, settlements, month, all = false }) {
    const me = normalizeName(name);
    const { plan } = computeMonthLedger({ memberNames, transactions, settlements, month });
    const lines = toDisplayPlan(plan);
    return all ? lines : lines.filter((l) => l.from === me || l.to === me);
}
