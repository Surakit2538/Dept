// รันสคริปต์ Scriptable ตัวจริง (scriptable/DeptAuto.js) ในกล่องจำลองของ Scriptable เพื่อทดสอบพฤติกรรมในเครื่อง
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";

const code = fs.readFileSync(new URL("../scriptable/DeptAuto.js", import.meta.url), "utf8");
const SAVED = { success: true, status: "saved", message: "บันทึกรายจ่าย", id: "w1", type: "expense", amount: 533.93, desc: "AIS SERVICE", scriptVersion: "2.1.0" };

async function runAuto({ text = "", query = null, store = new Map(), respond = () => SAVED, token = "tok123", answers = [] }) {
    const calls = [];
    const notes = [];
    const outputs = [];
    const alerts = [];
    const opened = [];
    const queue = [...answers];
    // กล่องข้อความของ Scriptable: ตอบตามลำดับใน answers ({ i: ปุ่มที่กด (-1 = ยกเลิก), text: พิมพ์ในช่อง })
    class Alert {
        constructor() { this.actions = []; this.fields = []; }
        addTextField(ph, v) { this.fields.push(v); }
        addAction(t) { this.actions.push(t); }
        addDestructiveAction(t) { this.actions.push(t); }
        addCancelAction(t) { this.cancel = t; }
        async presentAlert() { alerts.push(this); this.answer = queue.shift() || { i: -1 }; return this.answer.i; }
        async presentSheet() { return this.presentAlert(); }
        textFieldValue(k) { return this.answer && this.answer.text !== undefined ? this.answer.text : this.fields[k]; }
    }
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
        Request, Notification, Alert,
        Safari: { open: (u) => opened.push(u) },
        FileManager: { local: () => fm },
        Script: { name: () => "DeptAuto", setShortcutOutput: (m) => outputs.push(m), complete() {} },
        console: { log() {} }
    };
    vm.createContext(sandbox);
    await vm.runInContext("(async () => {\n" + code + "\n})()", sandbox);
    return { calls, notes, outputs, store, alerts, opened };
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

test("DeptAuto: บันทึกแล้วเด้งแจ้งเตือน แตะหรือกด แก้ไข เปิดกล่องแก้ไขใน Scriptable", async () => {
    const { notes, outputs } = await runAuto({ text: SMS });
    assert.equal(notes.length, 1);
    const n = notes[0];
    assert.match(n.title, /พบรายจ่าย 533.93 บาท/);
    assert.match(n.body, /AIS SERVICE/);
    assert.match(n.body, /แตะเพื่อแก้ชื่อ/);
    assert.deepEqual(n.actions.map((x) => x.title), ["แก้ไข"]);
    assert.equal(n.actions[0].url, "scriptable:///run/DeptAuto?edit=w1");
    assert.equal(n.openURL, "scriptable:///run/DeptAuto?edit=w1");
    assert.deepEqual(outputs, [], "ไม่ส่งข้อความกลับให้คำสั่งลัด (กันแจ้งเตือนซ้ำกับคำสั่งลัดแบบเก่า)");
});

test("DeptAuto: สลิปโอนให้เพื่อน มีปุ่ม เคลียร์หนี้กับ ... และ บันทึกเป็นรายจ่าย แตะเฉยๆ ไปหน้าเคลียร์เงิน", async () => {
    const { notes } = await runAuto({ text: "สลิปโอนให้เพื่อน", respond: () => ({ success: true, status: "ignored", kind: "paid_back", counterparty: "CARE", amount: 100, message: "โอนให้ CARE", scriptVersion: "2.1.0" }) });
    assert.equal(notes.length, 1);
    assert.match(notes[0].title, /โอนให้ CARE 100\.00 บาท/);
    assert.deepEqual(notes[0].actions.map((a) => a.title), ["เคลียร์หนี้กับ CARE", "บันทึกเป็นรายจ่าย"]);
    assert.equal(notes[0].actions[0].url, "https://liff.line.me/2008948704-db2goT00#clear");
    assert.equal(notes[0].actions[1].url, "scriptable:///run/DeptAuto?save=personal");
    assert.equal(notes[0].openURL, "https://liff.line.me/2008948704-db2goT00#clear");
});

// เซิร์ฟเวอร์จำลองสำหรับกล่องแก้ไข: wallet-get คืนรายการ w1, action อื่นสำเร็จ
const ITEM = { id: "w1", type: "expense", date: "2026-11-18", desc: "KSHER*SHOP123", amount: 65, icon: "fa-receipt", card: "", unconfirmed: true };
const editServer = (body) => {
    if (body.action === "wallet-get") return { success: true, status: "listed", item: ITEM };
    if (body.action === "wallet-update") return { success: true, status: "saved", message: "แก้ไขแล้ว" };
    if (body.action === "wallet-delete") return { success: true, status: "deleted", message: "ลบรายการแล้ว" };
    if (body.action === "save") return { success: true, status: "saved", id: "w1", amount: 65, desc: "KSHER*SHOP123" };
    return { success: false, status: "error", message: "?" };
};

test("DeptAuto กล่องแก้ไข: แก้ชื่อแล้วกด บันทึกส่วนตัว = ส่งชื่อใหม่และยืนยัน (ไม่ส่งหมวดถ้าไม่ได้เปลี่ยน)", async () => {
    const { calls, alerts, notes } = await runAuto({ query: { edit: "w1" }, respond: editServer, answers: [{ i: 0, text: "กาแฟอเมซอน" }, { i: 0 }] });
    assert.deepEqual(calls.map((c) => c.body.action), ["wallet-get", "wallet-update"]);
    assert.deepEqual(calls[1].body, { action: "wallet-update", id: "w1", desc: "กาแฟอเมซอน", confirm: true });
    assert.match(alerts[0].title, /รายจ่าย 65\.00 บาท/);
    assert.equal(alerts[0].fields[0], "KSHER*SHOP123", "ช่องชื่อเติมชื่อเดิมไว้ให้");
    assert.deepEqual(alerts[0].actions, ["บันทึกส่วนตัว", "หารกับเพื่อน", "เปลี่ยนหมวด", "ไม่ใช่รายจ่าย (ลบ)"]);
    assert.match(alerts[1].title, /ส่วนตัวแล้ว/);
    assert.equal(notes.length, 0, "ทำในแอป ไม่ต้องเด้งแจ้งเตือนเพิ่ม");
});

test("DeptAuto กล่องแก้ไข: เปลี่ยนหมวดแล้วกลับมาหน้าเดิม ชื่อที่พิมพ์ไว้ไม่หาย แล้วส่งหมวดใหม่", async () => {
    const { calls, alerts } = await runAuto({ query: { edit: "w1" }, respond: editServer, answers: [{ i: 2, text: "ดูหนัง" }, { i: 6 }, { i: 0 }, { i: 0 }] });
    assert.equal(alerts[1].title, "เลือกหมวด");
    assert.equal(alerts[2].fields[0], "ดูหนัง");
    assert.match(alerts[2].message, /หมวด: บันเทิง/);
    assert.deepEqual(calls[1].body, { action: "wallet-update", id: "w1", desc: "ดูหนัง", icon: "fa-film", confirm: true });
});

test("DeptAuto กล่องแก้ไข: หารกับเพื่อน = ส่งชื่อ (ยังไม่ยืนยัน) แล้วเปิดเว็บหน้าหารของรายการนั้น", async () => {
    const { calls, opened } = await runAuto({ query: { edit: "w1" }, respond: editServer, answers: [{ i: 1, text: "ชาบู" }] });
    assert.deepEqual(calls[1].body, { action: "wallet-update", id: "w1", desc: "ชาบู" });
    assert.deepEqual(opened, ["https://liff.line.me/2008948704-db2goT00#split=w1"]);
});

test("DeptAuto กล่องแก้ไข: ลบ ต้องยืนยันก่อน, ไว้ทีหลัง ไม่แก้อะไร", async () => {
    const del = await runAuto({ query: { edit: "w1" }, respond: editServer, answers: [{ i: 3 }, { i: 0 }, { i: 0 }] });
    assert.deepEqual(del.calls.map((c) => c.body.action), ["wallet-get", "wallet-delete"]);
    assert.match(del.alerts[2].title, /ลบแล้ว/);
    const keep = await runAuto({ query: { edit: "w1" }, respond: editServer, answers: [{ i: 3 }, { i: -1 }, { i: -1 }] });
    assert.deepEqual(keep.calls.map((c) => c.body.action), ["wallet-get"], "กด ไม่ลบ แล้วกลับหน้าเดิม กด ไว้ทีหลัง");
    const later = await runAuto({ query: { edit: "w1" }, respond: editServer, answers: [{ i: -1 }] });
    assert.deepEqual(later.calls.map((c) => c.body.action), ["wallet-get"]);
});

test("DeptAuto กล่องแก้ไข: รายรับมีแค่ บันทึกรายรับ / ลบ (ไม่มีหาร ไม่มีหมวด)", async () => {
    const income = (body) => body.action === "wallet-get" ? { status: "listed", item: { ...ITEM, type: "income", desc: "รับจาก AOY" } } : editServer(body);
    const { alerts, calls } = await runAuto({ query: { edit: "w1" }, respond: income, answers: [{ i: 0, text: "เงินเดือน" }, { i: 0 }] });
    assert.deepEqual(alerts[0].actions, ["บันทึกรายรับ", "ไม่ใช่รายรับ (ลบ)"]);
    assert.deepEqual(calls[1].body, { action: "wallet-update", id: "w1", desc: "เงินเดือน", confirm: true });
});

test("DeptAuto: ไม่พบรายการ แจ้งในกล่อง", async () => {
    const { alerts } = await runAuto({ query: { edit: "w1" }, respond: () => ({ success: false, status: "error", message: "ไม่พบรายการนี้" }), answers: [{ i: 0 }] });
    assert.match(alerts[0].title, /ไม่พบรายการนี้/);
});

test("DeptAuto: ปุ่ม ส่วนตัว/ยืนยัน ของแจ้งเตือนรุ่นเก่า (confirm=) เปิดกล่องแก้ไขแทน", async () => {
    const { calls } = await runAuto({ query: { confirm: "w1" }, respond: editServer, answers: [{ i: 0 }, { i: 0 }] });
    assert.deepEqual(calls.map((c) => c.body.action), ["wallet-get", "wallet-update"]);
});

test("DeptAuto: กด บันทึกเป็นรายจ่าย (save=personal) บันทึกสลิปที่ค้างไว้ แล้วเปิดกล่องแก้ไขต่อ", async () => {
    const { calls } = await runAuto({ query: { save: "personal" }, respond: editServer, answers: [{ i: -1 }] });
    assert.deepEqual(calls[0].body, { action: "save", splitType: "personal" });
    assert.deepEqual(calls[1].body, { action: "wallet-get", id: "w1" });
    const expired = await runAuto({ query: { save: "personal" }, respond: () => ({ success: false, status: "expired", message: "สลิปหมดอายุแล้ว (เกิน 30 นาที)" }), answers: [{ i: 0 }] });
    assert.match(expired.alerts[0].message, /หมดอายุ/);
});

test("DeptAuto: เงินเข้า แจ้งเตือนมีปุ่ม แก้ไข ปุ่มเดียว", async () => {
    const { notes } = await runAuto({ text: "สลิปเงินเข้า", respond: () => ({ ...SAVED, type: "income", amount: 500, desc: "รับจาก AOY" }) });
    assert.match(notes[0].title, /พบเงินเข้า/);
    assert.deepEqual(notes[0].actions.map((a) => a.title), ["แก้ไข"]);
});

test("DeptAuto: เวอร์ชันสคริปต์ตรงกับที่เซิร์ฟเวอร์ประกาศ", async () => {
    const { LATEST_AUTO_VERSION } = await import("../lib/shortcut-service.mjs");
    assert.equal(/SCRIPT_VERSION = "([\d.]+)"/.exec(code)[1], LATEST_AUTO_VERSION);
});

test("DeptAuto: ข้อความเดิมที่ตรวจแล้วไม่ส่งซ้ำ และผลเงียบไม่แจ้งเตือน", async () => {
    const store = new Map();
    await runAuto({ text: SMS, store });
    const again = await runAuto({ text: SMS, store });
    assert.equal(again.calls.length, 0);
    assert.equal(again.notes.length, 0);
    const quiet = await runAuto({ text: "ข้อความอื่น", store, respond: () => ({ success: true, status: "ignored", message: "", scriptVersion: "2.1.0" }) });
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
