// จ่ายจากบัญชี/บัตรไหน (เรื่อง 7 แบบ A): ติดป้าย cardId / account ในรายจ่ายส่วนตัว บัตรนับรายการที่เลือกเองเข้ารอบบิล
import test from "node:test";
import assert from "node:assert/strict";
import { PAY_ACCOUNTS, cleanPayFrom, payKeyOf, accountOf } from "../lib/pay-from.mjs";
import { buildWalletEntry } from "../lib/wallet-service.mjs";
import { cycleSpend, cardIdForItem } from "../lib/card-cycle.mjs";
import { createShortcutHandler } from "../lib/shortcut-service.mjs";
import { createWalletSubscriptionJob } from "../lib/subscriptions.mjs";
import { buildWalletModel } from "../web/src/model.js";
import { createFakeFirestore, createFakeRes } from "./fake-firestore.mjs";

const NOW = Date.parse("2026-11-24T03:00:00Z");

test("รายชื่อบัญชี: ไม่ซ้ำ มีเงินสด สีเป็นรหัสสี 6 หลัก", () => {
    assert.equal(new Set(PAY_ACCOUNTS.map((a) => a.key)).size, PAY_ACCOUNTS.length);
    assert.equal(accountOf("cash").label, "เงินสด");
    for (const a of PAY_ACCOUNTS) assert.ok(/^#[0-9a-f]{6}$/i.test(a.bg) && /^#[0-9a-f]{6}$/i.test(a.fg), a.key);
});

test("ตรวจค่า: บัตรหรือบัญชีอย่างใดอย่างหนึ่ง ค่าแปลกไม่รับ ไม่ส่งมา = ไม่แตะ", () => {
    assert.deepEqual(cleanPayFrom({}).fields, {});
    assert.deepEqual(cleanPayFrom({ account: "kbank" }).fields, { cardId: "", account: "kbank" });
    assert.deepEqual(cleanPayFrom({ cardId: "k1" }).fields, { cardId: "k1", account: "" });
    assert.deepEqual(cleanPayFrom({ cardId: "", account: "" }).fields, { cardId: "", account: "" }, "ล้างป้าย");
    assert.equal(cleanPayFrom({ account: "bitcoin" }).ok, false);
    assert.equal(cleanPayFrom({ cardId: "../x" }).ok, false);
    assert.equal(cleanPayFrom({ cardId: "k1", account: "cash" }).ok, false);
});

test("บันทึก: รายจ่ายเก็บป้าย รายรับไม่เก็บ ไม่เลือก = ไม่มีช่องนี้ (ข้อมูลเดิมไม่เปลี่ยน)", () => {
    const o = { ownerName: "GAME", nowMs: NOW };
    assert.equal(buildWalletEntry({ type: "expense", amount: 59, account: "kbank" }, o).entry.account, "kbank");
    assert.equal(buildWalletEntry({ type: "expense", amount: 59, cardId: "k1" }, o).entry.cardId, "k1");
    const plain = buildWalletEntry({ type: "expense", amount: 59 }, o).entry;
    assert.ok(!("cardId" in plain) && !("account" in plain));
    assert.ok(!("account" in buildWalletEntry({ type: "income", amount: 100, account: "kbank" }, o).entry));
    assert.equal(buildWalletEntry({ type: "expense", amount: 1, account: "x" }, o).ok, false);
});

test("บัตร: รายการที่เลือกเองนับเข้ารอบบิล รวมกับรายการจาก SMS / กุญแจกรองรวมเป็นบัตรใบเดียวกัน", () => {
    const cards = [{ id: "k1", bank: "KTC", last4: "4321" }];
    const items = [
        { type: "expense", date: "2026-11-10", amount: 259, cardId: "k1" },
        { type: "expense", date: "2026-11-11", amount: 100, card: "ktc-4321", bank: "KTC" },
        { type: "expense", date: "2026-11-12", amount: 65, account: "cash" }
    ];
    assert.equal(cycleSpend(cards[0], cards, items, "2026-11-01", "2026-11-30").amountSat, 35900);
    const key = (x) => payKeyOf(x, (it) => cardIdForItem(it, cards));
    assert.deepEqual(items.map(key), ["c:k1", "c:k1", "a:cash"]);
    assert.equal(payKeyOf({ card: "scb-1111" }), "s:scb-1111");
    assert.equal(payKeyOf({}), "");
});

test("หน้ารายการได้ป้ายไปด้วย (buildWalletModel ส่งต่อ cardId/account)", () => {
    const m = buildWalletModel({ name: "GAME", month: "2026-11", walletItems: [{ id: "w1", type: "expense", amount: 10, date: "2026-11-02", cardId: "k1" }, { id: "w2", type: "expense", amount: 5, date: "2026-11-03", account: "kbank" }], transactions: [], settlements: [] });
    const by = Object.fromEntries(m.items.map((x) => [x.id, x]));
    assert.equal(by.w1.cardId, "k1");
    assert.equal(by.w2.account, "kbank");
});

function setup() {
    const db = createFakeFirestore();
    db.seed("members", "me", { name: "GAME" });
    const h = createShortcutHandler({ db: {}, fs: db.fs, now: () => NOW, env: {}, verifyDeviceToken: async () => ({ authenticated: true, memberId: "me", name: "GAME" }) });
    const call = async (body) => { const res = createFakeRes(); await h({ method: "POST", headers: { authorization: "Bearer x" }, body }, res); return res; };
    return { db, call };
}

test("API: บันทึกพร้อมป้าย -> รายการได้ป้าย -> เปลี่ยนเป็นบัตร (ล้างบัญชี) -> ล้างป้าย / ทำซ้ำได้ป้ายทุกเดือน", async () => {
    const { db, call } = setup();
    let r = await call({ action: "wallet-add", type: "expense", amount: 259, desc: "ข้าวมันไก่", account: "kbank", date: "2026-11-24" });
    assert.equal(r.body.status, "saved");
    const id = r.body.id;
    let list = await call({ action: "wallet-list", month: "2026-11" });
    assert.equal(list.body.items.find((x) => x.id === id).account, "kbank");
    r = await call({ action: "wallet-update", id, cardId: "k1" });
    assert.equal(r.body.status, "saved");
    list = await call({ action: "wallet-list", month: "2026-11" });
    const it = list.body.items.find((x) => x.id === id);
    assert.deepEqual([it.cardId, it.account], ["k1", ""]);
    await call({ action: "wallet-update", id, cardId: "", account: "" });
    list = await call({ action: "wallet-list", month: "2026-11" });
    assert.deepEqual([list.body.items.find((x) => x.id === id).cardId, list.body.items.find((x) => x.id === id).account], ["", ""]);
    assert.equal((await call({ action: "wallet-update", id, account: "nope" })).statusCode, 400);

    r = await call({ action: "wallet-add", type: "expense", amount: 199, desc: "Netflix", account: "scb", recurring: true, every: 1, date: "2026-11-05" });
    assert.equal(db.all("wallet_templates")[0].account, "scb", "แม่แบบจำป้ายไว้");
});

test("รายจ่ายทำซ้ำ: รายการที่ระบบสร้างเดือนถัดไปได้ป้ายเดิม", async () => {
    const db = createFakeFirestore();
    db.seed("wallet_templates", "t1", { ownerName: "GAME", type: "expense", desc: "Netflix", amount: 199, billingDay: 5, icon: "fa-film", active: true, lastGeneratedMonth: "2026-11", account: "scb" });
    await createWalletSubscriptionJob({ db: {}, fs: db.fs, now: () => new Date("2026-12-01T03:00:00Z") })();
    const made = db.all("wallet_entries").find((x) => x.templateId === "t1");
    assert.equal(made.account, "scb");
});
