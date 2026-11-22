// รายการที่จ่ายเป็นรอบ: ทุกเดือน / 3 / 6 / 12 เดือน (เบี้ยประกันชีวิต ภาษีรถ ฯลฯ)
import test from "node:test";
import assert from "node:assert/strict";
import { isDueMonth, dueMonths, freqLabel, freqTag, cleanRecurrence, timesPerYear } from "../lib/recurrence.mjs";
import { createSubscriptionJob, createWalletSubscriptionJob } from "../lib/subscriptions.mjs";
import { createShortcutHandler } from "../lib/shortcut-service.mjs";
import { buildBillSchedule, buildBill } from "../web/src/model.js";
import { createFakeFirestore, createFakeRes } from "./fake-firestore.mjs";

test("รอบ: เดือนที่ถึงรอบ / ป้าย / ตรวจค่า / แม่แบบเก่าไม่มีรอบ = ทุกเดือน", () => {
    const yearly = { every: 12, startMonth: 3, billingDay: 15 };
    assert.equal(isDueMonth(yearly, "2027-03"), true);
    assert.equal(isDueMonth(yearly, "2026-11"), false);
    assert.deepEqual(dueMonths({ every: 3, startMonth: 2 }), [2, 5, 8, 11]);
    assert.deepEqual(dueMonths({ every: 6, startMonth: 10 }), [4, 10]);
    assert.equal(isDueMonth({ billingDay: 5 }, "2026-07"), true, "แม่แบบเดิม (ไม่มี every) = ทุกเดือน");
    assert.equal(freqLabel(yearly), "ทุกปี 15 มี.ค.");
    assert.equal(freqLabel({ every: 3, billingDay: 10 }), "ทุก 3 เดือน วันที่ 10");
    assert.equal(freqLabel({ billingDay: 1 }), "ทุกวันที่ 1");
    assert.equal(freqTag(yearly), "ทุกปี");
    assert.equal(freqTag({}), "");
    assert.equal(timesPerYear({ every: 6 }), 2);
    assert.deepEqual(cleanRecurrence({ every: 12 }, 3), { every: 12, startMonth: 3 });
    assert.deepEqual(cleanRecurrence({}, 7), { every: 1, startMonth: 7 });
    assert.equal(cleanRecurrence({ every: 2 }), null);
    assert.equal(cleanRecurrence({ every: 12, startMonth: 13 }), null);
});

const NOV = () => new Date("2026-11-01T02:30:00Z");
const MAR = () => new Date("2027-03-01T02:30:00Z");

test("cron: บิลกลุ่มรายปีสร้างเฉพาะเดือนที่ถึงรอบ รายเดือนเดิมยังสร้างทุกเดือน", async () => {
    const db = createFakeFirestore();
    db.seed("subscription_templates", "ins", { desc: "ประกันกลุ่ม", amount: 1200, payer: "GAME", splits: { GAME: 600, CARE: 600 }, billingDay: 15, groupId: "g_ins", active: true, lastGeneratedMonth: "2026-03", every: 12, startMonth: 3 });
    db.seed("subscription_templates", "nf", { desc: "Netflix", amount: 400, payer: "GAME", splits: { GAME: 200, CARE: 200 }, billingDay: 5, groupId: "g_nf", active: true, lastGeneratedMonth: "2026-10" });
    const nov = await createSubscriptionJob({ db: {}, fs: db.fs, now: NOV })();
    assert.equal(nov.created, 1);
    assert.equal(nov.notDue, 1);
    assert.ok(!db.has("transactions", "sub_g_ins_2026-11"));
    const mar = await createSubscriptionJob({ db: {}, fs: db.fs, now: MAR })();
    assert.equal(mar.created, 2);
    assert.equal(db.all("transactions").find((t) => t.groupId === "g_ins").date, "2027-03-15");
});

test("cron: รายจ่ายส่วนตัวทุก 6 เดือน สร้างเฉพาะเดือนที่ถึงรอบ", async () => {
    const db = createFakeFirestore();
    db.seed("wallet_templates", "dom", { ownerName: "GAME", type: "expense", desc: "ค่าโดเมน", amount: 450, billingDay: 10, active: true, lastGeneratedMonth: "2026-05", every: 6, startMonth: 5 });
    const nov = await createWalletSubscriptionJob({ db: {}, fs: db.fs, now: NOV })();
    assert.equal(nov.created, 1);
    assert.ok(db.has("wallet_entries", "wsub_dom_2026-11"));
    const mar = await createWalletSubscriptionJob({ db: {}, fs: db.fs, now: MAR })();
    assert.equal(mar.created, 0);
    assert.equal(mar.notDue, 1);
});

function api() {
    const db = createFakeFirestore();
    const handler = createShortcutHandler({
        db: {}, fs: db.fs,
        verifyDeviceToken: async () => ({ authenticated: true, memberId: "me", name: "GAME" }),
        env: {}, fetchFn: async () => ({ ok: true }), now: () => Date.parse("2026-11-20T05:00:00Z")
    });
    const call = async (body) => { const res = createFakeRes(); await handler({ method: "POST", headers: { authorization: "Bearer x" }, body }, res); return res; };
    return { db, call };
}

test("API: บันทึกรายจ่ายทุกปี (เดือนเริ่ม = เดือนของรายการ) / แก้รอบได้ / ค่าผิดไม่รับ", async () => {
    const { db, call } = api();
    const r = await call({ action: "wallet-add", type: "expense", amount: 24000, desc: "เบี้ยประกันชีวิต", date: "2026-11-15", recurring: true, every: 12 });
    assert.equal(r.statusCode, 200);
    assert.match(r.body.message, /ทุกปี/);
    const t = db.all("wallet_templates")[0];
    assert.deepEqual([t.every, t.startMonth, t.billingDay], [12, 11, 15]);
    const list = await call({ action: "wallet-template-list" });
    assert.deepEqual([list.body.items[0].every, list.body.items[0].startMonth], [12, 11]);
    const id = list.body.items[0].id;
    assert.equal((await call({ action: "wallet-template-update", id, every: 6, startMonth: 3 })).statusCode, 200);
    assert.deepEqual([db.all("wallet_templates")[0].every, db.all("wallet_templates")[0].startMonth], [6, 3]);
    assert.equal((await call({ action: "wallet-template-update", id, every: 5 })).statusCode, 400);
    assert.equal((await call({ action: "wallet-add", type: "expense", amount: 1, date: "2026-11-15", recurring: true, every: 7 })).statusCode, 400);
    const plain = await call({ action: "wallet-add", type: "expense", amount: 99, desc: "iCloud", date: "2026-11-15", recurring: true });
    assert.match(plain.body.message, /ทุกเดือน/);
});

test("ปฏิทินบิล: รายปีขึ้นเฉพาะเดือนที่ถึงรอบ และต่อคิวในบิลถัดไปเมื่อใกล้ถึง (ไม่เกิน 2 เดือนข้างหน้า)", () => {
    const personal = [{ id: "ins", desc: "เบี้ยประกันชีวิต", amount: 24000, billingDay: 15, every: 12, startMonth: 1 }, { id: "nf", desc: "Netflix", amount: 419, billingDay: 5 }];
    const nov = buildBillSchedule({ me: "GAME", month: "2026-11", today: "2026-11-20", personal });
    assert.ok(!nov.items.some((x) => x.desc === "เบี้ยประกันชีวิต"));
    assert.equal(nov.totalSat, 41900);
    const ins = nov.upcoming.find((x) => x.desc === "เบี้ยประกันชีวิต");
    assert.equal(ins.date, "2027-01-15");
    assert.equal(ins.every, 12);
    const jan = buildBillSchedule({ me: "GAME", month: "2027-01", today: "2026-11-20", personal });
    assert.ok(jan.items.some((x) => x.desc === "เบี้ยประกันชีวิต"));
    const far = buildBillSchedule({ me: "GAME", month: "2026-11", today: "2026-11-20", personal: [{ ...personal[0], startMonth: 6 }] });
    assert.equal(far.upcoming.length, 0, "รายปีที่ยังอีกไกลไม่ขึ้นในการ์ดบิลถัดไป");
});

test("บิลกลุ่มที่ทำซ้ำ: แม่แบบได้รอบและเดือนเริ่มจากวันที่ของบิล", () => {
    const r = buildBill({ amount: 1200, desc: "ประกันกลุ่ม", payer: "GAME", date: "2026-11-05", today: "2026-11-20", participants: ["GAME", "CARE"], mode: "equal", type: "subscription", recurring: true, every: 6, icon: "fa-bolt", now: 1 });
    assert.equal(r.ok, true);
    assert.deepEqual([r.template.every, r.template.startMonth, r.template.billingDay], [6, 11, 5]);
    assert.match(r.summary, /ทุก 6 เดือน/);
    const m = buildBill({ amount: 100, desc: "x", payer: "GAME", date: "2026-11-05", today: "2026-11-20", participants: ["GAME", "CARE"], mode: "equal", type: "subscription", recurring: true, icon: "fa-bolt", now: 1 });
    assert.equal(m.template.every, 1);
});
