/**
 * การ์ด LINE (Flex Message) ดีไซน์ใหม่ "หัวน้ำเงิน" ของ Dept Money: กราฟ ไอคอนหมวด และรูปเพื่อน ทำจากกล่องสีของ LINE เอง
 * (ไม่ใช้บริการทำกราฟภายนอก ตัวเลขเงินไม่ถูกส่งออกไปที่อื่น) ไม่มี emoji สีจาก design/tokens.json เท่านั้น
 * - buildMonthlyCard: สรุปเดือนแบบปัด (ภาพรวม, หมวด, รายสัปดาห์, ใครค้างคุณ) แชตส่วนตัวเท่านั้น
 * - buildOwedCard: ใครค้างคุณ (มีปุ่มเตือน) · buildTransferMessage / buildReminderCard: ต้องโอนให้ใคร การ์ดละคน + QR
 * - buildPendingCarousel: รายการบันทึกอัตโนมัติที่รอยืนยัน · buildExpenseSavedCard: หลังพิมพ์ "กาแฟ 65"
 * - buildHowToCarousel: วิธีใช้ทีละขั้น · buildGroupDebtCard: การ์ดในกลุ่ม (ไม่มีตัวเลขส่วนตัว) · buildIncomeSavedCard
 * ฟังก์ชันล้วน ทดสอบได้ ไม่เรียกเครือข่าย ห้าม import แพ็กเกจ npm
 */
export const APP_URL = "https://dept-game.vercel.app";
export const LOGO_URL = `${APP_URL}/icons/icon-192.png?v=3`; // ?v= บังคับ LINE โหลดโลโก้ใบเสร็จใหม่ (เคยจำโลโก้ dm เดิมไว้)
// ลิงก์เปิดแอปจากแชต LINE ใช้แบบ LIFF เพื่อให้ LINE ล็อกอินให้เงียบๆ (ลิงก์เว็บธรรมดาต้องผ่านหน้าล็อกอินทุกครั้ง)
export const LIFF_URL = "https://liff.line.me/2008948704-db2goT00";
export const UNDO_TEXT = "ลบรายการล่าสุด";

const C = {
    ink: "#121a33", mute: "#5e6883", line: "#e3e8f5", chip: "#ecf0fb", bg: "#f3f6fd", soft: "#dbe4fd",
    accent: "#2343c9", accent2: "#4466f2", sun: "#ffc23d", sunInk: "#2e2100", sunSoft: "#fff0c2",
    receive: "#0f7f63", pay: "#b43f16", warn: "#a8620a", white: "#ffffff", glass: "#ffffff33"
};
const GRAD = { type: "linearGradient", angle: "135deg", startColor: C.accent2, endColor: C.accent };

/** 6 หมวด: หน้าตาเดียวกับหน้าแรกของเว็บ (กล่องสีเทาอ่อน + ไอคอนสีส้ม) ไอคอนเป็นรูปในเว็บเรา /icons/cat */
export const CAT_STYLE = {
    food: { label: "อาหาร", bg: C.chip, icon: "food-pay" },
    bills: { label: "บิล/รายเดือน", bg: C.chip, icon: "bills-pay" },
    goods: { label: "ของใช้", bg: C.chip, icon: "goods-pay" },
    travel: { label: "เดินทาง", bg: C.chip, icon: "travel-pay" },
    fun: { label: "บันเทิง", bg: C.chip, icon: "fun-pay" },
    other: { label: "อื่นๆ", bg: C.chip, icon: "other-pay" }
};
export const iconUrl = (name) => `${APP_URL}/icons/cat/${name}.png`;

/** ปุ่มลัดใต้ข้อความ (กดแล้วส่งข้อความนั้นให้บอท) */
export const MAIN_CHIPS = ["สรุปเดือนนี้", "ใครค้างฉัน", "ฉันต้องโอน", "รอยืนยัน", "วิธีใช้"];

const TH_MONTHS = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.", "ธ.ค."];
export function monthLabelTh(month) {
    const [y, m] = String(month).split("-").map(Number);
    return `${TH_MONTHS[m - 1]} ${y + 543}`;
}

export function formatBaht(n, decimals = 0) {
    const v = Math.abs(Number(n) || 0);
    return "฿" + v.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
}
const bahtAuto = (n) => formatBaht(n, Number(n) % 1 ? 2 : 0);

// ---------- ชิ้นส่วนพื้นฐาน ----------
const text = (t, o = {}) => ({ type: "text", text: String(t === "" || t === undefined || t === null ? "-" : t), wrap: true, ...o });
const box = (layout, contents, o = {}) => ({ type: "box", layout, contents, ...o });
const filler = () => ({ type: "filler" });
const sep = (margin = "md") => ({ type: "separator", margin, color: C.line });
const px = (n) => `${Math.round(n)}px`;
const clampPct = (p) => Math.max(0, Math.min(100, Math.round(Number(p) || 0)));

export function initials(name) {
    const clean = String(name || "").replace(/[\s‍️]|\p{Extended_Pictographic}/gu, "");
    return (Array.from(clean).slice(0, 2).join("") || "?").toUpperCase();
}

/** กล่องไอคอนหมวด (สี่เหลี่ยมมุมมนสีหมวด + ไอคอน) */
function tile(catKey, size = 40) {
    const st = CAT_STYLE[catKey] || CAT_STYLE.other;
    return box("vertical", [{ type: "image", url: iconUrl(st.icon), size: px(size * 0.56), aspectMode: "fit", aspectRatio: "1:1" }], {
        width: px(size), height: px(size), cornerRadius: px(size * 0.3), backgroundColor: st.bg,
        justifyContent: "center", alignItems: "center", flex: 0
    });
}

/** รูปเพื่อน: รูปโปรไฟล์ LINE ถ้ามี ไม่มีใช้ตัวอักษรย่อ */
function avatar(name, { pictureUrl = "", size = 40, bg = C.sun, color = C.sunInk, label = "" } = {}) {
    const inner = /^https:\/\//.test(pictureUrl)
        ? { type: "image", url: pictureUrl, size: "full", aspectMode: "cover", aspectRatio: "1:1" }
        : text(label || initials(name), { size: size >= 36 ? "sm" : "xxs", weight: "bold", color, align: "center", wrap: false });
    return box("vertical", [inner], {
        width: px(size), height: px(size), cornerRadius: px(size / 2), backgroundColor: bg,
        justifyContent: "center", alignItems: "center", flex: 0
    });
}

/** แถบเดียว (percent 0-100) */
function bar(percent, color, { track = C.chip, h = 8 } = {}) {
    const p = Math.max(percent > 0 ? 3 : 0, clampPct(percent));
    return box("vertical", [box("vertical", [filler()], { width: `${p}%`, height: px(h), backgroundColor: color, cornerRadius: px(h / 2) })], {
        height: px(h), backgroundColor: track, cornerRadius: px(h / 2)
    });
}

/** แถบแบ่งสี segs = [{percent, color}] */
function stacked(segs, { h = 14, track = C.chip } = {}) {
    const parts = segs.filter((s) => s.percent > 0).map((s) => box("vertical", [filler()], { width: `${Math.max(2, clampPct(s.percent))}%`, height: px(h), backgroundColor: s.color, flex: 0 }));
    return box("horizontal", parts.length ? parts : [filler()], { height: px(h), backgroundColor: track, cornerRadius: px(h / 2) });
}

/** กราฟแท่งตั้ง values = ตัวเลข, labels = ชื่อใต้แท่ง, hi = ลำดับแท่งที่เน้น */
function columns(values, labels, hi, hiColor = C.accent, maxH = 64) {
    const max = Math.max(1, ...values);
    return box("horizontal", values.map((v, i) => box("vertical", [
        box("vertical", [filler()], { height: px(Math.max(4, Math.round((v / max) * maxH))), backgroundColor: i === hi ? hiColor : C.soft, cornerRadius: "4px" }),
        text(labels[i], { size: "xxs", color: C.mute, align: "center", wrap: false, margin: "xs" })
    ], { flex: 1, justifyContent: "flex-end" })), { height: px(maxH + 22), spacing: "sm", alignItems: "flex-end" });
}

/** ป้ายเดือนมุมขวาบนของหัวการ์ด */
const monthPill = (label, sun = false) => box("vertical", [text(label, { size: "xxs", weight: "bold", color: sun ? C.sunInk : C.white, wrap: false })], {
    backgroundColor: sun ? "#ffffff80" : C.glass, cornerRadius: "10px", paddingStart: "8px", paddingEnd: "8px", paddingTop: "2px", paddingBottom: "2px", flex: 0
});

/** หัวการ์ดน้ำเงินไล่สี (หรือทานตะวัน) ป้ายเล็ก + เดือน + ตัวเลขใหญ่ + ส่วนเสริม */
function head({ label, month, big, extra = [], sun = false, logo = false }) {
    const ink = sun ? C.sunInk : C.white;
    const top = box("horizontal", [
        ...(logo ? [{ type: "image", url: LOGO_URL, size: "20px", aspectMode: "cover", flex: 0 }] : []),
        text(label, { size: "xs", color: sun ? C.sunInk : C.soft, flex: 1, gravity: "center", wrap: false, ...(logo ? { margin: "sm" } : {}) }),
        ...(month ? [monthPill(month, sun)] : [])
    ], { alignItems: "center" });
    return box("vertical", [top, ...(big !== undefined ? [text(big, { size: "xxl", weight: "bold", color: ink, wrap: false, margin: "sm" })] : []), ...extra], {
        paddingAll: "16px", ...(sun ? { backgroundColor: C.sun } : { background: GRAD })
    });
}

const btnPrimary = (label, action) => ({ type: "button", style: "primary", color: C.accent, height: "sm", action: { ...action, label } });
const btnSecondary = (label, action) => ({ type: "button", style: "secondary", color: C.chip, height: "sm", action: { ...action, label } });
const uri = (u) => ({ type: "uri", uri: u });
const postback = (data, displayText) => ({ type: "postback", data, ...(displayText ? { displayText: String(displayText).slice(0, 300) } : {}) });
const message = (t) => ({ type: "message", text: t });

function bubble({ header, body = [], footer = [], size = "mega" }) {
    const b = { type: "bubble", size };
    if (header) b.header = { ...header, paddingAll: header.paddingAll || "16px" };
    b.body = box("vertical", body.length ? body : [filler()], { paddingAll: "14px", spacing: "md" });
    if (footer.length) b.footer = box("vertical", footer, { paddingAll: "12px", paddingTop: "0px", spacing: "sm" });
    return b;
}
const flex = (altText, contents) => ({ type: "flex", altText: String(altText).slice(0, 400), contents });
const carousel = (bubbles) => (bubbles.length === 1 ? bubbles[0] : { type: "carousel", contents: bubbles.slice(0, 12) });

/** ใส่ปุ่มลัดใต้ข้อความ (items = ข้อความ หรือ {label, action}) */
export function withChips(msg, items = MAIN_CHIPS) {
    return {
        ...msg,
        quickReply: {
            items: items.slice(0, 13).map((it) => ({ type: "action", action: typeof it === "string" ? { type: "message", label: it.slice(0, 20), text: it } : { ...it.action, label: String(it.label).slice(0, 20) } }))
        }
    };
}

const statBox = (label, value, color = C.ink) => box("vertical", [text(label, { size: "xxs", color: C.mute }), text(value, { size: "md", weight: "bold", color, wrap: false })], {
    backgroundColor: C.bg, cornerRadius: "12px", paddingAll: "10px", flex: 1
});

// ======================================================================
// 1. หลังพิมพ์ "กาแฟ 65": การ์ดบันทึกแล้ว + กราฟ 7 วัน
// ======================================================================
/** days = [{label, satang, today}] */
/** สีแถบงบ: ปกติ น้ำเงิน / ใช้เกิน 80% ทานตะวัน / เกินงบ ส้มอิฐ (เหมือนเว็บ) */
const LEVEL_COLOR = { ok: C.accent, near: C.sun, over: C.pay, none: C.accent };

/** กล่องงบในการ์ด: งบหมวดนั้น (ถ้าตั้ง) + งบรวม */
function budgetBox(budget, catKey) {
    const st = CAT_STYLE[catKey] || CAT_STYLE.other;
    const t = budget.total;
    const c = budget.cat;
    const leftText = (x) => (x.leftSat >= 0 ? `เหลือ ${formatBaht(x.leftSat / 100)}` : `เกินงบ ${formatBaht(-x.leftSat / 100)}`);
    const rows = [];
    if (c) {
        rows.push(box("horizontal", [
            text(`งบ${st.label}`, { size: "sm", weight: "bold", color: C.ink, flex: 1 }),
            text(`${leftText(c)} / ${formatBaht(c.budgetSat / 100)}`, { size: "xs", weight: "bold", color: c.leftSat < 0 ? C.pay : C.ink, flex: 0, wrap: false, gravity: "center" })
        ]));
        rows.push(bar(c.percent, LEVEL_COLOR[c.level], { track: C.line }));
        rows.push(box("horizontal", [
            text("งบรวมเดือนนี้", { size: "xxs", color: C.mute, flex: 1 }),
            text(`${leftText(t)} / ${formatBaht(t.budgetSat / 100)}`, { size: "xxs", color: t.leftSat < 0 ? C.pay : C.mute, flex: 0, wrap: false })
        ]));
    } else {
        rows.push(box("horizontal", [
            text("งบรวมเดือนนี้", { size: "sm", weight: "bold", color: C.ink, flex: 1 }),
            text(`${leftText(t)} / ${formatBaht(t.budgetSat / 100)}`, { size: "xs", weight: "bold", color: t.leftSat < 0 ? C.pay : C.ink, flex: 0, wrap: false, gravity: "center" })
        ]));
        rows.push(bar(t.percent, LEVEL_COLOR[t.level], { track: C.line }));
    }
    return box("vertical", rows, { backgroundColor: C.chip, cornerRadius: "12px", paddingAll: "10px", spacing: "sm" });
}

/** กราฟ 7 วันบนหัวน้ำเงิน (วันนี้สีทานตะวัน วันอื่นขาวโปร่ง) */
function headBars(days) {
    const max = Math.max(1, ...days.map((d) => d.satang));
    return box("horizontal", days.map((d) => box("vertical", [
        box("vertical", [filler()], { height: px(Math.max(4, Math.round((d.satang / max) * 34))), backgroundColor: d.today ? C.sun : "#ffffff47", cornerRadius: "3px" })
    ], { flex: 1, justifyContent: "flex-end" })), { height: "34px", spacing: "xs", alignItems: "flex-end", margin: "md" });
}

/**
 * หลังพิมพ์ "กาแฟ 60": หัวน้ำเงิน (ยอด ชื่อ หมวด กราฟ 7 วัน) + กล่องงบ (ถ้าตั้งงบ) + ปุ่ม หารกับเพื่อน (หลัก) / ลบรายการนี้
 * budget = { total: สถานะงบรวม, cat: สถานะงบหมวดนี้ | null } จาก lib/budget.mjs
 */
export function buildExpenseSavedCard({ id = "", desc, amount, catKey = "other", days = [], budget = null, month = "" }) {
    const st = CAT_STYLE[catKey] || CAT_STYLE.other;
    const todaySat = (days.find((d) => d.today) || { satang: 0 }).satang;
    const mLabel = month ? TH_MONTHS[Number(month.slice(5, 7)) - 1] || "" : "";
    const headParts = [
        box("horizontal", [
            { type: "image", url: LOGO_URL, size: "20px", aspectMode: "cover", flex: 0 },
            text("Dept Money · บันทึกแล้ว", { size: "xs", color: C.soft, flex: 1, gravity: "center", wrap: false, margin: "sm" }),
            ...(mLabel ? [monthPill(mLabel)] : [])
        ], { alignItems: "center" }),
        box("horizontal", [
            box("vertical", [
                text(bahtAuto(amount), { size: "3xl", weight: "bold", color: C.white, wrap: false }),
                text(`${desc} · ${st.label}`, { size: "sm", color: C.soft })
            ], { flex: 1, justifyContent: "center" }),
            box("vertical", [{ type: "image", url: iconUrl(st.icon), size: "26px", aspectMode: "fit", aspectRatio: "1:1" }], {
                width: "48px", height: "48px", cornerRadius: "24px", backgroundColor: C.white, justifyContent: "center", alignItems: "center", flex: 0
            })
        ], { alignItems: "center", margin: "md" })
    ];
    if (days.length) {
        headParts.push(headBars(days));
        headParts.push(box("horizontal", [
            text("7 วันล่าสุด", { size: "xxs", color: C.soft, flex: 1 }),
            text(`วันนี้ ${formatBaht(todaySat / 100)}`, { size: "xxs", weight: "bold", color: C.white, flex: 0, wrap: false })
        ], { margin: "xs" }));
    }
    const body = [];
    if (budget && budget.total) body.push(budgetBox(budget, catKey));
    body.push(text(`เห็นเฉพาะคุณ บันทึกผิดพิมพ์ "${UNDO_TEXT}" ภายใน 15 นาที`, { size: "xxs", color: C.mute }));
    return withChips(flex(`บันทึกรายจ่าย ${bahtAuto(amount)} ${desc}`, bubble({
        header: box("vertical", headParts, { paddingAll: "16px", background: GRAD }),
        body,
        // หารกับเพื่อน (ปุ่มหลัก ซ้าย): เปลี่ยนรายการนี้เป็นบิลกลุ่มในแชต (lib/line-split.mjs) · ลบรายการนี้ (ขวา)
        footer: [box("horizontal", [
            ...(id ? [btnPrimary("หารกับเพื่อน", postback(`w:split:${id}`, "หารกับเพื่อน"))] : []),
            btnSecondary("ลบรายการนี้", message(UNDO_TEXT))
        ], { spacing: "sm" })]
    })));
}

// ======================================================================
// 2. ต้องโอนให้ใคร (ฉันต้องโอน / เตือนวันที่ 25 / เพื่อนกดเตือน): การ์ดละคน + QR
// ======================================================================
const ppDigits = (n) => { const d = String(n || "").replace(/[^0-9]/g, ""); return d.length === 10 || d.length === 13 ? d : ""; };

/** ลิงก์รูป QR พร้อมเพย์ (บริการเดียวกับหน้าเว็บ) ว่างถ้าไม่มีพร้อมเพย์ที่ถูกต้องหรือยอดไม่เกิน 0 */
export function promptpayQrUrl(promptpay, amount) {
    const d = ppDigits(promptpay);
    const a = Math.round(Number(amount) * 100) / 100;
    return d && a > 0 ? `https://promptpay.io/${d}/${a}.png` : "";
}

const SEG_COLORS = [C.accent, C.sun, C.accent2, "#a9bbff", "#17245a", C.mute]; // โทนน้ำเงิน-ทานตะวันของเว็บ

function transferBubble(d, i, n, monthLabel, kicker, from) {
    const qr = promptpayQrUrl(d.promptpay, d.amount);
    const flow = box("horizontal", [
        box("vertical", [avatar(from.name || "คุณ", { pictureUrl: from.pictureUrl, label: from.name ? "" : "คุณ", bg: C.white, color: C.accent }), text("คุณ", { size: "xxs", color: C.white, align: "center", margin: "xs" })], { flex: 0, alignItems: "center" }),
        box("vertical", [
            text(formatBaht(d.amount), { size: "lg", weight: "bold", color: C.white, align: "center", wrap: false }),
            box("horizontal", [box("vertical", [filler()], { height: "3px", backgroundColor: C.sun, cornerRadius: "2px", flex: 1 }), box("vertical", [filler()], { width: "8px", height: "8px", backgroundColor: C.sun, cornerRadius: "4px", flex: 0 })], { alignItems: "center", margin: "xs" })
        ], { flex: 1, paddingStart: "8px", paddingEnd: "8px", paddingBottom: "14px", justifyContent: "center" }),
        box("vertical", [avatar(d.to, { pictureUrl: d.pictureUrl }), text(d.to, { size: "xxs", color: C.white, align: "center", margin: "xs", wrap: false })], { flex: 0, alignItems: "center" })
    ], { alignItems: "center", margin: "md" });
    const body = qr
        ? [{ type: "image", url: qr, size: "lg", aspectRatio: "1:1", aspectMode: "fit", action: uri(qr) }, text("สแกนจากแอปธนาคาร หรือแคปหน้าจอไว้แล้วเลือกรูปจากอัลบั้ม", { size: "xs", color: C.mute, align: "center" })]
        : [text(`${d.to} ยังไม่ได้ใส่พร้อมเพย์ในแอป เปิดหน้าเคลียร์เงินเพื่อดูวิธีโอน`, { size: "sm", color: C.ink })];
    return bubble({
        size: "kilo",
        header: head({ label: n > 1 ? `${kicker} ${i} จาก ${n}` : kicker, month: monthLabel, extra: [flow] }),
        body,
        footer: [box("horizontal", [
            ...(qr ? [btnSecondary("ขยาย QR", uri(qr))] : []),
            btnPrimary("ส่งสลิป", uri(`${LIFF_URL}#clear`))
        ], { spacing: "sm" })]
    });
}

function transferSummary(debts, monthLabel) {
    const total = debts.reduce((a, d) => a + d.amount, 0);
    return bubble({
        size: "kilo",
        header: head({ label: "รวมที่ต้องโอน", month: monthLabel, big: formatBaht(total), sun: true }),
        body: [
            stacked(debts.map((d, i) => ({ percent: total ? (d.amount / total) * 100 : 0, color: SEG_COLORS[i % SEG_COLORS.length] }))),
            ...debts.map((d, i) => box("horizontal", [
                box("vertical", [filler()], { width: "10px", height: "10px", cornerRadius: "3px", backgroundColor: SEG_COLORS[i % SEG_COLORS.length], flex: 0 }),
                text(d.to, { size: "sm", color: C.ink, flex: 1, margin: "sm" }),
                text(formatBaht(d.amount), { size: "sm", weight: "bold", color: C.pay, flex: 0, wrap: false })
            ], { alignItems: "center" }))
        ],
        footer: [btnPrimary("เปิดหน้าเคลียร์เงิน", uri(`${LIFF_URL}#clear`))]
    });
}

/** debts = [{to, amount(บาทเต็ม), promptpay?, pictureUrl?}] คนละการ์ด (สูงสุด 10 คน) + ใบสรุปเมื่อมีหลายคน from = ผู้โอน {name, pictureUrl} (ไม่ระบุ = "คุณ") */
export function buildTransferMessage({ monthLabel, debts, kicker = "ต้องโอน", altPrefix = "ต้องโอน", from = {} }) {
    const list = debts.slice(0, 10);
    const total = debts.reduce((a, d) => a + d.amount, 0);
    const bubbles = list.map((d, i) => transferBubble(d, i + 1, list.length, monthLabel, kicker, from));
    if (list.length > 1) bubbles.push(transferSummary(list, monthLabel));
    return flex(`${altPrefix} ${formatBaht(total)}${list.length > 1 ? ` ให้ ${list.length} คน` : list[0] ? ` ให้ ${list[0].to}` : ""}`, carousel(bubbles));
}

/** ข้อความเตือนลูกหนี้ (วันที่ 25 และเมื่อเพื่อนกดเตือน) */
export function buildReminderCard({ monthLabel, debts, from = {} }) {
    return buildTransferMessage({ monthLabel, debts, kicker: "เตือนยอดค้าง", altPrefix: "เตือนยอดค้างชำระ", from });
}

// ======================================================================
// 3. รายการรอยืนยันจาก iPhone
// ======================================================================
const dotRow = (i, n) => n > 10
    ? text(`${i} จาก ${n}`, { size: "xxs", color: C.mute, align: "center" })
    : box("horizontal", Array.from({ length: n }, (_, k) => box("vertical", [filler()], { width: k + 1 === i ? "16px" : "6px", height: "6px", cornerRadius: "3px", backgroundColor: k + 1 === i ? C.accent : C.soft, flex: 0 })), { spacing: "xs", justifyContent: "center" });

/** items = [{id, desc, amount, when, source, catKey}] total = จำนวนที่รอทั้งหมด */
export function buildPendingCarousel({ items, total = items.length }) {
    if (!items.length) return buildNoticeCard({ title: "ไม่มีรายการรอยืนยัน", detail: "รายการที่บันทึกอัตโนมัติยืนยันครบแล้ว" });
    const shown = items.slice(0, 9);
    const bubbles = shown.map((it, k) => bubble({
        size: "kilo",
        body: [
            box("horizontal", [
                box("vertical", [text(it.source || "อัตโนมัติ", { size: "xxs", weight: "bold", color: C.white, wrap: false })], { backgroundColor: C.ink, cornerRadius: "6px", paddingStart: "6px", paddingEnd: "6px", paddingTop: "2px", paddingBottom: "2px", flex: 0 }),
                text(it.when || "", { size: "xxs", color: C.mute, flex: 1, margin: "sm", gravity: "center" }),
                box("vertical", [text("รอยืนยัน", { size: "xxs", weight: "bold", color: C.accent, wrap: false })], { backgroundColor: C.chip, cornerRadius: "10px", paddingStart: "8px", paddingEnd: "8px", paddingTop: "2px", paddingBottom: "2px", flex: 0 })
            ], { alignItems: "center" }),
            box("horizontal", [
                tile(it.catKey, 40),
                box("vertical", [text(it.desc, { size: "md", weight: "bold", color: C.ink, maxLines: 2 }), text((CAT_STYLE[it.catKey] || CAT_STYLE.other).label, { size: "xxs", color: C.mute })], { flex: 1, margin: "md", justifyContent: "center" })
            ], { alignItems: "center" }),
            box("horizontal", [text("ยอด", { size: "xs", color: C.mute, flex: 1, gravity: "bottom" }), text(bahtAuto(it.amount), { size: "xl", weight: "bold", color: C.pay, flex: 0, wrap: false })], { alignItems: "flex-end" }),
            dotRow(k + 1, total)
        ],
        footer: [
            btnPrimary("ยืนยัน", postback(`w:ok:${it.id}`, `ยืนยัน ${it.desc}`)),
            box("horizontal", [btnSecondary("เปลี่ยนหมวด", postback(`w:cat:${it.id}`, "เปลี่ยนหมวด")), btnSecondary("ลบ", postback(`w:del:${it.id}`, "ลบ"))], { spacing: "sm" })
        ]
    }));
    if (total > shown.length) {
        bubbles.push(bubble({
            size: "kilo",
            body: [text(`ยังมีอีก ${total - shown.length} รายการ`, { size: "md", weight: "bold", color: C.ink }), text("ดูและยืนยันทั้งหมดได้ที่หน้ารายการในเว็บ", { size: "sm", color: C.mute })],
            footer: [btnPrimary("เปิดหน้ารายการ", uri(`${LIFF_URL}#list`))]
        }));
    }
    return withChips(flex(`รอยืนยัน ${total} รายการ`, carousel(bubbles)), [
        { label: `ยืนยันทั้งหมด (${total})`, action: postback("w:okall", "ยืนยันทั้งหมด") }, "สรุปเดือนนี้"
    ]);
}

/** ถามหมวดใหม่: การ์ดไอคอน 6 หมวด แตะเลือกได้เลย */
export function buildCategoryPicker({ id, desc }) {
    const cell = ([k, st]) => box("vertical", [tile(k, 44), text(st.label, { size: "xs", color: C.ink, align: "center", margin: "sm", wrap: false })], {
        flex: 1, alignItems: "center", paddingAll: "6px", cornerRadius: "12px", action: postback(`w:setcat:${id}:${k}`, `หมวด ${st.label}`)
    });
    const all = Object.entries(CAT_STYLE);
    return flex(`เลือกหมวดของ ${desc}`, bubble({
        size: "kilo",
        header: head({ label: "เปลี่ยนหมวด", big: undefined, extra: [text(desc, { size: "md", weight: "bold", color: C.white, margin: "xs" })] }),
        body: [box("horizontal", all.slice(0, 3).map(cell), { spacing: "sm" }), box("horizontal", all.slice(3).map(cell), { spacing: "sm" })],
        footer: [btnSecondary("ยกเลิก", postback("w:keep", "ยกเลิก"))]
    }));
}

/** การ์ดถาม 2 ทาง (ยืนยัน / ยกเลิก) ปุ่มหลักอยู่ขวา danger=true ใช้สีส้มกับปุ่มหลัก (เช่น ลบ) */
export function buildChoiceCard({ title, desc = "", yes, no, danger = false, altText }) {
    return flex(altText || title, bubble({
        size: "kilo",
        body: [
            text(title, { size: "md", weight: "bold", color: C.ink }),
            ...(desc ? [text(desc, { size: "sm", color: C.mute })] : [])
        ],
        footer: [box("horizontal", [
            btnSecondary(no.label, no.action),
            { type: "button", style: "primary", color: danger ? C.pay : C.accent, height: "sm", action: { ...yes.action, label: yes.label } }
        ], { spacing: "sm" })]
    }));
}

/** ถามก่อนลบ */
export function buildDeleteConfirm({ id, desc, amount }) {
    return buildChoiceCard({
        title: `ลบ "${desc}" ${bahtAuto(amount)} ใช่ไหม`, desc: "ลบแล้วกู้คืนไม่ได้", danger: true,
        yes: { label: "ลบ", action: postback(`w:delok:${id}`, "ลบ") },
        no: { label: "ไม่ลบ", action: postback("w:keep", "ไม่ลบ") }
    });
}

/** การ์ดแจ้งผล (บันทึก/ลบ/ยืนยันแล้ว) tone: ok = เครื่องหมายถูกน้ำเงิน, info = เทา */
export function buildNoticeCard({ title, detail = "", tone = "ok", buttons = [], chips = MAIN_CHIPS }) {
    const mark = tone === "ok"
        ? box("vertical", [{ type: "image", url: iconUrl("check"), size: "20px", aspectMode: "fit" }], { width: "36px", height: "36px", cornerRadius: "18px", backgroundColor: C.accent, justifyContent: "center", alignItems: "center", flex: 0 })
        : box("vertical", [{ type: "image", url: iconUrl("other-pay"), size: "20px", aspectMode: "fit" }], { width: "36px", height: "36px", cornerRadius: "18px", backgroundColor: C.chip, justifyContent: "center", alignItems: "center", flex: 0 });
    const msg = flex(detail ? `${title} ${detail}` : title, bubble({
        size: "kilo",
        body: [box("horizontal", [mark, box("vertical", [text(title, { size: "md", weight: "bold", color: C.ink }), ...(detail ? [text(detail, { size: "sm", color: C.mute })] : [])], { flex: 1, margin: "md", justifyContent: "center" })], { alignItems: "center" })],
        footer: buttons
    }));
    return chips && chips.length ? withChips(msg, chips) : msg;
}

/** การ์ดข้อมูลทั่วไป (สลิปโอนสำเร็จ, บันทึกบิลแล้ว ฯลฯ) rows = [[ชื่อ, ค่า, สี?]] */
export function buildInfoCard({ kicker, title, big, rows = [], note = "", buttons = [], altText }) {
    return flex(altText || title, bubble({
        size: "kilo",
        header: head({ label: kicker, big, extra: title ? [text(title, { size: "sm", color: C.soft, margin: "xs" })] : [] }),
        body: [
            ...rows.map(([k, v, color]) => box("horizontal", [
                text(k, { size: "sm", color: C.mute, flex: 2 }),
                text(v, { size: "sm", weight: "bold", color: color || C.ink, flex: 3, align: "end" })
            ])),
            ...(note ? [sep("md"), text(note, { size: "xs", color: C.mute })] : [])
        ],
        footer: buttons
    }));
}

/**
 * การ์ดคำถามระหว่างจดบันทึกในแชต (แทนการ์ดเทาแบบเดิม) actions = ปุ่มลัดแบบเดิมของ LINE
 * ตัวเลือกไม่เกิน 3 อัน -> เป็นปุ่มในการ์ด, มากกว่านั้น -> ปุ่มลัดใต้ข้อความเหมือนเดิม
 */
export function buildPromptMessage({ title, desc = "", hint = "", actions = [] }) {
    const asButtons = actions.length > 0 && actions.length <= 3;
    const body = [text(hint || (actions.length ? "เลือกจากปุ่ม หรือพิมพ์คำตอบ" : "พิมพ์คำตอบในแชต"), { size: "sm", color: C.mute })];
    const footer = asButtons ? [box(actions.length === 2 ? "horizontal" : "vertical", actions.map((a, i) => (i === 0
        ? btnPrimary(a.action.label, a.action) : btnSecondary(a.action.label, a.action))), { spacing: "sm" })] : [];
    const msg = flex(title, bubble({
        size: "kilo",
        header: head({ label: "จดบันทึก", extra: [text(title, { size: "lg", weight: "bold", color: C.white, margin: "xs" }), ...(desc ? [text(desc, { size: "xs", color: C.soft, margin: "xs" })] : [])] }),
        body,
        footer
    }));
    return asButtons || !actions.length ? msg : { ...msg, quickReply: { items: actions } };
}

/** หารกับเพื่อนจากแชต: แตะชื่อเพื่อเลือก/เอาออก (postback sp:t:ชื่อ) แล้วกด หารเท่ากัน (sp:ok) */
export function buildSplitPickCard({ desc, amount, members, selected = [], me }) {
    const on = new Set(selected);
    const chip = (m) => box("vertical", [text(m === me ? "คุณ" : m, { size: "sm", weight: "bold", color: on.has(m) ? C.white : C.accent, align: "center", wrap: false })], {
        flex: 1, backgroundColor: on.has(m) ? C.accent : C.chip, cornerRadius: "10px", paddingAll: "8px",
        action: postback(`sp:t:${encodeURIComponent(m)}`.slice(0, 300), m)
    });
    const list = members.slice(0, 18);
    const rows = [];
    for (let i = 0; i < list.length; i += 3) {
        const part = list.slice(i, i + 3).map(chip);
        while (part.length < 3) part.push(box("vertical", [filler()], { flex: 1 }));
        rows.push(box("horizontal", part, { spacing: "sm" }));
    }
    const n = selected.length;
    const each = n > 0 ? formatBaht(amount / n, (amount / n) % 1 ? 2 : 0) : "-";
    return flex(`หารกับเพื่อน ${desc} ${bahtAuto(amount)}`, bubble({
        header: head({ label: "หารกับเพื่อน", big: bahtAuto(amount), extra: [text(`${desc} · ${n > 1 ? `${n} คน คนละประมาณ ${each}` : "ยังไม่ได้เลือกเพื่อน"}`, { size: "xs", color: C.soft, margin: "xs" })] }),
        body: [text("แตะชื่อเพื่อเลือกหรือเอาออก คุณเป็นคนจ่าย หารเท่ากัน", { size: "xs", color: C.mute }), ...rows],
        footer: [
            box("horizontal", [btnSecondary("ยกเลิก", postback("sp:cancel", "ยกเลิก")), btnPrimary(n > 1 ? `หารเท่ากัน (${n} คน)` : "หารเท่ากัน", postback("sp:ok", "หารเท่ากัน"))], { spacing: "sm" }),
            { type: "button", style: "link", height: "sm", color: C.accent, action: { ...postback("sp:all", "เลือกทุกคน"), label: "เลือกทุกคน" } }
        ]
    }));
}

/** เลือกคนหาร: ชื่อเป็นปุ่มในการ์ด (เลือกแล้วเป็นสีน้ำเงิน) แตะซ้ำเพื่อเอาออก */
export function buildParticipantsCard({ members, selected = [] }) {
    const on = new Set(selected);
    const chip = (m) => box("vertical", [text(m, { size: "sm", weight: "bold", color: on.has(m) ? C.white : C.accent, align: "center", wrap: false })], {
        flex: 1, backgroundColor: on.has(m) ? C.accent : C.chip, cornerRadius: "10px", paddingAll: "8px", action: message(m)
    });
    const list = members.slice(0, 18);
    const rows = [];
    for (let i = 0; i < list.length; i += 3) {
        const part = list.slice(i, i + 3).map(chip);
        while (part.length < 3) part.push(box("vertical", [filler()], { flex: 1 }));
        rows.push(box("horizontal", part, { spacing: "sm" }));
    }
    return flex("หารกับใครบ้าง", bubble({
        header: head({ label: "จดบันทึก", extra: [text("หารกับใครบ้าง", { size: "lg", weight: "bold", color: C.white, margin: "xs" }), text(selected.length ? `เลือกแล้ว ${selected.length} คน: ${selected.join(", ")}` : "ยังไม่ได้เลือกใคร", { size: "xs", color: C.soft, margin: "xs" })] }),
        body: [text("แตะชื่อเพื่อเลือกหรือเอาออก", { size: "xs", color: C.mute }), ...rows],
        footer: [box("horizontal", [btnSecondary("เลือกทุกคน", message("ทุกคน")), btnPrimary("ยืนยันรายชื่อ", message("ยืนยัน"))], { spacing: "sm" })]
    }));
}

// ======================================================================
// 4. สรุปเดือนแบบปัด
// ======================================================================
function owedBody(p) {
    const owedTotal = p.owedToMe.reduce((a, o) => a + o.amount, 0);
    const iOweTotal = p.iOwe.reduce((a, o) => a + o.amount, 0);
    const body = [];
    if (!p.owedToMe.length) body.push(text("ไม่มีใครค้างคุณ", { size: "sm", color: C.mute }));
    p.owedToMe.slice(0, 6).forEach((d, i) => body.push(box("horizontal", [
        avatar(d.name, { pictureUrl: d.pictureUrl, size: 32, bg: i ? C.chip : C.sun, color: i ? C.accent : C.sunInk }),
        box("vertical", [
            box("horizontal", [text(d.name, { size: "sm", weight: "bold", color: C.ink, flex: 1 }), text(formatBaht(d.amount), { size: "sm", weight: "bold", color: C.receive, flex: 0, wrap: false })]),
            bar(d.share ?? 100, C.receive, { h: 6 })
        ], { flex: 1, margin: "md", spacing: "xs" }),
        box("vertical", [text("เตือน", { size: "xs", weight: "bold", color: C.accent, wrap: false })], {
            flex: 0, margin: "md", paddingStart: "10px", paddingEnd: "10px", paddingTop: "4px", paddingBottom: "4px", backgroundColor: C.chip, cornerRadius: "8px",
            action: { type: "postback", label: "เตือน", data: `remind:${encodeURIComponent(d.name)}` }
        })
    ], { alignItems: "center" })));
    if (p.owedToMe.length > 6) body.push(text(`และอีก ${p.owedToMe.length - 6} คน (ดูทั้งหมดในหน้าเคลียร์เงิน)`, { size: "xs", color: C.mute }));
    if (p.iOwe.length) {
        body.push(sep("lg"));
        body.push(box("horizontal", [text("คุณค้างเพื่อน", { size: "sm", weight: "bold", color: C.ink, flex: 1 }), text(formatBaht(iOweTotal), { size: "sm", weight: "bold", color: C.pay, flex: 0, wrap: false })]));
        p.iOwe.slice(0, 4).forEach((d) => body.push(box("horizontal", [
            avatar(d.name, { pictureUrl: d.pictureUrl, size: 28, bg: C.chip, color: C.accent }),
            box("vertical", [box("horizontal", [text(d.name, { size: "sm", color: C.ink, flex: 1 }), text(formatBaht(d.amount), { size: "sm", weight: "bold", color: C.pay, flex: 0, wrap: false })]), bar(d.share ?? 100, C.pay, { h: 6 })], { flex: 1, margin: "md", spacing: "xs" })
        ], { alignItems: "center" })));
    }
    const footer = [];
    if (p.owedToMe.length) footer.push(btnPrimary("เตือนทุกคน", { type: "postback", data: "remind:all" }));
    footer.push({ type: "button", style: "link", height: "sm", color: C.accent, action: { type: "uri", label: "เปิดหน้าเคลียร์เงิน", uri: `${LIFF_URL}#clear` } });
    return { owedTotal, body, footer };
}

function owedBubble(p) {
    const o = owedBody(p);
    return bubble({
        header: head({ label: "เพื่อนค้างคุณ", month: p.monthLabel, big: o.owedTotal > 0 ? formatBaht(o.owedTotal) : "ไม่มีใครค้าง", sun: true }),
        body: o.body,
        footer: o.footer
    });
}

/** ใครค้างคุณ (ใบเดียว) ใช้กับปุ่มลัด "ใครค้างฉัน" */
export function buildOwedCard(p) {
    const total = p.owedToMe.reduce((a, o) => a + o.amount, 0);
    return withChips(flex(total > 0 ? `เพื่อนค้างคุณ ${formatBaht(total)}` : "ไม่มีใครค้างคุณ", owedBubble(p)));
}

/**
 * @param {{name:string, monthLabel:string, hasIncome:boolean, netSatang:number, incomeBaht:number, spentBaht:number, spentPercent:number|null,
 *          owedToMe:Array<{name,amount,share,pictureUrl?}>, iOwe:Array<{name,amount,share,pictureUrl?}>,
 *          categories?:Array<{key,label,satang,percent}>, weeks?:Array<{label,satang}>, perDaySat?:number, personalSat?:number, groupSat?:number, topShop?:{name,count}|null}} p
 */
export function buildMonthlyCard(p) {
    const owedTotal = p.owedToMe.reduce((a, o) => a + o.amount, 0);
    const over = p.hasIncome && p.netSatang < 0;
    const label = !p.hasIncome ? "ใช้ไปเดือนนี้" : over ? "ใช้เกินรายรับ" : "เหลือใช้เดือนนี้";
    const big = !p.hasIncome ? p.spentBaht : Math.abs(p.netSatang) / 100;

    // ใบ 1 ภาพรวม
    const overview = [];
    if (p.hasIncome) {
        const pct = clampPct(p.spentPercent ?? 0);
        overview.push(box("horizontal", [text(`ใช้ไป ${pct}%`, { size: "xs", color: C.mute, flex: 1 }), text(`รายรับ ${formatBaht(p.incomeBaht)}`, { size: "xs", color: C.mute, flex: 0, wrap: false })]));
        overview.push(bar(pct, C.pay, { h: 12 }));
    } else {
        overview.push(text("ยังไม่มีรายรับเดือนนี้ พิมพ์ในแชต เช่น เงินเดือน 25000 เพื่อบันทึก", { size: "xs", color: C.mute }));
    }
    if (p.budget) {
        const b = p.budget;
        overview.push(box("horizontal", [
            text(`งบ ${formatBaht(b.budgetSat / 100)} · ใช้ไป ${b.percent}%`, { size: "xs", color: C.mute, flex: 1 }),
            text(b.leftSat >= 0 ? `งบเหลือ ${formatBaht(b.leftSat / 100)}` : `เกินงบ ${formatBaht(-b.leftSat / 100)}`, { size: "xs", weight: "bold", color: b.leftSat < 0 ? C.pay : C.accent, flex: 0, wrap: false })
        ]));
        overview.push(bar(b.percent, LEVEL_COLOR[b.level], { h: 12 }));
    }
    overview.push(box("horizontal", [statBox("ใช้ไป", formatBaht(p.spentBaht), C.pay), statBox("เฉลี่ยต่อวัน", p.perDaySat !== undefined ? formatBaht(p.perDaySat / 100) : "-")], { spacing: "sm" }));
    if (p.groupSat !== undefined && p.personalSat !== undefined) {
        overview.push(box("horizontal", [statBox("บิลกลุ่ม", formatBaht(p.groupSat / 100)), statBox("ส่วนตัว", formatBaht(p.personalSat / 100))], { spacing: "sm" }));
    }
    const bubbles = [bubble({ header: head({ label, month: p.monthLabel, big: formatBaht(Math.round(big)), logo: true }), body: overview })];

    // ใบ 2 หมวด
    if (p.categories && p.categories.length) {
        const total = p.categories.reduce((a, c) => a + c.satang, 0);
        bubbles.push(bubble({
            body: [
                box("horizontal", [text("ใช้ไปกับอะไร", { size: "md", weight: "bold", color: C.ink, flex: 1 }), text(formatBaht(total / 100), { size: "sm", weight: "bold", color: C.pay, flex: 0, wrap: false })]),
                ...p.categories.slice(0, 6).map((c) => box("horizontal", [
                    tile(c.key, 36),
                    box("vertical", [
                        box("horizontal", [
                            text((CAT_STYLE[c.key] || CAT_STYLE.other).label, { size: "sm", color: C.ink, flex: 1 }),
                            text(`${c.percent}%`, { size: "sm", weight: "bold", color: C.ink, flex: 0, wrap: false }),
                            text(formatBaht(c.satang / 100), { size: "xs", color: C.mute, flex: 0, wrap: false, margin: "sm", gravity: "bottom" })
                        ]),
                        bar(p.categories[0].percent ? (c.percent / p.categories[0].percent) * 100 : 0, C.pay, { h: 6 })
                    ], { flex: 1, margin: "md", spacing: "xs" })
                ], { alignItems: "center" }))
            ]
        }));
    }

    // ใบ 3 รายสัปดาห์
    if (p.weeks && p.weeks.some((w) => w.satang > 0)) {
        const hi = p.weeks.reduce((best, w, i, arr) => (w.satang > arr[best].satang ? i : best), 0);
        const rows = [
            box("horizontal", [text("รายสัปดาห์", { size: "md", weight: "bold", color: C.ink, flex: 1 }), text(p.monthLabel, { size: "xs", color: C.mute, flex: 0, wrap: false })]),
            columns(p.weeks.map((w) => w.satang), p.weeks.map((w) => w.label), hi),
            box("horizontal", [text("ใช้เยอะสุด", { size: "xs", color: C.mute, flex: 1 }), text(`${p.weeks[hi].label} ${formatBaht(p.weeks[hi].satang / 100)}`, { size: "xs", weight: "bold", color: C.accent, flex: 0, wrap: false })])
        ];
        if (p.topShop) rows.push(box("horizontal", [text("ใช้บ่อยสุด", { size: "xs", color: C.mute, flex: 1 }), text(`${p.topShop.name} ${p.topShop.count} ครั้ง`, { size: "xs", weight: "bold", color: C.ink, flex: 0, wrap: false })]));
        bubbles.push(bubble({ body: rows }));
    }

    // ใบ 4 ใครค้างคุณ (+ คุณค้างเพื่อน)
    bubbles.push(owedBubble(p));

    const alt = `สรุปเดือน ${p.monthLabel}: ${label} ${formatBaht(Math.round(big))}` + (owedTotal > 0 ? ` เพื่อนค้างคุณ ${formatBaht(owedTotal)}` : "");
    return withChips(flex(alt, carousel(bubbles)));
}

// ======================================================================
// 5. วิธีใช้ทีละขั้น
// ======================================================================
function phone(contents) {
    return box("vertical", contents, { width: "116px", height: "118px", borderWidth: "4px", borderColor: C.ink, cornerRadius: "18px", backgroundColor: C.white, paddingAll: "8px", paddingTop: "14px", spacing: "sm" });
}
const chatBubble = (t, mine) => box("vertical", [text(t, { size: "xxs", weight: mine ? "bold" : "regular", color: mine ? C.white : C.ink, wrap: false })], {
    backgroundColor: mine ? C.accent : C.chip, cornerRadius: "8px", paddingStart: "6px", paddingEnd: "6px", paddingTop: "3px", paddingBottom: "3px",
    ...(mine ? { offsetStart: "28px" } : {}), width: mine ? "64px" : "90px"
});
const notice = (icon, bg, line1, line2) => box("horizontal", [
    box("vertical", [{ type: "image", url: iconUrl(icon), size: "12px", aspectMode: "fit" }], { width: "20px", height: "20px", cornerRadius: "6px", backgroundColor: bg, justifyContent: "center", alignItems: "center", flex: 0 }),
    box("vertical", [text(line1, { size: "xxs", weight: "bold", color: C.ink, wrap: false }), text(line2, { size: "xxs", color: C.mute, wrap: false })], { margin: "sm" })
], { backgroundColor: C.chip, cornerRadius: "8px", paddingAll: "4px", alignItems: "center" });

function stepBubble(n, title, desc, button, art) {
    const hero = box("vertical", [
        box("vertical", [text(String(n), { size: "lg", weight: "bold", color: C.sunInk, align: "center" })], { position: "absolute", offsetTop: "12px", offsetStart: "12px", width: "40px", height: "40px", cornerRadius: "20px", backgroundColor: C.sun, justifyContent: "center" }),
        art
    ], { height: "150px", backgroundColor: C.bg, justifyContent: "center", alignItems: "center", paddingAll: "0px" });
    return bubble({
        size: "kilo",
        header: hero,
        body: [text(`วิธีใช้ Dept · ขั้นที่ ${n} จาก 4`, { size: "xxs", color: C.mute }), text(title, { size: "md", weight: "bold", color: C.ink }), text(desc, { size: "sm", color: C.ink })],
        footer: [button]
    });
}

export function buildHowToCarousel() {
    const flowArt = box("horizontal", [
        avatar("คุณ", { label: "คุณ", bg: C.accent, color: C.white }),
        box("vertical", [text("฿860", { size: "sm", weight: "bold", color: C.accent, align: "center" }), box("vertical", [filler()], { height: "3px", backgroundColor: C.sun, cornerRadius: "2px" })], { width: "80px", paddingStart: "6px", paddingEnd: "6px", flex: 0 }),
        avatar("CARE", { bg: C.sun, color: C.sunInk })
    ], { alignItems: "center", width: "190px" });
    const bubbles = [
        stepBubble(1, "บันทึกรายจ่ายในแชต", "พิมพ์ชื่อกับยอด เช่น กาแฟ 65 บอทบันทึกให้ เห็นเฉพาะคุณ",
            btnSecondary("ดูวิธีพิมพ์", postback("help:expense", "ดูวิธีพิมพ์")),
            phone([chatBubble("กาแฟ 65", true), box("horizontal", [box("vertical", [{ type: "image", url: iconUrl("check"), size: "10px", aspectMode: "fit" }], { width: "14px", height: "14px", cornerRadius: "4px", backgroundColor: C.accent, justifyContent: "center", alignItems: "center", flex: 0 }), text("บันทึกแล้ว", { size: "xxs", color: C.ink, margin: "xs", wrap: false })], { backgroundColor: C.chip, cornerRadius: "8px", paddingAll: "3px", width: "86px", alignItems: "center" })])),
        stepBubble(2, "หารบิลกับเพื่อน", "เปิดเว็บ กด บันทึก เลือกเพื่อนที่หารด้วย ระบบคิดให้ว่าใครต้องจ่ายเท่าไร",
            btnPrimary("เพิ่มบิลกลุ่ม", uri(`${LIFF_URL}#add`)),
            box("vertical", [tile("food", 56), box("horizontal", [avatar("CARE", { size: 28 }), avatar("BOOM", { size: 28, bg: C.white, color: C.accent }), avatar("คุณ", { label: "คุณ", size: 28, bg: C.accent, color: C.white })], { spacing: "xs", margin: "md" })], { alignItems: "center" })),
        stepBubble(3, "เคลียร์เงิน", "ดูว่าต้องโอนให้ใคร สแกน QR แล้วส่งสลิป ระบบหักยอดให้เอง", btnPrimary("เปิดหน้าเคลียร์เงิน", uri(`${LIFF_URL}#clear`)), flowArt),
        stepBubble(4, "บันทึกอัตโนมัติจาก iPhone", "ติดตั้งครั้งเดียว สลิปและแจ้งเตือนบัตรเข้ารายการเอง", btnPrimary("ตั้งค่า iPhone", uri(`${LIFF_URL}#me`)),
            phone([notice("bell", C.accent, "บันทึก ฿399", "YouTube"), notice("goods-dark", C.sun, "บันทึก ฿128", "7-Eleven")]))
    ];
    return withChips(flex("วิธีใช้ Dept Money 4 ขั้น", carousel(bubbles)), ["สรุปเดือนนี้", "ใครค้างฉัน", "ฉันต้องโอน"]);
}

// ======================================================================
// การ์ดในกลุ่ม / รายรับ / ยืนยันเตือน
// ======================================================================
/** การ์ดในกลุ่ม: lines = [{from,to,amount}] (บาทเต็ม) ไม่มีตัวเลขส่วนตัว */
export function buildGroupDebtCard({ monthLabel, lines }) {
    const max = Math.max(1, ...lines.map((l) => l.amount));
    const body = [];
    lines.slice(0, 12).forEach((l) => body.push(box("horizontal", [
        avatar(l.from, { size: 28, bg: C.chip, color: C.accent }),
        box("vertical", [
            box("horizontal", [text(`${l.from}  >  ${l.to}`, { size: "sm", color: C.ink, flex: 1 }), text(formatBaht(l.amount), { size: "sm", weight: "bold", color: C.pay, flex: 0, wrap: false })]),
            bar((l.amount / max) * 100, C.accent, { h: 6 })
        ], { flex: 1, margin: "md", spacing: "xs" })
    ], { alignItems: "center" })));
    if (lines.length > 12) body.push(text(`และอีก ${lines.length - 12} รายการ`, { size: "xs", color: C.mute }));
    if (!lines.length) body.push(text("เดือนนี้เคลียร์ครบแล้ว ไม่มีใครต้องโอน", { size: "sm", color: C.mute }));
    return flex(`ยอดที่ต้องโอน ${monthLabel} ${lines.length} รายการ`, bubble({
        header: head({ label: "ยอดที่ต้องโอน", month: monthLabel, big: `${lines.length} รายการ`, logo: true }),
        body,
        footer: [btnPrimary("เปิดหน้าเคลียร์เงิน", uri(`${LIFF_URL}#clear`))]
    }));
}

/** การ์ดยืนยันหลังพิมพ์รายรับใน LINE (เห็นเฉพาะเจ้าของ ไม่กระทบยอดหนี้) */
export function buildIncomeSavedCard({ monthLabel, desc, amount }) {
    return withChips(flex(`บันทึกรายรับแล้ว ${bahtAuto(amount)}`, bubble({
        header: head({ label: "บันทึกรายรับแล้ว", month: monthLabel, big: bahtAuto(amount) }),
        body: [
            text(String(desc || "รายรับ"), { size: "md", weight: "bold", color: C.ink }),
            text("เห็นเฉพาะคุณ ไม่กระทบยอดหนี้กลุ่ม ถ้าบันทึกผิด ลบได้ที่หน้ารายการ", { size: "xs", color: C.mute })
        ],
        footer: [btnPrimary("ดูรายการของฉัน", uri(`${LIFF_URL}#wallet`))]
    })));
}

/** ถามยืนยันก่อนส่งเตือน (การ์ดมีปุ่ม ส่งเตือน / ยกเลิก) */
export function buildRemindConfirm({ targets, total }) {
    const who = targets.length === 1 ? targets[0] : `${targets.length} คน`;
    const title = `ส่งข้อความเตือนถึง ${who} ใช่ไหม`;
    return buildChoiceCard({
        title, desc: `ยอดรวม ${formatBaht(total)} บอทจะส่งการ์ดพร้อม QR ให้ทาง LINE`, altText: `${title} (ยอดรวม ${formatBaht(total)})`,
        yes: { label: "ส่งเตือน", action: { type: "postback", data: `confirm:${targets.length === 1 ? "remind:" + encodeURIComponent(targets[0]) : "remind:all"}`, displayText: "ส่งเตือน" } },
        no: { label: "ยกเลิก", action: { type: "postback", data: "cancel", displayText: "ยกเลิก" } }
    });
}

// ======================================================================
// เตือนครบกำหนดจ่ายบัตรเครดิต (งานรายวัน ส่งหาเจ้าของบัตรเอง เฉพาะคนที่ผู้ดูแลเปิดให้)
// ======================================================================
const thaiDay = (date) => `${Number(date.slice(8, 10))} ${TH_MONTHS[Number(date.slice(5, 7)) - 1]}`;

/**
 * หัวน้ำเงิน: กล่องขาว "อีก N วัน" + ครบกำหนด + ชื่อบัตร + ยอด · ตัว: รอบบิล จำนวนรายการ หมวดที่ใช้มากสุด
 * ปุ่ม: จ่ายแล้ว (หยุดเตือนรอบนี้) / ดูรายการ (เปิดเว็บที่บัตรใบนั้น)
 */
export function buildCardDueCard({ cardId, key, label, dueDate, daysLeft, amountSat, start, end, count, topCat = null }) {
    const amt = formatBaht(amountSat / 100, amountSat % 100 ? 2 : 0);
    const countTile = box("vertical", daysLeft > 0
        ? [text("อีก", { size: "xxs", color: C.mute, align: "center" }), text(String(daysLeft), { size: "xxl", weight: "bold", color: C.ink, align: "center" }), text("วัน", { size: "xxs", color: C.mute, align: "center" })]
        : [text("วันนี้", { size: "lg", weight: "bold", color: C.ink, align: "center" })], {
        width: "64px", height: "64px", cornerRadius: "16px", backgroundColor: C.white, justifyContent: "center", alignItems: "center", flex: 0
    });
    const header = box("vertical", [
        box("horizontal", [countTile, box("vertical", [
            text(`ครบกำหนดจ่ายบัตร · ${thaiDay(dueDate)}`, { size: "xs", color: C.soft }),
            text(label, { size: "md", weight: "bold", color: C.white, wrap: false }),
            text(amt, { size: "xxl", weight: "bold", color: C.white, wrap: false })
        ], { flex: 1, margin: "lg", justifyContent: "center" })], { alignItems: "center" })
    ], { paddingAll: "16px", background: GRAD });
    const row = (k, v) => box("horizontal", [text(k, { size: "sm", color: C.mute, flex: 2 }), text(v, { size: "sm", weight: "bold", color: C.ink, flex: 3, align: "end" })]);
    const body = [
        row("รอบบิล", `${thaiDay(start)} - ${thaiDay(end)}`),
        row("รายการในรอบ", `${count} รายการ`),
        ...(topCat ? [row("ใช้มากสุด", `${(CAT_STYLE[topCat.key] || CAT_STYLE.other).label} ${formatBaht(topCat.satang / 100)}`)] : []),
        text("ยอดนี้รวมจากรายการที่บันทึกในแอปด้วยบัตรนี้ ยอดจริงดูที่ใบแจ้งยอดของธนาคาร", { size: "xxs", color: C.mute })
    ];
    const alt = daysLeft > 0 ? `อีก ${daysLeft} วัน ครบกำหนดจ่ายบัตร ${label} ${amt}` : `วันนี้ครบกำหนดจ่ายบัตร ${label} ${amt}`;
    return flex(alt, bubble({
        header, body,
        footer: [box("horizontal", [
            btnPrimary("จ่ายแล้ว", postback(`cc:paid:${cardId}:${key}`, "จ่ายแล้ว")),
            btnSecondary("ดูรายการ", uri(`${LIFF_URL}#card=${cardId}`))
        ], { spacing: "sm" })]
    }));
}
