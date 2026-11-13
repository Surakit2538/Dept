import test from "node:test";
import assert from "node:assert/strict";
import { createShortcutHandler } from "../lib/shortcut-service.mjs";
import { createGeminiSlipReader, parseGeminiJson, normalizeGeminiSlip } from "../lib/gemini-slip.mjs";
import { createFakeFirestore, createFakeRes } from "./fake-firestore.mjs";

// ---------- ตัวอ่านคำตอบ Gemini ----------
test("parseGeminiJson: ตัดรั้วโค้ด ```json และข้อความแทรกได้", () => {
    assert.deepEqual(parseGeminiJson('```json\n{"is_slip": true, "amount": 10}\n```'), { is_slip: true, amount: 10 });
    assert.deepEqual(parseGeminiJson('นี่คือผลลัพธ์ {"a":1} จบ'), { a: 1 });
    assert.throws(() => parseGeminiJson("ไม่มี json"));
});

test("normalizeGeminiSlip: ไม่ใช่สลิป/ยอดไม่ถูกต้อง → amount 0", () => {
    assert.equal(normalizeGeminiSlip({ is_slip: false }).amount, 0);
    assert.equal(normalizeGeminiSlip(null).amount, 0);
    assert.equal(normalizeGeminiSlip({ is_slip: true, amount: null }).amount, 0);
    assert.equal(normalizeGeminiSlip({ is_slip: true, amount: -5 }).amount, 0);
});

test("normalizeGeminiSlip: ยอดเป็น string มีคอมมา, ธนาคาร, วันเวลา", () => {
    const r = normalizeGeminiSlip({ is_slip: true, amount: "1,250.50", bank: "K PLUS", payee: "ร้านA", transRef: "REF12345678", date: "2026-11-13", time: "9:05" });
    assert.equal(r.amount, 1250.5);
    assert.equal(r.bank, "KBANK");
    assert.equal(r.date, "2026-11-13");
    assert.equal(r.time, "09:05");
    assert.equal(normalizeGeminiSlip({ is_slip: true, amount: 5, date: "13/11/2026" }).date, "");
});

const geminiOk = (obj) => ({ ok: true, status: 200, json: async () => ({ candidates: [{ content: { parts: [{ text: JSON.stringify(obj) }] } }] }) });

test("createGeminiSlipReader: ส่งรูปและคีย์ถูกที่ และข้ามโมเดลที่ล้มเหลว", async () => {
    const calls = [];
    const fetchFn = async (url, opts) => {
        calls.push({ url, opts });
        if (calls.length === 1) return { ok: false, status: 404 };
        return geminiOk({ is_slip: true, amount: 150, bank: "SCB", payee: "ร้านB" });
    };
    const read = createGeminiSlipReader({ apiKey: "KEY", fetchFn, models: ["m1", "m2"] });
    const r = await read({ base64: "AAAA", mimeType: "image/jpeg" });
    assert.equal(r.amount, 150);
    assert.equal(r.bank, "SCB");
    assert.equal(calls.length, 2);
    assert.match(calls[1].url, /models\/m2:generateContent$/);
    assert.equal(calls[1].opts.headers["x-goog-api-key"], "KEY");
    assert.ok(!calls[1].url.includes("KEY"), "คีย์ต้องไม่อยู่ใน URL");
    assert.equal(JSON.parse(calls[1].opts.body).contents[0].parts[1].inline_data.data, "AAAA");
});

test("createGeminiSlipReader: ทุกโมเดลล้ม/ไม่มีคีย์ → throw", async () => {
    const fail = createGeminiSlipReader({ apiKey: "K", fetchFn: async () => ({ ok: false, status: 500 }), models: ["a", "b"] });
    await assert.rejects(() => fail({ base64: "x" }));
    const nokey = createGeminiSlipReader({ apiKey: "", fetchFn: async () => geminiOk({}) });
    await assert.rejects(() => nokey({ base64: "x" }), /GEMINI_API_KEY/);
});

// ---------- parse จากรูปในตัวบริการ ----------
function setup(readSlipImage) {
    const db = createFakeFirestore();
    db.seed("members", "m1", { name: "AOY" });
    db.seed("members", "me", { name: "G A M E 👾" });
    const handler = createShortcutHandler({
        db: {}, fs: db.fs,
        verifyDeviceToken: async () => ({ authenticated: true, memberId: "me", name: "G A M E 👾" }),
        readSlipImage, env: {}, fetchFn: async () => ({ ok: true }), now: () => 1_700_000_000_000
    });
    const call = async (body) => {
        const res = createFakeRes();
        await handler({ method: "POST", headers: { authorization: "Bearer x" }, body }, res);
        return res;
    };
    return { db, call };
}

const goodRead = async () => ({ amount: 150, bank: "KBANK", payee: "ร้านข้าว", transRef: "016314142312345678", date: "2026-11-13", time: "14:23" });

test("parse จากรูป → ok เก็บรายการรอบันทึก และบันทึกต่อได้", async () => {
    const { call, db } = setup(goodRead);
    const r = await call({ action: "parse", imageBase64: "AAAA", mimeType: "image/jpeg" });
    assert.equal(r.body.status, "ok");
    assert.match(r.body.message, /฿150\.00/);
    assert.ok(db.has("pending_slips", "me"));
    const s = await call({ action: "save", splitType: "personal" });
    assert.equal(s.body.status, "saved");
    assert.equal(db.all("personal_expenses")[0].transRef, "016314142312345678");
    // สแกนรูปเดิมอีก → ซ้ำ
    assert.equal((await call({ action: "parse", imageBase64: "AAAA" })).body.status, "duplicate");
});

test("รูปที่ไม่ใช่สลิป → no_amount (ไม่มีข้อความ OCR ให้ดู)", async () => {
    const { call } = setup(async () => ({ amount: 0 }));
    const r = await call({ action: "parse", imageBase64: "AAAA" });
    assert.equal(r.body.status, "no_amount");
    assert.doesNotMatch(r.body.message, /อ่านได้ว่า/);
});

test("AI ล้มเหลว → ocr_failed ข้อความเข้าใจง่าย และล้างรายการรอบันทึกเก่า", async () => {
    let fail = false;
    const { call, db } = setup(async () => { if (fail) throw new Error("boom"); return goodRead(); });
    await call({ action: "parse", imageBase64: "AAAA" });
    assert.ok(db.has("pending_slips", "me"));
    fail = true;
    const r = await call({ action: "parse", imageBase64: "BBBB" });
    assert.equal(r.body.status, "ocr_failed");
    assert.doesNotMatch(r.body.message, /boom/);
    assert.equal(db.has("pending_slips", "me"), false);
});

test("ไม่ได้ตั้งค่า AI → ocr_failed และรูปใหญ่เกิน → too_large", async () => {
    const a = setup(null);
    assert.equal((await a.call({ action: "parse", imageBase64: "AAAA" })).body.status, "ocr_failed");
    const b = setup(goodRead);
    assert.equal((await b.call({ action: "parse", imageBase64: "A".repeat(4_000_001) })).body.status, "too_large");
});

test("ยังรับแบบข้อความ (text) ได้เหมือนเดิมเมื่อมี AI", async () => {
    const { call } = setup(goodRead);
    const r = await call({ action: "parse", text: "ไปยัง ร้านกาแฟ\nจำนวน 60.00 บาท" });
    assert.equal(r.body.status, "ok");
    assert.match(r.body.message, /฿60\.00/);
});
