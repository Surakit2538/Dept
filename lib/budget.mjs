/**
 * งบรายเดือน + เป้าเก็บเงิน (ฟังก์ชันล้วน ไม่แตะฐานข้อมูล ใช้ทั้งเซิร์ฟเวอร์ เว็บ LINE และ Widget)
 *
 * เก็บเป็นเอกสารเดียวต่อคน คอลเลกชัน wallet_plan (เบราว์เซอร์อ่านเขียนตรงไม่ได้ ต้องผ่าน API)
 *   { ownerName,
 *     budget: { total, cats: { food: 4000, ... } },        งบปกติ ใช้ทุกเดือน (หน่วยบาท 0/ไม่มี = ไม่ตั้ง)
 *     months: { "2026-12": { total, cats } },               งบเฉพาะเดือน (ทับงบปกติทั้งก้อน)
 *     goals: [{ id, name, icon, color, target, deadline:"YYYY-MM"|"", monthly, saved, createdAt, log:[{ at, date, amount }] }] }
 *
 * "ใช้ไป" นับแบบเดียวกับหน้าแรก: รายจ่ายส่วนตัว + ส่วนของฉันในบิลกลุ่ม (หน่วยสตางค์)
 * เงินที่เก็บเข้าเป้าไม่นับเป็นรายจ่าย
 * ห้าม import แพ็กเกจ npm
 */
import { CATEGORY_GROUPS } from "./categories.mjs";

export const PLAN_COL = "wallet_plan";
export const CAT_KEYS = CATEGORY_GROUPS.map((c) => c.key);
export const GOAL_ICONS = ["plane", "shield", "home", "phone", "car", "gift", "heart", "star"];
export const GOAL_COLORS = ["accent", "sun", "receive", "accent2", "navy"];
export const GOAL_MAX = 12;
export const LOG_MAX = 60;
export const MONTHS_MAX = 24;
export const MAX_BAHT = 100000000;
export const NEAR_PERCENT = 80;

const MONTH_RE = /^\d{4}-(0[1-9]|1[0-2])$/;
const sat = (baht) => Math.round((Number(baht) || 0) * 100);

/** รหัสเอกสารของเจ้าของ (ชื่อห้ามมี /) */
export function planDocId(owner) {
    return "p_" + String(owner || "").replace(/\//g, "_").slice(0, 200);
}

/** เงินบาท 2 ตำแหน่ง ช่วง 0..MAX_BAHT ไม่ใช่ตัวเลข = null */
export function cleanBaht(v) {
    if (v === "" || v === null || v === undefined) return 0;
    const n = Math.round(Number(v) * 100) / 100;
    if (!Number.isFinite(n) || n < 0 || n > MAX_BAHT) return null;
    return n;
}

/** งบที่ส่งมาจากเว็บ -> { total, cats } หรือ null ถ้าตัวเลขผิด (หมวดที่เป็น 0 ไม่เก็บ) */
export function cleanBudget(input) {
    const src = input && typeof input === "object" ? input : {};
    const total = cleanBaht(src.total);
    if (total === null) return null;
    const cats = {};
    const rawCats = src.cats && typeof src.cats === "object" ? src.cats : {};
    for (const k of CAT_KEYS) {
        const v = cleanBaht(rawCats[k]);
        if (v === null) return null;
        if (v > 0) cats[k] = v;
    }
    return { total, cats };
}

const isMonth = (m) => typeof m === "string" && MONTH_RE.test(m);
const hasBudget = (b) => Boolean(b && (Number(b.total) > 0 || Object.values(b.cats || {}).some((v) => Number(v) > 0)));

/** เอกสารจากฐานข้อมูล -> รูปที่เว็บใช้ (กันข้อมูลเสีย) */
export function normalizePlan(data) {
    const d = data && typeof data === "object" ? data : {};
    const months = {};
    for (const [m, b] of Object.entries(d.months && typeof d.months === "object" ? d.months : {})) {
        const c = isMonth(m) ? cleanBudget(b) : null;
        if (c) months[m] = c;
    }
    const goals = (Array.isArray(d.goals) ? d.goals : []).filter((g) => g && typeof g.id === "string").map((g) => ({
        id: g.id,
        name: String(g.name || "เป้าหมาย").slice(0, 60),
        icon: GOAL_ICONS.includes(g.icon) ? g.icon : GOAL_ICONS[0],
        color: GOAL_COLORS.includes(g.color) ? g.color : GOAL_COLORS[0],
        target: Number(g.target) || 0,
        deadline: isMonth(g.deadline) ? g.deadline : "",
        monthly: Number(g.monthly) || 0,
        saved: Math.max(0, Number(g.saved) || 0),
        createdAt: String(g.createdAt || ""),
        log: (Array.isArray(g.log) ? g.log : []).filter((x) => x && typeof x.date === "string").map((x) => ({ at: String(x.at || ""), date: x.date, amount: Number(x.amount) || 0 }))
    }));
    return { budget: cleanBudget(d.budget) || { total: 0, cats: {} }, months, goals };
}

/** งบของเดือน: งบเฉพาะเดือน > งบปกติ > ไม่ตั้ง คืน { total, cats, source: "month"|"default"|"none" } */
export function budgetFor(plan, month) {
    const p = plan || {};
    const m = p.months && p.months[month];
    if (hasBudget(m)) return { total: Number(m.total) || 0, cats: { ...(m.cats || {}) }, source: "month" };
    if (hasBudget(p.budget)) return { total: Number(p.budget.total) || 0, cats: { ...(p.budget.cats || {}) }, source: "default" };
    return { total: 0, cats: {}, source: "none" };
}

/** ระดับของแถบ: ok (ปกติ) near (ใช้เกิน 80%) over (เกินงบ) */
export function levelOf(spentSat, budgetSat) {
    if (!(budgetSat > 0)) return "none";
    if (spentSat > budgetSat) return "over";
    return (spentSat / budgetSat) * 100 >= NEAR_PERCENT ? "near" : "ok";
}

const pct = (a, b) => (b > 0 ? Math.round((a / b) * 100) : 0);

/**
 * สถานะงบของเดือน
 * spent = { totalSat, cats: { food: สตางค์, ... } }
 * คืน { set, source, budgetSat, spentSat, leftSat, percent, level, cats: [{ key, budgetSat, spentSat, leftSat, percent, level }] }
 * งบรวมไม่ได้ตั้งแต่ตั้งรายหมวด = ใช้ผลรวมหมวดเป็นงบรวม
 */
export function budgetStatus(budget, spent) {
    const b = budget || { total: 0, cats: {}, source: "none" };
    const catBudgets = Object.fromEntries(CAT_KEYS.map((k) => [k, sat((b.cats || {})[k])]));
    const catSum = Object.values(catBudgets).reduce((a, x) => a + x, 0);
    const budgetSat = sat(b.total) > 0 ? sat(b.total) : catSum;
    const spentSat = Math.max(0, Math.round(Number(spent && spent.totalSat) || 0));
    const spentCats = (spent && spent.cats) || {};
    const cats = CAT_KEYS.filter((k) => catBudgets[k] > 0).map((k) => {
        const s = Math.max(0, Math.round(Number(spentCats[k]) || 0));
        return { key: k, budgetSat: catBudgets[k], spentSat: s, leftSat: catBudgets[k] - s, percent: pct(s, catBudgets[k]), level: levelOf(s, catBudgets[k]) };
    });
    return {
        set: budgetSat > 0,
        source: b.source || "none",
        budgetSat,
        spentSat,
        leftSat: budgetSat - spentSat,
        percent: pct(spentSat, budgetSat),
        level: levelOf(spentSat, budgetSat),
        cats,
        unassignedSat: Math.max(0, budgetSat - catSum)
    };
}

/** จำนวนเดือนจาก a ถึง b นับทั้งสองฝั่ง (a เดือนนี้ b เดือนกำหนด) ถ้า b มาก่อน a = 0 */
export function monthsInclusive(a, b) {
    if (!isMonth(a) || !isMonth(b)) return 0;
    const [ya, ma] = a.split("-").map(Number);
    const [yb, mb] = b.split("-").map(Number);
    return Math.max(0, (yb - ya) * 12 + (mb - ma) + 1);
}

/** ยอดที่เก็บเข้าเป้าในเดือนนั้น (หักที่ถอนแล้ว) หน่วยสตางค์ */
export function savedInMonthSat(goal, month) {
    return (goal && Array.isArray(goal.log) ? goal.log : []).filter((x) => String(x.date).startsWith(month)).reduce((a, x) => a + sat(x.amount), 0);
}

/**
 * สถานะเป้า ณ เดือน month
 * มีกำหนด: ต้องเก็บเดือนละ = ที่ยังขาด ÷ จำนวนเดือนที่เหลือ (นับเดือนนี้ด้วย) ไม่มีกำหนด: ใช้ "ตั้งใจเก็บเดือนละ"
 */
export function goalStatus(goal, month) {
    const g = goal || {};
    const targetSat = sat(g.target);
    const savedSat = sat(g.saved);
    const remainingSat = Math.max(0, targetSat - savedSat);
    const done = targetSat > 0 && savedSat >= targetSat;
    const monthsLeft = g.deadline ? monthsInclusive(month, g.deadline) : 0;
    const late = Boolean(g.deadline) && monthsLeft === 0 && !done;
    let perMonthSat = 0;
    if (!done) perMonthSat = g.deadline ? (monthsLeft > 0 ? Math.ceil(remainingSat / monthsLeft / 100) * 100 : remainingSat) : sat(g.monthly);
    return { targetSat, savedSat, remainingSat, percent: Math.min(100, pct(savedSat, targetSat)), done, monthsLeft, late, perMonthSat, thisMonthSat: savedInMonthSat(g, month) };
}

/** เงินที่ตั้งใจเก็บต่อเดือนรวมทุกเป้า และที่เก็บไปแล้วเดือนนี้ (สตางค์) */
export function savingPlan(goals, month) {
    let planSat = 0;
    let doneSat = 0;
    for (const g of goals || []) {
        const s = goalStatus(g, month);
        if (!s.done) planSat += s.perMonthSat;
        doneSat += s.thisMonthSat;
    }
    return { planSat, doneSat: Math.max(0, doneSat) };
}

/** งบแนะนำ = รายรับ − เงินที่ตั้งใจเก็บต่อเดือน (ค่ารายเดือนประจำนับเป็น "ใช้ไป" อยู่แล้ว จึงไม่หักซ้ำ) ปัดลงหลักร้อย */
export function suggestBudget(incomeSat, goals, month) {
    const left = Math.max(0, Math.round(Number(incomeSat) || 0) - savingPlan(goals, month).planSat);
    return Math.floor(left / 10000) * 10000;
}

/** สร้างรหัสเป้า (ไม่ต้องสุ่มจริงจัง แค่ไม่ซ้ำในเอกสารเดียวกัน) */
export function newGoalId(nowMs, goals = []) {
    let id = "g" + Number(nowMs).toString(36);
    while (goals.some((g) => g.id === id)) id += "x";
    return id;
}

/** ตรวจข้อมูลเป้าจากเว็บ คืน { ok, goal | message } (ไม่แตะ saved/log) */
export function cleanGoalInput(body) {
    const b = body && typeof body === "object" ? body : {};
    const name = String(b.name || "").trim().slice(0, 60);
    if (!name) return { ok: false, message: "ใส่ชื่อเป้าก่อน" };
    const target = cleanBaht(b.target);
    if (!target) return { ok: false, message: "ยอดที่อยากได้ไม่ถูกต้อง" };
    const deadline = b.deadline ? String(b.deadline) : "";
    if (deadline && !isMonth(deadline)) return { ok: false, message: "เดือนที่กำหนดไม่ถูกต้อง" };
    const monthly = deadline ? 0 : cleanBaht(b.monthly);
    if (monthly === null) return { ok: false, message: "ยอดต่อเดือนไม่ถูกต้อง" };
    return {
        ok: true,
        goal: {
            name,
            icon: GOAL_ICONS.includes(b.icon) ? b.icon : GOAL_ICONS[0],
            color: GOAL_COLORS.includes(b.color) ? b.color : GOAL_COLORS[0],
            target,
            deadline,
            monthly
        }
    };
}

/** เก็บเข้า (amount > 0) หรือถอนออก (amount < 0) คืนเป้าใหม่ ถอนเกินที่มีไม่ได้ */
export function applyGoalMove(goal, amount, { date, at }) {
    const a = Math.round(Number(amount) * 100) / 100;
    if (!Number.isFinite(a) || a === 0 || Math.abs(a) > MAX_BAHT) return { ok: false, message: "จำนวนเงินไม่ถูกต้อง" };
    const saved = Math.round((Number(goal.saved) || 0) * 100) / 100;
    if (a < 0 && -a > saved) return { ok: false, message: "ถอนได้ไม่เกินที่เก็บไว้" };
    const log = [{ at, date, amount: a }, ...(Array.isArray(goal.log) ? goal.log : [])].slice(0, LOG_MAX);
    return { ok: true, goal: { ...goal, saved: Math.round((saved + a) * 100) / 100, log } };
}

/** ตัดงบเฉพาะเดือนที่เก่าเกินไป (เก็บไว้ไม่เกิน MONTHS_MAX เดือนล่าสุด) */
export function trimMonths(months) {
    const keys = Object.keys(months || {}).filter(isMonth).sort().slice(-MONTHS_MAX);
    return Object.fromEntries(keys.map((k) => [k, months[k]]));
}

/** ยอดใช้จ่ายรายหมวดจากผลของ monthInsights (lib/line-insights.mjs) */
export function spentFromInsights(ins) {
    const cats = {};
    for (const c of (ins && ins.categories) || []) cats[c.key] = c.satang;
    return { totalSat: (ins && ins.totalSat) || 0, cats };
}
