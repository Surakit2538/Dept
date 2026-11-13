// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: green; icon-glyph: receipt;

/**
 * Dept Money - สแกนสลิป
 * ติดตั้ง/อัปเดตอัตโนมัติด้วย DeptInstaller (จากหน้าเว็บ "ตั้งค่า iPhone")
 *
 * วิธีใช้: คำสั่งลัด "สแกนสลิป" (หารูปล่าสุด -> แยกข้อความจากรูปภาพ ด้วย Live Text ของ iPhone
 *          -> เรียกใช้สคริปต์นี้ โดยส่งข้อความมาที่ช่อง Parameter)
 * สคริปต์ส่ง "ข้อความ" (ไม่ส่งรูป) ไปให้เซิร์ฟเวอร์แกะยอด -> ถามส่วนตัว/หาร -> บันทึก
 * รหัสอ่านจาก Keychain (ติดตั้งไว้แล้วตอนติดตั้ง Widget)
 */

const SCRIPT_VERSION = "1.4.0";
const BASE_URL = "https://dept-game.vercel.app";

// ค่าเริ่มต้น false: รูปสลิปไม่ออกจากเครื่อง ใช้ Live Text ของ iPhone อ่านแล้วส่งแต่ข้อความ
// ตั้งเป็น true เฉพาะเมื่อต้องการให้เซิร์ฟเวอร์ (AI Gemini) อ่านรูปแทน เมื่อไม่มีข้อความส่งมา
const USE_AI_IMAGE = false;

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

/** แสดงข้อความที่ iPhone อ่านได้จากรูป (ไว้ตรวจเวลายอด/ชื่ออ่านผิด และคัดลอกส่งให้ผู้พัฒนาปรับปรุงได้) */
async function showRawText(text) {
    const a = new Alert();
    a.title = "ข้อความที่ iPhone อ่านได้";
    a.message = text.length > 900 ? text.slice(0, 900) + "\n..." : text;
    a.addAction("คัดลอกทั้งหมด");
    a.addAction("กลับ");
    const i = await a.presentAlert();
    if (i === 0) Pasteboard.copy(text);
}

async function callApi(method, path, body) {
    const token = Keychain.contains("dept_token") ? Keychain.get("dept_token") : "";
    if (!token) {
        return { status: "error", message: "ยังไม่ได้ตั้งค่ารหัสอุปกรณ์\nเปิดเว็บ Dept Money → เมนู \"ตั้งค่า iPhone\" แล้วรันโค้ดติดตั้งอีกครั้ง" };
    }
    const req = new Request(BASE_URL + path);
    req.method = method;
    req.timeoutInterval = 45;
    req.headers = { "Authorization": "Bearer " + token, "Content-Type": "application/json" };
    if (body) req.body = JSON.stringify(body);
    try {
        const res = await req.loadJSON();
        return res && typeof res === "object" ? res : { status: "error", message: "เซิร์ฟเวอร์ตอบกลับไม่ถูกต้อง" };
    } catch (e) {
        return { status: "error", message: "เชื่อมต่อเซิร์ฟเวอร์ไม่ได้\n" + e.message };
    }
}

/** ข้อความจากคำสั่งลัด (ทางเลือก) ไม่ว่าจะส่งมาทางช่อง Parameter หรือเป็น Input ของคำสั่ง */
function getInputText() {
    let t = args.shortcutParameter;
    if (Array.isArray(t)) t = t.join("\n");
    if (!t && args.plainTexts && args.plainTexts.length > 0) t = args.plainTexts.join("\n");
    return t == null ? "" : String(t);
}

/** ย่อรูปให้ไม่เกิน 1400px แล้วแปลงเป็น JPEG base64 (ให้ส่งเร็วและไม่เกินขนาดที่เซิร์ฟเวอร์รับ) */
function toJpegBase64(img) {
    const maxSide = 1400;
    const w = img.size.width;
    const h = img.size.height;
    const scale = Math.min(1, maxSide / Math.max(w, h));
    const nw = Math.max(1, Math.round(w * scale));
    const nh = Math.max(1, Math.round(h * scale));
    const dc = new DrawContext();
    dc.size = new Size(nw, nh);
    dc.respectScreenScale = false;
    dc.drawImageInRect(img, new Rect(0, 0, nw, nh));
    return Data.fromJPEG(dc.getImage(), 0.7).toBase64String();
}

/** หารูปสลิป: รูปที่แชร์เข้ามาก่อน ถ้าไม่มีใช้รูปล่าสุดในอัลบั้ม */
async function getSlipImage() {
    if (args.images && args.images.length > 0) return args.images[0];
    try {
        return await Photos.latestPhoto();
    } catch (e) {
        return null;
    }
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
    // 1) เตรียมข้อมูลที่จะส่งไปให้เซิร์ฟเวอร์อ่าน
    let payload;
    const text = getInputText();
    if (/^\s*file:\/\//i.test(text)) {
        await showMessage(
            "สแกนสลิป",
            "คำสั่งลัดส่ง \"รูปภาพ\" มาให้สคริปต์ ไม่ใช่ข้อความ\n\nวิธีแก้: ในคำสั่งลัด \"สแกนสลิป\" ที่คำสั่ง \"เรียกใช้สคริปต์\" แตะช่อง Parameter แล้วเลือกตัวแปร \"ข้อความจากรูปภาพ\" (ผลของคำสั่ง \"แยกข้อความจากรูปภาพ\") แทนตัวแปร \"รูปภาพ\""
        );
        return;
    }
    if (text.trim()) {
        payload = { action: "parse", text: text };
    } else if (!USE_AI_IMAGE) {
        await showMessage(
            "สแกนสลิป",
            "ไม่ได้รับข้อความจากคำสั่งลัด\n\nตรวจว่าคำสั่งลัด \"สแกนสลิป\" มีขั้น \"แยกข้อความจากรูปภาพ\" และส่งผลมาที่ช่อง Parameter ของ \"เรียกใช้สคริปต์\" (ดูคู่มือส่วนที่ 2)"
        );
        return;
    } else {
        const img = await getSlipImage();
        if (!img) {
            await showMessage("สแกนสลิป", "ไม่พบรูปสลิป\nแคปหน้าจอสลิปไว้ก่อน แล้วเปิดใหม่\n(หรืออนุญาตให้ Scriptable เข้าถึงรูปภาพใน ตั้งค่า > Scriptable > รูปภาพ)");
            return;
        }
        payload = { action: "parse", imageBase64: toJpegBase64(img), mimeType: "image/jpeg" };
    }

    // 2) ให้เซิร์ฟเวอร์อ่านสลิป
    const parsed = await callApi("POST", "/api/shortcut-transaction", payload);
    // status "convert" = สลิปนี้บันทึกเป็นส่วนตัวไปแล้ว (เช่น โดยระบบอัตโนมัติ) เสนอให้เปลี่ยนเป็นหารกับเพื่อนได้
    const isConvert = parsed.status === "convert";
    if (parsed.status !== "ok" && !isConvert) {
        await showMessage("สแกนสลิป", String(parsed.message || "เกิดข้อผิดพลาด").replace(/\n\n\(กด ❌ ปิด เพื่อออก\)$/, ""));
        return;
    }

    // 3) ถามว่าบันทึกแบบไหน (ตัวเลือกเรียงตามที่แสดง จึงเก็บเป็นรายการ key)
    const keys = [];
    let choiceKey = null;
    while (true) {
        keys.length = 0;
        const menu = new Alert();
        menu.title = "สแกนสลิป";
        menu.message = parsed.message;
        if (!isConvert) {
            menu.addAction("👤 ส่วนตัว");
            keys.push("personal");
        }
        menu.addAction(isConvert ? "👥 เปลี่ยนเป็นหารกับเพื่อน" : "👥 หารกับเพื่อน");
        keys.push("split");
        if (!isConvert) {
            // รายรับ: เงินเข้าบัญชีเรา (เพื่อนโอนคืนหนี้ไม่ใช่รายรับ) ระบบบอกคำแนะนำไว้ในข้อความด้านบนแล้ว
            menu.addAction("💰 รายรับ");
            keys.push("income");
        }
        if (text.trim()) {
            menu.addAction("🔍 ดูข้อความที่อ่านได้");
            keys.push("raw");
        }
        menu.addCancelAction("❌ ปิด");
        const idx = await menu.presentAlert();
        if (idx === -1) return;
        choiceKey = keys[idx];
        if (choiceKey === "raw") {
            await showRawText(text);
            continue;
        }
        break;
    }

    if (choiceKey === "personal") {
        const saved = await callApi("POST", "/api/shortcut-transaction", { action: "save", splitType: "personal" });
        await showMessage("สแกนสลิป", String(saved.message || "เกิดข้อผิดพลาด"));
        return;
    }

    if (choiceKey === "income") {
        const saved = await callApi("POST", "/api/shortcut-transaction", { action: "save", splitType: "income" });
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
