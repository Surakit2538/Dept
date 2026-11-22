// กล่องสำหรับผู้ดูแล: สถานะงานอัตโนมัติ (job_logs + reminder_logs) และส่งสรุปยอดเข้ากลุ่ม LINE (เฉพาะผู้ดูแล)
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { readAdminStatus, writeJobLog, JOB_LOG_COL } from "../lib/admin-status.mjs";
import { createShortcutHandler } from "../lib/shortcut-service.mjs";
import { createFakeFirestore, createFakeRes } from "./fake-firestore.mjs";

const NOW = Date.parse("2026-11-22T03:00:00Z");

test("สถานะงานอัตโนมัติ: ยังไม่เคยทำงาน = null / เตือนหนี้ใช้เดือนนี้ก่อน ไม่มีค่อยดูเดือนก่อน / บิลรายเดือนและเตือนบัตรจาก job_logs", async () => {
    const db = createFakeFirestore();
    assert.deepEqual(await readAdminStatus({ db: {}, fs: db.fs, now: () => NOW }), { debt: null, subs: null, cards: null });
    db.seed("reminder_logs", "2026-10", { status: "success", sentCount: 5, timestamp: Date.parse("2026-10-25T03:00:00Z") });
    await writeJobLog({ db: {}, fs: db.fs, id: "subscriptions", data: { month: "2026-11", created: 12 }, now: () => NOW });
    await writeJobLog({ db: {}, fs: db.fs, id: "cards", data: { date: "2026-11-22", sent: 0 }, now: () => NOW });
    const s = await readAdminStatus({ db: {}, fs: db.fs, now: () => NOW });
    assert.equal(s.debt.month, "2026-10");
    assert.equal(s.debt.sentCount, 5);
    assert.equal(s.subs.created, 12);
    assert.equal(s.cards.sent, 0);
    assert.equal(db.all(JOB_LOG_COL).length, 2);
    db.seed("reminder_logs", "2026-11_manual", { status: "success", sentCount: 2, timestamp: NOW });
    const m = (await readAdminStatus({ db: {}, fs: db.fs, now: () => NOW })).debt;
    assert.deepEqual([m.month, m.sentCount, m.manual], ["2026-11", 2, true], "เดือนนี้กดเตือนเองแล้ว ใช้อันนั้นก่อนเดือนที่แล้ว");
    db.seed("reminder_logs", "2026-11", { status: "partial", sentCount: 3, timestamp: NOW });
    assert.equal((await readAdminStatus({ db: {}, fs: db.fs, now: () => NOW })).debt.status, "partial");
});

function setup({ group = "Cgroup" } = {}) {
    const db = createFakeFirestore();
    db.seed("members", "adm", { name: "GAME", role: "admin" });
    db.seed("members", "m2", { name: "CARE" });
    db.seed("transactions", "t1", { payer: "GAME", amount: 100, date: "2026-11-05", splits: { GAME: 50, CARE: 50 } });
    const pushes = [];
    const handler = createShortcutHandler({
        db: {}, fs: db.fs,
        verifyDeviceToken: async (_db, req) => (req.headers.authorization === "Bearer adm" ? { authenticated: true, memberId: "adm", name: "GAME" } : { authenticated: true, memberId: "m2", name: "CARE" }),
        env: { LINE_CHANNEL_ACCESS_TOKEN: "t", ...(group ? { LINE_GROUP_ID: group } : {}) },
        fetchFn: async (url, opt) => { pushes.push({ url, body: JSON.parse(opt.body) }); return { ok: true }; },
        now: () => NOW
    });
    const call = async (body, who = "adm") => { const res = createFakeRes(); await handler({ method: "POST", headers: { authorization: "Bearer " + who }, body }, res); return res; };
    return { call, pushes };
}

test("ส่งสรุปยอดเข้ากลุ่ม LINE: เฉพาะผู้ดูแล ส่งการ์ดใครต้องโอนให้ใครไปที่กลุ่ม / ไม่ได้ตั้งกลุ่ม = บอกชัด", async () => {
    const { call, pushes } = setup();
    assert.equal((await call({ action: "group-summary" }, "m2")).statusCode, 403);
    assert.equal((await call({ action: "admin-status" }, "m2")).statusCode, 403);
    const r = await call({ action: "group-summary" });
    assert.equal(r.body.status, "saved");
    assert.equal(pushes.length, 1);
    assert.equal(pushes[0].body.to, "Cgroup");
    assert.match(JSON.stringify(pushes[0].body.messages[0]), /CARE/);
    const st = await call({ action: "admin-status" });
    assert.equal(st.body.status, "listed");
    assert.deepEqual(st.body.jobs, { debt: null, subs: null, cards: null });
    const noGroup = setup({ group: "" });
    assert.equal((await noGroup.call({ action: "group-summary" })).statusCode, 400);
});

test("งานอัตโนมัติจดสถานะลง job_logs และลิงก์ /admin.html เดิมพาไปแท็บ ฉัน", () => {
    const subs = fs.readFileSync(new URL("../api/cron/generate-subscriptions.js", import.meta.url), "utf8");
    const rem = fs.readFileSync(new URL("../api/cron/send-reminders.js", import.meta.url), "utf8");
    assert.match(subs, /writeJobLog\(\{.*id: "subscriptions"/);
    assert.match(rem, /writeJobLog\(\{.*id: "cards"/);
    const vercel = JSON.parse(fs.readFileSync(new URL("../vercel.json", import.meta.url), "utf8"));
    assert.equal(vercel.redirects.find((r) => r.source === "/admin.html").destination, "/#me");
});
