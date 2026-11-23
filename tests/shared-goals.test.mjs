// เป้าเก็บเงินแบบแชร์ (เรื่อง 6 แบบ A): สมาชิกใส่ได้ คนสร้างถอน/แก้/ลบได้ คนอื่นออกจากเป้าเองได้
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { cleanSharedInput, sharedMoveEntry, sharedView, savedSatOf, depositsBy, mySharedSaving, SHARED_COL } from "../lib/shared-goals.mjs";
import { createShortcutHandler } from "../lib/shortcut-service.mjs";
import { createFakeFirestore, createFakeRes } from "./fake-firestore.mjs";

const NOW = Date.parse("2026-11-23T03:00:00Z");
const MEMBERS = ["GAME", "CARE", "BEN", "AOY"];

test("ตรวจข้อมูล: คนสร้างอยู่ในเป้าเสมอ ต้องมีเพื่อนอย่างน้อย 1 คน และชื่อต้องเป็นสมาชิกกลุ่ม", () => {
    const ok = cleanSharedInput({ name: "ค่าส่วนกลางคอนโด", target: 18000, deadline: "2027-02", members: ["care", "BEN"] }, "game", MEMBERS);
    assert.equal(ok.ok, true);
    assert.deepEqual(ok.goal.members, ["GAME", "CARE", "BEN"]);
    assert.equal(cleanSharedInput({ name: "x", target: 1, members: [] }, "GAME", MEMBERS).ok, false);
    assert.match(cleanSharedInput({ name: "x", target: 1, members: ["NOBODY"] }, "GAME", MEMBERS).message, /NOBODY/);
    assert.equal(cleanSharedInput({ name: "", target: 1, members: ["CARE"] }, "GAME", MEMBERS).ok, false);
});

const GOAL = { name: "ค่าส่วนกลางคอนโด", target: 18000, deadline: "2027-02", owner: "GAME", members: ["GAME", "CARE", "BEN"], log: [
    { at: "2026-10-28T01:00:00Z", date: "2026-10-28", amount: 2000, by: "BEN" },
    { at: "2026-11-02T01:00:00Z", date: "2026-11-02", amount: 4000, by: "GAME" },
    { at: "2026-11-20T01:00:00Z", date: "2026-11-20", amount: 3000, by: "CARE" }
] };

test("ใส่/ถอน: ทุกคนในเป้าใส่ได้ ถอนได้เฉพาะคนสร้าง ไม่เกินที่มี คนนอกเป้าทำอะไรไม่ได้", () => {
    const base = { date: "2026-11-23", at: "t" };
    assert.equal(sharedMoveEntry(GOAL, { ...base, amount: 1000, dir: "in", by: "BEN" }).entry.amount, 1000);
    const out = sharedMoveEntry(GOAL, { ...base, amount: 500, dir: "out", by: "CARE" });
    assert.equal(out.ok, false);
    assert.equal(out.code, 403);
    assert.match(out.message, /GAME/);
    assert.equal(sharedMoveEntry(GOAL, { ...base, amount: 9000, dir: "out", by: "game" }).entry.amount, -9000);
    assert.equal(sharedMoveEntry(GOAL, { ...base, amount: 9000.01, dir: "out", by: "GAME" }).ok, false);
    assert.equal(sharedMoveEntry(GOAL, { ...base, amount: 100, dir: "in", by: "AOY" }).code, 403);
    assert.equal(sharedMoveEntry(GOAL, { ...base, amount: 0, dir: "in", by: "BEN" }).ok, false);
});

test("มุมมองของแต่ละคน: ยอดรวม ยอดแต่ละคน ส่วนของฉันต่อเดือน (ยังขาด 9,000 ÷ 4 เดือน ÷ 3 คน ปัดขึ้นเป็นบาท)", () => {
    assert.equal(savedSatOf(GOAL.log), 900000);
    assert.deepEqual(depositsBy(GOAL.log), { BEN: 200000, GAME: 400000, CARE: 300000 });
    const v = sharedView("sg1", GOAL, "CARE", "2026-11");
    assert.equal(v.saved, 9000);
    assert.equal(v.isOwner, false);
    assert.equal(v.mineSat, 300000);
    assert.equal(v.mineMonthSat, 300000);
    assert.equal(v.perPersonSat, 75000, "พ.ย.-ก.พ. = 4 เดือน: 9,000/4 = 2,250 ÷ 3 = 750 (ปัดขึ้นเป็นบาทเต็ม)");
    assert.equal(v.log[0].by, "CARE", "ล่าสุดก่อน");
    assert.equal(sharedView("sg1", GOAL, "BEN", "2026-11").mineMonthSat, 0, "BEN ใส่ ต.ค. เดือนนี้ยังไม่ใส่");
    assert.equal(sharedView("sg1", GOAL, "GAME", "2026-11").isOwner, true);
    assert.deepEqual(mySharedSaving([v]), { planSat: 75000, doneSat: 300000 });
});

function setup() {
    const db = createFakeFirestore();
    MEMBERS.forEach((n, i) => db.seed("members", "m" + i, { name: n }));
    const ids = { g: "GAME", c: "CARE", b: "BEN", a: "AOY" };
    const h = createShortcutHandler({ db: {}, fs: db.fs, now: () => NOW, env: {}, verifyDeviceToken: async (_d, req) => ({ authenticated: true, memberId: req.headers.who, name: ids[req.headers.who] }) });
    const call = async (who, body) => { const res = createFakeRes(); await h({ method: "POST", headers: { authorization: "Bearer x", who }, body }, res); return res; };
    return { db, call };
}

test("API: สร้าง -> เพื่อนเห็นใน plan-get -> ใส่เงิน -> คนสร้างถอน -> เพื่อนถอน/แก้/ลบไม่ได้ -> ออกจากเป้า -> ลบ", async () => {
    const { db, call } = setup();
    let r = await call("g", { action: "shared-goal-save", name: "ค่าส่วนกลางคอนโด", icon: "home", color: "accent", target: 18000, deadline: "2027-02", members: ["CARE", "BEN"] });
    assert.equal(r.body.status, "saved", JSON.stringify(r.body));
    const id = r.body.shared[0].id;
    assert.equal(db.all(SHARED_COL)[0].owner, "GAME");

    const ben = await call("b", { action: "plan-get" });
    assert.equal(ben.body.shared.length, 1, "เพื่อนเห็นเป้าทันที");
    assert.equal((await call("a", { action: "plan-get" })).body.shared.length, 0, "คนที่ไม่ได้อยู่ในเป้าไม่เห็น");

    r = await call("b", { action: "shared-goal-move", id, amount: 1000, dir: "in" });
    assert.equal(r.body.shared[0].saved, 1000);
    await call("c", { action: "shared-goal-move", id, amount: 2500, dir: "in" });
    assert.equal((await call("c", { action: "shared-goal-move", id, amount: 100, dir: "out" })).statusCode, 403);
    r = await call("g", { action: "shared-goal-move", id, amount: 500, dir: "out" });
    assert.equal(r.body.shared[0].saved, 3000);
    assert.equal(db.all(SHARED_COL)[0].log.length, 3, "ต่อท้าย log ไม่ทับกัน");

    assert.equal((await call("b", { action: "shared-goal-save", id, name: "แก้", target: 1, members: ["CARE"] })).statusCode, 403);
    assert.equal((await call("b", { action: "shared-goal-delete", id })).statusCode, 403);
    r = await call("g", { action: "shared-goal-save", id, name: "ค่าส่วนกลาง 2570", icon: "home", color: "sun", target: 20000, deadline: "2027-02", members: ["CARE", "BEN", "AOY"] });
    assert.equal(r.body.shared[0].name, "ค่าส่วนกลาง 2570");
    assert.equal(db.all(SHARED_COL)[0].log.length, 3, "แก้เป้าไม่ลบประวัติ");
    assert.equal((await call("a", { action: "plan-get" })).body.shared.length, 1, "เพิ่ม AOY แล้วเห็น");

    assert.equal((await call("g", { action: "shared-goal-leave", id })).statusCode, 400, "คนสร้างออกไม่ได้");
    r = await call("b", { action: "shared-goal-leave", id });
    assert.equal(r.body.shared.length, 0);
    assert.deepEqual(db.all(SHARED_COL)[0].members, ["GAME", "CARE", "AOY"]);
    assert.equal(db.all(SHARED_COL)[0].log.length, 3, "เงินที่ BEN ใส่ยังอยู่ในเป้า");

    r = await call("g", { action: "shared-goal-delete", id });
    assert.equal(r.body.status, "deleted");
    assert.equal(db.count(SHARED_COL), 0);
});

test("เป้าแชร์ปิดจากเบราว์เซอร์ (ไม่มีในกฎ Firestore) และเพิ่ม log ด้วย arrayUnion", () => {
    const rules = fs.readFileSync(new URL("../firestore.rules", import.meta.url), "utf8");
    assert.ok(!rules.includes("shared_goals"));
    assert.match(fs.readFileSync(new URL("../lib/shortcut-service.mjs", import.meta.url), "utf8"), /log: fs\.arrayUnion\(r\.entry\)/);
    assert.match(fs.readFileSync(new URL("../api/auth-helpers.js", import.meta.url), "utf8"), /export function arrayUnion/);
});
