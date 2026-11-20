// งบรายเดือน + เป้าเก็บเงิน: การคำนวณ (lib/budget.mjs) และ action ของ API (เอกสารเดียวต่อคน แก้ได้เฉพาะของตัวเอง)
import test from "node:test";
import assert from "node:assert/strict";
import {
    budgetFor, budgetStatus, levelOf, goalStatus, savingPlan, suggestBudget, monthsInclusive,
    cleanBudget, cleanGoalInput, applyGoalMove, normalizePlan, trimMonths, planDocId, PLAN_COL, GOAL_MAX
} from "../lib/budget.mjs";
import { createShortcutHandler } from "../lib/shortcut-service.mjs";
import { createFakeFirestore, createFakeRes } from "./fake-firestore.mjs";

const plan = {
    budget: { total: 15000, cats: { food: 4000, travel: 2000, goods: 3000 } },
    months: { "2026-12": { total: 22000, cats: {} } },
    goals: []
};

test("งบของเดือน: งบเฉพาะเดือนก่อน แล้วค่อยงบปกติ ไม่ตั้งเลย = none", () => {
    assert.equal(budgetFor(plan, "2026-11").source, "default");
    assert.equal(budgetFor(plan, "2026-11").total, 15000);
    assert.equal(budgetFor(plan, "2026-12").source, "month");
    assert.equal(budgetFor(plan, "2026-12").total, 22000);
    assert.equal(budgetFor({}, "2026-11").source, "none");
    assert.equal(budgetFor({ budget: { total: 0, cats: {} } }, "2026-11").source, "none");
});

test("สถานะงบ: เหลือ เปอร์เซ็นต์ และระดับ ok/near/over ทั้งรวมและรายหมวด", () => {
    const s = budgetStatus(budgetFor(plan, "2026-11"), { totalSat: 858000, cats: { food: 358000, travel: 230000, goods: 120000, bills: 150000 } });
    assert.equal(s.set, true);
    assert.equal(s.budgetSat, 1500000);
    assert.equal(s.leftSat, 642000);
    assert.equal(s.percent, 57);
    assert.equal(s.level, "ok");
    const by = Object.fromEntries(s.cats.map((c) => [c.key, c]));
    assert.equal(by.food.level, "near");
    assert.equal(by.food.leftSat, 42000);
    assert.equal(by.travel.level, "over");
    assert.equal(by.travel.leftSat, -30000);
    assert.equal(by.goods.level, "ok");
    assert.equal(by.bills, undefined, "หมวดที่ไม่ได้ตั้งงบไม่อยู่ในรายการ");
    assert.equal(s.unassignedSat, 600000);
});

test("ตั้งแต่งบรายหมวด ไม่ตั้งงบรวม: งบรวม = ผลรวมหมวด", () => {
    const s = budgetStatus({ total: 0, cats: { food: 1000 }, source: "default" }, { totalSat: 50000, cats: { food: 50000 } });
    assert.equal(s.budgetSat, 100000);
    assert.equal(s.set, true);
    assert.equal(levelOf(0, 0), "none");
    assert.equal(levelOf(80, 100), "near");
    assert.equal(levelOf(101, 100), "over");
});

test("เป้า: มีกำหนด = ที่ขาด ÷ เดือนที่เหลือ (นับเดือนนี้) ปัดขึ้นหลักบาท / ไม่มีกำหนด = ตั้งใจเก็บต่อเดือน", () => {
    assert.equal(monthsInclusive("2026-11", "2027-03"), 5);
    assert.equal(monthsInclusive("2026-11", "2026-10"), 0);
    const g = { target: 30000, saved: 12000, deadline: "2027-03", log: [{ date: "2026-11-05", amount: 3000 }, { date: "2026-10-05", amount: 9000 }] };
    const s = goalStatus(g, "2026-11");
    assert.equal(s.percent, 40);
    assert.equal(s.monthsLeft, 5);
    assert.equal(s.perMonthSat, 360000);
    assert.equal(s.thisMonthSat, 300000);
    assert.equal(s.late, false);
    const late = goalStatus({ ...g, deadline: "2026-10" }, "2026-11");
    assert.equal(late.late, true);
    assert.equal(late.perMonthSat, 1800000);
    const free = goalStatus({ target: 60000, saved: 25000, deadline: "", monthly: 3000, log: [] }, "2026-11");
    assert.equal(free.perMonthSat, 300000);
    const done = goalStatus({ target: 100, saved: 100, deadline: "", monthly: 50 }, "2026-11");
    assert.equal(done.done, true);
    assert.equal(done.perMonthSat, 0);
});

test("งบแนะนำ = รายรับ − เงินที่ตั้งใจเก็บต่อเดือน ปัดลงหลักร้อย", () => {
    const goals = [{ target: 30000, saved: 12000, deadline: "2027-03", log: [] }, { target: 60000, saved: 25000, deadline: "", monthly: 3000, log: [] }];
    assert.equal(savingPlan(goals, "2026-11").planSat, 660000);
    assert.equal(suggestBudget(3000000, goals, "2026-11"), 2340000);
    assert.equal(suggestBudget(100000, goals, "2026-11"), 0, "ไม่ติดลบ");
});

test("ตรวจข้อมูล: งบติดลบ/ไม่ใช่ตัวเลขไม่รับ เป้าต้องมีชื่อและยอด เดือนต้องถูกรูปแบบ", () => {
    assert.equal(cleanBudget({ total: -1 }), null);
    assert.equal(cleanBudget({ total: "abc" }), null);
    assert.deepEqual(cleanBudget({ total: "1500.555", cats: { food: 0, travel: 200, hack: 99 } }), { total: 1500.56, cats: { travel: 200 } });
    assert.equal(cleanGoalInput({ name: "", target: 100 }).ok, false);
    assert.equal(cleanGoalInput({ name: "ทริป", target: 0 }).ok, false);
    assert.equal(cleanGoalInput({ name: "ทริป", target: 100, deadline: "2027-13" }).ok, false);
    const ok = cleanGoalInput({ name: " ทริป ", target: 100, deadline: "2027-03", monthly: 50, icon: "x", color: "sun" });
    assert.equal(ok.goal.name, "ทริป");
    assert.equal(ok.goal.monthly, 0, "มีกำหนดแล้วไม่ใช้ยอดต่อเดือน");
    assert.equal(ok.goal.icon, "plane");
    assert.equal(ok.goal.color, "sun");
});

test("เก็บเข้า/ถอนออก: บันทึกประวัติ ถอนเกินที่มีไม่ได้", () => {
    const g = { id: "g1", saved: 1000, log: [] };
    const a = applyGoalMove(g, 500, { date: "2026-11-20", at: "t" });
    assert.equal(a.goal.saved, 1500);
    assert.equal(a.goal.log[0].amount, 500);
    assert.equal(applyGoalMove(a.goal, -2000, { date: "2026-11-20", at: "t" }).ok, false);
    assert.equal(applyGoalMove(a.goal, -1500, { date: "2026-11-20", at: "t" }).goal.saved, 0);
    assert.equal(applyGoalMove(g, 0, { date: "x", at: "t" }).ok, false);
});

test("ข้อมูลเสียในฐานข้อมูลไม่ทำให้พัง และเก็บงบเฉพาะเดือนไม่เกิน 24 เดือน", () => {
    const p = normalizePlan({ budget: "x", months: { bad: { total: 1 }, "2026-11": { total: 10 } }, goals: [null, { id: "a", target: "5", icon: "zzz" }] });
    assert.deepEqual(p.budget, { total: 0, cats: {} });
    assert.deepEqual(Object.keys(p.months), ["2026-11"]);
    assert.equal(p.goals.length, 1);
    assert.equal(p.goals[0].icon, "plane");
    const many = Object.fromEntries(Array.from({ length: 30 }, (_, i) => [`20${25 + Math.floor(i / 12)}-${String((i % 12) + 1).padStart(2, "0")}`, { total: i }]));
    const t = trimMonths(many);
    assert.equal(Object.keys(t).length, 24);
    assert.ok(!("2025-01" in t), "ตัดเดือนเก่าสุดทิ้ง");
});

// ---------------- API ----------------
function setup() {
    const db = createFakeFirestore();
    const handler = createShortcutHandler({
        db: {}, fs: db.fs,
        verifyDeviceToken: async (_db, req) => {
            const h = req.headers.authorization;
            if (h === "Bearer me") return { authenticated: true, memberId: "me", name: "GAME" };
            if (h === "Bearer aoy") return { authenticated: true, memberId: "aoy", name: "AOY" };
            return { authenticated: false, status: 401, message: "x" };
        },
        env: {}, fetchFn: async () => ({ ok: true }), now: () => Date.parse("2026-11-20T05:00:00Z")
    });
    const call = async (body, who = "me") => {
        const res = createFakeRes();
        await handler({ method: "POST", headers: { authorization: "Bearer " + who }, body }, res);
        return res;
    };
    return { db, call };
}

test("API: ยังไม่เคยตั้ง = แผนว่าง / ตั้งงบปกติและงบเฉพาะเดือน / ลบงบเฉพาะเดือน", async () => {
    const { db, call } = setup();
    const empty = await call({ action: "plan-get" });
    assert.equal(empty.statusCode, 200);
    assert.deepEqual(empty.body.plan, { budget: { total: 0, cats: {} }, months: {}, goals: [] });

    const a = await call({ action: "plan-budget-set", scope: "default", total: 15000, cats: { food: 4000 } });
    assert.equal(a.body.status, "saved");
    const b = await call({ action: "plan-budget-set", scope: "month", month: "2026-12", total: 22000 });
    assert.equal(b.body.plan.months["2026-12"].total, 22000);
    const row = db.all(PLAN_COL)[0];
    assert.equal(row.ownerName, "GAME");
    assert.equal(row.budget.total, 15000);

    const c = await call({ action: "plan-budget-set", scope: "month", month: "2026-12", clear: true });
    assert.deepEqual(c.body.plan.months, {});
    assert.equal((await call({ action: "plan-budget-set", scope: "month", month: "bad", total: 1 })).statusCode, 400);
    assert.equal((await call({ action: "plan-budget-set", total: -5 })).statusCode, 400);
});

test("API: เพิ่ม แก้ เก็บเข้า ถอนออก ลบเป้า", async () => {
    const { call } = setup();
    const add = await call({ action: "goal-save", name: "เที่ยวญี่ปุ่น", target: 30000, deadline: "2027-03", icon: "plane", color: "accent" });
    assert.equal(add.body.status, "saved");
    const id = add.body.plan.goals[0].id;
    assert.ok(id);
    const edit = await call({ action: "goal-save", id, name: "ญี่ปุ่น", target: 35000, deadline: "2027-04" });
    assert.equal(edit.body.plan.goals[0].name, "ญี่ปุ่น");
    assert.equal(edit.body.plan.goals.length, 1);

    const inn = await call({ action: "goal-move", id, amount: 3000, dir: "in" });
    assert.equal(inn.body.plan.goals[0].saved, 3000);
    assert.equal(inn.body.plan.goals[0].log[0].date, "2026-11-20");
    const out = await call({ action: "goal-move", id, amount: 500, dir: "out" });
    assert.equal(out.body.plan.goals[0].saved, 2500);
    assert.equal((await call({ action: "goal-move", id, amount: 99999, dir: "out" })).statusCode, 400);
    assert.equal((await call({ action: "goal-move", id: "nope", amount: 1 })).statusCode, 404);

    const del = await call({ action: "goal-delete", id });
    assert.equal(del.body.plan.goals.length, 0);
});

test("API: แต่ละคนเห็นและแก้ได้เฉพาะแผนของตัวเอง", async () => {
    const { db, call } = setup();
    const add = await call({ action: "goal-save", name: "ทริป", target: 1000 });
    const id = add.body.plan.goals[0].id;
    const other = await call({ action: "plan-get" }, "aoy");
    assert.deepEqual(other.body.plan.goals, [], "คนอื่นไม่เห็นเป้าของเรา");
    assert.equal((await call({ action: "goal-move", id, amount: 100 }, "aoy")).statusCode, 404, "คนอื่นเก็บเข้าเป้าของเราไม่ได้");
    assert.equal((await call({ action: "goal-delete", id }, "aoy")).statusCode, 404);
    const mine = db.fs.getDoc({ col: PLAN_COL, id: planDocId("GAME") });
    assert.equal((await mine).data().goals.length, 1);
});

test("API: ตั้งเป้าได้ไม่เกินจำนวนที่กำหนด", async () => {
    const { call } = setup();
    for (let i = 0; i < GOAL_MAX; i++) assert.equal((await call({ action: "goal-save", name: "ก" + i, target: 100 })).statusCode, 200);
    assert.equal((await call({ action: "goal-save", name: "เกิน", target: 100 })).statusCode, 400);
});

// ---------------- LINE: การ์ดหลังพิมพ์ "กาแฟ 60" และสรุปเดือน ----------------
import { buildExpenseSavedMessage, buildMemberReportMessage } from "../lib/line-report.mjs";

function lineSeed(withPlan = true) {
    const db = createFakeFirestore();
    db.seed("members", "g", { name: "GAME", lineUserId: "U_game" });
    db.seed("members", "c", { name: "CARE", lineUserId: "U_care" });
    db.seed("transactions", "t1", { date: "2026-11-02", payer: "GAME", amount: 300, splits: { GAME: 100, CARE: 200 }, icon: "fa-utensils", desc: "หมูกระทะ" });
    db.seed("wallet_entries", "w1", { ownerName: "GAME", type: "expense", amount: 65, date: "2026-11-20", month: "2026-11", desc: "กาแฟ", icon: "fa-mug-hot" });
    db.seed("wallet_entries", "w2", { ownerName: "GAME", type: "expense", amount: 500, date: "2026-11-03", month: "2026-11", desc: "แท็กซี่", icon: "fa-car" });
    if (withPlan) db.seed(PLAN_COL, planDocId("GAME"), { ownerName: "GAME", budget: { total: 1000, cats: { food: 180 } }, months: {}, goals: [] });
    return db;
}
const LNOW = Date.parse("2026-11-20T03:00:00Z");

test("LINE กาแฟ 60: หัวน้ำเงิน + กล่องงบหมวดและงบรวม, ปุ่ม หารกับเพื่อน อยู่ก่อน ลบรายการนี้", async () => {
    const db = lineSeed();
    const msg = await buildExpenseSavedMessage({ db: {}, fs: db.fs, memberName: "GAME", entry: { id: "w1", desc: "กาแฟ", amount: 65, icon: "fa-mug-hot" }, now: LNOW });
    const json = JSON.stringify(msg);
    assert.equal(msg.contents.header.background.type, "linearGradient", "หัวการ์ดสีน้ำเงินไล่สี");
    assert.ok(json.includes("งบอาหาร"), "บอกงบของหมวดนั้น");
    assert.ok(json.includes("เกินงบ ฿-") === false);
    // อาหาร = หมูกระทะ 100 + กาแฟ 65 = 165 จากงบ 180 -> เหลือ 15 · รวม 665 จาก 1000 -> เหลือ 335
    assert.ok(json.includes("เหลือ ฿15 / ฿180"), json.match(/เหลือ[^"]*/g));
    assert.ok(json.includes("เหลือ ฿335 / ฿1,000"));
    const btns = msg.contents.footer.contents[0].contents.map((b) => b.action.label);
    assert.deepEqual(btns, ["หารกับเพื่อน", "ลบรายการนี้"]);
});

test("LINE กาแฟ 60: ไม่ได้ตั้งงบ ไม่มีกล่องงบ และอ่านแค่ 7 วัน", async () => {
    const db = lineSeed(false);
    const msg = await buildExpenseSavedMessage({ db: {}, fs: db.fs, memberName: "GAME", entry: { id: "w1", desc: "กาแฟ", amount: 65, icon: "fa-mug-hot" }, now: LNOW });
    const json = JSON.stringify(msg);
    assert.ok(!json.includes("งบรวมเดือนนี้"));
    assert.ok(json.includes("วันนี้ ฿65"));
});

test("LINE สรุปเดือน: ใบแรกมีแถบงบเมื่อตั้งงบ", async () => {
    const db = lineSeed();
    const msg = await buildMemberReportMessage({ db: {}, fs: db.fs, memberName: "GAME", now: LNOW });
    const json = JSON.stringify(msg.contents.contents[0]);
    assert.ok(json.includes("งบ ฿1,000 · ใช้ไป 67%"), json.match(/งบ[^"]*/g));
    assert.ok(json.includes("งบเหลือ ฿335"));
    const none = await buildMemberReportMessage({ db: {}, fs: lineSeed(false).fs, memberName: "GAME", now: LNOW });
    assert.ok(!JSON.stringify(none).includes("งบเหลือ"));
});

// ---------------- Widget ----------------
import fsNode from "node:fs";
test("Widget แบบ 2: API ส่งงบและใช้ไปรายวัน สคริปต์มีพื้นหลังกราฟและปุ่ม 4 ปุ่มที่เปิดหน้าถูกต้อง", () => {
    const api = fsNode.readFileSync(new URL("../api/widget-summary.js", import.meta.url), "utf8");
    assert.match(api, /budget,/);
    assert.match(api, /daily,/, "ส่งใช้ไปรายวันไว้วาดกราฟ (คำนวณจากข้อมูลที่อ่านแล้ว ไม่อ่านเพิ่ม)");
    assert.match(api, /planDocId\(normalizeName\(auth\.name\)\)/, "รหัสเอกสารแผนต้องตรงกับที่ API บันทึก");
    const w = fsNode.readFileSync(new URL("../scriptable/DeptWidget.js", import.meta.url), "utf8");
    assert.match(w, /งบเหลือเดือนนี้/);
    assert.match(w, /function drawChartBg\(/);
    assert.match(w, /add: `\$\{BASE_URL\}\/#add`/);
    assert.match(w, /clear: `\$\{BASE_URL\}\/#clear`/);
    assert.match(w, /me: `\$\{BASE_URL\}\/#me`/);
    assert.match(w, /run-shortcut\?name=\$\{encodeURIComponent\("Dept บันทึก"\)\}/);
    assert.ok(!w.includes("loadGlass"), "เลิกใช้พื้นหลังกระจกแล้ว (ไม่ต้องตั้งค่าเพิ่ม)");
    const tokens = JSON.parse(fsNode.readFileSync(new URL("../design/tokens.json", import.meta.url), "utf8"));
    const allowed = new Set([...Object.values(tokens.color.light), ...Object.values(tokens.color.dark)].filter((v) => /^#[0-9a-f]{6}$/i.test(v)).map((v) => v.toLowerCase()));
    for (const hex of w.match(/#[0-9a-fA-F]{6}\b/g) || []) assert.ok(allowed.has(hex.toLowerCase()), `สี ${hex} ไม่อยู่ใน tokens`);
});

// ---------------- คู่มือ iPhone ----------------
import { LATEST_AUTO_VERSION } from "../lib/shortcut-service.mjs";
test("คู่มือ iPhone: บอกรุ่น DeptAuto ล่าสุด มีหัวข้อ #auto-more ที่หน้าตั้งค่าลิงก์มา และมี 4 ขั้น", () => {
    const g = fsNode.readFileSync(new URL("../shortcut-guide.html", import.meta.url), "utf8");
    assert.ok(g.includes(`DeptAuto รุ่น ${LATEST_AUTO_VERSION}`), "รุ่นในคู่มือต้องตรงกับ LATEST_AUTO_VERSION");
    assert.match(g, /id="auto-more"/);
    assert.equal((g.match(/class="step open" data-step="/g) || []).length, 4);
    assert.ok(!/\p{Extended_Pictographic}/u.test(g), "ห้ามมี emoji");
    const tokens = JSON.parse(fsNode.readFileSync(new URL("../design/tokens.json", import.meta.url), "utf8"));
    const allowed = new Set([...Object.values(tokens.color.light), ...Object.values(tokens.color.dark)].filter((v) => /^#[0-9a-f]{6}$/i.test(v)).map((v) => v.toLowerCase()));
    for (const hex of g.match(/#[0-9a-fA-F]{6}\b/g) || []) assert.ok(allowed.has(hex.toLowerCase()), `สี ${hex} ไม่อยู่ใน tokens`);
});

test("Widget: ค่าคงที่ประกาศก่อนบรรทัด await (เคยพัง Cannot access 'POS_BY_SIZE' before initialization)", () => {
    const w = fsNode.readFileSync(new URL("../scriptable/DeptWidget.js", import.meta.url), "utf8");
    const awaitAt = w.indexOf("await createWidget(");
    for (const name of ["const LINKS", "const BUTTONS", "const C =", "const BASE_URL"]) {
        assert.ok(w.indexOf(name) >= 0 && w.indexOf(name) < awaitAt, `${name} ต้องอยู่ก่อน await`);
    }
});
