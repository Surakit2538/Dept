// กฎลบสมาชิกของเว็บ (deleteMemberIfUnused ใน web/src/data.js): ลบได้เฉพาะชื่อที่ไม่อยู่ในบิลหรือประวัติเคลียร์เงินเลย
// ไม่งั้นยอดหนี้ของคนอื่นจะคำนวณผิด · ทดสอบโค้ดจริงของเว็บ โดยสลับ Firebase เป็นฐานข้อมูลจำลอง (tests/fake-firebase-web.mjs)
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { createRequire } from "node:module";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const webReq = createRequire(path.join(root, "web", "package.json"));
const hasTools = fs.existsSync(path.join(root, "web", "node_modules", "esbuild"));
const FAKE_URL = pathToFileURL(path.join(root, "tests", "fake-firebase-web.mjs")).href;

let mods = null;
/** bundle web/src/data.js โดยให้ firebase/* ชี้ไปที่ตัวจำลอง (ใช้ตัวเดียวกับที่เทสต์ seed ข้อมูล) */
async function load() {
    if (mods) return mods;
    const esbuild = webReq("esbuild");
    const out = path.join(root, "web", "node_modules", ".cache-test", "data-member.mjs");
    fs.mkdirSync(path.dirname(out), { recursive: true });
    await esbuild.build({
        entryPoints: [path.join(root, "web", "src", "data.js")], outfile: out, bundle: true, format: "esm", platform: "node", logLevel: "silent",
        plugins: [{ name: "fake-firebase", setup(b) { b.onResolve({ filter: /^firebase\// }, () => ({ path: FAKE_URL, external: true })); } }]
    });
    const data = await import(pathToFileURL(out).href + "?t=" + Date.now());
    const fake = await import(FAKE_URL);
    mods = { data, fake };
    return mods;
}

async function setup() {
    const { data, fake } = await load();
    fake.__reset();
    fake.__seed("members", "m1", { name: "GAME" });
    fake.__seed("members", "m2", { name: "CARE" });
    fake.__seed("members", "m3", { name: "NEWBIE" });
    fake.__seed("members", "m4", { name: "T H A 🍀" });
    fake.__seed("members", "m5", { name: "A.B" });
    return { del: data.deleteMemberIfUnused, fake };
}

const IN_USE = /ลบ .+ ไม่ได้ เพราะยังมีชื่อนี้ในรายการบิลหรือประวัติเคลียร์เงิน/;

test("ลบสมาชิก: ชื่อที่ไม่เคยอยู่ในบิลหรือประวัติเคลียร์เงิน ลบได้", { skip: !hasTools }, async () => {
    const { del, fake } = await setup();
    fake.__seed("transactions", "t1", { payer: "GAME", amount: 300, splits: { GAME: 150, CARE: 150 } });
    await del({ id: "m3", name: "NEWBIE" });
    assert.equal(fake.__get("members", "m3"), undefined, "ต้องลบเอกสารสมาชิกจริง");
    assert.deepEqual(fake.calls.deleted, ["members/m3"]);
});

test("ลบสมาชิก: เป็นคนจ่ายบิล ลบไม่ได้ และไม่แตะข้อมูล", { skip: !hasTools }, async () => {
    const { del, fake } = await setup();
    fake.__seed("transactions", "t1", { payer: "CARE", amount: 500, splits: { GAME: 500 } }); // จ่ายแทน ไม่ได้อยู่ใน splits
    await assert.rejects(del({ id: "m2", name: "CARE" }), (e) => IN_USE.test(e.message) && e.message.includes("CARE"));
    assert.ok(fake.__get("members", "m2"), "ต้องยังอยู่");
    assert.deepEqual(fake.calls.deleted, []);
});

test("ลบสมาชิก: ถูกหารในบิล (ไม่ได้เป็นคนจ่าย) ลบไม่ได้ ส่วนหาร 0 บาทก็นับว่าอยู่ในบิล", { skip: !hasTools }, async () => {
    const { del, fake } = await setup();
    fake.__seed("transactions", "t1", { payer: "GAME", amount: 300, splits: { GAME: 150, CARE: 150 } });
    await assert.rejects(del({ id: "m2", name: "CARE" }), IN_USE);
    fake.__reset();
    fake.__seed("members", "m2", { name: "CARE" });
    fake.__seed("transactions", "t2", { payer: "GAME", amount: 100, splits: { GAME: 100, CARE: 0 } });
    await assert.rejects(del({ id: "m2", name: "CARE" }), IN_USE);
    assert.ok(fake.__get("members", "m2"));
});

test("ลบสมาชิก: มีในประวัติเคลียร์เงิน ทั้งฝั่งผู้โอนและผู้รับ ลบไม่ได้", { skip: !hasTools }, async () => {
    const { del, fake } = await setup();
    fake.__seed("settlements", "s1", { from: "CARE", to: "GAME", amount: 200, month: "2026-11" });
    await assert.rejects(del({ id: "m2", name: "CARE" }), IN_USE, "ฝั่งผู้โอน");
    await assert.rejects(del({ id: "m1", name: "GAME" }), IN_USE, "ฝั่งผู้รับ");
    assert.deepEqual(fake.calls.deleted, []);
});

test("ลบสมาชิก: ชื่อมีช่องว่าง emoji หรือจุด ตรวจในบิลได้ถูก (ไม่ถูกตีความเป็นฟิลด์ย่อย)", { skip: !hasTools }, async () => {
    const { del, fake } = await setup();
    fake.__seed("transactions", "t1", { payer: "GAME", amount: 90, splits: { GAME: 30, "T H A 🍀": 30, "A.B": 30 } });
    await assert.rejects(del({ id: "m4", name: "T H A 🍀" }), IN_USE);
    await assert.rejects(del({ id: "m5", name: "A.B" }), IN_USE);
    // splits.A.B แบบผิด (A -> B ซ้อนกัน) ต้องไม่ทำให้คนชื่อ A.B ถูกนับว่าอยู่ในบิล
    fake.__reset();
    fake.__seed("members", "m5", { name: "A.B" });
    fake.__seed("transactions", "t2", { payer: "GAME", amount: 10, splits: { GAME: 5, A: { B: 5 } } });
    await del({ id: "m5", name: "A.B" });
    assert.equal(fake.__get("members", "m5"), undefined);
});

test("ลบสมาชิก: ชื่อต้องตรงทั้งคำ (CARE2 อยู่ในบิลไม่ทำให้ลบ CARE ไม่ได้)", { skip: !hasTools }, async () => {
    const { del, fake } = await setup();
    fake.__seed("members", "m6", { name: "CARE2" });
    fake.__seed("transactions", "t1", { payer: "CARE2", amount: 100, splits: { CARE2: 50, GAME: 50 } });
    fake.__seed("settlements", "s1", { from: "CARE2", to: "GAME", amount: 50 });
    await del({ id: "m2", name: "CARE" });
    assert.equal(fake.__get("members", "m2"), undefined);
});

test("ลบสมาชิก: ตรวจ 4 อย่าง (คนจ่าย, ถูกหาร, ผู้โอน, ผู้รับ) อ่านไม่เกิน 1 เอกสารต่อการตรวจ (ประหยัดโควต้าฟรี)", { skip: !hasTools }, async () => {
    const { del, fake } = await setup();
    for (let i = 0; i < 5; i++) fake.__seed("transactions", "t" + i, { payer: "CARE", amount: 10, splits: { CARE: 10 } });
    await assert.rejects(del({ id: "m2", name: "CARE" }), IN_USE);
    assert.equal(fake.calls.queries.length, 4);
    for (const q of fake.calls.queries) assert.ok(q.cons.some((c) => c.kind === "limit" && c.n === 1), `${q.name} ต้องมี limit(1)`);
    assert.deepEqual(fake.calls.queries.map((q) => q.name).sort(), ["settlements", "settlements", "transactions", "transactions"]);
});
