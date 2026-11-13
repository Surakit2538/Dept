// โมเดลข้อมูลหน้าแรก (ฟังก์ชันล้วน ไม่แตะเครือข่าย ทดสอบได้) ใช้แกนคำนวณกลาง lib/ledger.mjs ตัวเดียวกับเซิร์ฟเวอร์
import {
    normalizeName, shareOf, paidBy, computeMonthLedger, toDisplayPlan, walletMonth, displayBaht
} from "../../lib/ledger.mjs";

/** หมวดของรายการ จากไอคอนที่เลือกตอนบันทึก (ใช้ชุดไอคอนเดียวกับเว็บเดิม) */
export const CATEGORIES = [
    { key: "food", label: "อาหารและเครื่องดื่ม", icons: ["fa-utensils", "fa-mug-hot", "fa-wine-glass"] },
    { key: "bills", label: "บิลและค่าบริการ", icons: ["fa-bolt", "fa-house", "fa-mobile-screen", "fa-mobile-screen-button"] },
    { key: "goods", label: "ของใช้", icons: ["fa-cart-shopping", "fa-basket-shopping", "fa-scissors", "fa-pills", "fa-paw", "fa-gift"] },
    { key: "travel", label: "เดินทาง", icons: ["fa-car", "fa-gas-pump", "fa-bus", "fa-plane"] },
    { key: "other", label: "อื่นๆ", icons: [] }
];

export function categoryOf(icon) {
    const c = CATEGORIES.find((x) => x.icons.includes(icon));
    return c ? c.key : "other";
}

const monthOfDate = (d) => String(d || "").slice(0, 7);

/**
 * @param {{name:string, month:string, today?:string, members:string[], transactions:object[], settlements:object[], walletItems:object[]}} p
 * walletItems: รายการจาก API wallet-list ({type, amount, date, desc, icon?, category?})
 */
export function buildHomeModel({ name, month, today = "", members, transactions, settlements, walletItems = [] }) {
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
    const addSpend = (date, icon, sat) => {
        if (!sat || !String(date).startsWith(month)) return;
        catSat[categoryOf(icon)] += sat;
        const d = Number(String(date).slice(8, 10));
        daySat[d] = (daySat[d] || 0) + sat;
    };
    for (const t of transactions) {
        if (!t || monthOfDate(t.date) !== month) continue;
        addSpend(t.date, t.icon, shareOf(t, me));
    }
    for (const x of walletItems) {
        if (x.type === "expense") addSpend(x.date, x.icon, Math.round(Number(x.amount) * 100));
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
    for (let d = 1; d <= lastDay; d++) daily.push({ day: d, satang: daySat[d] || 0, today: today === `${month}-${String(d).padStart(2, "0")}` });
    const spentSat = w.expenseTotal;
    const average = lastDay > 0 ? Math.round(spentSat / lastDay / 100) : 0;

    // หนี้: แผนโอนของเดือน (ปัดบาท) แยกเพื่อนค้างฉัน / ฉันค้างเพื่อน
    const plan = toDisplayPlan(ledger.plan);
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
        average,
        owedToMe,
        owedTotal: owedToMe.reduce((a, o) => a + o.amount, 0),
        iOwe,
        iOweTotal: iOwe.reduce((a, o) => a + o.amount, 0),
        recent: recent.slice(0, 5),
        warnings: ledger.warnings
    };
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

const TH_MONTHS = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];
export function monthLabel(month) {
    const [y, m] = month.split("-").map(Number);
    return `${TH_MONTHS[m - 1]} ${y + 543}`;
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
