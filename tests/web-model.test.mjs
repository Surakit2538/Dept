// เว็บใหม่ (web/src/model.js): ตัวเลขหน้าแรกต้องตรงกับแกนคำนวณกลาง
import test from "node:test";
import assert from "node:assert/strict";
import { buildHomeModel, categoryOf, CATEGORIES, shiftMonth, monthLabel, baht, daysInMonth } from "../web/src/model.js";

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
    assert.equal(categoryOf("fa-film"), "fun");
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

import { buildClearModel, buildWalletModel, buildBillsModel, maskPromptpay, validPromptpay, promptpayQrUrl } from "../web/src/model.js";
test("buildClearModel: เรียงรายการของฉันก่อน และมีประวัติ", () => {
    const m = buildClearModel({ name: "CARE", month: "2026-11", members, transactions, settlements: [] });
    assert.equal(m.lines[0].role, "pay");
    assert.equal(m.lines[0].from, "CARE");
    assert.equal(m.mineToPay.length, 1);
    const g = buildClearModel({ name: "GAME", month: "2026-11", members, transactions, settlements: [] });
    assert.equal(g.mineToReceive.length >= 1, true);
    assert.equal(buildClearModel({ name: "GAME", month: "2026-11", members, transactions, settlements }).history.length, 1);
    assert.equal(buildClearModel({ name: "GAME", month: "2026-09", members, transactions: [], settlements: [] }).cleared, true);
});
test("buildWalletModel: สรุปกระเป๋า + รายการเรียงใหม่ไปเก่า", () => {
    const w = buildWalletModel({ name: "GAME", month: "2026-11", walletItems, transactions, settlements });
    assert.equal(w.netSat, 81500);
    assert.deepEqual(w.items.map((i) => i.id), ["w2", "w1"]);
    assert.equal(w.receivedBackSat, 10000);
});
test("buildBillsModel: ค้นหา และส่วนของฉัน", () => {
    const b = buildBillsModel({ name: "GAME", month: "2026-11", transactions });
    assert.equal(b.all.length, 2);
    assert.equal(b.myShareSat, 14500);
    assert.equal(buildBillsModel({ name: "GAME", month: "2026-11", transactions, search: "t" }).all.length, 0);
    assert.equal(buildBillsModel({ name: "AOY", month: "2026-11", transactions }).mine.length, 1);
});
test("พร้อมเพย์: ตรวจรูปแบบ ปิดบางส่วน และสร้างลิงก์ QR", () => {
    assert.equal(maskPromptpay("081-234-5678"), "081234XXXX");
    assert.equal(validPromptpay("081 234 5678"), "0812345678");
    assert.equal(validPromptpay("12345"), "");
    assert.equal(promptpayQrUrl("0812345678", 500.5), "https://promptpay.io/0812345678/500.50");
    assert.equal(promptpayQrUrl("123", 5), "");
    assert.equal(promptpayQrUrl("0812345678", 0), "");
    assert.equal(maskPromptpay("1234567890123"), "X-XXXX-XXXXX-23-X");
});

import { buildBill, equalSplit, guessBillIcon, BILL_ICONS } from "../web/src/model.js";
const sat = (o) => Object.values(o).reduce((a, v) => a + Math.round(v * 100), 0);
test("equalSplit: ผลรวมเท่ายอดเต็มเป๊ะ เศษตกคนแรกๆ", () => {
    const s = equalSplit(100, ["A", "B", "C"]);
    assert.equal(sat(s), 10000);
    assert.deepEqual(Object.values(s), [33.34, 33.33, 33.33]);
});
test("buildBill: หารเท่ากัน (รวมผู้จ่าย) และจ่ายแทน", () => {
    const b = buildBill({ amount: 100, desc: " กินข้าว ", payer: "game", participants: ["GAME", "CARE", "AOY"], date: "2026-11-10", today: "2026-11-14", icon: "fa-utensils", now: 5 });
    assert.equal(b.ok, true);
    assert.equal(b.docs.length, 1);
    assert.equal(b.docs[0].payer, "GAME");
    assert.equal(sat(b.docs[0].splits), 10000);
    assert.equal(b.docs[0].desc, "กินข้าว");
    assert.equal(b.docs[0].splits.GAME, 33.33); // ผู้จ่ายท้ายสุด เศษตกเพื่อน
    assert.match(b.summary, /รวมผู้จ่าย/);
    const treat = buildBill({ amount: 90, payer: "GAME", participants: ["CARE", "AOY"], date: "2026-11-10", today: "2026-11-14" });
    assert.equal(treat.docs[0].splits.GAME, undefined);
    assert.match(treat.summary, /จ่ายแทน/);
});
test("buildBill: กำหนดเอง ต้องรวมเท่ายอดบิล", () => {
    const ok = buildBill({ amount: 100, payer: "GAME", participants: ["GAME", "CARE"], mode: "custom", custom: { GAME: 30, CARE: 70 }, date: "2026-11-10" });
    assert.equal(ok.ok, true);
    const bad = buildBill({ amount: 100, payer: "GAME", participants: ["GAME", "CARE"], mode: "custom", custom: { GAME: 30, CARE: 60 }, date: "2026-11-10" });
    assert.equal(bad.ok, false);
    assert.match(bad.error, /ขาด/);
    assert.equal(buildBill({ amount: 100, payer: "GAME", participants: ["GAME", "CARE"], mode: "custom", custom: { GAME: 100, CARE: 0 }, date: "2026-11-10" }).ok, false);
});
test("buildBill: ผ่อนชำระ (วันที่ไม่ล้นเดือน ยอดรวมเท่าเดิม) และรายเดือน", () => {
    const b = buildBill({ amount: 100, payer: "GAME", participants: ["GAME", "CARE"], type: "installment", installments: 3, date: "2026-01-31", now: 9 });
    assert.equal(b.docs.length, 3);
    assert.deepEqual(b.docs.map((d) => d.date), ["2026-01-31", "2026-02-28", "2026-03-31"]);
    assert.equal(b.docs.reduce((a, d) => a + Math.round(d.amount * 100), 0), 10000);
    assert.ok(b.docs.every((d) => sat(d.splits) === Math.round(d.amount * 100)));
    assert.equal(b.docs[0].desc, "ไม่ระบุ (1/3)");
    const s = buildBill({ amount: 400, desc: "Netflix", payer: "GAME", participants: ["GAME", "CARE"], type: "subscription", date: "2026-11-15", now: 7 });
    assert.equal(s.docs.length, 1);
    assert.equal(s.template.billingDay, 15);
    assert.equal(s.template.lastGeneratedMonth, "2026-11");
    assert.equal(s.template.groupId, s.docs[0].groupId);
    assert.equal(buildBill({ amount: 400, payer: "GAME", participants: ["GAME", "CARE"], type: "subscription", recurring: false, date: "2026-11-15" }).template, null);
});
test("buildBill: ตรวจค่าผิด", () => {
    const base = { amount: 100, payer: "GAME", participants: ["GAME", "CARE"], date: "2026-11-10", today: "2026-11-14" };
    assert.equal(buildBill({ ...base, amount: 0 }).ok, false);
    assert.equal(buildBill({ ...base, participants: [] }).ok, false);
    assert.equal(buildBill({ ...base, participants: ["GAME"] }).ok, false);
    assert.equal(buildBill({ ...base, date: "2026-12-01" }).ok, false);
    assert.equal(buildBill({ ...base, type: "installment", installments: 1000 }).ok, false);
    assert.equal(buildBill({ ...base, payer: "" }).ok, false);
});
test("guessBillIcon / BILL_ICONS", () => {
    assert.equal(guessBillIcon("ก๋วยเตี๋ยวเรือ"), "food");
    assert.equal(guessBillIcon("ค่าไฟเดือนนี้"), "bills");
    assert.equal(guessBillIcon("เติมน้ำมัน"), "travel");
    assert.equal(guessBillIcon("xyz"), "other");
    assert.equal(guessBillIcon(""), "other");
    assert.equal(guessBillIcon("กาแฟร้านประจำ"), "drink");
    assert.equal(guessBillIcon("ค่าเช่าห้อง"), "rent");
    assert.equal(guessBillIcon("ดูหนังกัน"), "fun");
    assert.equal(guessBillIcon("ซื้อยาแก้หวัด"), "health");
    assert.equal(guessBillIcon("ตั๋วเครื่องบินไปเชียงใหม่"), "trip");
    assert.equal(guessBillIcon("ของขวัญวันเกิดเพื่อน"), "gift");
    assert.equal(guessBillIcon("อาหารแมว"), "pet");
    assert.equal(guessBillIcon("Netflix"), "bills");
    assert.equal(guessBillIcon("ผ่อน CIVIC"), "travel");
    assert.equal(guessBillIcon("Claude"), "bills");
    assert.equal(guessBillIcon("APPLE Icloud"), "bills");
    assert.equal(guessBillIcon("AIS"), "bills");
    assert.equal(guessBillIcon("ตัดผม"), "goods");
    assert.ok(BILL_ICONS.every((i) => i.fa.startsWith("fa-")));
});

import { suggestPeople } from "../web/src/model.js";
test("BILL_ICONS: ครบ 12 หมวด ไม่ซ้ำ และทุกหมวดเดาได้ถูก key", () => {
    assert.equal(BILL_ICONS.length, 12);
    assert.equal(new Set(BILL_ICONS.map((i) => i.key)).size, 12);
    assert.equal(new Set(BILL_ICONS.map((i) => i.fa)).size, 12);
    assert.equal(BILL_ICONS[BILL_ICONS.length - 1].key, "other");
    for (const i of BILL_ICONS) assert.ok(i.label && i.icon);
});
test("suggestPeople: เรียงตามที่หารด้วยบ่อย ตัดตัวเอง คนนอกกลุ่ม และคนที่ไม่เคยหารด้วย", () => {
    const members = ["GAME", "CARE", "AOY", "BEN", "ZED"];
    const t = (payer, ...p) => ({ payer, splits: Object.fromEntries(p.map((x) => [x, 1])) });
    const txs = [t("GAME", "GAME", "CARE"), t("GAME", "GAME", "CARE", "AOY"), t("CARE", "CARE", "GAME"), t("BEN", "BEN", "AOY"), t("GAME", "GAME", "GHOST")];
    assert.deepEqual(suggestPeople({ me: "game", members, transactions: txs }), ["CARE", "AOY"]);
    assert.deepEqual(suggestPeople({ me: "GAME", members, transactions: txs, limit: 1 }), ["CARE"]);
    assert.deepEqual(suggestPeople({ me: "GAME", members, transactions: [] }), []);
});

test("หน้าแรก: ทุกกลุ่มหมวดมีไอคอนของตัวเอง (บันเทิงไม่ใช่จุดสามจุดเหมือนอื่นๆ)", async () => {
    const fs = await import("node:fs");
    const src = fs.readFileSync(new URL("../web/src/pages/HomePage.jsx", import.meta.url), "utf8");
    const m = /const CAT_ICON = (\{[^}]*\});/.exec(src);
    assert.ok(m, "ไม่พบ CAT_ICON");
    const map = Function("return " + m[1])();
    for (const c of CATEGORIES) assert.ok(map[c.key], "ไม่มีไอคอนของหมวด " + c.key);
    assert.equal(map.fun, "film");
});

test("กระเป๋า: ส่งป้ายยังไม่ยืนยันและบัตรต่อไปให้หน้าเว็บ", () => {
    const m = buildWalletModel({ name: "GAME", month: "2026-11", walletItems: [
        { id: "a", type: "expense", amount: 175, date: "2026-11-17", desc: "LINE MAN", card: "ttb-0518", unconfirmed: true },
        { id: "b", type: "expense", amount: 50, date: "2026-11-16", desc: "ข้าว" }
    ], transactions: [], settlements: [] });
    assert.equal(m.items.find((x) => x.id === "a").unconfirmed, true);
    assert.equal(m.items.find((x) => x.id === "a").card, "ttb-0518");
    assert.equal(m.items.find((x) => x.id === "b").unconfirmed, false);
});
