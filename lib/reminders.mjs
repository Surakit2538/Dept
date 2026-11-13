/**
 * งานเตือนยอดค้างชำระประจำเดือน (cron วันที่ 25) — รับ DB/fetch/นาฬิกาเป็นพารามิเตอร์เพื่อให้ทดสอบได้
 *
 * ต่างจากของเดิม: ใช้ "ชื่อ" เป็นกุญแจ (ข้อมูลบิล/เคลียร์หนี้เก็บเป็นชื่อ ไม่ใช่รหัสเอกสาร) และบันทึกผลตามจริง
 * - ส่งครบทุกคนที่ส่งได้ = success
 * - ส่งไม่สำเร็จบางคน = partial (รันซ้ำได้ ข้ามคนที่ส่งไปแล้ว ไม่ส่งซ้ำ)
 * - คนที่ยังไม่ผูก LINE = skipped (ไม่นับเป็นความล้มเหลว)
 * ตั้ง REMINDER_DRY_RUN=1 เพื่อดูรายชื่อโดยไม่ส่งและไม่บันทึก
 */
import { computeMonthBalances, buildSettlementPlan, normalizeName } from "./ledger.mjs";
import { buildReminderCard, monthLabelTh } from "./line-cards.mjs";

export function bangkokMonth(date) {
    const parts = new Intl.DateTimeFormat("en-US", { timeZone: "Asia/Bangkok", year: "numeric", month: "2-digit" }).formatToParts(date);
    const y = parts.find((p) => p.type === "year").value;
    const m = parts.find((p) => p.type === "month").value;
    return `${y}-${m}`;
}

function formatBaht(n) {
    return Number(n).toLocaleString("th-TH", { minimumFractionDigits: 0, maximumFractionDigits: 2 });
}

/** ข้อความเตือนประจำเดือน (ใช้การ์ดเดียวกับปุ่มเตือนใน LINE) debts = [{ toDisplay, amount }] */
export function buildReminderFlex(debts, month = bangkokMonth(new Date())) {
    return buildReminderCard({ monthLabel: monthLabelTh(month), debts: debts.map((d) => ({ to: d.toDisplay, amount: d.amount })) });
}

export function createReminderJob({ db, fs, fetchFn = globalThis.fetch, env = process.env, now = () => Date.now() }) {
    const { collection, getDocs, query, where, doc, getDoc, setDoc } = fs;

    return async function run() {
        const month = bangkokMonth(new Date(now()));
        const dryRun = env.REMINDER_DRY_RUN === "1";

        const logRef = doc(db, "reminder_logs", month);
        const prevSnap = await getDoc(logRef);
        const prev = prevSnap.exists() ? prevSnap.data() : null;
        if (prev && prev.status === "success" && !dryRun) return { status: "already_sent", month };

        const token = env.LINE_CHANNEL_ACCESS_TOKEN;
        if (!token && !dryRun) throw new Error("LINE_CHANNEL_ACCESS_TOKEN is missing from environment variables.");

        // สมาชิก: รวมเอกสารที่ชื่อซ้ำ (เช่น G A M E 👾 สองรายการ) โดยเก็บตัวที่มี lineUserId
        const memberSnap = await getDocs(collection(db, "members"));
        const members = new Map();
        for (const d of memberSnap.docs) {
            const data = d.data();
            const key = normalizeName(data.name);
            if (!key) continue;
            const existing = members.get(key);
            if (!existing || (!existing.lineUserId && data.lineUserId)) {
                members.set(key, { name: String(data.name || "").trim(), lineUserId: data.lineUserId || "" });
            }
        }

        const txSnap = await getDocs(query(collection(db, "transactions"), where("date", ">=", `${month}-01`), where("date", "<=", `${month}-31`)));
        const setSnap = await getDocs(query(collection(db, "settlements"), where("month", "==", month)));
        const transactions = txSnap.docs.map((d) => ({ id: d.id, ...d.data() }));
        const settlements = setSnap.docs.map((d) => ({ id: d.id, ...d.data() }));

        const { balances } = computeMonthBalances({ memberNames: [...members.keys()], transactions, settlements, month });
        const plan = buildSettlementPlan(balances);

        const byDebtor = new Map();
        for (const line of plan) {
            if (!byDebtor.has(line.from)) byDebtor.set(line.from, []);
            byDebtor.get(line.from).push({
                amount: line.amount,
                toDisplay: (members.get(line.to) && members.get(line.to).name) || line.to
            });
        }

        const already = new Set(prev && Array.isArray(prev.sentTo) ? prev.sentTo : []);
        const sent = [];
        const failed = [];
        const skipped = [];

        for (const [name, debts] of byDebtor) {
            if (already.has(name)) { sent.push(name); continue; }
            const member = members.get(name);
            if (!member || !member.lineUserId) { skipped.push(name); continue; }
            if (dryRun) { sent.push(name); continue; }
            try {
                const res = await fetchFn("https://api.line.me/v2/bot/message/push", {
                    method: "POST",
                    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
                    body: JSON.stringify({ to: member.lineUserId, messages: [buildReminderFlex(debts, month)] })
                });
                if (res && res.ok) sent.push(name);
                else failed.push(name);
            } catch (e) {
                console.error("reminder push failed for", name, e && e.message);
                failed.push(name);
            }
        }

        const status = failed.length > 0 ? "partial" : "success";
        const summary = { status, month, sentTo: sent, sentCount: sent.length, failed, skipped, debtors: [...byDebtor.keys()], dryRun };
        if (!dryRun) {
            await setDoc(logRef, { status, month, sentTo: sent, sentCount: sent.length, failed, skipped, timestamp: now() });
        }
        return summary;
    };
}
