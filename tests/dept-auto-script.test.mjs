// รันสคริปต์ Scriptable ตัวจริง (scriptable/DeptAuto.js) ในกล่องจำลองของ Scriptable เพื่อทดสอบพฤติกรรมในเครื่อง
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";

const code = fs.readFileSync(new URL("../scriptable/DeptAuto.js", import.meta.url), "utf8");
const SAVED = { success: true, status: "saved", message: "บันทึกรายจ่าย", id: "w1", type: "expense", amount: 533.93, desc: "AIS SERVICE", scriptVersion: "2.0.0" };

async function runAuto({ text = "", query = null, store = new Map(), respond = () => SAVED, token = "tok123" }) {
    const calls = [];
    const notes = [];
    const outputs = [];
    class Request {
        constructor(url) { this.url = url; }
        async loadJSON() {
            const body = JSON.parse(this.body);
            calls.push({ url: this.url, headers: this.headers, body });
            return respond(body);
        }
    }
    class Notification {
        constructor() { this.actions = []; }
        addAction(title, url) { this.actions.push({ title, url }); }
        async schedule() { notes.push(this); }
    }
    const fm = {
        libraryDirectory: () => "/lib",
        joinPath: (a, b) => a + "/" + b,
        fileExists: (p) => store.has(p),
        readString: (p) => store.get(p),
        writeString: (p, s) => { store.set(p, s); }
    };
    const sandbox = {
        args: { shortcutParameter: text, queryParameters: query || {} },
        Keychain: { contains: () => Boolean(token), get: () => token },
        Request, Notification,
        FileManager: { local: () => fm },
        Script: { name: () => "DeptAuto", setShortcutOutput: (m) => outputs.push(m), complete() {} },
        console: { log() {} }
    };
    vm.createContext(sandbox);
    await vm.runInContext("(async () => {\n" + code + "\n})()", sandbox);
    return { calls, notes, outputs, store };
}

const SMS = "บัตร KTC ยอด 533.93 THB OTP=016817 สำหรับ AMP*AIS SERVICE ห้ามเปิดเผยรหัส (Ref.KYBBYC)";

test("DeptAuto: ซ่อน OTP ในเครื่องก่อนส่ง และส่งด้วยรหัสอุปกรณ์", async () => {
    const { calls } = await runAuto({ text: SMS });
    assert.equal(calls.length, 1);
    assert.equal(calls[0].headers.Authorization, "Bearer tok123");
    assert.equal(calls[0].body.action, "auto");
    assert.match(calls[0].body.text, /OTP=\*{6}/);
    assert.doesNotMatch(calls[0].body.text, /016817/);
});

test("DeptAuto: บันทึกแล้วเด้งแจ้งเตือนถาม บันทึกแบบไหน มีปุ่ม ส่วนตัว / หารกับเพื่อน แตะตัวแจ้งเตือนเปิดหน้าแก้ไข", async () => {
    const { notes, outputs } = await runAuto({ text: SMS });
    assert.equal(notes.length, 1);
    const n = notes[0];
    assert.match(n.title, /พบรายจ่าย 533\.93 บาท/);
    assert.match(n.body, /AIS SERVICE/);
    assert.match(n.body, /บันทึกแบบไหน/);
    assert.deepEqual(n.actions.map((a) => a.title), ["ส่วนตัว", "หารกับเพื่อน"]);
    assert.equal(n.actions[0].url, "scriptable:///run/DeptAuto?confirm=w1");
    assert.equal(n.actions[1].url, "https://liff.line.me/2008948704-db2goT00#split=w1");
    assert.equal(n.openURL, "https://liff.line.me/2008948704-db2goT00#edit=w1");
    assert.deepEqual(outputs, [], "ไม่ส่งข้อความกลับให้คำสั่งลัด (กันแจ้งเตือนซ้ำกับคำสั่งลัดแบบเก่า)");
});

test("DeptAuto: กดปุ่ม ส่วนตัว (เปิดสคริปต์ด้วย confirm) ยืนยันรายการ แล้วเด้งแจ้งเตือนที่สองมีปุ่มแก้ไขรายละเอียด 1 ปุ่ม", async () => {
    const { calls, notes } = await runAuto({ query: { confirm: "w1" }, respond: () => ({ success: true, status: "saved", confirmed: 1 }) });
    assert.equal(calls.length, 1);
    assert.deepEqual(calls[0].body, { action: "wallet-confirm", id: "w1" });
    assert.equal(notes.length, 1);
    assert.match(notes[0].title, /ส่วนตัวแล้ว/);
    assert.deepEqual(notes[0].actions.map((a) => a.title), ["แก้ไขรายละเอียด"]);
    assert.equal(notes[0].actions[0].url, "https://liff.line.me/2008948704-db2goT00#edit=w1");
});

test("DeptAuto: เงินเข้า มีปุ่ม ยืนยัน / แก้ไขรายละเอียด (ไม่มีปุ่มหาร)", async () => {
    const { notes } = await runAuto({ text: "สลิปเงินเข้า", respond: () => ({ ...SAVED, type: "income", amount: 500, desc: "รับจาก AOY" }) });
    assert.match(notes[0].title, /พบเงินเข้า/);
    assert.deepEqual(notes[0].actions.map((a) => a.title), ["ยืนยัน", "แก้ไขรายละเอียด"]);
});

test("DeptAuto: ข้อความเดิมที่ตรวจแล้วไม่ส่งซ้ำ และผลเงียบไม่แจ้งเตือน", async () => {
    const store = new Map();
    await runAuto({ text: SMS, store });
    const again = await runAuto({ text: SMS, store });
    assert.equal(again.calls.length, 0);
    assert.equal(again.notes.length, 0);
    const quiet = await runAuto({ text: "ข้อความอื่น", store, respond: () => ({ success: true, status: "ignored", message: "", scriptVersion: "2.0.0" }) });
    assert.equal(quiet.notes.length, 0);
});

test("DeptAuto: เซิร์ฟเวอร์ผิดพลาดไม่ถูกจำ ลองใหม่ได้ และแจ้งเหตุผล", async () => {
    const store = new Map();
    const bad = await runAuto({ text: SMS, store, respond: () => ({ success: false, status: "error", message: "เกิดข้อผิดพลาด" }) });
    assert.match(bad.notes[0].body, /เกิดข้อผิดพลาด/);
    const retry = await runAuto({ text: SMS, store });
    assert.equal(retry.calls.length, 1);
});

test("DeptAuto: เซิร์ฟเวอร์บอกว่ามีรุ่นใหม่ เตือนให้รันตัวติดตั้ง วันละครั้ง", async () => {
    const store = new Map();
    const newer = () => ({ success: true, status: "ignored", message: "", scriptVersion: "9.0.0" });
    const first = await runAuto({ text: "ข้อความ 1", store, respond: newer });
    assert.equal(first.notes.length, 1);
    assert.match(first.notes[0].title, /รุ่นใหม่ \(9\.0\.0\)/);
    const second = await runAuto({ text: "ข้อความ 2", store, respond: newer });
    assert.equal(second.notes.length, 0, "วันเดียวกันไม่เตือนซ้ำ");
});

test("DeptAuto: ไม่มีข้อความ / ไม่มีรหัสอุปกรณ์ / ได้ไฟล์รูปแทนข้อความ", async () => {
    const empty = await runAuto({ text: "   " });
    assert.equal(empty.calls.length, 0);
    assert.equal(empty.notes.length, 0);
    const noToken = await runAuto({ text: SMS, token: "" });
    assert.equal(noToken.calls.length, 0);
    assert.match(noToken.notes[0].body, /ยังไม่ได้ตั้งค่ารหัสอุปกรณ์/);
    const file = await runAuto({ text: "file:///private/var/IMG_0001.PNG" });
    assert.equal(file.calls.length, 0);
    assert.match(file.notes[0].body, /ส่งรูปภาพมา/);
});
