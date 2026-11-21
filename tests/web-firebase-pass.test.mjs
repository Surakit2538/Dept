// เว็บ: บัตรผ่าน Firebase ก่อนแตะฐานข้อมูล (web/src/data.js) ทดสอบโค้ดเว็บจริงกับ Firebase จำลอง
// - เปิดเว็บโดยไม่มีบัตรในเครื่องแต่มีรหัสเว็บ: ขอบัตรจาก /api/device-token?firebase=1 แล้วล็อกอินก่อน ค่อยอ่านข้อมูล
// - ผูก LINE กับชื่อในกลุ่ม: ส่ง action "link" ให้เซิร์ฟเวอร์ (ไม่เขียนฐานข้อมูลจากเบราว์เซอร์) แล้วล็อกอินด้วยบัตรที่ได้
// - ไม่มีการสมัครสมาชิกเองจากเบราว์เซอร์แล้ว
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { createRequire } from "node:module";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const webReq = createRequire(path.join(root, "web", "package.json"));
const hasTools = fs.existsSync(path.join(root, "web", "node_modules", "esbuild"));
const FAKE = pathToFileURL(path.join(root, "tests", "fake-firebase-web.mjs")).href + "?pass=1"; // แยกจากเทสต์อื่น (สถานะไม่ปนกัน)

const requests = [];
let mods = null;
async function load() {
    if (mods) return mods;
    const fake = await import(FAKE);
    fake.authState.currentUser = null; // ยังไม่มีบัตรในเครื่อง
    const store = { "dm:v2:webtoken": JSON.stringify({ token: "web-123", t: Date.now() }) };
    globalThis.localStorage = { getItem: (k) => store[k] ?? null, setItem: (k, v) => { store[k] = String(v); }, removeItem: (k) => { delete store[k]; } };
    globalThis.liff = { getIDToken: () => "line-id-token" };
    globalThis.fetch = async (url, opt = {}) => {
        requests.push({ url, opt });
        if (String(url).startsWith("/api/device-token?firebase=1")) {
            return { ok: true, status: 200, json: async () => ({ success: true, member: { id: "m1" }, firebaseToken: "fb-m_m1" }) };
        }
        const body = JSON.parse(opt.body || "{}");
        if (url === "/api/device-token" && body.action === "link") {
            return { ok: true, status: 200, json: async () => ({ success: true, member: { id: "m3", name: "BEN", role: "member", lineUserId: "U_new" }, firebaseToken: "fb-m_m3" }) };
        }
        return { ok: false, status: 404, json: async () => ({}) };
    };
    const esbuild = webReq("esbuild");
    const out = path.join(root, "web", "node_modules", ".cache-test", "data-pass.mjs");
    fs.mkdirSync(path.dirname(out), { recursive: true });
    await esbuild.build({
        entryPoints: [path.join(root, "web", "src", "data.js")], outfile: out, bundle: true, format: "esm", platform: "node", logLevel: "silent",
        plugins: [{ name: "fake-firebase", setup(b) { b.onResolve({ filter: /^firebase\// }, () => ({ path: FAKE, external: true })); } }]
    });
    const data = await import(pathToFileURL(out).href + "?t=" + Date.now());
    mods = { data, fake };
    return mods;
}

test("เปิดเว็บด้วยรหัสเว็บที่จำไว้: ขอบัตรผ่านก่อน แล้วค่อยอ่านข้อมูลกลุ่ม", { skip: !hasTools }, async () => {
    const { data, fake } = await load();
    await data.loadTemplates();
    const ask = requests.find((r) => String(r.url).startsWith("/api/device-token?firebase=1"));
    assert.ok(ask, "ต้องขอบัตรผ่านด้วยรหัสเว็บ");
    assert.equal(ask.opt.headers.Authorization, "Bearer web-123");
    assert.deepEqual(fake.authState.signIns, ["fb-m_m1"]);
    const iSign = fake.authState.order.indexOf("signIn");
    const iRead = fake.authState.order.indexOf("read:subscription_templates");
    assert.ok(iSign >= 0 && iSign < iRead, `ต้องล็อกอินก่อนอ่าน: ${fake.authState.order.join(", ")}`);
});

test("ผูก LINE กับชื่อที่ผู้ดูแลเพิ่มไว้: ให้เซิร์ฟเวอร์ทำ (ส่ง idToken + รหัสชื่อ) แล้วล็อกอินด้วยบัตรใหม่", { skip: !hasTools }, async () => {
    const { data, fake } = await load();
    const u = await data.linkMember({ displayName: "BEN" }, "m3");
    assert.equal(u.name, "BEN");
    assert.equal(u.memberId, "m3");
    const req = requests.find((r) => r.url === "/api/device-token" && JSON.parse(r.opt.body).action === "link");
    assert.deepEqual(JSON.parse(req.opt.body), { action: "link", memberId: "m3", idToken: "line-id-token" });
    assert.equal(fake.authState.currentUser.uid, "m_m3", "เปลี่ยนเป็นบัตรของคนที่เพิ่งผูก");
});

test("ไม่มีการสมัครสมาชิกเองจากเบราว์เซอร์ และหน้าเลือกชื่อไม่มีปุ่มสมัครใหม่", { skip: !hasTools }, async () => {
    const { data } = await load();
    assert.equal(data.createMember, undefined);
    const src = fs.readFileSync(path.join(root, "web", "src", "data.js"), "utf8");
    assert.ok(!/addDoc\(collection\(db, "members"\), data\)/.test(src), "ห้ามสร้างสมาชิกเองตอนล็อกอิน");
    const onboard = fs.readFileSync(path.join(root, "web", "src", "onboard.jsx"), "utf8");
    assert.ok(!onboard.includes("ฉันเป็นสมาชิกใหม่"));
    assert.match(onboard, /ยังไม่มีชื่อคุณในกลุ่ม/);
});
