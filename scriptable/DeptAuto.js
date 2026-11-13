// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: orange; icon-glyph: bolt;

/**
 * Dept Money - บันทึกสลิปอัตโนมัติ (แบบเงียบ ไม่มีหน้าต่างให้เลือก)
 * ติดตั้ง/อัปเดตอัตโนมัติด้วย DeptInstaller (จากหน้าเว็บ "ตั้งค่า iPhone")
 *
 * ใช้กับคำสั่งลัด "สลิปอัตโนมัติ" ที่ทำงานเองเมื่อปิดแอปธนาคาร:
 *   หารูปล่าสุด -> แยกข้อความจากรูปภาพ (Live Text) -> เรียกใช้สคริปต์นี้ (ปิด Run In App) -> แสดงการแจ้งเตือน
 * สคริปต์ส่งข้อความไปให้เซิร์ฟเวอร์ บันทึกเป็น "ส่วนตัว" ทันที แล้วส่งข้อความผลลัพธ์กลับให้คำสั่งลัดแสดงเป็นแจ้งเตือน
 * (ถ้าจะหารกับเพื่อน ให้ใช้คำสั่งลัด "สแกนสลิป" ที่มีเมนูให้เลือกแทน)
 * รหัสอ่านจาก Keychain (ติดตั้งไว้แล้วตอนติดตั้ง Widget)
 */

const SCRIPT_VERSION = "1.1.1";
const BASE_URL = "https://dept-game.vercel.app";

function getInputText() {
    let t = args.shortcutParameter;
    if (Array.isArray(t)) t = t.join("\n");
    if (!t && args.plainTexts && args.plainTexts.length > 0) t = args.plainTexts.join("\n");
    return t == null ? "" : String(t);
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
        return ""; // รูปล่าสุดไม่มีข้อความ (ไม่ใช่สลิป) ไม่ต้องแจ้งเตือน
    }

    const req = new Request(BASE_URL + "/api/shortcut-transaction");
    req.method = "POST";
    req.timeoutInterval = 25;
    req.headers = { "Authorization": "Bearer " + token, "Content-Type": "application/json" };
    req.body = JSON.stringify({ action: "auto", text: text });
    try {
        const res = await req.loadJSON();
        // message ว่าง = เงียบ (สลิปซ้ำ หรือไม่ใช่สลิป) คำสั่งลัดจะไม่แสดงการแจ้งเตือน
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
console.log(message || "(เงียบ: สลิปซ้ำหรือไม่ใช่สลิป)");
Script.complete();
