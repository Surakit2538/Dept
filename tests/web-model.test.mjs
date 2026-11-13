// เว็บใหม่ (web/src/model.js): ตัวเลขหน้าแรกต้องตรงกับแกนคำนวณกลาง
import test from "node:test";
import assert from "node:assert/strict";
import { buildHomeModel, categoryOf, shiftMonth, monthLabel, baht, daysInMonth } from "../web/src/model.js";

const members = ["GAME", "CARE", "AOY"];
const transactions = [
    { id: "t1", date: "2026-11-02", payer: "GAME", amount: 300, splits: { GAME: 100, CARE: 100, AOY: 100 }, icon: "fa-utensils", timestamp: 1 },
    { id: "t2", date: "2026-11-05", payer: "CARE", amount: 90, splits: { GAME: 45, CARE: 45 }, icon: "fa-car", timestamp: 2 },
    { id: "t3", date: "2026-10-30", payer: "GAME", amount: 50, splits: { GAME: 25, AOY: 25 }, icon: "fa-bolt", timestamp: 3 }
];
const settlements = [{ id: "s1", status: "verified", month: "2026-11", from: "AOY", to: "GAME", amount: 100 }];
const walletItems = [
    { id: "w1", type: "income", amount: 1000, date: "2026-11-01", desc: "เงินเดือน" },
    { id: "w2", type: "expense", amount: 40, date: "2026-11-13", desc: "กาแฟ", icon: "fa-mug-hot", timestamp: 9 }
];

test("buildHomeModel: ตัวเลขสุทธิ/ใช้ไป/หนี้ ตรงกับแกนคำนวณกลาง", () => {
    const m = buildHomeModel({ name: "game", month: "2026-11", today: "2026-11-13", members, transactions, settlements, walletItems });
    // ใช้ไป = ส่วนของฉันในกลุ่ม (100 + 45) + ส่วนตัว 40 = 185 ; รายรับ 1000 ; สุทธิ 815
    assert.equal(m.groupShareSat, 14500);
    assert.equal(m.personalSat, 4000);
    assert.equal(m.spentSat, 18500);
    assert.equal(m.incomeSat, 100000);
    assert.equal(m.netSat, 81500);
    assert.equal(m.net, 815);
    assert.equal(m.spentPercent, 19);
    // หนี้: GAME จ่าย 300 ส่วนตัว 100 → +200 ; จ่ายให้ CARE ใน t2 = -45 ; AOY โอนคืน 100 → GAME +200 -45 -100 = 55? คำนวณจากแกนกลาง
    const owed = Object.fromEntries(m.owedToMe.map((o) => [o.name, o.amount]));
    assert.equal(owed.CARE, 55);
    assert.equal(m.owedTotal, 55);
    assert.equal(m.owedToMe[0].share, 100);
    assert.deepEqual(m.iOwe, []);
});

test("buildHomeModel: หมวดและรายวัน", () => {
    const m = buildHomeModel({ name: "GAME", month: "2026-11", today: "2026-11-13", members, transactions, settlements, walletItems });
    const cats = Object.fromEntries(m.categories.map((c) => [c.key, c.satang]));
    assert.deepEqual(cats, { food: 10000 + 4000, travel: 4500 });
    assert.equal(m.categories.reduce((a, c) => a + c.percent, 0) >= 99, true);
    assert.equal(m.daily.length, 13);
    assert.equal(m.daily[12].today, true);
    assert.equal(m.daily[12].satang, 4000);
    assert.equal(m.daily[1].satang, 10000);
    assert.equal(m.average, Math.round(18500 / 13 / 100));
});

test("buildHomeModel: เดือนที่ผ่านมาแสดงครบทุกวัน และไม่มีรายรับ = ไม่คิดเปอร์เซ็นต์", () => {
    const m = buildHomeModel({ name: "GAME", month: "2026-10", today: "2026-11-13", members, transactions, settlements, walletItems: [] });
    assert.equal(m.daily.length, 31);
    assert.equal(m.spentPercent, null);
    assert.equal(m.spentSat, 2500);
});

test("ฉันค้างเพื่อน: อยู่ฝั่ง iOwe", () => {
    const m = buildHomeModel({ name: "CARE", month: "2026-11", today: "", members, transactions, settlements: [], walletItems: [] });
    assert.equal(m.iOwe[0].name, "GAME");
    assert.equal(m.owedToMe.length, 0);
});

test("รายการล่าสุด: รวมกลุ่ม ส่วนตัว รายรับ เรียงใหม่ไปเก่า", () => {
    const m = buildHomeModel({ name: "GAME", month: "2026-11", today: "2026-11-13", members, transactions, settlements, walletItems });
    assert.deepEqual(m.recent.map((r) => [r.kind, r.id]), [["personal", "w2"], ["group", "t2"], ["group", "t1"], ["income", "w1"]]);
});

test("ตัวช่วย: หมวด เดือน การแสดงเงิน", () => {
    assert.equal(categoryOf("fa-gas-pump"), "travel");
    assert.equal(categoryOf("fa-unknown"), "other");
    assert.equal(shiftMonth("2026-01", -1), "2025-12");
    assert.equal(shiftMonth("2026-12", 1), "2027-01");
    assert.equal(monthLabel("2026-11"), "พ.ย. 2569");
    assert.equal(daysInMonth("2026-02"), 28);
    assert.equal(baht(4063, { sign: true }), "+฿4,063");
    assert.equal(baht(-12.5, { decimals: 2 }), "-฿12.50");
});

import { buildMonthly, lastMonths, monthShort } from "../web/src/model.js";
test("buildMonthly / lastMonths: ใช้ไปและรายรับรายเดือน", () => {
    assert.deepEqual(lastMonths("2026-11", 3), ["2026-09", "2026-10", "2026-11"]);
    assert.deepEqual(lastMonths("2026-02", 3), ["2025-12", "2026-01", "2026-02"]);
    assert.equal(monthShort("2026-11"), "พ.ย.");
    const r = buildMonthly({ name: "GAME", months: ["2026-10", "2026-11"], transactions, settlements, walletItems });
    assert.deepEqual(r.map((x) => [x.month, x.spentSat, x.incomeSat]), [["2026-10", 2500, 0], ["2026-11", 18500, 100000]]);
});
