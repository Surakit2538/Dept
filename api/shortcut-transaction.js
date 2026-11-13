import * as fs from "firebase/firestore";
import { getDbInstance, verifyDeviceToken } from "./auth-helpers.js";
import { createShortcutHandler } from "../lib/shortcut-service.mjs";
import { createGeminiSlipReader } from "../lib/gemini-slip.mjs";

// ตรรกะทั้งหมดอยู่ใน lib/shortcut-service.mjs (ดูคำอธิบาย action parse / save ในไฟล์นั้น)
// การอ่านรูปสลิปใช้ Gemini (GEMINI_API_KEY เดียวกับบอท LINE) ถ้าไม่ตั้งค่า จะรับได้แค่แบบส่งข้อความ (text)
export default createShortcutHandler({
    db: getDbInstance(),
    fs,
    verifyDeviceToken,
    readSlipImage: process.env.GEMINI_API_KEY
        ? createGeminiSlipReader({ apiKey: process.env.GEMINI_API_KEY })
        : null
});
