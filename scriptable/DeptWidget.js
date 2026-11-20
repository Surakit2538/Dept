// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: blue; icon-glyph: wallet;

/**
 * Dept Money - iOS Scriptable Widget
 * เวอร์ชัน 4 "ยอดซ้าย + ปุ่ม" (แบบ Google Maps: พื้นหลังของเราเอง + ปุ่มกด) ตั้งงบไว้ = ยอดใหญ่เป็น "งบเหลือ"
 *   พื้นหลัง = น้ำเงินเข้มไล่สี + กราฟใช้จ่ายสะสมของเดือนนี้ (วาดจากข้อมูลจริงทุกครั้งที่รีเฟรช มีเส้นงบถ้าตั้งงบ)
 *   เล็ก   = ยอด + แถบ + ปุ่มบันทึก (iPhone ให้แตะได้จุดเดียว แตะตรงไหนก็เปิดหน้าบันทึก)
 *   กลาง  = ยอด + แถบ + หนี้ | ปุ่ม 2x2: บันทึก, สแกนสลิป, เคลียร์เงิน, เป้าเก็บ
 *   ใหญ่   = ยอด + แถบ + รายชื่อที่ต้องเคลียร์ + ปุ่ม 4 ช่องด้านล่าง
 *   หน้าล็อก = วงกลม (% ที่ใช้ไป), สี่เหลี่ยม (ยอด + หนี้), บรรทัดเหนือเวลา
 * ปุ่มเปิดเว็บ (หรือคำสั่งลัด Dept บันทึก สำหรับสแกนสลิป) Widget ของ Scriptable กดแล้วทำงานในที่ไม่ได้ ต้องเปิดแอปก่อน
 */

const SCRIPT_VERSION = "4.0.0";
const BASE_URL = "https://dept-game.vercel.app";
const LINKS = {
    add: `${BASE_URL}/#add`,
    clear: `${BASE_URL}/#clear`,
    me: `${BASE_URL}/#me`,
    scan: `shortcuts://run-shortcut?name=${encodeURIComponent("Dept บันทึก")}`
};

// ==========================================
// สีตาม design/tokens.json เท่านั้น ห้ามเพิ่มสีใหม่
// ==========================================
const C = {
    accent: "#2343c9", accent2: "#4466f2", white: "#ffffff", soft: "#dbe4fd", lilac: "#a9bbff",
    sun: "#ffc23d", sunInk: "#2e2100", ink: "#121a33", night: "#0b1020", navy: "#17245a"
};
const col = (hex, a = 1) => new Color(hex, a);
// ปุ่มของแต่ละขนาด (SF Symbols ของ iPhone)
const BUTTONS = [
    { key: "add", text: "บันทึก", symbol: "plus", hot: true },
    { key: "scan", text: "สแกนสลิป", symbol: "doc.text.viewfinder" },
    { key: "clear", text: "เคลียร์เงิน", symbol: "arrow.left.arrow.right" },
    { key: "me", text: "เป้าเก็บ", symbol: "target" }
];

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
        g.colors = [col(C.night), col(C.navy)];
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
        offline: result.isOffline ? (result.cachedAt || "") : null,
        // งบเดือนนี้ (null = ไม่ได้ตั้ง แสดง "ใช้ไปเดือนนี้")
        budget: d.budget && Number(d.budget.budget) > 0 ? d.budget : null,
        // ใช้ไปรายวัน (บาท) ตั้งแต่วันที่ 1 ถึงวันนี้ ไว้วาดกราฟพื้นหลัง
        daily: d.daily && Array.isArray(d.daily.spend) ? d.daily : { days: 30, spend: [] }
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
    s.subLine = s.budget
        ? `ใช้ไป ${s.pct}% จาก ${money(s.budget.budget)}`
        : s.income > 0 ? `รายรับ ${money(s.income)}` : "ยังไม่ได้ตั้งงบ";

    if (family === "accessoryInline") return renderInline(lw, s);
    if (family === "accessoryCircular") return renderCircular(lw, s);
    if (family === "accessoryRectangular") return renderRectangular(lw, s);
    // พื้นหลังกราฟ: วาดไม่ได้ก็ยังใช้พื้นไล่สี
    try { lw.backgroundImage = drawChartBg(family, s); } catch (e) { console.warn("chart bg:", e); }
    if (family === "small") return renderSmall(lw, s);
    if (family === "large" || family === "extraLarge") return renderLarge(lw, s);
    return renderMedium(lw, s);
}

// ---------- หน้าโฮม ----------
function renderSmall(lw, s) {
    lw.url = LINKS.add; // ขนาดเล็กแตะได้จุดเดียว: เปิดหน้าบันทึก
    header(lw, true, s);
    lw.addSpacer(8);
    label(lw, s.budget ? (s.overBudget ? "เกินงบ" : "งบเหลือ") : "ใช้ไปเดือนนี้");
    lw.addSpacer(2);
    bigMoney(lw, s.mainValue, 24);
    lw.addSpacer(5);
    bar(lw, s, 124);
    lw.addSpacer();
    const p = lw.addStack();
    p.layoutHorizontally();
    p.centerAlignContent();
    p.setPadding(6, 12, 6, 12);
    p.cornerRadius = 15;
    p.backgroundColor = col(C.sun);
    p.addSpacer();
    symbolImage(p, "plus", 13, col(C.sunInk));
    p.addSpacer(4);
    const t = p.addText("บันทึก");
    t.font = Font.boldSystemFont(13);
    t.textColor = col(C.sunInk);
    p.addSpacer();
    offlineNote(lw, s);
    return lw;
}

function renderMedium(lw, s) {
    const row = lw.addStack();
    row.layoutHorizontally();

    const left = row.addStack();
    left.layoutVertically();
    header(left, true, s);
    left.addSpacer(6);
    label(left, s.mainLabel);
    left.addSpacer(1);
    bigMoney(left, s.mainValue, 26);
    left.addSpacer(1);
    label(left, s.subLine);
    left.addSpacer(5);
    bar(left, s, 150);
    left.addSpacer();
    const dt = left.addText(debtText(s));
    dt.font = Font.semiboldSystemFont(11);
    dt.textColor = s.debt.type === "pay" && s.debt.balance ? col(C.sun) : col(C.soft);
    dt.lineLimit = 1;
    dt.minimumScaleFactor = 0.7;
    offlineNote(left, s);

    row.addSpacer(10);
    const grid = row.addStack();
    grid.layoutVertically();
    for (let r = 0; r < 2; r++) {
        if (r) grid.addSpacer(6);
        const line = grid.addStack();
        line.layoutHorizontally();
        for (let c = 0; c < 2; c++) {
            if (c) line.addSpacer(6);
            buttonTile(line, BUTTONS[r * 2 + c], 62, 56);
        }
    }
    return lw;
}

function renderLarge(lw, s) {
    header(lw, false, s);
    lw.addSpacer(10);
    label(lw, s.mainLabel);
    lw.addSpacer(2);
    bigMoney(lw, s.mainValue, 32);
    lw.addSpacer(3);
    label(lw, s.budget ? `ใช้ไป ${money(s.spent)} จากงบ ${money(s.budget.budget)} (${s.pct}%)` : s.subLine);
    lw.addSpacer(6);
    bar(lw, s, 300);

    const list = [...s.owedToMe.map((x) => ({ ...x, dir: "in" })), ...s.iOwe.map((x) => ({ ...x, dir: "out" }))].slice(0, 4);
    lw.addSpacer(12);
    if (list.length === 0) {
        const t = lw.addText("เดือนนี้เคลียร์ครบแล้ว ไม่มีใครค้างใคร");
        t.font = Font.semiboldSystemFont(13);
        t.textColor = col(C.white);
    } else {
        groupTitle(lw, `ต้องเคลียร์ · เพื่อนค้าง ${money(s.inTotal)} · คุณค้าง ${money(s.outTotal)}`);
        list.forEach((p) => { lw.addSpacer(6); personRow(lw, p, 22); });
    }
    lw.addSpacer();
    const tiles = lw.addStack();
    tiles.layoutHorizontally();
    BUTTONS.forEach((b, i) => {
        if (i) tiles.addSpacer(8);
        buttonTile(tiles, b, 66, 58);
    });
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
    t.minimumScaleFactor = 0.7;
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

function symbolImage(parent, name, size, color) {
    try {
        const sym = SFSymbol.named(name);
        sym.applyFont(Font.semiboldSystemFont(size));
        const img = parent.addImage(sym.image);
        img.imageSize = new Size(size + 4, size + 4);
        img.tintColor = color;
        return img;
    } catch (e) {
        return null;
    }
}

/** ปุ่มสี่เหลี่ยมแบบ Maps: ไอคอน + ชื่อ แตะแล้วเปิดลิงก์ของปุ่มนั้น */
function buttonTile(parent, b, w, h) {
    const t = parent.addStack();
    t.layoutVertically();
    t.centerAlignContent();
    t.size = new Size(w, h);
    t.cornerRadius = 16;
    t.url = LINKS[b.key];
    if (b.hot) {
        t.backgroundColor = col(C.sun);
    } else {
        t.backgroundColor = col(C.night, 0.55);
        t.borderColor = col(C.white, 0.1);
        t.borderWidth = 1;
    }
    t.addSpacer();
    const top = t.addStack();
    top.layoutHorizontally();
    top.addSpacer();
    symbolImage(top, b.symbol, 15, b.hot ? col(C.sunInk) : col(C.lilac));
    top.addSpacer();
    t.addSpacer(3);
    const bottom = t.addStack();
    bottom.layoutHorizontally();
    bottom.addSpacer();
    const tx = bottom.addText(b.text);
    tx.font = Font.semiboldSystemFont(10);
    tx.textColor = b.hot ? col(C.sunInk) : col(C.white);
    tx.lineLimit = 1;
    tx.minimumScaleFactor = 0.7;
    bottom.addSpacer();
    t.addSpacer();
}

function personRow(parent, p, avatarSize) {
    const r = parent.addStack();
    r.layoutHorizontally();
    r.centerAlignContent();
    r.url = LINKS.clear;
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
// พื้นหลัง: น้ำเงินเข้มไล่สี + กราฟใช้จ่ายสะสม (พื้นจาง เส้นทานตะวัน) + เส้นงบ (ถ้าตั้งงบ) วาดใหม่ทุกครั้งที่รีเฟรช
function drawChartBg(family, s) {
    const size = family === "small" ? [340, 340] : family === "medium" ? [720, 338] : [720, 756];
    const [W, H] = size;
    const ctx = new DrawContext();
    ctx.size = new Size(W, H);
    ctx.opaque = true;
    ctx.respectScreenScale = false;
    // ไล่สีบนลงล่าง (DrawContext ไม่มีไล่สี จึงวาดเป็นแถบบางๆ)
    const top = [0x0b, 0x10, 0x20], bottom = [0x17, 0x24, 0x5a];
    const bands = 40;
    for (let i = 0; i < bands; i++) {
        const k = i / (bands - 1);
        const hex = "#" + top.map((c, j) => Math.round(c + (bottom[j] - c) * k).toString(16).padStart(2, "0")).join("");
        ctx.setFillColor(new Color(hex));
        ctx.fillRect(new Rect(0, Math.floor((H * i) / bands), W, Math.ceil(H / bands) + 1));
    }
    const spend = s.daily.spend || [];
    const days = Math.max(1, Number(s.daily.days) || 30);
    if (spend.length === 0) return ctx.getImage();
    let cum = 0;
    const pts = spend.map((v) => (cum += Number(v) || 0));
    const budget = s.budget ? Number(s.budget.budget) : 0;
    const maxY = Math.max(budget, cum, 1) * 1.08;
    const chartTop = H * 0.3, chartH = H - chartTop;
    const X = (i) => ((i + 1) / days) * W;
    const Y = (v) => H - (v / maxY) * chartH;
    const area = new Path();
    area.move(new Point(0, H));
    area.addLine(new Point(0, Y(0)));
    pts.forEach((v, i) => area.addLine(new Point(X(i), Y(v))));
    area.addLine(new Point(X(pts.length - 1), H));
    area.closeSubpath();
    ctx.addPath(area);
    ctx.setFillColor(col(C.accent2, 0.28));
    ctx.fillPath();
    const line = new Path();
    line.move(new Point(0, Y(0)));
    pts.forEach((v, i) => line.addLine(new Point(X(i), Y(v))));
    ctx.addPath(line);
    ctx.setStrokeColor(col(C.sun, 0.6));
    ctx.setLineWidth(4);
    ctx.strokePath();
    // เส้นงบ: เส้นประจางๆ ที่ระดับงบ
    if (budget > 0) {
        ctx.setFillColor(col(C.white, 0.22));
        const y = Y(budget);
        for (let x = 0; x < W; x += 22) ctx.fillRect(new Rect(x, y - 1, 12, 2));
    }
    return ctx.getImage();
}

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
