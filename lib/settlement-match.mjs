/**
 * จับคู่สลิปโอนเงินกับหนี้ที่ค้างอยู่ (pure ไม่แตะฐานข้อมูล)
 *
 * กติกา:
 * - คิดหนี้ "หลังหักที่เคลียร์แล้ว" แยกรายเดือน เดือนที่ค้างเก่าสุดก่อน
 * - ผู้รับในสลิปตรงกับเจ้าหนี้คนไหน ให้ใช้บรรทัดของคนนั้นก่อน (ถ้าไม่มีใครตรง ใช้ทุกบรรทัด แล้วให้ผู้เรียกแจ้งว่าชื่อไม่ตรง)
 * - ยอดในสลิปใกล้ยอดค้าง (±1 บาท) = จ่ายครบ บันทึกด้วยยอดค้างเต็ม (เคลียร์พอดี)
 * - ยอดน้อยกว่ายอดค้างเกิน 1 บาท = จ่ายบางส่วน บันทึกด้วยยอดในสลิป และบอกยอดที่เหลือ
 * - ยอดมากกว่ายอดค้างทุกบรรทัด = ปฏิเสธ (overpay)
 */
import { computeMonthBalances, buildSettlementPlan, normalizeName, toSatang } from "./ledger.mjs";

export const TOLERANCE_SATANG = 100;

export function matchSlipToDebt({ memberNames = [], transactions = [], settlements = [], fromName, amount, receiverMatches = null }) {
    const from = normalizeName(fromName);
    const slipSatang = toSatang(amount);

    const months = [...new Set(
        transactions.map((t) => (t && typeof t.date === "string" ? t.date.slice(0, 7) : null)).filter(Boolean)
    )].sort(); // เก่าสุดก่อน

    const candidates = [];
    for (const month of months) {
        const { balances } = computeMonthBalances({ memberNames, transactions, settlements, month });
        const plan = buildSettlementPlan(balances);
        const transactionIds = transactions.filter((t) => t && typeof t.date === "string" && t.date.startsWith(month)).map((t) => t.id);
        for (const line of plan) {
            if (line.from === from) candidates.push({ month, to: line.to, lineSatang: line.amountSatang, transactionIds });
        }
    }

    if (candidates.length === 0) return { ok: false, reason: "no_debt" };

    let pool = candidates;
    if (typeof receiverMatches === "function") {
        const matched = candidates.filter((c) => receiverMatches(c.to));
        if (matched.length > 0) pool = matched;
    }

    // ยอดที่เว็บแสดงเป็นบาทเต็ม จึงเทียบทั้งยอดเป๊ะและยอดที่ปัดเป็นบาท
    const near = (c) =>
        Math.min(Math.abs(c.lineSatang - slipSatang), Math.abs(Math.round(c.lineSatang / 100) * 100 - slipSatang)) <= TOLERANCE_SATANG;

    const full = pool.find(near);
    if (full) {
        return {
            ok: true,
            settlement: {
                from, to: full.to, month: full.month, transactionIds: full.transactionIds,
                amount: full.lineSatang / 100, partial: false, slipAmount: slipSatang / 100
            }
        };
    }

    const partial = pool.find((c) => slipSatang < c.lineSatang - TOLERANCE_SATANG);
    if (partial) {
        return {
            ok: true,
            settlement: {
                from, to: partial.to, month: partial.month, transactionIds: partial.transactionIds,
                amount: slipSatang / 100, partial: true, remaining: (partial.lineSatang - slipSatang) / 100, slipAmount: slipSatang / 100
            }
        };
    }

    return { ok: false, reason: "overpay", owed: Math.max(...pool.map((c) => c.lineSatang)) / 100 };
}
