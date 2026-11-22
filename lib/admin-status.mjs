/**
 * สถานะงานอัตโนมัติสำหรับกล่อง "สำหรับผู้ดูแล" (ฟังก์ชันรับฐานข้อมูลเป็นพารามิเตอร์ ทดสอบได้) ห้าม import แพ็กเกจ npm
 * - job_logs/subscriptions: สร้างบิลรายเดือนครั้งล่าสุด (cron วันที่ 1) เขียนโดย api/cron/generate-subscriptions.js
 * - job_logs/cards: เตือนบัตรเครดิตครั้งล่าสุด (cron รายวัน) เขียนโดย api/cron/send-reminders.js
 * - reminder_logs/<เดือน>: เตือนหนี้วันที่ 25 (มีอยู่แล้วใน lib/reminders.mjs)
 * อ่านไม่เกิน 4 เอกสารต่อครั้ง
 */
import { getBangkokDateString } from "./slip-core.mjs";

export const JOB_LOG_COL = "job_logs";

/** จดผลงานอัตโนมัติ (พังแล้วไม่ทำให้งานหลักล้ม) */
export async function writeJobLog({ db, fs, id, data, now = () => Date.now() }) {
    try {
        await fs.setDoc(fs.doc(db, JOB_LOG_COL, id), { ...data, at: new Date(now()).toISOString() });
    } catch (e) {
        console.warn("writeJobLog:", id, e && e.message);
    }
}

function prevMonth(month) {
    const [y, m] = month.split("-").map(Number);
    return m === 1 ? `${y - 1}-12` : `${y}-${String(m - 1).padStart(2, "0")}`;
}

/** สรุปสถานะ { debt: { month, sentCount, status, at } | null, subs: { month, created, at } | null, cards: { date, sent, at } | null } */
export async function readAdminStatus({ db, fs, now = () => Date.now() }) {
    const { doc, getDoc } = fs;
    const month = getBangkokDateString(new Date(now())).slice(0, 7);
    const get = async (col, id) => { const s = await getDoc(doc(db, col, id)); return s.exists() ? s.data() : null; };
    const [debtNow, debtPrev, subs, cards] = await Promise.all([
        get("reminder_logs", month), get("reminder_logs", prevMonth(month)), get(JOB_LOG_COL, "subscriptions"), get(JOB_LOG_COL, "cards")
    ]);
    const debtLog = debtNow ? { ...debtNow, month } : debtPrev ? { ...debtPrev, month: prevMonth(month) } : null;
    const at = (v) => (typeof v === "number" ? new Date(v).toISOString() : String(v || ""));
    return {
        debt: debtLog ? { month: debtLog.month, sentCount: Number(debtLog.sentCount) || 0, status: String(debtLog.status || ""), at: at(debtLog.timestamp) } : null,
        subs: subs ? { month: String(subs.month || ""), created: Number(subs.created) || 0, at: at(subs.at) } : null,
        cards: cards ? { date: String(cards.date || ""), sent: Number(cards.sent) || 0, at: at(cards.at) } : null
    };
}
