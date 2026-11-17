// เว็บใหม่: ทดสอบว่าทุกหน้าแสดงผลได้จริงด้วยข้อมูลตัวอย่าง (ไม่แตะฐานข้อมูล) และข้อความจากผู้ใช้ถูก escape
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { createRequire } from "node:module";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const webReq = createRequire(path.join(root, "web", "package.json"));
const hasTools = fs.existsSync(path.join(root, "web", "node_modules", "esbuild")) && fs.existsSync(path.join(root, "web", "node_modules", "preact-render-to-string"));

async function bundle(entry, name) {
    const esbuild = webReq("esbuild");
    const out = path.join(root, "web", "node_modules", ".cache-test", `${name}.mjs`);
    fs.mkdirSync(path.dirname(out), { recursive: true });
    await esbuild.build({
        entryPoints: [path.join(root, entry)], outfile: out, bundle: true, format: "esm", platform: "node", jsx: "automatic", jsxImportSource: "preact",
        external: ["firebase/*", "preact", "preact/*"], logLevel: "silent", nodePaths: [path.join(root, "web", "node_modules")]
    });
    return import(pathToFileURL(out).href + "?t=" + Date.now());
}

const render = async () => {
    // โหลดแบบ ESM ทั้งคู่ เพื่อให้เป็น preact ตัวเดียวกับที่หน้าที่ bundle ใช้ (ไม่งั้น hooks พัง)
    const nm = path.join(root, "web", "node_modules");
    const { h } = await import(pathToFileURL(path.join(nm, "preact", "dist", "preact.mjs")).href);
    const { render: toString } = await import(pathToFileURL(path.join(nm, "preact-render-to-string", "dist", "index.mjs")).href);
    return { h, toString };
};

test("หน้าเคลียร์เงิน/กระเป๋า/บิล/ฉัน แสดงผลได้ และ escape ชื่อที่มีตัวอักษรอันตราย", { skip: !hasTools }, async () => {
    const { h, toString } = await render();
    const model = await import("../web/src/model.js");
    const { ClearPage } = await bundle("web/src/pages/ClearPage.jsx", "clear");
    const { WalletPage } = await bundle("web/src/pages/WalletPage.jsx", "wallet");
    const { BillsPage } = await bundle("web/src/pages/BillsPage.jsx", "bills");
    const { MePage } = await bundle("web/src/pages/MePage.jsx", "me");

    const evil = '<img src=x onerror="alert(1)">';
    const members = ["GAME", "CARE", evil.toUpperCase()];
    const tx = [
        { id: "t1", date: "2026-11-02", payer: "GAME", amount: 300, splits: { GAME: 100, CARE: 100, [evil.toUpperCase()]: 100 }, desc: evil, icon: "fa-utensils", timestamp: 1 }
    ];
    const settlements = [{ id: "s1", status: "verified", month: "2026-11", from: "CARE", to: "GAME", amount: 50, createdAt: "2026-11-05" }];
    const wallet = [{ id: "w1", type: "income", amount: 1000, date: "2026-11-01", desc: evil, timestamp: 1 }];
    const profiles = [{ id: "m1", name: "GAME", promptpay: "0812345678", realName: "สมชาย" }, { id: "m2", name: "CARE", promptpay: "", realName: "" }];

    const clear = model.buildClearModel({ name: "CARE", month: "2026-11", members, transactions: tx, settlements });
    const html1 = toString(h(ClearPage, { model: clear, profiles, month: "2026-11", onChanged() {} }));
    assert.match(html1, /โอนให้ GAME/);
    assert.match(html1, /QR โอน/);
    assert.match(html1, /อัปโหลดสลิป/);
    assert.match(html1, /ประวัติที่ยืนยันแล้ว/);
    assert.ok(!html1.includes("<img src=x"), "ชื่อต้องถูก escape");

    const w = model.buildWalletModel({ name: "GAME", month: "2026-11", walletItems: wallet, transactions: tx, settlements });
    const html2 = toString(h(WalletPage, { model: w, onChanged() {}, onError() {} }));
    assert.match(html2, /ส่วนของฉันในกลุ่ม/);
    assert.match(html2, /ได้คืนจากเพื่อนแล้ว/);
    assert.ok(!html2.includes("<img src=x"));

    const b = model.buildBillsModel({ name: "GAME", month: "2026-11", transactions: tx });
    const html3 = toString(h(BillsPage, { model: b, search: "", onSearch() {}, me: "GAME", isAdmin: false, onChanged() {}, onError() {} }));
    assert.match(html3, /บิลของเดือนนี้/);
    assert.match(html3, /ลบ /); // คนจ่ายลบได้
    assert.ok(!html3.includes("<img src=x"));
    const other = toString(h(BillsPage, { model: b, search: "", onSearch() {}, me: "CARE", isAdmin: false, onChanged() {}, onError() {} }));
    assert.ok(!/aria-label="ลบ /.test(other), "คนอื่นที่ไม่ใช่คนจ่ายและไม่ใช่แอดมินต้องไม่เห็นปุ่มลบ");

    const html4 = toString(h(MePage, { auth: { user: { name: "GAME", memberId: "m1", isAdmin: true } }, profiles, onSaved() {} }));
    assert.match(html4, /ชื่อจริงภาษาไทย/);
    assert.match(html4, /จัดการสมาชิก/);
    assert.match(html4, /ออกจากระบบ/);
    const member = toString(h(MePage, { auth: { user: { name: "CARE", memberId: "m2", isAdmin: false } }, profiles, onSaved() {} }));
    assert.ok(!member.includes("จัดการสมาชิก"));
});

test("เคลียร์เงิน: คนที่ผู้รับยังไม่ตั้งพร้อมเพย์ แสดงข้อความบอก ไม่พังตอนไม่มีโปรไฟล์", { skip: !hasTools }, async () => {
    const { h, toString } = await render();
    const model = await import("../web/src/model.js");
    const { ClearPage } = await bundle("web/src/pages/ClearPage.jsx", "clear2");
    const clear = model.buildClearModel({ name: "CARE", month: "2026-11", members: ["GAME", "CARE"], transactions: [{ id: "t", date: "2026-11-02", payer: "GAME", amount: 200, splits: { GAME: 100, CARE: 100 } }], settlements: [] });
    const html = toString(h(ClearPage, { model: clear, profiles: [{ id: "m2", name: "CARE", promptpay: "" }], month: "2026-11", onChanged() {} }));
    assert.match(html, /ผู้รับยังไม่ได้ตั้งพร้อมเพย์/);
    const empty = model.buildClearModel({ name: "CARE", month: "2026-10", members: ["GAME", "CARE"], transactions: [], settlements: [] });
    assert.match(toString(h(ClearPage, { model: empty, profiles: [], month: "2026-10", onChanged() {} })), /เคลียร์ครบแล้ว/);
});

test("เว็บใหม่: main.jsx ต่อหน้าครบ และไม่มี emoji", () => {
    const main = fs.readFileSync(path.join(root, "web/src/main.jsx"), "utf8");
    for (const p of ["ClearPage", "WalletPage", "BillsPage", "MePage"]) assert.ok(main.includes(`pages/${p}.jsx`) && main.includes(`name="${p}"`), `main.jsx ต้องใช้ ${p}`);
    for (const f of ["web/src/ui.jsx", "web/src/add.jsx", "web/src/pages/HomePage.jsx", "web/src/pages/ClearPage.jsx", "web/src/pages/WalletPage.jsx", "web/src/pages/BillsPage.jsx", "web/src/pages/MePage.jsx", "web/src/data.js", "web/src/model.js"]) {
        const s = fs.readFileSync(path.join(root, f), "utf8");
        assert.ok(!/\p{Extended_Pictographic}/u.test(s), `${f} มี emoji`);
    }
});

test("ฟอร์มบิลหารกับเพื่อน: แสดงผลได้ ครบทุกส่วน และ escape ชื่อสมาชิก", { skip: !hasTools }, async () => {
    const { h, toString } = await render();
    const { AddSheet } = await bundle("web/src/add.jsx", "add");
    const evil = '<script>alert(1)</script>';
    const menu = toString(h(AddSheet, { initial: null, today: "2026-11-14", members: ["GAME", "CARE"], me: "GAME", save() {}, saveBill() {}, onClose() {}, onSaved() {} }));
    assert.match(menu, /บิลหารกับเพื่อน/);
    assert.match(menu, /รายจ่ายส่วนตัว/);
    assert.match(menu, /รายรับ/);
    const crowd = ["GAME", "CARE", evil, "Pim1", "Pim2", "Pim3", "Pim4", "Pim5", "Pim6", "Pim7"];
    const form = toString(h(AddSheet, { initial: "bill", today: "2026-11-14", members: crowd, suggested: ["CARE", evil], me: "GAME", save() {}, saveBill() {}, onClose() {}, onSaved() {} }));
    for (const t of ["ยอดเต็มของบิล", "รายการ", "หารกับใคร", "หมวด", "ตัวเลือกเพิ่มเติม", "บันทึกบิล", "เครื่องดื่ม", "สัตว์เลี้ยง", "คนอื่น"]) assert.ok(form.includes(t), `ไม่พบ ${t}`);
    assert.ok(!form.includes("<script>alert"), "ชื่อต้องถูก escape");
    assert.ok(form.includes("&lt;script"), "ชื่อที่แนะนำต้องแสดงแบบ escape");
    assert.ok(!form.includes("Pim7"), "ต้องไม่แสดงสมาชิกทั้งกลุ่ม แสดงแค่ที่เลือกและคนที่แนะนำ");
    assert.ok(form.includes("(0 คน)"), "เริ่มต้นต้องไม่เลือกใครให้");
    assert.ok(form.includes("pstrip"), "รายชื่อต้องเป็นแถบเดียวเลื่อนข้าง");
    assert.ok(!form.includes('aria-pressed="true"') || !/pchip on/.test(form), "เริ่มต้นห้ามมีชิปที่ถูกเลือก");
    assert.ok(form.includes('aria-expanded="false"'), "หัวข้อตัวเลือกเพิ่มเติมต้องปิดอยู่ก่อน");
    assert.ok(!form.includes("ผ่อนชำระ") && !form.includes("เลือกวัน"), "รายละเอียดต้องซ่อนจนกว่าจะกดเปิดหัวข้อ");
});

test("ตั้งค่า iPhone: สคริปต์ติดตั้งเป็น JavaScript ที่ถูกต้อง ฝังรหัสและที่อยู่ได้ปลอดภัย", { skip: !hasTools }, async () => {
    const { installerScript, IphoneSheet } = await bundle("web/src/iphone.jsx", "iphone");
    const code = installerScript('tok"en`${x}', 'สมชาย"; evil()', "https://dept-game.vercel.app");
    // ต้อง parse ได้ (Scriptable รัน top-level await จึงห่อเป็น async)
    new Function(`return (async () => {${code}})`);
    assert.match(code, /Keychain\.set\("dept_token", DEVICE_TOKEN\)/);
    assert.match(code, /const DEVICE_TOKEN = "tok\\"en`\$\{x\}";/);
    assert.ok(!code.includes('evil()";'), "ชื่อต้องไม่หลุดออกจากคอมเมนต์");
    for (const f of ["DeptWidget.js", "DeptAuto.js"]) assert.ok(code.includes(f));
    assert.ok(!code.includes("DeptSlip.js"), "ไม่ติดตั้ง DeptSlip แล้ว");

    const { h, toString } = await render();
    const html = toString(h(IphoneSheet, { onClose() {} }));
    assert.match(html, /ตั้งค่า iPhone/);
    assert.match(html, /วิธีติดตั้ง/);
    assert.match(html, /แผนผัง Infographic/);
    assert.match(html, /สร้างรหัส/);
});

test("หน้าผูกบัญชี กรอกข้อมูลครั้งแรก จัดการสมาชิก แก้ไขบิล: แสดงผลได้และ escape ชื่อ", { skip: !hasTools }, async () => {
    const { h, toString } = await render();
    const evil = "<b onclick=x>";
    const { LinkPage, OnboardPage } = await bundle("web/src/onboard.jsx", "onboard");
    const link = toString(h(LinkPage, { profile: { userId: "U1", displayName: "NEW" }, candidates: [{ id: "a", name: "CARE" }, { id: "b", name: evil }], onDone() {} }));
    assert.match(link, /เลือกชื่อของคุณ/);
    assert.match(link, /ฉันเป็นสมาชิกใหม่/);
    assert.ok(!link.includes("<b onclick"), "ชื่อต้องถูก escape");
    const ob = toString(h(OnboardPage, { user: { name: "CARE", memberId: "m", realName: "", promptpay: "" }, onDone() {} }));
    assert.match(ob, /ชื่อจริงภาษาไทย/);
    assert.match(ob, /พร้อมเพย์/);
    const { MembersSheet } = await bundle("web/src/members.jsx", "members");
    const ms = toString(h(MembersSheet, { profiles: [{ id: "1", name: "GAME", role: "admin", hasLine: true, realName: "ก", promptpay: "0812345678" }, { id: "2", name: evil, role: "member", hasLine: false, realName: "", promptpay: "" }], me: "GAME", onClose() {}, onChanged() {}, onToast() {} }));
    assert.match(ms, /จัดการสมาชิก/);
    assert.match(ms, /ยังไม่ผูก LINE/);
    assert.match(ms, /ข้อมูลไม่ครบ/);
    assert.ok(!ms.includes("<b onclick"));
    const { EditBillSheet } = await bundle("web/src/editbill.jsx", "editbill");
    const eb = toString(h(EditBillSheet, { bill: { id: "t", desc: evil, icon: "fa-utensils", type: "normal" }, onClose() {}, onSaved() {} }));
    assert.match(eb, /แก้ไขบิล/);
    assert.match(eb, /ลบบิลแล้วเพิ่มใหม่/);
    assert.ok(!eb.includes("<b onclick"));
    const inst = toString(h(EditBillSheet, { bill: { id: "t", desc: "x (1/3)", icon: "", type: "installment" }, onClose() {}, onSaved() {} }));
    assert.match(inst, /แก้ได้เฉพาะหมวด/);
});

test("จัดการข้อมูล (แอดมิน): ส่งออก CSV ถูกรูปแบบและหน้าลบทั้งเดือนต้องยืนยัน", { skip: !hasTools }, async () => {
    const { h, toString } = await render();
    const { billsToCsv } = await bundle("web/src/export.js", "export");
    const csv = billsToCsv([{ date: "2026-11-02", desc: 'ข้าว "ดี"', payer: "GAME", amount: 300, paymentType: "normal", splits: { GAME: 150, AOY: 150 } }]);
    assert.ok(csv.startsWith("\uFEFF"), "ต้องมี BOM ให้ภาษาไทยไม่เพี้ยนใน Excel");
    assert.match(csv, /"ข้าว ""ดี"""/);
    assert.match(csv, /GAME=150; AOY=150/);
    const { DataToolsSheet } = await bundle("web/src/datatools.jsx", "datatools");
    const html = toString(h(DataToolsSheet, { transactions: [], onClose() {}, onToast() {}, onChanged() {} }));
    assert.match(html, /ส่งออกบิลเป็นไฟล์ CSV/);
    assert.match(html, /ลบข้อมูลทั้งเดือน/);
    assert.match(html, /พิมพ์คำว่า ลบ เพื่อยืนยัน/);
    assert.match(html, /disabled/, "ปุ่มลบต้องกดไม่ได้จนกว่าจะพิมพ์ยืนยัน");
});

test("Lazy: สลับแท็บแล้วต้องไม่เอาหน้าเก่ามาแสดงกับข้อมูลหน้าใหม่ (เคยพังที่แท็บกระเป๋า)", () => {
    const ui = fs.readFileSync(path.join(root, "web/src/ui.jsx"), "utf8");
    assert.match(ui, /mod\.name !== name/, "Lazy ต้องเช็กว่าคอมโพเนนต์ที่โหลดไว้ตรงกับชื่อที่ขอ");
    assert.match(ui, /\}, \[name\]\);/, "Lazy ต้องโหลดใหม่เมื่อชื่อเปลี่ยน");
});

test("Sheet ซ้อนกัน: กด Esc ปิดเฉพาะหน้าต่างบนสุด", () => {
    const ui = fs.readFileSync(path.join(root, "web/src/ui.jsx"), "utf8");
    assert.match(ui, /sheetStack\[sheetStack\.length - 1\] === me/);
    assert.match(ui, /sheetStack\.splice\(i, 1\)/);
});

test("รายจ่ายส่วนตัว: มีตัวเลือกชำระแบบรายเดือน ส่วนรายรับไม่มี", { skip: !hasTools }, async () => {
    const { h, toString } = await render();
    const { AddSheet } = await bundle("web/src/add.jsx", "add");
    const props = { today: "2026-11-14", members: ["GAME"], me: "GAME", save() {}, saveBill() {}, onClose() {}, onSaved() {} };
    const expense = toString(h(AddSheet, { ...props, initial: "expense" }));
    assert.match(expense, /ชำระแบบ/);
    assert.match(expense, /รายเดือน/);
    const income = toString(h(AddSheet, { ...props, initial: "income" }));
    assert.ok(!income.includes("รายเดือน"), "รายรับไม่มีตัวเลือกรายเดือน");
});

test("บัตรล็อกอิน LINE หมดอายุ: ไม่ออกจากระบบ/โหลดหน้าใหม่เอง แต่แจ้งด้วยแถบและให้กดเข้าสู่ระบบใหม่", () => {
    const data = fs.readFileSync(path.join(root, "web/src/data.js"), "utf8");
    const apiFn = data.slice(data.indexOf("export async function api("), data.indexOf("export async function loadWallet("));
    assert.ok(!apiFn.includes("liff.logout") && !apiFn.includes("location.reload"), "api() ห้ามออกจากระบบหรือโหลดหน้าใหม่เอง");
    assert.match(apiFn, /status === 401\) throw expired\(\)/);
    assert.match(data, /needLogin: true/);
    const main = fs.readFileSync(path.join(root, "web/src/main.jsx"), "utf8");
    assert.match(main, /login-banner/);
    assert.match(main, /onClick=\{relogin\}/);
});

test("ลิงก์ในการ์ด LINE เปิดแบบ LIFF (ล็อกอินเงียบ) ทุกปุ่ม", () => {
    const cards = fs.readFileSync(path.join(root, "lib/line-cards.mjs"), "utf8");
    assert.match(cards, /LIFF_URL = "https:\/\/liff\.line\.me\/2008948704-db2goT00"/);
    assert.ok(!/uri: `\$\{APP_URL\}\//.test(cards), "ปุ่มในการ์ดต้องใช้ LIFF_URL ไม่ใช่ APP_URL");
});

test("รายจ่ายส่วนตัวเลือกหมวดได้ รายรับไม่มี และหน้าแก้ไขรายการส่วนตัวแสดงผลได้", { skip: !hasTools }, async () => {
    const { h, toString } = await render();
    const { AddSheet } = await bundle("web/src/add.jsx", "add");
    const props = { today: "2026-11-14", members: ["GAME"], me: "GAME", save() {}, saveBill() {}, onClose() {}, onSaved() {} };
    const expense = toString(h(AddSheet, { ...props, initial: "expense" }));
    assert.match(expense, /หมวด/);
    assert.match(expense, /สัตว์เลี้ยง/);
    const income = toString(h(AddSheet, { ...props, initial: "income" }));
    assert.ok(!income.includes("สัตว์เลี้ยง"), "รายรับไม่มีหมวด");
    const { EditWalletSheet } = await bundle("web/src/editbill.jsx", "editbill2");
    const ex = toString(h(EditWalletSheet, { item: { id: "w", type: "expense", desc: "<b onclick=x>", icon: "fa-car" }, onClose() {}, onSaved() {} }));
    assert.match(ex, /แก้ไขรายจ่ายส่วนตัว/);
    assert.match(ex, /เดินทาง/);
    assert.ok(!ex.includes("<b onclick"));
    const inc = toString(h(EditWalletSheet, { item: { id: "w", type: "income", desc: "เงินเดือน", icon: "" }, onClose() {}, onSaved() {} }));
    assert.match(inc, /แก้ไขรายรับ/);
    assert.ok(!inc.includes("สัตว์เลี้ยง"));
});

test("กระเป๋า: ปุ่มจัดหมวดอัตโนมัติโผล่เมื่อมีรายจ่ายที่ยังไม่มีหมวดและเดาได้ ไม่โผล่เมื่อครบแล้ว", { skip: !hasTools }, async () => {
    const { h, toString } = await render();
    const { WalletPage } = await bundle("web/src/pages/WalletPage.jsx", "wallet2");
    const mk = (items) => ({ spentSat: 0, incomeSat: 0, netSat: 0, personalSat: 0, groupShareSat: 0, receivedBackSat: 0, paidBackSat: 0, items });
    const withTodo = toString(h(WalletPage, { model: mk([{ id: "1", type: "expense", desc: "ผ่อน CIVIC", amount: 100, date: "2026-11-04", icon: "" }, { id: "2", type: "expense", desc: "อะไรสักอย่าง", amount: 5, date: "2026-11-04", icon: "" }]), onChanged() {}, onError() {} }));
    assert.match(withTodo, /จัดหมวดอัตโนมัติ \(1 รายการ\)/);
    const done = toString(h(WalletPage, { model: mk([{ id: "1", type: "expense", desc: "ผ่อน CIVIC", amount: 100, date: "2026-11-04", icon: "fa-car" }]), onChanged() {}, onError() {} }));
    assert.ok(!done.includes("จัดหมวดอัตโนมัติ"));
});

test("กล่องรายเดือนที่ตั้งไว้เป็นแบบพับได้ ปิดไว้ก่อน (บิลและกระเป๋า)", { skip: !hasTools }, async () => {
    const { h, toString } = await render();
    const { Collapsible } = await bundle("web/src/ui.jsx", "ui2");
    const closed = toString(h(Collapsible, { icon: "swap", title: "รายจ่ายรายเดือนที่ตั้งไว้", summary: "5 รายการ" }, h("p", null, "เนื้อหาข้างใน")));
    assert.match(closed, /รายจ่ายรายเดือนที่ตั้งไว้/);
    assert.match(closed, /aria-expanded="false"/);
    assert.ok(!closed.includes("เนื้อหาข้างใน"), "ปิดอยู่ต้องไม่แสดงรายการ");
    const open = toString(h(Collapsible, { icon: "swap", title: "x", summary: "y", defaultOpen: true }, h("p", null, "เนื้อหาข้างใน")));
    assert.ok(open.includes("เนื้อหาข้างใน"));
    for (const f of ["web/src/pages/BillsPage.jsx", "web/src/pages/WalletPage.jsx"]) assert.match(fs.readFileSync(path.join(root, f), "utf8"), /<Collapsible /);
});

test("ล็อกอินบนคอม: ล้างรหัส code เก่าออกจากที่อยู่ และลองใหม่ครั้งเดียวถ้าเริ่มระบบไม่สำเร็จ", () => {
    const data = fs.readFileSync(path.join(root, "web/src/data.js"), "utf8");
    assert.match(data, /function cleanAuthParams/);
    assert.match(data, /history\.replaceState/);
    assert.match(data, /if \(hadCode\) \{ cleanAuthParams\(\); await liff\.init/);
    const main = fs.readFileSync(path.join(root, "web/src/main.jsx"), "utf8");
    assert.match(main, /getLoginDiag\(\)/);
});

test("แก้รายจ่ายรายเดือนที่ตั้งไว้: หน้าต่างแก้ไขแสดงชื่อ ยอด หมวด และ escape ชื่อ", { skip: !hasTools }, async () => {
    const { h, toString } = await render();
    const { EditTemplateSheet } = await bundle("web/src/editbill.jsx", "editbill3");
    const html = toString(h(EditTemplateSheet, { template: { id: "t", desc: "<b onclick=x>", amount: 518, icon: "" }, onClose() {}, onSaved() {} }));
    assert.match(html, /แก้รายจ่ายรายเดือน/);
    assert.match(html, /ยอดต่อเดือน/);
    assert.match(html, /เดินทาง/);
    assert.ok(!html.includes("<b onclick"));
});

test("ลิงก์ #add (ปุ่มเพิ่มบิลใน Rich menu) เปิดหน้าต่างบันทึกทันที ทั้งจากที่อยู่และจาก liff.state", () => {
    const main = fs.readFileSync(path.join(root, "web/src/main.jsx"), "utf8");
    assert.match(main, /function readTarget\(\)/);
    assert.match(main, /liff\.state/);
    assert.match(main, /t === "add"\) \{ setSheet\("menu"\)/);
    const readme = fs.readFileSync(path.join(root, "design/richmenu/README.md"), "utf8");
    assert.match(readme, /2008948704-db2goT00#add/);
});

test("เปลี่ยนรายการส่วนตัวเป็นบิลหารกับเพื่อน: ฟอร์มบิลรับค่าเริ่มต้น และหน้าแก้ไขมีปุ่มเปลี่ยน", { skip: !hasTools }, async () => {
    const { h, toString } = await render();
    const { AddSheet } = await bundle("web/src/add.jsx", "add");
    const props = { today: "2026-11-17", members: ["GAME", "CARE"], me: "GAME", save() {}, saveBill() {}, onClose() {}, onSaved() {} };
    const html = toString(h(AddSheet, { ...props, initial: "bill", prefill: { amount: 1000, desc: "ค่าข้าว", date: "2026-11-15", icon: "fa-utensils", convertId: "w1", month: "2026-11" }, convertWallet() {} }));
    assert.match(html, /value="1000"/);
    assert.match(html, /value="ค่าข้าว"/);
    assert.match(html, /15 พ\.ย\. 2569/);
    const { EditWalletSheet } = await bundle("web/src/editbill.jsx", "editbill4");
    const withSplit = toString(h(EditWalletSheet, { item: { id: "w", type: "expense", desc: "x", icon: "" }, onClose() {}, onSaved() {}, onSplit() {} }));
    assert.match(withSplit, /เปลี่ยนเป็นบิลหารกับเพื่อน/);
    const income = toString(h(EditWalletSheet, { item: { id: "w", type: "income", desc: "x", icon: "" }, onClose() {}, onSaved() {}, onSplit() {} }));
    assert.ok(!income.includes("เปลี่ยนเป็นบิลหารกับเพื่อน"), "รายรับไม่มีปุ่มหาร");
    const src = fs.readFileSync(path.join(root, "web/src/add.jsx"), "utf8");
    assert.ok(src.indexOf("await saveBill(r);") < src.indexOf("await convertWallet(prefill.convertId)"), "ต้องบันทึกบิลสำเร็จก่อนค่อยลบรายการส่วนตัวเดิม");
});

test("ตัวติดตั้ง iPhone: ติดตั้ง 3 สคริปต์ แสดงเวอร์ชัน ถามก่อนลบสคริปต์ Dept เก่า และไม่แตะสคริปต์อื่น", { skip: !hasTools }, async () => {
    const vm = await import("node:vm");
    const { installerScript } = await bundle("web/src/iphone.jsx", "iphone");
    const code = installerScript("tok123", "GAME", "https://dept-game.vercel.app");

    async function runInstaller({ pick, brokenFile = "" }) {
        const files = new Map([
            ["OldSlip.js", 'const t = Keychain.get("dept_token");'],
            ["DeptSlip.js", 'const t = Keychain.get("dept_token"); // สแกนสลิปแบบเดิม'],
            ["MyOwn.js", "console.log('ไม่เกี่ยวกับ Dept');"],
            ["DeptInstaller.js", 'Keychain.set("dept_token", "x");'],
            ["Untitled Script 3.js", 'Keychain.set("dept_token", "x"); // ตัวติดตั้งที่กำลังรันอยู่']
        ]);
        const alerts = [];
        const sources = (name) => name === brokenFile ? "<!DOCTYPE html><html></html>" : `const SCRIPT_VERSION = "9.9.9"; // ${name}\nScript.complete();`;
        class Request {
            constructor(url) { this.url = url; }
            async loadString() { return sources(this.url.split("/").pop()); }
            async loadJSON() { return { success: true, user: "GAME" }; }
        }
        class Alert {
            constructor() { this.actions = []; }
            addAction(t) { this.actions.push(t); }
            addDestructiveAction(t) { this.actions.push(t); }
            addCancelAction(t) { this.cancel = t; }
            async present() { alerts.push(this); return 0; }
            async presentAlert() { alerts.push(this); return pick; }
        }
        const fm = {
            documentsDirectory: () => "/docs",
            joinPath: (a, b) => a + "/" + b,
            writeString: (p, s) => files.set(p.replace("/docs/", ""), s),
            readString: (p) => files.get(p.replace("/docs/", "")),
            listContents: () => [...files.keys()],
            remove: (p) => files.delete(p.replace("/docs/", ""))
        };
        const kc = new Map();
        const sandbox = {
            Keychain: { set: (k, v) => kc.set(k, v) },
            Request, Alert,
            FileManager: { iCloud: () => null, local: () => fm },
            Script: { name: () => "Untitled Script 3", complete() {} }
        };
        vm.createContext(sandbox);
        await vm.runInContext("(async () => {\n" + code + "\n})()", sandbox);
        return { files, alerts, kc };
    }

    // เลือกลบ
    const del = await runInstaller({ pick: 0 });
    assert.equal(del.kc.get("dept_token"), "tok123");
    for (const f of ["DeptWidget.js", "DeptAuto.js"]) assert.ok(del.files.has(f), f);
    assert.match(del.alerts[1].message, /DeptSlip\.js/, "DeptSlip เดิมต้องถูกเสนอให้ลบ");
    assert.ok(!del.files.has("DeptSlip.js"));
    assert.match(del.alerts[0].message, /DeptAuto v9\.9\.9/);
    assert.match(del.alerts[0].message, /DeptWidget v9\.9\.9/);
    assert.match(del.alerts[1].message, /OldSlip\.js/);
    assert.ok(!del.alerts[1].message.includes("MyOwn.js"), "ไม่ใช่ของ Dept ห้ามเสนอให้ลบ");
    assert.ok(!del.files.has("OldSlip.js"), "ลบสคริปต์ Dept เก่าที่ผู้ใช้ยืนยัน");
    assert.ok(del.files.has("MyOwn.js"), "สคริปต์อื่นต้องอยู่");
    assert.ok(del.files.has("DeptInstaller.js") && del.files.has("Untitled Script 3.js"), "ตัวติดตั้งและตัวที่กำลังรันต้องอยู่");

    // เลือกเก็บไว้
    const keep = await runInstaller({ pick: -1 });
    assert.ok(keep.files.has("OldSlip.js"));

    // ดาวน์โหลดไม่ครบ: ไม่เปลี่ยนอะไรเลย
    const broken = await runInstaller({ pick: 0, brokenFile: "DeptAuto.js" });
    assert.ok(!broken.files.has("DeptWidget.js") && !broken.files.has("DeptAuto.js"));
    assert.ok(broken.files.has("OldSlip.js"));
    assert.match(broken.alerts[0].message, /DeptAuto\.js/);
});

test("เลือกหลายรายการ: ปุ่มเลือกโผล่เมื่อมี 2 รายการขึ้นไป แถวที่เลือกเป็น checkbox และแถบล่างแสดงจำนวน", { skip: !hasTools }, async () => {
    const { h, toString } = await render();
    const { WalletPage } = await bundle("web/src/pages/WalletPage.jsx", "wallet3");
    const { BulkBar, SelectRow, SelectToggle } = await bundle("web/src/bulk.jsx", "bulk");
    const mk = (items) => ({ spentSat: 0, incomeSat: 0, netSat: 0, personalSat: 0, groupShareSat: 0, receivedBackSat: 0, paidBackSat: 0, items });
    const two = [{ id: "1", type: "expense", desc: "กาแฟ", amount: 65, date: "2026-11-04", icon: "fa-mug-hot" }, { id: "2", type: "expense", desc: "ข้าว", amount: 50, date: "2026-11-04", icon: "fa-utensils" }];
    const html = toString(h(WalletPage, { model: mk(two), onChanged() {}, onError() {} }));
    assert.match(html, /เลือกหลายรายการ/);
    assert.ok(!html.includes("bulk-bar"), "ยังไม่เข้าโหมดเลือก ต้องไม่มีแถบล่าง");
    const one = toString(h(WalletPage, { model: mk(two.slice(0, 1)), onChanged() {}, onError() {} }));
    assert.ok(!one.includes("เลือกหลายรายการ"), "มีรายการเดียวไม่ต้องมีปุ่มเลือก");

    const row = toString(h(SelectRow, { picked: true, label: "กาแฟ", onToggle() {} }, h("span", null, "เนื้อหาแถว")));
    assert.match(row, /role="checkbox"/);
    assert.match(row, /aria-checked="true"/);
    assert.match(row, /เนื้อหาแถว/);
    const bar = toString(h(BulkBar, { count: 3, total: 5, onAll() {}, onNone() {}, onCategory() {}, onDelete() {} }));
    assert.match(bar, /เลือกแล้ว 3 รายการ/);
    assert.match(bar, /เปลี่ยนหมวด/);
    assert.match(bar, /ลบ/);
    const empty = toString(h(BulkBar, { count: 0, total: 5, onAll() {}, onNone() {}, onCategory() {}, onDelete() {} }));
    assert.match(empty, /แตะรายการที่ต้องการ/);
    assert.ok(!empty.includes("เปลี่ยนหมวด"), "ยังไม่เลือกอะไร ต้องไม่มีปุ่มทำรายการ");
    assert.match(toString(h(SelectToggle, { on: true, onToggle() {} })), /เสร็จสิ้น/);
});

test("ปฏิทินรายวัน: แสดงปฏิทิน สรุปเดือน รายการในวัน และ escape ข้อความ", { skip: !hasTools }, async () => {
    const { h, toString } = await render();
    const model = await import("../web/src/model.js");
    const { DailyCalendarSheet, HomePage } = await bundle("web/src/pages/HomePage.jsx", "homepage");
    const evil = '<script>alert("hack")</script>';

    const calDays = [
        { day: 1, date: "2026-11-01", satang: 0, today: false, isFuture: false, items: [] },
        { day: 2, date: "2026-11-02", satang: 15000, today: true, isFuture: false, items: [{ desc: evil, icon: "fa-utensils", satang: 15000, kind: "personal" }] },
        { day: 3, date: "2026-11-03", satang: 0, today: false, isFuture: false, items: [] }
    ];

    const calHtml = toString(h(DailyCalendarSheet, {
        month: "2026-11",
        calendarDays: calDays,
        spentSat: 15000,
        average: 50,
        onMonth() {},
        onClose() {}
    }));

    assert.match(calHtml, /ปฏิทินรายวัน/);
    assert.match(calHtml, /พฤศจิกายน 2569/);
    assert.match(calHtml, /ใช้ไปทั้งเดือน/);
    assert.match(calHtml, /เฉลี่ยต่อวัน/);
    assert.match(calHtml, /มากสุดวันที่/);
    assert.match(calHtml, /daily-cell/);
    // ตรวจสอบการ escape ข้อความอันตราย
    assert.ok(!calHtml.includes('<script>alert'), "คำอธิบายต้องถูก escape");
    assert.ok(calHtml.includes('&lt;script'), "คำอธิบายต้องแสดงแบบ escape");

    // HomePage ต้องมีปุ่มเปิดปฏิทินรายวัน
    const homeModel = {
        month: "2026-11",
        incomeSat: 0,
        spentSat: 15000,
        personalSat: 15000,
        groupShareSat: 0,
        netSat: -15000,
        net: "-150",
        spentPercent: null,
        categories: [],
        daily: [{ day: 1, satang: 0, today: false }],
        calendarDays: calDays,
        average: 50,
        owedToMe: [],
        owedTotal: 0,
        iOwe: [],
        iOweTotal: 0,
        recent: []
    };
    const series = [{ month: "2026-11", spentSat: 15000, incomeSat: 0 }];
    const homeHtml = toString(h(HomePage, { model: homeModel, series, month: "2026-11", onMonth() {} }));
    assert.match(homeHtml, /ดูตารางปฏิทินรายวัน/);
    assert.ok(!homeHtml.includes("มากสุดวันที่ 4"), "ต้องไม่มีกราฟแท่งรายวันเดิมใต้กราฟเดือน");
});
