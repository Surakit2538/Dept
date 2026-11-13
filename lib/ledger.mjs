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

// ============================================================
// ส่วนที่ 2: ตัวเลขชุดเดียวทุกหน้า (เว็บ, Widget, LINE, เตือนหนี้) + กระเป๋าของฉัน
// ============================================================

/** ปัดสตางค์เป็นบาทสำหรับ "ตัวเลขหลักที่โชว์" ต่ำกว่า 1 บาท = 0 (เคลียร์แล้ว) */
export function displayBaht(satang) {
    const s = Number(satang) || 0;
    if (Math.abs(s) < 100) return 0;
    return Math.round(s / 100);
}

/** ส่วนที่สมาชิกต้องรับผิดชอบในบิลหนึ่ง (สตางค์) บิลไม่มี splits = ผู้จ่ายรับเต็ม (เป็นรายจ่ายของตัวเอง) */
export function shareOf(t, memberName) {
    if (!t) return 0;
    const key = normalizeName(memberName);
    const entries = t.splits && typeof t.splits === "object" ? Object.entries(t.splits) : [];
    if (entries.length === 0) return normalizeName(t.payer) === key ? toSatang(t.amount) : 0;
    let sum = 0;
    for (const [name, share] of entries) if (normalizeName(name) === key) sum += toSatang(share);
    return sum;
}

/** ยอดที่สมาชิกจ่ายออกไปในบิลหนึ่ง (สตางค์) */
export function paidBy(t, memberName) {
    if (!t) return 0;
    return normalizeName(t.payer) === normalizeName(memberName) ? toSatang(t.amount) : 0;
}

const inMonth = (dateOrMonth, month) => typeof dateOrMonth === "string" && dateOrMonth.startsWith(month);

/**
 * สรุปของสมาชิกหนึ่งคนในเดือนหนึ่ง (สตางค์)
 * balance = paid − share + sent − received (ตรงกับ computeMonthBalances)
 */
export function memberMonthSummary({ name, transactions = [], settlements = [], month }) {
    const key = normalizeName(name);
    let paid = 0;
    let share = 0;
    for (const t of transactions) {
        if (!t || !inMonth(t.date, month)) continue;
        paid += paidBy(t, key);
        share += shareOf(t, key);
    }
    let sent = 0;
    let received = 0;
    for (const s of settlements) {
        if (!s || s.status !== "verified" || s.month !== month) continue;
        const sat = toSatang(s.amount);
        if (normalizeName(s.from) === key) sent += sat;
        if (normalizeName(s.to) === key) received += sat;
    }
    // บิลไม่มี splits: จ่ายเต็ม/รับเต็มหักล้างกันเอง จึงไม่กระทบ balance
    const balance = paid - share + sent - received;
    return { name: key, month, paid, share, sent, received, balance };
}

/** ledger ของเดือนหนึ่งแบบครบ: ยอดสุทธิทุกคน + แผนโอน + คำเตือน + บรรทัดสรุปต่อคน (มี displayBalance ปัดบาท) */
export function computeMonthLedger({ memberNames = [], transactions = [], settlements = [], month }) {
    const { balances, warnings } = computeMonthBalances({ memberNames, transactions, settlements, month });
    const plan = buildSettlementPlan(balances);
    const members = Object.keys(balances).sort().map((n) => {
        const s = memberMonthSummary({ name: n, transactions, settlements, month });
        const displayBalance = displayBaht(balances[n]);
        return { ...s, balance: balances[n], displayBalance, cleared: displayBalance === 0 };
    });
    return { month, balances, plan, warnings, members };
}

/** ยอดค้างของทุกเดือนที่มีข้อมูล (แยกรายเดือน ไม่ยกยอด) เรียงเดือนล่าสุดก่อน เฉพาะเดือนที่ยังมียอดต้องโอน */
export function outstandingByMonth({ memberNames = [], transactions = [], settlements = [] }) {
    const months = new Set();
    for (const t of transactions) if (t && typeof t.date === "string" && t.date.length >= 7) months.add(t.date.slice(0, 7));
    for (const s of settlements) if (s && typeof s.month === "string") months.add(s.month);
    return [...months]
        .sort()
        .reverse()
        .map((month) => computeMonthLedger({ memberNames, transactions, settlements, month }))
        .filter((l) => l.plan.length > 0)
        .map((l) => ({ month: l.month, plan: l.plan, balances: l.balances }));
}

/**
 * กระเป๋าของฉันในเดือนหนึ่ง (สตางค์)
 * - income: รายรับ (wallet_entries type=income) — เงินที่เพื่อนโอนคืนหนี้ไม่ใช่รายรับ แยกเป็น receivedBack
 * - personalExpense: รายจ่ายส่วนตัว (wallet_entries type=expense)
 * - groupShare: ส่วนของฉันในบิลกลุ่ม (นับเป็นรายจ่ายอัตโนมัติ)
 * - net = income − (personalExpense + groupShare)
 * - receivedBack / paidBack: เงินที่เพื่อนคืนฉัน / ที่ฉันโอนคืนเพื่อน (แสดงเฉยๆ ไม่นับเป็นรายรับ/รายจ่าย)
 * รายการกระเป๋าที่ dedupKey หรือ transRef ซ้ำกัน นับครั้งเดียว
 */
export function walletMonth({ name, month, walletEntries = [], transactions = [], settlements = [] }) {
    const key = normalizeName(name);
    const seen = new Set();
    let income = 0;
    let personalExpense = 0;
    for (const e of walletEntries) {
        if (!e || normalizeName(e.ownerName) !== key) continue;
        if (!inMonth(e.date || e.month, month)) continue;
        const dedup = e.dedupKey || e.transRef;
        if (dedup) {
            if (seen.has(dedup)) continue;
            seen.add(dedup);
        }
        const sat = toSatang(e.amount);
        if (sat <= 0) continue;
        if (e.type === "income") income += sat;
        else if (e.type === "expense") personalExpense += sat;
    }
    const m = memberMonthSummary({ name: key, transactions, settlements, month });
    const groupShare = m.share;
    const expenseTotal = personalExpense + groupShare;
    return {
        name: key,
        month,
        income,
        personalExpense,
        groupShare,
        expenseTotal,
        net: income - expenseTotal,
        receivedBack: m.received,
        paidBack: m.sent
    };
}
