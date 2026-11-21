// ปฏิทินบิลรายเดือน (buildBillSchedule ใน web/src/model.js): ใช้แม่แบบที่ตั้งให้ทำซ้ำทุกเดือน ไม่อ่านอะไรเพิ่ม
import test from "node:test";
import assert from "node:assert/strict";
import { buildBillSchedule, billWho } from "../web/src/model.js";

const group = [
    { id: "rent", desc: "ค่าห้อง", amount: 9000, billingDay: 1, payer: "GAME", splits: { GAME: 4500, CARE: 4500 }, active: true },
    { id: "nf", desc: "Netflix", amount: 419, billingDay: 28, payer: "GAME", splits: { GAME: 104.75, CARE: 104.75, BEN: 104.75, AOY: 104.75 }, active: true },
    { id: "sp", desc: "Spotify Family", amount: 279, billingDay: 5, payer: "CARE", splits: { CARE: 93, "game ": 93, BEN: 93 }, active: true },
    { id: "gift", desc: "ของขวัญแม่ BEN", amount: 500, billingDay: 31, payer: "GAME", splits: { BEN: 500 }, active: true },
    { id: "notme", desc: "Disney+", amount: 289, billingDay: 10, payer: "CARE", splits: { CARE: 144.5, BEN: 144.5 }, active: true },
    { id: "off", desc: "เลิกแล้ว", amount: 100, billingDay: 3, payer: "GAME", splits: { GAME: 100 }, active: false }
];
const personal = [
    { id: "yt", desc: "YouTube Premium", amount: 399, billingDay: 25, icon: "fa-film" },
    { id: "ic", desc: "iCloud+", amount: 35, billingDay: 15 }
];

test("ปฏิทินเดือนนี้: เฉพาะบิลที่ฉันเกี่ยวข้อง เรียงตามวัน ยอด = ส่วนของฉัน และสถานะตัดแล้ว/วันนี้/ยังไม่ถึง", () => {
    const s = buildBillSchedule({ me: "GAME", month: "2026-11", today: "2026-11-25", group, personal });
    assert.deepEqual(s.items.map((x) => [x.desc, x.day]), [
        ["ค่าห้อง", 1], ["Spotify Family", 5], ["iCloud+", 15], ["YouTube Premium", 25], ["Netflix", 28], ["ของขวัญแม่ BEN", 30]
    ], "ไม่มี Disney+ (ไม่เกี่ยวกับฉัน) และไม่มีบิลที่เลิกแล้ว");
    const by = Object.fromEntries(s.items.map((x) => [x.desc, x]));
    assert.equal(by["ค่าห้อง"].mySat, 450000);
    assert.equal(by["ค่าห้อง"].totalSat, 900000);
    assert.equal(by["Spotify Family"].mySat, 9300, "ชื่อในคนหารมีช่องว่าง/ตัวเล็ก ก็ยังนับเป็นฉัน");
    assert.equal(by["ค่าห้อง"].status, "done");
    assert.equal(by["YouTube Premium"].status, "today");
    assert.equal(by["Netflix"].status, "soon");
    assert.equal(by["Netflix"].daysLeft, 3);
    assert.equal(by["ของขวัญแม่ BEN"].day, 30, "วันที่ 31 ในเดือนที่มี 30 วัน = วันสุดท้ายของเดือน");
    assert.equal(by["ของขวัญแม่ BEN"].mySat, 0, "จ่ายแทนเพื่อน ไม่นับเป็นยอดของฉัน");
    assert.equal(s.totalSat, 450000 + 9300 + 3500 + 39900 + 10475);
    assert.equal(s.dueSat, 39900 + 10475, "ยังไม่ถึงวันตัด = วันนี้และหลังจากนี้");
});

test("บิลถัดไป: เริ่มจากวันนี้ ข้ามไปเดือนหน้าได้ เรียงตามจำนวนวันที่เหลือ", () => {
    const s = buildBillSchedule({ me: "GAME", month: "2026-11", today: "2026-11-26", group, personal });
    assert.deepEqual(s.upcoming.slice(0, 4).map((x) => [x.desc, x.date, x.daysLeft]), [
        ["Netflix", "2026-11-28", 2],
        ["ของขวัญแม่ BEN", "2026-11-30", 4],
        ["ค่าห้อง", "2026-12-01", 5],
        ["Spotify Family", "2026-12-05", 9]
    ]);
    assert.ok(s.upcoming.every((x) => x.daysLeft >= 0));
});

test("ดูเดือนอื่น: เดือนที่ผ่านมาตัดแล้วทั้งหมด เดือนหน้ายังไม่ถึงทั้งหมด / ไม่มีแม่แบบ = ว่าง", () => {
    const past = buildBillSchedule({ me: "GAME", month: "2026-10", today: "2026-11-25", group, personal });
    assert.ok(past.items.every((x) => x.status === "done"));
    assert.equal(past.dueSat, 0);
    assert.equal(past.items.find((x) => x.desc === "ของขวัญแม่ BEN").day, 31);
    const next = buildBillSchedule({ me: "GAME", month: "2026-12", today: "2026-11-25", group, personal });
    assert.ok(next.items.every((x) => x.status === "soon"));
    assert.equal(next.dueSat, next.totalSat);
    const none = buildBillSchedule({ me: "GAME", month: "2026-11", today: "2026-11-25" });
    assert.deepEqual([none.items, none.upcoming, none.totalSat], [[], [], 0]);
});

test("คำบรรยาย: ส่วนตัว / คุณจ่าย หาร N / เพื่อนจ่าย หาร N / คุณจ่ายแทน", () => {
    const s = buildBillSchedule({ me: "GAME", month: "2026-11", today: "2026-11-01", group, personal });
    const by = Object.fromEntries(s.items.map((x) => [x.desc, billWho(x, "GAME")]));
    assert.equal(by["iCloud+"], "ส่วนตัว");
    assert.equal(by["Netflix"], "คุณจ่าย หาร 4");
    assert.equal(by["Spotify Family"], "CARE จ่าย หาร 3");
    assert.equal(by["ของขวัญแม่ BEN"], "คุณจ่ายแทน");
});

// ---------- หน้าตา: การ์ดบนหน้าแรก + ปฏิทินบิล แสดงผลได้จริง (bundle โค้ดเว็บ ไม่แตะฐานข้อมูล) ----------
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { createRequire } from "node:module";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const webReq = createRequire(path.join(root, "web", "package.json"));
const hasTools = fs.existsSync(path.join(root, "web", "node_modules", "esbuild")) && fs.existsSync(path.join(root, "web", "node_modules", "preact-render-to-string"));
async function bundle(entry, name) {
    const out = path.join(root, "web", "node_modules", ".cache-test", `${name}.mjs`);
    fs.mkdirSync(path.dirname(out), { recursive: true });
    await webReq("esbuild").build({ entryPoints: [path.join(root, entry)], outfile: out, bundle: true, format: "esm", platform: "node", jsx: "automatic", jsxImportSource: "preact", external: ["firebase/*", "preact", "preact/*"], logLevel: "silent", nodePaths: [path.join(root, "web", "node_modules")] });
    return import(pathToFileURL(out).href + "?t=" + Date.now());
}

test("หน้าแรก: การ์ดบิลถัดไป (อีก N วัน + อีก 2 ใบ) และปฏิทินบิลทั้งเดือน แสดงผลได้ / ไม่มีบิลรายเดือน = ไม่มีการ์ด", { skip: !hasTools }, async () => {
    const nm = path.join(root, "web", "node_modules");
    const { h } = await import(pathToFileURL(path.join(nm, "preact", "dist", "preact.mjs")).href);
    const { render: toString } = await import(pathToFileURL(path.join(nm, "preact-render-to-string", "dist", "index.mjs")).href);
    const { BillCalendarSheet } = await bundle("web/src/billcal.jsx", "billcal");
    const { HomePage } = await bundle("web/src/pages/HomePage.jsx", "home-bills");
    const model = (await import("../web/src/model.js")).buildHomeModel({ name: "GAME", month: "2026-11", today: "2026-11-26", members: ["GAME", "CARE"], transactions: [], settlements: [], walletItems: [] });
    const sched = buildBillSchedule({ me: "GAME", month: "2026-11", today: "2026-11-26", group, personal });
    const home = toString(h(HomePage, { model, month: "2026-11", nowMonth: "2026-11", today: "2026-11-26", since: "2025-12", onMonth() {}, onAddIncome() {}, bills: sched, me: "GAME" }));
    assert.match(home, /บิลถัดไป · 28 พ\.ย\./);
    assert.match(home, /Netflix/);
    assert.match(home, /อีก 4 วัน/);
    const none = toString(h(HomePage, { model, month: "2026-11", nowMonth: "2026-11", today: "2026-11-26", since: "2025-12", onMonth() {}, onAddIncome() {}, bills: buildBillSchedule({ me: "GAME", month: "2026-11", today: "2026-11-26" }), me: "GAME" }));
    assert.ok(!none.includes("บิลถัดไป"));
    const past = toString(h(HomePage, { model, month: "2026-10", nowMonth: "2026-11", today: "2026-11-26", since: "2025-12", onMonth() {}, onAddIncome() {}, bills: sched, me: "GAME" }));
    assert.ok(!past.includes("บิลถัดไป"), "ดูเดือนที่ผ่านมา ไม่แสดงการ์ดบิลถัดไป");
    const cal = toString(h(BillCalendarSheet, { data: { group, personal }, me: "GAME", today: "2026-11-26", onClose() {} }));
    assert.match(cal, /ปฏิทินบิลรายเดือน/);
    assert.match(cal, /ทั้งเดือน · 6 บิล/);
    assert.match(cal, /ตัดแล้ว/);
    assert.match(cal, /อีก 2 วัน/);
    assert.match(cal, /aria-label="GAME จ่าย หารกับ GAME, CARE"/, "บิลกลุ่มแสดงรูปคนจ่าย -> คนหาร");
    assert.match(cal, /aria-label="GAME จ่าย หารกับ BEN"[^]*?จ่ายแทน/, "จ่ายแทนเพื่อนยังบอกว่าจ่ายแทน");
});

// ---------- บัตรเครดิต: วันครบกำหนดจ่ายบัตรต่อคิวในการ์ดบิลถัดไป/ปฏิทิน และหน้าบัตรในแท็บ ฉัน ----------
import { cardStatus } from "../lib/card-cycle.mjs";
const CARD_DEFS = [{ id: "k1", bank: "KTC", last4: "1234", color: "sun", statementDay: 15, dueDay: 25, paid: {} }];
const CARD_ITEMS = [{ id: "a", type: "expense", date: "2026-11-10", amount: 1200, desc: "ร้าน A", card: "KTC-1234" }, { id: "b", type: "expense", date: "2026-11-20", amount: 300, desc: "ร้าน B", card: "KTC-1234" }];
const cardsAt = (today, paid = {}) => CARD_DEFS.map((c) => {
    const st = cardStatus({ ...c, paid }, CARD_DEFS, CARD_ITEMS, today);
    if (st.due) st.due.items = [];
    st.open.items = [];
    return st;
});

test("บัตร: วันครบกำหนดจ่ายบัตรต่อคิวในบิลถัดไป (ยอดรอบ) ไม่นับรวมยอดบิลรายเดือน / จ่ายแล้วไม่ขึ้นรอบนั้น", () => {
    const s = buildBillSchedule({ me: "GAME", month: "2026-11", today: "2026-11-22", group, personal, cards: cardsAt("2026-11-22") });
    const card = s.upcoming.find((x) => x.kind === "card" && !x.pending);
    assert.equal(card.desc, "KTC •• 1234");
    assert.equal(card.date, "2026-11-25");
    assert.equal(card.daysLeft, 3);
    assert.equal(card.mySat, 120000);
    assert.equal(billWho(card, "GAME"), "ยอดรอบ 16 ต.ค. - 15 พ.ย.");
    const open = s.upcoming.find((x) => x.kind === "card" && x.pending);
    assert.equal(open.date, "2026-12-25");
    assert.equal(billWho(open, "GAME"), "ยังไม่ตัดรอบ (ตัดรอบ 15 ธ.ค.)");
    const plain = buildBillSchedule({ me: "GAME", month: "2026-11", today: "2026-11-22", group, personal });
    assert.equal(s.totalSat, plain.totalSat, "ยอดบัตรไม่บวกซ้ำกับบิลรายเดือน");
    assert.ok(s.items.some((x) => x.kind === "card" && x.day === 25), "ปฏิทินเดือนนี้มีวันจ่ายบัตร");
    const paid = buildBillSchedule({ me: "GAME", month: "2026-11", today: "2026-11-22", group, personal, cards: cardsAt("2026-11-22", { "2026-11": "x" }) });
    assert.ok(!paid.upcoming.some((x) => x.kind === "card" && !x.pending), "กดจ่ายแล้ว รอบนั้นหายจากคิว");
});

test("บัตร: กระเป๋าบัตรในแท็บ ฉัน / หน้าเพิ่มบัตรมีภาพบัตรและสี 4 สี / รายละเอียดมีปุ่ม จ่ายแล้ว / การ์ดหน้าแรกขึ้น ครบกำหนดจ่ายบัตร", { skip: !hasTools }, async () => {
    const nm = path.join(root, "web", "node_modules");
    const { h } = await import(pathToFileURL(path.join(nm, "preact", "dist", "preact.mjs")).href);
    const { render: toString } = await import(pathToFileURL(path.join(nm, "preact-render-to-string", "dist", "index.mjs")).href);
    const { CardWallet, CardEditSheet, CardDetailSheet, cardOrder } = await bundle("web/src/cards.jsx", "cards");
    const cards = cardsAt("2026-11-22");
    const wallet = toString(h(CardWallet, { cards, onAdd() {}, onOpen() {} }));
    assert.match(wallet, /บัตรเครดิต/);
    assert.match(wallet, /ต้องจ่ายรอบนี้ \(16 ต\.ค\. - 15 พ\.ย\.\)/);
    assert.match(wallet, /฿1,200/);
    assert.match(wallet, /อีก 3 วัน/);
    assert.match(wallet, /plastic pc-sun/);
    assert.match(toString(h(CardWallet, { cards: [], onAdd() {}, onOpen() {} })), /เพิ่มบัตรใบแรก/);
    const add = toString(h(CardEditSheet, { onSave() {}, onClose() {} }));
    assert.match(add, /เพิ่มบัตรเครดิต/);
    assert.equal((add.match(/aria-label="สี(น้ำเงิน|ดำ|ทานตะวัน|เขียว)"/g) || []).length, 4);
    assert.match(add, /ตัดรอบทุกวันที่/);
    const det = toString(h(CardDetailSheet, { card: cards[0], onEdit() {}, onPaid() {}, onClose() {} }));
    assert.match(det, /KTC •• 1234/);
    assert.match(det, /จ่ายแล้ว/);
    assert.match(det, /รอบที่ต้องจ่าย \(1\)/);
    assert.deepEqual(cardOrder([{ id: "a", open: { daysLeft: 5 } }, { id: "b", due: { daysLeft: 9, paid: false }, open: { daysLeft: 40 } }]).map((c) => c.id), ["b", "a"], "บัตรที่ต้องจ่ายอยู่บนสุด");

    const { HomePage } = await bundle("web/src/pages/HomePage.jsx", "home-cards");
    const model = (await import("../web/src/model.js")).buildHomeModel({ name: "GAME", month: "2026-11", today: "2026-11-24", members: ["GAME"], transactions: [], settlements: [], walletItems: [] });
    const sched = buildBillSchedule({ me: "GAME", month: "2026-11", today: "2026-11-24", cards: cardsAt("2026-11-24") });
    const home = toString(h(HomePage, { model, month: "2026-11", nowMonth: "2026-11", today: "2026-11-24", since: "2025-12", onMonth() {}, onAddIncome() {}, bills: sched, me: "GAME", onCard() {} }));
    assert.match(home, /ครบกำหนดจ่ายบัตร · 25 พ\.ย\./);
    assert.match(home, /KTC •• 1234/);
});

test("หน้าแรก: บิลที่ตัดวันนี้ = ป้ายปฏิทินฉีก (แบบ A) แถบ วันนี้ + เลขวันที่", { skip: !hasTools }, async () => {
    const nm = path.join(root, "web", "node_modules");
    const { h } = await import(pathToFileURL(path.join(nm, "preact", "dist", "preact.mjs")).href);
    const { render: toString } = await import(pathToFileURL(path.join(nm, "preact-render-to-string", "dist", "index.mjs")).href);
    const { HomePage } = await bundle("web/src/pages/HomePage.jsx", "home-today");
    const model = (await import("../web/src/model.js")).buildHomeModel({ name: "GAME", month: "2026-11", today: "2026-11-25", members: ["GAME"], transactions: [], settlements: [], walletItems: [] });
    const sched = buildBillSchedule({ me: "GAME", month: "2026-11", today: "2026-11-25", group, personal });
    const home = toString(h(HomePage, { model, month: "2026-11", nowMonth: "2026-11", today: "2026-11-25", since: "2025-12", onMonth() {}, onAddIncome() {}, bills: sched, me: "GAME" }));
    assert.match(home, /class="nb-cal num"[^>]*><span class="band">วันนี้<\/span><b>25<\/b><small>พ\.ย\.<\/small>/);
    assert.match(home, /บิลถัดไป · ตัดวันนี้/);
    assert.match(home, /YouTube Premium/);
});
