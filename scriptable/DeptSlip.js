// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: green; icon-glyph: receipt;

/**
 * Dept Money - สแกนสลิป (ตัวช่วยของคำสั่งลัด)
 * ติดตั้ง/อัปเดตอัตโนมัติด้วย DeptInstaller (จากหน้าเว็บ "ตั้งค่า iPhone")
 * คำสั่งลัดทำแค่: หารูปล่าสุด -> แยกข้อความจากรูป -> เรียกสคริปต์นี้
 * สคริปต์นี้: ส่งข้อความไปแกะที่เซิร์ฟเวอร์ -> ถามส่วนตัว/หาร -> บันทึก
 * รหัสอ่านจาก Keychain (ติดตั้งไว้แล้วตอนติดตั้ง Widget) ไม่ต้องวางรหัสในคำสั่งลัด
 */

const SCRIPT_VERSION = "1.0.0";
const BASE_URL = "https://dept-game.vercel.app";

// ==========================================
// 🛠️ ตัวช่วย
// ==========================================
async function showMessage(title, message) {
    const a = new Alert();
    a.title = title;
    a.message = message;
    a.addAction("ตกลง");
    await a.present();
}

async function callApi(method, path, body) {
    const token = Keychain.contains("dept_token") ? Keychain.get("dept_token") : "";
    if (!token) {
        return { status: "error", message: "ยังไม่ได้ตั้งค่ารหัสอุปกรณ์\nเปิดเว็บ Dept Money → เมนู \"ตั้งค่า iPhone\" แล้วรันโค้ดติดตั้งอีกครั้ง" };
    }
    const req = new Request(BASE_URL + path);
    req.method = method;
    req.timeoutInterval = 20;
    req.headers = { "Authorization": "Bearer " + token, "Content-Type": "application/json" };
    if (body) req.body = JSON.stringify(body);
    try {
        const res = await req.loadJSON();
        return res && typeof res === "object" ? res : { status: "error", message: "เซิร์ฟเวอร์ตอบกลับไม่ถูกต้อง" };
    } catch (e) {
        return { status: "error", message: "เชื่อมต่อเซิร์ฟเวอร์ไม่ได้\n" + e.message };
    }
}

/** รับข้อความจากคำสั่งลัด ไม่ว่าจะส่งมาทางช่อง Parameter หรือเป็น Input ของคำสั่ง */
function getInputText() {
    let t = args.shortcutParameter;
    if (Array.isArray(t)) t = t.join("\n");
    if (!t && args.plainTexts && args.plainTexts.length > 0) t = args.plainTexts.join("\n");
    return t == null ? "" : String(t);
}

/** เลือกเพื่อนได้หลายคน: แตะชื่อเพื่อติ๊ก/ยกเลิก แล้วกด "เสร็จ" คืนค่า array ของชื่อ หรือ null ถ้ายกเลิก */
async function pickPeople(members) {
    const selected = new Set();
    while (true) {
        const sheet = new Alert();
        sheet.title = "เลือกคนที่หารด้วย";
        sheet.message = selected.size > 0
            ? "เลือกแล้ว: " + Array.from(selected).join(", ")
            : "แตะชื่อเพื่อเลือก/ยกเลิก\n⭐ คือตัวคุณ: เลือก = หารรวมตัวเอง · ไม่เลือก = จ่ายแทน";
        sheet.addAction("✔︎ เสร็จ (" + selected.size + " รายการ)");
        members.forEach(function (m) {
            sheet.addAction((selected.has(m) ? "✅ " : "") + m);
        });
        sheet.addCancelAction("ยกเลิก");

        const i = await sheet.presentSheet();
        if (i === -1) return null;
        if (i === 0) return Array.from(selected);
        const name = members[i - 1];
        if (selected.has(name)) selected.delete(name);
        else selected.add(name);
    }
}

// ==========================================
// 🚀 เริ่มทำงาน
// ==========================================
async function main() {
    const text = getInputText();
    if (!text.trim()) {
        await showMessage("สแกนสลิป", "ไม่ได้รับข้อความจากคำสั่งลัด\nตรวจว่าคำสั่ง \"แยกข้อความจากรูปภาพ\" ส่งผลมายังสคริปต์นี้");
        return;
    }

    const parsed = await callApi("POST", "/api/shortcut-transaction", { action: "parse", text: text });
    if (parsed.status !== "ok") {
        await showMessage("สแกนสลิป", String(parsed.message || "เกิดข้อผิดพลาด").replace(/\n\n\(กด ❌ ปิด เพื่อออก\)$/, ""));
        return;
    }

    const menu = new Alert();
    menu.title = "สแกนสลิป";
    menu.message = parsed.message;
    menu.addAction("👤 ส่วนตัว");
    menu.addAction("👥 หารกับเพื่อน");
    menu.addCancelAction("❌ ปิด");
    const choice = await menu.presentAlert();
    if (choice === -1) return;

    if (choice === 0) {
        const saved = await callApi("POST", "/api/shortcut-transaction", { action: "save", splitType: "personal" });
        await showMessage("สแกนสลิป", String(saved.message || "เกิดข้อผิดพลาด"));
        return;
    }

    const members = await callApi("GET", "/api/get-members?include_self=1");
    if (!Array.isArray(members.members)) {
        await showMessage("สแกนสลิป", String(members.message || "โหลดรายชื่อเพื่อนไม่สำเร็จ"));
        return;
    }
    const picked = await pickPeople(members.members);
    if (picked === null) return;

    const saved = await callApi("POST", "/api/shortcut-transaction", {
        action: "save",
        splitType: "equal",
        splitWith: picked.join("\n")
    });
    await showMessage("สแกนสลิป", String(saved.message || "เกิดข้อผิดพลาด"));
}

await main();
Script.complete();
