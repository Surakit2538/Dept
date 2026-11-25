// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: orange; icon-glyph: bolt;

/**
 * Dept Money - บันทึกอัตโนมัติ (ติดตั้ง/อัปเดตด้วย DeptInstaller จากหน้าเว็บ "ตั้งค่า iPhone")
 *
 * คำสั่งลัด "Dept บันทึก" เรียกสคริปต์นี้พร้อมข้อความ 1 ชุด (ข้อความจากรูปสลิปล่าสุด, SMS บัตร หรืออีเมลธนาคาร)
 * 1) ส่งข้อความให้เซิร์ฟเวอร์ บันทึกเป็นรายการส่วนตัว "ยังไม่ยืนยัน" ไว้ก่อน (ไม่มีอะไรหาย)
 * 2) เด้งแจ้งเตือน แตะ (หรือกดค้าง > "แก้ไข") = เปิดสคริปต์นี้ในแอป Scriptable เป็นกล่องแก้ไข (?edit=รหัส)
 *    แก้ชื่อ, เปลี่ยนหมวด แล้วเลือก บันทึกส่วนตัว (ยืนยันเลย) / หารกับเพื่อน (เปิดเว็บเลือกเพื่อน) / ลบ
 *    ชื่อที่แก้ เซิร์ฟเวอร์จำไว้ ครั้งหน้าร้านเดิมจะได้ชื่อและหมวดนั้นเอง
 *    สลิปโอนให้เพื่อนในกลุ่ม (น่าจะคืนเงิน): ยังไม่บันทึก มีปุ่ม "เคลียร์หนี้กับ ..." และ "บันทึกเป็นรายจ่าย" (ภายใน 30 นาที)
 * ซ่อนรหัส OTP ในเครื่องก่อนส่ง และจำข้อความที่ตรวจแล้ว 24 ชั่วโมง (ปิดแอปธนาคารซ้ำจะไม่ส่งซ้ำ)
 * เซิร์ฟเวอร์บอกเวอร์ชันล่าสุดมาด้วย ถ้าเครื่องนี้เก่ากว่าจะเตือนให้รันตัวติดตั้งอีกครั้ง
 */

const SCRIPT_VERSION = "2.3.0";
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

// หมวด (ตรงกับ BILL_ICONS ในเว็บ web/src/model.js)
const CATS = [
    ["food", "อาหาร", "fa-utensils"], ["drink", "เครื่องดื่ม", "fa-mug-hot"], ["goods", "ของใช้", "fa-cart-shopping"],
    ["travel", "เดินทาง", "fa-car"], ["bills", "บิล", "fa-bolt"], ["rent", "ที่พัก", "fa-house"],
    ["fun", "บันเทิง", "fa-film"], ["health", "สุขภาพ", "fa-pills"], ["trip", "เที่ยว", "fa-plane"],
    ["gift", "ของขวัญ", "fa-gift"], ["pet", "สัตว์เลี้ยง", "fa-paw"], ["other", "อื่นๆ", "fa-money-bill"]
];
// ไอคอนเดิมจากสลิป (ชุดเก่า) -> หมวด
const OLD_ICONS = { "fa-gas-pump": "travel", "fa-motorcycle": "travel", "fa-shopping-basket": "goods", "fa-shopping-bag": "goods", "fa-file-invoice-dollar": "bills", "fa-wine-glass": "drink", "fa-bus": "travel", "fa-mobile-screen": "bills", "fa-mobile-screen-button": "bills", "fa-basket-shopping": "goods", "fa-scissors": "goods" };

function catOfIcon(icon) {
    const c = CATS.find((x) => x[2] === icon);
    if (c) return c[0];
    return OLD_ICONS[icon] || "";
}
function catLabel(key) {
    const c = CATS.find((x) => x[0] === key);
    return c ? c[1] : "ยังไม่ได้เลือก";
}

function editUrlOf(id) {
    return SELF_URL + "?edit=" + encodeURIComponent(id);
}

// ถูกรันเบื้องหลัง (ปุ่มบนแจ้งเตือน, คำสั่งลัด, Siri) แสดงกล่องข้อความไม่ได้
// (เคยขึ้น "Alerts are not supported in Siri" ตอนกด แก้ไข/ลบ จากแจ้งเตือน 25 พ.ย. 2569)
function canShowUI() {
    return typeof config === "undefined" || config.runsInApp !== false;
}

/** กล่องข้อความแจ้งผลในแอป (มีปุ่มเดียว) รันเบื้องหลังใช้แจ้งเตือนแทน */
async function tell(title, message) {
    if (!canShowUI()) { await notify(title, message || ""); return; }
    const a = new Alert();
    a.title = title;
    a.message = message;
    a.addAction("ตกลง");
    await a.presentAlert();
}

/** เลือกหมวด คืนรหัสหมวด หรือ "" ถ้ากดยกเลิก */
async function pickCategory(current) {
    const a = new Alert();
    a.title = "เลือกหมวด";
    for (const [key, label] of CATS) a.addAction(key === current ? label + " (ตอนนี้)" : label);
    a.addCancelAction("ยกเลิก");
    const i = await a.presentSheet();
    return i >= 0 && i < CATS.length ? CATS[i][0] : "";
}

/**
 * กล่องแก้ไขในแอป Scriptable (เปิดจากแจ้งเตือน): แก้ชื่อ, เปลี่ยนหมวด แล้วเลือกวิธีบันทึก
 * บันทึกส่วนตัว = ส่งชื่อ/หมวดขึ้นเว็บและยืนยันเลย, หารกับเพื่อน = ส่งชื่อ/หมวดแล้วเปิดเว็บเลือกเพื่อน, ลบ = ไม่ใช่รายการจริง
 */
async function editItem(token, id) {
    if (!canShowUI()) {
        // กล่องแก้ไขต้องเปิดในแอป: แจ้งเตือนใหม่ที่แตะแล้วเปิดแอป Scriptable
        await notify("แตะเพื่อแก้ไขรายการ", "เปิดกล่องแก้ไขในแอป Scriptable", { openURL: editUrlOf(id) });
        return;
    }
    let item;
    try {
        const r = await callApi(token, { action: "wallet-get", id });
        if (!r || !r.item) {
            await tell("ไม่พบรายการนี้", (r && r.message) || "อาจถูกลบหรือเปลี่ยนเป็นบิลหารแล้ว");
            return;
        }
        item = r.item;
    } catch (e) {
        await tell("เชื่อมต่อเซิร์ฟเวอร์ไม่ได้", e.message);
        return;
    }
    const income = item.type === "income";
    const when = String(item.date || "").slice(8, 10) + "/" + String(item.date || "").slice(5, 7);
    let desc = String(item.desc || "");
    let cat = catOfIcon(item.icon);
    let catChanged = false;

    for (;;) {
        const a = new Alert();
        a.title = (income ? "รายรับ " : "รายจ่าย ") + baht(item.amount);
        a.message = ["วันที่ " + when, item.card ? "บัตร " + item.card : "", income ? "" : "หมวด: " + catLabel(cat)].filter(Boolean).join(" · ")
            + (item.unconfirmed ? "" : "\n(ยืนยันแล้ว แก้ไขได้)");
        a.addTextField("ชื่อรายการ", desc);
        const acts = income ? ["save"] : ["save", "split", "cat"];
        if (income) a.addAction("บันทึกรายรับ");
        else {
            a.addAction("บันทึกส่วนตัว");
            a.addAction("หารกับเพื่อน");
            a.addAction("เปลี่ยนหมวด");
        }
        a.addDestructiveAction(income ? "ไม่ใช่รายรับ (ลบ)" : "ไม่ใช่รายจ่าย (ลบ)");
        acts.push("delete");
        a.addCancelAction("ไว้ทีหลัง");
        const i = await a.presentAlert();
        desc = (a.textFieldValue(0) || "").trim() || desc;
        const act = i >= 0 ? acts[i] : "later";
        if (act === "later") return;

        if (act === "cat") {
            const k = await pickCategory(cat);
            if (k) { cat = k; catChanged = true; }
            continue;
        }

        if (act === "delete") {
            const c = new Alert();
            c.title = "ลบรายการนี้?";
            c.message = desc + " " + baht(item.amount);
            c.addDestructiveAction("ลบ");
            c.addCancelAction("ไม่ลบ");
            if ((await c.presentAlert()) !== 0) continue;
            try {
                const r = await callApi(token, { action: "wallet-delete", id });
                await tell(r && r.status === "deleted" ? "ลบแล้ว" : "ลบไม่สำเร็จ", (r && r.message) || "");
            } catch (e) {
                await tell("เชื่อมต่อเซิร์ฟเวอร์ไม่ได้", e.message);
            }
            return;
        }

        // บันทึกส่วนตัว / รายรับ / หารกับเพื่อน: ส่งชื่อ (และหมวดถ้าเปลี่ยน) ก่อน
        const payload = { action: "wallet-update", id, desc };
        if (catChanged && cat) payload.icon = CATS.find((x) => x[0] === cat)[2];
        if (act === "save") payload.confirm = true; // หาร: ยังไม่ยืนยัน รายการนี้จะถูกแทนด้วยบิลหาร
        try {
            const r = await callApi(token, payload);
            if (!r || r.status !== "saved") {
                await tell("บันทึกไม่สำเร็จ", (r && r.message) || "ลองใหม่อีกครั้ง");
                continue;
            }
        } catch (e) {
            await tell("เชื่อมต่อเซิร์ฟเวอร์ไม่ได้", e.message);
            continue;
        }
        if (act === "split") {
            Safari.open(WEB_URL + "#split=" + encodeURIComponent(id));
            return;
        }
        await tell(income ? "บันทึกรายรับแล้ว" : "บันทึกเป็นรายจ่ายส่วนตัวแล้ว", desc + " " + baht(item.amount) + (income ? "" : "\nหมวด: " + catLabel(cat)));
        return;
    }
}

/** ปุ่ม "ส่วนตัว"/"ยืนยัน" จากแจ้งเตือนรุ่นเก่า (2.1.0) ที่ยังค้างอยู่: เปิดกล่องแก้ไขแทน */
async function confirmPersonal(token, id) {
    await editItem(token, id);
}

/** แจ้งเตือนหลังบันทึกอัตโนมัติ: แตะ/กด "แก้ไข" = เปิดกล่องแก้ไขในแอป Scriptable */
async function askHowToSave(res) {
    const url = editUrlOf(res.id);
    const desc = res.desc ? String(res.desc) : "";
    if (res.type === "income") {
        await notify("พบเงินเข้า " + baht(res.amount), (desc ? desc + "\n" : "") + "แตะเพื่อแก้ชื่อและยืนยัน", { openURL: url }); // ไม่มีปุ่ม แก้ไข: ปุ่มบนแจ้งเตือนรันเบื้องหลัง เปิดกล่องแก้ไขไม่ได้ แตะตัวแจ้งเตือนแทน
        return;
    }
    await notify("พบรายจ่าย " + baht(res.amount), (desc ? desc + "\n" : "") + "แตะเพื่อแก้ชื่อ แล้วเลือก ส่วนตัว หรือ หารกับเพื่อน", { openURL: url }); // ไม่มีปุ่ม แก้ไข: ปุ่มบนแจ้งเตือนรันเบื้องหลัง เปิดกล่องแก้ไขไม่ได้ แตะตัวแจ้งเตือนแทน
}

/** สลิปโอนให้เพื่อนในกลุ่ม: น่าจะคืนเงิน ยังไม่บันทึก ให้เลือกไปเคลียร์หนี้ หรือบันทึกเป็นรายจ่าย */
async function askPaidBack(res) {
    const who = res.counterparty ? String(res.counterparty) : "เพื่อน";
    await notify("โอนให้ " + who + " " + baht(res.amount), "น่าจะเป็นการคืนเงินเพื่อน ยังไม่บันทึกเป็นรายจ่าย (แตะเพื่อไปเคลียร์หนี้)", {
        openURL: WEB_URL + "#clear",
        actions: [["เคลียร์หนี้กับ " + who, WEB_URL + "#clear"], ["บันทึกเป็นรายจ่าย", SELF_URL + "?save=personal"]]
    });
}

/** กด "บันทึกเป็นรายจ่าย" ของสลิปโอนให้เพื่อน: บันทึกสลิปที่ค้างไว้เป็นรายจ่ายส่วนตัว แล้วเปิดกล่องแก้ไขต่อเลย */
async function saveSlipPersonal(token) {
    try {
        const res = await callApi(token, { action: "save", splitType: "personal" });
        if (res && res.status === "saved" && res.id) await editItem(token, res.id);
        else await tell("บันทึกไม่สำเร็จ", (res && res.message) || "ลองใหม่อีกครั้ง");
    } catch (e) {
        await tell("เชื่อมต่อเซิร์ฟเวอร์ไม่ได้", e.message);
    }
}

async function run() {
    const token = Keychain.contains("dept_token") ? Keychain.get("dept_token") : "";
    if (!token) {
        await notify("Dept Money", "ยังไม่ได้ตั้งค่ารหัสอุปกรณ์ เปิดเว็บ Dept Money → ฉัน → ตั้งค่า iPhone แล้วรันโค้ดติดตั้งอีกครั้ง");
        return;
    }

    // ถูกเปิดจากแจ้งเตือน: แตะ / ปุ่ม "แก้ไข" (หรือ "ส่วนตัว"/"ยืนยัน" ของแจ้งเตือนรุ่นเก่า)
    const q = args.queryParameters || {};
    if (q.edit) {
        await editItem(token, String(q.edit));
        return;
    }
    if (q.confirm) {
        await confirmPersonal(token, String(q.confirm));
        return;
    }
    // ถูกเปิดจากปุ่ม "บันทึกเป็นรายจ่าย" ของสลิปโอนให้เพื่อน
    if (q.save === "personal") {
        await saveSlipPersonal(token);
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
    else if (res.kind === "paid_back") await askPaidBack(res);
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
