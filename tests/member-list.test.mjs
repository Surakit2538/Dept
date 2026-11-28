// รายชื่อ/รูป/พร้อมเพย์ของสมาชิก: เพื่อนบางคนเปิดเว็บใน LINE แล้วต่อ Firestore ไม่ได้ (ได้รายชื่อว่าง ไม่มีรูป 28 พ.ย.)
// - lib/member-profiles.mjs (ใช้ร่วมเว็บ/เซิร์ฟเวอร์) · action member-list (สำรอง)
// - web/src/data.js: ผลจากแคช = ต่อไม่ได้ -> ขอจากเซิร์ฟเวอร์, ไม่จำรายชื่อว่าง, จำว่าให้ใช้ long polling แล้วโหลดหน้าใหม่ครั้งเดียว
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { createRequire } from "node:module";
import { buildProfiles, memberNamesOf } from "../lib/member-profiles.mjs";
import { createShortcutHandler } from "../lib/shortcut-service.mjs";
import { createFakeFirestore, createFakeRes } from "./fake-firestore.mjs";

const DOCS = [
    { id: "a", data: { name: "T  H A 🍀", pictureUrl: "https://profile.line-scdn.net/tha", lineUserId: "U1", promptpay: "0811111111" } },
    { id: "b", data: { name: "care🦖", pictureUrl: "javascript:alert(1)", role: "admin" } },
    { id: "c", data: { name: "CARE🦖", pictureUrl: "https://profile.line-scdn.net/care", lineUserId: "U2", receiptScan: true } },
    { id: "d", data: { name: "" } }
];

test("buildProfiles: ชื่อเดียวกันรวมเป็นคนเดียว เลือกเอกสารที่มีรูป/LINE รูปต้องเป็นลิงก์ http(s) เท่านั้น", () => {
    const p = buildProfiles(DOCS);
    assert.deepEqual(p.map((x) => x.name), ["T H A 🍀", "CARE🦖"]);
    const care = p.find((x) => x.name === "CARE🦖");
    assert.equal(care.pictureUrl, "https://profile.line-scdn.net/care");
    assert.deepEqual(care.ids, ["b", "c"]);
    assert.equal(care.receiptScan, true);
    assert.equal(buildProfiles([DOCS[1]])[0].pictureUrl, "", "ลิงก์แปลกไม่ใช้");
    assert.deepEqual(memberNamesOf(DOCS), ["T H A 🍀", "CARE🦖"]);
});

test("action member-list: สมาชิกที่ล็อกอินได้รายชื่อพร้อมรูปและพร้อมเพย์ / ไม่ล็อกอินไม่ได้", async () => {
    const db = createFakeFirestore();
    DOCS.forEach((d) => db.seed("members", d.id, d.data));
    const handler = createShortcutHandler({
        db: {}, fs: db.fs,
        verifyDeviceToken: async (_db, req) => (req.headers.authorization === "Bearer ok" ? { authenticated: true, memberId: "c", name: "CARE🦖" } : { authenticated: false, status: 401, message: "x" })
    });
    const call = async (who) => { const res = createFakeRes(); await handler({ method: "POST", headers: { authorization: "Bearer " + who }, body: { action: "member-list" } }, res); return res; };
    const ok = await call("ok");
    assert.equal(ok.statusCode, 200);
    assert.equal(ok.body.profiles.find((p) => p.name === "T H A 🍀").promptpay, "0811111111");
    assert.equal((await call("no")).statusCode, 401);
});

// ---------- โค้ดเว็บจริงกับ Firebase จำลอง ----------
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const webReq = createRequire(path.join(root, "web", "package.json"));
const hasTools = fs.existsSync(path.join(root, "web", "node_modules", "esbuild"));
const FAKE = pathToFileURL(path.join(root, "tests", "fake-firebase-web.mjs")).href + "?members=1";
const store = { "dm:v2:webtoken": JSON.stringify({ token: "web-1", t: Date.now() }) };
const session = {};
const sent = [];
let reloads = 0;
let mods = null;
async function load() {
    if (mods) return mods;
    const fake = await import(FAKE);
    globalThis.localStorage = { getItem: (k) => store[k] ?? null, setItem: (k, v) => { store[k] = String(v); }, removeItem: (k) => { delete store[k]; }, key: () => null, length: 0 };
    globalThis.sessionStorage = { getItem: (k) => session[k] ?? null, setItem: (k, v) => { session[k] = String(v); } };
    globalThis.location = { reload: () => { reloads++; } };
    globalThis.fetch = async (url, opt = {}) => {
        const body = JSON.parse(opt.body || "{}");
        sent.push({ url, body });
        if (String(url).startsWith("/api/device-token?firebase=1")) return { ok: true, status: 200, json: async () => ({ success: true, member: { id: "c" }, firebaseToken: "fb-m_c" }) };
        if (body.action === "member-list") return { ok: true, status: 200, json: async () => ({ profiles: buildProfiles(DOCS) }) };
        return { ok: false, status: 404, json: async () => ({}) };
    };
    const esbuild = webReq("esbuild");
    const out = path.join(root, "web", "node_modules", ".cache-test", "data-members.mjs");
    fs.mkdirSync(path.dirname(out), { recursive: true });
    await esbuild.build({
        entryPoints: [path.join(root, "web", "src", "data.js")], outfile: out, bundle: true, format: "esm", platform: "node", logLevel: "silent",
        plugins: [{ name: "fake-firebase", setup(b) { b.onResolve({ filter: /^firebase\// }, () => ({ path: FAKE, external: true })); } }]
    });
    mods = { data: await import(pathToFileURL(out).href + "?t=" + Date.now()), fake };
    return mods;
}
const clearCached = () => { delete store["dm:v2:members"]; delete store["dm:v2:profiles"]; };

test("เว็บ: ต่อฐานข้อมูลได้ปกติ = อ่านตรง ไม่เรียกเซิร์ฟเวอร์ ไม่โหลดหน้าใหม่", { skip: !hasTools }, async () => {
    const { data, fake } = await load();
    fake.__reset(); fake.net.offline = false; clearCached(); sent.length = 0;
    DOCS.forEach((d) => fake.__seed("members", d.id, d.data));
    assert.deepEqual(await data.loadMembers(), ["T H A 🍀", "CARE🦖"]);
    assert.equal((await data.loadProfiles()).length, 2);
    assert.equal(sent.filter((s) => s.body.action === "member-list").length, 0);
    assert.equal(reloads, 0);
    assert.deepEqual(fake.firestoreSettings[0], { experimentalAutoDetectLongPolling: true });
});

test("เว็บ: ต่อฐานข้อมูลไม่ได้ (ผลว่างจากแคช) = ขอรายชื่อและรูปจากเซิร์ฟเวอร์, จำให้ใช้ long polling, โหลดหน้าใหม่ครั้งเดียว", { skip: !hasTools }, async () => {
    const { data, fake } = await load();
    fake.__reset(); fake.net.offline = true; clearCached(); sent.length = 0;
    DOCS.forEach((d) => fake.__seed("members", d.id, d.data));
    assert.deepEqual(await data.loadMembers(), ["T H A 🍀", "CARE🦖"]);
    const profiles = await data.loadProfiles();
    assert.equal(profiles.find((p) => p.name === "CARE🦖").pictureUrl, "https://profile.line-scdn.net/care", "รูปมาจากเซิร์ฟเวอร์");
    assert.equal(store["dm:lp"], "1");
    await new Promise((r) => setTimeout(r, 400));
    assert.equal(reloads, 1, "โหลดหน้าใหม่ครั้งเดียว ไม่วน");
    fake.net.offline = false;
});

test("เว็บ: เซิร์ฟเวอร์ก็ไม่ตอบ = ได้รายชื่อว่างแต่ไม่จำไว้ (เปิดครั้งหน้าลองใหม่)", { skip: !hasTools }, async () => {
    const { data, fake } = await load();
    fake.__reset(); fake.net.offline = true; clearCached();
    const keep = globalThis.fetch;
    globalThis.fetch = async (url) => (String(url).includes("shortcut") ? { ok: false, status: 500, json: async () => ({ message: "ล่ม" }) } : keep(url));
    assert.deepEqual(await data.loadMembers(), []);
    assert.equal(store["dm:v2:members"], undefined);
    globalThis.fetch = keep; fake.net.offline = false;
});
