// การ์ด LINE ใหม่ + ขั้นตอนเตือนหนี้ (ยืนยัน 2 ขั้น, กันเตือนซ้ำ, ไม่เชื่อค่าจากปุ่ม)
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { buildMonthlyCard, buildGroupDebtCard, buildReminderCard, buildRemindConfirm, formatBaht, LOGO_URL } from "../lib/line-cards.mjs";
import { buildMemberReportMessage, prepareRemind, executeRemind, remindResultText, parsePostback, monthLabelTh } from "../lib/line-report.mjs";
import { createFakeFirestore } from "./fake-firestore.mjs";

const hasEmoji = (obj) => /\p{Extended_Pictographic}/u.test(JSON.stringify(obj));
const NOW = Date.parse("2026-11-13T05:00:00Z");

function seed() {
    const db = createFakeFirestore();
    db.seed("members", "g", { name: "GAME", lineUserId: "U_game" });
    db.seed("members", "c", { name: "CARE", lineUserId: "U_care" });
    db.seed("members", "a", { name: "AOY" }); // ไม่ผูก LINE
    db.seed("members", "b", { name: "BEN", lineUserId: "U_ben" });
    // GAME จ่าย 400 หาร 4 คน (คนละ 100) → CARE, AOY, BEN ค้างคนละ 100
    db.seed("transactions", "t1", { date: "2026-11-02", payer: "GAME", amount: 400, splits: { GAME: 100, CARE: 100, AOY: 100, BEN: 100 }, icon: "fa-utensils" });
    // BEN จ่าย 50 หารกับ CARE
    db.seed("transactions", "t2", { date: "2026-11-03", payer: "GAME", amount: 100, splits: { GAME: 20, CARE: 80 } });
    db.seed("wallet_entries", "w1", { ownerName: "GAME", type: "income", amount: 10000, date: "2026-11-01" });
    db.seed("wallet_entries", "w2", { ownerName: "GAME", type: "expense", amount: 500, date: "2026-11-05" });
    return db;
}
const FS = (db) => ({ db: {}, fs: db.fs });

test("การ์ดรายเดือน: ไม่มี emoji, มีโลโก้, ใครค้างคุณมีปุ่มเตือนรายคนและทั้งหมด", () => {
    const card = buildMonthlyCard({
        name: "GAME", monthLabel: "พ.ย. 2569", hasIncome: true, netSatang: 406300, incomeBaht: 25000, spentBaht: 20937.23, spentPercent: 84,
        owedToMe: [{ name: "CARE", amount: 1093, share: 100 }, { name: "AOY", amount: 640, share: 59 }], iOwe: []
    });
    assert.equal(hasEmoji(card), false);
    const json = JSON.stringify(card);
    assert.ok(json.includes(LOGO_URL));
    assert.ok(json.includes("remind:CARE") && json.includes("remind:AOY") && json.includes("remind:all"));
    assert.match(card.altText, /เหลือใช้เดือนนี้ ฿4,063/);
    assert.match(card.altText, /฿1,733/);
    assert.equal(card.contents.type, "bubble");
});

test("การ์ดรายเดือน: ไม่มีรายรับ → แสดง ใช้ไป, ไม่มีคนค้าง → ไม่มีปุ่มเตือน, ค้างเพื่อนแสดงสีส้ม", () => {
    const card = buildMonthlyCard({
        name: "GAME", monthLabel: "พ.ย. 2569", hasIncome: false, netSatang: -1973700, incomeBaht: 0, spentBaht: 19737.23, spentPercent: null,
        owedToMe: [], iOwe: [{ name: "CARE", amount: 300, share: 100 }]
    });
    const json = JSON.stringify(card);
    assert.match(card.altText, /ใช้ไปเดือนนี้ ฿19,737/);
    assert.ok(!json.includes("remind:all"));
    assert.ok(json.includes("ไม่มีใครค้างคุณ"));
    assert.ok(json.includes("คุณค้างเพื่อน"));
    assert.equal(hasEmoji(card), false);
});

test("การ์ดกลุ่มและการ์ดเตือน: ไม่มี emoji ไม่มีตัวเลขกระเป๋าส่วนตัว", () => {
    const g = buildGroupDebtCard({ monthLabel: "พ.ย. 2569", lines: [{ from: "CARE", to: "GAME", amount: 1093 }, { from: "AOY", to: "GAME", amount: 640 }] });
    const gj = JSON.stringify(g);
    assert.equal(hasEmoji(g), false);
    assert.ok(!/รายรับ|สุทธิ|เหลือใช้/.test(gj));
    assert.ok(gj.includes("CARE  >  GAME"));
    const r = buildReminderCard({ monthLabel: "พ.ย. 2569", debts: [{ to: "GAME", amount: 100 }] });
    assert.equal(hasEmoji(r), false);
    assert.match(r.altText, /฿100/);
    assert.equal(formatBaht(1234.5, 2), "฿1,234.50");
});

test("parsePostback", () => {
    assert.deepEqual(parsePostback("remind:all"), { action: "remind", target: "all" });
    assert.deepEqual(parsePostback("remind:" + encodeURIComponent("CARE🦖")), { action: "remind", target: "CARE🦖" });
    assert.deepEqual(parsePostback("confirm:remind:CARE"), { action: "confirm-remind", target: "CARE" });
    assert.equal(parsePostback("cancel").action, "cancel");
    assert.equal(parsePostback("evil").action, "unknown");
});

test("รายงานจากข้อมูลจริงในฐานข้อมูลจำลอง: ตัวเลขถูก และลูกหนี้เรียงมากไปน้อย", async () => {
    const db = seed();
    const msg = await buildMemberReportMessage({ ...FS(db), memberName: "game", now: NOW });
    const json = JSON.stringify(msg);
    // GAME: paid 500, share 120 → +380 ; รายรับ 10000 ; ใช้ไป = ส่วนตัว 500 + ส่วนกลุ่ม 120 = 620 ; เหลือ 9380
    assert.match(msg.altText, /เหลือใช้เดือนนี้ ฿9,380/);
    assert.match(msg.altText, /เพื่อนค้างคุณ ฿380/);
    assert.ok(json.indexOf("CARE") < json.indexOf("AOY"));
    assert.equal(hasEmoji(msg), false);
    assert.equal(monthLabelTh("2026-11"), "พ.ย. 2569");
});

test("เตือนทีละคน: ถามยืนยันก่อน ใช้ยอดจากฐานข้อมูลจริง ไม่ใช่จากปุ่ม", async () => {
    const db = seed();
    const p = await prepareRemind({ ...FS(db), memberName: "GAME", target: "CARE", now: NOW });
    assert.equal(p.ok, true);
    assert.deepEqual(p.targets, ["CARE"]);
    assert.equal(p.total, 180);
    assert.match(p.confirm.text, /ส่งข้อความเตือนถึง CARE/);
    assert.ok(JSON.stringify(p.confirm).includes("confirm:remind:CARE"));
    const none = await prepareRemind({ ...FS(db), memberName: "GAME", target: "NOBODY", now: NOW });
    assert.equal(none.ok, false);
    // คนที่ไม่ได้ถูกค้าง (CARE เป็นลูกหนี้ของ GAME ไม่ใช่เจ้าหนี้) เตือนไม่ได้
    const wrong = await prepareRemind({ ...FS(db), memberName: "CARE", target: "all", now: NOW });
    assert.equal(wrong.ok, false);
});

test("ส่งเตือนจริง: ส่งหาคนที่มี LINE, ข้ามคนไม่มี LINE, กันซ้ำภายใน 12 ชั่วโมง", async () => {
    const db = seed();
    const pushed = [];
    const push = async (to, message) => { pushed.push({ to, message }); };
    const r1 = await executeRemind({ ...FS(db), memberName: "GAME", target: "all", push, now: NOW });
    assert.deepEqual(r1.sent.sort(), ["BEN", "CARE"]);
    assert.deepEqual(r1.noLine, ["AOY"]);
    assert.deepEqual(pushed.map((p) => p.to).sort(), ["U_ben", "U_care"]);
    assert.equal(hasEmoji(pushed[0].message), false);
    assert.equal(pushed[0].message.type, "flex");
    const r2 = await executeRemind({ ...FS(db), memberName: "GAME", target: "all", push, now: NOW + 60 * 60 * 1000 });
    assert.deepEqual(r2.sent, []);
    assert.deepEqual(r2.skipped.sort(), ["BEN", "CARE"]);
    const r3 = await executeRemind({ ...FS(db), memberName: "GAME", target: "CARE", push, now: NOW + 13 * 60 * 60 * 1000 });
    assert.deepEqual(r3.sent, ["CARE"]);
    assert.match(remindResultText(r1), /ส่งเตือนแล้ว: .*CARE/);
    assert.match(remindResultText(r1), /ยังไม่ได้ผูกบัญชี LINE.*AOY/);
});

test("ส่งไม่สำเร็จ: บันทึกว่า failed และไม่ลงบันทึกกันซ้ำ (ลองใหม่ได้)", async () => {
    const db = seed();
    const bad = async () => { throw new Error("LINE down"); };
    const r = await executeRemind({ ...FS(db), memberName: "GAME", target: "CARE", push: bad, now: NOW });
    assert.deepEqual(r.failed, ["CARE"]);
    const ok = await executeRemind({ ...FS(db), memberName: "GAME", target: "CARE", push: async () => {}, now: NOW });
    assert.deepEqual(ok.sent, ["CARE"]);
});

test("buildRemindConfirm: ทั้งกลุ่ม", () => {
    const c = buildRemindConfirm({ targets: ["A", "B"], total: 300 });
    assert.match(c.text, /2 คน/);
    assert.ok(JSON.stringify(c).includes("confirm:remind:all"));
    assert.equal(c.quickReply.items.length, 2);
    assert.ok(fs.existsSync(new URL("../icons/icon-192.png", import.meta.url)), "ไฟล์โลโก้ต้องมีอยู่จริงบนเว็บ");
});

test("ข้อความที่ผู้ใช้เห็น (บอท, iPhone, เว็บ) ไม่มี emoji เหลือ ยกเว้นเครื่องหมายในข้อมูล", () => {
    const files = ["api/webhook.js", "api/firestore-helpers.js", "api/send-line.js", "api/slipok-helpers.js", "api/cron/send-reminders.js",
        "lib/shortcut-service.mjs", "lib/line-cards.mjs", "lib/line-report.mjs", "scriptable/DeptSlip.js", "scriptable/DeptAuto.js", "scriptable/DeptWidget.js",
        "iphone-setup.js", "personal-expenses.js", "web/src/main.jsx", "web/src/icons.jsx", "api/get-members.js"];
    const allowed = new Set(["\u{1F4C5}", "\u{1F47E}", "\u{1F996}"]); // 📅 เครื่องหมายรายการรายเดือนในข้อมูล, ชื่อตัวอย่าง
    for (const f of files) {
        const s = fs.readFileSync(new URL("../" + f, import.meta.url), "utf8");
        const bad = [...s.matchAll(/\p{Extended_Pictographic}/gu)].map((m) => m[0]).filter((e) => !allowed.has(e));
        assert.deepEqual(bad, [], `${f} ยังมี emoji: ${bad.join(" ")}`);
    }
});
