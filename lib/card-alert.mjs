/**
 * Dept Money - แกะ "ข้อความแจ้งเตือนรายการบัตร/บัญชี" (SMS, อีเมล หรือข้อความจากภาพหน้าจอแจ้งเตือน)
 * ให้เป็นรายจ่าย ไม่แตะฐานข้อมูล ทดสอบได้ด้วย node --test (ห้าม import แพ็กเกจ npm)
 *
 * parseCardAlert(text) คืนค่า
 *   null                          ไม่ใช่ข้อความแบบนี้ ให้ผู้เรียกลองอ่านเป็นสลิปต่อ
 *   { kind: "ignore", reason }    เป็นข้อความที่รู้จักแต่ไม่ใช่รายจ่ายใหม่ (ยอด 0, จ่ายบิลบัตร, โฆษณา ฯลฯ) ให้เงียบ
 *   { kind: "expense", amount, merchant, card, bank, otp, date, time }
 */
import { normalizeOcrText, slipDateToIso } from "./slip-core.mjs";

const NUM = /(\d{1,3}(?:,\d{3})+|\d+)(?:\.(\d{1,2}))?/.source;
const toAmount = (whole, frac) => Number(String(whole).replace(/,/g, "") + (frac ? "." + frac : ""));

const BANK_LABELS = [
    ["KTC", /\bktc\b/i],
    ["CardX", /card\s*x\b/i],
    ["ttb", /\bttb\b|ทีทีบี|ทหารไทยธนชาต/i],
    ["UOB", /\buob\b/i],
    ["SCB", /\bscb\b|ไทยพาณิชย์/i],
    ["KBank", /k\s*plus|kbank|กสิกร/i],
    ["Krungsri", /krungsri|กรุงศรี/i]
];

function detectLabel(text) {
    let best = null;
    for (const [label, re] of BANK_LABELS) {
        const m = re.exec(text);
        if (m && (best === null || m.index < best.index)) best = { label, index: m.index };
    }
    return best ? best.label : "";
}

/** ตัวเลข 4 หลักท้ายของบัตร เช่น "X-5703", "XX-2700", "xx0518", "405016******0518" */
function detectLast4(text) {
    const m = /(?:\b[xX]{1,2}-?|\*{4,})(\d{4})\b/.exec(text);
    return m ? m[1] : "";
}

/** ล้างชื่อร้านจากข้อความธนาคาร: ตัดรหัสช่องทางชำระ (AMP*, LPTH*), ตัดรหัสท้ายร้าน, ตัดรหัสประเทศ */
export function cleanMerchant(raw) {
    let m = String(raw || "").replace(/\s+/g, " ").trim();
    m = m.replace(/\s*(?:ห้ามเปิดเผย.*|\(?\s*Ref[.:].*)$/i, "");
    m = m.replace(/^[A-Z]{2,6}\*\s*/, "");
    m = m.replace(/^PF_/i, "");
    m = m.replace(/^LM_/i, "LINE MAN ");
    m = m.replace(/_/g, " ");
    m = m.replace(/\s*[-–]\s*[A-Z]{2}$/, "");
    const parts = m.split(" ");
    if (parts.length > 1 && /^[A-Za-z0-9]{5,}$/.test(parts[parts.length - 1]) && /[A-Za-z]\d+[A-Za-z]/.test(parts[parts.length - 1])) parts.pop();
    return parts.join(" ").trim().slice(0, 60);
}

function normMerchant(s) {
    return String(s || "").toLowerCase().replace(/[^a-z0-9ก-๙]/g, "");
}

/** ชื่อร้าน 2 ชื่อน่าจะเป็นที่เดียวกันไหม (ข้อความธนาคารตัดชื่อไม่เท่ากัน) ใช้ส่วนที่ซ้ำกันยาวสุดอย่างน้อย 5 ตัว */
export function merchantSimilar(a, b) {
    const x = normMerchant(a);
    const y = normMerchant(b);
    if (!x || !y) return false;
    if (x.includes(y) || y.includes(x)) return true;
    const [short, long] = x.length <= y.length ? [x, y] : [y, x];
    const need = Math.min(5, short.length);
    for (let i = 0; i + need <= short.length; i++) {
        if (long.includes(short.slice(i, i + need))) return true;
    }
    return false;
}

/** ซ่อนรหัส OTP (ใช้ในเครื่องก่อนส่งออก และเผื่อฝั่งเซิร์ฟเวอร์) */
export function scrubOtp(text) {
    return String(text ?? "")
        .replace(/(OTP\s*(?:คือ|is|:|=)?\s*)\d{4,8}/gi, "$1******")
        .replace(/(รหัส\s*(?:OTP)?\s*(?:คือ)?\s*)\d{6}/g, "$1******");
}

const IGNORE_RULES = [
    ["statement", /e-?statement|ใบแจ้งยอด|statement\s+is\s+ready/i],
    ["card_payment", /(?:โอน)?ชำระ\s*\/?\s*ตั้งชำระยอด|โอนชำระ.*(?:master\s*card|mastercard|visa|jcb|บัตรเครดิต)|ชำระบัตรเครดิต|payment\s+received/i],
    ["promo", /อนุมัติ(?:บัตร|วงเงิน)|จัดส่งบัตร|รอรับบัตร|สมัครบัตร|โปรโมชั่น|promotion/i],
    ["transfer", /โอนพร้อมเพย์|พร้อมเพย์.*สำเร็จ|Result of Funds Transfer|แจ้งผลการทำรายการโอนเงิน/i],
    ["wallet_topup", /เติมเงินพร้อมเพย์|เติมเงิน\s*e-?Wallet/i],
    ["login", /ยืนยันตัวตนสำเร็จ|Internet\s*Banking|UOB\s*Mobile/i]
];

function pickDate(text, nowDate) {
    const m = /(?<!\d)(\d{1,2})\/(\d{1,2})\/(\d{4})\s*@?\s*(\d{1,2}):(\d{2})/.exec(text);
    if (!m) return { date: "", time: "" };
    return { date: slipDateToIso(`${m[1]}/${m[2]}/${m[3]}`, nowDate), time: `${m[4].padStart(2, "0")}:${m[5]}` };
}

function pickMerchant(text) {
    const tries = [
        /ร้านค้า\s*:\s*(.+?)\s*(?:จำนวน|Amount|$)/i,
        /Merchant\s*Name\s*:\s*(.+?)\.?\s*(?:Amount|$)/i,
        /THB\s*(?:ที่|at)\s*(.+?)\s*(?:ผ่านบัตร|หมายเลข|\s[-–]\s*[A-Z]{2}\b)/i,
        /@\s*(.+?)\s*(?:Ref[.:]|หากไม่ได้|ห้ามเปิดเผย|$)/i,
        /สำหรับ\s*(.+?)\s*(?:ห้ามเปิดเผย|\(?\s*Ref[.:]|$)/i,
        /กับ\s*(.+?)\s*จากบัตร/i
    ];
    for (const re of tries) {
        const m = re.exec(text);
        if (m && m[1].trim()) return cleanMerchant(m[1]);
    }
    return "";
}

/** รายการเงินออกจากบัญชี SCB ที่แจ้งใน LINE SCB Connect (ภาพหน้าจอ -> ข้อความจาก Live Text) */
function parseScbDebit(text, nowDate) {
    const head = new RegExp(/รายการเงินออก\s*-?\s*/.source + NUM + /\s*บาท/.source).exec(text);
    if (!head) return null;
    const amount = toAmount(head[1], head[2]);
    const rest = text.slice(head.index + head[0].length);
    const acct = /จากบัญชี\s*([A-Za-z]?-?\s*\d{4})/.exec(rest);
    const item = /รายการ\s+(.+?)\s*วันที่\s*\/\s*เวลา/.exec(rest);
    const { date, time } = pickDate(rest, nowDate);
    const merchant = cleanMerchant(String(item ? item[1] : "").replace(/^[A-Za-z]{2,5}-/, ""));
    return {
        kind: amount > 0 ? "expense" : "ignore",
        reason: amount > 0 ? "" : "zero_amount",
        amount: Math.round(amount * 100) / 100,
        merchant,
        card: acct ? "SCB-" + acct[1].replace(/\D/g, "") : "SCB",
        bank: "SCB",
        otp: false,
        date,
        time
    };
}

const TH_MONTH = { "ม.ค.": 1, "ก.พ.": 2, "มี.ค.": 3, "เม.ย.": 4, "พ.ค.": 5, "มิ.ย.": 6, "ก.ค.": 7, "ส.ค.": 8, "ก.ย.": 9, "ต.ค.": 10, "พ.ย.": 11, "ธ.ค.": 12 };
/** "6 พ.ย. 69" / "6 พ.ย. 2569" -> 2026-11-06 */
function thaiShortDate(text) {
    const m = /(\d{1,2})\s*(ม\.ค\.|ก\.พ\.|มี\.ค\.|เม\.ย\.|พ\.ค\.|มิ\.ย\.|ก\.ค\.|ส\.ค\.|ก\.ย\.|ต\.ค\.|พ\.ย\.|ธ\.ค\.)\s*(\d{2,4})/.exec(text);
    if (!m) return "";
    let y = Number(m[3]);
    if (y < 100) y += 2500;
    if (y > 2400) y -= 543;
    return `${y}-${String(TH_MONTH[m[2]]).padStart(2, "0")}-${m[1].padStart(2, "0")}`;
}

/**
 * อีเมล CardX: "...ผ่านบัตรที่ลงท้ายด้วย 2700 ที่ ANTHROPIC* CLAUDE SUB ยอดเงิน 20.00 USD เมื่อ 6 พ.ย. 69 ..."
 * สกุลเงินต่างประเทศยังไม่รู้ยอดบาทจริง (ใบแจ้งยอดคิดอัตราแลกเปลี่ยนทีหลัง) จึงข้าม
 */
function parseCardXEmail(text) {
    const m = new RegExp(/ลงท้ายด้วย\s*(\d{4})\s*ที่\s*(.+?)\s*ยอดเงิน\s*/.source + NUM + /\s*(THB|บาท|บ\.|[A-Z]{3})/.source).exec(text);
    if (!m) return null;
    const currency = m[5];
    if (!/^(THB|บาท|บ\.)$/.test(currency)) return { kind: "ignore", reason: "foreign_currency", currency, foreignAmount: toAmount(m[3], m[4]) };
    const amount = Math.round(toAmount(m[3], m[4]) * 100) / 100;
    if (!(amount > 0)) return { kind: "ignore", reason: "zero_amount" };
    return { kind: "expense", amount, merchant: cleanMerchant(m[2]), card: `CardX-${m[1]}`, bank: "CardX", otp: false, date: thaiShortDate(text.slice(m.index)), time: "" };
}

/**
 * อีเมล K PLUS "แจ้งผลการทำรายการชำระค่าสินค้าและบริการ (สำเร็จ)" = จ่ายร้าน (รายจ่าย)
 * เก็บเลขที่รายการไว้กันซ้ำกับสลิปของรายการเดียวกัน
 */
function parseKPlusBill(text, nowDate) {
    if (!/k\s*plus/i.test(text) || !/ชำระค่าสินค้าและบริการ|Bill\s*Payment|Result of Payment/i.test(text)) return null;
    const amt = new RegExp(/(?:จำนวนเงิน\s*\(บาท\)|Amount\s*\(THB\))\s*:\s*/.source + NUM, "i").exec(text);
    if (!amt) return null;
    const amount = Math.round(toAmount(amt[1], amt[2]) * 100) / 100;
    if (!(amount > 0)) return { kind: "ignore", reason: "zero_amount" };
    const shop = /(?:เพื่อเข้าบัญชีบริษัท|Company\s*Name)\s*:\s*(.+?)\s*(?:\(ชื่อบัญชี|รหัสร้าน|MerchantID|จำนวนเงิน|Amount|$)/i.exec(text);
    const acct = /(?:ชำระเงินจากบัญชี|Paid\s*From\s*Account)\s*:\s*[xX\d-]*?[xX](\d{4})/i.exec(text);
    const ref = /(?:เลขที่รายการ|Transaction\s*Number)\s*:\s*([A-Za-z0-9]{10,40})/i.exec(text);
    const { date, time } = pickDate(text, nowDate);
    return {
        kind: "expense", amount, merchant: shop ? cleanMerchant(shop[1]) : "",
        card: acct ? `KBank-${acct[1]}` : "KBank", bank: "KBank", otp: false, date, time,
        transRef: ref ? ref[1].toUpperCase() : ""
    };
}

export function parseCardAlert(raw, nowDate = new Date()) {
    const text = normalizeOcrText(raw).replace(/\s+/g, " ").trim();
    if (!text) return null;

    const scb = parseScbDebit(text, nowDate);
    if (scb) return scb;

    // อีเมลธนาคาร/บัตร (ต้องตรวจก่อน เพราะบางฉบับมีคำว่า เลขที่รายการ เหมือนสลิป)
    const cardx = parseCardXEmail(text);
    if (cardx) return cardx;
    const kplus = parseKPlusBill(text, nowDate);
    if (kplus) return kplus;

    // ข้อความสลิปโอนเงินจริง ให้ไปทางสลิป
    const looksLikeSlip = /โอนเงินสำเร็จ|เลขที่รายการ|รหัสอ้างอิง|transaction\s*(?:id|no)/i.test(text) && !/OTP/i.test(text);
    const hasCardCue = /บัตร|card/i.test(text);

    if (!looksLikeSlip && hasCardCue) {
        const before = new RegExp(NUM + /\s*THB/.source, "i").exec(text);
        const after = new RegExp(/THB\s*/.source + NUM, "i").exec(text);
        const hit = before || after;
        if (hit) {
            const amount = Math.round(toAmount(hit[1], hit[2]) * 100) / 100;
            const bank = detectLabel(text);
            const last4 = detectLast4(text);
            const { date, time } = pickDate(text, nowDate);
            if (!(amount > 0)) return { kind: "ignore", reason: "zero_amount" };
            return {
                kind: "expense",
                amount,
                merchant: pickMerchant(text),
                card: bank ? (last4 ? `${bank}-${last4}` : bank) : last4,
                bank,
                otp: /OTP/i.test(text),
                date,
                time
            };
        }
    }

    for (const [reason, re] of IGNORE_RULES) {
        if (re.test(text)) return { kind: "ignore", reason };
    }
    return null;
}
