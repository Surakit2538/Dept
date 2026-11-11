// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: green; icon-glyph: receipt;

/**
 * Dept Money - Slip & Expense Scanner for Scriptable
 * รวมทุกการทำงาน: แกะสลิป, ถามบันทึก, หารกับเพื่อน, แจ้งเตือน, และอัปเดต Widget
 */

// ==========================================
// ⚙️ การตั้งค่า (Configuration)
// ==========================================
const BASE_URL = "https://dept-game.vercel.app";
const DEFAULT_USER = "BANK"; // ชื่อของคุณในระบบ (ตรงกับในเว็บ)
const USER_NAME = (args.widgetParameter && args.widgetParameter.trim()) || DEFAULT_USER;

// ==========================================
// 🚀 จุดเริ่มต้นการทำงาน (Entry Point)
// ==========================================
await main();

async function main() {
    // 1. ตรวจสอบว่าถูกเรียกมาจาก Apple Shortcuts หรือไม่
    const inputFromShortcut = args.shortcutParameter;

    if (inputFromShortcut && typeof inputFromShortcut === 'string') {
        // ทำงานโหมด Auto-Scan จาก Shortcut
        await handleScanFromText(inputFromShortcut);
    } else {
        // เปิดแอปขึ้นมาเอง (โหมดเมนู / จดสด)
        await showMainMenu();
    }

    Script.complete();
}

// ==========================================
// 🔍 ประมวลผลข้อความสลิป (Auto-Scan)
// ==========================================
async function handleScanFromText(rawText) {
    console.log("Processing text from Shortcut...");

    // 1. สกัดข้อมูลด้วย Regex
    const parsed = parseSlipData(rawText);

    if (!parsed.amount) {
        console.log("No valid transaction amount found in text.");
        return;
    }

    // 2. ป้องกันสลิปซ้ำผ่าน Local Cache ในเครื่อง
    const lastRef = getLocalLastRef();
    if (parsed.transRef && parsed.transRef === lastRef) {
        console.log("This slip was already processed locally.");
        return;
    }

    // 3. เด้งถามบนหน้าจอ (Interactive Prompt)
    const alert = new Alert();
    alert.title = `พบบิล ฿${formatNumber(parsed.amount)}`;
    alert.message = `[${parsed.bank}] ${parsed.payee || 'ค่าใช้จ่าย'}\nต้องการบันทึกลง Dept Money หรือไม่?`;

    alert.addAction("👤 บันทึกส่วนตัว");
    alert.addAction("👥 หารกับเพื่อน");
    alert.addCancelAction("❌ ไม่บันทึก");

    const choice = await alert.presentAlert();

    if (choice === -1) {
        console.log("User cancelled recording.");
        return;
    }

    let splitType = "personal";
    let splitWith = [];

    if (choice === 1) {
        // เลือก "หารกับเพื่อน" -> ดึงรายชื่อเพื่อนจากเซิร์ฟเวอร์
        splitType = "equal";
        splitWith = await selectFriendsToSplit(USER_NAME);
        if (!splitWith || splitWith.length === 0) {
            console.log("No friends selected, cancelled.");
            return;
        }
    }

    // 4. ส่งข้อมูลเข้า API
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
        // บันทึก TransRef ไว้ในเครื่องกันซ้ำ
        if (parsed.transRef) setLocalLastRef(parsed.transRef);

        // ยิง Notification แจ้งเตือนแบบในภาพตัวอย่าง
        await showSuccessNotification(parsed.bank, parsed.payee, parsed.amount, splitType);

        // สั่งรีเฟรช Widget ให้แสดงยอดล่าสุดทันที
        await reloadWidget();
    } else {
        const errorAlert = new Alert();
        errorAlert.title = "บันทึกไม่สำเร็จ";
        errorAlert.message = saveResult?.message || "เกิดข้อผิดพลาดในการเชื่อมต่อเซิร์ฟเวอร์";
        await errorAlert.presentAlert();
    }
}

// ==========================================
// ✏️ เมนูเมื่อเปิดแอปขึ้นมาเอง (UI Manual / จดสด)
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

// จดสดผ่าน Prompt ช่องกรอกตัวเลข
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
// 👥 เลือกเพื่อนที่จะหารบิล (ดึงจาก API)
// ==========================================
async function selectFriendsToSplit(currentUser) {
    try {
        const req = new Request(`${BASE_URL}/api/get-members`);
        req.timeoutInterval = 5;
        const res = await req.loadJSON();

        if (!res || !res.members || res.members.length === 0) {
            // กรณีไม่มีเพื่อน ดึงตัวเอง
            return [currentUser];
        }

        const members = res.members;

        // เด้ง Alert เมนูให้เลือก
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

        // เลือกเฉพาะบางคน
        const pickAlert = new Alert();
        pickAlert.title = "ติ๊กเลือกเพื่อนที่หารด้วย";
        pickAlert.message = "ระบบจะใส่คุณเป็นหนึ่งในคนหารเสมอ";

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
// 🧩 ถอดข้อมูลด้วย Regex (Parser)
// ==========================================
function parseSlipData(text) {
    const cleanText = text.replace(/\r/g, '');

    // 1. ตรวจสอบธนาคาร
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

    // 2. ตรวจสอบยอดเงิน (Amount)
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

    // 3. ตรวจสอบชื่อผู้รับ / ร้านค้า
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

    // 4. ตรวจสอบ Transaction Reference ID
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
// 🔔 แจ้งเตือน Notification Center แบบในภาพ
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
    // ล้าง Cache ในเครื่องเพื่อให้ดึงยอดใหม่
    const fm = FileManager.local();
    const cacheKey = `dept_widget_cache_${USER_NAME}.json`;
    const cachePath = fm.joinPath(fm.documentsDirectory(), cacheKey);
    if (fm.fileExists(cachePath)) {
        try { fm.remove(cachePath); } catch (e) {}
    }
}

// ==========================================
// 💾 Local Cache กันสลิปซ้ำ
// ==========================================
function getLocalLastRef() {
    const fm = FileManager.local();
    const p = fm.joinPath(fm.documentsDirectory(), "dept_last_trans_ref.txt");
    return fm.fileExists(p) ? fm.readString(p) : "";
}

function setLocalLastRef(ref) {
    const fm = FileManager.local();
    const p = fm.joinPath(fm.documentsDirectory(), "dept_last_trans_ref.txt");
    fm.writeString(p, ref);
}

function formatNumber(num) {
    const val = Number(num) || 0;
    return val.toLocaleString("th-TH", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}
