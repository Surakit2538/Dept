/**
 * Dept Money - ล้างข้อมูลเก่าอัตโนมัติ (พ่วงกับ cron วันที่ 1 ของทุกเดือน ไม่เพิ่มไฟล์ใน api/)
 *
 * เก็บเดือนปัจจุบันและย้อนหลังรวม keepMonths เดือน (ค่าเริ่มต้น 12 ขั้นต่ำ 6) เดือนที่เก่ากว่านั้นจะถูกลบ:
 *   - รายการกระเป๋าส่วนตัว (wallet_entries) และรายจ่ายส่วนตัวแบบเก่า (personal_expenses): ลบได้เลย
 *   - บิลกลุ่ม (transactions) และการเคลียร์เงิน (settlements) ของเดือนนั้น:
 *       ลบเฉพาะเมื่อ "ทุกคนเคลียร์ครบแล้ว" (ไม่มียอดต้องโอน) ถ้ายังมีหนี้ค้างจะข้ามไว้ หนี้ไม่หาย
 *       ลบเฉพาะเอกสารที่ลงวันที่ในเดือนนั้น (บิลผ่อน/รายเดือนที่มีเดือนอื่นต่อเนื่องไม่ถูกแตะ)
 *   - รายการรอบันทึกสลิป (pending_slips) ที่หมดอายุแล้ว
 * ตรวจย้อนหลัง 3 เดือนล่าสุดที่ลบได้ในแต่ละรอบ เผื่อ cron รอบก่อนพลาด (เดือนที่ลบไปแล้วอ่านได้ 0 รายการ ไม่เปลืองโควต้า)
 * dryRun = true: นับให้ดูอย่างเดียว ไม่ลบจริง
 * ห้าม import แพ็กเกจ npm (ฐานข้อมูลส่งเข้ามาจากภายนอก)
 */
import { WALLET_COL } from "./wallet-service.mjs";
import { computeMonthLedger, normalizeName } from "./ledger.mjs";
import { bangkokMonth } from "./reminders.mjs";

export const DEFAULT_KEEP_MONTHS = 12;
export const MIN_KEEP_MONTHS = 6;
const BATCH_SIZE = 400;
const SWEEP_MONTHS = 3;

export function shiftMonth(month, delta) {
    const [y, m] = String(month).split("-").map(Number);
    const k = y * 12 + (m - 1) + delta;
    return `${Math.floor(k / 12)}-${String((k % 12) + 1).padStart(2, "0")}`;
}

export function createCleanupJob({ db, fs, now = () => new Date(), keepMonths = DEFAULT_KEEP_MONTHS, dryRun = false }) {
    const { collection, getDocs, query, where, writeBatch } = fs;
    const keep = Math.max(MIN_KEEP_MONTHS, Math.floor(Number(keepMonths)) || DEFAULT_KEEP_MONTHS);

    async function deleteRefs(refs) {
        if (dryRun) return;
        for (let i = 0; i < refs.length; i += BATCH_SIZE) {
            const batch = writeBatch(db);
            refs.slice(i, i + BATCH_SIZE).forEach((r) => batch.delete(r));
            await batch.commit();
        }
    }

    const dayRange = (col, month) => query(collection(db, col), where("date", ">=", `${month}-01`), where("date", "<=", `${month}-31`));

    async function cleanMonth(month) {
        const out = { month, wallet: 0, personal: 0, bills: 0, settlements: 0, groupSkipped: false };
        const refs = [];

        const wallet = await getDocs(query(collection(db, WALLET_COL), where("month", "==", month)));
        wallet.docs.forEach((d) => refs.push(d.ref));
        out.wallet = wallet.docs.length;

        const personal = await getDocs(dayRange("personal_expenses", month));
        personal.docs.forEach((d) => refs.push(d.ref));
        out.personal = personal.docs.length;

        const tx = await getDocs(dayRange("transactions", month));
        const st = await getDocs(query(collection(db, "settlements"), where("month", "==", month)));
        if (tx.docs.length > 0 || st.docs.length > 0) {
            const transactions = tx.docs.map((d) => d.data());
            const settlements = st.docs.map((d) => d.data());
            const names = new Set();
            for (const t of transactions) {
                if (t.payer) names.add(normalizeName(t.payer));
                Object.keys(t.splits || {}).forEach((n) => names.add(normalizeName(n)));
            }
            for (const s of settlements) {
                if (s.from) names.add(normalizeName(s.from));
                if (s.to) names.add(normalizeName(s.to));
            }
            const ledger = computeMonthLedger({ memberNames: [...names], transactions, settlements, month });
            if (ledger.plan.length > 0) {
                out.groupSkipped = true; // ยังมีหนี้ค้าง เก็บบิลและการเคลียร์เงินของเดือนนี้ไว้
            } else {
                tx.docs.forEach((d) => refs.push(d.ref));
                st.docs.forEach((d) => refs.push(d.ref));
                out.bills = tx.docs.length;
                out.settlements = st.docs.length;
            }
        }

        await deleteRefs(refs);
        return out;
    }

    return async function run() {
        const newest = shiftMonth(bangkokMonth(now()), -keep); // เดือนล่าสุดที่ลบได้ (เก่ากว่าช่วงที่เก็บไว้)
        const result = { keepMonths: keep, dryRun, months: [], expiredSlips: 0 };
        for (let i = 0; i < SWEEP_MONTHS; i++) result.months.push(await cleanMonth(shiftMonth(newest, -i)));

        const expired = await getDocs(query(collection(db, "pending_slips"), where("expiresAt", "<", now().getTime())));
        result.expiredSlips = expired.docs.length;
        await deleteRefs(expired.docs.map((d) => d.ref));
        return result;
    };
}
