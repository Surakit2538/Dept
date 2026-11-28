// แก้คนหาร/วิธีหารของบิลที่บันทึกแล้ว: ตรรกะ (web/src/model.js) + การเขียนจริง (updateBillSplits ใน web/src/data.js กับฐานข้อมูลจำลอง)
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { createRequire } from "node:module";
import { buildSplitEdit, isEqualSplit, splitsForAmount, buildBill } from "../web/src/model.js";

const sum = (o) => Object.values(o).reduce((a, v) => a + Math.round(v * 100), 0);

test("หารเท่ากัน: ได้ผลเดียวกับตอนเพิ่มบิล (คนจ่ายรับเศษท้าย)", () => {
    const r = buildSplitEdit({ amount: 100, payer: "GAME", participants: ["GAME", "care", "BEN"], mode: "equal" });
    assert.equal(r.ok, true);
    const b = buildBill({ amount: 100, desc: "x", payer: "GAME", date: "2026-11-01", participants: ["GAME", "CARE", "BEN"], mode: "equal" });
    assert.deepEqual(r.splits, b.docs[0].splits);
    assert.equal(sum(r.splits), 10000);
    assert.equal(r.splits.GAME, 33.33, "เศษไปที่เพื่อนก่อน คนจ่ายได้ส่วนน้อยสุด");
});

test("กำหนดยอดเอง: รวมต้องเท่ายอดบิลพอดี ชื่อตัวเล็ก/ช่องว่างใช้ได้", () => {
    const ok = buildSplitEdit({ amount: 300, payer: "CARE", participants: ["CARE", "BEN"], mode: "custom", custom: { care: "100", " ben ": "200" } });
    assert.deepEqual(ok, { ok: true, splits: { CARE: 100, BEN: 200 } });
    const short = buildSplitEdit({ amount: 300, payer: "CARE", participants: ["CARE", "BEN"], mode: "custom", custom: { CARE: "100", BEN: "150" } });
    assert.equal(short.ok, false);
    assert.match(short.error, /ขาด/);
    const zero = buildSplitEdit({ amount: 300, payer: "CARE", participants: ["CARE", "BEN"], mode: "custom", custom: { CARE: "300", BEN: "0" } });
    assert.match(zero.error, /BEN/);
});

test("ต้องมีคนหาร และเหลือแต่คนจ่ายคนเดียวไม่ได้ (จ่ายแทนเพื่อนได้)", () => {
    assert.match(buildSplitEdit({ amount: 50, payer: "GAME", participants: [], mode: "equal" }).error, /อย่างน้อย 1 คน/);
    assert.match(buildSplitEdit({ amount: 50, payer: "GAME", participants: ["game"], mode: "equal" }).error, /คนจ่ายคนเดียว/);
    assert.deepEqual(buildSplitEdit({ amount: 50, payer: "GAME", participants: ["BEN"], mode: "equal" }).splits, { BEN: 50 });
});

test("isEqualSplit: เดาโหมดเริ่มต้นจากยอดเดิม", () => {
    const eq = buildBill({ amount: 100, desc: "x", payer: "GAME", date: "2026-11-01", participants: ["GAME", "CARE", "BEN"], mode: "equal" }).docs[0].splits;
    assert.equal(isEqualSplit(eq, 100, "GAME"), true);
    assert.equal(isEqualSplit({ GAME: 50, CARE: 50 }, 100, "game"), true);
    assert.equal(isEqualSplit({ GAME: 30, CARE: 70 }, 100, "GAME"), false);
});

test("splitsForAmount: งวดอื่นของบิลผ่อนแบ่งตามสัดส่วนเดียวกัน รวมเท่ายอดงวดเป๊ะ", () => {
    assert.deepEqual(splitsForAmount({ splits: { CARE: 100, BEN: 200 }, amount: 300, payer: "CARE", mode: "custom" }), { CARE: 100, BEN: 200 });
    const odd = splitsForAmount({ splits: { CARE: 100, BEN: 200 }, amount: 333.34, payer: "CARE", mode: "custom" });
    assert.equal(sum(odd), 33334);
    assert.ok(Math.abs(odd.BEN - 2 * odd.CARE) <= 0.02);
    const eq = splitsForAmount({ splits: { GAME: 1, CARE: 1, BEN: 1 }, amount: 100.01, payer: "GAME", mode: "equal" });
    assert.equal(sum(eq), 10001);
    assert.equal(eq.GAME, 33.33);
});

// ---------- เขียนจริงกับฐานข้อมูลจำลอง ----------
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const webReq = createRequire(path.join(root, "web", "package.json"));
const hasTools = fs.existsSync(path.join(root, "web", "node_modules", "esbuild"));
const FAKE_URL = pathToFileURL(path.join(root, "tests", "fake-firebase-web.mjs")).href;
let mods = null;
async function load() {
    if (mods) return mods;
    const esbuild = webReq("esbuild");
    const out = path.join(root, "web", "node_modules", ".cache-test", "data-split-edit.mjs");
    fs.mkdirSync(path.dirname(out), { recursive: true });
    await esbuild.build({
        entryPoints: [path.join(root, "web", "src", "data.js")], outfile: out, bundle: true, format: "esm", platform: "node", logLevel: "silent",
        plugins: [{ name: "fake-firebase", setup(b) { b.onResolve({ filter: /^firebase\// }, () => ({ path: FAKE_URL, external: true })); } }]
    });
    mods = { data: await import(pathToFileURL(out).href + "?t=" + Date.now()), fake: await import(FAKE_URL) };
    return mods;
}
const CUR = new Date(Date.now() + 7 * 3600 * 1000).toISOString().slice(0, 7);
const [cy, cm] = CUR.split("-").map(Number);
const OLD = cm === 1 ? `${cy - 1}-12` : `${cy}-${String(cm - 1).padStart(2, "0")}`;
const NEXT = cm === 12 ? `${cy + 1}-01` : `${cy}-${String(cm + 1).padStart(2, "0")}`;

test("updateBillSplits: เขียน splits + ป้าย people ใหม่ (รวมคนจ่ายที่จ่ายแทน)", { skip: !hasTools }, async () => {
    const { data, fake } = await load();
    fake.__reset();
    fake.__seed("transactions", "t1", { payer: "CARE", amount: 300, date: `${CUR}-02`, splits: { CARE: 150, BEN: 150 }, people: ["BEN", "CARE"], desc: "ข้าว", receipt: { items: [{ name: "ข้าว", qty: 2, amount: 300, units: { CARE: 1, BEN: 1 } }] } });
    const months = await data.updateBillSplits({ id: "t1", date: `${CUR}-02`, payer: "CARE", amount: 300, type: "normal" }, () => ({ BEN: 100, GAME: 200 }));
    assert.deepEqual(months, [CUR]);
    const t = fake.__get("transactions", "t1");
    assert.deepEqual(t.splits, { BEN: 100, GAME: 200 });
    assert.deepEqual(t.people, ["BEN", "CARE", "GAME"]);
    assert.equal(t.amount, 300);
    assert.equal(t.desc, "ข้าว");
    assert.equal(t.receipt, undefined, "รายการสินค้าเดิมไม่ตรงกับคนหารใหม่ จึงเอาออก");
});

test("updateBillSplits: เดือนที่ปิดแล้วแก้ไม่ได้ ไม่แตะข้อมูล", { skip: !hasTools }, async () => {
    const { data, fake } = await load();
    fake.__reset();
    fake.__seed("transactions", "t_old", { payer: "CARE", amount: 100, date: `${OLD}-28`, splits: { CARE: 50, BEN: 50 }, people: ["BEN", "CARE"] });
    await assert.rejects(data.updateBillSplits({ id: "t_old", date: `${OLD}-28`, payer: "CARE", amount: 100, type: "normal" }, () => ({ BEN: 100 })));
    assert.deepEqual(fake.calls.updated, []);
});

test("updateBillSplits: บิลผ่อนแก้ทุกงวดที่ยังเปิด งวดเดือนปิดคงเดิม ยอดตามงวด", { skip: !hasTools }, async () => {
    const { data, fake } = await load();
    fake.__reset();
    const g = { payer: "GAME", paymentType: "installment", groupId: "grp_1", people: ["CARE", "GAME"] };
    fake.__seed("transactions", "i1", { ...g, amount: 333.34, date: `${OLD}-10`, splits: { GAME: 166.67, CARE: 166.67 } });
    fake.__seed("transactions", "i2", { ...g, amount: 333.33, date: `${CUR}-10`, splits: { GAME: 166.66, CARE: 166.67 } });
    fake.__seed("transactions", "i3", { ...g, amount: 333.33, date: `${NEXT}-10`, splits: { GAME: 166.66, CARE: 166.67 } });
    fake.__seed("transactions", "other", { payer: "GAME", amount: 10, date: `${CUR}-01`, groupId: "grp_2", splits: { GAME: 10 }, people: ["GAME"] });
    const months = await data.updateBillSplits({ id: "i2", date: `${CUR}-10`, payer: "GAME", amount: 333.33, type: "installment", groupId: "grp_1" },
        (amt) => splitsForAmount({ splits: { GAME: 1, CARE: 1, BEN: 1 }, amount: amt, payer: "GAME", mode: "equal" }));
    assert.deepEqual(months.sort(), [CUR, NEXT].sort());
    assert.deepEqual(fake.calls.updated.sort(), ["transactions/i2", "transactions/i3"]);
    assert.deepEqual(fake.__get("transactions", "i1").splits, { GAME: 166.67, CARE: 166.67 }, "งวดเดือนที่ปิดไม่แตะ");
    for (const id of ["i2", "i3"]) {
        const t = fake.__get("transactions", id);
        assert.equal(sum(t.splits), 33333);
        assert.deepEqual(t.people, ["BEN", "CARE", "GAME"]);
    }
});
