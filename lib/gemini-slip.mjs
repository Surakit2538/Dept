/**
 * อ่านสลิปจากรูปด้วย Gemini (ใช้ GEMINI_API_KEY ตัวเดียวกับบอท LINE)
 * คืนข้อมูลดิบ { is_slip, amount, bank, payee, transRef, date, time } ให้ slip-core.buildParsed ทำต่อ
 * รับ fetch และ key เป็นพารามิเตอร์ เพื่อให้ทดสอบได้โดยไม่ยิงเครือข่ายจริง
 */
import { detectBank } from "./slip-core.mjs";

export const GEMINI_MODELS = ["gemini-3.6-flash", "gemini-2.0-flash", "gemini-1.5-flash"];

const PROMPT = `คุณคือผู้ช่วยอ่านสลิปโอนเงิน/ใบเสร็จของธนาคารไทยจากรูปภาพ ตอบเป็น JSON เท่านั้น ห้ามมีข้อความอื่น
ถ้ารูปไม่ใช่สลิปหรือหลักฐานการจ่ายเงิน ให้ตอบ {"is_slip": false}
ถ้าใช่ ให้ตอบตามรูปแบบนี้:
{
  "is_slip": true,
  "amount": ยอดเงินที่โอน/จ่าย เป็นตัวเลข (ไม่รวมค่าธรรมเนียม ไม่ใช่ยอดคงเหลือ),
  "bank": "ธนาคารของแอปที่ออกสลิป เช่น KBANK, SCB, KTB, TTB, UOB, BAY, BBL, GSB หรือชื่ออื่นตามที่เห็น",
  "payee": "ชื่อผู้รับเงินหรือร้านค้า (ถ้าไม่มีให้ตอบ null)",
  "sender": "ชื่อผู้โอน/เจ้าของบัญชีต้นทาง ตามที่เห็นบนสลิป (ถ้าไม่มีให้ตอบ null)",
  "transRef": "เลขที่รายการ/รหัสอ้างอิงของสลิป (ถ้าไม่มีให้ตอบ null)",
  "date": "วันที่ในสลิปรูปแบบ YYYY-MM-DD ปีค.ศ. (ถ้าไม่มีให้ตอบ null)",
  "time": "เวลาในสลิปรูปแบบ HH:MM 24 ชั่วโมง (ถ้าไม่มีให้ตอบ null)"
}
ใช้เลขอารบิกเท่านั้น และอย่าเดาข้อมูลที่ไม่เห็นในรูป`;

export function parseGeminiJson(text) {
    const cleaned = String(text ?? "").replace(/```json/gi, "").replace(/```/g, "").trim();
    const start = cleaned.indexOf("{");
    const end = cleaned.lastIndexOf("}");
    if (start < 0 || end < start) throw new Error("ไม่พบ JSON ในคำตอบของ AI");
    return JSON.parse(cleaned.slice(start, end + 1));
}

/** แปลงคำตอบของ Gemini เป็นฟิลด์ที่ buildParsed ใช้ (ไม่ใช่สลิป -> amount = 0) */
export function normalizeGeminiSlip(raw) {
    if (!raw || raw.is_slip === false) return { amount: 0 };
    const amount = typeof raw.amount === "string" ? parseFloat(raw.amount.replace(/,/g, "")) : Number(raw.amount);
    const bankText = String(raw.bank || "");
    const detected = detectBank(bankText);
    return {
        amount: amount > 0 ? amount : 0,
        bank: detected !== "TRANSFER" ? detected : (bankText.trim().toUpperCase().slice(0, 12) || "TRANSFER"),
        payee: raw.payee || "",
        sender: raw.sender || "",
        transRef: raw.transRef || raw.ref || "",
        date: /^\d{4}-\d{2}-\d{2}$/.test(String(raw.date || "")) ? raw.date : "",
        time: /^\d{1,2}:\d{2}/.test(String(raw.time || "")) ? String(raw.time).slice(0, 5).padStart(5, "0") : ""
    };
}

export function createGeminiSlipReader({ apiKey, fetchFn = globalThis.fetch, models = GEMINI_MODELS, timeoutMs = 18000 }) {
    return async function readSlipImage({ base64, mimeType = "image/jpeg" }) {
        if (!apiKey) throw new Error("ยังไม่ได้ตั้งค่า GEMINI_API_KEY");
        let lastError = null;

        for (const model of models) {
            try {
                const res = await fetchFn(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json", "x-goog-api-key": apiKey },
                    body: JSON.stringify({
                        contents: [{ parts: [{ text: PROMPT }, { inline_data: { mime_type: mimeType, data: base64 } }] }],
                        generationConfig: { temperature: 0, responseMimeType: "application/json" }
                    }),
                    signal: AbortSignal.timeout(timeoutMs)
                });
                if (!res.ok) {
                    lastError = new Error(`Gemini ${model} HTTP ${res.status}`);
                    continue;
                }
                const data = await res.json();
                const text = data?.candidates?.[0]?.content?.parts?.map((p) => p.text || "").join("") || "";
                return normalizeGeminiSlip(parseGeminiJson(text));
            } catch (e) {
                lastError = e;
            }
        }
        throw lastError || new Error("อ่านรูปด้วย AI ไม่สำเร็จ");
    };
}
