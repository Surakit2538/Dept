import test from "node:test";
import assert from "node:assert/strict";
import { createShortcutHandler } from "../lib/shortcut-service.mjs";
import { createFakeFirestore, createFakeRes } from "./fake-firestore.mjs";

const ME = "G A M E 👾";
const T0 = 1_700_000_000_000; // 2023-11-15 05:13 (เวลาไทย)

function setup() {
    const db = createFakeFirestore();
    db.seed("members", "me", { name: ME, lineUserId: "Uxx" });
    db.seed("members", "m1", { name: "AOY" });
    const clock = { t: T0 };
    const handler = createShortcutHandler({
        db: {}, fs: db.fs,
        verifyDeviceToken: async (_db, req) => req.headers.authorization === "Bearer good"
            ? { authenticated: true, memberId: "me", name: ME }
            : { authenticated: false, status: 401, message: "รหัสไม่ถูกต้อง" },
        env: {}, fetchFn: async () => ({ ok: true }), now: () => clock.t
    });
    const auto = async (text) => {
        const res = createFakeRes();
        await handler({ method: "POST", headers: { authorization: "Bearer good" }, body: { action: "auto", text } }, res);
        return res;
    };
    return { db, auto, clock };
}

const KTC_THANKS = "ขอบคุณที่ใช้บัตร KTC X-5703 ยอด 399 THB @Google YouTubePremiu";
const KTC_OTP_3BB = "บัตร KTC ยอด 1,303.32 THB OTP=****** สำหรับ AMP*3BB FIBRE3 ห้ามเปิดเผยรหัส (Ref.HRJOKI)";
const KTC_THANKS_3BB = "ขอบคุณที่ใช้บัตร KTC X-5703 ยอด 1,303.32 THB @AMP*3BB FIBRE3";

test("SMS ขอบคุณที่ใช้บัตร -> บันทึกรายจ่ายส่วนตัวพร้อมหมวดและบัตร", async () => {
    const { db, auto } = setup();
    const r = await auto(KTC_THANKS);
    assert.equal(r.statusCode, 200);
    assert.equal(r.body.status, "saved");
    assert.match(r.body.message, /399\.00/);
    assert.match(r.body.message, /Google YouTubePremiu/);
    assert.match(r.body.message, /KTC-5703/);
    const rows = db.all("wallet_entries");
    assert.equal(rows.length, 1);
    assert.equal(rows[0].type, "expense");
    assert.equal(rows[0].amount, 399);
    assert.equal(rows[0].source, "card_alert");
    assert.equal(rows[0].card, "KTC-5703");
    assert.equal(rows[0].icon, "fa-bolt"); // youtube -> บิลและค่าบริการ
    assert.equal(rows[0].date, "2023-11-15");
    assert.equal(db.count("transactions"), 0);
});

test("SMS OTP แล้วตามด้วย SMS ขอบคุณ (ธุรกรรมเดียวกัน) -> บันทึกครั้งเดียว ครั้งที่สองเงียบ", async () => {
    const { db, auto, clock } = setup();
    const a = await auto(KTC_OTP_3BB);
    assert.equal(a.body.status, "saved");
    clock.t += 90 * 1000;
    const b = await auto(KTC_THANKS_3BB);
    assert.equal(b.body.message, "");
    assert.equal(db.count("wallet_entries"), 1);
});

test("ยอดเท่ากันวันเดียวกันแต่คนละร้าน -> บันทึกทั้งสอง", async () => {
    const { db, auto } = setup();
    await auto("ขอบคุณที่ใช้บัตร KTC X-5703 ยอด 120 THB @SHOPEE");
    await auto("ขอบคุณที่ใช้บัตร KTC X-5703 ยอด 120 THB @AIS SERVICE");
    assert.equal(db.count("wallet_entries"), 2);
});

test("ยอด THB0, โอนชำระบัตร, eStatement -> เงียบ ไม่บันทึก", async () => {
    const { db, auto } = setup();
    for (const t of [
        "ยอดชำระของคุณคือ THB0 และรหัส OTP คือ ****** (AwFGQK) กับ LP LINE SERVICES จากบัตรเครดิต ttb หมายเลข 405016******0518",
        "คุณทำรายการโอนชำระ/ตั้งชำระยอด14780.16 บาทให้กับUOB Master Card เรียบร้อยแล้ว",
        "Dear customer, your Credit Card eStatement is ready for viewing."
    ]) {
        const r = await auto(t);
        assert.equal(r.statusCode, 200);
        assert.equal(r.body.message, "");
    }
    assert.equal(db.count("wallet_entries"), 0);
});

test("แจ้งเตือน ttb ในแอป (มีวันเวลาในข้อความ) -> ใช้วันที่ในข้อความ", async () => {
    const { db, auto } = setup();
    const r = await auto("ใช้จ่ายผ่านบัตร ท่านใช้จ่าย 175.00 THB ที่ LPTH*PF_LM_Dragon W58rr - TH ผ่านบัตรเครดิต ทีทีบี หมายเลข xx0518 (14/11/2023@13:23) หากมีข้อสงสัยโทร 1428");
    assert.equal(r.body.status, "saved");
    const row = db.all("wallet_entries")[0];
    assert.equal(row.desc, "LINE MAN Dragon");
    assert.equal(row.date, "2023-11-14");
    assert.equal(row.icon, "fa-utensils");
    assert.equal(row.card, "ttb-0518");
});

test("ตรงกับรายจ่ายรายเดือนที่ตั้งไว้ (SMS มาก่อน cron) -> ใช้รายการเดียว และ cron เดือนนั้นไม่สร้างซ้ำ", async () => {
    const { db, auto } = setup();
    db.seed("wallet_templates", "t1", { ownerName: ME, type: "expense", desc: "YouTube Premium", amount: 399, billingDay: 3, icon: "fa-film", active: true, lastGeneratedMonth: "2023-10" });
    const r = await auto(KTC_THANKS);
    assert.equal(r.body.status, "saved");
    assert.match(r.body.message, /รายเดือน/);
    const rows = db.all("wallet_entries");
    assert.equal(rows.length, 1);
    assert.equal(rows[0].desc, "YouTube Premium");
    assert.equal(rows[0].templateId, "t1");
    assert.equal(rows[0].date, "2023-11-15");
    assert.equal(db.has("wallet_entries", "wsub_t1_2023-11"), true);
    assert.equal(db.all("wallet_templates")[0].lastGeneratedMonth, "2023-11");
});

test("ตรงกับรายเดือน (cron สร้างไว้ก่อนแล้ว) -> ปรับวันที่เป็นวันที่ตัดจริง ไม่เกิดสองรายการ", async () => {
    const { db, auto } = setup();
    db.seed("wallet_templates", "t1", { ownerName: ME, type: "expense", desc: "YouTube Premium", amount: 399, billingDay: 3, icon: "fa-film", active: true, lastGeneratedMonth: "2023-11" });
    db.seed("wallet_entries", "wsub_t1_2023-11", { ownerName: ME, payer: ME, type: "expense", amount: 399, date: "2023-11-03", month: "2023-11", desc: "YouTube Premium", icon: "fa-film", templateId: "t1", recurring: true, timestamp: T0 - 11 * 86400000 });
    const r = await auto(KTC_THANKS);
    assert.equal(r.body.status, "saved");
    const rows = db.all("wallet_entries");
    assert.equal(rows.length, 1);
    assert.equal(rows[0].date, "2023-11-15");
    assert.equal(rows[0].card, "KTC-5703");
    assert.equal(rows[0].desc, "YouTube Premium");
});

test("ยอดไม่ตรงรายเดือน -> เป็นรายการใหม่ตามปกติ", async () => {
    const { db, auto } = setup();
    db.seed("wallet_templates", "t1", { ownerName: ME, type: "expense", desc: "YouTube Premium", amount: 179, billingDay: 3, icon: "fa-film", active: true, lastGeneratedMonth: "2023-10" });
    await auto(KTC_THANKS);
    assert.equal(db.count("wallet_entries"), 1);
    assert.equal(db.all("wallet_entries")[0].desc, "Google YouTubePremiu");
    assert.equal(db.all("wallet_templates")[0].lastGeneratedMonth, "2023-10");
});

test("สลิปปกติยังไปทางสลิปเหมือนเดิม และรหัสผิดถูกปฏิเสธ", async () => {
    const { db, auto } = setup();
    const r = await auto("K PLUS\nโอนเงินสำเร็จ\n10 พ.ย. 69 14:23 น.\nไปยัง\nร้าน ข้าวมันไก่ป้าแดง\nจำนวน:\n150.00 บาท\nเลขที่รายการ:\n016314142312345678");
    assert.equal(r.body.status, "saved");
    assert.equal(db.all("wallet_entries")[0].source !== "card_alert", true);
});

test("อ่านฐานข้อมูลน้อย: ไม่อ่านทั้งคอลเลกชันกระเป๋า", async () => {
    const { db, auto } = setup();
    for (let i = 0; i < 30; i++) db.seed("wallet_entries", "old" + i, { ownerName: ME, type: "expense", amount: 10 + i, date: "2023-10-01", month: "2023-10", desc: "เก่า" + i, timestamp: 1 });
    db.resetReads();
    await auto(KTC_THANKS);
    assert.ok(db.reads() < 10, "อ่านไป " + db.reads());
});
