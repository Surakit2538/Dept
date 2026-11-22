// ล็อกอินเว็บแบบใหม่ (lib/member-login.mjs): บัตรผ่าน Firebase เฉพาะสมาชิกที่ผูก LINE แล้ว และปิดการสมัครเอง
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { createMemberLogin, passClaims } from "../lib/member-login.mjs";
import { createFakeFirestore } from "./fake-firestore.mjs";

const LINE = {
    "tok-game": { sub: "U_game", name: "game", picture: "https://profile.line-scdn.net/game2" },
    "tok-new": { sub: "U_new", name: "ben", picture: "https://profile.line-scdn.net/ben" },
    "tok-stranger": { sub: "U_x", name: "stranger" }
};

function setup({ mintFails = false } = {}) {
    const db = createFakeFirestore();
    db.seed("members", "m1", { name: "GAME", lineUserId: "U_game", role: "admin", realName: "ก", promptpay: "0812345678", pictureUrl: "https://profile.line-scdn.net/game" });
    db.seed("members", "m2", { name: "CARE", lineUserId: "U_care" });
    db.seed("members", "m3", { name: "BEN", role: "member" }); // ผู้ดูแลเพิ่มชื่อไว้ ยังไม่ผูก LINE
    db.seed("members", "m4", { name: "AOY" });
    const minted = [];
    const login = createMemberLogin({
        db: {}, fs: db.fs,
        verifyLine: async (t) => { if (!LINE[t]) throw new Error("bad"); return LINE[t]; },
        mintToken: async (uid, claims) => { if (mintFails) throw new Error("no admin"); minted.push({ uid, claims }); return "fb-" + uid; },
        now: () => Date.parse("2026-11-22T03:00:00Z")
    });
    return { db, login, minted };
}

test("ล็อกอิน: สมาชิกที่ผูก LINE แล้ว ได้ข้อมูลตัวเอง + บัตรผ่าน (มีรหัสสมาชิกและสิทธิ์ผู้ดูแลในบัตร) และอัปเดตรูปจาก LINE", async () => {
    const { db, login, minted } = setup();
    const r = await login.login("tok-game");
    assert.equal(r.status, 200);
    assert.equal(r.body.member.id, "m1");
    assert.equal(r.body.member.name, "GAME");
    assert.equal(r.body.member.isAdmin, true);
    assert.equal(r.body.firebaseToken, "fb-m_m1");
    assert.deepEqual(minted[0], { uid: "m_m1", claims: { mid: "m1", member: "GAME", admin: true } });
    assert.equal(db.all("members").find((m) => m.name === "GAME").pictureUrl, "https://profile.line-scdn.net/game2");
});

test("ล็อกอิน: คนที่ยังไม่ผูก ได้รายชื่อที่ยังไม่ผูกให้เลือก (ชื่อตรงกับ LINE ถูกเลือกไว้ให้) ไม่ได้บัตรผ่าน และไม่มีการสร้างสมาชิกใหม่", async () => {
    const { db, login, minted } = setup();
    const r = await login.login("tok-new");
    assert.equal(r.body.needLink, true);
    assert.deepEqual(r.body.candidates.map((c) => c.name), ["AOY", "BEN"]);
    assert.equal(r.body.suggest, "m3");
    assert.equal(r.body.firebaseToken, undefined);
    assert.equal(minted.length, 0);
    assert.equal(db.count("members"), 4, "ปิดการสมัครเอง: ห้ามเพิ่มสมาชิกให้เอง");
});

test("ล็อกอิน: ไม่มีชื่อรอผูกเลย = รายชื่อว่าง (เว็บบอกให้ผู้ดูแลเพิ่มชื่อก่อน) / idToken ปลอม = 401", async () => {
    const { db, login } = setup();
    db.seed("members", "m3", { name: "BEN", lineUserId: "U_ben" });
    db.seed("members", "m4", { name: "AOY", lineUserId: "U_aoy" });
    const r = await login.login("tok-stranger");
    assert.deepEqual(r.body.candidates, []);
    assert.equal(db.count("members"), 4);
    assert.equal((await login.login("fake")).status, 401);
    assert.equal((await login.login("")).status, 400);
});

test("ผูก LINE กับชื่อที่ผู้ดูแลเพิ่มไว้: ได้บัตรผ่านทันที / ชื่อที่ผูกกับ LINE อื่นแล้ว ผูกไม่ได้ / LINE ที่ผูกชื่ออื่นแล้ว ผูกซ้ำไม่ได้", async () => {
    const { db, login } = setup();
    const ok = await login.link("tok-new", "m3");
    assert.equal(ok.status, 200);
    assert.equal(ok.body.member.name, "BEN");
    assert.equal(ok.body.firebaseToken, "fb-m_m3");
    const ben = db.all("members").find((m) => m.name === "BEN");
    assert.equal(ben.lineUserId, "U_new");
    assert.equal(ben.linkedAt, "2026-11-22T03:00:00.000Z");
    assert.equal((await login.link("tok-stranger", "m2")).status, 409, "CARE ผูกกับ LINE อื่นแล้ว");
    assert.equal((await login.link("tok-new", "m4")).status, 409, "LINE นี้ผูกกับ BEN แล้ว");
    assert.equal((await login.link("tok-new", "m3")).status, 200, "ผูกชื่อเดิมซ้ำได้ (กดซ้ำ)");
    assert.equal((await login.link("tok-new", "nope")).status, 409);
    assert.equal((await login.link("tok-stranger", "nope")).status, 404);
    assert.equal((await login.link("tok-stranger", "a/b")).status, 400);
});

test("ต่อบัตรผ่านด้วยรหัสเว็บ: ได้บัตรของสมาชิกคนนั้น / ออกบัตรไม่ได้ (ไม่มีกุญแจแอดมิน) ยังล็อกอินได้แต่ไม่มีบัตร", async () => {
    const { login } = setup();
    const r = await login.renew({ memberId: "m2", name: "CARE" });
    assert.equal(r.body.firebaseToken, "fb-m_m2");
    assert.equal(r.body.member.isAdmin, false);
    assert.equal((await login.renew({ memberId: "gone" })).status, 404);
    const broken = setup({ mintFails: true });
    const b = await broken.login.login("tok-game");
    assert.equal(b.status, 200);
    assert.equal(b.body.firebaseToken, "");
});

test("บัตรผ่าน: ผู้ดูแลตามบทบาท หรือ LINE ของผู้ดูแลหลัก / สมาชิกทั่วไปไม่ใช่ผู้ดูแล", () => {
    assert.equal(passClaims("x", { name: "a", role: "admin" }).claims.admin, true);
    assert.equal(passClaims("x", { name: "a", lineUserId: "U0d739eea39c312e11c487e22861920d1" }).claims.admin, true);
    assert.equal(passClaims("x", { name: " t  h a " }).claims.member, "T H A");
    assert.equal(passClaims("x", { name: "a" }).claims.admin, false);
});

test("API: device-token รับ action login / link และต่อบัตรด้วย ?firebase=1 · กฎ Firestore ให้เฉพาะคนถือบัตรสมาชิก", () => {
    const api = fs.readFileSync(new URL("../api/device-token.js", import.meta.url), "utf8");
    assert.match(api, /body\.action === "login"/);
    assert.match(api, /body\.action === "link"/);
    assert.match(api, /req\.query\.firebase/);
    // กฎแยกตามสิทธิ์ทดสอบจริงกับ Firestore emulator ที่ tests/rules/firestore-rules.emulator.mjs (ต้องมี Java) ตรงนี้ตรวจโครงหลักไว้กันพลาด
    const rules = fs.readFileSync(new URL("../firestore.rules", import.meta.url), "utf8").split(/\r?\n/).filter((l) => !l.trim().startsWith("//")).join("\n");
    assert.ok(!/allow[^;]*if true/.test(rules), "ห้ามมีกฎเปิดให้ทุกคน");
    assert.ok(!/match \/\{document=\*\*\}/.test(rules), "ห้ามเปิดทุกคอลเลกชันรวด");
    assert.match(rules, /match \/members\/\{id\} \{\s*allow read: if isMember\(\);/, "members: อ่านได้เฉพาะสมาชิก");
    // บิล/เคลียร์เงิน/บิลรายเดือน: สมาชิก + ซ่อนข้อมูลของคนอื่นเมื่อเปิดสวิตช์ (canSee เริ่มด้วย isMember())
    assert.match(rules, /function canSee\(\) \{\s*return isMember\(\) && \(/);
    for (const c of ["transactions", "settlements", "subscription_templates"]) {
        assert.match(rules, new RegExp(`match /${c}/\\{id\\} \\{\\s*allow read: if canSee\\(\\);`), `${c}: อ่านได้เฉพาะสมาชิก (และคนที่เกี่ยวข้องเมื่อซ่อน)`);
    }
    assert.match(rules, /request\.auth != null && request\.auth\.token\.mid is string/);
    assert.match(rules, /match \/settlements\/\{id\} \{[^}]*allow create: if isAdmin\(\) && okPeople\(\);\s*allow update, delete: if isAdmin\(\);/, "ประวัติเคลียร์เงินเขียนได้เฉพาะผู้ดูแล");
    assert.match(rules, /onlyChanged\(\['realName', 'promptpay', 'realNameUpdatedAt', 'promptpayUpdatedAt'\]\)/, "แก้ข้อมูลตัวเองได้แค่ชื่อจริง/พร้อมเพย์");
    assert.ok(fs.existsSync(new URL("./rules/firestore-rules.emulator.mjs", import.meta.url)), "มีเทสต์กฎกับ emulator");
});
