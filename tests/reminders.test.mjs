import test from "node:test";
import assert from "node:assert/strict";
import { createReminderJob, bangkokMonth } from "../lib/reminders.mjs";
import { createFakeFirestore } from "./fake-firestore.mjs";

const NOW = Date.parse("2026-11-25T03:00:00Z"); // 25 พ.ย. 2026 10:00 เวลาไทย

function setup({ pushOk = () => true, env = {} } = {}) {
    const db = createFakeFirestore();
    // ข้อมูลจริงเก็บเป็น "ชื่อ" (ไม่ใช่รหัสเอกสาร) และรหัสเอกสารเป็นแบบสุ่ม
    db.seed("members", "idA", { name: "AOY", lineUserId: "U_aoy" });
    db.seed("members", "idG", { name: "G A M E 👾", lineUserId: "U_game" });
    db.seed("members", "idG2", { name: "G A M E 👾" }); // ชื่อซ้ำที่ไม่มี LINE
    db.seed("members", "idT", { name: "TPALM" }); // ยังไม่ผูก LINE
    db.seed("transactions", "t1", { date: "2026-11-10", payer: "G A M E 👾", amount: 900, splits: { "G A M E 👾": 300, AOY: 300, TPALM: 300 } });
    db.seed("transactions", "t0", { date: "2026-10-10", payer: "AOY", amount: 100, splits: { AOY: 50, TPALM: 50 } }); // เดือนก่อน ไม่นับ
    const pushes = [];
    const fetchFn = async (url, opts) => {
        const body = JSON.parse(opts.body);
        pushes.push(body);
        return { ok: pushOk(body.to) };
    };
    const run = createReminderJob({
        db: {}, fs: db.fs, fetchFn, now: () => NOW,
        env: { LINE_CHANNEL_ACCESS_TOKEN: "tok", ...env }
    });
    return { db, run, pushes };
}

test("bangkokMonth: ใช้เดือนตามเวลาไทย (ข้ามเที่ยงคืน UTC)", () => {
    assert.equal(bangkokMonth(new Date("2026-11-30T20:00:00Z")), "2026-12");
    assert.equal(bangkokMonth(new Date(NOW)), "2026-11");
});

test("เตือนคนค้างตามชื่อ (ของเดิมไม่ส่งใครเลยเพราะใช้รหัสเอกสาร) และไม่ส่งให้คนที่ไม่ได้ค้าง", async () => {
    const { run, pushes } = setup();
    const r = await run();
    assert.deepEqual(r.debtors.sort(), ["AOY", "TPALM"]);
    assert.deepEqual(r.sentTo, ["AOY"]);
    assert.deepEqual(r.skipped, ["TPALM"]); // ยังไม่ผูก LINE
    assert.equal(pushes.length, 1);
    assert.equal(pushes[0].to, "U_aoy");
    assert.match(JSON.stringify(pushes[0]), /฿300/);
    assert.match(JSON.stringify(pushes[0]), /G A M E 👾/); // แสดงชื่อเจ้าหนี้
    assert.equal(r.status, "success");
});

test("บันทึกผลใน reminder_logs และรันซ้ำแล้วไม่ส่งซ้ำ", async () => {
    const { run, db, pushes } = setup();
    await run();
    const log = db.all("reminder_logs")[0];
    assert.equal(log.status, "success");
    assert.deepEqual(log.sentTo, ["AOY"]);
    const again = await run();
    assert.equal(again.status, "already_sent");
    assert.equal(pushes.length, 1);
});

test("หักยอดที่เคลียร์แล้ว: ถ้า AOY เคลียร์ครบ ไม่ต้องเตือน AOY", async () => {
    const { run, db, pushes } = setup();
    db.seed("settlements", "s1", { status: "verified", month: "2026-11", from: "AOY", to: "G A M E 👾", amount: 300 });
    const r = await run();
    assert.deepEqual(r.debtors, ["TPALM"]);
    assert.equal(pushes.length, 0);
});

test("ส่งไม่สำเร็จ → status partial (ของเดิมบันทึก success เสมอ) และรันซ้ำจะลองเฉพาะคนที่ล้มเหลว", async () => {
    let ok = false;
    const { run, db, pushes } = setup({ pushOk: () => ok });
    const first = await run();
    assert.equal(first.status, "partial");
    assert.deepEqual(first.failed, ["AOY"]);
    assert.equal(db.all("reminder_logs")[0].status, "partial");
    ok = true;
    const second = await run();
    assert.equal(second.status, "success");
    assert.deepEqual(second.sentTo, ["AOY"]);
    assert.equal(pushes.length, 2); // ครั้งแรกล้มเหลว 1 + ครั้งที่สองสำเร็จ 1
    // ครั้งที่สามไม่ส่งซ้ำ
    assert.equal((await run()).status, "already_sent");
});

test("REMINDER_DRY_RUN=1: ไม่ส่งและไม่บันทึก แต่บอกรายชื่อ", async () => {
    const { run, db, pushes } = setup({ env: { REMINDER_DRY_RUN: "1" } });
    const r = await run();
    assert.equal(r.dryRun, true);
    assert.deepEqual(r.debtors.sort(), ["AOY", "TPALM"]);
    assert.equal(pushes.length, 0);
    assert.equal(db.count("reminder_logs"), 0);
});

test("ไม่มี LINE token (ไม่ใช่ dry run) → ล้ม พร้อมข้อความชัด", async () => {
    const { run } = setup({ env: { LINE_CHANNEL_ACCESS_TOKEN: "" } });
    await assert.rejects(run, /LINE_CHANNEL_ACCESS_TOKEN/);
});
