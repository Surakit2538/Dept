// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: green; icon-glyph: receipt;

/**
 * Dept Money - Slip & Expense Scanner for Scriptable
 * ระบบดักสลิปอัตโนมัติ สรุปรายจ่าย และถามหารบิลกับเพื่อน
 */

// ==========================================
// ⚙️ การตั้งค่า (Configuration)
// ==========================================
const BASE_URL = "https://dept-game.vercel.app";
const DEFAULT_USER = "AOY"; // แก้เป็นชื่อของคุณในเว็บ Dept Money
const USER_NAME = (args.widgetParameter && args.widgetParameter.trim()) || DEFAULT_USER;

// ==========================================
// 💾 ฟังก์ชันแคชกันสลิปซ้ำ (วางไว้ด้านบนสุด)
// ==========================================
function getLocalLastRef() {
    return Keychain.contains("dept_last_ref") ? Keychain.get("dept_last_ref") : "";
}

function setLocalLastRef(ref) {
    if (ref) Keychain.set("dept_last_ref", String(ref));
}

function formatNumber(num) {
    const val = Number(num) || 0;
    return val.toLocaleString("th-TH", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

// ==========================================
// 🧩 ถอดข้อมูลด้วย Regex (Parser)
// ==========================================
function parseSlipData(text) {
    if (!text || typeof text !== 'string') return { amount: 0 };
    const cleanText = text.replace(/\r/g, '');

    // 1. ธนาคาร
    let bank = "TRANSFER";
    const lower = cleanText.toLowerCase();
    if (lower.includes("k plus") || lower.includes("kbank") || lower.includes("กสิกร")) bank = "KBANK";
    else if (lower.includes("scb") || lower.includes("ไทยพาณิชย์") || lower.includes("cardx")) bank = "SCB";
    else if (lower.includes("krungthai") || lower.includes("next") || lower.includes("กรุงไทย")) bank = "KTB";
    else if (lower.includes("ttb") || lower.includes("ทหารไทยธนชาต")) bank = "TTB";
    else if (lower.includes("uob") || lower.includes("tmrw")) bank = "UOB";
    else if (lower.includes("dime")) bank = "DIME";
    else if (lower.includes("kept") || lower.includes("krungsri") || lower.includes("uchoose") || lower.includes("กรุงศรี")) bank = "BAY";
    else if (lower.includes("ktc")) bank = "KTC";
    else if (lower.includes("bangkok bank") || lower.includes("bbl") || lower.includes("กรุงเทพ")) bank = "BBL";

    // 2. ยอดเงิน (Amount)
    let amount = 0;
    const amountRegexes = [
        /(?:จำนวนเงิน|ยอดเงิน|amount|THB|บาท)\s*[:]?\s*([0-9,]+\.[0-9]{2})/i,
        /฿\s*([0-9,]+\.[0-9]{2})/,
        /([0-9,]+\.[0-9]{2})\s*บาท/
    ];

    for (const rx of amountRegexes) {
        const m = cleanText.match(rx);
        if (m && m[1]) {
            const rawVal = m[1].replace(/,/g, '');
            const parsedVal = parseFloat(rawVal);
            if (!isNaN(parsedVal) && parsedVal > 0) {
                amount = parsedVal;
                break;
            }
        }
    }

    // 3. ชื่อผู้รับ / ร้านค้า
    let payee = "";
    const payeeRegexes = [
        /(?:ไปยัง|ถึง|โอนให้|ผู้รับเงิน|ร้านค้า|to)\s*[:]?\s*([^\n\r]+)/i,
        /(?:นาย|นาง|นางสาว|บจก\.|บริษัท|หจก\.)\s*([^\n\r]+)/
    ];

    for (const rx of payeeRegexes) {
        const m = cleanText.match(rx);
        if (m && m[1]) {
            payee = m[1].trim();
            break;
        }
    }

    // 4. Transaction Reference ID
    let transRef = "";
    const refMatch = cleanText.match(/(?:เลขที่รายการ|รหัสอ้างอิง|trans(?:action)?\s*id)\s*[:]?\s*([A-Za-z0-9]+)/i);
    if (refMatch && refMatch[1]) {
        transRef = refMatch[1].trim();
    }

    return { bank, amount, payee, transRef };
}

// ==========================================
// 🌐 ส่งข้อมูลเข้า API
// ==========================================
async function saveTransactionToAPI(payload) {
    const endpoint = `${BASE_URL}/api/shortcut-transaction`;
    const req = new Request(endpoint);
    req.method = "POST";
    req.headers = { "Content-Type": "application/json" };
    req.body = JSON.stringify(payload);

    try {
        return await req.loadJSON();
    } catch (e) {
        console.error("API error:", e);
        return { success: false, message: e.message };
    }
}

// ==========================================
// 🔔 แจ้งเตือน Notification Center
// ==========================================
async function showSuccessNotification(bank, desc, amount, splitType) {
    const notif = new Notification();
    notif.title = `💸 บันทึกรายจ่ายสำเร็จ [${bank}]`;
    const splitLabel = splitType === 'equal' ? ' (หารกับเพื่อน)' : '';
    notif.body = `โอนให้: ${desc || 'ค่าใช้จ่าย'}${splitLabel}\nยอดเงิน: ฿${formatNumber(amount)}`;
    notif.sound = "default";
    await notif.schedule();
}

// ==========================================
// 🔄 รีเฟรช Widget
// ==========================================
async function reloadWidget() {
    const fm = FileManager.local();
    const cacheKey = `dept_widget_cache_${USER_NAME}.json`;
    const cachePath = fm.joinPath(fm.documentsDirectory(), cacheKey);
    if (fm.fileExists(cachePath)) {
        try { fm.remove(cachePath); } catch (e) {}
    }
}

// ==========================================
// 👥 เลือกเพื่อนที่จะหารบิล (ดึงจาก API)
// ==========================================
async function selectFriendsToSplit(currentUser) {
    try {
        const req = new Request(`${BASE_URL}/api/get-members`);
        req.timeoutInterval = 6;
        const res = await req.loadJSON();

        if (!res || !res.members || res.members.length === 0) {
            return [currentUser];
        }

        const members = res.members;

        const alert = new Alert();
        alert.title = "👥 เลือกลักษณะการหาร";
        alert.message = "ต้องการหารกับทุกคนในกลุ่ม หรือเลือกเฉพาะคน?";
        alert.addAction(`หารทุกคนในกลุ่ม (${members.length} คน)`);
        alert.addAction("เลือกเฉพาะบางคน...");
        alert.addCancelAction("ยกเลิก");

        const mode = await alert.presentAlert();
        if (mode === -1) return null;

        if (mode === 0) {
            return members;
        }

        const pickAlert = new Alert();
        pickAlert.title = "เลือกเพื่อนที่หารด้วย";
        pickAlert.message = "คุณอยู่ในรายการหารนี้เสมอ";

        members.forEach(m => {
            pickAlert.addAction(m === currentUser ? `⭐ ${m} (ตัวเอง)` : m);
        });
        pickAlert.addCancelAction("ยกเลิก");

        const pickedIdx = await pickAlert.presentAlert();
        if (pickedIdx === -1) return null;

        const pickedMember = members[pickedIdx];
        const selected = [currentUser];
        if (pickedMember !== currentUser) selected.push(pickedMember);
        return selected;

    } catch (e) {
        console.error("Fetch members error:", e);
        return [currentUser];
    }
}

// ==========================================
// 🔍 สแกนสลิปจากข้อความ (Auto-Scan)
// ==========================================
async function handleScanFromText(rawText) {
    console.log("Processing text from Shortcut...");
    const parsed = parseSlipData(rawText);

    if (!parsed.amount) {
        console.log("No valid transaction amount found in text.");
        return;
    }

    // ตรวจสลิปซ้ำ
    const lastRef = getLocalLastRef();
    if (parsed.transRef && parsed.transRef === lastRef) {
        console.log("This slip was already processed locally.");
        return;
    }

    // เด้งถามยืนยัน
    const alert = new Alert();
    alert.title = `พบบิล ฿${formatNumber(parsed.amount)}`;
    alert.message = `[${parsed.bank}] ${parsed.payee || 'ค่าใช้จ่าย'}\nต้องการบันทึกแบบใด?`;

    alert.addAction("👤 บันทึกส่วนตัว");
    alert.addAction("👥 หารกับเพื่อน");
    alert.addCancelAction("❌ ไม่บันทึก");

    const choice = await alert.presentAlert();
    if (choice === -1) return;

    let splitType = "personal";
    let splitWith = [];

    if (choice === 1) {
        splitType = "equal";
        splitWith = await selectFriendsToSplit(USER_NAME);
        if (!splitWith || splitWith.length === 0) return;
    }

    const saveResult = await saveTransactionToAPI({
        payer: USER_NAME,
        amount: parsed.amount,
        desc: parsed.payee || "ค่าใช้จ่ายทั่วไป",
        bank: parsed.bank,
        transRef: parsed.transRef,
        splitType: splitType,
        splitWith: splitWith
    });

    if (saveResult && saveResult.success) {
        if (parsed.transRef) setLocalLastRef(parsed.transRef);
        await showSuccessNotification(parsed.bank, parsed.payee, parsed.amount, splitType);
        await reloadWidget();
    } else {
        const errorAlert = new Alert();
        errorAlert.title = "บันทึกไม่สำเร็จ";
        errorAlert.message = saveResult?.message || "เกิดข้อผิดพลาดในการบันทึก";
        await errorAlert.presentAlert();
    }
}

// ==========================================
// ✏️ เมนูเปิดแอป / จดสด
// ==========================================
async function showMainMenu() {
    const alert = new Alert();
    alert.title = "💸 Dept Money";
    alert.message = "เลือกการทำงานที่ต้องการ:";
    alert.addAction("✏️ จดสด (บันทึกรายจ่ายเอง)");
    alert.addAction("🌐 เปิดเว็บ Dept Money");
    alert.addCancelAction("ปิด");

    const choice = await alert.presentAlert();
    if (choice === 0) {
        await handleQuickAdd();
    } else if (choice === 1) {
        Safari.open(BASE_URL);
    }
}

async function handleQuickAdd() {
    const inputAlert = new Alert();
    inputAlert.title = "✏️ จดสดรายจ่าย";
    inputAlert.message = "ระบุยอดเงิน และรายการที่จ่าย:";
    inputAlert.addTextField("ยอดเงิน (เช่น 150)", "");
    inputAlert.addTextField("รายการ (เช่น ข้าวกลางวัน)", "");
    inputAlert.addAction("👤 บันทึกส่วนตัว");
    inputAlert.addAction("👥 หารเพื่อน");
    inputAlert.addCancelAction("ยกเลิก");

    const choice = await inputAlert.presentAlert();
    if (choice === -1) return;

    const amountStr = inputAlert.textFieldValue(0).replace(/,/g, '').trim();
    const descStr = inputAlert.textFieldValue(1).trim() || "ค่าใช้จ่ายทั่วไป";
    const amount = Number(amountStr);

    if (isNaN(amount) || amount <= 0) {
        const err = new Alert();
        err.title = "ยอดเงินไม่ถูกต้อง";
        await err.presentAlert();
        return;
    }

    let splitType = "personal";
    let splitWith = [];

    if (choice === 1) {
        splitType = "equal";
        splitWith = await selectFriendsToSplit(USER_NAME);
        if (!splitWith || splitWith.length === 0) return;
    }

    const res = await saveTransactionToAPI({
        payer: USER_NAME,
        amount: amount,
        desc: descStr,
        bank: "CASH",
        splitType: splitType,
        splitWith: splitWith
    });

    if (res && res.success) {
        await showSuccessNotification("CASH", descStr, amount, splitType);
        await reloadWidget();
    }
}

// ==========================================
// 🚀 Main Runner
// ==========================================
async function run() {
    const inputFromShortcut = args.shortcutParameter;
    if (inputFromShortcut && typeof inputFromShortcut === 'string') {
        await handleScanFromText(inputFromShortcut);
    } else {
        await showMainMenu();
    }
}

await run();
Script.complete();
