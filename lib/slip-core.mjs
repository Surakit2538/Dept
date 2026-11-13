/**
 * Dept Money - ฟังก์ชันหลักสำหรับสแกนสลิป (ไม่แตะฐานข้อมูล ทดสอบได้ด้วย node --test)
 * - parseSlipText: แกะยอดเงิน/ธนาคาร/ผู้รับ/เลขอ้างอิง จากข้อความ OCR
 * - buildEqualSplits: หารเท่าแบบไม่เศษหาย (หน่วยสตางค์)
 * - resolveParticipants: แปลงรายชื่อที่เลือกจาก Shortcut เป็นชื่อสมาชิกจริง
 */
import crypto from "crypto";

const THAI_MONTH_PATTERN =
    "ม\\.?ค\\.?|ก\\.?พ\\.?|มี\\.?ค\\.?|เม\\.?ย\\.?|พ\\.?ค\\.?|มิ\\.?ย\\.?|ก\\.?ค\\.?|ส\\.?ค\\.?|ก\\.?ย\\.?|ต\\.?ค\\.?|พ\\.?ย\\.?|ธ\\.?ค\\.?";
const EN_MONTH_PATTERN = "jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec";

// ==========================================
// 🔧 เครื่องมือทั่วไป
// ==========================================
export function normalizeOcrText(text) {
    let s = Array.isArray(text) ? text.join("\n") : String(text ?? "");
    // เลขไทย -> เลขอารบิก
    s = s.replace(/[๐-๙]/g, (d) => String(d.charCodeAt(0) - 0x0e50));
    // อักขระล่องหน / ช่องว่างพิเศษ
    s = s.replace(/[ ​‎‏⁠﻿]/g, " ").replace(/\r/g, "");
    return s.slice(0, 20000);
}

export function formatBaht(num) {
    const val = Number(num) || 0;
    return "฿" + val.toLocaleString("th-TH", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export function getBangkokDateString(date = new Date()) {
    const parts = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Bangkok",
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    }).formatToParts(date);
    const get = (t) => parts.find((p) => p.type === t)?.value;
    return `${get("year")}-${get("month")}-${get("day")}`;
}

export function normalizeName(name) {
    return String(name ?? "").replace(/\s+/g, " ").trim().toUpperCase();
}

export function resolveIcon(desc = "", bank = "") {
    const text = (desc + " " + bank).toLowerCase();
    if (text.includes("coffee") || text.includes("cafe") || text.includes("กาแฟ") || text.includes("ชา")) return "fa-mug-hot";
    if (text.includes("food") || text.includes("อาหาร") || text.includes("ข้าว") || text.includes("ส้มตำ") || text.includes("kfc") || text.includes("mcdonald")) return "fa-utensils";
    if (text.includes("oil") || text.includes("ปั๊ม") || text.includes("น้ำมัน") || text.includes("ptt") || text.includes("bcp") || text.includes("shell")) return "fa-gas-pump";
    if (text.includes("seven") || text.includes("7-11") || text.includes("cj") || text.includes("lotus") || text.includes("big c") || text.includes("mart")) return "fa-shopping-basket";
    if (text.includes("shopee") || text.includes("lazada") || text.includes("tiktok")) return "fa-shopping-bag";
    if (text.includes("grab") || text.includes("lineman") || text.includes("robinhood")) return "fa-motorcycle";
    if (text.includes("bill") || text.includes("ค่าน้ำ") || text.includes("ค่าไฟ") || text.includes("เน็ต")) return "fa-file-invoice-dollar";
    return "fa-receipt";
}

// ==========================================
// 🏦 ธนาคาร (เลือกชื่อที่ปรากฏก่อนสุดในสลิป)
// ==========================================
const BANKS = [
    ["KBANK", /k\s*plus|kplus|kbank|make\s*by\s*k|กสิกร/i],
    ["SCB", /scb|ไทยพาณิชย์|cardx/i],
    ["KTB", /krungthai|กรุงไทย/i],
    ["TTB", /\bttb\b|ทหารไทยธนชาต|ธนชาต/i],
    ["UOB", /\buob\b|tmrw/i],
    ["BAY", /krungsri|กรุงศรี|\bkept\b|uchoose/i],
    ["DIME", /\bdime\b/i],
    ["BBL", /bualuang|bangkok\s*bank|ธนาคารกรุงเทพ|ธ\.\s*กรุงเทพ/i],
    ["GSB", /\bgsb\b|ออมสิน|mymo/i],
    ["GHB", /ธอส|อาคารสงเคราะห์/i]
];

export function detectBank(text) {
    let best = null;
    for (const [code, re] of BANKS) {
        const m = re.exec(text);
        if (m && (best === null || m.index < best.index)) best = { code, index: m.index };
    }
    return best ? best.code : "TRANSFER";
}

// ==========================================
// 💰 ยอดเงิน
// ==========================================
const AMOUNT_RE = /(?<![\d.,])(\d{1,3}(?:,\d{3})+|\d+)\.(\d{2})(?!\d|\.\d)/g;
const LABEL_RE = /(จำนวนเงิน|จำนวน|ยอดเงิน|ยอดโอน|ยอดชำระ|ยอดรวม|ยอดสุทธิ|amount|total)/i;
const FEE_RE = /(ค่าธรรมเนียม|ค่าบริการ|ค่าธรรมเนียมการโอน|fee|vat|ภาษี)/i;
const BALANCE_RE = /(คงเหลือ|balance|วงเงิน|limit|ยอดที่ใช้ได้)/i;

export function extractAmount(text) {
    const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
    const candidates = [];

    lines.forEach((line, i) => {
        const prev = i > 0 ? lines[i - 1] : "";
        AMOUNT_RE.lastIndex = 0;
        let m;
        while ((m = AMOUNT_RE.exec(line)) !== null) {
            const value = parseFloat(m[1].replace(/,/g, "") + "." + m[2]);
            if (!(value > 0) || value > 99999999) continue;

            const before = line.slice(0, m.index);
            const after = line.slice(m.index + m[0].length);
            const beforeEmpty = before.replace(/[:：\s฿]/g, "") === "";
            const ctx = beforeEmpty ? prev : before;

            if (FEE_RE.test(ctx) || BALANCE_RE.test(ctx)) continue;
            if (/^\s*น(\.|\s|$)/.test(after)) continue; // เวลา เช่น 14.23 น.

            let score = 0;
            if (LABEL_RE.test(ctx)) score += 10;
            if (/^\s*(บาท|baht|thb)/i.test(after) || /(฿|thb|บาท)\s*$/i.test(before)) score += 3;
            candidates.push({ value, score, order: candidates.length });
        }
    });

    const scored = candidates.filter((c) => c.score >= 3);
    if (scored.length > 0) {
        scored.sort((a, b) => b.score - a.score || a.order - b.order);
        return scored[0].value;
    }
    // ถ้าไม่มีป้ายกำกับเลย แต่มีตัวเลขทศนิยมแค่ค่าเดียว ให้ถือว่าเป็นยอดเงิน
    const unique = [...new Set(candidates.map((c) => c.value))];
    return unique.length === 1 ? unique[0] : 0;
}

// ==========================================
// 👤 ผู้รับ / ร้านค้า
// ==========================================
const PAYEE_LABEL_TH = /^(?:ไปยัง|โอนให้|ผู้รับเงิน|ชื่อบัญชีผู้รับ|ชื่อผู้รับ|ผู้รับ|ชำระให้|ชื่อร้านค้า|ร้านค้า|ถึง)\s*[:：]?\s*(.*)$/;
const PAYEE_LABEL_EN = /^(?:to|payee|merchant)(?:\s*[:：]\s*|\s+|$)(.*)$/i;
const TITLE_RE = /^(นาย|นางสาว|นาง|น\.ส\.|นส\.|mr\.?|mrs\.?|ms\.?|miss|บจก\.?|บริษัท|หจก\.?|ร้าน)\s*\S/i;

function isNoiseLine(line) {
    const s = line.trim();
    if (!s) return true;
    if (/^[xX*\d\-\s]{6,}$/.test(s)) return true; // เลขบัญชี
    if (/[xX*]{2,}/.test(s) && /\d/.test(s)) return true; // xxx-x-x1234-x
    if (/^(ธ\.|ธนาคาร|bank\b)/i.test(s)) return true;
    if (/^\d[\d,]*\.\d{2}/.test(s)) return true;
    if (LABEL_RE.test(s) || FEE_RE.test(s)) return true;
    if (/^(จาก|from|เลขที่|รหัส|วันที่|เวลา|สถานะ|โอนเงินสำเร็จ|รายการสำเร็จ|ทำรายการสำเร็จ|บันทึกช่วยจำ|memo)/i.test(s)) return true;
    return false;
}

function cleanPayee(s) {
    return String(s)
        .replace(/[xX*\d\-]{6,}\s*$/, "")
        .replace(/\s+/g, " ")
        .trim()
        .slice(0, 60);
}

export function extractPayee(text) {
    const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);

    for (let i = 0; i < lines.length; i++) {
        const m = lines[i].match(PAYEE_LABEL_TH) || lines[i].match(PAYEE_LABEL_EN);
        if (!m) continue;
        const rest = (m[1] || "").trim();
        if (rest && !isNoiseLine(rest)) return cleanPayee(rest);
        for (let j = i + 1; j <= i + 3 && j < lines.length; j++) {
            if (!isNoiseLine(lines[j])) return cleanPayee(lines[j]);
        }
    }

    // ไม่มีป้ายกำกับ: ใช้บรรทัดที่ขึ้นต้นด้วยคำนำหน้าชื่อ โดยเลือกอันสุดท้าย (ผู้รับมักอยู่หลังผู้โอน)
    const titled = lines.filter((l) => TITLE_RE.test(l) && !isNoiseLine(l));
    return titled.length ? cleanPayee(titled[titled.length - 1]) : "";
}

// ==========================================
// 🔖 เลขอ้างอิง + วันเวลาในสลิป
// ==========================================
const REF_LABEL_RE =
    /(เลขที่รายการ|เลขที่อ้างอิง|รหัสอ้างอิง|หมายเลขอ้างอิง|เลขอ้างอิง|รหัสรายการ|transaction\s*(?:id|no\.?|number)|trans\.?\s*(?:id|no\.?)|(?<![a-z])ref(?:erence)?\.?\s*(?:no\.?|id|code|number)?)/i;

export function extractTransRef(text) {
    const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
    for (let i = 0; i < lines.length; i++) {
        const m = REF_LABEL_RE.exec(lines[i]);
        if (!m) continue;
        const rest = lines[i].slice(m.index + m[0].length);
        const same = rest.match(/^[\s:：.\-]*([A-Za-z0-9]{8,40})\s*$/);
        if (same) return same[1];
        const next = lines[i + 1];
        if (next && /^[A-Za-z0-9]{8,40}$/.test(next)) return next;
    }
    return "";
}

export function extractSlipStamp(text) {
    let date = "";
    let time = "";

    const thaiDate = new RegExp(`(\\d{1,2})\\s*(${THAI_MONTH_PATTERN})\\s*(\\d{2,4})`).exec(text);
    const enDate = new RegExp(`(\\d{1,2})\\s*(${EN_MONTH_PATTERN})[a-z]*\\.?,?\\s*(\\d{2,4})`, "i").exec(text);
    const numDate = /(?<!\d)(\d{1,2})[\/\-.](\d{1,2})[\/\-.](\d{2,4})(?!\d)/.exec(text);
    const found = thaiDate || enDate || numDate;
    if (found) date = found[0].replace(/\s+/g, "").toLowerCase();

    const colonTime = /(?<!\d)(\d{1,2}):(\d{2})(?::(\d{2}))?(?!\d)/.exec(text);
    const thaiTime = /(?<!\d)(\d{1,2})\.(\d{2})\s*น\.?/.exec(text);
    const t = colonTime || thaiTime;
    if (t) time = `${t[1].padStart(2, "0")}:${t[2]}${t[3] ? ":" + t[3] : ""}`;

    return { date, time };
}

// ==========================================
// 🧩 รวมทุกอย่าง
// ==========================================
/** สร้างผลลัพธ์มาตรฐาน (รวม dedupKey) จากข้อมูลที่แกะได้ ไม่ว่าจะมาจาก regex หรือจาก AI อ่านรูป */
export function buildParsed({ amount, bank, payee, transRef, date, time }) {
    const amt = Number(amount);
    const out = {
        amount: amt > 0 && amt <= 99999999 ? Math.round(amt * 100) / 100 : 0,
        bank: bank || "TRANSFER",
        payee: String(payee || "").replace(/\s+/g, " ").trim().slice(0, 60),
        transRef: String(transRef || "").replace(/[^A-Za-z0-9]/g, "").slice(0, 40),
        dedupKey: "",
        strong: false,
        slipDate: String(date || ""),
        slipTime: String(time || "")
    };
    if (out.amount > 0) {
        if (out.transRef.length >= 8) {
            out.dedupKey = "ref:" + out.transRef.toUpperCase();
            out.strong = true;
        } else {
            out.transRef = "";
            const base = [out.amount.toFixed(2), normalizeName(out.payee), out.slipDate, out.slipTime].join("|");
            out.dedupKey = "fp:" + crypto.createHash("sha256").update(base).digest("hex").slice(0, 32);
            out.strong = Boolean(out.slipDate && out.slipTime);
        }
    }
    return out;
}

export function parseSlipText(rawText) {
    const text = normalizeOcrText(rawText);
    if (!text.trim()) return buildParsed({});

    const { date, time } = extractSlipStamp(text);
    return buildParsed({
        amount: extractAmount(text),
        bank: detectBank(text),
        payee: extractPayee(text),
        transRef: extractTransRef(text),
        date,
        time
    });
}

export function buildDescription(payee, bank) {
    if (payee) return payee;
    return bank && bank !== "TRANSFER" ? `โอนเงิน (${bank})` : "โอนเงิน";
}

// ==========================================
// 👥 การหาร
// ==========================================
/** หารเท่าเป็นหน่วยสตางค์ ผลรวมเท่ายอดเดิมเสมอ (เศษสตางค์แจกให้คนแรกๆ) */
export function buildEqualSplits(amount, participants) {
    const n = participants.length;
    if (n === 0) return {};
    const cents = Math.round(Number(amount) * 100);
    const base = Math.floor(cents / n);
    const rem = cents - base * n;
    const splits = {};
    participants.forEach((name, i) => {
        splits[name] = (base + (i < rem ? 1 : 0)) / 100;
    });
    return splits;
}

/** แปลงชื่อที่ Shortcut ส่งมา (อาจมี ⭐ ... (ฉัน)) ให้เป็นรายชื่อมาตรฐาน */
export function parseNameList(input) {
    let items;
    if (Array.isArray(input)) items = input;
    else if (typeof input === "string") items = input.split(/\r?\n/);
    else items = [];
    return items
        .map((s) => String(s).replace(/^\s*⭐\s*/, "").replace(/\s*\(ฉัน\)\s*$/, ""))
        .map(normalizeName)
        .filter(Boolean);
}

/**
 * @param {string[]} requested ชื่อที่เลือก (ผ่าน parseNameList แล้ว)
 * @param {string[]} memberNames ชื่อสมาชิกทั้งหมด (ตัวพิมพ์ใหญ่)
 * @returns {{participants: string[], unknown: string[]}}
 */
export function resolveParticipants(requested, memberNames) {
    const known = new Set(memberNames);
    const participants = [];
    const unknown = [];
    for (const name of requested) {
        if (!known.has(name)) {
            unknown.push(name);
        } else if (!participants.includes(name)) {
            participants.push(name);
        }
    }
    return { participants, unknown };
}
