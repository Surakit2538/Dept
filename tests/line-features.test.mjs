// การ์ด LINE ดีไซน์ใหม่ (5 ไอเดีย) + ข้อมูลรายชื่อเคลียร์ของ Widget
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import {
    buildExpenseSavedCard, buildTransferMessage, buildPendingCarousel, buildMonthlyCard, buildHowToCarousel, buildGroupDebtCard,
    buildIncomeSavedCard, buildOwedCard, buildCategoryPicker, buildDeleteConfirm, CAT_STYLE, LIFF_URL
} from "../lib/line-cards.mjs";
import { parsePostback, buildPendingMessage, handleWalletAction, buildMyTransfersMessage, buildOwedMessage, buildExpenseSavedMessage, buildMemberReportMessage } from "../lib/line-report.mjs";
import { monthInsights, lastDaysSpend } from "../lib/line-insights.mjs";
import { CATEGORY_GROUPS, categoryGroupOf } from "../lib/categories.mjs";
import { myClearLines } from "../lib/ledger.mjs";
import { CATEGORIES as WEB_CATEGORIES } from "../web/src/model.js";
import { createFakeFirestore } from "./fake-firestore.mjs";

const NOW = Date.parse("2026-11-20T03:00:00Z"); // 20 พ.ย. 2569 10:00 เวลาไทย
const tokens = JSON.parse(fs.readFileSync(new URL("../design/tokens.json", import.meta.url), "utf8"));
const ALLOWED = new Set([...Object.values(tokens.color.light), ...Object.values(tokens.color.dark)].filter((v) => /^#[0-9a-f]{6}$/i.test(v)).map((v) => v.toLowerCase()));

/** ตรวจโครง Flex แบบที่ LINE ปฏิเสธบ่อย + สีต้องมาจาก tokens (ยอมให้ขาวโปร่งแสง) */
function checkFlex(msg) {
    const json = JSON.stringify(msg);
    assert.ok(!/\p{Extended_Pictographic}/u.test(json), "ห้ามมี emoji");
    for (const hex of json.match(/#[0-9a-fA-F]{6,8}\b/g) || []) {
        const base = hex.slice(0, 7).toLowerCase();
        assert.ok(ALLOWED.has(base), `สี ${hex} ไม่อยู่ใน design/tokens.json`);
    }
    const walk = (n, path) => {
        if (!n || typeof n !== "object") return;
        if (Array.isArray(n)) return n.forEach((x, i) => walk(x, `${path}[${i}]`));
        if (n.type === "text") assert.ok(typeof n.text === "string" && n.text.length > 0, `ข้อความว่างที่ ${path}`);
        if (n.type === "box") assert.ok(Array.isArray(n.contents), `กล่องไม่มี contents ที่ ${path}`);
        if (n.type === "carousel") assert.ok(n.contents.length >= 1 && n.contents.length <= 12, "carousel 1-12 ใบ");
        if (n.type === "image") assert.match(n.url, /^https:\/\//);
        if (n.type === "postback") assert.ok(n.data.length <= 300);
        if (n.type === "uri") assert.match(n.uri, /^https:\/\//);
        for (const [k, v] of Object.entries(n)) walk(v, `${path}.${k}`);
    };
    walk(msg, "msg");
    if (msg.quickReply) {
        assert.ok(msg.quickReply.items.length <= 13);
        for (const it of msg.quickReply.items) assert.ok(it.action.label.length <= 20, `ปุ่มลัดยาวเกิน: ${it.action.label}`);
    }
    if (msg.type === "flex") assert.ok(msg.altText.length > 0 && msg.altText.length <= 400);
}

function seed() {
    const db = createFakeFirestore();
    db.seed("members", "g", { name: "GAME", lineUserId: "U_game", promptpay: "0812345678", pictureUrl: "https://profile.line-scdn.net/game" });
    db.seed("members", "c", { name: "CARE", lineUserId: "U_care", promptpay: "0899999999" });
    db.seed("members", "b", { name: "BEN", lineUserId: "U_ben" });
    db.seed("transactions", "t1", { date: "2026-11-02", payer: "GAME", amount: 300, splits: { GAME: 100, CARE: 100, BEN: 100 }, icon: "fa-utensils", desc: "หมูกระทะ" });
    db.seed("transactions", "t2", { date: "2026-11-18", payer: "CARE", amount: 400, splits: { GAME: 200, CARE: 200 }, icon: "fa-car", desc: "แท็กซี่" });
    db.seed("wallet_entries", "w1", { ownerName: "GAME", type: "income", amount: 10000, date: "2026-11-01", month: "2026-11" });
    db.seed("wallet_entries", "w2", { ownerName: "GAME", type: "expense", amount: 65, date: "2026-11-20", month: "2026-11", desc: "กาแฟ", icon: "fa-mug-hot" });
    db.seed("wallet_entries", "w3", { ownerName: "GAME", type: "expense", amount: 70, date: "2026-11-19", month: "2026-11", desc: "กาแฟ", icon: "fa-mug-hot" });
    db.seed("wallet_entries", "p1", { ownerName: "GAME", type: "expense", amount: 399, date: "2026-11-20", month: "2026-11", desc: "Google YouTubePremiu", autoDesc: "Google YouTubePremiu", card: "KTC-5703", source: "sms", unconfirmed: true, timestamp: NOW - 1000 });
    db.seed("wallet_entries", "p2", { ownerName: "GAME", type: "expense", amount: 128, date: "2026-11-19", month: "2026-11", desc: "7-Eleven", source: "ios_auto", unconfirmed: true, timestamp: NOW - 90000000 });
    db.seed("wallet_entries", "x1", { ownerName: "CARE", type: "expense", amount: 50, date: "2026-11-20", month: "2026-11", desc: "ของ CARE", unconfirmed: true, timestamp: NOW });
    return db;
}
const FS = (db) => ({ db: {}, fs: db.fs });
// อ่านเอกสารจากฐานข้อมูลจำลอง (undefined ถ้าไม่มี)
const getDoc = async (db, col, id) => { const s = await db.fs.getDoc(db.fs.doc({}, col, id)); return s.exists() ? s.data() : undefined; };

test("หมวด 6 กลุ่มของเซิร์ฟเวอร์ตรงกับหน้าเว็บ", () => {
    assert.deepEqual(CATEGORY_GROUPS.map((g) => [g.key, g.icons]), WEB_CATEGORIES.map((c) => [c.key, c.icons]));
    assert.equal(categoryGroupOf("fa-mug-hot"), "food");
    assert.equal(categoryGroupOf(""), "other");
    for (const g of CATEGORY_GROUPS) {
        assert.ok(CAT_STYLE[g.key], g.key);
        assert.ok(fs.existsSync(new URL(`../icons/cat/${CAT_STYLE[g.key].icon}.png`, import.meta.url)), `ไม่มีไอคอน ${g.key}`);
    }
});

test("Widget: รายชื่อที่ต้องเคลียร์ไม่ต้องอ่านสมาชิก ตรงกับแผนโอน", () => {
    const tx = [
        { date: "2026-11-02", payer: "GAME", amount: 300, splits: { GAME: 100, CARE: 100, BEN: 100 } },
        { date: "2026-11-18", payer: "CARE", amount: 400, splits: { GAME: 200, CARE: 200 } }
    ];
    // GAME +200-200 = 0? GAME จ่าย 300 ส่วน 300 -> 0; CARE จ่าย 400 ส่วน 300 -> +100; BEN -100
    assert.deepEqual(myClearLines({ name: "game", transactions: tx, settlements: [], month: "2026-11" }), { owedToMe: [], iOwe: [] });
    assert.deepEqual(myClearLines({ name: "BEN", transactions: tx, settlements: [], month: "2026-11" }), { owedToMe: [], iOwe: [{ name: "CARE", amount: 100 }] });
    assert.deepEqual(myClearLines({ name: "CARE", transactions: tx, settlements: [{ month: "2026-11", from: "BEN", to: "CARE", amount: 100, status: "verified" }], month: "2026-11" }), { owedToMe: [], iOwe: [] });
    const api = fs.readFileSync(new URL("../api/widget-summary.js", import.meta.url), "utf8");
    assert.match(api, /people: \{/);
    const w = fs.readFileSync(new URL("../scriptable/DeptWidget.js", import.meta.url), "utf8");
    assert.match(w, /const SCRIPT_VERSION = "[3-9]\.\d+\.\d+"/);
    for (const fam of ["small", "large", "accessoryCircular", "accessoryRectangular", "accessoryInline"]) assert.ok(w.includes(`"${fam}"`), fam);
});

test("ตัวเลขกราฟ: 7 วันล่าสุด หมวด รายสัปดาห์ ร้านที่ใช้บ่อย", () => {
    const tx = [{ date: "2026-11-18", payer: "CARE", amount: 400, splits: { GAME: 200, CARE: 200 }, icon: "fa-car", desc: "แท็กซี่" }];
    const wallet = [
        { type: "expense", amount: 65, date: "2026-11-20", desc: "กาแฟ", icon: "fa-mug-hot" },
        { type: "expense", amount: 70, date: "2026-11-13", desc: "กาแฟ", icon: "fa-mug-hot" },
        { type: "income", amount: 9999, date: "2026-11-20", desc: "เงินเดือน" }
    ];
    const days = lastDaysSpend({ name: "GAME", today: "2026-11-20", transactions: tx, walletItems: wallet });
    assert.equal(days.length, 7);
    assert.equal(days[0].date, "2026-11-14");
    assert.deepEqual(days.map((d) => d.satang), [0, 0, 0, 0, 20000, 0, 6500]);
    assert.equal(days[6].today, true);
    assert.equal(days[6].label, "ศ");
    const ins = monthInsights({ name: "GAME", month: "2026-11", today: "2026-11-20", transactions: tx, walletItems: wallet });
    assert.equal(ins.totalSat, 33500);
    assert.deepEqual(ins.categories.map((c) => [c.key, c.satang]), [["travel", 20000], ["food", 13500]]);
    assert.deepEqual(ins.weeks.map((w) => w.satang), [0, 7000, 26500, 0]);
    assert.equal(ins.weeks[3].label, "22-30");
    assert.equal(ins.perDaySat, Math.round(33500 / 20));
    assert.deepEqual(ins.topShop, { name: "กาแฟ", count: 2 });
    assert.equal(ins.groupSat, 20000);
});

test("ไอเดีย 1: การ์ดบันทึกรายจ่าย มีไอคอนหมวด กราฟ 7 วัน ปุ่มลบ และปุ่มลัด", async () => {
    const db = seed();
    const msg = await buildExpenseSavedMessage({ ...FS(db), memberName: "GAME", entry: { desc: "กาแฟ", amount: 65, icon: "fa-mug-hot" }, now: NOW });
    checkFlex(msg);
    const json = JSON.stringify(msg);
    assert.ok(json.includes("/icons/cat/food-pay.png"));
    assert.ok(json.includes("วันนี้ ฿464"), "วันนี้ = กาแฟ 65 + YouTube 399 (รายการรอยืนยันนับเป็นรายจ่ายเหมือนหน้าเว็บ)");
    assert.ok(json.includes('"text":"ลบรายการล่าสุด"'));
    assert.equal(msg.quickReply.items.length, 5);
    // อ่านฐานข้อมูลไม่ได้ ก็ยังได้การ์ด (ไม่มีกราฟ)
    const plain = buildExpenseSavedCard({ desc: "ข้าว", amount: 50.5, catKey: "food" });
    checkFlex(plain);
    assert.match(plain.altText, /฿50\.50 ข้าว/);
});

test("ไอเดีย 2: ฉันต้องโอน การ์ดละคนพร้อม QR รูปเพื่อน และใบสรุป", async () => {
    const db = seed();
    const ben = await buildMyTransfersMessage({ ...FS(db), memberName: "BEN", now: NOW });
    checkFlex(ben);
    // BEN ค้าง GAME 100 (เดือนนี้ GAME จ่าย 300 ส่วนตัวเอง 100+200=300 ... ดูจากแผนโอนจริง)
    assert.match(ben.altText, /ต้องโอน ฿100 ให้ (GAME|CARE)/);
    const multi = buildTransferMessage({ monthLabel: "พ.ย. 2569", debts: [{ to: "GAME", amount: 860, promptpay: "0812345678", pictureUrl: "https://profile.line-scdn.net/x" }, { to: "CARE", amount: 310 }] });
    checkFlex(multi);
    assert.equal(multi.contents.contents.length, 3);
    assert.ok(JSON.stringify(multi.contents.contents[0]).includes("https://profile.line-scdn.net/x"));
    assert.ok(JSON.stringify(multi.contents.contents[2]).includes("รวมที่ต้องโอน"));
    const game = await buildMyTransfersMessage({ ...FS(db), memberName: "GAME", now: NOW });
    checkFlex(game);
    assert.match(game.altText, /คุณไม่ได้ค้างใคร/);
});

test("ไอเดีย 3: รอยืนยัน แสดงเฉพาะของตัวเอง ใหม่สุดก่อน มีปุ่มยืนยัน/เปลี่ยนหมวด/ลบ", async () => {
    const db = seed();
    const msg = await buildPendingMessage({ ...FS(db), memberName: "GAME", now: NOW });
    checkFlex(msg);
    const cards = msg.contents.contents;
    assert.equal(cards.length, 2);
    const j0 = JSON.stringify(cards[0]);
    assert.ok(j0.includes("Google YouTubePremiu") && j0.includes('"text":"KTC"') && j0.includes("w:ok:p1") && j0.includes("w:cat:p1") && j0.includes("w:del:p1"));
    assert.ok(JSON.stringify(cards[1]).includes('"text":"สลิป"'));
    assert.ok(JSON.stringify(cards[1]).includes("เมื่อวาน"));
    assert.ok(!JSON.stringify(msg).includes("ของ CARE"));
    assert.equal(msg.quickReply.items[0].action.data, "w:okall");
    const none = await buildPendingMessage({ ...FS(db), memberName: "BEN", now: NOW });
    checkFlex(none);
    assert.match(none.altText, /ไม่มีรายการรอยืนยัน/);
});

test("ไอเดีย 3: ปุ่มของรายการรอยืนยัน เปลี่ยนเฉพาะของตัวเอง เปลี่ยนหมวดแล้วจำชื่อ ลบต้องยืนยันก่อน", async () => {
    const db = seed();
    const ctx = { ...FS(db), memberName: "GAME", now: NOW };
    const foreign = await handleWalletAction({ ...ctx, cmd: { action: "w-ok", id: "x1" } });
    assert.match(foreign.altText, /ไม่พบรายการนี้/);
    assert.equal((await getDoc(db, "wallet_entries", "x1")).unconfirmed, true);

    const pick = await handleWalletAction({ ...ctx, cmd: { action: "w-cat", id: "p1" } });
    checkFlex(pick);
    const pj = JSON.stringify(pick);
    for (const k of ["food", "bills", "goods", "travel", "fun", "other"]) assert.ok(pj.includes(`w:setcat:p1:${k}`), k);
    const set = await handleWalletAction({ ...ctx, cmd: { action: "w-setcat", id: "p1", cat: "fun" } });
    checkFlex(set);
    assert.match(set.altText, /หมวด บันเทิง และยืนยันแล้ว/);
    assert.match(set.altText, /ยังรอยืนยันอีก 1 รายการ/);
    assert.ok(JSON.stringify(set).includes("ดูที่เหลือ (1)"));
    assert.equal((await getDoc(db, "wallet_entries", "p1")).icon, "fa-film");
    assert.equal((await getDoc(db, "wallet_entries", "p1")).unconfirmed, false);
    assert.equal((await getDoc(db, "wallet_names", "n_GAME")).items[0].icon, "fa-film");

    const ask = await handleWalletAction({ ...ctx, cmd: { action: "w-del", id: "p2" } });
    checkFlex(ask);
    assert.match(ask.altText, /ลบ "7-Eleven" ฿128 ใช่ไหม/);
    assert.ok(JSON.stringify(ask).includes("w:delok:p2") && JSON.stringify(ask).includes("w:keep"));
    assert.ok((await getDoc(db, "wallet_entries", "p2")), "ยังไม่ลบจนกว่าจะกดยืนยัน");
    const del = await handleWalletAction({ ...ctx, cmd: { action: "w-delok", id: "p2" } });
    assert.match(del.altText, /ลบแล้ว 7-Eleven/);
    assert.match(del.altText, /ยืนยันครบทุกรายการแล้ว/);
    assert.equal((await getDoc(db, "wallet_entries", "p2")), undefined);
});

test("ไอเดีย 3: ยืนยันทั้งหมด", async () => {
    const db = seed();
    const r = await handleWalletAction({ ...FS(db), memberName: "GAME", cmd: { action: "w-okall" }, now: NOW });
    assert.match(r.altText, /ยืนยันแล้ว 2 รายการ/);
    assert.equal((await getDoc(db, "wallet_entries", "p1")).unconfirmed, false);
    assert.equal((await getDoc(db, "wallet_entries", "p2")).unconfirmed, false);
    assert.equal((await getDoc(db, "wallet_entries", "x1")).unconfirmed, true);
});

test("parsePostback: คำสั่งใหม่ และไม่รับรหัสแปลก", () => {
    assert.deepEqual(parsePostback("w:ok:abc_1-2"), { action: "w-ok", id: "abc_1-2" });
    assert.deepEqual(parsePostback("w:delok:abc"), { action: "w-delok", id: "abc" });
    assert.deepEqual(parsePostback("w:setcat:abc:food"), { action: "w-setcat", id: "abc", cat: "food" });
    assert.equal(parsePostback("w:setcat:abc:evil").action, "unknown");
    assert.equal(parsePostback("w:ok:../x").action, "unknown");
    assert.equal(parsePostback("w:okall").action, "w-okall");
    assert.equal(parsePostback("help:expense").action, "help-expense");
});

test("ไอเดีย 4: สรุปเดือนแบบปัด 4 ใบจากข้อมูลจริง", async () => {
    const db = seed();
    const msg = await buildMemberReportMessage({ ...FS(db), memberName: "GAME", now: NOW });
    checkFlex(msg);
    assert.equal(msg.contents.type, "carousel");
    const titles = msg.contents.contents.map((b) => JSON.stringify(b));
    assert.equal(titles.length, 4);
    assert.ok(titles[1].includes("ใช้ไปกับอะไร") && titles[1].includes("/icons/cat/travel-pay.png"));
    assert.ok(titles[2].includes("รายสัปดาห์") && titles[2].includes("กาแฟ 2 ครั้ง"));
    assert.ok(titles[3].includes("เพื่อนค้างคุณ"));
    const owed = await buildOwedMessage({ ...FS(db), memberName: "GAME", now: NOW });
    checkFlex(owed);
});

test("ไอเดีย 5: วิธีใช้ 4 ขั้น ปุ่มไปหน้าที่ถูก", () => {
    const msg = buildHowToCarousel();
    checkFlex(msg);
    assert.equal(msg.contents.contents.length, 4);
    const json = JSON.stringify(msg);
    for (const h of ["#add", "#clear", "#me"]) assert.ok(json.includes(`${LIFF_URL}${h}`), h);
    assert.ok(json.includes("help:expense"));
});

test("การ์ดคำถามระหว่างจดบันทึก: ตัวเลือก 2-3 อันเป็นปุ่มในการ์ด เกินนั้นเป็นปุ่มลัด", async () => {
    const { buildPromptMessage, buildParticipantsCard, buildNoticeCard, buildInfoCard } = await import("../lib/line-cards.mjs");
    const two = buildPromptMessage({ title: "ตรวจสอบและยืนยันบันทึก", desc: "ข้าว 300", actions: [{ type: "action", action: { type: "message", label: "ยืนยัน", text: "ยืนยัน" } }, { type: "action", action: { type: "message", label: "ยกเลิก", text: "ยกเลิก" } }] });
    checkFlex(two);
    assert.equal(two.quickReply, undefined);
    assert.deepEqual(two.contents.footer.contents[0].contents.map((b) => b.action.text), ["ยืนยัน", "ยกเลิก"]);
    const many = buildPromptMessage({ title: "ระบุคนจ่าย", actions: ["A", "B", "C", "D"].map((n) => ({ type: "action", action: { type: "message", label: n, text: n } })) });
    checkFlex(many);
    assert.equal(many.quickReply.items.length, 4);
    const pc = buildParticipantsCard({ members: ["GAME", "CARE", "BEN", "AOY"], selected: ["CARE"] });
    checkFlex(pc);
    assert.ok(JSON.stringify(pc).includes("เลือกแล้ว 1 คน: CARE"));
    checkFlex(buildNoticeCard({ title: "ลบรายการล่าสุดแล้ว", detail: "กาแฟ ฿60.00" }));
    checkFlex(buildInfoCard({ kicker: "มีคนโอนเงินให้คุณ", big: "฿100", title: "CARE โอนให้คุณแล้ว", rows: [["จาก", "CARE"]] }));
    // การ์ดเก่าสีเทาต้องไม่เหลือในบอท
    for (const f of ["api/webhook.js", "api/firestore-helpers.js", "api/slipok-helpers.js"]) {
        const code = fs.readFileSync(new URL("../" + f, import.meta.url), "utf8");
        assert.ok(!/#334155|#94a3b8|#64748b|#1e293b/.test(code), `${f} ยังมีสีการ์ดแบบเก่า`);
    }
});

test("หารกับเพื่อนในแชต: เลือกคน -> สร้างบิลกลุ่ม หารเท่ากัน คนจ่ายรับเศษ ลบรายการส่วนตัวเดิม", async () => {
    const { createLineSplitService, equalSplitPayerLast } = await import("../lib/line-split.mjs");
    assert.deepEqual(equalSplitPayerLast(100, ["GAME", "CARE", "BEN"], "GAME"), { CARE: 33.34, BEN: 33.33, GAME: 33.33 });
    const db = seed();
    db.seed("wallet_entries", "q1", { ownerName: "GAME", type: "expense", amount: 60, date: "2026-11-20", month: "2026-11", desc: "กาแฟ", icon: "fa-mug-hot", source: "line" });
    db.seed("line_last_entry", "U_game", { id: "q1", desc: "กาแฟ", amount: 60, ts: NOW });
    let t = NOW;
    const svc = createLineSplitService({ db: {}, fs: db.fs, now: () => t });

    // การ์ดบันทึกมีปุ่ม หารกับเพื่อน เมื่อรู้รหัสรายการ
    const saved = await buildExpenseSavedMessage({ ...FS(db), memberName: "GAME", entry: { id: "q1", desc: "กาแฟ", amount: 60, icon: "fa-mug-hot" }, now: NOW });
    assert.ok(JSON.stringify(saved).includes("w:split:q1"));
    assert.deepEqual(parsePostback("w:split:q1"), { action: "split-start", id: "q1" });
    assert.deepEqual(parsePostback("sp:t:" + encodeURIComponent("CARE")), { action: "sp-toggle", name: "CARE" });
    assert.equal(parsePostback("sp:ok").action, "sp-ok");

    // รายการของคนอื่นเริ่มไม่ได้
    assert.match((await svc.start("U_care", "CARE", "q1")).altText, /ไม่พบรายการนี้/);

    const c1 = await svc.start("U_game", "GAME", "q1");
    checkFlex(c1);
    const j1 = JSON.stringify(c1);
    assert.ok(j1.includes("\"text\":\"คุณ\"") && j1.includes("sp:t:CARE") && j1.includes("sp:ok"));
    // กดยืนยันทั้งที่ยังไม่ได้เลือกเพื่อน -> บอกให้เลือกก่อน ยังไม่สร้างบิล
    assert.match((await svc.confirm("U_game", "GAME")).altText, /เลือกเพื่อนอย่างน้อย 1 คน/);
    assert.equal(db.count("transactions"), 2);

    const c2 = await svc.toggle("U_game", "GAME", "CARE");
    checkFlex(c2);
    assert.match(JSON.stringify(c2), /2 คน คนละประมาณ ฿30/);
    await svc.toggle("U_game", "GAME", "NOBODY"); // ชื่อที่ไม่มีในสมาชิก ไม่ถูกเพิ่ม
    const done = await svc.confirm("U_game", "GAME");
    checkFlex(done);
    assert.match(done.altText, /หารบิลแล้ว กาแฟ ฿60 กับ 2 คน/);
    const bills = db.all("transactions").filter((x) => x.desc === "กาแฟ");
    assert.equal(bills.length, 1);
    assert.deepEqual(bills[0].splits, { CARE: 30, GAME: 30 });
    assert.equal(bills[0].payer, "GAME");
    assert.equal(bills[0].paymentType, "normal");
    assert.equal(bills[0].date, "2026-11-20");
    assert.equal(db.has("wallet_entries", "q1"), false, "รายการส่วนตัวเดิมต้องถูกลบ");
    assert.equal(db.has("line_last_entry", "U_game"), false, "ลบรายการล่าสุดต้องไม่ไปลบบิลกลุ่ม");
    assert.equal(db.has("line_split", "U_game"), false);

    // หมดเวลา 30 นาที
    db.seed("wallet_entries", "q2", { ownerName: "GAME", type: "expense", amount: 10, date: "2026-11-20", month: "2026-11", desc: "น้ำ" });
    await svc.start("U_game", "GAME", "q2");
    t = NOW + 31 * 60 * 1000;
    assert.match((await svc.toggle("U_game", "GAME", "CARE")).altText, /หมดเวลาเลือกแล้ว/);
    assert.match((await svc.cancel("U_game")).altText, /ยกเลิกแล้ว/);
});

test("การ์ดอื่นผ่านการตรวจโครงและสี", () => {
    checkFlex(buildGroupDebtCard({ monthLabel: "พ.ย. 2569", lines: [{ from: "CARE", to: "GAME", amount: 100 }] }));
    checkFlex(buildGroupDebtCard({ monthLabel: "พ.ย. 2569", lines: [] }));
    checkFlex(buildIncomeSavedCard({ monthLabel: "พ.ย. 2569", desc: "เงินเดือน", amount: 25000 }));
    checkFlex(buildOwedCard({ monthLabel: "พ.ย. 2569", owedToMe: [], iOwe: [] }));
    checkFlex(buildCategoryPicker({ id: "a", desc: "x" }));
    checkFlex(buildDeleteConfirm({ id: "a", desc: "x", amount: 1 }));
    checkFlex(buildPendingCarousel({ items: Array.from({ length: 12 }, (_, i) => ({ id: `i${i}`, desc: `r${i}`, amount: 10, when: "", source: "", catKey: "other" })), total: 12 }));
    checkFlex(buildMonthlyCard({
        name: "GAME", monthLabel: "พ.ย. 2569", hasIncome: true, netSatang: 100, incomeBaht: 100, spentBaht: 99, spentPercent: 99,
        owedToMe: Array.from({ length: 8 }, (_, i) => ({ name: `P${i}`, amount: 10, share: 100 })), iOwe: [{ name: "Q", amount: 5, share: 100 }],
        categories: [{ key: "food", label: "อาหาร", satang: 100, percent: 100 }], weeks: [{ label: "1-7", satang: 100 }, { label: "8-14", satang: 0 }], perDaySat: 5, personalSat: 1, groupSat: 2, topShop: null
    }));
});
