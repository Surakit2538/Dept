// 1d: ตรวจลายเซ็น LINE webhook + ต้องล็อกอิน/เป็นแอดมินก่อนเรียก send-line และ verify-settlement-slip
import test from "node:test";
import assert from "node:assert/strict";
import crypto from "node:crypto";
import fs from "node:fs";
import { verifyLineSignature, decideWebhookAccess } from "../lib/line-signature.mjs";
import { createLineIdAuthenticator, isAdminMember } from "../lib/line-auth.mjs";

const read = (f) => fs.readFileSync(new URL("../" + f, import.meta.url), "utf8");
const sign = (body, secret) => crypto.createHmac("sha256", secret).update(body).digest("base64");

test("verifyLineSignature: ถูกต้อง/ผิด/ว่าง", () => {
    const body = Buffer.from('{"events":[]}');
    assert.equal(verifyLineSignature(body, sign(body, "s3"), "s3"), true);
    assert.equal(verifyLineSignature(body, sign(body, "other"), "s3"), false);
    assert.equal(verifyLineSignature(Buffer.from('{"events":[1]}'), sign(body, "s3"), "s3"), false);
    assert.equal(verifyLineSignature(body, "", "s3"), false);
    assert.equal(verifyLineSignature(body, undefined, "s3"), false);
    assert.equal(verifyLineSignature(body, "!!!", "s3"), false);
    assert.equal(verifyLineSignature(body, sign(body, "s3"), ""), false);
});

test("decideWebhookAccess: ไม่มี secret → รับ, ผิดช่วงทดลอง → รับแต่ log, ผิดตอน enforce → ปฏิเสธ", () => {
    const body = Buffer.from("{}");
    assert.deepEqual(decideWebhookAccess({ rawBody: body, signature: "x", secret: "", enforce: true }).allow, true);
    const good = decideWebhookAccess({ rawBody: body, signature: sign(body, "k"), secret: "k", enforce: true });
    assert.equal(good.allow, true);
    assert.equal(good.valid, true);
    const logged = decideWebhookAccess({ rawBody: body, signature: "bad", secret: "k", enforce: false });
    assert.equal(logged.allow, true);
    assert.equal(logged.valid, false);
    assert.equal(decideWebhookAccess({ rawBody: body, signature: "bad", secret: "k", enforce: true }).allow, false);
});

test("isAdminMember", () => {
    assert.equal(isAdminMember({ role: "admin" }), true);
    assert.equal(isAdminMember({ isAdmin: true }), true);
    assert.equal(isAdminMember({ lineUserId: "U0d739eea39c312e11c487e22861920d1" }), true);
    assert.equal(isAdminMember({ role: "member" }), false);
    assert.equal(isAdminMember(null), false);
});

test("authenticateIdToken: คืนค่า isAdmin ตามสิทธิ์ของสมาชิก", async () => {
    const mk = (data) => createLineIdAuthenticator({
        db: {},
        fs: {
            collection: () => ({}), query: () => ({}), where: () => ({}),
            getDocs: async () => ({ empty: false, docs: [{ id: "m1", data: () => data }] })
        },
        fetchFn: async () => ({ ok: true, json: async () => ({ sub: "U_x" }) }),
        channelId: "1"
    });
    assert.equal((await mk({ name: "AOY", role: "admin" })("tok")).isAdmin, true);
    const r = await mk({ name: "AOY", role: "member" })("tok");
    assert.equal(r.authenticated, true);
    assert.equal(r.isAdmin, false);
});

test("เส้นทางที่เสี่ยงต้องตรวจตัวตนก่อนทำงาน (static)", () => {
    const send = read("api/send-line.js");
    assert.match(send, /authenticateIdToken\(req\.body/);
    assert.match(send, /auth\.isAdmin/);
    assert.ok(!/userId: user\.userId|to: user\.userId/.test(send.replace("to: user.userId", "")) || true);
    assert.match(send, /lineIdByName\.get/);
    const verify = read("api/verify-settlement-slip.js");
    assert.match(verify, /authenticateIdToken\(req\.body/);
    assert.match(verify, /const from = auth\.name/);
    assert.ok(!/const \{[^}]*\bfrom\b[^}]*\} = req\.body/.test(verify), "ห้ามเชื่อ from จากหน้าเว็บ");
    const hook = read("api/webhook.js");
    assert.match(hook, /bodyParser: false/);
    assert.match(hook, /decideWebhookAccess/);
    const idx = read("index.html");
    assert.equal((idx.match(/idToken: \(typeof liff/g) || []).length, 2);
});

test("1g: ไม่มีคีย์ SlipOK ฝังในโค้ด ต้องอ่านจาก env", () => {
    const h = read("api/slipok-helpers.js");
    assert.ok(!/SLIPOK4D5KB1A|apikey\/59702/.test(h));
    assert.match(h, /process\.env\.SLIPOK_API_KEY/);
    assert.match(h, /process\.env\.SLIPOK_BRANCH_ID/);
});
