/**
 * หารบิลตามรายการสินค้า (ฟังก์ชันล้วน ใช้ร่วมเว็บกับเทสต์)
 * - แต่ละรายการแบ่งตาม "จำนวนชิ้น" ที่แต่ละคนได้ (units) เช่น Singha 4 ขวด: GAME 2 BEN 1 NUT 1
 *   รายการชิ้นเดียวที่หลายคนแตะ = หารเท่ากัน (คนละ 1 ส่วน)
 * - ส่วนต่าง = ยอดบิลจริง - ผลรวมรายการ (VAT ค่าบริการ ปัดเศษ ส่วนลด) หารเท่ากันทุกคนที่มีส่วนในบิล
 * - คิดเป็นสตางค์ เศษไล่ให้คนที่ปัดทิ้งมากสุดก่อน ผลรวมเท่ายอดบิลเป๊ะ
 */
import { normalizeName } from "./ledger.mjs";

export const RECEIPT_MAX_ITEMS = 40;
export const RECEIPT_MAX_UNITS = 30;

const sat = (v) => Math.round(Number(v) * 100);
const toNum = (v) => {
    if (typeof v === "number") return v;
    const n = parseFloat(String(v ?? "").replace(/,/g, "").trim());
    return Number.isFinite(n) ? n : NaN;
};

/** จำนวนส่วนที่แตะแบ่งได้: จำนวนเต็ม 2-30 = แบ่งเป็นชิ้น, อื่นๆ (1 ชิ้น, 5.25 กก.) = 1 ส่วนให้หารกัน */
export function unitsOf(item) {
    const q = Number(item && item.qty);
    return Number.isInteger(q) && q >= 2 && q <= RECEIPT_MAX_UNITS ? q : 1;
}

/** ทำความสะอาดรายการ (จาก AI หรือที่พิมพ์เอง) ทิ้งบรรทัดที่ไม่มีชื่อหรือยอด */
export function cleanItems(items) {
    const out = [];
    for (const it of Array.isArray(items) ? items : []) {
        if (!it || typeof it !== "object") continue;
        const name = String(it.name ?? "").replace(/\s+/g, " ").trim().slice(0, 60);
        const amount = Math.round(toNum(it.amount) * 100) / 100;
        let qty = toNum(it.qty);
        if (!Number.isFinite(qty) || qty <= 0) qty = 1;
        qty = Math.round(qty * 1000) / 1000;
        if (!name || !Number.isFinite(amount) || amount <= 0) continue;
        out.push({ name, qty, amount });
        if (out.length >= RECEIPT_MAX_ITEMS) break;
    }
    return out;
}

/** แบ่ง total (สตางค์) ตามน้ำหนัก เศษไล่ให้คนที่ปัดทิ้งมากสุด (เสมอกันใช้ลำดับเดิม) */
function byWeight(total, keys, weights) {
    const wsum = weights.reduce((a, b) => a + b, 0);
    const raw = weights.map((w) => (total * w) / wsum);
    const parts = raw.map((r) => Math.floor(r));
    let left = total - parts.reduce((a, b) => a + b, 0);
    const order = raw.map((r, i) => [r - Math.floor(r), i]).sort((a, b) => b[0] - a[0] || a[1] - b[1]);
    for (let k = 0; left > 0; k = (k + 1) % order.length, left--) parts[order[k][1]] += 1;
    return Object.fromEntries(keys.map((k, i) => [k, parts[i]]));
}

/** หารเท่ากัน (สตางค์ บวกหรือลบได้) คนจ่ายอยู่ท้าย เศษตกกับเพื่อนก่อน เหมือนหารเท่ากันตอนเพิ่มบิล */
function equalSat(total, people, payer) {
    const ordered = people.includes(payer) ? [...people.filter((p) => p !== payer), payer] : people;
    const sign = total < 0 ? -1 : 1;
    const abs = Math.abs(total);
    const base = Math.floor(abs / ordered.length);
    const extra = abs - base * ordered.length;
    return Object.fromEntries(ordered.map((p, i) => [p, sign * (base + (i < extra ? 1 : 0))]));
}

/**
 * คำนวณยอดต่อคน
 * @param {{items:{name,qty,amount,units:Record<string,number>}[], total:number, payer:string}} p
 * @returns {{ok:true, splits:Record<string,number>, extraSat:number, itemsSat:number, people:string[], parts:Record<string,{i:number,sat:number,units:number}[]>, extraOf:Record<string,number>}|{ok:false,error:string}}
 */
export function computeItemSplit({ items, total, payer = "" }) {
    const list = Array.isArray(items) ? items : [];
    if (list.length === 0) return { ok: false, error: "ยังไม่มีรายการ ถ่ายรูปใบเสร็จหรือเพิ่มรายการเอง" };
    const totalSat = sat(total);
    if (!Number.isFinite(totalSat) || totalSat <= 0) return { ok: false, error: "ใส่ยอดเต็มของบิลก่อน" };
    const pay = normalizeName(payer);
    const parts = {};
    const sums = {};
    let itemsSat = 0;
    for (let i = 0; i < list.length; i++) {
        const it = list[i];
        const amountSat = sat(it.amount);
        if (!Number.isFinite(amountSat) || amountSat <= 0) return { ok: false, error: `ใส่ราคาของ ${it.name || "รายการที่ " + (i + 1)}` };
        itemsSat += amountSat;
        const units = {};
        for (const [k, v] of Object.entries(it.units || {})) {
            const n = normalizeName(k);
            const u = Math.floor(Number(v));
            if (n && u > 0) units[n] = (units[n] || 0) + u;
        }
        // คนจ่ายอยู่ท้าย เศษสตางค์ของรายการตกกับเพื่อนก่อน (เหมือนหารเท่ากัน)
        const keys = Object.keys(units).sort((a, b) => (a === pay) - (b === pay));
        if (keys.length === 0) return { ok: false, error: `ยังไม่ได้เลือกว่าใครกิน ${it.name || "รายการที่ " + (i + 1)}` };
        const shares = byWeight(amountSat, keys, keys.map((k) => units[k]));
        for (const k of keys) {
            (parts[k] = parts[k] || []).push({ i, sat: shares[k], units: units[k] });
            sums[k] = (sums[k] || 0) + shares[k];
        }
    }
    const people = Object.keys(sums);
    const extraSat = totalSat - itemsSat;
    if (-extraSat >= itemsSat) return { ok: false, error: "ยอดบิลน้อยกว่ารายการมากเกินไป ตรวจยอดเต็มของบิล" };
    const extraOf = extraSat ? equalSat(extraSat, people, pay) : Object.fromEntries(people.map((p) => [p, 0]));
    const splits = {};
    for (const p of people) {
        const v = sums[p] + extraOf[p];
        if (v <= 0) return { ok: false, error: `ส่วนลดมากกว่ายอดของ ${p} ตรวจราคาอีกครั้ง` };
        splits[p] = v / 100;
    }
    return { ok: true, splits, extraSat, itemsSat, people, parts, extraOf };
}

/** แปลงรายการเงินต่างประเทศเป็นบาทตามสัดส่วน (ยอดใบเสร็จต่างประเทศ -> ยอดบาทที่จ่ายจริง) */
export function convertItems(items, foreignTotal, thbTotal) {
    const f = toNum(foreignTotal);
    const t = toNum(thbTotal);
    if (!(f > 0) || !(t > 0)) return items;
    const rate = t / f;
    return items.map((it) => ({ ...it, amount: Math.round(Number(it.amount) * rate * 100) / 100 }));
}

/** เก็บในบิล (ฟิลด์ receipt): รายการ + ใครได้กี่ชิ้น ไว้ให้เพื่อนเปิดดูทีหลัง */
export function receiptForBill({ items, store = "", cur = "THB", foreignTotal = 0 }) {
    const out = {
        items: items.map((it) => ({
            name: String(it.name).slice(0, 60),
            qty: Number(it.qty) || 1,
            amount: Math.round(Number(it.amount) * 100) / 100,
            units: Object.fromEntries(Object.entries(it.units || {}).map(([k, v]) => [normalizeName(k), Math.floor(Number(v))]).filter(([k, v]) => k && v > 0))
        }))
    };
    if (store) out.store = String(store).slice(0, 60);
    if (cur && cur !== "THB" && foreignTotal > 0) { out.cur = String(cur).slice(0, 3); out.foreignTotal = Number(foreignTotal); }
    return out;
}
