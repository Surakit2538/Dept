import * as fs from "../lib/fs-compat.mjs";
import { getDbInstance, verifyDeviceToken } from "./auth-helpers.js";
import { createShortcutHandler } from "../lib/shortcut-service.mjs";
import { createGeminiSlipReader } from "../lib/gemini-slip.mjs";
import { createLineIdAuthenticator } from "../lib/line-auth.mjs";

const db = getDbInstance();

// ตรรกะทั้งหมดอยู่ใน lib/shortcut-service.mjs (ดูคำอธิบาย action ต่างๆ ในไฟล์นั้น)
// - parse / save / auto: ใช้รหัสอุปกรณ์ (Authorization: Bearer) จากคำสั่งลัด
// - list / delete: หน้าเว็บ "รายจ่ายส่วนตัว" ใช้ LINE ID Token (ล็อกอินเว็บด้วย LINE) แทน
// - การอ่านรูปสลิปด้วย Gemini ใช้ GEMINI_API_KEY ถ้าไม่ตั้งค่า จะรับได้แค่แบบส่งข้อความ (text)
export default createShortcutHandler({
    db,
    fs,
    verifyDeviceToken,
    authenticateIdToken: createLineIdAuthenticator({
        db,
        fs,
        channelId: process.env.LINE_LOGIN_CHANNEL_ID || "2008948704"
    }),
    readSlipImage: process.env.GEMINI_API_KEY
        ? createGeminiSlipReader({ apiKey: process.env.GEMINI_API_KEY })
        : null
});
