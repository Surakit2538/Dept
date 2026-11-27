// โมเดลข้อมูลหน้าแรก (ฟังก์ชันล้วน ไม่แตะเครือข่าย ทดสอบได้) ใช้แกนคำนวณกลาง lib/ledger.mjs ตัวเดียวกับเซิร์ฟเวอร์
import { splitInstallments } from "../../lib/installments.mjs";
import { guessCategoryKey, CATEGORY_GROUPS, CATEGORY_LIST } from "../../lib/categories.mjs";
import { budgetFor, budgetStatus, goalStatus, savingPlan, suggestBudget } from "../../lib/budget.mjs";
import { isDueMonth, everyOf, startOf, freqLabel, freqTag } from "../../lib/recurrence.mjs";
export { freqLabel, freqTag };
import {
    normalizeName, shareOf, paidBy, computeMonthLedger, toDisplayPlan, walletMonth, displayBaht
} from "../../lib/ledger.mjs";

/** หมวดของรายการ จากไอคอนที่เลือกตอนบันทึก (ใช้ชุดไอคอนเดียวกับเว็บเดิม) */
// 6 กลุ่มสรุป สร้างจาก lib/categories.mjs ที่เดียว (ให้ตรงกับ LINE และงบเสมอ)
export const CATEGORIES = CATEGORY_GROUPS.map((g) => ({ key: g.key, label: g.label, icons: g.icons }));

export function categoryOf(icon) {
    const c = CATEGORIES.find((x) => x.icons.includes(icon));
    return c ? c.key : "other";
}

const monthOfDate = (d) => String(d || "").slice(0, 7);

/**
 * @param {{name:string, month:string, today?:string, members:string[], transactions:object[], settlements:object[], walletItems:object[]}} p
 * walletItems: รายการจาก API wallet-list ({type, amount, date, desc, icon?, category?})
 */
export function buildHomeModel({ name, month, today = "", members, transactions, settlements, walletItems = [], planLines = null }) {
    const me = normalizeName(name);
    const ledger = computeMonthLedger({ memberNames: members, transactions, settlements, month });
    const w = walletMonth({
        name: me,
        month,
        walletEntries: walletItems.map((x) => ({ ownerName: me, type: x.type, amount: x.amount, date: x.date })),
        transactions,
        settlements
    });

    // หมวด และรายวัน (หน่วยสตางค์) นับ ส่วนของฉันในกลุ่ม + รายจ่ายส่วนตัว
    const catSat = Object.fromEntries(CATEGORIES.map((c) => [c.key, 0]));
    const daySat = {};
    const dayItems = {};
    const addSpend = (date, desc, icon, sat, kind) => {
        if (!sat || !String(date).startsWith(month)) return;
        catSat[categoryOf(icon)] += sat;
        const d = Number(String(date).slice(8, 10));
        daySat[d] = (daySat[d] || 0) + sat;
        if (!dayItems[d]) dayItems[d] = [];
        dayItems[d].push({ desc: desc || "ไม่ระบุ", icon, satang: sat, kind });
    };
    for (const t of transactions) {
        if (!t || monthOfDate(t.date) !== month) continue;
        addSpend(t.date, t.desc, t.icon, shareOf(t, me), "group");
    }
    for (const x of walletItems) {
        if (x.type === "expense") addSpend(x.date, x.desc, x.icon, Math.round(Number(x.amount) * 100), "personal");
    }
    const totalSat = Object.values(catSat).reduce((a, b) => a + b, 0);
    const categories = CATEGORIES.map((c) => ({
        key: c.key,
        label: c.label,
        satang: catSat[c.key],
        percent: totalSat > 0 ? Math.round((catSat[c.key] / totalSat) * 100) : 0
    })).filter((c) => c.satang > 0).sort((a, b) => b.satang - a.satang);

    const lastDay = today.startsWith(month) ? Number(today.slice(8, 10)) : daysInMonth(month);
    const daily = [];
    for (let d = 1; d <= lastDay; d++) {
        daily.push({
            day: d,
            satang: daySat[d] || 0,
            today: today === `${month}-${String(d).padStart(2, "0")}`,
            items: dayItems[d] || []
        });
    }

    const totalDaysInM = daysInMonth(month);
    const calendarDays = [];
    for (let d = 1; d <= totalDaysInM; d++) {
        calendarDays.push({
            day: d,
            date: `${month}-${String(d).padStart(2, "0")}`,
            satang: daySat[d] || 0,
            today: today === `${month}-${String(d).padStart(2, "0")}`,
            isFuture: today.startsWith(month) && d > Number(today.slice(8, 10)),
            items: dayItems[d] || []
        });
    }
    const spentSat = w.expenseTotal;
    const average = lastDay > 0 ? Math.round(spentSat / lastDay / 100) : 0;

    // หนี้: แผนโอนของเดือน (ปัดบาท) แยกเพื่อนค้างฉัน / ฉันค้างเพื่อน
    // เปิดซ่อนข้อมูลแล้ว: เครื่องเรามีแค่บิลของเรา ยอดโอนมาจากเซิร์ฟเวอร์ (planLines) แทน
    const plan = planLines || toDisplayPlan(ledger.plan);
    const owedToMe = plan.filter((l) => l.to === me).map((l) => ({ name: l.from, amount: l.amount })).sort((a, b) => b.amount - a.amount);
    const iOwe = plan.filter((l) => l.from === me).map((l) => ({ name: l.to, amount: l.amount })).sort((a, b) => b.amount - a.amount);
    const maxOwed = owedToMe[0] ? owedToMe[0].amount : 0;
    owedToMe.forEach((o) => { o.share = maxOwed ? Math.round((o.amount / maxOwed) * 100) : 0; });
    const maxIOwe = iOwe[0] ? iOwe[0].amount : 0;
    iOwe.forEach((o) => { o.share = maxIOwe ? Math.round((o.amount / maxIOwe) * 100) : 0; });

    // รายการล่าสุดของฉัน (กลุ่ม: เฉพาะที่ฉันเกี่ยวข้อง / ส่วนตัว / รายรับ)
    const recent = [];
    for (const t of transactions) {
        if (!t || monthOfDate(t.date) !== month) continue;
        const mine = shareOf(t, me);
        if (mine > 0 || paidBy(t, me) > 0) {
            recent.push({ id: t.id, kind: "group", desc: t.desc || "", icon: t.icon, satang: mine, date: t.date, ts: Number(t.timestamp) || 0 });
        }
    }
    for (const x of walletItems) {
        if (!String(x.date).startsWith(month)) continue;
        recent.push({ id: x.id, kind: x.type === "income" ? "income" : "personal", desc: x.desc || "", icon: x.icon, satang: Math.round(Number(x.amount) * 100), date: x.date, ts: Number(x.timestamp) || 0 });
    }
    recent.sort((a, b) => b.date.localeCompare(a.date) || b.ts - a.ts);

    return {
        month,
        incomeSat: w.income,
        spentSat,
        personalSat: w.personalExpense,
        groupShareSat: w.groupShare,
        netSat: w.net,
        net: displayBaht(w.net),
        spentPercent: w.income > 0 ? Math.min(999, Math.round((spentSat / w.income) * 100)) : null,
        receivedBackSat: w.receivedBack,
        categories,
        daily,
        calendarDays,
        average,
        owedToMe,
        owedTotal: owedToMe.reduce((a, o) => a + o.amount, 0),
        iOwe,
        iOweTotal: iOwe.reduce((a, o) => a + o.amount, 0),
        recent: recent.slice(0, 5),
        warnings: ledger.warnings
    };
}

/**
 * งบและเป้าของเดือน จากแผน (wallet_plan) + โมเดลหน้าแรกของเดือนเดียวกัน (ใช้ยอดใช้ไปและหมวดชุดเดียวกับหน้าแรก)
 * คืน { status, goals: [{ ...goal, s }], saving: { planSat, doneSat }, suggestSat, daysLeft, perDaySat }
 */
export function buildBudgetModel(plan, m, today = "") {
    const month = m.month;
    const cats = {};
    for (const c of m.categories || []) cats[c.key] = c.satang;
    const status = budgetStatus(budgetFor(plan || {}, month), { totalSat: m.spentSat, cats });
    const personal = ((plan && plan.goals) || []).map((g) => ({ ...g, s: goalStatus(g, month) }));
    // เป้าแชร์อยู่ท้ายกอง (ซองหน้าสุด) · เงินเก็บต่อเดือนนับเฉพาะส่วนของฉัน
    const shared = ((plan && plan.shared) || []).map((g) => ({ ...g, s: goalStatus(g, month) }));
    const goals = [...personal, ...shared];
    const own = savingPlan(personal, month);
    let sharedPlanSat = 0;
    let sharedDoneSat = 0;
    for (const g of shared) { if (!g.s.done) sharedPlanSat += Number(g.perPersonSat) || 0; sharedDoneSat += Number(g.mineMonthSat) || 0; }
    const saving = { planSat: own.planSat + sharedPlanSat, doneSat: Math.max(0, own.doneSat + sharedDoneSat) };
    const isNow = today.startsWith(month);
    const daysLeft = isNow ? daysInMonth(month) - Number(today.slice(8, 10)) + 1 : 0;
    return {
        month,
        status,
        goals,
        saving,
        suggestSat: Math.max(0, suggestBudget(m.incomeSat, personal, month) - Math.ceil(sharedPlanSat / 10000) * 10000),
        daysLeft,
        perDaySat: isNow && status.leftSat > 0 && daysLeft > 0 ? Math.floor(status.leftSat / daysLeft / 100) * 100 : 0
    };
}

/**
 * ปฏิทินบิลรายเดือน: จากแม่แบบที่ตั้งให้ทำซ้ำทุกเดือน (กลุ่ม subscription_templates + ส่วนตัว wallet_templates)
 * เฉพาะที่เกี่ยวกับฉัน (อยู่ในคนหาร หรือเป็นคนจ่าย) ยอดที่นับ = ส่วนของฉัน (จ่ายแทนเพื่อน = 0 แต่ยังแสดง)
 * วันตัดเกินวันสุดท้ายของเดือน (เช่น 31 ในเดือน พ.ย.) = วันสุดท้ายของเดือนนั้น เหมือนตอนระบบสร้างบิล
 * cards = สถานะบัตรเครดิตจาก card-list (lib/card-cycle.mjs cardStatus): วันครบกำหนดจ่ายบัตรต่อคิวในการ์ดบิลถัดไปและปฏิทิน
 *   (รอบที่ตัดแล้วยังไม่จ่าย + รอบที่ใช้อยู่) ไม่นับรวมใน totalSat/dueSat เพราะค่ารายเดือนที่ตัดบัตรอยู่ในยอดบัตรแล้ว
 * คืน { month, items (ของเดือนนั้น เรียงตามวัน), totalSat, dueSat (วันนี้ขึ้นไป), upcoming (ตั้งแต่วันนี้ ถึง 2 เดือนข้างหน้า) }
 */
export function buildBillSchedule({ me, month, today, group = [], personal = [], cards = [] }) {
    const my = normalizeName(me);
    const sat = (v) => Math.round((Number(v) || 0) * 100);
    const bills = [];
    for (const t of group) {
        if (!t || t.active === false) continue;
        const splits = t.splits && typeof t.splits === "object" ? t.splits : {};
        const key = Object.keys(splits).find((k) => normalizeName(k) === my);
        const payer = normalizeName(t.payer);
        if (!key && payer !== my) continue;
        bills.push({
            id: "g:" + t.id, kind: "group", desc: String(t.desc || "บิลรายเดือน"), icon: t.icon || "", billingDay: Number(t.billingDay) || 1,
            mySat: key ? sat(splits[key]) : 0, totalSat: sat(t.amount), payer, people: Object.keys(splits).length, names: Object.keys(splits).map(normalizeName), coverFor: !key,
            every: everyOf(t), startMonth: startOf(t)
        });
    }
    for (const t of personal) {
        if (!t || t.active === false) continue;
        bills.push({ id: "p:" + t.id, kind: "personal", desc: String(t.desc || "รายจ่ายรายเดือน"), icon: t.icon || "", billingDay: Number(t.billingDay) || 1, mySat: sat(t.amount), totalSat: sat(t.amount), payer: my, people: 1, coverFor: false, every: everyOf(t), startMonth: startOf(t) });
    }
    const dayIn = (m, d) => Math.min(Math.max(1, Math.round(d) || 1), daysInMonth(m));
    const at = (b, m) => {
        const date = `${m}-${String(dayIn(m, b.billingDay)).padStart(2, "0")}`;
        const daysLeft = Math.round((Date.parse(date + "T00:00:00Z") - Date.parse(today + "T00:00:00Z")) / 86400000);
        return { ...b, date, day: Number(date.slice(8, 10)), daysLeft, status: daysLeft < 0 ? "done" : daysLeft === 0 ? "today" : "soon" };
    };
    const cardItems = cardBills(cards, today);
    // รายการเป็นรอบ (3/6/12 เดือน) ขึ้นเฉพาะเดือนที่ถึงรอบ
    const items = [...bills.filter((b) => isDueMonth(b, month)).map((b) => at(b, month)), ...cardItems.filter((c) => c.date.startsWith(month))]
        .sort((a, b) => a.day - b.day || a.desc.localeCompare(b.desc));
    const nowMonth = today.slice(0, 7);
    const upcoming = [...[nowMonth, shiftMonth(nowMonth, 1), shiftMonth(nowMonth, 2)].flatMap((m) => bills.filter((b) => isDueMonth(b, m)).map((b) => at(b, m))), ...cardItems]
        .filter((x) => x.daysLeft >= 0)
        .sort((a, b) => a.daysLeft - b.daysLeft || b.mySat - a.mySat);
    const monthly = items.filter((x) => x.kind !== "card");
    return {
        month,
        items,
        totalSat: monthly.reduce((a, x) => a + x.mySat, 0),
        dueSat: monthly.filter((x) => x.daysLeft >= 0).reduce((a, x) => a + x.mySat, 0),
        upcoming
    };
}

/** ชื่อบัตร "KTC •• 1234" (เหมือน cardLabel ใน lib/card-cycle.mjs) */
export function cardName(c) {
    const b = c && c.bank && c.bank !== "อื่นๆ" ? c.bank : "บัตร";
    return c && c.last4 ? `${b} •• ${c.last4}` : b;
}
/** "16 ต.ค." */
export function dayShort(date) {
    return `${Number(date.slice(8, 10))} ${monthShort(date.slice(0, 7))}`;
}

/** วันครบกำหนดจ่ายบัตร -> รายการในปฏิทินบิล (รอบที่ตัดแล้วยังไม่จ่าย + รอบที่ใช้อยู่) */
function cardBills(cards, today) {
    const out = [];
    for (const c of cards || []) {
        const add = (cyc, pending) => {
            const daysLeft = Math.round((Date.parse(cyc.dueDate + "T00:00:00Z") - Date.parse(today + "T00:00:00Z")) / 86400000);
            out.push({
                id: `c:${c.id}:${cyc.key}`, kind: "card", cardId: c.id, color: c.color, desc: cardName(c), icon: "fa-credit-card",
                date: cyc.dueDate, day: Number(cyc.dueDate.slice(8, 10)), billingDay: c.dueDay, daysLeft,
                status: daysLeft < 0 ? "done" : daysLeft === 0 ? "today" : "soon",
                mySat: Number(cyc.amountSat) || 0, totalSat: Number(cyc.amountSat) || 0, start: cyc.start, end: cyc.end, pending, people: 1, coverFor: false
            });
        };
        if (c.due && !c.due.paid) add(c.due, false);
        if (c.open) add(c.open, true);
    }
    return out;
}

/** คำบรรยายสั้นของบิลรายเดือน: "ส่วนตัว" / "คุณจ่าย หาร 4" / "CARE จ่าย หาร 3" / "คุณจ่ายแทน" / บัตร: "ยอดรอบ 16 ต.ค. - 15 พ.ย." */
export function billWho(b, me) {
    if (b.kind === "card") return b.pending ? `ยังไม่ตัดรอบ (ตัดรอบ ${dayShort(b.end)})` : `ยอดรอบ ${dayShort(b.start)} - ${dayShort(b.end)}`;
    if (b.kind === "personal") return "ส่วนตัว";
    const mine = b.payer === normalizeName(me);
    if (b.coverFor) return "คุณจ่ายแทน";
    return mine ? `คุณจ่าย หาร ${b.people}` : `${b.payer} จ่าย หาร ${b.people}`;
}

export function daysInMonth(month) {
    const [y, m] = month.split("-").map(Number);
    return new Date(Date.UTC(y, m, 0)).getUTCDate();
}

export function shiftMonth(month, delta) {
    const [y, m] = month.split("-").map(Number);
    const total = y * 12 + (m - 1) + delta;
    const ny = Math.floor(total / 12);
    return `${ny}-${String(total - ny * 12 + 1).padStart(2, "0")}`;
}

export const TH_MONTHS = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];
export const TH_MONTHS_FULL = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"];
export function monthLabel(month) {
    const [y, m] = month.split("-").map(Number);
    return `${TH_MONTHS[m - 1]} ${y + 543}`;
}
export function monthFullLabel(month) {
    const [y, m] = month.split("-").map(Number);
    return `${TH_MONTHS_FULL[m - 1]} ${y + 543}`;
}

/** เงินบาท: ตัวเลขหลักปัดบาท รายการแสดงทศนิยม 2 ตำแหน่ง */
export function baht(n, { decimals = 0, sign = false } = {}) {
    const v = Number(n) || 0;
    const s = Math.abs(v).toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
    const prefix = v < 0 ? "-" : sign && v > 0 ? "+" : "";
    return `${prefix}฿${s}`;
}

/** ใช้ไป/รายรับรายเดือน (สตางค์) สำหรับกราฟรายเดือน months เรียงเก่า -> ใหม่ */
export function buildMonthly({ name, months, transactions, settlements, walletItems = [] }) {
    const me = normalizeName(name);
    const entries = walletItems.map((x) => ({ ownerName: me, type: x.type, amount: x.amount, date: x.date }));
    return months.map((month) => {
        const w = walletMonth({ name: me, month, walletEntries: entries, transactions, settlements });
        return { month, spentSat: w.expenseTotal, incomeSat: w.income };
    });
}

/** n เดือนล่าสุดที่จบที่ endMonth (เก่า -> ใหม่) */
export function lastMonths(endMonth, n) {
    return Array.from({ length: n }, (_, i) => shiftMonth(endMonth, i - (n - 1)));
}

/** ชื่อเดือนสั้นๆ ใต้แท่งกราฟ */
export function monthShort(month) {
    return TH_MONTHS[Number(month.slice(5, 7)) - 1];
}

/* ---------- หน้าเคลียร์เงิน ---------- */
export function maskPromptpay(n) {
    const d = String(n || "").replace(/[^0-9]/g, "");
    if (d.length === 10) return d.slice(0, 6) + "XXXX";
    if (d.length === 13) return "X-XXXX-XXXXX-" + d.slice(11, 13) + "-X";
    return d;
}

export function validPromptpay(n) {
    const d = String(n || "").replace(/[^0-9]/g, "");
    return d.length === 10 || d.length === 13 ? d : "";
}

/** ลิงก์รูป QR พร้อมเพย์ (ใช้บริการเดียวกับหน้าเดิม) */
export function promptpayQrUrl(promptpay, amount) {
    const d = validPromptpay(promptpay);
    if (!d || !(Number(amount) > 0)) return "";
    return `https://promptpay.io/${d}/${Number(amount).toFixed(2)}`;
}

/** แผนโอนของเดือน: เรียงรายการของฉันก่อน แยกว่าฉันต้องโอน (pay) / รอรับ (receive) / ของคนอื่น (other) */
export function buildClearModel({ name, month, members, transactions, settlements, planLines = null }) {
    const me = normalizeName(name);
    const plan = planLines || toDisplayPlan(computeMonthLedger({ memberNames: members, transactions, settlements, month }).plan);
    const lines = plan.map((l) => ({
        from: l.from, to: l.to, amount: l.amount,
        role: l.from === me ? "pay" : l.to === me ? "receive" : "other"
    }));
    const order = { pay: 0, receive: 1, other: 2 };
    lines.sort((a, b) => order[a.role] - order[b.role] || b.amount - a.amount);
    const history = (settlements || [])
        .filter((s) => s && s.status === "verified" && s.month === month)
        .map((s) => ({ id: s.id, from: s.from, to: s.to, amount: Number(s.amount) || 0, manual: Boolean(s.verifiedByAdmin), createdAt: s.createdAt || "" }))
        .sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt)));
    return { lines, history, mineToPay: lines.filter((l) => l.role === "pay"), mineToReceive: lines.filter((l) => l.role === "receive"), cleared: lines.length === 0 };
}

/* ---------- หน้ากระเป๋า ---------- */
export function buildWalletModel({ name, month, walletItems, transactions, settlements }) {
    const me = normalizeName(name);
    const w = walletMonth({
        name: me, month,
        walletEntries: walletItems.map((x) => ({ ownerName: me, type: x.type, amount: x.amount, date: x.date })),
        transactions, settlements
    });
    const items = walletItems
        .filter((x) => String(x.date).startsWith(month))
        .sort((a, b) => b.date.localeCompare(a.date) || (Number(b.timestamp) || 0) - (Number(a.timestamp) || 0))
        .map((x) => ({ id: x.id, type: x.type === "income" ? "income" : "expense", desc: x.desc || "", amount: Number(x.amount) || 0, date: x.date, icon: x.icon || "", card: x.card || "", cardId: x.cardId || "", account: x.account || "", unconfirmed: x.unconfirmed === true, recurring: x.recurring === true || String(x.id || "").startsWith("wsub_"), ts: Number(x.timestamp) || 0 }));
    return {
        incomeSat: w.income, personalSat: w.personalExpense, groupShareSat: w.groupShare, spentSat: w.expenseTotal,
        netSat: w.net, receivedBackSat: w.receivedBack, paidBackSat: w.paidBack, items
    };
}

/* ---------- หน้าบิล ---------- */
export function buildBillsModel({ name, month, transactions, search = "" }) {
    const me = normalizeName(name);
    const q = String(search || "").trim().toUpperCase();
    const list = transactions
        .filter((t) => t && String(t.date || "").startsWith(month))
        .map((t) => ({
            id: t.id, desc: t.desc || "", date: t.date, icon: t.icon || "", payer: t.payer || "",
            amountSat: toSat(t.amount), myShareSat: shareOf(t, me), iPaid: normalizeName(t.payer) === me,
            people: Object.keys(t.splits || {}), splits: t.splits || {}, groupId: t.groupId || "", type: t.paymentType || "normal", ts: Number(t.timestamp) || 0
        }))
        .filter((b) => !q || b.desc.toUpperCase().includes(q) || normalizeName(b.payer).includes(q))
        .sort((a, b) => b.date.localeCompare(a.date) || b.ts - a.ts);
    const mine = list.filter((b) => b.myShareSat > 0 || b.iPaid);
    return { all: list, mine, totalSat: list.reduce((a, b) => a + b.amountSat, 0), myShareSat: mine.reduce((a, b) => a + b.myShareSat, 0) };
}
const toSat = (v) => { const n = Number(v); return Number.isFinite(n) ? Math.round(n * 100) : 0; };

/* ---------- เพิ่มบิลหารกับเพื่อน ---------- */

/** หมวดของบิล: fa คือรหัสไอคอนเดิมที่เก็บใน transactions.icon (หน้าเดิมและสรุปรายเดือนอ่านได้ต่อ) icon คือไอคอน SVG ที่แสดง */
// 40 หมวดที่เลือกได้ (lib/categories.mjs) อื่นๆ อยู่ท้ายสุด
export const BILL_ICONS = CATEGORY_LIST.map((c) => ({ key: c.key, label: c.label, fa: c.fa, icon: c.icon, group: c.group }));

export const guessBillIcon = guessCategoryKey;

/** คนที่หารด้วยบ่อยที่สุดจากบิลที่เราเกี่ยวข้อง (ไว้เสนอเป็นทางลัด ไม่ให้ต้องไล่ดูสมาชิกทั้งกลุ่ม) */
export function suggestPeople({ me, members, transactions, limit = 6 }) {
    const meN = normalizeName(me);
    const valid = new Set((members || []).map(normalizeName));
    const count = new Map();
    for (const t of transactions || []) {
        const names = new Set(Object.keys((t && t.splits) || {}).map(normalizeName));
        names.add(normalizeName(t && t.payer));
        if (!names.has(meN)) continue;
        names.forEach((n) => { if (n && n !== meN && valid.has(n)) count.set(n, (count.get(n) || 0) + 1); });
    }
    return [...count.entries()].sort((a, b) => b[1] - a[1] || (a[0] < b[0] ? -1 : 1)).slice(0, limit).map(([n]) => n);
}

/** แบ่งเท่ากันเป็นสตางค์ เศษไล่ให้คนแรกๆ ผลรวมเท่ายอดเต็มเป๊ะ */
export function equalSplit(amount, people) {
    const total = Math.round(Number(amount) * 100);
    const n = people.length;
    const base = Math.floor(total / n);
    const extra = total - base * n;
    return Object.fromEntries(people.map((p, i) => [p, (base + (i < extra ? 1 : 0)) / 100]));
}

/** แบ่งยอดตามวิธีที่เลือก (ใช้ร่วมตอนเพิ่มบิลและตอนแก้คนหาร) people = ชื่อที่ normalize แล้ว */
function makeSplits({ amount, payer, people, mode, custom }) {
    if (mode === "custom") {
        const splits = {};
        let sum = 0;
        for (const p of people) {
            const v = Math.round(Number((custom || {})[p]) * 100);
            if (!Number.isFinite(v) || v <= 0) return { ok: false, error: `ใส่ยอดของ ${p} ให้มากกว่า 0 (หรือเอาออกจากคนหาร)` };
            splits[p] = v / 100;
            sum += v;
        }
        const diff = Math.round(amount * 100) - sum;
        if (diff !== 0) return { ok: false, error: `ยอดที่แบ่งรวมกัน ${baht(sum / 100, { decimals: 2 })} ไม่เท่ายอดบิล ${baht(amount, { decimals: 2 })} (${diff > 0 ? "ขาด" : "เกิน"} ${baht(Math.abs(diff) / 100, { decimals: 2 })})` };
        return { ok: true, splits };
    }
    // ผู้จ่ายอยู่ท้ายสุด เศษสตางค์จะตกกับเพื่อนก่อน
    const ordered = people.includes(payer) ? [...people.filter((p) => p !== payer), payer] : people;
    return { ok: true, splits: equalSplit(amount, ordered) };
}

/**
 * แก้คนหาร/วิธีหารของบิลที่บันทึกแล้ว (ยอด คนจ่าย วันที่ คงเดิม) กติกาเดียวกับตอนเพิ่มบิล
 * @returns {{ok:true, splits:Record<string,number>}|{ok:false, error:string}}
 */
export function buildSplitEdit({ amount, payer, participants, mode, custom }) {
    const total = Math.round(Number(amount) * 100) / 100;
    if (!Number.isFinite(total) || total <= 0) return { ok: false, error: "ยอดบิลไม่ถูกต้อง" };
    const pay = normalizeName(payer);
    const people = [...new Set((participants || []).map(normalizeName).filter(Boolean))];
    if (people.length === 0) return { ok: false, error: "เลือกคนหารอย่างน้อย 1 คน" };
    if (people.length === 1 && people[0] === pay) return { ok: false, error: "บิลที่มีแต่คนจ่ายคนเดียวไม่ต้องหาร ถ้าไม่มีเพื่อนหารแล้วให้ลบบิลนี้" };
    const customN = {};
    for (const [k, v] of Object.entries(custom || {})) customN[normalizeName(k)] = v;
    return makeSplits({ amount: total, payer: pay, people, mode, custom: customN });
}

/** ยอดที่แบ่งไว้เป็นแบบหารเท่ากันหรือไม่ (ไว้เลือกโหมดเริ่มต้นตอนเปิดหน้าแก้) */
export function isEqualSplit(splits, amount, payer) {
    const people = Object.keys(splits || {}).map(normalizeName);
    if (people.length === 0) return true;
    const pay = normalizeName(payer);
    const ordered = people.includes(pay) ? [...people.filter((p) => p !== pay), pay] : people;
    const eq = equalSplit(amount, ordered);
    const mine = Object.fromEntries(Object.entries(splits).map(([k, v]) => [normalizeName(k), Math.round(Number(v) * 100)]));
    return ordered.every((p) => Math.round(eq[p] * 100) === mine[p]);
}

/**
 * แบ่งยอดงวดอื่นของบิลผ่อนตามสัดส่วนเดียวกับงวดที่แก้ (สตางค์ เศษไล่ให้คนที่ปัดทิ้งมากสุด ผลรวมเท่ายอดงวดเป๊ะ)
 * หารเท่ากันใช้ equalSplit ตรงๆ (คนจ่ายอยู่ท้าย) แบบเดียวกับตอนเพิ่มบิล
 */
export function splitsForAmount({ splits, amount, payer, mode }) {
    const names = Object.keys(splits || {});
    if (mode !== "custom") {
        const pay = normalizeName(payer);
        const ordered = names.includes(pay) ? [...names.filter((p) => p !== pay), pay] : names;
        return equalSplit(amount, ordered);
    }
    const total = Math.round(Number(amount) * 100);
    const weights = names.map((k) => Math.round(Number(splits[k]) * 100));
    const wsum = weights.reduce((a, b) => a + b, 0) || 1;
    const raw = weights.map((w) => (total * w) / wsum);
    const parts = raw.map(Math.floor);
    let left = total - parts.reduce((a, b) => a + b, 0);
    const order = raw.map((r, i) => [r - Math.floor(r), i]).sort((a, b) => b[0] - a[0] || a[1] - b[1]);
    for (let k = 0; left > 0; k = (k + 1) % order.length, left--) parts[order[k][1]] += 1;
    return Object.fromEntries(names.map((k, i) => [k, parts[i] / 100]));
}

/**
 * สร้างเอกสารบิลจากค่าที่กรอก (ไม่แตะฐานข้อมูล)
 * @returns {{ok:true, docs:object[], template:object|null, summary:string}|{ok:false, error:string}}
 */
export function buildBill(f) {
    const amount = Math.round(Number(f.amount) * 100) / 100;
    if (!Number.isFinite(amount) || amount <= 0) return { ok: false, error: "ใส่จำนวนเงินเป็นตัวเลขมากกว่า 0" };
    if (!/^\d{4}-\d{2}-\d{2}$/.test(f.date || "")) return { ok: false, error: "เลือกวันที่ให้ถูกต้อง" };
    if (f.today && f.date > f.today) return { ok: false, error: "เลือกวันที่ไม่เกินวันนี้" };
    const payer = normalizeName(f.payer);
    if (!payer) return { ok: false, error: "เลือกคนจ่าย" };
    const people = [...new Set((f.participants || []).map(normalizeName).filter(Boolean))];
    if (people.length === 0) return { ok: false, error: "เลือกคนหารอย่างน้อย 1 คน" };
    if (people.length === 1 && people[0] === payer) return { ok: false, error: "บิลที่มีแต่ตัวเองคนเดียวไม่ต้องหาร ให้ใช้รายจ่ายส่วนตัวแทน" };

    const made = makeSplits({ amount, payer, people, mode: f.mode, custom: f.custom });
    if (!made.ok) return made;
    const splits = made.splits;

    const desc = String(f.desc || "").trim().slice(0, 100) || "ไม่ระบุ";
    const icon = f.icon || "fa-money-bill";
    const now = f.now || Date.now();
    const base = { payer, icon };

    if (f.type === "installment") {
        const n = Number(f.installments);
        let rows;
        try { rows = splitInstallments({ amount, installments: n, splits, date: f.date }); } catch (e) { return { ok: false, error: e.message }; }
        const groupId = `grp_${now}`;
        return {
            ok: true,
            docs: rows.map((r, i) => ({ ...base, date: r.date, desc: `${desc} (${r.index}/${n})`, amount: r.amount, splits: r.splits, paymentType: "installment", groupId, timestamp: now + i })),
            template: null,
            summary: `ผ่อน ${n} งวด งวดละประมาณ ${baht(amount / n, { decimals: 2 })}`
        };
    }
    if (f.type === "subscription") {
        const groupId = `sub_${now}`;
        const recurring = f.recurring !== false;
        const every = [1, 3, 6, 12].includes(Number(f.every)) ? Number(f.every) : 1;
        const doc = { ...base, date: f.date, desc, amount, splits, paymentType: "subscription", subscriptionRecurring: recurring, subscriptionStartDate: f.date, groupId, timestamp: now };
        const template = recurring ? {
            desc, amount, payer, splits, icon, billingDay: Number(f.date.slice(8, 10)) || 1, groupId, active: true,
            createdAt: new Date(now), createdBy: payer, lastGeneratedMonth: f.date.slice(0, 7),
            every, startMonth: Number(f.date.slice(5, 7)) || 1
        } : null;
        const when = every === 1 ? "ทุกเดือน" : every === 12 ? "ทุกปี" : `ทุก ${every} เดือน`;
        return { ok: true, docs: [doc], template, summary: recurring ? `สร้างซ้ำ${when}อัตโนมัติ` : "ครั้งเดียว" };
    }
    return {
        ok: true,
        docs: [{ ...base, date: f.date, desc, amount, splits, paymentType: "normal", timestamp: now }],
        template: null,
        summary: people.includes(payer) ? `หารกับเพื่อน ${people.length} คน (รวมผู้จ่าย)` : `จ่ายแทน ${people.length} คน (ไม่มีส่วนของผู้จ่าย)`
    };
}
