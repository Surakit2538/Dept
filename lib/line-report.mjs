/**
 * รายงานและการ์ดใน LINE ที่ต้องอ่านฐานข้อมูล (รับ db และ fs เป็นพารามิเตอร์ ทดสอบด้วยฐานข้อมูลจำลองได้)
 * - รายงาน "สรุป" และการ์ดส่วนตัวทั้งหมดใช้ได้เฉพาะแชทส่วนตัว เพราะมีตัวเลขกระเป๋าส่วนตัว
 * - การเตือนต้องผ่านการยืนยัน 2 ขั้น: กด "เตือน" -> บอทถามยืนยัน -> กด "ส่งเตือน" ถึงจะส่งหาเพื่อน
 *   ยอดที่เตือนคำนวณจากฐานข้อมูล ณ ตอนนั้นเสมอ ไม่เชื่อค่าที่ส่งมากับปุ่ม และจำกัดไม่ให้เตือนคนเดิมซ้ำภายใน 12 ชั่วโมง
 * - ปุ่มรายการรอยืนยัน (ยืนยัน/เปลี่ยนหมวด/ลบ) ทำได้เฉพาะรายการของตัวเอง ตรวจเจ้าของจากฐานข้อมูลทุกครั้ง
 */
import { normalizeName, computeMonthLedger, toDisplayPlan, walletMonth } from "./ledger.mjs";
import {
    buildMonthlyCard, buildOwedCard, buildGroupDebtCard, buildReminderCard, buildTransferMessage, buildRemindConfirm, buildPendingCarousel,
    buildCategoryPicker, buildDeleteConfirm, buildExpenseSavedCard, buildNoticeCard, withChips, monthLabelTh, formatBaht, CAT_STYLE
} from "./line-cards.mjs";
export { monthLabelTh };
import { bangkokMonth } from "./reminders.mjs";
import { monthInsights, lastDaysSpend, lastDates } from "./line-insights.mjs";
import { categoryGroupOf, GROUP_ICON } from "./categories.mjs";
import { LEARNED_COL, learnedDocId, rememberName } from "./learned-names.mjs";

export const REMIND_COOLDOWN_MS = 12 * 60 * 60 * 1000;
const WALLET_COL = "wallet_entries";

export function bangkokDate(ms) {
    return new Date(ms + 7 * 3600 * 1000).toISOString().slice(0, 10);
}

async function loadMonth({ db, fs, month }) {
    const { collection, getDocs, query, where } = fs;
    const [mem, tx, st] = await Promise.all([
        getDocs(collection(db, "members")),
        getDocs(query(collection(db, "transactions"), where("date", ">=", `${month}-01`), where("date", "<=", `${month}-31`))),
        getDocs(query(collection(db, "settlements"), where("month", "==", month)))
    ]);
    // สมาชิกชื่อซ้ำ (เอกสารซ้ำ) ให้เก็บตัวที่ผูก LINE
    const members = new Map();
    for (const d of mem.docs) {
        const x = d.data();
        const key = normalizeName(x.name);
        if (!key) continue;
        const cur = members.get(key);
        if (!cur || (!cur.lineUserId && x.lineUserId)) {
            members.set(key, { name: key, lineUserId: x.lineUserId || "", promptpay: x.promptpay || "", pictureUrl: /^https:\/\//.test(x.pictureUrl || "") ? x.pictureUrl : "" });
        }
    }
    return {
        members,
        transactions: tx.docs.map((d) => ({ id: d.id, ...d.data() })),
        settlements: st.docs.map((d) => ({ id: d.id, ...d.data() }))
    };
}

/** รายการกระเป๋าของเจ้าของในเดือนที่ระบุ (อ่านเฉพาะเดือนนั้น) + รายการเก่าในคอลเลกชันเดิม */
async function loadWallet({ db, fs, owner, months }) {
    const { collection, getDocs, query, where } = fs;
    const snaps = await Promise.all([
        ...months.map((m) => getDocs(query(collection(db, WALLET_COL), where("ownerName", "==", owner), where("month", "==", m)))),
        getDocs(query(collection(db, "personal_expenses"), where("payer", "==", owner)))
    ]);
    const byId = new Map();
    for (const s of snaps) for (const d of s.docs) {
        if (byId.has(d.id)) continue;
        const x = d.data();
        byId.set(d.id, { ownerName: owner, type: x.type === "income" ? "income" : "expense", amount: x.amount, date: x.date || "", desc: x.desc || "", icon: x.icon || "", dedupKey: x.dedupKey, transRef: x.transRef });
    }
    return [...byId.values()].filter((x) => months.some((m) => String(x.date).startsWith(m)));
}

const withShare = (list) => {
    const max = list[0] ? list[0].amount : 0;
    return list.map((o) => ({ ...o, share: max ? Math.round((o.amount / max) * 100) : 0 }));
};

/** คำนวณสรุปของสมาชิกหนึ่งคนในเดือนนี้ */
export async function computeMemberSummary({ db, fs, memberName, now = Date.now() }) {
    const me = normalizeName(memberName);
    const month = bangkokMonth(new Date(now));
    const { members, transactions, settlements } = await loadMonth({ db, fs, month });
    const ledger = computeMonthLedger({ memberNames: [...members.keys()], transactions, settlements, month });
    const plan = toDisplayPlan(ledger.plan);
    const pic = (n) => (members.get(n) || {}).pictureUrl || "";
    const owedToMe = withShare(plan.filter((l) => l.to === me).map((l) => ({ name: l.from, amount: l.amount, pictureUrl: pic(l.from) })).sort((a, b) => b.amount - a.amount));
    const iOwe = withShare(plan.filter((l) => l.from === me).map((l) => ({ name: l.to, amount: l.amount, pictureUrl: pic(l.to), promptpay: (members.get(l.to) || {}).promptpay || "" })).sort((a, b) => b.amount - a.amount));
    return { me, month, members, plan, transactions, settlements, owedToMe, iOwe };
}

/** ข้อความสรุปเดือนแบบปัด (ส่งในแชทส่วนตัวเท่านั้น) */
export async function buildMemberReportMessage({ db, fs, memberName, now = Date.now() }) {
    const s = await computeMemberSummary({ db, fs, memberName, now });
    const walletItems = await loadWallet({ db, fs, owner: s.me, months: [s.month] });
    const w = walletMonth({ name: s.me, month: s.month, walletEntries: walletItems, transactions: s.transactions, settlements: s.settlements });
    const ins = monthInsights({ name: s.me, month: s.month, today: bangkokDate(now), transactions: s.transactions, walletItems });
    return buildMonthlyCard({
        name: s.me,
        monthLabel: monthLabelTh(s.month),
        hasIncome: w.income > 0,
        netSatang: w.net,
        incomeBaht: w.income / 100,
        spentBaht: w.expenseTotal / 100,
        spentPercent: w.income > 0 ? Math.min(100, Math.round((w.expenseTotal / w.income) * 100)) : null,
        owedToMe: s.owedToMe,
        iOwe: s.iOwe,
        categories: ins.categories,
        weeks: ins.weeks,
        perDaySat: ins.perDaySat,
        personalSat: w.personalExpense,
        groupSat: w.groupShare,
        topShop: ins.topShop
    });
}

/** ปุ่มลัด "ใครค้างฉัน" */
export async function buildOwedMessage({ db, fs, memberName, now = Date.now() }) {
    const s = await computeMemberSummary({ db, fs, memberName, now });
    return buildOwedCard({ monthLabel: monthLabelTh(s.month), owedToMe: s.owedToMe, iOwe: s.iOwe });
}

/** ปุ่มลัด "ฉันต้องโอน": การ์ดละคนพร้อม QR ของคนที่ต้องโอนให้ */
export async function buildMyTransfersMessage({ db, fs, memberName, now = Date.now() }) {
    const s = await computeMemberSummary({ db, fs, memberName, now });
    if (!s.iOwe.length) return buildNoticeCard({ title: "คุณไม่ได้ค้างใคร", detail: `เดือน ${monthLabelTh(s.month)} ไม่มียอดที่ต้องโอน` });
    return withChips(buildTransferMessage({ monthLabel: monthLabelTh(s.month), debts: s.iOwe.map((d) => ({ to: d.name, amount: d.amount, promptpay: d.promptpay, pictureUrl: d.pictureUrl })), from: { name: s.me, pictureUrl: (s.members.get(s.me) || {}).pictureUrl } }), ["ใครค้างฉัน", "สรุปเดือนนี้"]);
}

/** การ์ดหลังพิมพ์ "กาแฟ 65": รายการที่บันทึก + กราฟ 7 วันล่าสุด (อ่านเฉพาะช่วง 7 วัน) */
export async function buildExpenseSavedMessage({ db, fs, memberName, entry, now = Date.now() }) {
    const { collection, getDocs, query, where } = fs;
    const me = normalizeName(memberName);
    const today = bangkokDate(now);
    const dates = lastDates(today, 7);
    const months = [...new Set(dates.map((d) => d.slice(0, 7)))];
    let days = [];
    try {
        const [tx, walletItems] = await Promise.all([
            getDocs(query(collection(db, "transactions"), where("date", ">=", dates[0]), where("date", "<=", today))),
            loadWallet({ db, fs, owner: me, months })
        ]);
        days = lastDaysSpend({ name: me, today, transactions: tx.docs.map((d) => d.data()), walletItems });
    } catch (e) {
        days = []; // อ่านไม่ได้ก็ยังส่งการ์ดบันทึกแล้ว (ไม่มีกราฟ)
    }
    return buildExpenseSavedCard({ id: entry.id || "", desc: entry.desc, amount: entry.amount, catKey: categoryGroupOf(entry.icon), days });
}

// ---------------------------------------------------------------------
// รายการรอยืนยัน (บันทึกอัตโนมัติจาก iPhone) ในแชต
// ---------------------------------------------------------------------
const TH_SHORT = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];
function whenLabel(x, now) {
    const d = String(x.date || "");
    const today = bangkokDate(now);
    const yest = bangkokDate(now - 86400000);
    const day = d === today ? "วันนี้" : d === yest ? "เมื่อวาน" : d ? `${Number(d.slice(8, 10))} ${TH_SHORT[Number(d.slice(5, 7)) - 1] || ""}` : "";
    const ts = Number(x.timestamp) || 0;
    const time = ts ? new Date(ts + 7 * 3600 * 1000).toISOString().slice(11, 16) : "";
    return [day, time].filter(Boolean).join(" ");
}
function sourceLabel(x) {
    if (x.card) return String(x.card).split("-")[0].slice(0, 8) || "บัตร";
    if (x.source === "ios_auto") return "สลิป";
    if (x.source === "sms") return "SMS";
    return "อัตโนมัติ";
}

async function loadPending({ db, fs, owner }) {
    const { collection, getDocs, query, where } = fs;
    const snap = await getDocs(query(collection(db, WALLET_COL), where("ownerName", "==", owner), where("unconfirmed", "==", true)));
    return snap.docs.map((d) => ({ id: d.id, ref: d.ref, ...d.data() })).sort((a, b) => (Number(b.timestamp) || 0) - (Number(a.timestamp) || 0));
}

/** ปุ่มลัด "รอยืนยัน" */
export async function buildPendingMessage({ db, fs, memberName, now = Date.now() }) {
    const list = await loadPending({ db, fs, owner: normalizeName(memberName) });
    return buildPendingCarousel({
        total: list.length,
        items: list.slice(0, 9).map((x) => ({ id: x.id, desc: x.desc || "รายการ", amount: Number(x.amount) || 0, when: whenLabel(x, now), source: sourceLabel(x), catKey: categoryGroupOf(x.icon) }))
    });
}

/** อ่านรายการกระเป๋าของตัวเอง (null ถ้าไม่ใช่ของตัวเองหรือไม่มี) */
async function ownEntry({ db, fs, owner, id }) {
    if (typeof id !== "string" || !id || id.length > 100 || id.includes("/")) return null;
    const ref = fs.doc(db, WALLET_COL, id);
    const snap = await fs.getDoc(ref);
    if (!snap.exists()) return null;
    const data = snap.data();
    if (normalizeName(data.ownerName || data.payer) !== owner) return null;
    return { ref, data };
}

const pendingLeft = async (ctx, owner) => (await loadPending({ ...ctx, owner })).length;
const leftText = (n) => (n > 0 ? `ยังรอยืนยันอีก ${n} รายการ` : "ยืนยันครบทุกรายการแล้ว");
const nextChips = (n) => (n > 0 ? ["รอยืนยัน", "สรุปเดือนนี้"] : ["สรุปเดือนนี้", "ใครค้างฉัน"]);
/** การ์ดแจ้งผล + ปุ่มดูรายการที่เหลือ */
const doneCard = (title, detail, left) => buildNoticeCard({
    title, detail: [detail, leftText(left)].filter(Boolean).join("\n"), chips: nextChips(left),
    buttons: left > 0 ? [{ type: "button", style: "primary", color: "#2343c9", height: "sm", action: { type: "message", label: `ดูที่เหลือ (${left})`, text: "รอยืนยัน" } }] : []
});

/**
 * ปุ่มของรายการรอยืนยัน cmd = { action: "w-ok"|"w-okall"|"w-cat"|"w-setcat"|"w-del"|"w-delok"|"w-keep", id?, cat? }
 * คืนข้อความตอบกลับ (เปลี่ยนแปลงเฉพาะรายการของตัวเอง)
 */
export async function handleWalletAction({ db, fs, memberName, cmd, now = Date.now() }) {
    const owner = normalizeName(memberName);
    const ctx = { db, fs };
    const info = (t, detail = "") => buildNoticeCard({ tone: "info", title: t, detail, chips: ["รอยืนยัน", "สรุปเดือนนี้"] });
    if (cmd.action === "w-keep") return info("ยกเลิกแล้ว ไม่ได้เปลี่ยนอะไร");
    if (cmd.action === "w-okall") {
        const list = await loadPending({ ...ctx, owner });
        for (const x of list.slice(0, 50)) {
            const { id, ref, ...data } = x;
            await fs.setDoc(fs.doc(db, WALLET_COL, id), { ...data, unconfirmed: false, confirmedAt: new Date(now).toISOString() });
        }
        const left = Math.max(0, list.length - 50);
        return doneCard(`ยืนยันแล้ว ${Math.min(list.length, 50)} รายการ`, "", left);
    }
    const hit = await ownEntry({ ...ctx, owner, id: cmd.id });
    if (!hit) return info("ไม่พบรายการนี้", "อาจถูกลบหรือยืนยันไปแล้ว");
    const { ref, data } = hit;
    const label = `${data.desc || "รายการ"} ${formatBaht(Number(data.amount) || 0, Number(data.amount) % 1 ? 2 : 0)}`;
    if (cmd.action === "w-ok") {
        if (data.unconfirmed) await fs.setDoc(ref, { ...data, unconfirmed: false, confirmedAt: new Date(now).toISOString() });
        const left = await pendingLeft(ctx, owner);
        return doneCard("ยืนยันแล้ว", label, left);
    }
    if (cmd.action === "w-cat") return buildCategoryPicker({ id: cmd.id, desc: data.desc || "รายการ" });
    if (cmd.action === "w-setcat") {
        const icon = GROUP_ICON[cmd.cat];
        if (!icon) return info("ไม่รู้จักหมวดนี้");
        // เปลี่ยนหมวดจากแชต = ยืนยันด้วย และจำไว้ใช้กับชื่อร้านเดิมครั้งหน้า (เหมือนแก้ในเว็บ)
        await fs.setDoc(ref, { ...data, icon, unconfirmed: false, ...(data.unconfirmed ? { confirmedAt: new Date(now).toISOString() } : {}) });
        if (data.autoDesc && !data.templateId) {
            try {
                const lref = fs.doc(db, LEARNED_COL, learnedDocId(owner));
                const lsnap = await fs.getDoc(lref);
                const items = lsnap.exists() ? lsnap.data().items : [];
                await fs.setDoc(lref, { ownerName: owner, items: rememberName(items, { type: data.type === "income" ? "income" : "expense", from: data.autoDesc, desc: data.desc, icon, at: now }), updatedAt: new Date(now).toISOString() });
            } catch (e) { /* จำชื่อไม่ได้ไม่เป็นไร */ }
        }
        const left = await pendingLeft(ctx, owner);
        return doneCard(`หมวด ${CAT_STYLE[cmd.cat].label} และยืนยันแล้ว`, label, left);
    }
    if (cmd.action === "w-del") return buildDeleteConfirm({ id: cmd.id, desc: data.desc || "รายการ", amount: Number(data.amount) || 0 });
    if (cmd.action === "w-delok") {
        await fs.deleteDoc(ref);
        const left = await pendingLeft(ctx, owner);
        return doneCard("ลบแล้ว", label, left);
    }
    return info("ไม่รู้จักคำสั่งนี้");
}

// ---------------------------------------------------------------------
// เตือนหนี้
// ---------------------------------------------------------------------
/** เตรียมเตือน: target = ชื่อลูกหนี้ หรือ "all" คืนรายชื่อและยอดจริง + ข้อความถามยืนยัน */
export async function prepareRemind({ db, fs, memberName, target, now = Date.now() }) {
    const s = await computeMemberSummary({ db, fs, memberName, now });
    const wanted = target === "all" ? s.owedToMe : s.owedToMe.filter((o) => o.name === normalizeName(target));
    if (wanted.length === 0) return { ok: false, message: "ตอนนี้ไม่มียอดค้างที่ต้องเตือนแล้ว (อาจมีการโอนมาแล้ว)" };
    const total = wanted.reduce((a, o) => a + o.amount, 0);
    return { ok: true, targets: wanted.map((o) => o.name), total, confirm: buildRemindConfirm({ targets: wanted.map((o) => o.name), total }) };
}

/** ส่งเตือนจริง (หลังผู้ใช้กดยืนยัน) คำนวณยอดใหม่จากฐานข้อมูล ข้ามคนที่เพิ่งถูกเตือน/ไม่มี LINE */
export async function executeRemind({ db, fs, memberName, target, push, now = Date.now() }) {
    const { doc, getDoc, setDoc } = fs;
    const s = await computeMemberSummary({ db, fs, memberName, now });
    const wanted = target === "all" ? s.owedToMe : s.owedToMe.filter((o) => o.name === normalizeName(target));
    const result = { sent: [], failed: [], skipped: [], noLine: [] };
    const meInfo = s.members.get(s.me) || {};
    for (const o of wanted) {
        const debtor = s.members.get(o.name);
        if (!debtor || !debtor.lineUserId) { result.noLine.push(o.name); continue; }
        const logRef = doc(db, "remind_logs", `${o.name}__${s.me}__${s.month}`.replace(/[\/\s]/g, "_"));
        const prev = await getDoc(logRef);
        if (prev.exists() && now - Number(prev.data().sentAt || 0) < REMIND_COOLDOWN_MS) { result.skipped.push(o.name); continue; }
        try {
            await push(debtor.lineUserId, buildReminderCard({ monthLabel: monthLabelTh(s.month), debts: [{ to: s.me, amount: o.amount, promptpay: meInfo.promptpay, pictureUrl: meInfo.pictureUrl }], from: { name: o.name, pictureUrl: debtor.pictureUrl } }));
            await setDoc(logRef, { from: o.name, to: s.me, month: s.month, amount: o.amount, sentAt: now });
            result.sent.push(o.name);
        } catch (e) {
            result.failed.push(o.name);
        }
    }
    return result;
}

export function remindResultText(r) {
    const lines = [];
    if (r.sent.length) lines.push(`ส่งเตือนแล้ว: ${r.sent.join(", ")}`);
    if (r.skipped.length) lines.push(`เพิ่งเตือนไปแล้ว (รอ 12 ชั่วโมง): ${r.skipped.join(", ")}`);
    if (r.noLine.length) lines.push(`ยังไม่ได้ผูกบัญชี LINE จึงส่งไม่ได้: ${r.noLine.join(", ")}`);
    if (r.failed.length) lines.push(`ส่งไม่สำเร็จ: ${r.failed.join(", ")}`);
    return lines.join("\n") || "ไม่มีรายการที่ต้องเตือน";
}

/** แปลงข้อมูลปุ่ม (postback data) -> คำสั่ง */
export function parsePostback(data) {
    const s = String(data || "");
    const decode = (v) => { try { return decodeURIComponent(v); } catch (e) { return v; } };
    const ID = /([A-Za-z0-9_-]{1,100})/.source;
    let m;
    if ((m = /^confirm:remind:(.+)$/.exec(s))) return { action: "confirm-remind", target: m[1] === "all" ? "all" : decode(m[1]) };
    if ((m = /^remind:(.+)$/.exec(s))) return { action: "remind", target: m[1] === "all" ? "all" : decode(m[1]) };
    if (s === "cancel") return { action: "cancel" };
    if (s === "help:expense") return { action: "help-expense" };
    if (s === "w:okall") return { action: "w-okall" };
    if (s === "sp:ok" || s === "sp:all" || s === "sp:cancel") return { action: `sp-${s.slice(3)}` };
    if ((m = /^sp:t:(.{1,280})$/.exec(s))) return { action: "sp-toggle", name: decode(m[1]) };
    if ((m = new RegExp(`^w:split:${ID}$`).exec(s))) return { action: "split-start", id: m[1] };
    if (s === "w:keep") return { action: "w-keep" };
    if ((m = new RegExp(`^w:setcat:${ID}:(food|bills|goods|travel|fun|other)$`).exec(s))) return { action: "w-setcat", id: m[1], cat: m[2] };
    if ((m = new RegExp(`^w:(ok|cat|del|delok):${ID}$`).exec(s))) return { action: `w-${m[1]}`, id: m[2] };
    return { action: "unknown" };
}

/** การ์ดสำหรับกลุ่ม: ใครต้องโอนให้ใคร ไม่มีรายรับ/สุทธิ/รายจ่ายส่วนตัวเด็ดขาด */
export async function buildGroupReportMessage({ db, fs, now = Date.now() }) {
    const month = bangkokMonth(new Date(now));
    const { members, transactions, settlements } = await loadMonth({ db, fs, month });
    const ledger = computeMonthLedger({ memberNames: [...members.keys()], transactions, settlements, month });
    return buildGroupDebtCard({ monthLabel: monthLabelTh(month), lines: toDisplayPlan(ledger.plan) });
}
