import test from "node:test";
import assert from "node:assert/strict";
import { parseQuickExpense, createQuickExpenseService, UNDO_WINDOW_MS } from "../lib/line-expense.mjs";
import { createFakeFirestore } from "./fake-firestore.mjs";

test("พิมพ์รายจ่ายสั้นๆ: ชื่อ + ยอด (มี/ไม่มี บาท ฿ ทศนิยม ลูกน้ำ)", () => {
    assert.deepEqual(parseQuickExpense("กาแฟ 65"), { desc: "กาแฟ", amount: 65 });
    assert.deepEqual(parseQuickExpense("ข้าวมันไก่ 50 บาท"), { desc: "ข้าวมันไก่", amount: 50 });
    assert.deepEqual(parseQuickExpense("Grab ฿120.50"), { desc: "Grab", amount: 120.5 });
    assert.deepEqual(parseQuickExpense("ค่าน้ำมัน 1,200"), { desc: "ค่าน้ำมัน", amount: 1200 });
    assert.deepEqual(parseQuickExpense("  กาแฟ   65  "), { desc: "กาแฟ", amount: 65 });
});

test("พิมพ์ยอดก่อนต้องมีคำว่า บาท กำกับ", () => {
    assert.deepEqual(parseQuickExpense("65 บาท กาแฟ"), { desc: "กาแฟ", amount: 65 });
    assert.equal(parseQuickExpense("5 นาทีนะ"), null);
    assert.equal(parseQuickExpense("65 กาแฟ"), null);
});

test("ไม่แน่ใจ = ไม่บันทึก (คืน null ให้ไปทางเดิมของบอท)", () => {
    for (const t of [
        "", "สวัสดี", "กาแฟ", "65", "กาแฟ 65 บาท หารกับ GAME", "ข้าว 300 หารสอง", "ยืมเกม 500", "คืนเงิน 200", "ให้เกม 300",
        "7-11 65", "ห้อง 3 ชั้น 5", "โทร 0812345678", "เงินเดือน 25000", "โบนัส 5,000 บาท", "รอ 5 นาที", "กาแฟ65",
        "https://x.com/a 65", "กาแฟ 0", "กาแฟ 600000", "กาแฟ -65", "ยกเลิก"
    ]) {
        assert.equal(parseQuickExpense(t), null, t);
    }
});

function setup() {
    const db = createFakeFirestore();
    const clock = { t: 1_700_000_000_000 };
    const svc = createQuickExpenseService({ db: {}, fs: db.fs, now: () => clock.t });
    return { db, clock, svc };
}

test("บันทึกลงกระเป๋าของคนที่พิมพ์ พร้อมหมวด และจำรายการล่าสุดไว้", async () => {
    const { db, svc } = setup();
    const r = await svc.save("U1", "GAME", { desc: "กาแฟ", amount: 65 });
    assert.equal(r.ok, true);
    const rows = db.all("wallet_entries");
    assert.equal(rows.length, 1);
    assert.equal(rows[0].ownerName, "GAME");
    assert.equal(rows[0].type, "expense");
    assert.equal(rows[0].amount, 65);
    assert.equal(rows[0].source, "line");
    assert.equal(rows[0].icon, "fa-mug-hot");
    assert.equal(db.all("line_last_entry")[0].id, r.id);
});

test("ลบรายการล่าสุด: ลบได้ภายใน 15 นาที แล้วลบซ้ำไม่ได้", async () => {
    const { db, clock, svc } = setup();
    await svc.save("U1", "GAME", { desc: "กาแฟ", amount: 65 });
    clock.t += 5 * 60 * 1000;
    const u = await svc.undo("U1");
    assert.deepEqual(u, { ok: true, desc: "กาแฟ", amount: 65 });
    assert.equal(db.count("wallet_entries"), 0);
    assert.deepEqual(await svc.undo("U1"), { ok: false, reason: "none" });
});

test("ลบรายการล่าสุด: เกิน 15 นาทีไม่ลบ ของคนอื่นไม่ถูกแตะ", async () => {
    const { db, clock, svc } = setup();
    await svc.save("U1", "GAME", { desc: "กาแฟ", amount: 65 });
    await svc.save("U2", "AOY", { desc: "ชานม", amount: 40 });
    clock.t += UNDO_WINDOW_MS + 1000;
    assert.deepEqual(await svc.undo("U1"), { ok: false, reason: "expired" });
    assert.equal(db.count("wallet_entries"), 2);
    // U2 ลบของตัวเองเท่านั้น (เกินเวลาเหมือนกัน แต่ทดสอบว่าไม่ลบของ U1)
    const fresh = await svc.save("U2", "AOY", { desc: "ข้าว", amount: 50 });
    const u = await svc.undo("U2");
    assert.equal(u.ok, true);
    assert.equal(db.has("wallet_entries", fresh.id), false);
    assert.equal(db.count("wallet_entries"), 2);
});
