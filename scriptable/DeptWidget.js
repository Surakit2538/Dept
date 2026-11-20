// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: blue; icon-glyph: wallet;

/**
 * Dept Money - iOS Scriptable Widget
 * เวอร์ชัน 3 "ยอดใหญ่ + รายชื่อ" พื้นน้ำเงินไล่สี ครบทุกขนาด:
 *   เล็ก   = ใช้ไปเดือนนี้ + แถบ + ยอดที่เพื่อนค้าง/คุณค้าง
 *   กลาง  = ใช้ไป + รายรับ + แถบ | รายชื่อที่ต้องเคลียร์ (สูงสุด 3)
 *   ใหญ่   = ใช้ไป + รายรับ + เหลือ + แถบ + เพื่อนค้างคุณ / คุณค้างเพื่อน แยกกลุ่ม
 *   หน้าล็อก = วงกลม (% ที่ใช้ไปของรายรับ), สี่เหลี่ยม (ใช้ไป + หนี้), บรรทัดเหนือเวลา
 * แตะ Widget เปิดเว็บ แตะชื่อเพื่อน (กลาง/ใหญ่) เปิดหน้าเคลียร์เงิน (Device Token Auth)
 */

const SCRIPT_VERSION = "3.0.1";
const BASE_URL = "https://dept-game.vercel.app";

// ==========================================
// สีตาม design/tokens.json เท่านั้น ห้ามเพิ่มสีใหม่
// ==========================================
const C = {
    accent: "#2343c9", accent2: "#4466f2", white: "#ffffff", soft: "#dbe4fd",
    sun: "#ffc23d", sunInk: "#2e2100", ink: "#121a33"
};
const col = (hex, a = 1) => new Color(hex, a);

// ==========================================
// เริ่มต้นทำงาน
// ==========================================
const FAMILY = config.widgetFamily || "medium";
const widget = await createWidget(FAMILY);

if (config.runsInWidget || config.runsInAccessoryWidget) {
    // ขอให้ iPhone รีเฟรชไม่ถี่กว่าทุก 30 นาที (แต่ละครั้งอ่านฐานข้อมูล ประหยัดโควต้าฟรีของ Firebase)
    widget.refreshAfterDate = new Date(Date.now() + 30 * 60 * 1000);
    Script.setWidget(widget);
} else {
    // กดรันในแอป Scriptable: พรีวิวขนาดกลาง
    await widget.presentMedium();
}
Script.complete();

// ==========================================
// สร้าง Widget
// ==========================================
async function createWidget(family) {
    const lw = new ListWidget();
    const lock = family.startsWith("accessory");
    lw.url = BASE_URL;
    if (!lock) {
        const g = new LinearGradient();
        g.colors = [col(C.accent2), col(C.accent)];
        g.locations = [0, 1];
        g.startPoint = new Point(0, 0);
        g.endPoint = new Point(1, 1);
        lw.backgroundGradient = g;
        lw.setPadding(14, 14, 12, 14);
    }

    const token = Keychain.contains("dept_token") ? Keychain.get("dept_token") : null;
    if (!token) return renderError(lw, family, "ยังไม่ได้ตั้งค่า", "เปิดเว็บ Dept Money แล้วแตะ \"ตั้งค่า iPhone\"");

    const result = await fetchSummaryData(token);
    if (!result.success) return renderError(lw, family, "โหลดข้อมูลไม่ได้", result.message || "ตรวจสอบอินเทอร์เน็ต");

    const d = result.data;
    const s = {
        income: Number(d.monthIncome) || 0,
        spent: Number(d.monthExpense) || 0,
        date: d.dateHeader || "วันนี้",
        debt: d.debt || { balance: 0, type: "settled", text: "เคลียร์ครบแล้ว" },
        owedToMe: (d.people && Array.isArray(d.people.owedToMe)) ? d.people.owedToMe : [],
        iOwe: (d.people && Array.isArray(d.people.iOwe)) ? d.people.iOwe : [],
        offline: result.isOffline ? (result.cachedAt || "") : null
    };
    s.net = s.income - s.spent;
    s.inTotal = s.owedToMe.reduce((a, x) => a + (Number(x.amount) || 0), 0);
    s.outTotal = s.iOwe.reduce((a, x) => a + (Number(x.amount) || 0), 0);
    s.pct = s.income > 0 ? Math.round((s.spent / s.income) * 100) : null;

    if (family === "accessoryInline") return renderInline(lw, s);
    if (family === "accessoryCircular") return renderCircular(lw, s);
    if (family === "accessoryRectangular") return renderRectangular(lw, s);
    if (family === "small") return renderSmall(lw, s);
    if (family === "large" || family === "extraLarge") return renderLarge(lw, s);
    return renderMedium(lw, s);
}

// ---------- หน้าโฮม ----------
function renderSmall(lw, s) {
    header(lw, true, s);
    lw.addSpacer(8);
    label(lw, "ใช้ไปเดือนนี้");
    lw.addSpacer(2);
    bigMoney(lw, s.spent, 24);
    lw.addSpacer(6);
    bar(lw, s, 130);
    lw.addSpacer();
    debtPill(lw, s, true);
    offlineNote(lw, s);
    return lw;
}

function renderMedium(lw, s) {
    header(lw, false, s);
    lw.addSpacer(8);
    const row = lw.addStack();
    row.layoutHorizontally();

    const left = row.addStack();
    left.layoutVertically();
    left.size = new Size(140, 0);
    label(left, "ใช้ไปเดือนนี้");
    left.addSpacer(2);
    bigMoney(left, s.spent, 24);
    left.addSpacer(2);
    label(left, s.income > 0 ? `รายรับ ${money(s.income)}` : "ยังไม่มีรายรับเดือนนี้");
    left.addSpacer(6);
    bar(left, s, 136);

    row.addSpacer(10);
    const line = row.addStack();
    line.size = new Size(1, 92);
    line.backgroundColor = col(C.white, 0.22);
    row.addSpacer(10);

    const right = row.addStack();
    right.layoutVertically();
    groupTitle(right, "ต้องเคลียร์");
    right.addSpacer(4);
    const list = [...s.owedToMe.map((x) => ({ ...x, dir: "in" })), ...s.iOwe.map((x) => ({ ...x, dir: "out" }))].slice(0, 3);
    if (list.length === 0) {
        const t = right.addText("เดือนนี้เคลียร์ครบแล้ว");
        t.font = Font.semiboldSystemFont(12);
        t.textColor = col(C.white);
    }
    list.forEach((p, i) => {
        if (i) right.addSpacer(5);
        personRow(right, p, 20);
    });
    right.addSpacer();
    lw.addSpacer();
    offlineNote(lw, s);
    return lw;
}

function renderLarge(lw, s) {
    header(lw, false, s);
    lw.addSpacer(10);
    label(lw, "ใช้ไปเดือนนี้");
    lw.addSpacer(2);
    bigMoney(lw, s.spent, 32);
    lw.addSpacer(4);
    const sub = lw.addStack();
    sub.layoutHorizontally();
    label(sub, s.income > 0 ? `รายรับ ${money(s.income)}` : "ยังไม่มีรายรับเดือนนี้");
    sub.addSpacer();
    if (s.income > 0) label(sub, `${s.net >= 0 ? "เหลือ" : "เกิน"} ${money(Math.abs(s.net))}`);
    lw.addSpacer(6);
    bar(lw, s, 300);

    if (s.owedToMe.length === 0 && s.iOwe.length === 0) {
        lw.addSpacer(16);
        const t = lw.addText("เดือนนี้เคลียร์ครบแล้ว ไม่มีใครค้างใคร");
        t.font = Font.semiboldSystemFont(13);
        t.textColor = col(C.white);
    }
    if (s.owedToMe.length > 0) {
        lw.addSpacer(12);
        groupTitle(lw, `เพื่อนค้างคุณ ${money(s.inTotal)}`);
        s.owedToMe.slice(0, s.iOwe.length ? 3 : 5).forEach((p) => { lw.addSpacer(5); personRow(lw, { ...p, dir: "in" }, 22); });
    }
    if (s.iOwe.length > 0) {
        lw.addSpacer(10);
        groupTitle(lw, `คุณค้างเพื่อน ${money(s.outTotal)}`);
        s.iOwe.slice(0, s.owedToMe.length ? 2 : 5).forEach((p) => { lw.addSpacer(5); personRow(lw, { ...p, dir: "out" }, 22); });
    }
    lw.addSpacer();
    if (s.owedToMe.length > 0 || s.iOwe.length > 0) {
        const foot = lw.addStack();
        foot.setPadding(2, 8, 2, 8);
        foot.cornerRadius = 9;
        foot.backgroundColor = col(C.white, 0.2);
        const ft = foot.addText("แตะชื่อเพื่อนเพื่อเปิดหน้าเคลียร์เงิน");
        ft.font = Font.semiboldSystemFont(10);
        ft.textColor = col(C.white);
    }
    offlineNote(lw, s);
    return lw;
}

// ---------- หน้าล็อก (iPhone แสดงเป็นสีเดียวเอง) ----------
function renderInline(lw, s) {
    const t = lw.addText(`Dept ใช้ไป ${money(s.spent)}`);
    t.font = Font.semiboldSystemFont(13);
    return lw;
}

function renderCircular(lw, s) {
    lw.addAccessoryWidgetBackground = true;
    const img = lw.addImage(drawRing(s.pct === null ? 0 : Math.min(s.pct, 100), s.pct === null ? short(s.spent) : `${s.pct}%`));
    img.imageSize = new Size(64, 64);
    img.centerAlignImage();
    return lw;
}

function renderRectangular(lw, s) {
    const a = lw.addText("ใช้ไปเดือนนี้");
    a.font = Font.systemFont(11);
    const b = lw.addText(money(s.spent));
    b.font = Font.boldSystemFont(18);
    b.minimumScaleFactor = 0.7;
    b.lineLimit = 1;
    const c = lw.addText(debtText(s));
    c.font = Font.systemFont(11);
    c.lineLimit = 1;
    c.minimumScaleFactor = 0.7;
    return lw;
}

// ---------- ส่วนประกอบ ----------
function header(parent, small, s) {
    const h = parent.addStack();
    h.layoutHorizontally();
    h.centerAlignContent();
    const logo = h.addImage(drawLogo());
    logo.imageSize = new Size(18, 18);
    h.addSpacer(6);
    const t = h.addText(small ? "Dept" : "Dept Money");
    t.font = Font.boldSystemFont(12);
    t.textColor = col(C.white);
    h.addSpacer();
    const dt = h.addText(small ? shortDate(s.date) : s.date);
    dt.font = Font.mediumSystemFont(11);
    dt.textColor = col(C.soft);
    dt.lineLimit = 1;
}

function label(parent, text) {
    const t = parent.addText(text);
    t.font = Font.systemFont(11);
    t.textColor = col(C.soft);
    t.lineLimit = 1;
    t.minimumScaleFactor = 0.8;
    return t;
}

function groupTitle(parent, text) {
    const t = parent.addText(text);
    t.font = Font.boldSystemFont(11);
    t.textColor = col(C.soft);
    t.lineLimit = 1;
}

function bigMoney(parent, value, size) {
    const t = parent.addText(money(value));
    t.font = Font.heavySystemFont(size);
    t.textColor = col(C.white);
    t.lineLimit = 1;
    t.minimumScaleFactor = 0.6;
}

function bar(parent, s, width) {
    const img = parent.addImage(drawBar(s.income, s.spent, width));
    img.imageSize = new Size(width, 6);
    img.resizable = false;
}

function debtPill(parent, s) {
    const p = parent.addStack();
    p.setPadding(3, 8, 3, 8);
    p.cornerRadius = 10;
    const pay = s.debt.type === "pay";
    const settled = s.debt.type === "settled" || !s.debt.balance;
    p.backgroundColor = settled ? col(C.white, 0.2) : col(C.sun);
    const t = p.addText(settled ? "เคลียร์ครบแล้ว" : `${pay ? "คุณค้าง" : "เพื่อนค้าง"} ${money(Math.abs(s.debt.balance))}`);
    t.font = Font.boldSystemFont(11);
    t.textColor = settled ? col(C.white) : col(C.sunInk);
    t.lineLimit = 1;
    t.minimumScaleFactor = 0.7;
    if (!settled) p.url = `${BASE_URL}/#clear`;
}

function personRow(parent, p, avatarSize) {
    const r = parent.addStack();
    r.layoutHorizontally();
    r.centerAlignContent();
    r.url = `${BASE_URL}/#clear`;
    const av = r.addStack();
    av.size = new Size(avatarSize, avatarSize);
    av.cornerRadius = avatarSize / 2;
    av.backgroundColor = p.dir === "in" ? col(C.white) : col(C.sun);
    av.centerAlignContent();
    const ini = av.addText(initials(p.name));
    ini.font = Font.heavySystemFont(avatarSize * 0.42);
    ini.textColor = p.dir === "in" ? col(C.accent) : col(C.sunInk);
    r.addSpacer(7);
    const n = r.addText(p.dir === "in" ? `${p.name} ค้างคุณ` : `คุณค้าง ${p.name}`);
    n.font = Font.semiboldSystemFont(13);
    n.textColor = col(C.white);
    n.lineLimit = 1;
    n.minimumScaleFactor = 0.7;
    r.addSpacer();
    const a = r.addText(money(p.amount));
    a.font = Font.boldSystemFont(13);
    a.textColor = p.dir === "in" ? col(C.white) : col(C.sun);
    a.lineLimit = 1;
}

function offlineNote(parent, s) {
    if (s.offline === null) return;
    const t = parent.addText(`ออฟไลน์ ข้อมูลเมื่อ ${s.offline}`);
    t.font = Font.systemFont(8);
    t.textColor = col(C.soft);
}

function debtText(s) {
    if (s.debt.type === "receive" && s.debt.balance) return `เพื่อนค้างคุณ ${money(s.debt.balance)}`;
    if (s.debt.type === "pay" && s.debt.balance) return `คุณค้างเพื่อน ${money(Math.abs(s.debt.balance))}`;
    return "เคลียร์ครบแล้ว";
}

// ---------- วาดรูป ----------
// แถบใช้ไปต่อรายรับ: รางขาวจาง ส่วนที่ใช้ไปสีทานตะวัน (ไม่มีรายรับแต่มีรายจ่าย = เต็มราง)
function drawBar(income, spent, width) {
    const h = 6;
    const ctx = new DrawContext();
    ctx.size = new Size(width, h);
    ctx.opaque = false;
    ctx.respectScreenScale = true;
    ctx.setFillColor(col(C.white, 0.25));
    fillShape(ctx, roundedRect(0, 0, width, h, h / 2));
    const ratio = income > 0 ? Math.min(spent / income, 1) : (spent > 0 ? 1 : 0);
    if (ratio > 0) {
        ctx.setFillColor(col(C.sun));
        fillShape(ctx, roundedRect(0, 0, Math.max(width * ratio, h), h, h / 2));
    }
    return ctx.getImage();
}

// วงแหวนหน้าล็อก (iPhone ย้อมสีเอง ใช้ขาวทึบ/จาง)
function drawRing(pct, text) {
    const S = 128, w = 12, r = (S - w) / 2, cx = S / 2;
    const ctx = new DrawContext();
    ctx.size = new Size(S, S);
    ctx.opaque = false;
    ctx.respectScreenScale = false;
    const arc = (from, to, color) => {
        const p = new Path();
        const steps = Math.max(2, Math.round((to - from) * 90));
        for (let i = 0; i <= steps; i++) {
            const a = (from + (to - from) * (i / steps)) * Math.PI * 2 - Math.PI / 2;
            const pt = new Point(cx + r * Math.cos(a), cx + r * Math.sin(a));
            if (i === 0) p.move(pt); else p.addLine(pt);
        }
        ctx.addPath(p);
        ctx.setStrokeColor(color);
        ctx.setLineWidth(w);
        ctx.strokePath();
    };
    arc(0, 1, col(C.white, 0.3));
    if (pct > 0) arc(0, pct / 100, col(C.white));
    ctx.setFont(Font.boldSystemFont(30));
    ctx.setTextColor(col(C.white));
    ctx.setTextAlignedCenter();
    ctx.drawTextInRect(text, new Rect(0, S / 2 - 20, S, 40));
    return ctx.getImage();
}

// โลโก้ใบเสร็จผ่ากลาง (กล่องขาว ใบเสร็จน้ำเงิน จุดทานตะวัน) วาดเองไม่ต้องโหลดจากเน็ต
function drawLogo() {
    const k = 3;
    const ctx = new DrawContext();
    ctx.size = new Size(64 * k, 64 * k);
    ctx.opaque = false;
    ctx.respectScreenScale = false;
    const P = (x, y) => new Point(x * k, y * k);
    ctx.setFillColor(col(C.white));
    fillShape(ctx, roundedRect(0, 0, 64 * k, 64 * k, 16 * k));
    const paper = new Path();
    paper.addLines([P(19, 13), P(45, 13), P(45, 51), P(40.7, 48), P(36.3, 51), P(32, 48), P(27.7, 51), P(23.3, 48), P(19, 51)]);
    paper.closeSubpath();
    ctx.addPath(paper);
    ctx.setFillColor(col(C.accent));
    ctx.fillPath();
    ctx.setFillColor(col(C.white));
    for (let y = 16; y < 47; y += 6) ctx.fillRect(new Rect(31 * k, y * k, 2 * k, 3 * k));
    ctx.setFillColor(col(C.sun));
    fillShape(ctx, roundedRect(22.5 * k, 22 * k, 7 * k, 4 * k, 2 * k));
    fillShape(ctx, roundedRect(34.5 * k, 22 * k, 7 * k, 4 * k, 2 * k));
    return ctx.getImage();
}

// Scriptable: fillPath() ไม่รับพารามิเตอร์ ต้อง addPath ก่อนแล้วค่อย fillPath (ส่ง path เข้าไปตรงๆ จะไม่วาดอะไรเลย)
function fillShape(ctx, path) {
    ctx.addPath(path);
    ctx.fillPath();
}

function roundedRect(x, y, w, h, r) {
    const path = new Path();
    path.addRoundedRect(new Rect(x, y, w, h), r, r);
    return path;
}

// ---------- หน้าแสดงข้อผิดพลาด ----------
function renderError(lw, family, title, message) {
    if (family.startsWith("accessory")) {
        const t = lw.addText(family === "accessoryInline" ? `Dept: ${title}` : title);
        t.font = Font.semiboldSystemFont(12);
        return lw;
    }
    header(lw, family === "small", { date: "" });
    lw.addSpacer(10);
    const t = lw.addText(title);
    t.font = Font.boldSystemFont(14);
    t.textColor = col(C.white);
    lw.addSpacer(4);
    const m = lw.addText(message);
    m.font = Font.systemFont(11);
    m.textColor = col(C.soft);
    lw.addSpacer();
    const v = lw.addText(`แตะเพื่อเปิดเว็บ  v${SCRIPT_VERSION}`);
    v.font = Font.systemFont(9);
    v.textColor = col(C.soft);
    return lw;
}

// ==========================================
// ดึงข้อมูลจาก API + เก็บไว้ใช้ตอนออฟไลน์
// ==========================================
async function fetchSummaryData(token) {
    const fm = FileManager.local();
    const cachePath = fm.joinPath(fm.documentsDirectory(), "dept_widget_cache_v2.json");
    try {
        const req = new Request(`${BASE_URL}/api/widget-summary`);
        req.headers = { "Authorization": `Bearer ${token}` };
        req.timeoutInterval = 7;
        const res = await req.loadJSON();
        const statusCode = req.response ? req.response.statusCode : 200;
        if (statusCode === 200 && res && res.success) {
            fm.writeString(cachePath, JSON.stringify({ data: res, cachedAt: formatTime(new Date()) }));
            return { success: true, data: res, isOffline: false };
        }
        if (statusCode === 401) return { success: false, message: "รหัสอุปกรณ์ถูกยกเลิก ตั้งค่าใหม่จากเว็บ" };
        if (statusCode >= 400) return { success: false, message: (res && res.message) || `เซิร์ฟเวอร์ผิดพลาด (${statusCode})` };
    } catch (e) {
        console.warn("API request failed, fallback to cache:", e);
    }
    if (fm.fileExists(cachePath)) {
        try {
            const cached = JSON.parse(fm.readString(cachePath));
            if (cached && cached.data) return { success: true, data: cached.data, isOffline: true, cachedAt: cached.cachedAt || "" };
        } catch (cacheErr) {
            console.error("Cache read error:", cacheErr);
        }
    }
    return { success: false, message: "ออฟไลน์ และยังไม่มีข้อมูลเก่าในเครื่อง" };
}

// ==========================================
// ตัวช่วย
// ==========================================
function money(num) {
    const val = Math.round(Number(num) || 0);
    return `฿${val.toLocaleString("en-US")}`;
}

// ยอดย่อสำหรับที่แคบ เช่น 18450 -> ฿18.5k
function short(num) {
    const v = Math.round(Number(num) || 0);
    if (v >= 1000) return `฿${(v / 1000).toFixed(v >= 10000 ? 0 : 1)}k`;
    return `฿${v}`;
}

function initials(name) {
    const clean = String(name || "").replace(/[\s‍️]|\p{Extended_Pictographic}/gu, "");
    return (Array.from(clean).slice(0, 2).join("") || "?").toUpperCase();
}

// "ศุกร์ 20 พ.ย." -> "20 พ.ย."
function shortDate(text) {
    const m = /(\d{1,2}\s+\S+)$/.exec(String(text || ""));
    return m ? m[1] : String(text || "");
}

function formatTime(date) {
    return `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
}
