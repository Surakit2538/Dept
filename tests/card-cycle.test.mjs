// รอบบิลบัตรเครดิต: คำนวณรอบ/วันครบกำหนด, จับคู่รายการกับบัตร, API (เฉพาะคนที่ผู้ดูแลเปิดให้), เตือน LINE รายวัน, ปุ่ม จ่ายแล้ว
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import {
    CARDS_COL, cardsDocId, cardCycles, cardStatus, cardIdForItem, parseCardTag, reminderDue, cleanCardInput,
    normalizeCards, monthsNeeded, cardForPayment, cardLabel
} from "../lib/card-cycle.mjs";
import { createShortcutHandler } from "../lib/shortcut-service.mjs";
import { createCardReminderJob } from "../lib/card-reminders.mjs";
import { createCardService } from "../lib/card-service.mjs";
import { buildCardDueCard } from "../lib/line-cards.mjs";
import { parsePostback } from "../lib/line-report.mjs";
import { createFakeFirestore, createFakeRes } from "./fake-firestore.mjs";

const KTC = { id: "k1", bank: "KTC", last4: "1234", color: "accent", statementDay: 15, dueDay: 25, paid: {}, sent: {} };
const CX = { id: "x1", bank: "CardX", last4: "5678", color: "navy", statementDay: 20, dueDay: 2, paid: {}, sent: {} };

test("รอบบิล: ตัดรอบ 15 จ่าย 25 (เดือนเดียวกัน) / ตัดรอบ 20 จ่าย 2 (เดือนถัดไป) / ตัดรอบ 31 ในเดือนสั้น", () => {
    const a = cardCycles(KTC, "2026-11-22");
    assert.deepEqual(a.due, { key: "2026-11", start: "2026-10-16", end: "2026-11-15", dueDate: "2026-11-25" });
    assert.deepEqual(a.open, { key: "2026-12", start: "2026-11-16", end: "2026-12-15", dueDate: "2026-12-25" });
    const b = cardCycles(CX, "2026-11-22");
    assert.equal(b.due.end, "2026-11-20");
    assert.equal(b.due.dueDate, "2026-12-02");
    const c = cardCycles(KTC, "2026-11-15");
    assert.equal(c.due.end, "2026-11-15", "วันตัดรอบนับเป็นรอบที่ตัดแล้ว");
    const d = cardCycles({ statementDay: 31, dueDay: 10 }, "2027-03-05");
    assert.equal(d.due.end, "2027-02-28", "กุมภาไม่มีวันที่ 31 = วันสุดท้ายของเดือน");
    assert.equal(d.due.start, "2027-02-01");
    assert.equal(d.due.dueDate, "2027-03-10");
    const e = cardCycles(KTC, "2027-01-03");
    assert.equal(e.due.start, "2026-11-16", "ข้ามปีได้");
    assert.equal(e.due.end, "2026-12-15");
});

test("จับคู่รายการกับบัตร: เลข 4 ตัวท้าย > ธนาคาร (ต้องมีใบเดียว) / บัตรอื่นไม่นับ", () => {
    const cards = [KTC, CX];
    assert.deepEqual(parseCardTag("KTC-1234"), { bank: "KTC", last4: "1234" });
    assert.deepEqual(parseCardTag("", "KBank"), { bank: "KBank", last4: "" });
    assert.equal(cardIdForItem({ card: "KTC-1234" }, cards), "k1");
    assert.equal(cardIdForItem({ card: "1234" }, cards), "k1");
    assert.equal(cardIdForItem({ card: "CardX-5678" }, cards), "x1");
    assert.equal(cardIdForItem({ card: "KTC" }, cards), "k1", "ไม่มีเลขท้าย ใช้ธนาคาร (มี KTC ใบเดียว)");
    assert.equal(cardIdForItem({ card: "KTC" }, [...cards, { ...KTC, id: "k2", last4: "9999" }]), "", "KTC สองใบ ไม่เดา");
    assert.equal(cardIdForItem({ card: "SCB-1111" }, cards), "");
    assert.equal(cardIdForItem({ card: "" }, cards), "", "รายการที่ไม่มีบัตร ไม่นับ");
    assert.equal(cardIdForItem({ cardId: "x1", card: "" }, cards), "x1", "เลือกบัตรตอนบันทึกเอง");
});

test("สถานะบัตร: ยอดรอบที่ต้องจ่ายกับรอบที่ใช้อยู่ นับเฉพาะรายจ่ายของบัตรนั้น / เลยวันครบกำหนดแล้วไม่มีรอบที่ต้องจ่าย", () => {
    const cards = [KTC, CX];
    const items = [
        { type: "expense", date: "2026-10-16", amount: 100, card: "KTC-1234" },
        { type: "expense", date: "2026-11-15", amount: 250.5, card: "KTC-1234" },
        { type: "expense", date: "2026-11-16", amount: 40, card: "KTC-1234" },
        { type: "expense", date: "2026-10-15", amount: 999, card: "KTC-1234" },
        { type: "expense", date: "2026-11-01", amount: 77, card: "CardX-5678" },
        { type: "income", date: "2026-11-01", amount: 5000, card: "KTC-1234" },
        { type: "expense", date: "2026-11-02", amount: 60 }
    ];
    const s = cardStatus(KTC, cards, items, "2026-11-22");
    assert.equal(s.due.amountSat, 35050);
    assert.equal(s.due.count, 2);
    assert.equal(s.due.daysLeft, 3);
    assert.equal(s.due.paid, false);
    assert.equal(s.open.amountSat, 4000);
    assert.equal(s.open.daysToStatement, 23);
    const late = cardStatus(KTC, cards, items, "2026-11-28");
    assert.equal(late.due, null, "เลย 25 พ.ย. แล้ว รอบนั้นไม่ต้องแสดง");
    const paid = cardStatus({ ...KTC, paid: { "2026-11": "x" } }, cards, items, "2026-11-22");
    assert.equal(paid.due.paid, true);
    assert.deepEqual(monthsNeeded(cards, "2026-11-22"), ["2026-10", "2026-11", "2026-12"]);
    assert.equal(cardLabel(KTC), "KTC •• 1234");
    assert.equal(cardLabel({ bank: "อื่นๆ", last4: "" }), "บัตร");
});

test("เตือน: ก่อนครบกำหนด 3 วัน และวันครบกำหนด / จ่ายแล้วหรือส่งไปแล้วไม่เตือน / วันอื่นไม่เตือน", () => {
    assert.equal(reminderDue(KTC, "2026-11-22").daysLeft, 3);
    assert.equal(reminderDue(KTC, "2026-11-22").sentKey, "2026-11|3");
    assert.equal(reminderDue(KTC, "2026-11-25").daysLeft, 0);
    assert.equal(reminderDue(KTC, "2026-11-23"), null);
    assert.equal(reminderDue({ ...KTC, paid: { "2026-11": "x" } }, "2026-11-22"), null);
    assert.equal(reminderDue({ ...KTC, sent: { "2026-11|3": "x" } }, "2026-11-22"), null);
    assert.equal(reminderDue(CX, "2026-11-29").daysLeft, 3, "ครบกำหนดข้ามเดือน (2 ธ.ค.)");
});

test("ตรวจข้อมูลบัตร / ข้อมูลเสียในฐานข้อมูลไม่ทำให้พัง / สลิปจ่ายบัตรระบุใบได้", () => {
    assert.equal(cleanCardInput({ bank: "KTC", statementDay: 15, dueDay: 25 }).ok, true);
    assert.equal(cleanCardInput({ bank: "ปลอม", statementDay: 15, dueDay: 25 }).ok, false);
    assert.equal(cleanCardInput({ bank: "KTC", last4: "12", statementDay: 15, dueDay: 25 }).ok, false);
    assert.equal(cleanCardInput({ bank: "KTC", statementDay: 32, dueDay: 25 }).ok, false);
    assert.equal(cleanCardInput({ bank: "KTC", statementDay: 15, dueDay: 15 }).ok, false);
    assert.equal(cleanCardInput({ bank: "KTC", statementDay: 15, dueDay: 25, color: "pink" }).card.color, "accent");
    assert.deepEqual(normalizeCards({ cards: [null, { id: "a" }, { id: "b", bank: "KTC", statementDay: 1, dueDay: 10, last4: "abc" }] }).map((c) => [c.id, c.last4]), [["b", ""]]);
    assert.equal(cardForPayment([KTC, CX], "บัตรเครดิต KTC", "2026-11-22"), "k1");
    assert.equal(cardForPayment([KTC, CX], "บัตรเครดิต", "2026-11-22"), "", "ค้างสองใบ ไม่ระบุ = ไม่เดา");
    assert.equal(cardForPayment([KTC], "บัตรเครดิต", "2026-11-22"), "k1", "ค้างใบเดียว = ใบนั้น");
});

// ---------------- API ----------------
const NOW = Date.parse("2026-11-22T03:00:00Z"); // 22 พ.ย. 2569 10:00 เวลาไทย
function setup({ enabled = true } = {}) {
    const db = createFakeFirestore();
    db.seed("members", "me", { name: "GAME", lineUserId: "U_game", cardAlerts: enabled });
    db.seed("members", "aoy", { name: "AOY", lineUserId: "U_aoy" });
    db.seed("members", "adm", { name: "BOSS", role: "admin" });
    db.seed("wallet_entries", "w1", { ownerName: "GAME", type: "expense", date: "2026-11-10", month: "2026-11", amount: 1200, desc: "ร้าน A", icon: "fa-utensils", card: "KTC-1234" });
    db.seed("wallet_entries", "w2", { ownerName: "GAME", type: "expense", date: "2026-11-18", month: "2026-11", amount: 300, desc: "ร้าน B", card: "KTC-1234" });
    db.seed("wallet_entries", "w3", { ownerName: "AOY", type: "expense", date: "2026-11-10", month: "2026-11", amount: 5000, card: "KTC-1234" });
    const fetches = [];
    const fetchFn = async (url, opt) => {
        fetches.push({ url, opt });
        if (url.endsWith("/quota")) return { ok: true, json: async () => ({ type: "limited", value: 300 }) };
        if (url.endsWith("/consumption")) return { ok: true, json: async () => ({ totalUsage: 26 }) };
        return { ok: true };
    };
    const handler = createShortcutHandler({
        db: {}, fs: db.fs,
        verifyDeviceToken: async (_db, req) => {
            const h = req.headers.authorization;
            if (h === "Bearer me") return { authenticated: true, memberId: "me", name: "GAME" };
            if (h === "Bearer aoy") return { authenticated: true, memberId: "aoy", name: "AOY" };
            if (h === "Bearer adm") return { authenticated: true, memberId: "adm", name: "BOSS" };
            return { authenticated: false, status: 401, message: "x" };
        },
        env: { LINE_CHANNEL_ACCESS_TOKEN: "t" }, fetchFn, now: () => NOW
    });
    const call = async (body, who = "me") => {
        const res = createFakeRes();
        await handler({ method: "POST", headers: { authorization: "Bearer " + who }, body }, res);
        return res;
    };
    return { db, call, fetches, fetchFn };
}

test("API: ผู้ดูแลยังไม่เปิดให้ = ไม่มีบัตร เพิ่มไม่ได้", async () => {
    const { call } = setup({ enabled: false });
    const l = await call({ action: "card-list" });
    assert.equal(l.body.enabled, false);
    assert.deepEqual(l.body.cards, []);
    assert.equal((await call({ action: "card-save", bank: "KTC", statementDay: 15, dueDay: 25 })).statusCode, 403);
});

test("API: เพิ่ม/แก้บัตร ยอดรอบนับจากรายการที่บันทึก กดจ่ายแล้ว ยกเลิก ลบ / คนอื่นไม่เห็นบัตรเรา", async () => {
    const { db, call } = setup();
    const add = await call({ action: "card-save", bank: "KTC", last4: "1234", color: "sun", statementDay: 15, dueDay: 25 });
    assert.equal(add.body.status, "saved");
    assert.equal((await call({ action: "card-save", bank: "KTC", last4: "1234", statementDay: 15, dueDay: 25 })).statusCode, 400, "บัตรซ้ำ");
    const l = await call({ action: "card-list" });
    assert.equal(l.body.enabled, true);
    const c = l.body.cards[0];
    assert.equal(c.color, "sun");
    assert.equal(c.due.amountSat, 120000, "รอบ 16 ต.ค. - 15 พ.ย. มีร้าน A");
    assert.equal(c.due.items[0].desc, "ร้าน A");
    assert.equal(c.open.amountSat, 30000, "รอบที่ใช้อยู่มีร้าน B");
    assert.equal(c.due.daysLeft, 3);

    const edit = await call({ action: "card-save", id: c.id, bank: "KTC", last4: "1234", color: "green", statementDay: 15, dueDay: 25 });
    assert.equal(edit.body.status, "saved");
    assert.equal(db.all(CARDS_COL)[0].cards[0].color, "green");

    assert.equal((await call({ action: "card-paid", id: c.id })).body.status, "saved");
    assert.equal((await call({ action: "card-list" })).body.cards[0].due.paid, true);
    await call({ action: "card-paid", id: c.id, paid: false });
    assert.equal((await call({ action: "card-list" })).body.cards[0].due.paid, false);

    db.seed("members", "aoy", { name: "AOY", lineUserId: "U_aoy", cardAlerts: true });
    assert.deepEqual((await call({ action: "card-list" }, "aoy")).body.cards, [], "AOY ไม่เห็นบัตรของ GAME");
    assert.equal((await call({ action: "card-delete", id: c.id }, "aoy")).statusCode, 404, "AOY ลบบัตรของ GAME ไม่ได้");
    assert.equal((await call({ action: "card-delete", id: c.id })).body.status, "deleted");
    assert.deepEqual(db.all(CARDS_COL).find((x) => x.ownerName === "GAME").cards, []);
});

test("API: โควต้าข้อความ LINE ดูได้เฉพาะผู้ดูแล", async () => {
    const { call } = setup();
    assert.equal((await call({ action: "line-quota" })).statusCode, 403);
    const q = await call({ action: "line-quota" }, "adm");
    assert.deepEqual(q.body.quota, { limit: 300, used: 26 });
});

test("สลิปจ่ายบิลบัตร: ถือว่าจ่ายบัตรใบนั้นแล้ว", async () => {
    const { db } = setup();
    const svc = createCardService({ db: {}, fs: db.fs, now: () => NOW });
    await svc.save("GAME", { bank: "KTC", last4: "1234", statementDay: 15, dueDay: 25 });
    assert.equal(await svc.markPaidFromSlip("GAME", "บัตรเครดิต KTC"), "KTC •• 1234");
    assert.ok(db.all(CARDS_COL)[0].cards[0].paid["2026-11"]);
    assert.equal(await svc.markPaidFromSlip("AOY", "บัตรเครดิต KTC"), "", "ไม่มีบัตร = ไม่ทำอะไร");
});

// ---------------- งานเตือนรายวัน ----------------
test("เตือนรายวัน: ส่งหาเจ้าของครั้งเดียว ไม่ส่งซ้ำ ไม่ส่งรอบที่จ่ายแล้ว ไม่ส่งหาคนที่ผู้ดูแลไม่ได้เปิด", async () => {
    const { db, fetchFn, fetches } = setup();
    const svc = createCardService({ db: {}, fs: db.fs, now: () => NOW });
    await svc.save("GAME", { bank: "KTC", last4: "1234", statementDay: 15, dueDay: 25 });
    await svc.save("GAME", { bank: "CardX", last4: "5678", statementDay: 20, dueDay: 2 }); // ครบกำหนด 2 ธ.ค. ยังไม่ถึงวันเตือน
    await svc.save("AOY", { bank: "KTC", last4: "1234", statementDay: 15, dueDay: 25 }); // AOY ไม่ได้เปิด
    const run = createCardReminderJob({ db: {}, fs: db.fs, fetchFn, env: { LINE_CHANNEL_ACCESS_TOKEN: "t" }, now: () => NOW });
    const r = await run();
    assert.deepEqual(r.sent, ["GAME: KTC •• 1234"]);
    const pushes = fetches.filter((f) => f.url.endsWith("/push"));
    assert.equal(pushes.length, 1);
    const body = JSON.parse(pushes[0].opt.body);
    assert.equal(body.to, "U_game");
    const json = JSON.stringify(body.messages[0]);
    assert.match(json, /อีก 3 วัน ครบกำหนดจ่ายบัตร KTC •• 1234 ฿1,200/);
    assert.match(json, /cc:paid:/);

    const again = await run();
    assert.deepEqual(again.sent, [], "วันเดียวกันไม่ส่งซ้ำ");

    // วันครบกำหนด: กดจ่ายแล้วไปก่อน = ไม่เตือน
    const cards = db.all(CARDS_COL).find((x) => x.ownerName === "GAME").cards;
    const run25 = createCardReminderJob({ db: {}, fs: db.fs, fetchFn, env: { LINE_CHANNEL_ACCESS_TOKEN: "t" }, now: () => Date.parse("2026-11-25T03:00:00Z") });
    const svc25 = createCardService({ db: {}, fs: db.fs, now: () => Date.parse("2026-11-25T03:00:00Z") });
    await svc25.setPaid("GAME", cards[0].id, true);
    assert.deepEqual((await run25()).sent, []);
});

test("เตือนรายวัน: ยังไม่ผูก LINE = ข้าม / ทดลองไม่ส่งจริง", async () => {
    const { db, fetchFn, fetches } = setup();
    db.seed("members", "me", { name: "GAME", cardAlerts: true });
    await createCardService({ db: {}, fs: db.fs, now: () => NOW }).save("GAME", { bank: "KTC", statementDay: 15, dueDay: 25 });
    const r = await createCardReminderJob({ db: {}, fs: db.fs, fetchFn, env: { LINE_CHANNEL_ACCESS_TOKEN: "t" }, now: () => NOW })();
    assert.deepEqual(r.skipped, ["GAME"]);
    db.seed("members", "me", { name: "GAME", lineUserId: "U_game", cardAlerts: true });
    const dry = await createCardReminderJob({ db: {}, fs: db.fs, fetchFn, env: { REMINDER_DRY_RUN: "1" }, now: () => NOW })();
    assert.deepEqual(dry.sent, ["GAME: KTC"]);
    assert.equal(fetches.filter((f) => f.url.endsWith("/push")).length, 0);
});

// ---------------- LINE ----------------
const tokens = JSON.parse(fs.readFileSync(new URL("../design/tokens.json", import.meta.url), "utf8"));
const ALLOWED = new Set([...Object.values(tokens.color.light), ...Object.values(tokens.color.dark)].filter((v) => /^#[0-9a-f]{6}$/i.test(v)).map((v) => v.toLowerCase()));

test("การ์ด LINE เตือนบัตร: สีจาก tokens ไม่มี emoji ปุ่ม จ่ายแล้ว / ดูรายการ / วันครบกำหนดขึ้น วันนี้", () => {
    const msg = buildCardDueCard({ cardId: "k1", key: "2026-11", label: "KTC •• 1234", dueDate: "2026-11-25", daysLeft: 3, amountSat: 1248000, start: "2026-10-16", end: "2026-11-15", count: 23, topCat: { key: "travel", satang: 512000 } });
    const json = JSON.stringify(msg);
    assert.ok(!/\p{Extended_Pictographic}/u.test(json));
    for (const hex of json.match(/#[0-9a-fA-F]{6,8}\b/g) || []) assert.ok(ALLOWED.has(hex.slice(0, 7).toLowerCase()), hex);
    assert.match(json, /ครบกำหนดจ่ายบัตร · 25 พ\.ย\./);
    assert.match(json, /฿12,480/);
    assert.match(json, /16 ต\.ค\. - 15 พ\.ย\./);
    assert.match(json, /เดินทาง ฿5,120/);
    assert.match(json, /"data":"cc:paid:k1:2026-11"/);
    assert.match(json, /liff\.line\.me\/[^"]+#card=k1/);
    assert.ok(msg.altText.length <= 400);
    assert.match(JSON.stringify(buildCardDueCard({ cardId: "k1", key: "2026-11", label: "KTC", dueDate: "2026-11-25", daysLeft: 0, amountSat: 0, start: "2026-10-16", end: "2026-11-15", count: 0 })), /"text":"วันนี้"/);
    assert.deepEqual(parsePostback("cc:paid:k1:2026-11"), { action: "cc-paid", id: "k1", key: "2026-11" });
    assert.equal(parsePostback("cc:paid:k1:bad").action, "unknown");
});

test("งานอัตโนมัติ: เตือนรายวัน 10 โมงเช้า แต่เตือนหนี้เฉพาะวันที่ 25 / ปุ่ม จ่ายแล้ว ใน webhook แก้ได้เฉพาะบัตรของคนที่กด", () => {
    const vercel = JSON.parse(fs.readFileSync(new URL("../vercel.json", import.meta.url), "utf8"));
    assert.equal(vercel.crons.length, 2, "Hobby มีงานอัตโนมัติได้ 2 งาน");
    assert.equal(vercel.crons.find((c) => c.path === "/api/cron/send-reminders").schedule, "0 3 * * *");
    const cron = fs.readFileSync(new URL("../api/cron/send-reminders.js", import.meta.url), "utf8");
    assert.match(cron, /slice\(8, 10\) === "25"/);
    assert.match(cron, /runCards\(\)/);
    const hook = fs.readFileSync(new URL("../api/webhook.js", import.meta.url), "utf8");
    assert.match(hook, /setPaid\(normalizeName\(memberName\)/);
    assert.equal(cardsDocId("GAME"), "c_GAME");
});
