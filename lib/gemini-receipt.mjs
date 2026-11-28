/**
 * อ่านใบเสร็จร้านค้าจากรูปด้วย Gemini (GEMINI_API_KEY ตัวเดียวกับอ่านสลิป) ไว้หารบิลตามรายการ
 * คืน { is_receipt, store, currency, total, items:[{name, qty, amount}] } ที่ทำความสะอาดแล้ว
 * รูปไม่ถูกเก็บที่ไหน ส่งไปอ่านแล้วทิ้ง
 */
import { askGeminiImage, GEMINI_MODELS } from "./gemini-slip.mjs";
import { cleanItems } from "./receipt-split.mjs";

const PROMPT = `คุณคือผู้ช่วยอ่านใบเสร็จ/บิลร้านค้าจากรูปภาพ ตอบเป็น JSON เท่านั้น ห้ามมีข้อความอื่น
ถ้ารูปไม่ใช่ใบเสร็จหรือบิลค่าสินค้า/อาหาร ให้ตอบ {"is_receipt": false}
ถ้าใช่ ให้ตอบตามรูปแบบนี้:
{
  "is_receipt": true,
  "store": "ชื่อร้าน (สั้นๆ ถ้าไม่มีให้ตอบ null)",
  "currency": "สกุลเงินรหัส 3 ตัว เช่น THB, JPY, USD, KRW (ใบเสร็จไทยตอบ THB)",
  "total": ยอดสุดท้ายที่ต้องจ่ายจริง เป็นตัวเลข (Grand Total / Amount Due / TOTAL / 合計 หลังรวม VAT ค่าบริการ ส่วนลด ปัดเศษแล้ว),
  "items": [
    { "name": "ชื่อสินค้า/อาหาร สั้น อ่านง่าย ตามภาษาในใบเสร็จ ไม่ใส่รหัสสินค้าหรือบาร์โค้ด", "qty": จำนวนชิ้นเป็นตัวเลข (ไม่มีให้ใส่ 1, ชั่งน้ำหนักให้ใส่น้ำหนัก), "amount": ราคารวมของบรรทัดนั้น (จำนวน x ราคาต่อชิ้น) เป็นตัวเลข }
  ]
}
กติกา:
- items มีเฉพาะสินค้า/อาหารที่ซื้อ ห้ามใส่บรรทัด VAT, ภาษี, ค่าบริการ, Service Charge, ส่วนลดท้ายบิล, ปัดเศษ, ยอดรวม, Sub Total, เงินสด, เงินทอน, บัตรเครดิต, แต้มสะสม
- ถ้าบรรทัดสินค้ามีส่วนลดของตัวเองกำกับอยู่ ให้ใช้ราคาหลังหักส่วนลด
- ใช้เลขอารบิก ไม่มีจุลภาคในตัวเลข และอย่าเดาข้อมูลที่ไม่เห็นในรูป`;

const toNum = (v) => {
    if (typeof v === "number") return v;
    const n = parseFloat(String(v ?? "").replace(/[,\s]/g, "").replace(/[^\d.-]/g, ""));
    return Number.isFinite(n) ? n : NaN;
};

/** ทำความสะอาดคำตอบของ AI (ไม่ใช่ใบเสร็จ หรือไม่มีรายการ -> is_receipt: false) */
export function normalizeReceipt(raw) {
    if (!raw || typeof raw !== "object" || raw.is_receipt === false) return { is_receipt: false };
    const items = cleanItems(raw.items);
    if (items.length === 0) return { is_receipt: false };
    const cur = /^[A-Za-z]{3}$/.test(String(raw.currency || "").trim()) ? String(raw.currency).trim().toUpperCase() : "THB";
    const sum = Math.round(items.reduce((a, it) => a + Math.round(it.amount * 100), 0)) / 100;
    let total = Math.round(toNum(raw.total) * 100) / 100;
    if (!(total > 0)) total = sum;
    const store = raw.store && String(raw.store).toLowerCase() !== "null" ? String(raw.store).replace(/\s+/g, " ").trim().slice(0, 60) : "";
    return { is_receipt: true, store, currency: cur, total, items };
}

export function createGeminiReceiptReader({ apiKey, fetchFn = globalThis.fetch, models = GEMINI_MODELS, timeoutMs = 25000 }) {
    return async function readReceiptImage({ base64, mimeType = "image/jpeg" }) {
        return normalizeReceipt(await askGeminiImage({ apiKey, fetchFn, models, timeoutMs, prompt: PROMPT, base64, mimeType }));
    };
}
