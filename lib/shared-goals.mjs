/**
 * เป้าเก็บเงินแบบแชร์ (เรื่อง 6, เจ้าของเลือกแบบ A 23 พ.ย. 2569)
 * - คอลเลกชัน shared_goals เอกสารละเป้า เบราว์เซอร์อ่านตรงไม่ได้ (ไม่มีในกฎ Firestore) ผ่าน API เท่านั้น
 * - { name, icon, color, target, deadline, monthly, owner, members[], log[{ id, at, date, amount, by }], createdAt, updatedAt }
 *   ยอดที่เก็บได้ = ผลรวม log (ไม่เก็บยอดแยก) เพิ่ม log ด้วย arrayUnion ทีละรายการ คนใส่พร้อมกันจึงไม่ทับกัน
 * - สมาชิกในเป้าใส่เงินได้ · คนสร้างเป้าถอนได้ทั้งหมด แก้ชื่อ/ยอด/สมาชิก และลบเป้าได้ · สมาชิกคนอื่นกดออกจากเป้าเองได้
 * - ไม่เตือนใน LINE (เจ้าของยังไม่ขอ) ฟังก์ชันล้วน ทดสอบใน tests/shared-goals.test.mjs
 */
import { normalizeName } from "./ledger.mjs";
import { cleanGoalInput, goalStatus, MAX_BAHT } from "./budget.mjs";

export const SHARED_COL = "shared_goals";
export const SHARED_MAX = 12; // เป้าแชร์ที่คนหนึ่งอยู่ได้พร้อมกัน
export const SHARED_MEMBERS_MAX = 20;
export const SHARED_LOG_SHOW = 60;

const sat = (v) => Math.round((Number(v) || 0) * 100);
const baht2 = (s) => Math.round(s) / 100;

/** ตรวจข้อมูลเป้าแชร์ (ใช้ตัวตรวจของเป้าส่วนตัว + รายชื่อเพื่อน) คนสร้างอยู่ในสมาชิกเสมอ ชื่อต้องเป็นสมาชิกกลุ่ม */
export function cleanSharedInput(body, owner, memberNames = []) {
    const c = cleanGoalInput(body);
    if (!c.ok) return c;
    const me = normalizeName(owner);
    const known = new Set(memberNames.map(normalizeName));
    const raw = Array.isArray(body && body.members) ? body.members : [];
    const unknown = raw.map(normalizeName).filter((n) => n && !known.has(n));
    if (unknown.length) return { ok: false, message: `ไม่พบสมาชิกชื่อ ${unknown.join(", ")}` };
    const members = [...new Set([me, ...raw.map(normalizeName).filter(Boolean)])];
    if (members.length < 2) return { ok: false, message: "เลือกเพื่อนที่จะเก็บด้วยอย่างน้อย 1 คน" };
    if (members.length > SHARED_MEMBERS_MAX) return { ok: false, message: `เก็บด้วยกันได้ไม่เกิน ${SHARED_MEMBERS_MAX} คน` };
    return { ok: true, goal: { ...c.goal, members } };
}

/** ยอดรวมในเป้า (สตางค์) */
export function savedSatOf(log) {
    return (Array.isArray(log) ? log : []).reduce((a, x) => a + sat(x.amount), 0);
}

/** ยอดที่แต่ละคนใส่ (เฉพาะเก็บเข้า สตางค์) */
export function depositsBy(log) {
    const out = {};
    for (const x of Array.isArray(log) ? log : []) {
        const a = sat(x.amount);
        if (a > 0) out[normalizeName(x.by)] = (out[normalizeName(x.by)] || 0) + a;
    }
    return out;
}

/** ใส่ (dir in: สมาชิกทุกคน) / ถอน (dir out: เฉพาะคนสร้าง ไม่เกินที่มี) คืนรายการ log ใหม่หนึ่งรายการ */
export function sharedMoveEntry(goal, { amount, dir, by, date, at, rand = "" }) {
    const me = normalizeName(by);
    const members = (goal && goal.members) || [];
    if (!members.includes(me)) return { ok: false, code: 403, message: "คุณไม่ได้อยู่ในเป้านี้" };
    const a = Math.round(Math.abs(Number(amount)) * 100) / 100;
    if (!Number.isFinite(a) || a <= 0 || a > MAX_BAHT) return { ok: false, code: 400, message: "จำนวนเงินไม่ถูกต้อง" };
    if (dir === "out") {
        if (normalizeName(goal.owner) !== me) return { ok: false, code: 403, message: `ถอนออกได้เฉพาะ ${goal.owner} (คนสร้างเป้า)` };
        if (a * 100 > savedSatOf(goal.log)) return { ok: false, code: 400, message: "ถอนได้ไม่เกินที่เก็บไว้" };
    }
    return { ok: true, entry: { id: `${at}-${me.slice(0, 8)}-${rand}`, at, date, amount: dir === "out" ? -a : a, by: me } };
}

/**
 * เป้าแชร์ในมุมของคนหนึ่ง (ส่งให้เว็บ): ยอดรวม ยอดแต่ละคน ส่วนของฉันต่อเดือน และเดือนนี้ฉันใส่แล้วหรือยัง
 * ส่วนของฉันต่อเดือน = ที่ต้องเก็บต่อเดือน ÷ จำนวนคน ปัดขึ้นเป็นบาทเต็ม (เหมือนเป้าส่วนตัว)
 */
export function sharedView(id, d, me, month) {
    const who = normalizeName(me);
    const log = (Array.isArray(d.log) ? d.log : []).slice().sort((a, b) => String(b.at).localeCompare(String(a.at)));
    const members = Array.isArray(d.members) ? d.members : [];
    const saved = baht2(savedSatOf(log));
    const g = { name: d.name, icon: d.icon, color: d.color, target: d.target, deadline: d.deadline || "", monthly: d.monthly || 0, saved, log };
    const s = goalStatus(g, month);
    const n = Math.max(1, members.length);
    const perPersonSat = s.done ? 0 : Math.ceil(s.perMonthSat / n / 100) * 100;
    const mineMonthSat = log.filter((x) => normalizeName(x.by) === who && String(x.date).startsWith(month)).reduce((a, x) => a + sat(x.amount), 0);
    return {
        id, shared: true, name: d.name, icon: d.icon, color: d.color, target: d.target, deadline: d.deadline || "", monthly: d.monthly || 0,
        owner: d.owner, isOwner: normalizeName(d.owner) === who, members, saved,
        bySat: depositsBy(log), mineSat: depositsBy(log)[who] || 0, perPersonSat, mineMonthSat,
        log: log.slice(0, SHARED_LOG_SHOW).map((x) => ({ at: x.at, date: x.date, amount: x.amount, by: x.by }))
    };
}

/** เงินเก็บต่อเดือนของฉันจากเป้าแชร์ (ใช้กับงบแนะนำ/แผนเดือนนี้: นับเฉพาะส่วนของฉัน) สตางค์ */
export function mySharedSaving(shared = []) {
    let planSat = 0;
    let doneSat = 0;
    for (const g of shared) {
        planSat += Number(g.perPersonSat) || 0;
        doneSat += Number(g.mineMonthSat) || 0;
    }
    return { planSat, doneSat };
}
