// ซ่อนข้อมูลจริง (เรื่อง 5): ป้าย people ในบิล/เคลียร์เงิน/แม่แบบ, ยอดเคลียร์คำนวณที่เซิร์ฟเวอร์, เติมป้ายข้อมูลเก่า
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { billPeople, settlementPeople, peopleUpToDate, withPeople, planLinesFor, PRIVACY_COL, PRIVACY_ID } from "../lib/privacy.mjs";
import { createShortcutHandler } from "../lib/shortcut-service.mjs";
import { createSubscriptionJob } from "../lib/subscriptions.mjs";
import { buildClearModel } from "../web/src/model.js";
import { createFakeFirestore, createFakeRes } from "./fake-firestore.mjs";

const NOW = Date.parse("2026-11-22T03:00:00Z");
const SUPER = "U0d739eea39c312e11c487e22861920d1";

test("ป้าย people: คนจ่าย + คนหารทุกคน ชื่อแบบเดียวกับบัตรผ่าน (ตัวใหญ่ ช่องว่างเดียว) ไม่ซ้ำ เรียงตัวอักษร", () => {
    assert.deepEqual(billPeople({ payer: "game", splits: { "Care  ": 50, GAME: 50 } }), ["CARE", "GAME"]);
    assert.deepEqual(billPeople({ payer: "GAME", splits: { CARE: 100 } }), ["CARE", "GAME"], "จ่ายแทน: คนจ่ายเห็นด้วย");
    assert.deepEqual(billPeople({ payer: "A", splits: { B: 0, C: 10 } }), ["A", "B", "C"], "ส่วนเป็น 0 ก็ยังเกี่ยวข้อง");
    assert.deepEqual(billPeople(null), []);
    assert.deepEqual(settlementPeople({ from: "care", to: "GAME" }), ["CARE", "GAME"]);
    assert.ok(peopleUpToDate("transactions", { payer: "A", splits: { B: 1 }, people: ["B", "A"] }));
    assert.ok(!peopleUpToDate("transactions", { payer: "A", splits: { B: 1 } }), "ยังไม่มีป้าย");
    assert.ok(!peopleUpToDate("transactions", { payer: "A", splits: { B: 1, C: 1 }, people: ["A", "B"] }), "ป้ายไม่ครบ");
    assert.ok(peopleUpToDate("settlements", { from: "A", to: "B", people: ["A", "B"] }));
    assert.deepEqual(withPeople("transactions", { payer: "A", splits: { B: 1 } }).people, ["A", "B"]);
});

// เดือนเดียวกัน 4 คน: แผนโอนแบบน้อยครั้งที่สุดต้องใช้ข้อมูลทั้งกลุ่ม
const BILLS = [
    { id: "b1", payer: "GAME", amount: 300, date: "2026-11-03", splits: { GAME: 100, CARE: 100, BOSS: 100 } },
    { id: "b2", payer: "BOSS", amount: 200, date: "2026-11-04", splits: { BOSS: 100, NUN: 100 } },
    { id: "b3", payer: "NUN", amount: 90, date: "2026-11-05", splits: { NUN: 30, CARE: 30, GAME: 30 } },
    { id: "old", payer: "CARE", amount: 999, date: "2026-10-28", splits: { CARE: 1, GAME: 998 } }
];
const SETTLED = [{ id: "s1", status: "verified", month: "2026-11", from: "CARE", to: "GAME", amount: 50 }];
const MEMBERS = ["GAME", "CARE", "BOSS", "NUN"];

test("ยอดเคลียร์จากเซิร์ฟเวอร์ = ตัวเลขเดียวกับหน้าเว็บเดิมทุกบาท แต่ได้เฉพาะบรรทัดของตัวเอง", () => {
    const web = buildClearModel({ name: "CARE", month: "2026-11", members: MEMBERS, transactions: BILLS, settlements: SETTLED });
    const mine = planLinesFor({ name: "care", memberNames: MEMBERS, transactions: BILLS, settlements: SETTLED, month: "2026-11" });
    assert.ok(mine.length > 0 && mine.length < web.lines.length, "มีทั้งบรรทัดของฉันและของคนอื่นในข้อมูลชุดนี้");
    const want = web.lines.filter((l) => l.role !== "other").map(({ from, to, amount }) => `${from}>${to}:${amount}`).sort();
    assert.deepEqual(mine.map((l) => `${l.from}>${l.to}:${l.amount}`).sort(), want);
    assert.ok(mine.every((l) => l.from === "CARE" || l.to === "CARE"));
    const all = planLinesFor({ name: "CARE", memberNames: MEMBERS, transactions: BILLS, settlements: SETTLED, month: "2026-11", all: true });
    assert.equal(all.length, web.lines.length, "ผู้ดูแลหลักที่ขอทั้งหมดได้ทุกบรรทัด");
});

function setup() {
    const db = createFakeFirestore();
    db.seed("members", "g", { name: "GAME", role: "admin", lineUserId: SUPER });
    db.seed("members", "c", { name: "CARE" });
    db.seed("members", "b", { name: "BOSS", role: "admin", lineUserId: "Uother" });
    db.seed("members", "n", { name: "NUN" });
    BILLS.forEach((t) => db.seed("transactions", t.id, t));
    SETTLED.forEach((s) => db.seed("settlements", s.id, s));
    db.seed("subscription_templates", "tp", { payer: "GAME", amount: 100, splits: { GAME: 50, NUN: 50 }, active: true });
    const ids = { g: "GAME", c: "CARE", b: "BOSS", n: "NUN" };
    const handler = createShortcutHandler({
        db: {}, fs: db.fs,
        verifyDeviceToken: async (_db, req) => { const id = req.headers.authorization.slice(7); return { authenticated: true, memberId: id, name: ids[id] }; },
        env: {}, now: () => NOW
    });
    const call = async (body, who) => { const res = createFakeRes(); await handler({ method: "POST", headers: { authorization: "Bearer " + who }, body }, res); return res; };
    return { db, call };
}

test("clear-plan: ยังไม่เปิดซ่อน = ตอบแค่สถานะ / เปิดแล้ว = เฉพาะบรรทัดของตัวเอง ผู้ดูแลหลักขอ all ได้ ผู้ดูแลคนอื่นไม่ได้", async () => {
    const { db, call } = setup();
    let r = await call({ action: "clear-plan", months: ["2026-11"] }, "c");
    assert.equal(r.body.success, true);
    assert.deepEqual([r.body.hide, r.body.super, r.body.plans], [false, false, {}]);
    assert.equal((await call({ action: "clear-plan", months: [] }, "g")).body.super, true);

    assert.equal((await call({ action: "privacy-set", hide: true }, "b")).statusCode, 403, "ผู้ดูแลคนอื่นเปิด/ปิดไม่ได้");
    assert.equal((await call({ action: "privacy-set", hide: true }, "c")).statusCode, 403);
    r = await call({ action: "privacy-set", hide: true }, "g");
    assert.equal(r.body.status, "saved");
    assert.equal(db.all(PRIVACY_COL)[0].hide, true);

    r = await call({ action: "clear-plan", months: ["2026-11", "2026-10", "bad", "2026-11"] }, "c");
    assert.equal(r.body.hide, true);
    assert.deepEqual(Object.keys(r.body.plans).sort(), ["2026-10", "2026-11"]);
    assert.ok(r.body.plans["2026-11"].every((l) => l.from === "CARE" || l.to === "CARE"));
    assert.deepEqual(r.body.plans["2026-10"], [{ from: "GAME", to: "CARE", amount: 998 }]);
    const nun = await call({ action: "clear-plan", months: ["2026-10"], all: true }, "n");
    assert.deepEqual(nun.body.plans["2026-10"], [], "คนอื่นขอ all ไม่ได้ เห็นแค่ของตัวเอง");
    const boss = await call({ action: "clear-plan", months: ["2026-10"], all: true }, "b");
    assert.deepEqual(boss.body.plans["2026-10"], [], "ผู้ดูแลที่ไม่ใช่ผู้ดูแลหลัก = เหมือนสมาชิกปกติ");
    const sup = await call({ action: "clear-plan", months: ["2026-10"], all: true }, "g");
    assert.equal(sup.body.plans["2026-10"].length, 1);
    assert.ok(PRIVACY_ID);
});

test("เติมป้ายข้อมูลเก่า: เฉพาะผู้ดูแลหลัก เขียนเฉพาะใบที่ยังไม่ตรง กดซ้ำไม่เขียนเพิ่ม", async () => {
    const { db, call } = setup();
    assert.equal((await call({ action: "privacy-backfill" }, "b")).statusCode, 403);
    let r = await call({ action: "privacy-backfill" }, "g");
    assert.equal(r.body.done, true);
    assert.equal(r.body.updated, BILLS.length + SETTLED.length + 1);
    assert.ok(db.all("transactions").every((t) => Array.isArray(t.people) && t.people.includes(t.payer)));
    assert.deepEqual(db.all("settlements")[0].people, ["CARE", "GAME"]);
    assert.deepEqual(db.all("subscription_templates")[0].people, ["GAME", "NUN"]);
    r = await call({ action: "privacy-backfill" }, "g");
    assert.equal(r.body.updated, 0);
});

test("ทุกจุดที่สร้างบิล/เคลียร์เงิน/แม่แบบใส่ป้าย people (เว็บ, LINE, คำสั่งลัด, cron, ตรวจสลิป)", async () => {
    const db = createFakeFirestore();
    db.seed("subscription_templates", "t1", { payer: "GAME", amount: 100, splits: { GAME: 50, CARE: 50 }, active: true, billingDay: 3 });
    await createSubscriptionJob({ db: {}, fs: db.fs, now: () => new Date(NOW) })();
    assert.deepEqual(db.all("transactions")[0].people, ["CARE", "GAME"]);
    const read = (f) => fs.readFileSync(new URL("../" + f, import.meta.url), "utf8");
    assert.match(read("web/src/data.js"), /withPeople\("transactions", d\)/);
    assert.match(read("web/src/data.js"), /withPeople\("subscription_templates", template\)/);
    assert.match(read("web/src/data.js"), /people: settlementPeople\(\{ from, to \}\)/);
    assert.match(read("lib/line-split.mjs"), /withPeople\("transactions", bill\)/);
    assert.match(read("lib/shortcut-service.mjs"), /withPeople\("transactions", txn\)/);
    assert.match(read("api/firestore-helpers.js"), /people: settlementPeople\(settlement\)/);
    const hook = read("api/webhook.js");
    assert.equal((hook.match(/people: billPeople\(/g) || []).length, 4, "ผ่อน / รายเดือน / แม่แบบ / จ่ายเต็ม");
    // ทุก addDoc/batch.set ที่เขียน transactions/settlements/subscription_templates ต้องผ่านจุดที่ตรวจข้างบน
    const sites = ["web/src/data.js", "lib/line-split.mjs", "lib/shortcut-service.mjs", "lib/subscriptions.mjs", "api/firestore-helpers.js", "api/webhook.js"]
        .flatMap((f) => (read(f).match(/(addDoc|setDoc|batch\.set)\((collection\()?(doc\()?(collection\()?db, ["'](transactions|settlements|subscription_templates)["']/g) || []).map((m) => f + " " + m));
    assert.equal(sites.length, 11, sites.join("\n"));
});

// ---------- เว็บ (โค้ดจริงของ web/src/data.js กับ Firebase จำลอง) ----------
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { createRequire } from "node:module";
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const hasTools = fs.existsSync(path.join(root, "web", "node_modules", "esbuild"));
async function loadWeb() {
    const esbuild = createRequire(path.join(root, "web", "package.json"))("esbuild");
    const FAKE_URL = pathToFileURL(path.join(root, "tests", "fake-firebase-web.mjs")).href;
    const out = path.join(root, "web", "node_modules", ".cache-test", "data-privacy.mjs");
    fs.mkdirSync(path.dirname(out), { recursive: true });
    await esbuild.build({
        entryPoints: [path.join(root, "web", "src", "data.js")], outfile: out, bundle: true, format: "esm", platform: "node", logLevel: "silent",
        plugins: [{ name: "fake-firebase", setup(b) { b.onResolve({ filter: /^firebase\// }, () => ({ path: FAKE_URL, external: true })); } }]
    });
    return { data: await import(pathToFileURL(out).href + "?t=" + Date.now()), fake: await import(FAKE_URL) };
}

test("เว็บ: ขอบเขตการอ่าน ซ่อนแล้วอ่านเฉพาะบิลที่มีชื่อเรา / ยังไม่ซ่อนหรือผู้ดูแลหลักเปิดดูทุกคน = ทั้งกลุ่ม", { skip: !hasTools }, async () => {
    const { data, fake } = await loadWeb();
    assert.equal(data.readScopeFor("care", null), null, "ยังไม่รู้สถานะ = ทั้งกลุ่ม");
    assert.equal(data.readScopeFor("care", { hide: false, super: false }), null);
    assert.equal(data.readScopeFor(" care ", { hide: true, super: false }), "CARE");
    assert.equal(data.readScopeFor("game", { hide: true, super: true }, false), "GAME", "ผู้ดูแลหลักที่ไม่ได้เปิด ดูข้อมูลของทุกคน = เหมือนสมาชิก");
    assert.equal(data.readScopeFor("game", { hide: true, super: true }, true), null);

    fake.__reset();
    fake.__seed("transactions", "a", { payer: "CARE", date: "2026-10-03", splits: { CARE: 1, BEN: 1 }, people: ["BEN", "CARE"] });
    fake.__seed("transactions", "b", { payer: "BEN", date: "2026-10-04", splits: { BEN: 1, NUN: 1 }, people: ["BEN", "NUN"] });
    fake.__seed("settlements", "s", { from: "BEN", to: "NUN", month: "2026-10", status: "verified", people: ["BEN", "NUN"] });
    fake.__seed("subscription_templates", "t1", { payer: "CARE", active: true, splits: { CARE: 1 }, people: ["CARE"] });
    fake.__seed("subscription_templates", "t2", { payer: "BEN", active: true, splits: { BEN: 1 }, people: ["BEN"] });
    data.setReadScope("CARE");
    const m = await data.loadPastMonth("2026-10");
    assert.deepEqual(m.transactions.map((t) => t.id), ["a"]);
    assert.deepEqual(m.settlements, []);
    assert.deepEqual((await data.loadTemplates()).map((t) => t.id), ["t1"]);
    assert.ok(fake.calls.queries.every((q) => q.cons.some((c) => c.op === "array-contains" && c.value === "CARE")), "ทุกคำค้นบิลต้องกรองด้วยชื่อเรา (กฎ Firestore บังคับ)");
    data.setReadScope(null);
    assert.equal((await data.loadPastMonth("2026-09")).transactions.length, 0);
    assert.equal((await data.loadTemplates()).length, 2, "ยังไม่ซ่อน: อ่านทั้งกลุ่มเหมือนเดิม");
});
