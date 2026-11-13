import test from "node:test";
import assert from "node:assert/strict";
import { addMonthsClamped, splitInstallments } from "../lib/installments.mjs";

test("addMonthsClamped: ไม่ล้นเดือน ข้ามปี และปีอธิกสุรทิน", () => {
    assert.equal(addMonthsClamped("2026-01-31", 1), "2026-02-28");
    assert.equal(addMonthsClamped("2028-01-31", 1), "2028-02-29");
    assert.equal(addMonthsClamped("2026-01-31", 2), "2026-03-31");
    assert.equal(addMonthsClamped("2026-01-31", 3), "2026-04-30");
    assert.equal(addMonthsClamped("2026-11-15", 3), "2027-02-15");
    assert.equal(addMonthsClamped("2026-12-31", 12), "2027-12-31");
    assert.equal(addMonthsClamped("2026-05-10", 0), "2026-05-10");
    assert.throws(() => addMonthsClamped("10/05/2026", 1));
});

test("splitInstallments: ผลรวมทุกงวดเท่ายอดเต็มเป๊ะ และ splits ต่องวดรวมเท่ายอดงวด", () => {
    const rows = splitInstallments({ amount: 100, installments: 3, splits: { A: 50, B: 50 }, date: "2026-01-31" });
    assert.equal(rows.length, 3);
    assert.deepEqual(rows.map((r) => r.date), ["2026-01-31", "2026-02-28", "2026-03-31"]);
    const sat = (v) => Math.round(v * 100);
    assert.equal(rows.reduce((a, r) => a + sat(r.amount), 0), 10000);
    for (const r of rows) {
        assert.equal(Object.values(r.splits).reduce((a, v) => a + sat(v), 0), sat(r.amount));
    }
    assert.deepEqual(rows.map((r) => r.amount), [33.34, 33.34, 33.32]);
});

test("splitInstallments: ส่วนไม่เท่ากัน / ทศนิยมเพี้ยน / คนเดียว", () => {
    const rows = splitInstallments({ amount: 1000, installments: 7, splits: { A: 333.33, B: 333.33, C: 333.33 }, date: "2026-05-10" });
    const sat = (v) => Math.round(v * 100);
    assert.equal(rows.reduce((a, r) => a + sat(r.amount), 0), 100000);
    for (const r of rows) assert.equal(Object.values(r.splits).reduce((a, v) => a + sat(v), 0), sat(r.amount));
    const one = splitInstallments({ amount: 12000, installments: 12, splits: { A: 12000 }, date: "2026-05-10" });
    assert.ok(one.every((r) => r.amount === 1000));
    assert.equal(one[11].date, "2027-04-10");
});

test("splitInstallments: ตรวจค่าไม่ถูกต้อง", () => {
    const base = { amount: 100, splits: { A: 100 }, date: "2026-01-01" };
    assert.throws(() => splitInstallments({ ...base, installments: 0 }));
    assert.throws(() => splitInstallments({ ...base, installments: 61 }));
    assert.throws(() => splitInstallments({ ...base, installments: 2.5 }));
    assert.throws(() => splitInstallments({ ...base, installments: 2, splits: {} }));
    assert.throws(() => splitInstallments({ ...base, installments: 2, amount: 0 }));
});

import fs from "node:fs";
test("หน้าเว็บและบอท LINE ใช้ตัวช่วยกลาง ไม่เหลือ setMonth/หารตรงๆ ในการผ่อน", () => {
    const read = (f) => fs.readFileSync(new URL("../" + f, import.meta.url), "utf8");
    const idx = read("index.html");
    const hook = read("api/webhook.js");
    assert.match(idx, /import \{ splitInstallments \} from "\.\/lib\/installments\.mjs"/);
    assert.match(idx, /splitInstallments\(\{ amount, installments, splits, date \}\)/);
    assert.ok(!/currentInstallmentDate/.test(idx));
    assert.match(hook, /splitInstallments\(\{/);
    assert.ok(!/nextDate\.setMonth/.test(hook));
});
