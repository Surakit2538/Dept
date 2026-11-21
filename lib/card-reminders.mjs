/**
 * งานเตือนครบกำหนดจ่ายบัตรเครดิต (cron รายวัน 10 โมงเช้า) รับ DB/fetch/นาฬิกาเป็นพารามิเตอร์ ทดสอบได้
 * - อ่านเฉพาะสมาชิกที่ผู้ดูแลเปิดให้ (members.cardAlerts == true) แล้วอ่านเอกสารบัตรของแต่ละคน 1 ครั้ง
 * - เตือนก่อนครบกำหนด 3 วัน และวันครบกำหนด เฉพาะรอบที่ยังไม่กด "จ่ายแล้ว" จดไว้ในเอกสารบัตร (sent) กันส่งซ้ำ
 * - อ่านรายการกระเป๋าเฉพาะคนที่ต้องเตือนวันนั้น
 * ตั้ง REMINDER_DRY_RUN=1 เพื่อดูว่าจะส่งหาใครโดยไม่ส่งจริงและไม่บันทึก
 */
import { normalizeName, getBangkokDateString } from "./slip-core.mjs";
import { categoryGroupOf } from "./categories.mjs";
import { createCardService } from "./card-service.mjs";
import { reminderDue, cycleSpend, cardLabel } from "./card-cycle.mjs";
import { buildCardDueCard } from "./line-cards.mjs";

function monthsOf(start, end) {
    const out = [];
    let [y, m] = start.split("-").map(Number);
    const endKey = end.slice(0, 7);
    for (let i = 0; i < 3; i++) {
        const k = `${y}-${String(m).padStart(2, "0")}`;
        out.push(k);
        if (k >= endKey) break;
        m += 1; if (m > 12) { m = 1; y += 1; }
    }
    return out;
}

/** หมวดที่ใช้มากสุดในรอบ { key, satang } */
function topCategory(items) {
    const sum = {};
    for (const x of items) {
        const k = categoryGroupOf(x.icon);
        sum[k] = (sum[k] || 0) + Math.round((Number(x.amount) || 0) * 100);
    }
    const best = Object.entries(sum).sort((a, b) => b[1] - a[1])[0];
    return best ? { key: best[0], satang: best[1] } : null;
}

export function createCardReminderJob({ db, fs, fetchFn = globalThis.fetch, env = process.env, now = () => Date.now() }) {
    const { collection, getDocs, query, where } = fs;
    const svc = createCardService({ db, fs, now });

    return async function run() {
        const today = getBangkokDateString(new Date(now()));
        const dryRun = env.REMINDER_DRY_RUN === "1";
        const token = env.LINE_CHANNEL_ACCESS_TOKEN;
        if (!token && !dryRun) throw new Error("LINE_CHANNEL_ACCESS_TOKEN is missing from environment variables.");

        const snap = await getDocs(query(collection(db, "members"), where("cardAlerts", "==", true)));
        const seen = new Set();
        const sent = [];
        const failed = [];
        const skipped = [];
        for (const d of snap.docs) {
            const m = d.data();
            const owner = normalizeName(m.name);
            if (!owner || seen.has(owner)) continue;
            seen.add(owner);
            const { ref, exists, cards } = await svc.readCards(owner);
            if (!exists || !cards.length) continue;
            const due = cards.map((c) => ({ c, r: reminderDue(c, today) })).filter((x) => x.r);
            if (!due.length) continue;
            if (!m.lineUserId) { skipped.push(owner); continue; }

            const months = [...new Set(due.flatMap((x) => monthsOf(x.r.cycle.start, x.r.cycle.end)))];
            const items = await svc.loadItems(owner, months);
            let changed = false;
            for (const { c, r } of due) {
                const sp = cycleSpend(c, cards, items, r.cycle.start, r.cycle.end);
                const who = `${owner}: ${cardLabel(c)}`;
                if (dryRun) { sent.push(who); continue; }
                const msg = buildCardDueCard({
                    cardId: c.id, key: r.cycle.key, label: cardLabel(c), dueDate: r.cycle.dueDate, daysLeft: r.daysLeft,
                    amountSat: sp.amountSat, start: r.cycle.start, end: r.cycle.end, count: sp.count, topCat: topCategory(sp.items)
                });
                try {
                    const res = await fetchFn("https://api.line.me/v2/bot/message/push", {
                        method: "POST",
                        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
                        body: JSON.stringify({ to: m.lineUserId, messages: [msg] })
                    });
                    if (res && res.ok) {
                        c.sent = { ...c.sent, [r.sentKey]: new Date(now()).toISOString() };
                        changed = true;
                        sent.push(who);
                    } else failed.push(who);
                } catch (e) {
                    console.error("card reminder push failed for", who, e && e.message);
                    failed.push(who);
                }
            }
            if (changed) await svc.writeCards(ref, owner, cards);
        }
        return { status: failed.length ? "partial" : "success", date: today, sent, failed, skipped, dryRun };
    };
}
