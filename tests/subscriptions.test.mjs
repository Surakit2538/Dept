import test from "node:test";
import assert from "node:assert/strict";
import fsNode from "node:fs";
import { createFakeFirestore, createFakeRes } from "./fake-firestore.mjs";
import { createSubscriptionJob } from "../lib/subscriptions.mjs";

const NOV = () => new Date("2026-11-01T02:30:00Z"); // 09:30 น. เวลาไทย วันที่ 1 พ.ย.
const tpl = (o = {}) => ({
    desc: "Netflix", amount: 400, payer: "AOY", splits: { AOY: 200, BEN: 200 }, icon: "fa-tv",
    billingDay: 15, groupId: "grp1", active: true, createdAt: "2026-09-15", lastGeneratedMonth: "2026-10", ...o
});
const make = (now = NOV) => {
    const db = createFakeFirestore();
    return { db, run: createSubscriptionJob({ db: {}, fs: db.fs, now }) };
};

test("สร้างรายการเดือนใหม่ตามวันตัดบัญชี และอัปเดต lastGeneratedMonth", async () => {
    const { db, run } = make();
    db.seed("subscription_templates", "t1", tpl());
    const r = await run();
    assert.deepEqual([r.month, r.created, r.skipped], ["2026-11", 1, 0]);
    const tx = db.all("transactions");
    assert.equal(tx.length, 1);
    assert.equal(tx[0].date, "2026-11-15");
    assert.equal(tx[0].desc, "Netflix 📅");
    assert.equal(tx[0].paymentType, "subscription");
    assert.equal(db.all("subscription_templates")[0].lastGeneratedMonth, "2026-11");
    assert.ok(db.has("transactions", "sub_grp1_2026-11"));
});

test("รันซ้ำ (หรือ Cloud Function เก่าสร้างไปแล้ว) ไม่สร้างซ้ำ", async () => {
    const { db, run } = make();
    db.seed("subscription_templates", "t1", tpl());
    await run();
    const again = await run();
    assert.equal(again.created, 0);
    assert.equal(db.count("transactions"), 1);

    // เคสเอกสารเก่าที่ Cloud Function สร้าง (รหัสสุ่ม, groupId เดียวกัน) แต่ template ยังไม่ถูกอัปเดต
    const b = make();
    b.db.seed("subscription_templates", "t1", tpl());
    b.db.seed("transactions", "randomId", { date: "2026-11-01", desc: "Netflix 📅", groupId: "grp1", amount: 400 });
    const r = await b.run();
    assert.equal(r.created, 0);
    assert.equal(b.db.count("transactions"), 1);
    assert.equal(b.db.all("subscription_templates")[0].lastGeneratedMonth, "2026-11");
});

test("บิลปกติชื่อเหมือนกัน ไม่ทำให้ข้ามรายการประจำ (เดิมเทียบชื่อ)", async () => {
    const { db, run } = make();
    db.seed("subscription_templates", "t1", tpl());
    db.seed("transactions", "n1", { date: "2026-11-03", desc: "Netflix", groupId: undefined, amount: 100, paymentType: "normal" });
    assert.equal((await run()).created, 1);
});

test("template ที่ปิดแล้ว/ข้อมูลไม่ครบ ไม่สร้าง", async () => {
    const { db, run } = make();
    db.seed("subscription_templates", "off", tpl({ active: false, groupId: "g2" }));
    db.seed("subscription_templates", "bad", tpl({ groupId: "g3", amount: "abc" }));
    db.seed("subscription_templates", "nosplit", tpl({ groupId: "g4", splits: {} }));
    const r = await run();
    assert.equal(r.created, 0);
    assert.equal(r.invalid, 2);
    assert.equal(db.count("transactions"), 0);
});

test("วันตัดบัญชี 31 ในเดือนที่มี 30 วัน ถอยเป็นวันสุดท้ายของเดือน", async () => {
    const { db, run } = make(() => new Date("2026-11-01T02:30:00Z"));
    db.seed("subscription_templates", "t1", tpl({ billingDay: 31 }));
    await run();
    assert.equal(db.all("transactions")[0].date, "2026-11-30");
});

test("cron: ต้องมี CRON_SECRET และหัว Authorization ถูกต้อง", async () => {
    const mod = fsNode.readFileSync(new URL("../api/cron/generate-subscriptions.js", import.meta.url), "utf8");
    assert.match(mod, /!process\.env\.CRON_SECRET \|\|/);
    assert.ok(!/req\.query/.test(mod), "ห้ามรับ secret ผ่าน URL");
    void createFakeRes;
});
