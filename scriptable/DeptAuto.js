// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: orange; icon-glyph: bolt;

/**
 * Dept Money - บันทึกอัตโนมัติ (แบบเงียบ ไม่มีหน้าต่างให้เลือก)
 * ติดตั้ง/อัปเดตอัตโนมัติด้วย DeptInstaller (จากหน้าเว็บ "ตั้งค่า iPhone")
 *
 * สคริปต์ตัวเดียวสำหรับระบบอัตโนมัติทุกแบบ ต่างกันแค่ "ข้อความที่ส่งเข้ามา" (เซิร์ฟเวอร์ดูเองว่าเป็นอะไร):
 *   - ปิดแอปธนาคาร: ข้อความจากรูปล่าสุด/ภาพหน้าจอล่าสุด (Live Text)  -> สลิปโอนเงิน หรือแจ้งเตือนที่อยู่ในภาพ
 *   - ข้อความ (SMS) ที่มีคำว่า THB                                  -> รายจ่ายบัตรเครดิต
 *   - อีเมลจากธนาคาร                                                -> รายจ่ายบัตร/บัญชี
 *   - แตะหลังเครื่อง: ถ่ายภาพหน้าจอ -> Live Text                    -> แจ้งเตือนที่เห็นบนจอ
 * ส่งข้อความไปให้เซิร์ฟเวอร์ บันทึกเป็น "ส่วนตัว" ทันที แล้วส่งข้อความผลลัพธ์กลับให้คำสั่งลัดแสดงเป็นแจ้งเตือน
 * (ถ้าจะหารกับเพื่อน ให้ใช้คำสั่งลัด "สแกนสลิป" ที่มีเมนูให้เลือกแทน)
 *
 * ความเป็นส่วนตัว: รหัส OTP ถูกซ่อน (OTP=******) ในเครื่องก่อนส่ง และเครื่องจำข้อความที่ตรวจแล้ว 24 ชั่วโมง
 * จะไม่ส่งซ้ำทุกครั้งที่ปิดแอป รหัสอุปกรณ์อ่านจาก Keychain (ติดตั้งไว้แล้วตอนติดตั้ง Widget)
 */

const SCRIPT_VERSION = "1.2.0";
const BASE_URL = "https://dept-game.vercel.app";
const SEEN_FILE = "dept_auto_seen.json";
const SEEN_TTL_MS = 24 * 60 * 60 * 1000;
const SEEN_MAX = 40;

function getInputText() {
    let t = args.shortcutParameter;
    if (Array.isArray(t)) t = t.join("\n");
    if (!t && args.plainTexts && args.plainTexts.length > 0) t = args.plainTexts.join("\n");
    return t == null ? "" : String(t);
}

// ซ่อนรหัส OTP (ตรงกับ scrubOtp ใน lib/card-alert.mjs)
function scrubOtp(text) {
    return String(text)
        .replace(/(OTP\s*(?:คือ|is|:|=)?\s*)\d{4,8}/gi, "$1******")
        .replace(/(รหัส\s*(?:OTP)?\s*(?:คือ)?\s*)\d{6}/g, "$1******");
}

function hashText(text) {
    const s = String(text).replace(/\s+/g, " ").trim();
    let h = 5381;
    for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0;
    return h + ":" + s.length;
}

function loadSeen() {
    try {
        const fm = FileManager.local();
        const p = fm.joinPath(fm.libraryDirectory(), SEEN_FILE);
        if (!fm.fileExists(p)) return {};
        const o = JSON.parse(fm.readString(p));
        return o && typeof o === "object" ? o : {};
    } catch (e) {
        return {};
    }
}

function saveSeen(seen) {
    try {
        const fm = FileManager.local();
        const now = Date.now();
        const keys = Object.keys(seen).filter((k) => now - seen[k] < SEEN_TTL_MS).sort((a, b) => seen[b] - seen[a]).slice(0, SEEN_MAX);
        const out = {};
        keys.forEach((k) => { out[k] = seen[k]; });
        fm.writeString(fm.joinPath(fm.libraryDirectory(), SEEN_FILE), JSON.stringify(out));
    } catch (e) {
        // จำไม่ได้ก็ไม่เป็นไร เซิร์ฟเวอร์กันซ้ำอยู่แล้ว
    }
}

async function run() {
    const token = Keychain.contains("dept_token") ? Keychain.get("dept_token") : "";
    if (!token) {
        return "ยังไม่ได้ตั้งค่ารหัสอุปกรณ์ เปิดเว็บ Dept Money → ตั้งค่า iPhone แล้วรันโค้ดติดตั้งอีกครั้ง";
    }

    const text = getInputText();
    if (/^\s*file:\/\//i.test(text)) {
        return "คำสั่งลัดส่งรูปภาพมา ไม่ใช่ข้อความ ให้เลือกตัวแปร \"ข้อความจากรูปภาพ\" ที่ช่อง Parameter ของ \"เรียกใช้สคริปต์\"";
    }
    if (!text.trim()) {
        return ""; // ไม่มีข้อความ (รูปล่าสุดไม่ใช่สลิป) ไม่ต้องแจ้งเตือน
    }

    const cleaned = scrubOtp(text);
    const key = hashText(cleaned);
    const seen = loadSeen();
    if (seen[key] && Date.now() - seen[key] < SEEN_TTL_MS) {
        return ""; // เคยตรวจข้อความนี้แล้ว (เช่น ปิดแอปธนาคารซ้ำโดยรูปล่าสุดยังเป็นรูปเดิม)
    }

    const req = new Request(BASE_URL + "/api/shortcut-transaction");
    req.method = "POST";
    req.timeoutInterval = 25;
    req.headers = { "Authorization": "Bearer " + token, "Content-Type": "application/json" };
    req.body = JSON.stringify({ action: "auto", text: cleaned });
    try {
        const res = await req.loadJSON();
        // จำเฉพาะเมื่อเซิร์ฟเวอร์ตอบรับจริง (ผิดพลาดชั่วคราวจะได้ลองใหม่ได้)
        if (res && (res.success || res.status === "duplicate" || res.status === "no_amount")) {
            seen[key] = Date.now();
            saveSeen(seen);
        }
        // message ว่าง = เงียบ (ซ้ำ ไม่ใช่รายจ่าย หรือไม่ใช่สลิป) คำสั่งลัดจะไม่แสดงการแจ้งเตือน
        return res && typeof res.message === "string" ? res.message : "เซิร์ฟเวอร์ตอบกลับไม่ถูกต้อง";
    } catch (e) {
        return "เชื่อมต่อเซิร์ฟเวอร์ไม่ได้: " + e.message;
    }
}

const message = await run();
// ส่งผลลัพธ์กลับให้คำสั่งลัดนำไปแสดงเป็นการแจ้งเตือน (ไม่เปิดหน้าต่างของ Scriptable)
// ถ้าเงียบ (message ว่าง) จะ "ไม่ส่งอะไรกลับเลย" เพราะคำสั่งลัดนับข้อความว่างว่า "มีค่า" แล้วจะขึ้นแจ้งเตือนเปล่าๆ
if (message) {
    Script.setShortcutOutput(message);
}
console.log(message || "(เงียบ: ซ้ำ ไม่ใช่รายจ่าย หรือไม่ใช่สลิป)");
Script.complete();
