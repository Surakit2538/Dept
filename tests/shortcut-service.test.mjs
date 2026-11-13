import test from "node:test";
import assert from "node:assert/strict";
import { createShortcutHandler } from "../lib/shortcut-service.mjs";
import { createFakeFirestore, createFakeRes } from "./fake-firestore.mjs";

const SLIP = `K PLUS
โอนเงินสำเร็จ
10 พ.ย. 69 14:23 น.
ไปยัง
ร้าน ข้าวมันไก่ป้าแดง
จำนวน:
150.00 บาท
เลขที่รายการ:
016314142312345678`;

const SLIP_NO_REF = `โอนเงินสำเร็จ
10 พ.ย. 69 14:23 น.
ไปยัง ร้านกาแฟ
จำนวน 60.00 บาท`;

const SLIP_WEAK = `ไปยัง ร้านน้ำ
จำนวน 20.00 บาท`;

function setup({ time = 1_700_000_000_000, env = {} } = {}) {
    const db = createFakeFirestore();
    ["GAME 👾", "AOY", "TPALM", "PAJUNT"].forEach((n, i) => db.seed("members", "m" + i, { name: n }));
    db.seed("members", "dupGame", { name: "G A M E 👾" }); // ชื่อซ้ำที่มีอยู่จริงในระบบ (ต่างตัวพิมพ์/ช่องว่าง)
    db.seed("members", "me", { name: "G A M E 👾", lineUserId: "Uxx" });

    const clock = { t: time };
    const lineCalls = [];
    const verifyDeviceToken = async (_db, req) => {
        const h = req.headers.authorization;
        if (h === "Bearer good") return { authenticated: true, memberId: "me", name: "G A M E 👾" };
        return { authenticated: false, status: 401, message: "รหัสไม่ถูกต้อง กรุณาตั้งค่าใหม่จากเว็บ" };
    };
    const handler = createShortcutHandler({
        db: {}, fs: db.fs, verifyDeviceToken,
        env: { LINE_CHANNEL_ACCESS_TOKEN: "t", LINE_GROUP_ID: "g", ...env },
        fetchFn: async (url, opts) => { lineCalls.push({ url, body: JSON.parse(opts.body) }); return { ok: true }; },
        now: () => clock.t
    });
    const call = async (body, auth = "Bearer good", method = "POST") => {
        const res = createFakeRes();
        await handler({ method, headers: { authorization: auth }, body }, res);
        return res;
    };
    return { db, call, clock, lineCalls };
}

test("ไม่มีรหัส/รหัสผิด → 401 และมี message", async () => {
    const { call } = setup();
    const r = await call({ action: "parse", text: SLIP }, "Bearer bad");
    assert.equal(r.statusCode, 401);
    assert.equal(typeof r.body.message, "string");
});

test("GET ไม่รับ (405) และ action ไม่รู้จัก (400)", async () => {
    const { call } = setup();
    assert.equal((await call({}, "Bearer good", "GET")).statusCode, 405);
    assert.equal((await call({ action: "xxx" })).statusCode, 400);
});

test("parse สลิปปกติ → status ok, เก็บรายการรอบันทึกไว้", async () => {
    const { call, db } = setup();
    const r = await call({ action: "parse", text: SLIP });
    assert.equal(r.statusCode, 200);
    assert.equal(r.body.status, "ok");
    assert.match(r.body.message, /฿150\.00/);
    assert.match(r.body.message, /ข้าวมันไก่ป้าแดง/);
    assert.ok(db.has("pending_slips", "me"));
});

test("parse ไม่เจอยอด → no_amount บอกว่าอ่านได้อะไร และล้างรายการรอบันทึกเก่า", async () => {
    const { call, db } = setup();
    await call({ action: "parse", text: SLIP });
    const r = await call({ action: "parse", text: "รูปแมวน่ารัก" });
    assert.equal(r.body.status, "no_amount");
    assert.match(r.body.message, /รูปแมวน่ารัก/);
    assert.equal(db.has("pending_slips", "me"), false);
    const s = await call({ action: "save", splitType: "personal" });
    assert.equal(s.body.status, "no_pending");
    assert.equal(db.count("personal_expenses"), 0);
});

test("บันทึกส่วนตัว → personal_expenses เท่านั้น ไม่มี splits ไม่แตะ transactions ไม่แจ้ง LINE", async () => {
    const { call, db, lineCalls } = setup();
    await call({ action: "parse", text: SLIP });
    const r = await call({ action: "save", splitType: "personal" });
    assert.equal(r.body.status, "saved");
    assert.equal(r.body.success, true);
    assert.equal(db.count("transactions"), 0);
    const [p] = db.all("personal_expenses");
    assert.equal(p.payer, "G A M E 👾");
    assert.equal(p.amount, 150);
    assert.equal(p.splits, undefined);
    assert.equal(p.transRef, "016314142312345678");
    assert.equal(lineCalls.length, 0);
    assert.equal(db.has("pending_slips", "me"), false);
});

test("หารรวมตัวเอง (ติ๊กชื่อตัวเองด้วย) → ผลรวม splits = ยอด, ชื่อเป็นตัวพิมพ์ใหญ่, แจ้ง LINE", async () => {
    const { call, db, lineCalls } = setup();
    await call({ action: "parse", text: SLIP });
    const r = await call({ action: "save", splitType: "equal", splitWith: "⭐ G A M E 👾 (ฉัน)\naoy\nTPALM" });
    assert.equal(r.body.status, "saved");
    const [t] = db.all("transactions");
    assert.equal(t.payer, "G A M E 👾");
    assert.deepEqual(Object.keys(t.splits).sort(), ["AOY", "G A M E 👾", "TPALM"].sort());
    assert.equal(Math.round(Object.values(t.splits).reduce((a, b) => a + b, 0) * 100), 15000);
    assert.equal(t.splitMode, "equal");
    assert.equal(db.count("personal_expenses"), 0);
    assert.equal(lineCalls.length, 1);
    assert.match(lineCalls[0].body.messages[0].text, /หารกับ/);
});

test("จ่ายแทน (ไม่ติ๊กตัวเอง) → ไม่มีส่วนของผู้จ่ายใน splits", async () => {
    const { call, db, lineCalls } = setup();
    await call({ action: "parse", text: SLIP });
    const r = await call({ action: "save", splitType: "equal", splitWith: ["AOY", "TPALM"] });
    assert.equal(r.body.status, "saved");
    assert.match(r.body.message, /จ่ายแทน/);
    const [t] = db.all("transactions");
    assert.deepEqual(t.splits, { AOY: 75, TPALM: 75 });
    assert.equal(t.splitMode, "treat");
    assert.match(lineCalls[0].body.messages[0].text, /จ่ายแทน/);
});

test("เลือกแค่ตัวเอง/ไม่เลือกใคร → 400 และไม่บันทึก", async () => {
    const { call, db } = setup();
    await call({ action: "parse", text: SLIP });
    const a = await call({ action: "save", splitType: "equal", splitWith: "⭐ G A M E 👾 (ฉัน)" });
    assert.equal(a.statusCode, 400);
    const b = await call({ action: "save", splitType: "equal", splitWith: "" });
    assert.equal(b.statusCode, 400);
    assert.equal(db.count("transactions"), 0);
    assert.ok(db.has("pending_slips", "me")); // ยังลองใหม่ได้
});

test("ชื่อเพื่อนที่ไม่มีในระบบ → 400 บอกชื่อ", async () => {
    const { call, db } = setup();
    await call({ action: "parse", text: SLIP });
    const r = await call({ action: "save", splitType: "equal", splitWith: "AOY\nNOBODY" });
    assert.equal(r.statusCode, 400);
    assert.match(r.body.message, /NOBODY/);
    assert.equal(db.count("transactions"), 0);
});

test("splitType ผิด → 400", async () => {
    const { call } = setup();
    await call({ action: "parse", text: SLIP });
    assert.equal((await call({ action: "save", splitType: "weird" })).statusCode, 400);
});

test("สแกนสลิปเดิมซ้ำหลังบันทึกส่วนตัว (มีเลขอ้างอิง) → convert (เสนอให้เปลี่ยนเป็นหาร) ไม่ซ้ำซ้อน", async () => {
    const { call, db } = setup();
    await call({ action: "parse", text: SLIP });
    await call({ action: "save", splitType: "personal" });
    const r = await call({ action: "parse", text: SLIP });
    assert.equal(r.body.status, "convert");
    assert.match(r.body.message, /เปลี่ยนเป็นหารกับเพื่อน/);
    assert.equal(db.count("personal_expenses"), 1);
});

test("บันทึกซ้ำสองครั้งติดกัน → ครั้งที่สองไม่ซ้ำซ้อน", async () => {
    const { call, db } = setup();
    await call({ action: "parse", text: SLIP });
    await call({ action: "save", splitType: "personal" });
    const r = await call({ action: "save", splitType: "personal" });
    assert.equal(r.body.status, "no_pending");
    assert.equal(db.count("personal_expenses"), 1);
});

test("ไม่มีเลขอ้างอิงแต่มีวันเวลา (strong) → กันซ้ำได้แม้ผ่านไปนาน", async () => {
    const { call, clock } = setup();
    await call({ action: "parse", text: SLIP_NO_REF });
    await call({ action: "save", splitType: "personal" });
    clock.t += 3 * 60 * 60 * 1000;
    const r = await call({ action: "parse", text: SLIP_NO_REF });
    assert.equal(r.body.status, "convert");
});

test("ไม่มีเลขอ้างอิงและไม่มีเวลา (weak) → กันซ้ำแค่ 10 นาที", async () => {
    const { call, clock } = setup();
    await call({ action: "parse", text: SLIP_WEAK });
    await call({ action: "save", splitType: "personal" });
    clock.t += 5 * 60 * 1000;
    assert.equal((await call({ action: "parse", text: SLIP_WEAK })).body.status, "convert");
    clock.t += 6 * 60 * 1000; // รวม 11 นาที
    assert.equal((await call({ action: "parse", text: SLIP_WEAK })).body.status, "ok");
});

test("รายการรอบันทึกหมดอายุหลัง 30 นาที", async () => {
    const { call, clock, db } = setup();
    await call({ action: "parse", text: SLIP });
    clock.t += 31 * 60 * 1000;
    const r = await call({ action: "save", splitType: "personal" });
    assert.equal(r.body.status, "expired");
    assert.equal(db.count("personal_expenses"), 0);
});

test("ไม่ตั้งค่า LINE → บันทึกได้ปกติ ไม่พัง", async () => {
    const { call, db, lineCalls } = setup({ env: { LINE_CHANNEL_ACCESS_TOKEN: "", LINE_GROUP_ID: "" } });
    await call({ action: "parse", text: SLIP });
    const r = await call({ action: "save", splitType: "equal", splitWith: ["AOY"] });
    assert.equal(r.body.status, "saved");
    assert.equal(db.count("transactions"), 1);
    assert.equal(lineCalls.length, 0);
});

test("body เป็น string JSON ก็รับได้ (กรณีไม่มี Content-Type)", async () => {
    const { call } = setup();
    const r = await call(JSON.stringify({ action: "parse", text: SLIP }));
    assert.equal(r.body.status, "ok");
});

// ---------- โหมดอัตโนมัติ (action: auto) ----------
test("auto: แกะสลิปแล้วบันทึกส่วนตัวทันที ไม่ถามอะไร และไม่ค้างรายการรอบันทึก", async () => {
    const { call, db, lineCalls } = setup();
    const r = await call({ action: "auto", text: SLIP });
    assert.equal(r.statusCode, 200);
    assert.equal(r.body.status, "saved");
    assert.equal(r.body.success, true);
    assert.match(r.body.message, /บันทึกส่วนตัวแล้ว/);
    assert.equal(db.count("personal_expenses"), 1);
    assert.equal(db.count("transactions"), 0);
    assert.equal(db.has("pending_slips", "me"), false);
    assert.equal(lineCalls.length, 0);
    assert.equal(db.all("personal_expenses")[0].payer, "G A M E 👾");
});

test("auto: เรียกซ้ำกับสลิปเดิม → ไม่บันทึกซ้ำ และข้อความไม่มี '(กด ❌ ปิด เพื่อออก)'", async () => {
    const { call, db } = setup();
    await call({ action: "auto", text: SLIP });
    const r = await call({ action: "auto", text: SLIP });
    assert.equal(r.body.status, "duplicate");
    assert.equal(r.body.success, false);
    assert.equal(r.body.message, "", "สลิปซ้ำในโหมดอัตโนมัติต้องเงียบ");
    assert.equal(db.count("personal_expenses"), 1);
});

test("auto: รูป/ข้อความที่ไม่ใช่สลิป → ไม่บันทึก บอกสาเหตุ", async () => {
    const { call, db } = setup();
    const r = await call({ action: "auto", text: "รูปแมวน่ารัก" });
    assert.equal(r.body.status, "no_amount");
    assert.equal(r.body.message, "", "ไม่ใช่สลิปในโหมดอัตโนมัติต้องเงียบ");
    assert.equal(db.count("personal_expenses"), 0);
});

test("auto: ไม่มีรหัส → 401", async () => {
    const { call } = setup();
    assert.equal((await call({ action: "auto", text: SLIP }, "Bearer bad")).statusCode, 401);
});

// ---------- เปลี่ยนรายการส่วนตัว (จากระบบอัตโนมัติ) เป็นหารกับเพื่อน ----------
test("auto บันทึกส่วนตัวแล้ว → สแกนด้วยมือได้ 'convert' และเปลี่ยนเป็นหาร: ย้ายรายการ ไม่ซ้ำซ้อน", async () => {
    const { call, db } = setup();
    await call({ action: "auto", text: SLIP });
    assert.equal(db.count("personal_expenses"), 1);
    const originalDate = db.all("personal_expenses")[0].date;

    const p = await call({ action: "parse", text: SLIP });
    assert.equal(p.body.status, "convert");
    assert.match(p.body.message, /เปลี่ยนเป็นหารกับเพื่อน/);

    const s = await call({ action: "save", splitType: "equal", splitWith: ["AOY", "TPALM"] });
    assert.equal(s.body.status, "saved");
    assert.equal(db.count("personal_expenses"), 0, "รายการส่วนตัวเดิมต้องถูกย้ายออก");
    assert.equal(db.count("transactions"), 1);
    const t = db.all("transactions")[0];
    assert.equal(t.date, originalDate);
    assert.equal(t.amount, 150);
    assert.deepEqual(t.splits, { AOY: 75, TPALM: 75 });
    assert.equal(db.has("pending_slips", "me"), false);
});

test("convert แต่เลือก 'ส่วนตัว' → ไม่เปลี่ยนอะไร ไม่เพิ่มซ้ำ", async () => {
    const { call, db } = setup();
    await call({ action: "auto", text: SLIP });
    await call({ action: "parse", text: SLIP });
    const s = await call({ action: "save", splitType: "personal" });
    assert.equal(s.body.status, "saved");
    assert.equal(db.count("personal_expenses"), 1);
    assert.equal(db.count("transactions"), 0);
});

test("auto ซ้ำกับรายการส่วนตัวเดิม → เงียบ (message ว่าง) ไม่สร้างรายการใหม่", async () => {
    const { call, db } = setup();
    await call({ action: "auto", text: SLIP });
    const r = await call({ action: "auto", text: SLIP });
    assert.equal(r.body.status, "duplicate");
    assert.equal(r.body.message, "");
    assert.equal(db.count("personal_expenses"), 1);
    assert.equal(db.has("pending_slips", "me"), false);
});

test("สลิปที่หารไปแล้ว (อยู่ใน transactions) ยังเป็น duplicate ธรรมดา ไม่ใช่ convert", async () => {
    const { call } = setup();
    await call({ action: "parse", text: SLIP });
    await call({ action: "save", splitType: "equal", splitWith: ["AOY"] });
    const r = await call({ action: "parse", text: SLIP });
    assert.equal(r.body.status, "duplicate");
});

// ---------- ใช้วันที่ในสลิปเป็นวันที่บันทึก ----------
const NOV13 = Date.parse("2026-11-13T05:00:00Z");

test("บันทึกด้วยวันที่ในสลิป (ไม่ใช่วันนี้): สลิปวันที่ 10 พ.ย. 69 → 2026-11-10", async () => {
    const { call, db } = setup({ time: NOV13 });
    await call({ action: "auto", text: SLIP });
    assert.equal(db.all("personal_expenses")[0].date, "2026-11-10");
});

test("หารกับเพื่อน: รายการใน transactions ใช้วันที่ในสลิปด้วย", async () => {
    const { call, db } = setup({ time: NOV13 });
    await call({ action: "parse", text: SLIP });
    await call({ action: "save", splitType: "equal", splitWith: ["AOY"] });
    assert.equal(db.all("transactions")[0].date, "2026-11-10");
});

test("สลิปไม่มีวันที่ที่แปลงได้ → ใช้วันนี้ (ตามเวลาไทย)", async () => {
    const { call, db } = setup({ time: NOV13 });
    await call({ action: "auto", text: "ไปยัง ร้านน้ำ\nจำนวน 20.00 บาท" });
    assert.equal(db.all("personal_expenses")[0].date, "2026-11-13");
});
