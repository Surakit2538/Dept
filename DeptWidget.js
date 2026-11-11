// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: cyan; icon-glyph: wallet;

/**
 * Dept Money - iOS Scriptable Widget
 * บันทึกและแสดงสรุปรายจ่ายแบบ Widget บน iPhone
 */

// ==========================================
// ⚙️ การตั้งค่า (Configuration)
// ==========================================
// 1. ระบุ URL ของเว็บคุณ (เช่น https://dept-money.vercel.app)
const BASE_URL = "https://dept-game.vercel.app";

// 2. ระบุชื่อของคุณในระบบ (ให้ตรงกับชื่อ Member ในเว็บ)
// ถ้าใส่ Parameter ใน Widget Setup จะใช้ค่านั้นก่อน
const DEFAULT_USER = "BANK"; 
const USER_NAME = (args.widgetParameter && args.widgetParameter.trim()) || DEFAULT_USER;

// ==========================================
// 🚀 เริ่มต้นทำงาน
// ==========================================
const widget = await createWidget();

if (config.runsInWidget) {
    Script.setWidget(widget);
} else {
    // พรีวิวขนาดกลางเมื่อกดรันในแอป Scriptable
    widget.presentMedium();
}
Script.complete();

// ==========================================
// 🎨 สร้าง Widget UI
// ==========================================
async function createWidget() {
    const listWidget = new ListWidget();
    listWidget.backgroundColor = new Color("#16181D");
    listWidget.setPadding(14, 16, 14, 16);

    // เมื่อแตะที่ Widget ให้เปิดเว็บ Dept Money
    listWidget.url = BASE_URL;

    // ดึงข้อมูลสรุป
    const data = await fetchSummaryData(USER_NAME);

    // 1. แถวบน: Header + วันที่
    const headerRow = listWidget.addStack();
    headerRow.layoutHorizontally();
    headerRow.centerAlignContent();

    const titleText = headerRow.addText("💳 DEPT TRACKER");
    titleText.font = Font.boldSystemFont(11);
    titleText.textColor = new Color("#94A3B8");

    headerRow.addSpacer();

    const dateText = headerRow.addText(data.dateHeader || "วันนี้");
    dateText.font = Font.systemFont(11);
    dateText.textColor = new Color("#64748B");

    listWidget.addSpacer(10);

    // 2. แถวกลาง: ยอดใช้วันนี้ & ใช้เดือนนี้
    const metricsRow = listWidget.addStack();
    metricsRow.layoutHorizontally();

    // ใช้วันนี้
    const todayStack = metricsRow.addStack();
    todayStack.layoutVertical();
    const todayLabel = todayStack.addText("ใช้วันนี้");
    todayLabel.font = Font.systemFont(11);
    todayLabel.textColor = new Color("#94A3B8");

    todayStack.addSpacer(2);

    const todayVal = todayStack.addText(`฿${formatNumber(data.todayExpense)}`);
    todayVal.font = Font.boldSystemFont(19);
    todayVal.textColor = new Color("#F87171"); // แดงอมส้ม

    metricsRow.addSpacer(24);

    // ใช้เดือนนี้
    const monthStack = metricsRow.addStack();
    monthStack.layoutVertical();
    const monthLabel = monthStack.addText("ใช้เดือนนี้");
    monthLabel.font = Font.systemFont(11);
    monthLabel.textColor = new Color("#94A3B8");

    monthStack.addSpacer(2);

    const monthVal = monthStack.addText(`฿${formatNumber(data.monthExpense)}`);
    monthVal.font = Font.boldSystemFont(19);
    monthVal.textColor = new Color("#38BDF8"); // ฟ้าสดใส

    metricsRow.addSpacer();

    listWidget.addSpacer(12);

    // 3. แถวล่าง: รายการล่าสุด
    const lastRow = listWidget.addStack();
    lastRow.layoutHorizontally();
    lastRow.centerAlignContent();
    lastRow.backgroundColor = new Color("#1E222B");
    lastRow.cornerRadius = 8;
    lastRow.setPadding(6, 8, 6, 8);

    if (data.lastTransaction) {
        const last = data.lastTransaction;

        // Badge ธนาคาร
        const badge = lastRow.addStack();
        badge.backgroundColor = new Color("#0F172A");
        badge.cornerRadius = 4;
        badge.setPadding(2, 5, 2, 5);

        const badgeText = badge.addText(last.bank || "EXP");
        badgeText.font = Font.boldSystemFont(9);
        badgeText.textColor = new Color("#38BDF8");

        lastRow.addSpacer(6);

        // ชื่อรายการ/ร้านค้า
        const descText = lastRow.addText(truncateString(last.desc, 18));
        descText.font = Font.systemFont(12);
        descText.textColor = new Color("#F1F5F9");

        lastRow.addSpacer();

        // ยอดเงินรายการล่าสุด
        const amountText = lastRow.addText(`-฿${formatNumber(last.amount)}`);
        amountText.font = Font.boldSystemFont(12);
        amountText.textColor = new Color("#F87171");
    } else {
        const emptyText = lastRow.addText("ยังไม่มีรายการค่าใช้จ่ายในเดือนนี้");
        emptyText.font = Font.systemFont(11);
        emptyText.textColor = new Color("#64748B");
    }

    // 4. แถวสรุปหนี้สิน (Bonus) ถ้ามี
    if (data.debt && data.debt.balance !== 0) {
        listWidget.addSpacer(6);
        const debtRow = listWidget.addStack();
        debtRow.layoutHorizontally();

        const debtLabel = debtRow.addText(`👥 ${data.debt.text}`);
        debtLabel.font = Font.systemFont(10);
        debtLabel.textColor = data.debt.type === 'receive' ? new Color("#34D399") : new Color("#FBBF24");
    }

    return listWidget;
}

// ==========================================
// 🌐 ดึงข้อมูลจาก API + Offline Caching
// ==========================================
async function fetchSummaryData(user) {
    const cacheKey = `dept_widget_cache_${user}.json`;
    const fm = FileManager.local();
    const cachePath = fm.joinPath(fm.documentsDirectory(), cacheKey);

    const endpoint = `${BASE_URL}/api/widget-summary?user=${encodeURIComponent(user)}`;

    try {
        const req = new Request(endpoint);
        req.timeoutInterval = 6;
        const res = await req.loadJSON();

        if (res && res.success) {
            // บันทึก Cache ไว้ใช้ยามออฟไลน์
            fm.writeString(cachePath, JSON.stringify(res));
            return res;
        }
    } catch (e) {
        console.warn("Offline or API failed, fallback to cache:", e);
    }

    // ถ้าเน็ตหลุด ให้อ่านจาก Cache เก่า
    if (fm.fileExists(cachePath)) {
        try {
            const cachedStr = fm.readString(cachePath);
            return JSON.parse(cachedStr);
        } catch (cacheErr) {
            console.error("Cache read error:", cacheErr);
        }
    }

    // ค่าเริ่มต้นหากไม่พบข้อมูลเลย
    return {
        todayExpense: 0,
        monthExpense: 0,
        dateHeader: "วันนี้",
        lastTransaction: null,
        debt: { balance: 0, text: "เคลียร์ครบแล้ว" }
    };
}

// ==========================================
// 🛠️ ฟังก์ชันเสริม (Helpers)
// ==========================================
function formatNumber(num) {
    const val = Number(num) || 0;
    return val.toLocaleString("th-TH", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

function truncateString(str, maxLen) {
    if (!str) return "";
    return str.length > maxLen ? str.slice(0, maxLen - 2) + ".." : str;
}
