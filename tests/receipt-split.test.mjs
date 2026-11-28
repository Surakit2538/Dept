// หารตามรายการสินค้า: คำนวณยอดต่อคน (lib/receipt-split.mjs), ทำความสะอาดคำตอบ AI (lib/gemini-receipt.mjs),
// action receipt-read (เฉพาะคนที่ผู้ดูแลเปิดให้) · ตัวอย่างจากใบเสร็จจริงที่เจ้าของส่งมา 28 พ.ย.
import test from "node:test";
import assert from "node:assert/strict";
import { computeItemSplit, cleanItems, unitsOf, convertItems, receiptForBill } from "../lib/receipt-split.mjs";
import { normalizeReceipt, createGeminiReceiptReader } from "../lib/gemini-receipt.mjs";
import { createShortcutHandler } from "../lib/shortcut-service.mjs";
import { createFakeFirestore, createFakeRes } from "./fake-firestore.mjs";

const sum = (o) => Object.values(o).reduce((a, v) => a + Math.round(v * 100), 0);

// หมูย่างเกาหลี: รายการรวม 2,574 ยอดจ่าย 2,604 (VAT 30.80 ปัดเศษ -0.80)
const BBQ = [
    { name: "Pro 30 Discount Adult", qty: 5, amount: 1895, units: { GAME: 1, CARE: 1, BEN: 1, AOY: 1, NUT: 1 } },
    { name: "Pro 30 Discount Child", qty: 1, amount: 239, units: { CARE: 1 } },
    { name: "Singha", qty: 4, amount: 440, units: { GAME: 2, BEN: 1, NUT: 1 } }
];

test("หมูย่างเกาหลี: แบ่งตามชิ้น + ส่วนต่าง 30 บาท หารเท่ากัน 5 คน", () => {
    const r = computeItemSplit({ items: BBQ, total: 2604, payer: "GAME" });
    assert.equal(r.ok, true);
    assert.deepEqual(r.splits, { GAME: 605, CARE: 624, BEN: 495, AOY: 385, NUT: 495 });
    assert.equal(r.extraSat, 3000);
    assert.equal(sum(r.splits), 260400);
    assert.deepEqual(r.parts.BEN.map((p) => [p.i, p.sat]), [[0, 37900], [2, 11000]], "BEN ได้ผู้ใหญ่ 1 ที่ + เบียร์ 1 ขวด");
});

test("ส่วนต่างหารไม่ลงตัว: เศษไปที่เพื่อนก่อน คนจ่ายท้ายสุด รวมเท่ายอดบิลเป๊ะ", () => {
    const r = computeItemSplit({ items: [{ name: "x", qty: 1, amount: 100, units: { GAME: 1, CARE: 1, BEN: 1 } }], total: 100.02, payer: "game" });
    assert.equal(sum(r.splits), 10002);
    assert.equal(r.splits.GAME, 33.33);
    assert.equal(r.extraOf.GAME, 0);
});

test("ส่วนลดท้ายบิล (ส่วนต่างติดลบ) หารเท่ากัน / ส่วนลดเกินยอด = แจ้งให้ตรวจ", () => {
    const r = computeItemSplit({ items: [{ name: "a", qty: 1, amount: 300, units: { GAME: 1 } }, { name: "b", qty: 1, amount: 100, units: { BEN: 1 } }], total: 360, payer: "GAME" });
    assert.deepEqual(r.splits, { GAME: 280, BEN: 80 });
    const bad = computeItemSplit({ items: [{ name: "a", qty: 1, amount: 300, units: { GAME: 1 } }, { name: "b", qty: 1, amount: 10, units: { BEN: 1 } }], total: 200, payer: "GAME" });
    assert.equal(bad.ok, false);
    assert.match(bad.error, /BEN/);
});

test("ต้องเลือกคนทุกรายการ และต้องมียอดบิล", () => {
    assert.match(computeItemSplit({ items: [{ name: "ชาไทย", qty: 1, amount: 45, units: {} }], total: 45 }).error, /ชาไทย/);
    assert.match(computeItemSplit({ items: [], total: 45 }).error, /ยังไม่มีรายการ/);
    assert.match(computeItemSplit({ items: BBQ, total: 0 }).error, /ยอดเต็ม/);
});

test("Makro เบียร์ 4 แพ็ก / ร้านเงินสด 2 ชิ้น / แซลมอนชั่งกิโล: แบ่งชิ้นได้เฉพาะจำนวนเต็ม", () => {
    assert.equal(unitsOf({ qty: 4 }), 4);
    assert.equal(unitsOf({ qty: 2 }), 2);
    assert.equal(unitsOf({ qty: 5.25 }), 1, "น้ำหนัก = 1 ส่วน ให้หารกัน");
    const makro = computeItemSplit({ items: [{ name: "เบียร์สิงห์ 490 มล x12", qty: 4, amount: 2404, units: { GAME: 3, BEN: 1 } }], total: 2404, payer: "GAME" });
    assert.deepEqual(makro.splits, { GAME: 1803, BEN: 601 });
    const salmon = computeItemSplit({ items: [{ name: "FRESH SALMON", qty: 5.25, amount: 2152.5, units: { GAME: 1, CARE: 1, BEN: 1 } }], total: 2152.5, payer: "GAME" });
    assert.equal(sum(salmon.splits), 215250);
    assert.equal(salmon.splits.GAME, 717.5);
});

test("ใบญี่ปุ่น (เยน): แปลงเป็นบาทตามยอดที่บัตรตัดจริง", () => {
    const yen = [{ name: "DCRTUS", qty: 1, amount: 3100 }, { name: "SD パウダー", qty: 1, amount: 680 }, { name: "アイブロウ", qty: 1, amount: 800 }, { name: "PT アイズ", qty: 1, amount: 980 }, { name: "Hydr", qty: 1, amount: 2400 }, { name: "ボディケア", qty: 1, amount: 570 }];
    const thb = convertItems(yen, 8530, 1987.45);
    assert.equal(thb[0].amount, 722.29);
    assert.equal(thb[1].amount, 158.44);
    const r = computeItemSplit({ items: thb.map((it, i) => ({ ...it, units: { [i < 3 ? "GAME" : "CARE"]: 1 } })), total: 1987.45, payer: "GAME" });
    assert.equal(sum(r.splits), 198745, "ปัดเศษจากการแปลงไปอยู่ในส่วนต่าง");
});

test("cleanItems / receiptForBill: ทิ้งบรรทัดว่าง ตัดชื่อยาว เก็บเฉพาะคนที่ได้ชิ้น", () => {
    assert.deepEqual(cleanItems([{ name: "  ข้าว  ผัด ", qty: "2", amount: "1,150.00" }, { name: "", amount: 5 }, { name: "x", amount: 0 }, null]), [{ name: "ข้าว ผัด", qty: 2, amount: 1150 }]);
    const r = receiptForBill({ items: [{ name: "a", qty: 2, amount: 10, units: { game: 1, ben: 0 } }], store: "ร้าน", cur: "JPY", foreignTotal: 100 });
    assert.deepEqual(r, { items: [{ name: "a", qty: 2, amount: 10, units: { GAME: 1 } }], store: "ร้าน", cur: "JPY", foreignTotal: 100 });
    assert.equal(receiptForBill({ items: [], cur: "THB", foreignTotal: 5 }).cur, undefined);
});

test("normalizeReceipt: คำตอบ AI แบบหมูย่าง / ไม่ใช่ใบเสร็จ / ไม่มี total ใช้ผลรวม", () => {
    const r = normalizeReceipt({ is_receipt: true, store: "Check # 10-080", currency: "thb", total: "2,604.00", items: [{ name: "Singha", qty: 4, amount: "440.00" }, { name: "VAT", amount: 0 }] });
    assert.deepEqual(r, { is_receipt: true, store: "Check # 10-080", currency: "THB", total: 2604, items: [{ name: "Singha", qty: 4, amount: 440 }] });
    assert.deepEqual(normalizeReceipt({ is_receipt: false }), { is_receipt: false });
    assert.deepEqual(normalizeReceipt({ is_receipt: true, items: [] }), { is_receipt: false });
    assert.equal(normalizeReceipt({ is_receipt: true, currency: "¥", items: [{ name: "a", amount: 10 }, { name: "b", amount: 5.5 }] }).total, 15.5);
    assert.equal(normalizeReceipt({ is_receipt: true, currency: "¥", items: [{ name: "a", amount: 10 }] }).currency, "THB");
});

test("ตัวอ่าน Gemini: ส่งรูปพร้อมคำสั่ง แล้วคืนรายการที่ทำความสะอาดแล้ว (ไม่ยิงเครือข่ายจริง)", async () => {
    const sent = [];
    const fetchFn = async (url, opt) => {
        sent.push(JSON.parse(opt.body));
        return { ok: true, json: async () => ({ candidates: [{ content: { parts: [{ text: '```json {"is_receipt":true,"currency":"JPY","total":8530,"items":[{"name":"DCRTUS","qty":1,"amount":3100}]} ```' }] } }] }) };
    };
    const r = await createGeminiReceiptReader({ apiKey: "k", fetchFn, models: ["m1"] })({ base64: "AAA" });
    assert.equal(r.currency, "JPY");
    assert.equal(r.items[0].amount, 3100);
    assert.equal(sent[0].contents[0].parts[1].inline_data.data, "AAA");
    assert.match(sent[0].contents[0].parts[0].text, /ห้ามใส่บรรทัด VAT/);
});

function setup({ allowed = true, reader = async () => normalizeReceipt({ is_receipt: true, total: 100, items: [{ name: "ข้าว", amount: 100 }] }) } = {}) {
    const db = createFakeFirestore();
    db.seed("members", "me", { name: "GAME", receiptScan: allowed });
    db.seed("members", "ben", { name: "BEN" });
    const calls = [];
    const handler = createShortcutHandler({
        db: {}, fs: db.fs,
        verifyDeviceToken: async (_db, req) => {
            const h = req.headers.authorization;
            if (h === "Bearer me") return { authenticated: true, memberId: "me", name: "GAME" };
            if (h === "Bearer ben") return { authenticated: true, memberId: "ben", name: "BEN" };
            return { authenticated: false, status: 401, message: "x" };
        },
        readReceiptImage: reader ? async (x) => { calls.push(x); return reader(x); } : null
    });
    const call = async (body, who = "me") => { const res = createFakeRes(); await handler({ method: "POST", headers: { authorization: "Bearer " + who }, body }, res); return res; };
    return { call, calls };
}

test("receipt-read: คนที่ผู้ดูแลเปิดให้อ่านได้ / คนอื่นถูกปฏิเสธและไม่เรียก AI", async () => {
    const { call, calls } = setup();
    const ok = await call({ action: "receipt-read", imageBase64: "AAA", mimeType: "image/jpeg" });
    assert.equal(ok.statusCode, 200);
    assert.equal(ok.body.receipt.items[0].name, "ข้าว");
    const no = await call({ action: "receipt-read", imageBase64: "AAA" }, "ben");
    assert.equal(no.statusCode, 403);
    assert.match(no.body.message, /ผู้ดูแลยังไม่ได้เปิด/);
    assert.equal(calls.length, 1);
});

test("receipt-read: ไม่มีรูป / ไม่ใช่ใบเสร็จ / AI ล่ม / ไม่ได้ตั้งค่า", async () => {
    assert.equal((await setup().call({ action: "receipt-read" })).statusCode, 400);
    const nr = await setup({ reader: async () => ({ is_receipt: false }) }).call({ action: "receipt-read", imageBase64: "A" });
    assert.equal(nr.body.status, "not_receipt");
    const down = await setup({ reader: async () => { throw new Error("HTTP 500"); } }).call({ action: "receipt-read", imageBase64: "A" });
    assert.equal(down.statusCode, 502);
    assert.equal((await setup({ reader: null }).call({ action: "receipt-read", imageBase64: "A" })).statusCode, 503);
});
