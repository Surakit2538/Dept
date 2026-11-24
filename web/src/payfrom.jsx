// จ่ายจากบัญชี/บัตรไหน (เรื่อง 7 แบบ A): แถวชิปเลื่อนซ้ายขวาในฟอร์มรายจ่ายส่วนตัว + ป้ายในหน้ารายการ + กุญแจกรอง
// ข้อมูลบัญชีและสีอยู่ lib/pay-from.mjs ที่เดียว บัตร = บัตรที่ตั้งไว้ในแท็บ ฉัน (เฉพาะคนที่ผู้ดูแลเปิดเตือนบัตรให้)
import { PAY_ACCOUNTS, accountOf, payKeyOf } from "../../lib/pay-from.mjs";
import { cardIdForItem } from "../../lib/card-cycle.mjs";

const USE_KEY = "dm:v2:payuse";
// สีบัตรตามลายที่เลือกในหน้าบัตร (cards.jsx)
const CARD_BG = { accent: ["#2343c9", "#ffffff"], navy: ["#121a33", "#ffffff"], sun: ["#ffc23d", "#2e2100"], green: ["#0f7f63", "#ffffff"], black: ["#0e0e0e", "#ffffff"], bronze: ["#241b17", "#ffffff"], copper: ["#8b3a16", "#ffffff"], midnight: ["#01012b", "#ffffff"], cyan: ["#1ccecb", "#ffffff"], sky: ["#50a5cb", "#ffffff"], peri: ["#5574b4", "#ffffff"], forest: ["#01332a", "#ffffff"], teal: ["#0a7a8d", "#ffffff"], gold: ["#b8923a", "#2e2100"], silver: ["#9aa3ad", "#2e2100"] };

function readUse() {
    try { const v = JSON.parse(localStorage.getItem(USE_KEY) || "[]"); return Array.isArray(v) ? v : []; } catch (e) { return []; }
}
/** จำอันที่ใช้ล่าสุดไว้หน้าสุด (เก็บในเครื่อง) */
export function rememberPay(key) {
    if (!key) return;
    try { localStorage.setItem(USE_KEY, JSON.stringify([key, ...readUse().filter((k) => k !== key)].slice(0, 12))); } catch (e) { /* ไม่เป็นไร */ }
}
/** อันที่ใช้ล่าสุด (ไว้เลือกให้ก่อนในฟอร์มใหม่) ต้องยังมีอยู่ในตัวเลือก */
export function lastPay(options) {
    const keys = new Set(options.map((o) => o.key));
    return readUse().find((k) => keys.has(k)) || "";
}

// ชื่อย่อบนป้ายบัตร (ตามรายชื่อธนาคารบัตรใน lib/card-cycle.mjs) ไม่รู้จัก = 3 ตัวแรก
const CARD_SHORT = { KTC: "KTC", CardX: "CX", ttb: "ttb", SCB: "SCB", KBank: "K", Krungsri: "BAY", UOB: "UOB" };
const short = (bank) => CARD_SHORT[bank] || String(bank || "").replace(/[^A-Za-z0-9ก-๙]/g, "").slice(0, 3) || "บัตร";

/** ตัวเลือกทั้งหมด: บัตรของฉันก่อน แล้วเงินสด/ธนาคาร เรียงอันที่ใช้บ่อยไว้หน้า */
export function payOptions(cards = []) {
    const list = [
        ...(cards || []).map((c) => {
            const [bg, fg] = CARD_BG[c.color] || CARD_BG.accent;
            return { key: "c:" + c.id, label: `${c.bank}${c.last4 ? ` ••${c.last4}` : ""}`, short: short(c.bank), bg, fg, card: true };
        }),
        ...PAY_ACCOUNTS.map((a) => ({ key: "a:" + a.key, label: a.label, short: a.short, bg: a.bg, fg: a.fg, card: false }))
    ];
    const use = readUse();
    const rank = (k) => { const i = use.indexOf(k); return i < 0 ? 99 : i; };
    return list.map((o, i) => ({ o, i })).sort((a, b) => rank(a.o.key) - rank(b.o.key) || a.i - b.i).map((x) => x.o);
}

/** ค่าเก็บลงรายการจากกุญแจ c:/a: */
export function payFields(key) {
    if (key && key.startsWith("c:")) return { cardId: key.slice(2), account: "" };
    if (key && key.startsWith("a:")) return { cardId: "", account: key.slice(2) };
    return { cardId: "", account: "" };
}

/** กุญแจของรายการ (รายการจาก SMS/อีเมลบัตรที่จับคู่บัตรได้ = บัตรใบเดียวกัน) */
export function payKeyFor(it, cards = []) {
    return payKeyOf(it, (x) => cardIdForItem(x, cards || []));
}

/** ข้อมูลป้ายของกุญแจ (ใช้ทั้งป้ายในแถวและชิปกรอง) */
export function payInfo(key, cards = []) {
    if (!key) return null;
    if (key.startsWith("c:")) {
        const c = (cards || []).find((x) => "c:" + x.id === key);
        if (!c) return { label: "บัตร", short: "บัตร", bg: CARD_BG.accent[0], fg: CARD_BG.accent[1] };
        const [bg, fg] = CARD_BG[c.color] || CARD_BG.accent;
        return { label: `${c.bank}${c.last4 ? ` ••${c.last4}` : ""}`, short: short(c.bank), bg, fg };
    }
    if (key.startsWith("a:")) {
        const a = accountOf(key.slice(2));
        return a ? { label: a.label, short: a.short, bg: a.bg, fg: a.fg } : null;
    }
    if (key.startsWith("s:")) return { label: `บัตร ${key.slice(2)}`, short: "", bg: "", fg: "" };
    return null;
}

export function PayBadge({ info, size = "s" }) {
    if (!info || !info.short) return null;
    return <span class={`paybk ${size}`} style={{ background: info.bg, color: info.fg }} aria-hidden="true">{info.short}</span>;
}

/** ป้ายเล็กต่อท้ายในแถวรายการ */
export function PayTag({ it, cards = [] }) {
    const info = payInfo(payKeyFor(it, cards), cards);
    if (!info) return null;
    return <span class="paytag"><PayBadge info={info} />{info.label}</span>;
}

/** แถวชิปในฟอร์ม: แตะอันที่เลือกอยู่ซ้ำ = ไม่ระบุ */
export function PayFromPicker({ value, onChange, cards = [], labelId = "pay-l" }) {
    const options = payOptions(cards);
    return (
        <div class="field">
            <span class="fl" id={labelId}>จ่ายจาก <span class="mute">(ไม่เลือกก็ได้)</span></span>
            <div class="paychips" role="group" aria-labelledby={labelId}>
                {options.map((o) => (
                    <button type="button" key={o.key} class={value === o.key ? "on" : ""} aria-pressed={value === o.key} onClick={() => onChange(value === o.key ? "" : o.key)}>
                        <PayBadge info={o} />{o.label}
                    </button>
                ))}
            </div>
        </div>
    );
}
