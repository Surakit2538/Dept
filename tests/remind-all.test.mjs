// แอดมินสั่งเตือนทุกคนที่ค้างจากเว็บ (action remind-all): เฉพาะแอดมิน ส่งเฉพาะลูกหนี้ที่ผูก LINE และกันกดซ้ำ
import test from "node:test";
import assert from "node:assert/strict";
import { createShortcutHandler } from "../lib/shortcut-service.mjs";
import { createLineIdAuthenticator } from "../lib/line-auth.mjs";
import { createFakeFirestore, createFakeRes } from "./fake-firestore.mjs";

const NOV13 = Date.parse("2026-11-13T05:00:00Z");

function setup({ tokenOwner = null } = {}) {
    const db = createFakeFirestore();
    db.seed("members", "a", { name: "GAME", lineUserId: "U_game", role: "admin", promptpay: "0812345678" });
    db.seed("members", "b", { name: "AOY", lineUserId: "U_aoy" });
    db.seed("members", "c", { name: "BEN" }); // ยังไม่ผูก LINE
    db.seed("transactions", "t1", { date: "2026-11-02", payer: "GAME", amount: 300, splits: { GAME: 100, AOY: 100, BEN: 100 } });
    const pushes = [];
    const fetchFn = async (url, opts) => {
        if (String(url).includes("oauth2/v2.1/verify")) {
            const tok = new URLSearchParams(opts.body).get("id_token");
            return { ok: true, json: async () => ({ sub: tok === "admin" ? "U_game" : "U_aoy" }) };
        }
        pushes.push(JSON.parse(opts.body));
        return { ok: true };
    };
    const handler = createShortcutHandler({
        db: {}, fs: db.fs,
        // รหัสเว็บ/รหัสอุปกรณ์ (Bearer): ไม่มีข้อมูลแอดมินมาด้วย ระบบต้องอ่านจากสมาชิกเอง
        verifyDeviceToken: async () => (tokenOwner ? { authenticated: true, ...tokenOwner } : { authenticated: false, status: 401, message: "x" }),
        authenticateIdToken: createLineIdAuthenticator({ db: {}, fs: db.fs, fetchFn, channelId: "1" }),
        env: { LINE_CHANNEL_ACCESS_TOKEN: "t" }, fetchFn, now: () => NOV13
    });
    const call = async (body, headers = {}) => { const res = createFakeRes(); await handler({ method: "POST", headers, body }, res); return res; };
    return { call, pushes };
}

test("remind-all: คนที่ไม่ใช่แอดมินใช้ไม่ได้", async () => {
    const { call, pushes } = setup();
    const r = await call({ action: "remind-all", idToken: "member" });
    assert.equal(r.statusCode, 403);
    assert.equal(pushes.length, 0);
});

test("remind-all: แอดมินส่งหาลูกหนี้ที่ผูก LINE พร้อม QR ของผู้รับ และข้ามคนที่ยังไม่ผูก", async () => {
    const { call, pushes } = setup();
    const r = await call({ action: "remind-all", idToken: "admin" });
    assert.equal(r.statusCode, 200);
    assert.equal(r.body.sent, 1);
    assert.deepEqual(r.body.skipped, ["BEN"]);
    assert.equal(pushes.length, 1);
    assert.equal(pushes[0].to, "U_aoy");
    assert.ok(JSON.stringify(pushes[0].messages[0]).includes("promptpay.io/0812345678/100.png"));
});

test("remind-all: กดซ้ำภายใน 12 ชั่วโมงถูกกันไว้", async () => {
    const { call, pushes } = setup();
    await call({ action: "remind-all", idToken: "admin" });
    const again = await call({ action: "remind-all", idToken: "admin" });
    assert.equal(again.body.status, "cooldown");
    assert.equal(pushes.length, 1);
});

test("remind-all: เข้าด้วยรหัสเว็บ (Bearer) แอดมินใช้ได้ คนทั่วไปใช้ไม่ได้", async () => {
    const admin = setup({ tokenOwner: { memberId: "a", name: "GAME", lineUserId: "U_game" } });
    const ok = await admin.call({ action: "remind-all" }, { authorization: "Bearer web" });
    assert.equal(ok.statusCode, 200);
    assert.equal(ok.body.sent, 1);
    const member = setup({ tokenOwner: { memberId: "b", name: "AOY", lineUserId: "U_aoy" } });
    const no = await member.call({ action: "remind-all" }, { authorization: "Bearer web" });
    assert.equal(no.statusCode, 403);
    assert.equal(member.pushes.length, 0);
});
