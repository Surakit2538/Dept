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
    for (const p of ["ClearPage", "WalletPage", "BillsPage", "MePage"]) assert.ok(main.includes(`<${p} `), `main.jsx ต้องใช้ ${p}`);
    for (const f of ["web/src/ui.jsx", "web/src/pages/ClearPage.jsx", "web/src/pages/WalletPage.jsx", "web/src/pages/BillsPage.jsx", "web/src/pages/MePage.jsx", "web/src/data.js", "web/src/model.js"]) {
        const s = fs.readFileSync(path.join(root, f), "utf8");
        assert.ok(!/\p{Extended_Pictographic}/u.test(s), `${f} มี emoji`);
    }
});
