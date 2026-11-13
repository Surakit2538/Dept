// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: cyan; icon-glyph: wallet;

/**
 * Dept Money - iOS Scriptable Widget
 * บันทึกและแสดงสรุปรายจ่ายแบบ Widget บน iPhone
 * เวอร์ชัน 2.0.1 (Device Token Auth)
 */

const SCRIPT_VERSION = "2.0.2";
const BASE_URL = "https://dept-game.vercel.app";

// ==========================================
// เริ่มต้นทำงาน
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
// สร้าง Widget UI
// ==========================================
async function createWidget() {
    const listWidget = new ListWidget();
    listWidget.backgroundColor = new Color("#16181D");
    listWidget.setPadding(14, 16, 12, 16);
    listWidget.url = BASE_URL;

    // ตรวจสอบ Token จาก Keychain
    const token = Keychain.contains("dept_token") ? Keychain.get("dept_token") : null;

    if (!token) {
        return renderErrorWidget(
            listWidget,
            "ยังไม่ได้ตั้งค่าอุปกรณ์",
            "กรุณาเปิดเว็บ Dept Money แล้วแตะเมนู\n\"ตั้งค่า iPhone\" เพื่อติดตั้ง",
            "#FBBF24"
        );
    }

    // ดึงข้อมูลสรุป
    const result = await fetchSummaryData(token);

    if (!result.success) {
        return renderErrorWidget(
            listWidget,
            "ไม่สามารถโหลดข้อมูลได้",
            result.message || "กรุณาตรวจสอบการเชื่อมต่อ",
            result.status === 401 ? "#EF4444" : "#FBBF24"
        );
    }

    const data = result.data;
    const isOffline = result.isOffline || false;

    // 1. แถวบน: Header + ชื่อผู้ใช้/วันที่
    const headerRow = listWidget.addStack();
    headerRow.layoutHorizontally();
    headerRow.centerAlignContent();

    const titleText = headerRow.addText("DEPT TRACKER");
    titleText.font = Font.boldSystemFont(11);
    titleText.textColor = new Color("#94A3B8");

    if (data.user) {
        headerRow.addSpacer(6);
        const userBadge = headerRow.addText(`· ${data.user}`);
        userBadge.font = Font.systemFont(10);
        userBadge.textColor = new Color("#64748B");
    }

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
    todayStack.layoutVertically();
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
    monthStack.layoutVertically();
    const monthLabel = monthStack.addText("ใช้เดือนนี้");
    monthLabel.font = Font.systemFont(11);
    monthLabel.textColor = new Color("#94A3B8");

    monthStack.addSpacer(2);

    const monthVal = monthStack.addText(`฿${formatNumber(data.monthExpense)}`);
    monthVal.font = Font.boldSystemFont(19);
    monthVal.textColor = new Color("#38BDF8"); // ฟ้าสดใส

    metricsRow.addSpacer();

    listWidget.addSpacer(10);

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

        // ชื่อรายการ
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

    // 4. แถวล่างสุด: สรุปหนี้สิน + ออฟไลน์/เวอร์ชัน
    listWidget.addSpacer(6);
    const footerRow = listWidget.addStack();
    footerRow.layoutHorizontally();
    footerRow.centerAlignContent();

    if (data.debt && data.debt.balance !== 0) {
        const debtLabel = footerRow.addText(`${data.debt.text}`);
        debtLabel.font = Font.systemFont(10);
        debtLabel.textColor = data.debt.type === 'receive' ? new Color("#34D399") : new Color("#FBBF24");
    } else {
        const settledLabel = footerRow.addText("เคลียร์หนี้ครบแล้ว");
        settledLabel.font = Font.systemFont(10);
        settledLabel.textColor = new Color("#64748B");
    }

    footerRow.addSpacer();

    if (isOffline) {
        const offlineLabel = footerRow.addText(`ออฟไลน์ (${result.cachedAt || ""}) `);
        offlineLabel.font = Font.systemFont(8);
        offlineLabel.textColor = new Color("#F59E0B");
    }

    // W4: แสดง SCRIPT_VERSION มุมล่าง
    const verText = footerRow.addText(`v${SCRIPT_VERSION}`);
    verText.font = Font.systemFont(8);
    verText.textColor = new Color("#475569");

    return listWidget;
}

// ==========================================
// Widget หน้าแสดง Error
// ==========================================
function renderErrorWidget(listWidget, title, message, colorHex = "#EF4444") {
    const stack = listWidget.addStack();
    stack.layoutVertically();
    stack.centerAlignContent();

    const titleText = stack.addText(title);
    titleText.font = Font.boldSystemFont(13);
    titleText.textColor = new Color(colorHex);

    stack.addSpacer(6);

    const msgText = stack.addText(message);
    msgText.font = Font.systemFont(11);
    msgText.textColor = new Color("#94A3B8");

    stack.addSpacer(10);

    const hintText = stack.addText("แตะที่นี่เพื่อเปิดเว็บ");
    hintText.font = Font.systemFont(10);
    hintText.textColor = new Color("#38BDF8");

    listWidget.addSpacer();

    const footer = listWidget.addStack();
    footer.addSpacer();
    const ver = footer.addText(`v${SCRIPT_VERSION}`);
    ver.font = Font.systemFont(8);
    ver.textColor = new Color("#475569");

    return listWidget;
}

// ==========================================
// ดึงข้อมูลจาก API + Offline Caching
// ==========================================
async function fetchSummaryData(token) {
    const cacheKey = "dept_widget_cache_v2.json";
    const fm = FileManager.local();
    const cachePath = fm.joinPath(fm.documentsDirectory(), cacheKey);

    const endpoint = `${BASE_URL}/api/widget-summary`;

    try {
        const req = new Request(endpoint);
        req.headers = {
            "Authorization": `Bearer ${token}`
        };
        req.timeoutInterval = 7;
        const res = await req.loadJSON();
        const statusCode = req.response ? req.response.statusCode : 200;

        if (statusCode === 200 && res && res.success) {
            // บันทึก cache พร้อม timestamp
            const cachePayload = {
                data: res,
                cachedAt: formatTime(new Date())
            };
            fm.writeString(cachePath, JSON.stringify(cachePayload));
            return { success: true, data: res, isOffline: false };
        } else if (statusCode === 401) {
            return {
                success: false,
                status: 401,
                message: "รหัสอุปกรณ์ไม่ถูกต้องหรือถูกยกเลิก\nกรุณาตั้งค่าใหม่จากเว็บ"
            };
        } else if (statusCode === 404) {
            return {
                success: false,
                status: 404,
                message: res.message || "ไม่พบชื่อสมาชิกในระบบ"
            };
        } else if (statusCode >= 400) {
            return {
                success: false,
                status: statusCode,
                message: (res && res.message) || `เซิร์ฟเวอร์ตอบกลับผิดพลาด (${statusCode})`
            };
        }
    } catch (e) {
        console.warn("API request failed, fallback to cache:", e);
    }

    // ถ้าเชื่อมต่อไม่ได้ ให้อ่านจาก Cache เก่า
    if (fm.fileExists(cachePath)) {
        try {
            const cachedStr = fm.readString(cachePath);
            const cached = JSON.parse(cachedStr);
            if (cached && cached.data) {
                return {
                    success: true,
                    data: cached.data,
                    isOffline: true,
                    cachedAt: cached.cachedAt || ""
                };
            }
        } catch (cacheErr) {
            console.error("Cache read error:", cacheErr);
        }
    }

    return {
        success: false,
        status: 0,
        message: "ออฟไลน์ ไม่สามารถโหลดข้อมูลและไม่พบแคชเก่า"
    };
}

// ==========================================
// ฟังก์ชันเสริม (Helpers)
// ==========================================
function formatNumber(num) {
    const val = Number(num) || 0;
    return val.toLocaleString("th-TH", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

function formatTime(date) {
    const h = String(date.getHours()).padStart(2, '0');
    const m = String(date.getMinutes()).padStart(2, '0');
    return `${h}:${m}`;
}

function truncateString(str, maxLen) {
    if (!str) return "";
    return str.length > maxLen ? str.slice(0, maxLen - 2) + ".." : str;
}
