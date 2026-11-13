// Phase 2a: ตัวเลขชุดเดียว (ledger เต็ม) + กระเป๋า — ใช้ข้อมูลตัวอย่างที่ตรวจมือแล้ว
import test from "node:test";
import assert from "node:assert/strict";
import {
    displayBaht, shareOf, paidBy, memberMonthSummary, computeMonthLedger,
    computeMonthBalances, outstandingByMonth, walletMonth
} from "../lib/ledger.mjs";

const members = ["AOY", "BEN", "CAT"];
const tx = [
    // AOY จ่าย 300 หารสาม → BEN, CAT ค้าง AOY คนละ 100
    { id: "t1", date: "2026-11-02", payer: "AOY", amount: 300, splits: { AOY: 100, BEN: 100, CAT: 100 } },
    // BEN จ่าย 90 ให้ตัวเองกับ CAT ครึ่ง/ครึ่ง
    { id: "t2", date: "2026-11-05", payer: "ben", amount: 90, splits: { " ben ": 45, CAT: 45 } },
    // บิลไม่มี splits: AOY จ่ายเองคนเดียว
    { id: "t3", date: "2026-11-06", payer: "AOY", amount: 50 },
    // เดือนก่อน: CAT จ่าย 60 หาร AOY กับ CAT
    { id: "t4", date: "2026-10-10", payer: "CAT", amount: 60, splits: { AOY: 30, CAT: 30 } }
];
const stl = [
    { id: "s1", status: "verified", month: "2026-11", from: "BEN", to: "AOY", amount: 100 },
    { id: "s2", status: "pending", month: "2026-11", from: "CAT", to: "AOY", amount: 100 }
];

test("shareOf / paidBy: ชื่อไม่สนตัวพิมพ์/ช่องว่าง และบิลไม่มี splits = ผู้จ่ายรับเต็ม", () => {
    assert.equal(shareOf(tx[1], "BEN"), 4500);
    assert.equal(paidBy(tx[1], " Ben"), 9000);
    assert.equal(shareOf(tx[2], "AOY"), 5000);
    assert.equal(shareOf(tx[2], "BEN"), 0);
    assert.equal(paidBy(tx[0], "BEN"), 0);
});

test("computeMonthLedger: ยอดสุทธิรวมเป็นศูนย์ และ members ตรงกับ computeMonthBalances", () => {
    const l = computeMonthLedger({ memberNames: members, transactions: tx, settlements: stl, month: "2026-11" });
    assert.equal(Object.values(l.balances).reduce((a, b) => a + b, 0), 0);
    const direct = computeMonthBalances({ memberNames: members, transactions: tx, settlements: stl, month: "2026-11" });
    assert.deepEqual(l.balances, direct.balances);
    for (const m of l.members) assert.equal(m.balance, l.balances[m.name]);
});

test("ตัวเลขตรวจมือเดือน 2026-11 (สตางค์) และแผนโอน", () => {
    const l = computeMonthLedger({ memberNames: members, transactions: tx, settlements: stl, month: "2026-11" });
    // AOY: จ่าย 300 หักส่วนตัว 100 = +20000 แล้วรับโอนจาก BEN 100 → +10000 (บิลไม่มี splits ไม่กระทบ)
    assert.equal(l.balances.AOY, 10000);
    // BEN: ส่วน 100+45, จ่าย 90 → −5500 แล้วโอนให้ AOY 100 → +4500
    assert.equal(l.balances.BEN, 4500);
    // CAT: ส่วน 100+45 → −14500 (โอนที่ยัง pending ไม่นับ)
    assert.equal(l.balances.CAT, -14500);
    assert.deepEqual(l.plan.map((p) => [p.from, p.to, p.amountSatang]), [["CAT", "AOY", 10000], ["CAT", "BEN", 4500]]);
    assert.equal(l.members.find((m) => m.name === "CAT").displayBalance, -145);
});

test("displayBaht: ปัดบาท ต่ำกว่า 1 บาท = เคลียร์แล้ว", () => {
    assert.equal(displayBaht(4999), 50);
    assert.equal(displayBaht(99), 0);
    assert.equal(displayBaht(-99), 0);
    assert.equal(displayBaht(-14500), -145);
    assert.equal(displayBaht(undefined), 0);
});

test("memberMonthSummary: จ่าย/ส่วนตัว/โอนส่ง/โอนรับ", () => {
    const m = memberMonthSummary({ name: "aoy", transactions: tx, settlements: stl, month: "2026-11" });
    assert.deepEqual([m.paid, m.share, m.sent, m.received], [35000, 15000, 0, 10000]);
});

test("outstandingByMonth: แยกรายเดือน ไม่ยกยอด และไม่เอาเดือนที่เคลียร์ครบแล้ว", () => {
    const o = outstandingByMonth({ memberNames: members, transactions: tx, settlements: stl });
    assert.deepEqual(o.map((x) => x.month), ["2026-11", "2026-10"]);
    assert.deepEqual(o[1].plan.map((p) => [p.from, p.to, p.amountSatang]), [["AOY", "CAT", 3000]]);
    const cleared = outstandingByMonth({
        memberNames: members, transactions: [tx[3]],
        settlements: [{ status: "verified", month: "2026-10", from: "AOY", to: "CAT", amount: 30 }]
    });
    assert.equal(cleared.length, 0);
});

test("walletMonth: รายรับ/รายจ่ายส่วนตัว + ส่วนในกลุ่ม; เงินเพื่อนคืนไม่ใช่รายรับ; dedupKey นับครั้งเดียว", () => {
    const entries = [
        { ownerName: "AOY", type: "income", amount: 25000, date: "2026-11-01", dedupKey: "salary" },
        { ownerName: "AOY", type: "income", amount: 25000, date: "2026-11-01", dedupKey: "salary" }, // ซ้ำ
        { ownerName: "aoy", type: "expense", amount: 120.5, date: "2026-11-07" },
        { ownerName: "AOY", type: "expense", amount: 999, date: "2026-10-30" }, // เดือนอื่น
        { ownerName: "BEN", type: "income", amount: 77, date: "2026-11-03" }     // คนอื่น
    ];
    const w = walletMonth({ name: "AOY", month: "2026-11", walletEntries: entries, transactions: tx, settlements: stl });
    assert.equal(w.income, 2500000);
    assert.equal(w.personalExpense, 12050);
    assert.equal(w.groupShare, 15000);
    assert.equal(w.expenseTotal, 27050);
    assert.equal(w.net, 2500000 - 27050);
    assert.equal(w.receivedBack, 10000);
    assert.equal(w.paidBack, 0);
});

import { toDisplayPlan } from "../lib/ledger.mjs";
import fs from "node:fs";

test("toDisplayPlan: ปัดบาทเต็มต่อบรรทัด และตัดต่ำกว่า 1 บาท", () => {
    const p = toDisplayPlan([
        { from: "A", to: "B", amountSatang: 3334 },
        { from: "A", to: "C", amountSatang: 4550 },
        { from: "D", to: "B", amountSatang: 100 }
    ]);
    assert.deepEqual(p, [{ from: "A", to: "B", amount: 33 }, { from: "A", to: "C", amount: 46 }, { from: "D", to: "B", amount: 1 }]);
});

test("2b: ทุกหน้าใช้แกนคำนวณกลาง ไม่เหลือสูตรหนี้ที่เขียนเอง", () => {
    const read = (f) => fs.readFileSync(new URL("../" + f, import.meta.url), "utf8");
    for (const f of ["index.html", "admin-app.js"]) {
        const s = read(f);
        assert.match(s, /computeMonthLedger/, f);
        assert.match(s, /lib\/ledger\.mjs\?v=2/, f);
        assert.ok(!/balances\[[a-zA-Z]+\] \+= Number\(t\.amount\)/.test(s), `${f} ยังมีสูตรเดิม`);
    }
    assert.match(read("api/widget-summary.js"), /memberMonthSummary/);
    assert.ok(!/balance \+= /.test(read("api/widget-summary.js")));
    const hook = read("api/webhook.js");
    assert.match(hook, /buildMemberReportMessage\(/);
    assert.match(read("lib/line-report.mjs"), /computeMonthLedger\(\{/);
    assert.ok(!/balances\[payer\] \+= Number\(t\.amount\)/.test(hook));
    assert.match(read("admin.html"), /admin-app\.js\?v=4/);
});
