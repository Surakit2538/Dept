// ปิดเดือน (แบบ ก.): เดือนที่จบแล้วเพิ่ม/ลบบิลกลุ่มไม่ได้ ยกเว้นผู้ดูแลหลัก และเตือนหนี้วันที่ 1 ด้วยยอดเดือนที่เพิ่งปิด
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { bangkokMonthOf, prevMonth, openFrom, isClosedMonth, debtReminderMonth, closedMonthMessage, monthShortTh } from "../lib/month-lock.mjs";
import { createReminderJob } from "../lib/reminders.mjs";
import { createShortcutHandler } from "../lib/shortcut-service.mjs";
import { createLineSplitService } from "../lib/line-split.mjs";
import { createFakeFirestore, createFakeRes } from "./fake-firestore.mjs";

const SUPER = "U0d739eea39c312e11c487e22861920d1";
const DEC1_10AM = Date.parse("2026-12-01T03:00:00Z"); // 10 โมงเช้าวันที่ 1 ธ.ค. เวลาไทย
const NOV30_LATE = Date.parse("2026-11-30T16:30:00Z"); // 23:30 วันที่ 30 พ.ย. เวลาไทย

test("เดือนตามเวลาไทย: 23:30 วันที่ 30 ยังเป็นเดือนเดิม / ข้ามเที่ยงคืนไทยแล้วเดือนก่อนปิด", () => {
    assert.equal(bangkokMonthOf(NOV30_LATE), "2026-11");
    assert.equal(bangkokMonthOf(Date.parse("2026-11-30T17:00:00Z")), "2026-12");
    assert.equal(prevMonth("2027-01"), "2026-12");
    assert.equal(openFrom(DEC1_10AM), "2026-12-01");
    assert.equal(isClosedMonth("2026-11-30", NOV30_LATE), false);
    assert.equal(isClosedMonth("2026-11-30", DEC1_10AM), true);
    assert.equal(isClosedMonth("2026-12-01", DEC1_10AM), false);
    assert.equal(isClosedMonth("2026-11", DEC1_10AM), true);
    assert.equal(isClosedMonth("", DEC1_10AM), false);
    assert.equal(monthShortTh("2026-11"), "พ.ย. 2569");
    assert.match(closedMonthMessage("2026-11-30"), /พ\.ย\. 2569 ปิดยอดแล้ว/);
});

test("เตือนหนี้: วันที่ 1 เท่านั้น และเตือนยอดของเดือนที่เพิ่งปิด (ไม่ใช่วันที่ 25 แล้ว)", () => {
    assert.equal(debtReminderMonth(DEC1_10AM), "2026-11");
    assert.equal(debtReminderMonth(Date.parse("2027-01-01T03:00:00Z")), "2026-12");
    assert.equal(debtReminderMonth(Date.parse("2026-11-25T03:00:00Z")), null);
    assert.equal(debtReminderMonth(NOV30_LATE), null);
});

function seedGroup(db) {
    db.seed("members", "g", { name: "GAME", lineUserId: SUPER, role: "admin", promptpay: "0812345678" });
    db.seed("members", "a", { name: "AOY", lineUserId: "U_aoy" });
    db.seed("transactions", "nov", { date: "2026-11-20", payer: "GAME", amount: 200, splits: { GAME: 100, AOY: 100 } });
    db.seed("transactions", "dec", { date: "2026-12-01", payer: "GAME", amount: 900, splits: { GAME: 450, AOY: 450 } });
}

test("งานเตือนหนี้วันที่ 1: ใช้บิลของเดือนที่เพิ่งปิด ไม่เอาบิลวันที่ 1 ของเดือนใหม่มาปน", async () => {
    const db = createFakeFirestore();
    seedGroup(db);
    const pushes = [];
    const run = createReminderJob({ db: {}, fs: db.fs, env: { LINE_CHANNEL_ACCESS_TOKEN: "t" }, now: () => DEC1_10AM, fetchFn: async (_u, o) => { pushes.push(JSON.parse(o.body)); return { ok: true }; } });
    const r = await run({ month: debtReminderMonth(DEC1_10AM) });
    assert.equal(r.month, "2026-11");
    assert.equal(pushes.length, 1);
    const card = JSON.stringify(pushes[0]);
    assert.ok(card.includes("100") && !card.includes("450"), "ยอดของ พ.ย. เท่านั้น");
    assert.equal(db.all("reminder_logs")[0].month, "2026-11");
});

function handlerFor(db, who) {
    const ids = { g: "GAME", a: "AOY" };
    const h = createShortcutHandler({
        db: {}, fs: db.fs, now: () => DEC1_10AM, env: { LINE_CHANNEL_ACCESS_TOKEN: "t" }, fetchFn: async () => ({ ok: true }),
        verifyDeviceToken: async () => ({ authenticated: true, memberId: who, name: ids[who] })
    });
    return async (body) => { const res = createFakeRes(); await h({ method: "POST", headers: { authorization: "Bearer x" }, body }, res); return res; };
}

test("สแกนสลิปเก่า (วันที่ 30 พ.ย.) ตอนวันที่ 1 ธ.ค. แล้วหารกับเพื่อน: สมาชิกถูกห้าม ผู้ดูแลหลักทำได้ / ส่วนตัวบันทึกได้ปกติ", async () => {
    for (const [who, ok] of [["a", false], ["g", true]]) {
        const db = createFakeFirestore();
        seedGroup(db);
        const call = handlerFor(db, who);
        const parsed = await call({ action: "parse", text: "โอนเงินสำเร็จ 30 พ.ย. 69 14:20 จำนวน 300.00 บาท ร้านอาหาร" });
        assert.equal(parsed.body.success, true, JSON.stringify(parsed.body));
        const before = db.count("transactions");
        const r = await call({ action: "save", splitType: "equal", splitWith: ["GAME", "AOY"] });
        if (ok) assert.equal(r.body.status, "saved");
        else {
            assert.equal(r.statusCode, 400);
            assert.match(r.body.message, /ปิดยอดแล้ว/);
            assert.equal(db.count("transactions"), before);
        }
    }
});

test("ผู้ดูแลกดเตือนเองเลือกเดือนได้ (หน้าเคลียร์เงินส่งเดือนที่ดูอยู่) เดือนอนาคตใช้เดือนนี้แทน", async () => {
    const db = createFakeFirestore();
    seedGroup(db);
    const call = handlerFor(db, "g");
    const r = await call({ action: "remind-all", month: "2026-11" });
    assert.equal(r.body.status, "reminded");
    assert.ok(db.all("reminder_logs").some((l) => l.month === "2026-11"));
    await call({ action: "remind-all", month: "2027-05" });
    assert.ok(db.all("reminder_logs").some((l) => l.month === "2026-12"));
});

test("LINE หารกับเพื่อน: รายการส่วนตัวของเดือนที่ปิดแล้วเปลี่ยนเป็นบิลกลุ่มไม่ได้", async () => {
    const src = fs.readFileSync(new URL("../lib/line-split.mjs", import.meta.url), "utf8");
    assert.match(src, /if \(isClosedMonth\(hit\.data\.date, now\(\)\)\) return info\(/);
    assert.equal(typeof createLineSplitService, "function");
});

test("เว็บและกฎ: ปฏิทินบิลเลือกเดือนที่ปิดไม่ได้ / ปุ่มลบซ่อน / saveBill เตือนก่อนส่ง / กฎ Firestore ห้ามเพิ่ม-ลบ", () => {
    const read = (f) => fs.readFileSync(new URL("../" + f, import.meta.url), "utf8");
    assert.match(read("web/src/add.jsx"), /min=\{openFrom\}/);
    assert.match(read("web/src/pages/ListPage.jsx"), /canDelete=\{canDelete\(x\.b\)\}/);
    assert.match(read("web/src/data.js"), /isClosedMonth\(d\.date, Date\.now\(\)\)/);
    const rules = read("firestore.rules");
    assert.match(rules, /function monthStart\(\)/);
    assert.match(rules, /allow create: if isMember\(\) && okPeople\(\) && \(openMonth\(request\.resource\.data\.get\('date', ''\)\) \|\| isSuperAdmin\(\)\);/);
});
