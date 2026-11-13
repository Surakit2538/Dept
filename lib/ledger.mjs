/**
 * Dept Money - แกนคำนวณหนี้กลาง (pure ไม่มี Node import ไม่แตะฐานข้อมูล ใช้ได้ทั้งเซิร์ฟเวอร์และเบราว์เซอร์)
 *
 * กติกา (ทุกที่ต้องใช้ชุดเดียวกัน):
 * - เงินคิดเป็น "สตางค์" (จำนวนเต็ม) เพื่อไม่ให้เศษทศนิยมคลาดเคลื่อน
 * - ชื่อสมาชิกเทียบแบบ trim + ยุบช่องว่าง + ตัวพิมพ์ใหญ่ (ตรงกับที่เว็บเก็บ)
 * - ยอดของสมาชิกในเดือนหนึ่ง = จ่ายไป − ส่วนที่ต้องรับผิดชอบ + โอนเคลียร์ที่ยืนยันแล้วที่ส่งออก − ที่ได้รับ
 *   (บวก = เพื่อนค้างเรา, ลบ = เราค้างเพื่อน) หนี้คิดแยกรายเดือน
 * - บิลที่ไม่มี splits ไม่นับ (ไม่มีใครต้องรับผิดชอบ) และบันทึกเป็น warning
 */

export function normalizeName(name) {
    return String(name ?? "").replace(/\s+/g, " ").trim().toUpperCase();
}

export function toSatang(value) {
    const n = Number(value);
    return Number.isFinite(n) ? Math.round(n * 100) : 0;
}

export function fromSatang(satang) {
    return satang / 100;
}

/**
 * คำนวณยอดสุทธิของสมาชิกทุกคนในเดือนหนึ่ง
 * @returns {{balances: Record<string, number>, warnings: Array}} balances เป็นสตางค์
 */
export function computeMonthBalances({ memberNames = [], transactions = [], settlements = [], month }) {
    const names = new Set(memberNames.map(normalizeName).filter(Boolean));
    const balances = {};
    names.forEach((n) => { balances[n] = 0; });
    const warnings = [];

    const add = (rawName, delta, ctx) => {
        const key = normalizeName(rawName);
        if (!key) return;
        if (names.has(key)) balances[key] += delta;
        else warnings.push({ type: "unknown_name", name: key, ...ctx });
    };

    for (const t of transactions) {
        if (!t || typeof t.date !== "string" || !t.date.startsWith(month)) continue;
        const entries = t.splits && typeof t.splits === "object" ? Object.entries(t.splits) : [];
        if (entries.length === 0) {
            warnings.push({ type: "no_splits", id: t.id });
            continue;
        }
        const amount = toSatang(t.amount);
        add(t.payer, amount, { id: t.id });
        let sum = 0;
        for (const [name, share] of entries) {
            const sat = toSatang(share);
            sum += sat;
            add(name, -sat, { id: t.id });
        }
        if (Math.abs(sum - amount) > entries.length) {
            warnings.push({ type: "split_mismatch", id: t.id, diffSatang: sum - amount });
        }
    }

    for (const s of settlements) {
        if (!s || s.status !== "verified" || s.month !== month) continue;
        const sat = toSatang(s.amount);
        add(s.from, sat, { id: s.id });
        add(s.to, -sat, { id: s.id });
    }

    return { balances, warnings };
}

/**
 * แผนโอนเงินแบบ greedy คงที่ (เรียงยอดมากไปน้อย เท่ากันเรียงตามชื่อ) ตัดยอดต่ำกว่า minSatang (1 บาท) ทิ้ง
 * @returns {Array<{from:string,to:string,amountSatang:number,amount:number}>}
 */
export function buildSettlementPlan(balances, { minSatang = 100 } = {}) {
    const debtors = [];
    const creditors = [];
    for (const [name, b] of Object.entries(balances)) {
        if (b <= -minSatang) debtors.push({ name, amt: -b });
        else if (b >= minSatang) creditors.push({ name, amt: b });
    }
    const cmp = (a, b) => (b.amt - a.amt) || (a.name < b.name ? -1 : a.name > b.name ? 1 : 0);
    debtors.sort(cmp);
    creditors.sort(cmp);

    const plan = [];
    let i = 0;
    let j = 0;
    while (i < debtors.length && j < creditors.length) {
        const d = debtors[i];
        const c = creditors[j];
        const pay = Math.min(d.amt, c.amt);
        if (pay >= minSatang) {
            plan.push({ from: d.name, to: c.name, amountSatang: pay, amount: pay / 100 });
        }
        d.amt -= pay;
        c.amt -= pay;
        if (d.amt < minSatang) i++;
        if (c.amt < minSatang) j++;
    }
    return plan;
}
