/**
 * เปลี่ยนรายจ่ายส่วนตัวที่เพิ่งพิมพ์ในแชต (เช่น "กาแฟ 60") เป็นบิลหารกับเพื่อน ทำจบในแชต LINE
 * ขั้นตอน: กด "หารกับเพื่อน" ใต้การ์ด -> การ์ดเลือกคนหาร (แตะชื่อเพื่อเลือก/เอาออก) -> "หารเท่ากัน"
 *   -> สร้างบิลกลุ่ม (คนพิมพ์เป็นคนจ่าย หารเท่ากัน) แล้วลบรายการส่วนตัวเดิม เหมือนปุ่มเปลี่ยนเป็นบิลหารในเว็บ
 * สถานะการเลือกเก็บในคอลเลกชัน line_split (เอกสารเดียวต่อคน หมดอายุ 30 นาที)
 * ห้าม import แพ็กเกจ npm
 */
import { normalizeName } from "./ledger.mjs";
import { withPeople } from "./privacy.mjs";
import { isClosedMonth, closedMonthMessage } from "./month-lock.mjs";
import { buildSplitPickCard, buildInfoCard, buildNoticeCard, formatBaht, LIFF_URL } from "./line-cards.mjs";

export const SPLIT_COL = "line_split";
export const SPLIT_TTL_MS = 30 * 60 * 1000;
const WALLET_COL = "wallet_entries";
const LAST_ENTRY_COL = "line_last_entry";

/** หารเท่ากัน (สตางค์) ผู้จ่ายอยู่ท้ายสุด เศษสตางค์ตกกับเพื่อนก่อน (เหมือน buildBill ของเว็บ) */
export function equalSplitPayerLast(amount, people, payer) {
    const ordered = people.includes(payer) ? [...people.filter((p) => p !== payer), payer] : people;
    const total = Math.round(Number(amount) * 100);
    const base = Math.floor(total / ordered.length);
    const extra = total - base * ordered.length;
    return Object.fromEntries(ordered.map((p, i) => [p, (base + (i < extra ? 1 : 0)) / 100]));
}

export function createLineSplitService({ db, fs, now = () => Date.now() }) {
    const { collection, doc, getDoc, getDocs, setDoc, deleteDoc, addDoc } = fs;
    const sessionRef = (userId) => doc(db, SPLIT_COL, String(userId).replace(/\//g, "_"));
    const info = (title, detail = "") => buildNoticeCard({ tone: "info", title, detail, chips: ["สรุปเดือนนี้", "ใครค้างฉัน"] });

    async function memberNames() {
        const snap = await getDocs(collection(db, "members"));
        return [...new Set(snap.docs.map((d) => normalizeName(d.data().name)).filter(Boolean))];
    }

    async function ownExpense(owner, id) {
        if (typeof id !== "string" || !id || id.length > 100 || id.includes("/")) return null;
        const ref = doc(db, WALLET_COL, id);
        const snap = await getDoc(ref);
        if (!snap.exists()) return null;
        const data = snap.data();
        if (normalizeName(data.ownerName || data.payer) !== owner || data.type === "income") return null;
        return { ref, data };
    }

    /** การ์ดเลือกคนหาร (ฉันอยู่หน้าสุด แล้วเรียงชื่อ) */
    async function pickCard(s) {
        const names = await memberNames();
        const members = [s.owner, ...names.filter((n) => n !== s.owner).sort()];
        return buildSplitPickCard({ desc: s.desc, amount: s.amount, members, selected: s.selected, me: s.owner });
    }

    async function load(userId, owner) {
        const snap = await getDoc(sessionRef(userId));
        if (!snap.exists()) return null;
        const s = snap.data();
        if (s.owner !== owner || now() - Number(s.ts || 0) > SPLIT_TTL_MS) return null;
        return s;
    }

    /** เริ่ม: กดปุ่ม "หารกับเพื่อน" ใต้การ์ดบันทึกรายจ่าย */
    async function start(userId, memberName, id) {
        const owner = normalizeName(memberName);
        const hit = await ownExpense(owner, id);
        if (!hit) return info("ไม่พบรายการนี้", "อาจถูกลบหรือเปลี่ยนเป็นบิลหารไปแล้ว");
        const s = { owner, id, desc: hit.data.desc || "รายการ", amount: Number(hit.data.amount) || 0, selected: [owner], ts: now() };
        await setDoc(sessionRef(userId), s);
        return pickCard(s);
    }

    /** แตะชื่อ (เลือก/เอาออก) หรือ เลือกทุกคน */
    async function toggle(userId, memberName, name, all = false) {
        const owner = normalizeName(memberName);
        const s = await load(userId, owner);
        if (!s) return info("หมดเวลาเลือกแล้ว", "กดปุ่ม หารกับเพื่อน ใต้การ์ดรายการอีกครั้ง");
        if (all) {
            s.selected = await memberNames();
        } else {
            const n = normalizeName(name);
            if (!(await memberNames()).includes(n)) return pickCard(s);
            s.selected = s.selected.includes(n) ? s.selected.filter((x) => x !== n) : [...s.selected, n];
        }
        s.ts = now();
        await setDoc(sessionRef(userId), s);
        return pickCard(s);
    }

    async function cancel(userId) {
        await deleteDoc(sessionRef(userId));
        return info("ยกเลิกแล้ว", "รายการยังเป็นรายจ่ายส่วนตัวเหมือนเดิม");
    }

    /** ยืนยัน: สร้างบิลกลุ่ม แล้วลบรายการส่วนตัวเดิม */
    async function confirm(userId, memberName) {
        const owner = normalizeName(memberName);
        const s = await load(userId, owner);
        if (!s) return info("หมดเวลาเลือกแล้ว", "กดปุ่ม หารกับเพื่อน ใต้การ์ดรายการอีกครั้ง");
        const people = [...new Set(s.selected.map(normalizeName).filter(Boolean))];
        if (people.length === 0 || (people.length === 1 && people[0] === owner)) {
            return buildNoticeCard({ tone: "info", title: "เลือกเพื่อนอย่างน้อย 1 คน", detail: "แตะชื่อเพื่อนในการ์ดก่อนหน้า แล้วกด หารเท่ากัน อีกครั้ง", chips: [] });
        }
        const hit = await ownExpense(owner, s.id);
        if (!hit) { await deleteDoc(sessionRef(userId)); return info("ไม่พบรายการนี้", "อาจถูกลบหรือเปลี่ยนเป็นบิลหารไปแล้ว"); }
        if (isClosedMonth(hit.data.date, now())) return info("เดือนนี้ปิดยอดแล้ว", closedMonthMessage(hit.data.date));
        const amount = Math.round(Number(hit.data.amount) * 100) / 100;
        if (!(amount > 0)) return info("ยอดของรายการนี้ไม่ถูกต้อง");
        const splits = equalSplitPayerLast(amount, people, owner);
        const bill = {
            payer: owner, icon: hit.data.icon || "fa-money-bill", date: hit.data.date, desc: String(hit.data.desc || "ไม่ระบุ").slice(0, 100),
            amount, splits, paymentType: "normal", timestamp: now(), source: "line"
        };
        await addDoc(collection(db, "transactions"), withPeople("transactions", bill));
        await deleteDoc(hit.ref);
        await deleteDoc(sessionRef(userId));
        // รายการนี้ไม่ใช่รายจ่ายส่วนตัวแล้ว "ลบรายการล่าสุด" ต้องไม่ไปลบบิลกลุ่ม
        try {
            const last = await getDoc(doc(db, LAST_ENTRY_COL, userId));
            if (last.exists() && last.data().id === s.id) await deleteDoc(doc(db, LAST_ENTRY_COL, userId));
        } catch (e) { /* ไม่เป็นไร */ }
        const rows = [["คนจ่าย", `${owner} (คุณ)`], ...Object.entries(splits).slice(0, 8).map(([n, v]) => [n === owner ? `${n} (คุณ)` : n, formatBaht(v, v % 1 ? 2 : 0)])];
        return buildInfoCard({
            kicker: "หารบิลแล้ว", big: formatBaht(amount, amount % 1 ? 2 : 0), title: bill.desc,
            altText: `หารบิลแล้ว ${bill.desc} ${formatBaht(amount)} กับ ${people.length} คน`,
            rows, note: "เปลี่ยนจากรายจ่ายส่วนตัวเป็นบิลกลุ่มแล้ว เพื่อนเห็นในหน้ารายการ และยอดเคลียร์เงินอัปเดตทันที",
            buttons: [{ type: "button", style: "primary", color: "#2343c9", height: "sm", action: { type: "uri", label: "เปิดหน้าเคลียร์เงิน", uri: `${LIFF_URL}#clear` } }]
        });
    }

    return { start, toggle, cancel, confirm };
}
