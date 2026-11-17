// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: orange; icon-glyph: bolt;

/**
 * Dept Money - บันทึกอัตโนมัติ (ติดตั้ง/อัปเดตด้วย DeptInstaller จากหน้าเว็บ "ตั้งค่า iPhone")
 *
 * คำสั่งลัด "Dept บันทึก" เรียกสคริปต์นี้พร้อมข้อความ 1 ชุด (ข้อความจากรูปสลิปล่าสุด, SMS บัตร หรืออีเมลธนาคาร)
 * 1) ส่งข้อความให้เซิร์ฟเวอร์ บันทึกเป็นรายการส่วนตัว "ยังไม่ยืนยัน" ไว้ก่อน (ไม่มีอะไรหาย)
 * 2) เด้งแจ้งเตือน "บันทึกแบบไหน" มีปุ่ม ส่วนตัว / หารกับเพื่อน (แตะตัวแจ้งเตือน = เปิดหน้าแก้ไขในเว็บ)
 *    - ส่วนตัว: เปิดสคริปต์นี้อีกครั้งเพื่อยืนยัน แล้วเด้งแจ้งเตือนที่สองพร้อมปุ่ม "แก้ไขรายละเอียด"
 *    - หารกับเพื่อน: เปิดเว็บที่ฟอร์มหารของรายการนั้น
 * ซ่อนรหัส OTP ในเครื่องก่อนส่ง และจำข้อความที่ตรวจแล้ว 24 ชั่วโมง (ปิดแอปธนาคารซ้ำจะไม่ส่งซ้ำ)
 * เซิร์ฟเวอร์บอกเวอร์ชันล่าสุดมาด้วย ถ้าเครื่องนี้เก่ากว่าจะเตือนให้รันตัวติดตั้งอีกครั้ง
 */

const SCRIPT_VERSION = "2.0.0";
const BASE_URL = "https://dept-game.vercel.app";
const WEB_URL = "https://liff.line.me/2008948704-db2goT00"; // เปิดผ่าน LINE ล็อกอินเงียบ
const SELF_URL = "scriptable:///run/" + encodeURIComponent(Script.name());
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

/** เวอร์ชัน a ใหม่กว่า b ไหม (เช่น "2.1.0" ใหม่กว่า "2.0.9") */
function isNewer(a, b) {
    const pa = String(a || "").split(".").map(Number);
    const pb = String(b || "").split(".").map(Number);
    for (let i = 0; i < 3; i++) {
        const x = pa[i] || 0;
        const y = pb[i] || 0;
        if (x !== y) return x > y;
    }
    return false;
}

function baht(n) {
    return Number(n || 0).toLocaleString("th-TH", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " บาท";
}

async function notify(title, body, { openURL = "", actions = [] } = {}) {
    const n = new Notification();
    n.title = title;
    n.body = body;
    n.threadIdentifier = "dept-money";
    if (openURL) n.openURL = openURL;
    for (const [label, url] of actions) n.addAction(label, url);
    await n.schedule();
}

async function callApi(token, payload) {
    const req = new Request(BASE_URL + "/api/shortcut-transaction");
    req.method = "POST";
    req.timeoutInterval = 25;
    req.headers = { "Authorization": "Bearer " + token, "Content-Type": "application/json" };
    req.body = JSON.stringify(payload);
    return await req.loadJSON();
}

/** กด "ส่วนตัว" ในแจ้งเตือน: ยืนยันรายการ แล้วเด้งแจ้งเตือนที่สองพร้อมปุ่มแก้ไขรายละเอียด */
async function confirmPersonal(token, id) {
    try {
        const res = await callApi(token, { action: "wallet-confirm", id });
        if (!res || !res.confirmed) {
            await notify("Dept Money", (res && res.message && res.status === "error") ? res.message : "ไม่พบรายการนี้ (อาจถูกลบหรือเปลี่ยนเป็นบิลหารแล้ว)");
            return;
        }
        const editUrl = WEB_URL + "#edit=" + encodeURIComponent(id);
        await notify("บันทึกเป็นรายจ่ายส่วนตัวแล้ว", "แตะเพื่อแก้ไขรายละเอียด (ชื่อ หมวด)", { openURL: editUrl, actions: [["แก้ไขรายละเอียด", editUrl]] });
    } catch (e) {
        await notify("Dept Money", "เชื่อมต่อเซิร์ฟเวอร์ไม่ได้: " + e.message);
    }
}

/** แจ้งเตือนหลังบันทึกอัตโนมัติ: ถามว่าบันทึกแบบไหน */
async function askHowToSave(res) {
    const id = encodeURIComponent(res.id);
    const editUrl = WEB_URL + "#edit=" + id;
    const desc = res.desc ? String(res.desc) : "";
    if (res.type === "income") {
        await notify("พบเงินเข้า " + baht(res.amount), (desc ? desc + "\n" : "") + "บันทึกเป็นรายรับแล้ว ยืนยันหรือแก้ไขได้", {
            openURL: editUrl,
            actions: [["ยืนยัน", SELF_URL + "?confirm=" + id], ["แก้ไขรายละเอียด", editUrl]]
        });
        return;
    }
    await notify("พบรายจ่าย " + baht(res.amount), (desc ? desc + "\n" : "") + "บันทึกแบบไหน", {
        openURL: editUrl,
        actions: [["ส่วนตัว", SELF_URL + "?confirm=" + id], ["หารกับเพื่อน", WEB_URL + "#split=" + id]]
    });
}

async function run() {
    const token = Keychain.contains("dept_token") ? Keychain.get("dept_token") : "";
    if (!token) {
        await notify("Dept Money", "ยังไม่ได้ตั้งค่ารหัสอุปกรณ์ เปิดเว็บ Dept Money → ฉัน → ตั้งค่า iPhone แล้วรันโค้ดติดตั้งอีกครั้ง");
        return;
    }

    // ถูกเปิดจากปุ่ม "ส่วนตัว"/"ยืนยัน" ในแจ้งเตือน
    const q = args.queryParameters || {};
    if (q.confirm) {
        await confirmPersonal(token, String(q.confirm));
        return;
    }

    const text = getInputText();
    if (/^\s*file:\/\//i.test(text)) {
        await notify("Dept Money", "คำสั่งลัดส่งรูปภาพมา ไม่ใช่ข้อความ ตรวจคำสั่งลัด Dept บันทึก ตามคู่มือ");
        return;
    }
    if (!text.trim()) return; // ไม่มีข้อความ (รูปล่าสุดไม่ใช่สลิป) ไม่ต้องแจ้งเตือน

    const cleaned = scrubOtp(text);
    const key = hashText(cleaned);
    const seen = loadSeen();
    if (seen[key] && Date.now() - seen[key] < SEEN_TTL_MS) return; // เคยตรวจข้อความนี้แล้ว

    let res;
    try {
        res = await callApi(token, { action: "auto", text: cleaned });
    } catch (e) {
        await notify("Dept Money", "เชื่อมต่อเซิร์ฟเวอร์ไม่ได้: " + e.message);
        return;
    }
    if (!res || typeof res !== "object") {
        await notify("Dept Money", "เซิร์ฟเวอร์ตอบกลับไม่ถูกต้อง");
        return;
    }
    // จำเฉพาะเมื่อเซิร์ฟเวอร์ตอบรับจริง (ผิดพลาดชั่วคราวจะได้ลองใหม่ได้)
    if (res.success || res.status === "duplicate" || res.status === "no_amount") {
        seen[key] = Date.now();
    }

    if (res.status === "saved" && res.id) await askHowToSave(res);
    else if (res.message) await notify("Dept Money", String(res.message)); // ข้อความว่าง = เงียบ ไม่แจ้งเตือน

    // มีรุ่นใหม่: เตือนวันละครั้ง
    if (res.scriptVersion && isNewer(res.scriptVersion, SCRIPT_VERSION) && !(seen.__ver && Date.now() - seen.__ver < SEEN_TTL_MS)) {
        seen.__ver = Date.now();
        await notify("มี DeptAuto รุ่นใหม่ (" + res.scriptVersion + ")", "เปิดแอป Scriptable แล้วกดรัน DeptInstaller อีกครั้ง");
    }
    saveSeen(seen);
}

await run();
Script.complete();
