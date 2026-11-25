/**
 * รอบบิลบัตรเครดิต (ฟังก์ชันล้วน ไม่แตะฐานข้อมูล ใช้ทั้งเซิร์ฟเวอร์ งานเตือนรายวัน และเว็บ) ห้าม import แพ็กเกจ npm
 *
 * เก็บเป็นเอกสารเดียวต่อคน คอลเลกชัน wallet_cards (เบราว์เซอร์อ่านเขียนตรงไม่ได้ ต้องผ่าน API)
 *   { ownerName, cards: [{ id, bank, last4, color, statementDay, dueDay, createdAt,
 *                          paid: { "2026-11": iso },          รอบที่กด "จ่ายแล้ว" (กุญแจ = เดือนของวันตัดรอบ)
 *                          sent: { "2026-11|3": iso } }] }   เตือนทาง LINE ไปแล้ว (รอบ|เหลือกี่วัน) กันส่งซ้ำ
 *
 * รอบบิล: ตัดรอบทุกวันที่ statementDay (เดือนที่ไม่มีวันนั้น = วันสุดท้ายของเดือน) รอบหนึ่ง = วันถัดจากตัดรอบครั้งก่อน .. วันตัดรอบ
 * ครบกำหนดจ่าย = วันที่ dueDay ถัดจากวันตัดรอบ (dueDay > statementDay = เดือนเดียวกัน, ไม่งั้น = เดือนถัดไป)
 * ยอดที่ต้องจ่าย = รวมรายจ่ายที่บันทึกในแอปด้วยบัตรนั้นในรอบ (ไม่ได้กรอกจากใบแจ้งยอด)
 */
export const CARDS_COL = "wallet_cards";
export const CARD_BANKS = ["KTC", "CardX", "ttb", "SCB", "KBank", "Krungsri", "UOB", "อื่นๆ"];
// สีบัตร: 4 สีเดิม + สีที่วัดจากรูปบัตรจริงบนเว็บธนาคาร (24 พ.ย. 2569) + ทอง/เงิน (สีทั่วไปของบัตร Gold/Platinum)
export const CARD_COLORS = ["accent", "navy", "sun", "green", "black", "bronze", "copper", "midnight", "cyan", "sky", "peri", "forest", "teal", "gold", "silver"];
export const CARD_MAX = 8;
export const REMIND_DAYS = [3, 0]; // เตือนก่อนครบกำหนด 3 วัน และวันครบกำหนด
const KEEP_KEYS = 6; // เก็บประวัติ paid/sent ไว้ไม่เกิน 6 รอบล่าสุด

const pad = (n) => String(n).padStart(2, "0");
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

export function cardsDocId(owner) {
    return "c_" + String(owner || "").replace(/\//g, "_").slice(0, 200);
}

function lastDay(y, m) {
    return new Date(Date.UTC(y, m, 0)).getUTCDate();
}
/** วันที่ day ของเดือน y-m (เดือนนับ 1..12 เลื่อนเกินได้) ถ้าเดือนนั้นไม่มีวันนั้น = วันสุดท้าย */
function dateIn(y, m, day) {
    const d = new Date(Date.UTC(y, m - 1, 1));
    const yy = d.getUTCFullYear();
    const mm = d.getUTCMonth() + 1;
    return `${yy}-${pad(mm)}-${pad(Math.min(day, lastDay(yy, mm)))}`;
}
export function addDays(date, n) {
    const [y, m, d] = date.split("-").map(Number);
    const t = new Date(Date.UTC(y, m - 1, d + n));
    return `${t.getUTCFullYear()}-${pad(t.getUTCMonth() + 1)}-${pad(t.getUTCDate())}`;
}
export function daysBetween(a, b) {
    const ms = (s) => { const [y, m, d] = s.split("-").map(Number); return Date.UTC(y, m - 1, d); };
    return Math.round((ms(b) - ms(a)) / 86400000);
}

/** วันครบกำหนดของรอบที่ตัดวันที่ stmt */
export function dueDateOf(card, stmt) {
    const [y, m] = stmt.split("-").map(Number);
    return Number(card.dueDay) > Number(card.statementDay) ? dateIn(y, m, card.dueDay) : dateIn(y, m + 1, card.dueDay);
}

/**
 * รอบบิล ณ วันนี้
 * due  = รอบที่ตัดไปล่าสุด (วันตัดรอบ <= วันนี้) ต้องจ่ายภายใน dueDate
 * open = รอบที่กำลังใช้อยู่ (ยังไม่ตัดรอบ)
 * แต่ละรอบ { key: "YYYY-MM" (เดือนของวันตัดรอบ), start, end (วันตัดรอบ), dueDate }
 */
export function cardCycles(card, today) {
    const [y, m] = today.split("-").map(Number);
    const sd = Number(card.statementDay);
    let ly = y, lm = m;
    if (dateIn(y, m, sd) > today) lm -= 1; // เดือนนี้ยังไม่ถึงวันตัดรอบ -> ตัดรอบล่าสุดคือเดือนก่อน
    const lastStmt = dateIn(ly, lm, sd);
    const prevStmt = dateIn(ly, lm - 1, sd);
    const nextStmt = dateIn(ly, lm + 1, sd);
    const cyc = (start, end) => ({ key: end.slice(0, 7), start, end, dueDate: dueDateOf(card, end) });
    return { due: cyc(addDays(prevStmt, 1), lastStmt), open: cyc(addDays(lastStmt, 1), nextStmt) };
}

/** อ่านป้ายบัตรของรายการ: "KTC-1234" / "1234" / "KBank" + ช่อง bank */
export function parseCardTag(card, bank = "") {
    const s = String(card || "").trim();
    const last4 = (/(\d{4})$/.exec(s) || [])[1] || "";
    const b = s.replace(/[-\s]*\d{4}$/, "").trim() || String(bank || "").trim();
    return { bank: b, last4 };
}
const bankKey = (b) => String(b || "").toLowerCase().replace(/[^a-z0-9ก-๙]/g, "");

/**
 * รายการนี้ใช้บัตรใบไหน (คืน id หรือ "")
 * 1) รายการระบุ cardId ไว้ (เลือกบัตรตอนบันทึก) 2) เลข 4 ตัวท้ายตรงกัน 3) ธนาคารตรงกันและมีบัตรธนาคารนั้นใบเดียว
 */
export function cardIdForItem(item, cards) {
    if (!item || !cards || !cards.length) return "";
    if (item.cardId && cards.some((c) => c.id === item.cardId)) return item.cardId;
    const tag = parseCardTag(item.card, item.bank);
    if (!tag.bank && !tag.last4) return "";
    if (tag.last4) {
        const byLast4 = cards.filter((c) => c.last4 === tag.last4 && (!tag.bank || !c.bank || bankKey(c.bank) === bankKey(tag.bank)));
        if (byLast4.length === 1) return byLast4[0].id;
        if (byLast4.length > 1) return "";
    }
    // บัตรรายการแบบไม่มีเลขท้าย (หรือบัตรที่ตั้งไว้ไม่ได้ใส่เลขท้าย): ใช้ธนาคาร ต้องมีใบเดียวถึงจะแน่ใจ
    const byBank = cards.filter((c) => bankKey(c.bank) && bankKey(c.bank) === bankKey(tag.bank) && (!tag.last4 || !c.last4));
    return byBank.length === 1 ? byBank[0].id : "";
}

/** รายจ่ายของบัตรในช่วงวันที่ (รวม start และ end) items = รายการกระเป๋า { type, date, amount, card, bank, cardId } */
export function cycleSpend(card, cards, items, start, end) {
    const list = (items || []).filter((x) => x && x.type !== "income" && typeof x.date === "string" && x.date >= start && x.date <= end && cardIdForItem(x, cards) === card.id);
    const amountSat = list.reduce((a, x) => a + Math.round((Number(x.amount) || 0) * 100), 0);
    return { amountSat, count: list.length, items: list };
}

/** เดือนที่ต้องอ่านรายการ เพื่อคำนวณรอบ due + open ของทุกบัตร */
export function monthsNeeded(cards, today) {
    const set = new Set();
    for (const c of cards || []) {
        const { due, open } = cardCycles(c, today);
        let [y, m] = due.start.split("-").map(Number);
        const endKey = open.end.slice(0, 7);
        for (let i = 0; i < 4; i++) {
            const k = `${y}-${pad(m)}`;
            set.add(k);
            if (k >= endKey) break;
            m += 1; if (m > 12) { m = 1; y += 1; }
        }
    }
    return [...set].sort();
}

/**
 * สถานะบัตรสำหรับหน้าเว็บ/LINE
 * due: รอบที่ตัดแล้วและยังไม่เลยวันครบกำหนด (null ถ้าเลยกำหนดแล้ว) { ...รอบ, daysLeft, amountSat, count, paid }
 * open: รอบที่ใช้อยู่ { ...รอบ, daysToStatement, amountSat, count }
 */
export function cardStatus(card, cards, items, today) {
    const { due, open } = cardCycles(card, today);
    const d = cycleSpend(card, cards, items, due.start, due.end);
    const o = cycleSpend(card, cards, items, open.start, open.end);
    const daysLeft = daysBetween(today, due.dueDate);
    return {
        id: card.id, bank: card.bank, last4: card.last4, color: card.color, statementDay: card.statementDay, dueDay: card.dueDay,
        due: daysLeft >= 0 ? { ...due, daysLeft, amountSat: d.amountSat, count: d.count, paid: Boolean(card.paid && card.paid[due.key]) } : null,
        open: { ...open, daysToStatement: daysBetween(today, open.end), daysLeft: daysBetween(today, open.dueDate), amountSat: o.amountSat, count: o.count }
    };
}

/** ชื่อแสดงของบัตร "KTC •• 1234" */
export function cardLabel(card) {
    const b = card && card.bank && card.bank !== "อื่นๆ" ? card.bank : "บัตร";
    return card && card.last4 ? `${b} •• ${card.last4}` : b;
}

/** วันนี้ต้องเตือนบัตรนี้ไหม: รอบที่ต้องจ่ายยังไม่จ่าย เหลือ 3 วัน/วันครบกำหนด และยังไม่เคยส่ง คืน { cycle, daysLeft, sentKey } หรือ null */
export function reminderDue(card, today) {
    const { due } = cardCycles(card, today);
    const daysLeft = daysBetween(today, due.dueDate);
    if (!REMIND_DAYS.includes(daysLeft)) return null;
    if (card.paid && card.paid[due.key]) return null;
    const sentKey = `${due.key}|${daysLeft}`;
    if (card.sent && card.sent[sentKey]) return null;
    return { cycle: due, daysLeft, sentKey };
}

/** ตัดประวัติ paid/sent ให้เหลือรอบล่าสุด */
export function trimKeys(map) {
    const keys = Object.keys(map || {}).sort().slice(-KEEP_KEYS * 2);
    return Object.fromEntries(keys.map((k) => [k, map[k]]));
}

function cleanDay(v) {
    const n = Number(v);
    return Number.isInteger(n) && n >= 1 && n <= 31 ? n : 0;
}

/** ตรวจข้อมูลบัตรจากเว็บ คืน { ok, card | message } */
export function cleanCardInput(body) {
    const b = body && typeof body === "object" ? body : {};
    const bank = CARD_BANKS.includes(b.bank) ? b.bank : "";
    if (!bank) return { ok: false, message: "เลือกธนาคารหรือบัตรก่อน" };
    const last4 = String(b.last4 || "").replace(/\D/g, "");
    if (last4 && last4.length !== 4) return { ok: false, message: "เลขท้ายบัตรต้องเป็นตัวเลข 4 หลัก" };
    const statementDay = cleanDay(b.statementDay);
    if (!statementDay) return { ok: false, message: "วันตัดรอบต้องเป็นวันที่ 1 ถึง 31" };
    const dueDay = cleanDay(b.dueDay);
    if (!dueDay) return { ok: false, message: "วันครบกำหนดต้องเป็นวันที่ 1 ถึง 31" };
    if (dueDay === statementDay) return { ok: false, message: "วันครบกำหนดต้องไม่ใช่วันเดียวกับวันตัดรอบ" };
    return { ok: true, card: { bank, last4, color: CARD_COLORS.includes(b.color) ? b.color : CARD_COLORS[0], statementDay, dueDay } };
}

/** เอกสารจากฐานข้อมูล -> รายการบัตร (กันข้อมูลเสีย) */
export function normalizeCards(data) {
    const d = data && typeof data === "object" ? data : {};
    return (Array.isArray(d.cards) ? d.cards : []).filter((c) => c && typeof c.id === "string" && cleanDay(c.statementDay) && cleanDay(c.dueDay)).map((c) => ({
        id: c.id,
        bank: CARD_BANKS.includes(c.bank) ? c.bank : "อื่นๆ",
        last4: /^\d{4}$/.test(String(c.last4 || "")) ? String(c.last4) : "",
        color: CARD_COLORS.includes(c.color) ? c.color : CARD_COLORS[0],
        statementDay: cleanDay(c.statementDay),
        dueDay: cleanDay(c.dueDay),
        createdAt: String(c.createdAt || ""),
        paid: c.paid && typeof c.paid === "object" ? c.paid : {},
        sent: c.sent && typeof c.sent === "object" ? c.sent : {}
    }));
}

export function newCardId(nowMs, cards = []) {
    let id = "c" + Number(nowMs).toString(36);
    while (cards.some((c) => c.id === id)) id += "x";
    return id;
}

/** ข้อความชำระบัตร (ชื่อผู้รับในสลิป) ตรงกับบัตรใบไหน คืน id ที่ยังไม่จ่ายรอบนี้ หรือ "" (มีหลายใบที่ค้างแต่ระบุไม่ได้ = ไม่เดา) */
export function cardForPayment(cards, payeeText, today) {
    const open = (cards || []).filter((c) => { const s = cardStatus(c, cards, [], today); return s.due && !s.due.paid; });
    if (!open.length) return "";
    // ชื่อบริษัทบัตรบนสลิปจ่ายบิล -> ชื่อธนาคารในรายการบัตร (KRUNGTHAI CARD = KTC, บัตรกรุงศรี = Krungsri)
    const ALIAS = [[/krungthai\s*card|เคทีซี/i, "ktc"], [/กรุงศรี|krungsri/i, "krungsri"], [/card\s*x|การ์ดเอกซ์/i, "cardx"], [/กสิกร|kbank/i, "kbank"], [/ไทยพาณิชย์/i, "scb"], [/ยูโอบี/i, "uob"], [/ทีทีบี|ทหารไทยธนชาต/i, "ttb"]];
    const t = bankKey(payeeText) + ALIAS.filter(([re]) => re.test(String(payeeText || ""))).map(([, k]) => k).join("");
    // เลขท้ายบัตรตรงก่อน (ธนาคารเดียวกันหลายใบ) ไม่มีค่อยดูชื่อธนาคาร
    const byLast4 = open.filter((c) => c.last4 && String(payeeText || "").includes(c.last4));
    const named = byLast4.length ? byLast4 : open.filter((c) => bankKey(c.bank) && t.includes(bankKey(c.bank)));
    if (named.length === 1) return named[0].id;
    return open.length === 1 && named.length === 0 ? open[0].id : "";
}

export function isDate(s) {
    return typeof s === "string" && DATE_RE.test(s);
}
