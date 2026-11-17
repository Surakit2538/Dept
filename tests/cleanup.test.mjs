import test from "node:test";
import assert from "node:assert/strict";
import { createCleanupJob, shiftMonth } from "../lib/cleanup.mjs";
import { createFakeFirestore } from "./fake-firestore.mjs";

const NOW = new Date("2026-12-01T02:00:00Z"); // 1 ธ.ค. 2569 (เวลาไทย 09:00)

function seeded() {
    const db = createFakeFirestore();
    const w = (id, month, extra = {}) => db.seed("wallet_entries", id, { ownerName: "GAME", payer: "GAME", type: "expense", amount: 10, date: `${month}-10`, month, ...extra });
    w("w-2025-10", "2025-10");
    w("w-2025-12", "2025-12");
    w("w-2026-01", "2026-01"); // ยังอยู่ในช่วง 12 เดือน
    w("w-2026-12", "2026-12");
    db.seed("personal_expenses", "p-2025-12", { payer: "GAME", amount: 5, date: "2025-12-03" });
    db.seed("personal_expenses", "p-2026-03", { payer: "GAME", amount: 5, date: "2026-03-03" });

    // 2025-12: เคลียร์ครบแล้ว -> ลบได้ (บิลผ่อนมีอีกงวดเดือน 2026-01 ต้องอยู่)
    db.seed("transactions", "t-2025-12", { date: "2025-12-05", payer: "GAME", amount: 300, splits: { GAME: 150, AOY: 150 }, groupId: "g1" });
    db.seed("transactions", "t-2026-01-g1", { date: "2026-01-05", payer: "GAME", amount: 300, splits: { GAME: 150, AOY: 150 }, groupId: "g1" });
    db.seed("settlements", "s-2025-12", { status: "verified", month: "2025-12", from: "AOY", to: "GAME", amount: 150 });
    // 2025-11: ยังมีหนี้ค้าง -> ต้องเก็บไว้
    db.seed("transactions", "t-2025-11", { date: "2025-11-05", payer: "GAME", amount: 200, splits: { GAME: 100, AOY: 100 } });
    // 2026-02: ใหม่ ต้องอยู่
    db.seed("transactions", "t-2026-02", { date: "2026-02-05", payer: "AOY", amount: 100, splits: { GAME: 50, AOY: 50 } });

    db.seed("pending_slips", "old", { expiresAt: NOW.getTime() - 1000, amount: 1 });
    db.seed("pending_slips", "fresh", { expiresAt: NOW.getTime() + 600000, amount: 2 });
    return db;
}

test("shiftMonth", () => {
    assert.equal(shiftMonth("2026-12", -12), "2025-12");
    assert.equal(shiftMonth("2026-01", -1), "2025-12");
    assert.equal(shiftMonth("2025-12", 1), "2026-01");
});

test("ล้างข้อมูลเก่า: ลบเดือนที่เก่ากว่า 12 เดือน เก็บเดือนที่ยังมีหนี้ค้างและเดือนที่ยังอยู่ในช่วง", async () => {
    const db = seeded();
    const run = createCleanupJob({ db: {}, fs: db.fs, now: () => NOW });
    const r = await run();
    assert.equal(r.keepMonths, 12);
    // กระเป๋าส่วนตัว
    assert.equal(db.has("wallet_entries", "w-2025-10"), false);
    assert.equal(db.has("wallet_entries", "w-2025-12"), false);
    assert.equal(db.has("wallet_entries", "w-2026-01"), true);
    assert.equal(db.has("wallet_entries", "w-2026-12"), true);
    assert.equal(db.has("personal_expenses", "p-2025-12"), false);
    assert.equal(db.has("personal_expenses", "p-2026-03"), true);
    // บิลกลุ่ม: 2025-12 เคลียร์ครบ ลบ (เฉพาะที่ลงวันที่เดือนนั้น), 2025-11 ค้างอยู่ เก็บไว้
    assert.equal(db.has("transactions", "t-2025-12"), false);
    assert.equal(db.has("settlements", "s-2025-12"), false);
    assert.equal(db.has("transactions", "t-2026-01-g1"), true, "งวดอื่นของบิลผ่อนต้องไม่ถูกลบ");
    assert.equal(db.has("transactions", "t-2025-11"), true, "หนี้ยังไม่เคลียร์ ต้องเก็บไว้");
    assert.equal(db.has("transactions", "t-2026-02"), true);
    const nov = r.months.find((m) => m.month === "2025-11");
    assert.equal(nov.groupSkipped, true);
    const dec = r.months.find((m) => m.month === "2025-12");
    assert.deepEqual([dec.wallet, dec.personal, dec.bills, dec.settlements], [1, 1, 1, 1]);
    // สลิปรอบันทึก
    assert.equal(db.has("pending_slips", "old"), false);
    assert.equal(db.has("pending_slips", "fresh"), true);
    assert.equal(r.expiredSlips, 1);
});

test("ล้างข้อมูลเก่า: รันซ้ำได้ ไม่ลบเพิ่ม และอ่านน้อย", async () => {
    const db = seeded();
    const run = createCleanupJob({ db: {}, fs: db.fs, now: () => NOW });
    await run();
    const before = db.count("wallet_entries") + db.count("transactions") + db.count("settlements");
    db.resetReads();
    const again = await run();
    assert.equal(db.count("wallet_entries") + db.count("transactions") + db.count("settlements"), before);
    assert.ok(again.months.every((m) => m.wallet === 0 && m.bills === 0 && m.settlements === 0 && m.personal === 0 || m.groupSkipped));
    assert.ok(db.reads() < 10, "อ่านไป " + db.reads());
});

test("ล้างข้อมูลเก่า: dryRun นับให้ดูเฉยๆ ไม่ลบจริง", async () => {
    const db = seeded();
    const run = createCleanupJob({ db: {}, fs: db.fs, now: () => NOW, dryRun: true });
    const r = await run();
    assert.equal(r.dryRun, true);
    assert.equal(db.has("wallet_entries", "w-2025-12"), true);
    assert.equal(db.has("transactions", "t-2025-12"), true);
    assert.equal(db.has("pending_slips", "old"), true);
    assert.equal(r.months.find((m) => m.month === "2025-12").wallet, 1);
});

test("ล้างข้อมูลเก่า: ตั้งเก็บน้อยกว่า 6 เดือนไม่ได้ (กันตั้งค่าผิด)", async () => {
    const db = seeded();
    const row = (month) => ({ ownerName: "GAME", payer: "GAME", type: "expense", amount: 1, date: month + "-01", month });
    db.seed("wallet_entries", "w-2026-09", row("2026-09")); // ถ้าเก็บแค่ 1 เดือนจะถูกลบ แต่ขั้นต่ำคือ 6 เดือน (ก.ค.-ธ.ค.)
    db.seed("wallet_entries", "w-2026-06", row("2026-06")); // เก่ากว่า 6 เดือน ถูกลบ
    const run = createCleanupJob({ db: {}, fs: db.fs, now: () => NOW, keepMonths: 1 });
    const r = await run();
    assert.equal(r.keepMonths, 6);
    assert.equal(db.has("wallet_entries", "w-2026-09"), true);
    assert.equal(db.has("wallet_entries", "w-2026-06"), false);
});
