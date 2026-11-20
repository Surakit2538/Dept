/**
 * ตัวเลขสำหรับการ์ด LINE แบบมีกราฟ (ฟังก์ชันล้วน ไม่แตะฐานข้อมูล ทดสอบได้)
 * นับ "ใช้ไป" แบบเดียวกับหน้าแรกของเว็บ: ส่วนของฉันในบิลกลุ่ม + รายจ่ายส่วนตัว (หน่วยสตางค์)
 * ห้าม import แพ็กเกจ npm
 */
import { normalizeName, shareOf, toSatang } from "./ledger.mjs";
import { CATEGORY_GROUPS, categoryGroupOf } from "./categories.mjs";

const TH_DAY = ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"];

/** รายการใช้จ่ายของฉัน (ทั้งกลุ่มและส่วนตัว) ในรูปเดียวกัน: { date, desc, icon, satang, kind } */
export function mySpendItems({ name, transactions = [], walletItems = [] }) {
    const me = normalizeName(name);
    const out = [];
    for (const t of transactions) {
        if (!t || typeof t.date !== "string") continue;
        const sat = shareOf(t, me);
        if (sat > 0) out.push({ date: t.date, desc: String(t.desc || ""), icon: t.icon || "", satang: sat, kind: "group" });
    }
    for (const x of walletItems) {
        if (!x || x.type !== "expense" || typeof x.date !== "string") continue;
        const sat = toSatang(x.amount);
        if (sat > 0) out.push({ date: x.date, desc: String(x.desc || ""), icon: x.icon || "", satang: sat, kind: "personal" });
    }
    return out;
}

/** วันที่ YYYY-MM-DD ย้อนหลัง n วัน (นับวันนี้ด้วย) เรียงเก่าไปใหม่ */
export function lastDates(today, n = 7) {
    const base = new Date(`${today}T00:00:00Z`);
    const out = [];
    for (let i = n - 1; i >= 0; i--) out.push(new Date(base.getTime() - i * 86400000).toISOString().slice(0, 10));
    return out;
}

/** ยอดใช้จ่าย 7 วันล่าสุด [{date, label(ชื่อวันย่อ), satang, today}] */
export function lastDaysSpend({ name, today, days = 7, transactions = [], walletItems = [] }) {
    const dates = lastDates(today, days);
    const sum = Object.fromEntries(dates.map((d) => [d, 0]));
    for (const it of mySpendItems({ name, transactions, walletItems })) if (it.date in sum) sum[it.date] += it.satang;
    return dates.map((d) => ({ date: d, label: TH_DAY[new Date(`${d}T00:00:00Z`).getUTCDay()], satang: sum[d], today: d === today }));
}

/**
 * สรุปเดือน: หมวด (เรียงมากไปน้อย), ราย 7 วัน (1-7, 8-14, 15-21, 22-สิ้นเดือน), เฉลี่ยต่อวัน, ส่วนตัว/กลุ่ม, ร้านที่ใช้บ่อยสุด
 * today ใช้นับวันที่ผ่านไปของเดือนปัจจุบัน (เดือนอื่นนับทั้งเดือน)
 */
export function monthInsights({ name, month, today = "", transactions = [], walletItems = [] }) {
    const items = mySpendItems({ name, transactions, walletItems }).filter((x) => x.date.startsWith(month));
    const cat = Object.fromEntries(CATEGORY_GROUPS.map((c) => [c.key, 0]));
    const weeks = [0, 0, 0, 0];
    const shops = new Map();
    let personalSat = 0;
    let groupSat = 0;
    for (const it of items) {
        cat[categoryGroupOf(it.icon)] += it.satang;
        const day = Number(it.date.slice(8, 10)) || 1;
        weeks[Math.min(3, Math.floor((day - 1) / 7))] += it.satang;
        if (it.kind === "personal") personalSat += it.satang; else groupSat += it.satang;
        const key = it.desc.trim().toLowerCase();
        if (key) {
            const cur = shops.get(key) || { name: it.desc.trim(), count: 0, satang: 0 };
            cur.count++;
            cur.satang += it.satang;
            shops.set(key, cur);
        }
    }
    const total = personalSat + groupSat;
    const [y, m] = month.split("-").map(Number);
    const lastDay = new Date(Date.UTC(y, m, 0)).getUTCDate();
    const daysPassed = today.startsWith(month) ? Math.max(1, Number(today.slice(8, 10))) : lastDay;
    const top = [...shops.values()].filter((s) => s.count >= 2).sort((a, b) => b.count - a.count || b.satang - a.satang)[0] || null;
    return {
        totalSat: total,
        personalSat,
        groupSat,
        perDaySat: Math.round(total / daysPassed),
        categories: CATEGORY_GROUPS.map((c) => ({ key: c.key, label: c.short, satang: cat[c.key], percent: total > 0 ? Math.round((cat[c.key] / total) * 100) : 0 }))
            .filter((c) => c.satang > 0).sort((a, b) => b.satang - a.satang),
        weeks: weeks.map((satang, i) => ({ label: i < 3 ? `${i * 7 + 1}-${i * 7 + 7}` : `22-${lastDay}`, satang })),
        topShop: top ? { name: top.name, count: top.count } : null
    };
}
