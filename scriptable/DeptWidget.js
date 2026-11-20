// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: blue; icon-glyph: wallet;

/**
 * Dept Money - iOS Scriptable Widget
 * เวอร์ชัน 3 "ยอดใหญ่ + รายชื่อ" ครบทุกขนาด (ตั้งงบไว้ = ยอดใหญ่เป็น "งบเหลือ" แถบ = ใช้ไปกี่ % ของงบ):
 *   เล็ก   = ใช้ไป/งบเหลือ + แถบ + ยอดที่เพื่อนค้าง/คุณค้าง
 *   กลาง  = ใช้ไป/งบเหลือ + รายรับ/งบ + แถบ | รายชื่อที่ต้องเคลียร์ (สูงสุด 3)
 *   ใหญ่   = ใช้ไป/งบเหลือ + รายละเอียด + แถบ + เพื่อนค้างคุณ / คุณค้างเพื่อน แยกกลุ่ม
 *   หน้าล็อก = วงกลม (% ที่ใช้ไป), สี่เหลี่ยม (ยอด + หนี้), บรรทัดเหนือเวลา
 * พื้นหลัง: "กระจกน้ำเงิน" = ภาพวอลเปเปอร์ตรงตำแหน่ง Widget เคลือบน้ำเงินโปร่ง (ตั้งครั้งเดียว: รันสคริปต์นี้ในแอป)
 *   ไม่ได้ตั้ง = พื้นน้ำเงินไล่สีแบบเดิม · ช่อง Parameter ของ Widget = ตำแหน่ง เช่น บน, กลาง, ล่างซ้าย
 * แตะ Widget เปิดเว็บ แตะชื่อเพื่อน (กลาง/ใหญ่) เปิดหน้าเคลียร์เงิน (Device Token Auth)
 */

const SCRIPT_VERSION = "3.1.0";
const BASE_URL = "https://dept-game.vercel.app";

// ==========================================
// สีตาม design/tokens.json เท่านั้น ห้ามเพิ่มสีใหม่
// ==========================================
const C = {
    accent: "#2343c9", accent2: "#4466f2", white: "#ffffff", soft: "#dbe4fd",
    sun: "#ffc23d", sunInk: "#2e2100", ink: "#121a33", navy: "#17245a", pay: "#b43f16"
};
const GLASS_TINT = 0.42; // ความเข้มของสีน้ำเงินที่เคลือบภาพพื้นหลัง (อ่านตัวหนังสือขาวได้ทุกวอลเปเปอร์)
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
    // กดรันในแอป Scriptable: เมนู ดูตัวอย่าง / ตั้งพื้นหลังใส / ลบพื้นหลังใส
    await appMenu(widget);
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
        // กระจกน้ำเงิน: มีภาพที่ตัดไว้ของขนาดและตำแหน่งนี้ ใช้ภาพนั้นแทนพื้นไล่สี
        const bg = loadGlass(family, (args.widgetParameter || "").trim());
        if (bg) lw.backgroundImage = bg;
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
        offline: result.isOffline ? (result.cachedAt || "") : null,
        // งบเดือนนี้ (null = ไม่ได้ตั้ง แสดงแบบเดิม)
        budget: d.budget && Number(d.budget.budget) > 0 ? d.budget : null
    };
    s.net = s.income - s.spent;
    s.inTotal = s.owedToMe.reduce((a, x) => a + (Number(x.amount) || 0), 0);
    s.outTotal = s.iOwe.reduce((a, x) => a + (Number(x.amount) || 0), 0);
    s.pct = s.budget ? Math.round(Number(s.budget.percent) || 0) : s.income > 0 ? Math.round((s.spent / s.income) * 100) : null;
    s.ratio = s.budget ? s.spent / Number(s.budget.budget) : s.income > 0 ? s.spent / s.income : (s.spent > 0 ? 1 : 0);
    s.overBudget = Boolean(s.budget && Number(s.budget.left) < 0);
    // ข้อความหลัก: ตั้งงบ = งบเหลือ/เกินงบ ไม่ตั้ง = ใช้ไปเดือนนี้
    s.mainLabel = s.budget ? (s.overBudget ? "ใช้เกินงบแล้ว" : "งบเหลือเดือนนี้") : "ใช้ไปเดือนนี้";
    s.mainValue = s.budget ? Math.abs(Number(s.budget.left) || 0) : s.spent;

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
    label(lw, s.budget ? (s.overBudget ? "เกินงบ" : "งบเหลือ") : "ใช้ไปเดือนนี้");
    lw.addSpacer(2);
    bigMoney(lw, s.mainValue, 24);
    lw.addSpacer(6);
    bar(lw, s, 130);
    if (s.budget) { lw.addSpacer(3); label(lw, `ใช้ไป ${s.pct}% ของงบ`); }
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
    label(left, s.mainLabel);
    left.addSpacer(2);
    bigMoney(left, s.mainValue, 24);
    left.addSpacer(2);
    label(left, s.budget ? `ใช้ไป ${money(s.spent)} จาก ${money(s.budget.budget)}` : s.income > 0 ? `รายรับ ${money(s.income)}` : "ยังไม่มีรายรับเดือนนี้");
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
    label(lw, s.mainLabel);
    lw.addSpacer(2);
    bigMoney(lw, s.mainValue, 32);
    lw.addSpacer(4);
    const sub = lw.addStack();
    sub.layoutHorizontally();
    if (s.budget) {
        label(sub, `ใช้ไป ${money(s.spent)} จากงบ ${money(s.budget.budget)}`);
        sub.addSpacer();
        label(sub, `${s.pct}%`);
    } else {
        label(sub, s.income > 0 ? `รายรับ ${money(s.income)}` : "ยังไม่มีรายรับเดือนนี้");
        sub.addSpacer();
        if (s.income > 0) label(sub, `${s.net >= 0 ? "เหลือ" : "เกิน"} ${money(Math.abs(s.net))}`);
    }
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
    const t = lw.addText(s.budget ? `Dept ${s.overBudget ? "เกินงบ" : "งบเหลือ"} ${money(s.mainValue)}` : `Dept ใช้ไป ${money(s.spent)}`);
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
    const a = lw.addText(s.mainLabel);
    a.font = Font.systemFont(11);
    const b = lw.addText(money(s.mainValue));
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
    const img = parent.addImage(drawBar(s.ratio, width));
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
// แถบใช้ไป (ต่องบ หรือต่อรายรับ): รางขาวจาง ส่วนที่ใช้ไปสีทานตะวัน ratio >= 1 = เต็มราง
function drawBar(ratioIn, width) {
    const h = 6;
    const ctx = new DrawContext();
    ctx.size = new Size(width, h);
    ctx.opaque = false;
    ctx.respectScreenScale = true;
    ctx.setFillColor(col(C.white, 0.25));
    fillShape(ctx, roundedRect(0, 0, width, h, h / 2));
    const ratio = Math.max(0, Math.min(Number(ratioIn) || 0, 1));
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
// เมนูเมื่อกดรันในแอป + พื้นหลัง "กระจกน้ำเงิน" (ตัดภาพวอลเปเปอร์ตรงตำแหน่ง Widget แล้วเคลือบน้ำเงินโปร่ง)
// iPhone ไม่ให้ Widget ใสจริง วิธีนี้คือใช้ภาพหน้าโฮมที่ว่างมาตัดเป็นพื้นหลัง ภาพเก็บในเครื่องเท่านั้น ไม่ส่งไปไหน
// ==========================================
async function appMenu(widget) {
    const a = new Alert();
    a.title = `Dept Widget v${SCRIPT_VERSION}`;
    a.message = "พื้นหลังกระจก = เห็นวอลเปเปอร์ผ่านสีน้ำเงินโปร่ง ตั้งครั้งเดียวต่อตำแหน่ง";
    a.addAction("ดูตัวอย่าง Widget");
    a.addAction("ตั้งพื้นหลังกระจก");
    a.addDestructiveAction("ลบพื้นหลังกระจกทั้งหมด");
    a.addCancelAction("ปิด");
    const i = await a.presentSheet();
    if (i === 0) return widget.presentMedium();
    if (i === 1) return setupGlass();
    if (i === 2) return clearGlass();
}

// ตำแหน่งที่พิมพ์ในช่อง Parameter -> รหัสไฟล์
const POS_KEY = {
    "บนซ้าย": "top-left", "บนขวา": "top-right", "กลางซ้าย": "middle-left", "กลางขวา": "middle-right", "ล่างซ้าย": "bottom-left", "ล่างขวา": "bottom-right",
    "บน": "top", "กลาง": "middle", "ล่าง": "bottom"
};
const POS_BY_SIZE = {
    small: ["บนซ้าย", "บนขวา", "กลางซ้าย", "กลางขวา", "ล่างซ้าย", "ล่างขวา"],
    medium: ["บน", "กลาง", "ล่าง"],
    large: ["บน", "ล่าง"]
};

function glassDir(fm) {
    const d = fm.joinPath(fm.documentsDirectory(), "dept_glass");
    if (!fm.fileExists(d)) fm.createDirectory(d, true);
    return d;
}

/** ภาพพื้นหลังของขนาด/ตำแหน่งนี้ (ไม่ใส่ Parameter แต่มีภาพของขนาดนี้ภาพเดียว = ใช้ภาพนั้น) */
function loadGlass(family, param) {
    try {
        const size = family === "extraLarge" ? "large" : family;
        if (!POS_BY_SIZE[size]) return null;
        const fm = FileManager.local();
        const dir = glassDir(fm);
        let name = "";
        const pos = POS_KEY[String(param || "").replace(/\s+/g, "")];
        if (pos) name = `${size}-${pos}.png`;
        else {
            const mine = fm.listContents(dir).filter((f) => f.startsWith(size + "-"));
            if (mine.length === 1) name = mine[0];
        }
        if (!name) return null;
        const p = fm.joinPath(dir, name);
        return fm.fileExists(p) ? fm.readImage(p) : null;
    } catch (e) {
        return null;
    }
}

async function choose(title, message, options) {
    const a = new Alert();
    a.title = title;
    if (message) a.message = message;
    options.forEach((o) => a.addAction(o));
    a.addCancelAction("ยกเลิก");
    const i = await a.presentSheet();
    return i < 0 ? null : options[i];
}

async function notice(title, message) {
    const a = new Alert();
    a.title = title;
    a.message = message;
    a.addAction("ตกลง");
    await a.present();
}

async function setupGlass() {
    const intro = new Alert();
    intro.title = "ตั้งพื้นหลังกระจก";
    intro.message = "ต้องใช้ภาพหน้าจอของหน้าโฮมที่ว่าง:\n1. กดค้างที่หน้าโฮมจนไอคอนสั่น\n2. ปัดไปหน้าว่างขวาสุด\n3. แคปหน้าจอ\n\nมีภาพแล้วกด เลือกภาพ";
    intro.addAction("เลือกภาพ");
    intro.addCancelAction("ยกเลิก");
    if ((await intro.present()) === -1) return;
    let img;
    try { img = await Photos.fromLibrary(); } catch (e) { return; }
    const h = Math.round(img.size.height);
    let phone = phoneSizes(String(h));
    if (!phone) return notice("ยังไม่รองรับ iPhone รุ่นนี้", `ภาพสูง ${h} พิกเซล ส่งข้อความนี้ให้ผู้ดูแลเพื่อเพิ่มรุ่นนี้`);
    if (phone.text) {
        const t = await choose("ใต้ไอคอนแอปมีชื่อแอปไหม", "ดูที่หน้าโฮม (ตั้งค่า > หน้าจอโฮม > ไอคอนขนาดใหญ่ = ไม่มีชื่อ)", ["มีชื่อแอป", "ไม่มีชื่อ (ไอคอนใหญ่)"]);
        if (!t) return;
        phone = t === "มีชื่อแอป" ? phone.text : phone.notext;
    }
    if (phone.x) {
        const t = await choose("เป็น iPhone รุ่นไหน", "", ["iPhone 12 mini / 13 mini", "iPhone X / XS / 11 Pro"]);
        if (!t) return;
        phone = t.includes("mini") ? phone.mini : phone.x;
    }
    const sizeTh = await choose("Widget ขนาดไหน", "", ["เล็ก", "กลาง", "ใหญ่"]);
    if (!sizeTh) return;
    const size = { "เล็ก": "small", "กลาง": "medium", "ใหญ่": "large" }[sizeTh];
    const posTh = await choose("วาง Widget ตรงไหนของหน้าจอ", "นับจากด้านบนของหน้าโฮม", POS_BY_SIZE[size]);
    if (!posTh) return;
    const pos = POS_KEY[posTh];
    const [row, side] = pos.split("-");
    const w = size === "small" ? phone.small : phone.medium;
    const ht = size === "large" ? phone.large : phone.small;
    const x = size === "small" ? phone[side] : phone.left;
    const y = size === "large" ? (row === "top" ? phone.top : phone.middle) : phone[row];
    const ctx = new DrawContext();
    ctx.size = new Size(w, ht);
    ctx.respectScreenScale = false;
    ctx.opaque = true;
    ctx.drawImageAtPoint(img, new Point(-x, -y));
    ctx.setFillColor(col(C.navy, GLASS_TINT));
    ctx.fillRect(new Rect(0, 0, w, ht));
    const fm = FileManager.local();
    fm.writeImage(fm.joinPath(glassDir(fm), `${size}-${pos}.png`), ctx.getImage());
    await notice("ตั้งเสร็จแล้ว", `กดค้างที่ Widget Dept ขนาด${sizeTh} > แก้ไข Widget > ช่อง Parameter พิมพ์\n\n${posTh}\n\n(ถ้ามี Widget ขนาด${sizeTh}ตัวเดียว ไม่ต้องพิมพ์ก็ได้) เปลี่ยนวอลเปเปอร์หรือย้าย Widget ให้ตั้งใหม่`);
}

async function clearGlass() {
    const fm = FileManager.local();
    const dir = glassDir(fm);
    for (const f of fm.listContents(dir)) fm.remove(fm.joinPath(dir, f));
    await notice("ลบแล้ว", "Widget กลับไปใช้พื้นน้ำเงินไล่สี");
}

// ขนาดและตำแหน่งของ Widget ตามความสูงภาพหน้าจอ (พิกเซล)
// ตัวเลขจากสคริปต์ Widget Blur ของ Maxwell Zeryck (MIT License, Copyright (c) 2024 Maxwell Zeryck)
// https://gist.github.com/mzeryck/3a97ccd1e059b3afa3c6666d27a496c9
function phoneSizes(inputHeight) {
    return {
        "2868": { text: { small: 510, medium: 1092, large: 1146, left: 114, right: 696, top: 276, middle: 912, bottom: 1548 }, notext: { small: 530, medium: 1138, large: 1136, left: 91, right: 699, top: 276, middle: 882, bottom: 1488 } },
        "2796": { text: { small: 510, medium: 1092, large: 1146, left: 98, right: 681, top: 252, middle: 888, bottom: 1524 }, notext: { small: 530, medium: 1139, large: 1136, left: 75, right: 684, top: 252, middle: 858, bottom: 1464 } },
        "2622": { text: { small: 486, medium: 1032, large: 1098, left: 87, right: 633, top: 261, middle: 872, bottom: 1485 }, notext: { small: 495, medium: 1037, large: 1035, left: 84, right: 626, top: 270, middle: 810, bottom: 1350 } },
        "2556": { text: { small: 474, medium: 1017, large: 1062, left: 81, right: 624, top: 240, middle: 828, bottom: 1416 }, notext: { small: 495, medium: 1047, large: 1047, left: 66, right: 618, top: 243, middle: 795, bottom: 1347 } },
        "1334": { text: { small: 296, medium: 642, large: 648, left: 54, right: 400, top: 60, middle: 412, bottom: 764 }, notext: { small: 309, medium: 667, large: 667, left: 41, right: 399, top: 67, middle: 425, bottom: 783 } },
        "2778": { small: 510, medium: 1092, large: 1146, left: 96, right: 678, top: 246, middle: 882, bottom: 1518 },
        "2688": { small: 507, medium: 1080, large: 1137, left: 81, right: 654, top: 228, middle: 858, bottom: 1488 },
        "2532": { small: 474, medium: 1014, large: 1062, left: 78, right: 618, top: 231, middle: 819, bottom: 1407 },
        "2436": { x: { small: 465, medium: 987, large: 1035, left: 69, right: 591, top: 213, middle: 783, bottom: 1353 }, mini: { small: 465, medium: 987, large: 1035, left: 69, right: 591, top: 231, middle: 801, bottom: 1371 } },
        "1792": { small: 338, medium: 720, large: 758, left: 55, right: 437, top: 159, middle: 579, bottom: 999 },
        "1624": { small: 310, medium: 658, large: 690, left: 46, right: 394, top: 142, middle: 522, bottom: 902 },
        "2208": { small: 471, medium: 1044, large: 1071, left: 99, right: 672, top: 114, middle: 696, bottom: 1278 },
        "2001": { small: 444, medium: 963, large: 972, left: 81, right: 600, top: 90, middle: 618, bottom: 1146 },
        "1136": { small: 282, medium: 584, large: 622, left: 30, right: 332, top: 59, middle: 399, bottom: 399 }
    }[inputHeight];
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
