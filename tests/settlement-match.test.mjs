import test from "node:test";
import assert from "node:assert/strict";
import { matchSlipToDebt } from "../lib/settlement-match.mjs";

const MEMBERS = ["GAME", "AOY", "TPALM"];
// พ.ย.: GAME จ่าย 900 หาร 3 → AOY ค้าง 300, TPALM ค้าง 300
const NOV = { id: "n1", date: "2026-11-10", payer: "GAME", amount: 900, splits: { GAME: 300, AOY: 300, TPALM: 300 } };
// ต.ค.: TPALM จ่าย 600 หาร 3 → AOY ค้าง 200, GAME ค้าง 200
const OCT = { id: "o1", date: "2026-10-05", payer: "TPALM", amount: 600, splits: { GAME: 200, AOY: 200, TPALM: 200 } };

const run = (over) => matchSlipToDebt({ memberNames: MEMBERS, transactions: [NOV], settlements: [], fromName: "AOY", amount: 300, ...over });

test("จ่ายครบพอดี → จับคู่ได้ ไม่ใช่บางส่วน บันทึกยอดค้างเต็ม", () => {
    const r = run();
    assert.equal(r.ok, true);
    assert.deepEqual([r.settlement.from, r.settlement.to, r.settlement.month, r.settlement.amount, r.settlement.partial], ["AOY", "GAME", "2026-11", 300, false]);
    assert.deepEqual(r.settlement.transactionIds, ["n1"]);
});

test("ยอดต่างไม่เกิน 1 บาท ยังนับว่าจ่ายครบ (เว็บแสดงเป็นบาทเต็ม)", () => {
    assert.equal(run({ amount: 299.5 }).settlement.partial, false);
    assert.equal(run({ amount: 300.9 }).settlement.partial, false);
});

test("จ่ายบางส่วน → ผ่าน บันทึกยอดในสลิป และบอกยอดที่เหลือ (ของเดิมจับคู่ไม่ได้)", () => {
    const r = run({ amount: 100 });
    assert.equal(r.ok, true);
    assert.equal(r.settlement.partial, true);
    assert.equal(r.settlement.amount, 100);
    assert.equal(r.settlement.remaining, 200);
});

test("จ่ายบางส่วนแล้วจ่ายที่เหลือ: ครั้งที่สองต้องเป็นยอดที่เหลือ และจ่ายครบเคลียร์เป็น 0", () => {
    const first = run({ amount: 100 }).settlement;
    const settlements = [{ status: "verified", month: first.month, from: first.from, to: first.to, amount: first.amount }];
    const second = run({ amount: 200, settlements });
    assert.equal(second.ok, true);
    assert.equal(second.settlement.partial, false);
    assert.equal(second.settlement.amount, 200);
    // เคลียร์ครบแล้วเหลือหนี้ 0
    const done = [...settlements, { status: "verified", month: "2026-11", from: "AOY", to: "GAME", amount: 200 }];
    assert.deepEqual(run({ amount: 50, settlements: done }), { ok: false, reason: "no_debt" });
});

test("ยอดเปลี่ยนหลังเคลียร์ไปแล้ว: บิลใหม่เพิ่มในเดือนที่เคยจ่ายแล้วก็ยังจับคู่ได้ (ของเดิมข้ามทั้งคู่)", () => {
    const paid = [{ status: "verified", month: "2026-11", from: "AOY", to: "GAME", amount: 300 }];
    const extra = { id: "n2", date: "2026-11-20", payer: "GAME", amount: 150, splits: { GAME: 50, AOY: 50, TPALM: 50 } };
    const r = matchSlipToDebt({ memberNames: MEMBERS, transactions: [NOV, extra], settlements: paid, fromName: "AOY", amount: 50 });
    assert.equal(r.ok, true);
    assert.equal(r.settlement.partial, false);
    assert.equal(r.settlement.amount, 50);
});

test("ยอดเกินที่ค้าง → ปฏิเสธ บอกยอดที่ค้างสูงสุด", () => {
    const r = run({ amount: 500 });
    assert.deepEqual(r, { ok: false, reason: "overpay", owed: 300 });
});

test("ไม่มีหนี้ค้าง (เจ้าหนี้ส่งสลิป) → no_debt", () => {
    assert.deepEqual(run({ fromName: "GAME" }), { ok: false, reason: "no_debt" });
});

test("หลายเดือนค้าง: จับคู่เดือนที่ยอดตรงก่อน และถ้าตรงทั้งคู่ใช้เดือนเก่าสุด", () => {
    const base = { memberNames: MEMBERS, transactions: [NOV, OCT], settlements: [], fromName: "AOY" };
    // AOY ค้าง ต.ค. 200 (ให้ TPALM) และ พ.ย. 300 (ให้ GAME)
    assert.equal(matchSlipToDebt({ ...base, amount: 200 }).settlement.month, "2026-10");
    assert.equal(matchSlipToDebt({ ...base, amount: 300 }).settlement.month, "2026-11");
});

test("ผู้รับในสลิปเลือกบรรทัดเจ้าหนี้ที่ถูกคน แม้ยอดเท่ากัน", () => {
    // ทั้ง GAME และ TPALM เป็นเจ้าหนี้ของ AOY ยอดเท่ากัน 100
    const txs = [
        { id: "a", date: "2026-11-01", payer: "GAME", amount: 200, splits: { GAME: 100, AOY: 100 } },
        { id: "b", date: "2026-11-02", payer: "TPALM", amount: 200, splits: { TPALM: 100, AOY: 100 } }
    ];
    const toTpalm = matchSlipToDebt({ memberNames: MEMBERS, transactions: txs, settlements: [], fromName: "AOY", amount: 100, receiverMatches: (to) => to === "TPALM" });
    assert.equal(toTpalm.settlement.to, "TPALM");
    const toGame = matchSlipToDebt({ memberNames: MEMBERS, transactions: txs, settlements: [], fromName: "AOY", amount: 100, receiverMatches: (to) => to === "GAME" });
    assert.equal(toGame.settlement.to, "GAME");
});

test("ไม่มีเจ้าหนี้ที่ชื่อตรงกับสลิปเลย → ยังคืนบรรทัดที่ยอดตรง (ให้ผู้เรียกแจ้งว่าชื่อไม่ตรง)", () => {
    const r = run({ receiverMatches: () => false });
    assert.equal(r.ok, true);
    assert.equal(r.settlement.to, "GAME");
});

test("ชื่อผู้โอนต่างตัวพิมพ์/มีช่องว่าง ยังหาเจอ", () => {
    assert.equal(run({ fromName: "  aoy " }).ok, true);
});
