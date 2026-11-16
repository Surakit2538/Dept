// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: cyan; icon-glyph: wallet;

/**
 * Dept Money - iOS Scriptable Widget
 * บันทึกและแสดงสรุปรายจ่ายแบบ Widget บน iPhone
 * เวอร์ชัน 2.1 แบบ "สองช่อง": รายรับ | ใช้ไป + แถบเทียบ + สุทธิและยอดค้าง (Device Token Auth)
 */

const SCRIPT_VERSION = "2.1.1";
const BASE_URL = "https://dept-game.vercel.app";

// ==========================================
// สีตาม design/tokens.json (โหมดมืด) ห้ามเพิ่มสีใหม่
// ==========================================
const C = {
    bg: "#0B1113", surface: "#141D20", ink: "#E8EEEC", mute: "#93A3A0", line: "#25343A",
    receive: "#3CC4B4", pay: "#FF9A6B"
};

// ==========================================
// เริ่มต้นทำงาน
// ==========================================
const widget = await createWidget();

if (config.runsInWidget) {
    // ขอให้ iPhone รีเฟรชไม่ถี่กว่าทุก 30 นาที (แต่ละครั้งอ่านฐานข้อมูล ประหยัดโควต้าฟรีของ Firebase)
    widget.refreshAfterDate = new Date(Date.now() + 30 * 60 * 1000);
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
    listWidget.backgroundColor = new Color(C.bg);
    listWidget.setPadding(14, 16, 12, 16);
    listWidget.url = BASE_URL;

    // ตรวจสอบ Token จาก Keychain
    const token = Keychain.contains("dept_token") ? Keychain.get("dept_token") : null;

    if (!token) {
        return renderErrorWidget(
            listWidget,
            "ยังไม่ได้ตั้งค่าอุปกรณ์",
            "กรุณาเปิดเว็บ Dept Money แล้วแตะเมนู\n\"ตั้งค่า iPhone\" เพื่อติดตั้ง",
            C.pay
        );
    }

    // ดึงข้อมูลสรุป
    const result = await fetchSummaryData(token);

    if (!result.success) {
        return renderErrorWidget(
            listWidget,
            "ไม่สามารถโหลดข้อมูลได้",
            result.message || "กรุณาตรวจสอบการเชื่อมต่อ",
            C.pay
        );
    }

    const data = result.data;
    const isOffline = result.isOffline || false;
    const income = Number(data.monthIncome) || 0;
    const spent = Number(data.monthExpense) || 0;
    const net = income - spent;
    const small = config.widgetFamily === "small";

    // 1. แถวบน: โลโก้ + ชื่อแอป + วันที่
    const headerRow = listWidget.addStack();
    headerRow.layoutHorizontally();
    headerRow.centerAlignContent();

    const logo = await loadLogo();
    if (logo) {
        const img = headerRow.addImage(logo);
        img.imageSize = new Size(16, 16);
        img.cornerRadius = 4;
        headerRow.addSpacer(6);
    }
    const titleText = headerRow.addText("DEPT MONEY");
    titleText.font = Font.semiboldSystemFont(10);
    titleText.textColor = new Color(C.mute);
    headerRow.addSpacer();
    const dateText = headerRow.addText(data.dateHeader || "วันนี้");
    dateText.font = Font.systemFont(10);
    dateText.textColor = new Color(C.mute);

    listWidget.addSpacer(small ? 8 : 10);

    // 2. สองช่อง: รายรับ | ใช้ไป คั่นเส้นบาง
    const cols = listWidget.addStack();
    cols.layoutHorizontally();
    if (!small) {
        addColumn(cols, "รายรับเดือนนี้", income, C.receive);
        cols.addSpacer(12);
        const divider = cols.addStack();
        divider.size = new Size(1, 40);
        divider.backgroundColor = new Color(C.line);
        cols.addSpacer(12);
    }
    addColumn(cols, "ใช้ไปเดือนนี้", spent, C.pay);
    cols.addSpacer();

    // 3. แถบเทียบ ใช้ไป ต่อ รายรับ (เห็นภาพว่าเหลือเท่าไร)
    if (!small) {
        listWidget.addSpacer(8);
        const bar = listWidget.addImage(drawBar(income, spent, 296));
        bar.imageSize = new Size(296, 6);
        bar.resizable = false;
    }

    listWidget.addSpacer();

    // 4. ล่างสุด: สุทธิ + ยอดที่เพื่อนค้าง/คุณค้าง
    const footer = listWidget.addStack();
    footer.layoutHorizontally();
    footer.centerAlignContent();

    if (income > 0 && !small) {
        const netText = footer.addText(`${net >= 0 ? "เหลือ" : "เกิน"} ${money(Math.abs(net))}`);
        netText.font = Font.semiboldSystemFont(11);
        netText.textColor = new Color(net >= 0 ? C.receive : C.pay);
        footer.addSpacer();
    } else if (!small) {
        const hint = footer.addText("ยังไม่มีรายรับเดือนนี้");
        hint.font = Font.systemFont(10);
        hint.textColor = new Color(C.mute);
        footer.addSpacer();
    }

    const hasDebt = data.debt && data.debt.balance !== 0;
    const debtLabel = footer.addText(hasDebt ? `${data.debt.text}` : "เคลียร์หนี้ครบแล้ว");
    debtLabel.font = Font.systemFont(10);
    debtLabel.textColor = new Color(hasDebt ? (data.debt.type === "receive" ? C.receive : C.pay) : C.mute);
    if (small) footer.addSpacer();

    if (isOffline) {
        listWidget.addSpacer(2);
        const off = listWidget.addText(`ออฟไลน์ ข้อมูลเมื่อ ${result.cachedAt || ""}  v${SCRIPT_VERSION}`);
        off.font = Font.systemFont(8);
        off.textColor = new Color(C.mute);
    }

    return listWidget;
}

function addColumn(parent, label, value, color) {
    const col = parent.addStack();
    col.layoutVertically();
    const l = col.addText(label);
    l.font = Font.systemFont(10);
    l.textColor = new Color(C.mute);
    col.addSpacer(2);
    const v = col.addText(money(value));
    v.font = Font.boldSystemFont(22);
    v.textColor = new Color(color);
    v.minimumScaleFactor = 0.6;
    v.lineLimit = 1;
}

// แถบสัดส่วน: พื้นรางสีเส้น, ส่วนที่ใช้ไปสีส้ม (เกินรายรับก็เต็มราง)
function drawBar(income, spent, width) {
    const h = 6;
    const ctx = new DrawContext();
    ctx.size = new Size(width, h);
    ctx.opaque = false;
    ctx.respectScreenScale = true;
    ctx.setFillColor(new Color(C.line));
    ctx.fillPath(roundedRect(0, 0, width, h, h / 2));
    const ratio = income > 0 ? Math.min(spent / income, 1) : (spent > 0 ? 1 : 0);
    if (ratio > 0) {
        ctx.setFillColor(new Color(C.pay));
        ctx.fillPath(roundedRect(0, 0, Math.max(width * ratio, h), h, h / 2));
    }
    return ctx.getImage();
}

function roundedRect(x, y, w, h, r) {
    const path = new Path();
    path.addRoundedRect(new Rect(x, y, w, h), r, r);
    return path;
}

// โลโก้แอป โหลดครั้งเดียวแล้วเก็บในเครื่อง (โหลดไม่ได้ก็แสดงโดยไม่มีโลโก้)
async function loadLogo() {
    const fm = FileManager.local();
    const path = fm.joinPath(fm.documentsDirectory(), "dept_logo_v1.png");
    try {
        if (fm.fileExists(path)) return fm.readImage(path);
        const req = new Request(`${BASE_URL}/icons/icon-192.png`);
        req.timeoutInterval = 5;
        const img = await req.loadImage();
        fm.writeImage(path, img);
        return img;
    } catch (e) {
        return null;
    }
}

function money(num) {
    const val = Math.round(Number(num) || 0);
    return `฿${val.toLocaleString("th-TH")}`;
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
    msgText.textColor = new Color(C.mute);

    stack.addSpacer(10);

    const hintText = stack.addText("แตะที่นี่เพื่อเปิดเว็บ");
    hintText.font = Font.systemFont(10);
    hintText.textColor = new Color(C.receive);

    listWidget.addSpacer();

    const footer = listWidget.addStack();
    footer.addSpacer();
    const ver = footer.addText(`v${SCRIPT_VERSION}`);
    ver.font = Font.systemFont(8);
    ver.textColor = new Color(C.mute);

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
