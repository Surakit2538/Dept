import test from "node:test";
import assert from "node:assert/strict";
import { normalizeName, toSatang, computeMonthBalances, buildSettlementPlan } from "../lib/ledger.mjs";

const MEMBERS = ["GAME", "AOY", "TPALM"];
const tx = (over) => ({ id: "t" + Math.random(), date: "2026-11-10", payer: "GAME", amount: 900, splits: { GAME: 300, AOY: 300, TPALM: 300 }, ...over });

test("normalizeName: ตัดช่องว่างส่วนเกิน + ตัวพิมพ์ใหญ่ + รองรับอีโมจิ", () => {
    assert.equal(normalizeName("  g a  m e 👾 "), "G A M E 👾");
    assert.equal(normalizeName(null), "");
});

test("toSatang: ปัดเป็นสตางค์ ไม่เพี้ยนจากทศนิยมลอยตัว", () => {
    assert.equal(toSatang(1084.97), 108497);
    assert.equal(toSatang("33.33"), 3333);
    assert.equal(toSatang(0.1 + 0.2), 30);
    assert.equal(toSatang("abc"), 0);
});

test("บิลหารสามคน: ผู้จ่ายได้คืน เพื่อนค้างคนละเท่าส่วนตัวเอง", () => {
    const { balances } = computeMonthBalances({ memberNames: MEMBERS, transactions: [tx()], month: "2026-11" });
    assert.deepEqual(balances, { GAME: 60000, AOY: -30000, TPALM: -30000 });
});

test("จ่ายแทน (ผู้จ่ายไม่อยู่ใน splits): เพื่อนค้างครบทั้งยอด", () => {
    const { balances } = computeMonthBalances({
        memberNames: MEMBERS, month: "2026-11",
        transactions: [tx({ amount: 300, splits: { AOY: 150, TPALM: 150 } })]
    });
    assert.deepEqual(balances, { GAME: 30000, AOY: -15000, TPALM: -15000 });
});

test("ชื่อใน splits ต่างตัวพิมพ์/มีช่องว่างเกิน ยังนับถูกคน", () => {
    const { balances } = computeMonthBalances({
        memberNames: ["G A M E 👾", "AOY"], month: "2026-11",
        transactions: [tx({ payer: "g a m e 👾", amount: 100, splits: { "G A M E 👾": 50, " aoy ": 50 } })]
    });
    assert.deepEqual(balances, { "G A M E 👾": 5000, AOY: -5000 });
});

test("เคลียร์หนี้ที่ยืนยันแล้วหักออก (ผู้โอน +, ผู้รับ −) เฉพาะเดือนเดียวกัน", () => {
    const { balances } = computeMonthBalances({
        memberNames: MEMBERS, month: "2026-11", transactions: [tx()],
        settlements: [
            { status: "verified", month: "2026-11", from: "AOY", to: "GAME", amount: 300 },
            { status: "pending", month: "2026-11", from: "TPALM", to: "GAME", amount: 300 },
            { status: "verified", month: "2026-10", from: "TPALM", to: "GAME", amount: 300 }
        ]
    });
    assert.deepEqual(balances, { GAME: 30000, AOY: 0, TPALM: -30000 });
});

test("บิลคนละเดือนไม่ปนกัน", () => {
    const { balances } = computeMonthBalances({ memberNames: MEMBERS, month: "2026-10", transactions: [tx()] });
    assert.deepEqual(balances, { GAME: 0, AOY: 0, TPALM: 0 });
});

test("warning: ไม่มี splits / ชื่อไม่รู้จัก / splits ไม่เท่ายอด", () => {
    const { balances, warnings } = computeMonthBalances({
        memberNames: MEMBERS, month: "2026-11",
        transactions: [
            tx({ id: "a", splits: {} }),
            tx({ id: "b", payer: "NOBODY", amount: 100, splits: { AOY: 100 } }),
            tx({ id: "c", amount: 100, splits: { GAME: 10, AOY: 10 } })
        ]
    });
    const types = warnings.map((w) => w.type + ":" + w.id).sort();
    assert.deepEqual(types, ["no_splits:a", "split_mismatch:c", "unknown_name:b"]);
    assert.equal(balances.GAME, 10000 - 1000); // c: จ่าย 100 หักส่วนตัวเอง 10 = ได้คืน 90 (a ถูกข้าม, b ผู้จ่ายไม่รู้จักไม่กระทบ GAME)
});

test("แผนโอน: จับคู่ลูกหนี้กับเจ้าหนี้ ยอดรวมครบ และเรียงแบบคงที่", () => {
    const plan = buildSettlementPlan({ GAME: 60000, AOY: -45000, TPALM: -15000 });
    assert.deepEqual(plan.map((p) => [p.from, p.to, p.amount]), [["AOY", "GAME", 450], ["TPALM", "GAME", 150]]);
    // เรียกซ้ำ/สลับลำดับกุญแจ ต้องได้ผลเดียวกัน
    const again = buildSettlementPlan({ TPALM: -15000, AOY: -45000, GAME: 60000 });
    assert.deepEqual(again, plan);
});

test("แผนโอน: ยอดค้างต่ำกว่า 1 บาท ถือว่าเคลียร์แล้ว ไม่มีบรรทัด", () => {
    assert.deepEqual(buildSettlementPlan({ GAME: 60, AOY: -60 }), []);
    assert.equal(buildSettlementPlan({ GAME: 100, AOY: -100 }).length, 1);
});

test("แผนโอน: เจ้าหนี้สองคนยอดเท่ากัน เรียงตามชื่อให้ผลคงที่", () => {
    const plan = buildSettlementPlan({ X: -20000, A: 10000, B: 10000 });
    assert.deepEqual(plan.map((p) => [p.to, p.amount]), [["A", 100], ["B", 100]]);
});
