// รันสคริปต์ Scriptable ตัวจริง (scriptable/DeptAuto.js) ในกล่องจำลองของ Scriptable เพื่อทดสอบพฤติกรรมในเครื่อง
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";

const code = fs.readFileSync(new URL("../scriptable/DeptAuto.js", import.meta.url), "utf8");

async function runAuto({ text, store = new Map(), respond = () => ({ success: true, status: "saved", message: "บันทึกแล้ว" }), token = "tok123" }) {
    const calls = [];
    const outputs = [];
    class Request {
        constructor(url) { this.url = url; }
        async loadJSON() {
            calls.push({ url: this.url, headers: this.headers, body: JSON.parse(this.body) });
            return respond();
        }
    }
    const fm = {
        libraryDirectory: () => "/lib",
        joinPath: (a, b) => a + "/" + b,
        fileExists: (p) => store.has(p),
        readString: (p) => store.get(p),
        writeString: (p, s) => { store.set(p, s); }
    };
    const sandbox = {
        args: { shortcutParameter: text },
        Keychain: { contains: () => Boolean(token), get: () => token },
        Request,
        FileManager: { local: () => fm },
        Script: { setShortcutOutput: (m) => outputs.push(m), complete() {} },
        console: { log() {} }
    };
    vm.createContext(sandbox);
    await vm.runInContext("(async () => {\n" + code + "\n})()", sandbox);
    return { calls, outputs, store };
}

const SMS = "บัตร KTC ยอด 533.93 THB OTP=016817 สำหรับ AMP*AIS SERVICE ห้ามเปิดเผยรหัส (Ref.KYBBYC)";

test("DeptAuto: ซ่อน OTP ในเครื่องก่อนส่ง และส่งด้วยรหัสอุปกรณ์", async () => {
    const { calls, outputs } = await runAuto({ text: SMS });
    assert.equal(calls.length, 1);
    assert.equal(calls[0].headers.Authorization, "Bearer tok123");
    assert.equal(calls[0].body.action, "auto");
    assert.match(calls[0].body.text, /OTP=\*{6}/);
    assert.doesNotMatch(calls[0].body.text, /016817/);
    assert.deepEqual(outputs, ["บันทึกแล้ว"]);
});

test("DeptAuto: ข้อความเดิมที่ตรวจแล้วไม่ส่งซ้ำ (ประหยัดโควต้า)", async () => {
    const store = new Map();
    await runAuto({ text: SMS, store });
    const again = await runAuto({ text: SMS, store });
    assert.equal(again.calls.length, 0);
    assert.deepEqual(again.outputs, []);
    const other = await runAuto({ text: "ขอบคุณที่ใช้บัตร KTC X-5703 ยอด 399 THB @Google YouTubePremiu", store });
    assert.equal(other.calls.length, 1);
});

test("DeptAuto: เซิร์ฟเวอร์ผิดพลาดไม่ถูกจำ ลองใหม่ได้", async () => {
    const store = new Map();
    const bad = () => ({ success: false, status: "error", message: "เกิดข้อผิดพลาด" });
    await runAuto({ text: SMS, store, respond: bad });
    const retry = await runAuto({ text: SMS, store });
    assert.equal(retry.calls.length, 1);
});

test("DeptAuto: ผลเงียบ (ข้อความว่าง) ไม่ส่งแจ้งเตือน และจำไว้", async () => {
    const store = new Map();
    const quiet = () => ({ success: true, status: "ignored", message: "" });
    const first = await runAuto({ text: SMS, store, respond: quiet });
    assert.deepEqual(first.outputs, []);
    const second = await runAuto({ text: SMS, store });
    assert.equal(second.calls.length, 0);
});

test("DeptAuto: ไม่มีข้อความ / ไม่มีรหัสอุปกรณ์ / ได้ไฟล์รูปแทนข้อความ", async () => {
    const empty = await runAuto({ text: "   " });
    assert.equal(empty.calls.length, 0);
    assert.deepEqual(empty.outputs, []);
    const noToken = await runAuto({ text: SMS, token: "" });
    assert.equal(noToken.calls.length, 0);
    assert.match(noToken.outputs[0], /ยังไม่ได้ตั้งค่ารหัสอุปกรณ์/);
    const file = await runAuto({ text: "file:///private/var/IMG_0001.PNG" });
    assert.equal(file.calls.length, 0);
    assert.match(file.outputs[0], /ข้อความจากรูปภาพ/);
});
