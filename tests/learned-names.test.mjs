// จำชื่อที่เจ้าของแก้: ครั้งหน้าบันทึกอัตโนมัติจากชื่อเดิม (สลิป/SMS บัตร) ได้ชื่อและหมวดที่แก้ไว้เอง
import test from "node:test";
import assert from "node:assert/strict";
import { createShortcutHandler } from "../lib/shortcut-service.mjs";
import { nameKey, lookupLearned, rememberName, learnedDocId, LEARNED_MAX } from "../lib/learned-names.mjs";
import { createFakeFirestore, createFakeRes } from "./fake-firestore.mjs";

function setup() {
    const db = createFakeFirestore();
    db.seed("members", "me", { name: "GAME" });
    db.seed("members", "aoy", { name: "AOY" });
    let t = Date.parse("2026-11-17T05:00:00Z");
    const handler = createShortcutHandler({
        db: {}, fs: db.fs,
        verifyDeviceToken: async (_db, req) => {
            const h = req.headers.authorization;
            if (h === "Bearer me") return { authenticated: true, memberId: "me", name: "GAME" };
            if (h === "Bearer aoy") return { authenticated: true, memberId: "aoy", name: "AOY" };
            return { authenticated: false, status: 401, message: "x" };
        },
        env: {}, fetchFn: async () => ({ ok: true }), now: () => (t += 1000)
    });
    const call = async (body, who = "me") => {
        const res = createFakeRes();
        await handler({ method: "POST", headers: { authorization: "Bearer " + who }, body }, res);
        return res;
    };
    return { db, call };
}

const slip = (amount, ref) => `K PLUS
โอนเงินสำเร็จ
17 พ.ย. 69 11:23 น.
ไปยัง
KSHER SHOP123
จำนวน:
${amount}.00 บาท
เลขที่รายการ:
${ref}`;

test("ตัวช่วย: กุญแจไม่สนตัวพิมพ์/ช่องว่าง แยกรายรับกับรายจ่าย, เก็บล่าสุดไว้หน้า ไม่เกินจำนวนที่กำหนด", () => {
    assert.equal(nameKey("expense", "  KSHER   Shop "), "expense:ksher shop");
    assert.equal(nameKey("expense", ""), "");
    let items = rememberName([], { type: "expense", from: "KSHER Shop", desc: "กาแฟอเมซอน", icon: "fa-mug-hot", at: 1 });
    assert.deepEqual(lookupLearned(items, "expense", "ksher  shop"), { desc: "กาแฟอเมซอน", icon: "fa-mug-hot" });
    assert.equal(lookupLearned(items, "income", "KSHER Shop"), null);
    items = rememberName(items, { type: "expense", from: "ksher shop", desc: "กาแฟ", icon: "bad icon", at: 2 });
    assert.equal(items.length, 1, "ชื่อเดิมแทนที่ ไม่ซ้ำ");
    assert.deepEqual(lookupLearned(items, "expense", "KSHER Shop"), { desc: "กาแฟ", icon: "" });
    for (let i = 0; i < LEARNED_MAX + 5; i++) items = rememberName(items, { type: "expense", from: "ร้าน " + i, desc: "x", at: i });
    assert.equal(items.length, LEARNED_MAX);
    assert.equal(learnedDocId("A/B"), "n_A_B");
});

test("สลิปอัตโนมัติ: แก้ชื่อ/หมวดครั้งเดียว ครั้งหน้าร้านเดิมได้ชื่อและหมวดนั้นเอง (ยังเป็นยังไม่ยืนยัน)", async () => {
    const { db, call } = setup();
    const first = await call({ action: "auto", text: slip(65, "016314142300000001") });
    assert.equal(first.body.status, "saved");
    const raw = first.body.desc;
    assert.ok(raw);
    const upd = await call({ action: "wallet-update", id: first.body.id, desc: "กาแฟอเมซอน", icon: "fa-mug-hot", confirm: true });
    assert.equal(upd.body.status, "saved");

    const second = await call({ action: "auto", text: slip(70, "016314142300000002") });
    assert.equal(second.body.desc, "กาแฟอเมซอน");
    const row = db.all("wallet_entries").find((x) => x.amount === 70);
    assert.equal(row.desc, "กาแฟอเมซอน");
    assert.equal(row.icon, "fa-mug-hot");
    assert.equal(row.autoDesc, raw, "เก็บชื่อเดิมไว้ เผื่อแก้อีก");
    assert.equal(row.unconfirmed, true);
});

test("SMS บัตร: ชื่อร้านที่เคยแก้ ใช้ชื่อที่แก้ และกันซ้ำยังเทียบกับชื่อร้านเดิม", async () => {
    const { db, call } = setup();
    const sms = "ขอบคุณที่ใช้บัตร KTC X-5703 ยอด 399 THB @Google YouTubePremiu";
    const a = await call({ action: "auto", text: sms });
    await call({ action: "wallet-update", id: a.body.id, desc: "YouTube Premium" });
    const again = await call({ action: "auto", text: sms });
    assert.equal(again.body.status, "ignored", "SMS เดิมภายใน 1 ชั่วโมงยังกันซ้ำได้");
    const other = await call({ action: "auto", text: "ขอบคุณที่ใช้บัตร KTC X-5703 ยอด 159 THB @Google YouTubePremiu" });
    assert.equal(other.body.desc, "YouTube Premium");
    assert.equal(db.all("wallet_entries").length, 2);
});

test("ยืนยันโดยไม่แก้อะไร ไม่จำ, ชื่อที่จำแยกตามเจ้าของ, รายการที่เพิ่มเองไม่จำ", async () => {
    const { db, call } = setup();
    const a = await call({ action: "auto", text: slip(65, "016314142300000003") });
    await call({ action: "wallet-update", id: a.body.id, desc: a.body.desc, confirm: true });
    assert.equal(db.all("wallet_names").length, 0, "ไม่ได้เปลี่ยน ไม่ต้องเขียน");

    await call({ action: "wallet-update", id: a.body.id, desc: "ของ GAME" });
    const aoy = await call({ action: "auto", text: slip(80, "016314142300000004") }, "aoy");
    assert.notEqual(aoy.body.desc, "ของ GAME", "คนอื่นไม่ได้ชื่อที่ GAME แก้");

    const manual = await call({ action: "wallet-add", type: "expense", amount: 50, desc: "ข้าว", date: "2026-11-17" });
    await call({ action: "wallet-update", id: manual.body.id, desc: "ข้าวเที่ยง" });
    const names = db.all("wallet_names");
    assert.equal(names.length, 1);
    assert.equal(names[0].items.length, 1);
});
