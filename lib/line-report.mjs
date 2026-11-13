/**
 * รายงานสรุปเดือนทาง LINE + การเตือนหนี้ (รับ db และ fs เป็นพารามิเตอร์ ทดสอบด้วยฐานข้อมูลจำลองได้)
 * - รายงาน "สรุป" ใช้ได้เฉพาะแชทส่วนตัว เพราะมีตัวเลขกระเป๋าส่วนตัว
 * - การเตือนต้องผ่านการยืนยัน 2 ขั้น: กด "เตือน" -> บอทถามยืนยัน -> กด "ส่งเตือน" ถึงจะส่งหาเพื่อน
 *   ยอดที่เตือนคำนวณจากฐานข้อมูล ณ ตอนนั้นเสมอ ไม่เชื่อค่าที่ส่งมากับปุ่ม และจำกัดไม่ให้เตือนคนเดิมซ้ำภายใน 12 ชั่วโมง
 */
import { normalizeName, computeMonthLedger, toDisplayPlan, walletMonth } from "./ledger.mjs";
import { buildMonthlyCard, buildGroupDebtCard, buildReminderCard, buildRemindConfirm, monthLabelTh } from "./line-cards.mjs";
export { monthLabelTh };
import { bangkokMonth } from "./reminders.mjs";

export const REMIND_COOLDOWN_MS = 12 * 60 * 60 * 1000;
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
        if (!cur || (!cur.lineUserId && x.lineUserId)) members.set(key, { name: key, lineUserId: x.lineUserId || "" });
    }
    return {
        members,
        transactions: tx.docs.map((d) => ({ id: d.id, ...d.data() })),
        settlements: st.docs.map((d) => ({ id: d.id, ...d.data() }))
    };
}

async function loadWallet({ db, fs, owner, month }) {
    const { collection, getDocs, query, where } = fs;
    const [w, p] = await Promise.all([
        getDocs(query(collection(db, "wallet_entries"), where("ownerName", "==", owner))),
        getDocs(query(collection(db, "personal_expenses"), where("payer", "==", owner)))
    ]);
    const byId = new Map();
    for (const d of [...w.docs, ...p.docs]) {
        if (byId.has(d.id)) continue;
        const x = d.data();
        byId.set(d.id, { ownerName: owner, type: x.type === "income" ? "income" : "expense", amount: x.amount, date: x.date || "" });
    }
    return [...byId.values()].filter((x) => String(x.date).startsWith(month));
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
    const walletItems = await loadWallet({ db, fs, owner: me, month });
    const w = walletMonth({ name: me, month, walletEntries: walletItems, transactions, settlements });
    const owedToMe = withShare(plan.filter((l) => l.to === me).map((l) => ({ name: l.from, amount: l.amount })).sort((a, b) => b.amount - a.amount));
    const iOwe = withShare(plan.filter((l) => l.from === me).map((l) => ({ name: l.to, amount: l.amount })).sort((a, b) => b.amount - a.amount));
    return { me, month, members, plan, w, owedToMe, iOwe };
}

/** ข้อความ Flex ของรายงานสรุปเดือน (ส่งในแชทส่วนตัวเท่านั้น) */
export async function buildMemberReportMessage({ db, fs, memberName, now = Date.now() }) {
    const s = await computeMemberSummary({ db, fs, memberName, now });
    return buildMonthlyCard({
        name: s.me,
        monthLabel: monthLabelTh(s.month),
        hasIncome: s.w.income > 0,
        netSatang: s.w.net,
        incomeBaht: s.w.income / 100,
        spentBaht: s.w.expenseTotal / 100,
        spentPercent: s.w.income > 0 ? Math.min(100, Math.round((s.w.expenseTotal / s.w.income) * 100)) : null,
        owedToMe: s.owedToMe,
        iOwe: s.iOwe
    });
}

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
    for (const o of wanted) {
        const debtor = s.members.get(o.name);
        if (!debtor || !debtor.lineUserId) { result.noLine.push(o.name); continue; }
        const logRef = doc(db, "remind_logs", `${o.name}__${s.me}__${s.month}`.replace(/[\/\s]/g, "_"));
        const prev = await getDoc(logRef);
        if (prev.exists() && now - Number(prev.data().sentAt || 0) < REMIND_COOLDOWN_MS) { result.skipped.push(o.name); continue; }
        try {
            await push(debtor.lineUserId, buildReminderCard({ monthLabel: monthLabelTh(s.month), debts: [{ to: s.me, amount: o.amount }] }));
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
    let m;
    if ((m = /^confirm:remind:(.+)$/.exec(s))) return { action: "confirm-remind", target: m[1] === "all" ? "all" : decode(m[1]) };
    if ((m = /^remind:(.+)$/.exec(s))) return { action: "remind", target: m[1] === "all" ? "all" : decode(m[1]) };
    if (s === "cancel") return { action: "cancel" };
    return { action: "unknown" };
}

/** การ์ดสำหรับกลุ่ม: ใครต้องโอนให้ใคร ไม่มีรายรับ/สุทธิ/รายจ่ายส่วนตัวเด็ดขาด */
export async function buildGroupReportMessage({ db, fs, now = Date.now() }) {
    const month = bangkokMonth(new Date(now));
    const { members, transactions, settlements } = await loadMonth({ db, fs, month });
    const ledger = computeMonthLedger({ memberNames: [...members.keys()], transactions, settlements, month });
    return buildGroupDebtCard({ monthLabel: monthLabelTh(month), lines: toDisplayPlan(ledger.plan) });
}
