// ทดสอบฟังก์ชันสมาชิกใน index.html (findMemberDoc / deleteMember) โดยดึงโค้ดจริงออกมารันกับของจำลอง
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

const html = fs.readFileSync(new URL("../index.html", import.meta.url), "utf8").replace(/\r\n/g, "\n");

function extractApp() {
    const start = html.indexOf("            findMemberDoc(name) {");
    const end = html.indexOf("            async toggleAdminRole(");
    assert.ok(start > 0 && end > start, "ไม่พบเมธอดใน index.html");
    const body = html.slice(start, end).trim().replace(/,\s*$/, "");
    return new Function("deps", `const { doc, deleteDoc, db, alert, confirm } = deps; return { ${body} };`);
}

function makeApp({ role = "admin", currentUser = "ME", transactions = [], settlements = [], rawMembers, confirmResult = true } = {}) {
    const calls = { alerts: [], deleted: [], toasts: [] };
    const make = extractApp();
    const app = make({
        db: {},
        doc: (_db, col, id) => ({ col, id }),
        deleteDoc: async (ref) => { calls.deleted.push(ref); },
        alert: (m) => calls.alerts.push(m),
        confirm: () => confirmResult
    });
    app.data = {
        userRole: role, currentUser, transactions, settlements,
        rawMembers: rawMembers || [
            { id: "m1", name: "AOY" },
            { id: "m2", name: "G A M E 👾" },
            { id: "m3", name: "G A M E 👾", lineUserId: "U_game" },
            { id: "m4", name: "P'CHAMP" },
            { id: "m5", name: "NATTY' 245 🐎♾" }
        ]
    };
    app.showToast = (m) => calls.toasts.push(m);
    return { app, calls };
}

test("สคริปต์ในหน้าเว็บ (module) ไวยากรณ์ถูกต้อง", async () => {
    const m = html.match(/<script type="module">([\s\S]*?)<\/script>/);
    assert.ok(m, "ไม่พบ <script type=module>");
    const code = m[1].replace(/^\s*import .*$/gm, "");
    // ตรวจแค่การแยกวิเคราะห์ (ไม่รัน) — ใช้ AsyncFunction เพราะมี await ระดับบนสุดได้
    const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;
    assert.doesNotThrow(() => new AsyncFunction(code));
});

test("findMemberDoc: ชื่อซ้ำเลือกตัวที่ผูก LINE, ไม่สนตัวพิมพ์/ช่องว่างส่วนเกิน", () => {
    const { app } = makeApp();
    assert.equal(app.findMemberDoc("  g a  m e 👾 ").id, "m3");
    assert.equal(app.findMemberDoc("aoy").id, "m1");
    assert.equal(app.findMemberDoc("NOBODY"), null);
    assert.equal(app.findMemberDoc("P'CHAMP").id, "m4"); // ชื่อมี '
});

test("deleteMember: ไม่ใช่แอดมิน → ไม่ทำอะไร", async () => {
    const { app, calls } = makeApp({ role: "member" });
    await app.deleteMember("AOY");
    assert.equal(calls.deleted.length, 0);
    assert.equal(calls.alerts.length, 0);
});

test("deleteMember: ลบ GAME / ตัวเอง ไม่ได้", async () => {
    const { app, calls } = makeApp({ currentUser: "aoy" });
    await app.deleteMember("GAME");
    await app.deleteMember("AOY");
    assert.equal(calls.deleted.length, 0);
    assert.equal(calls.alerts.length, 2);
});

test("deleteMember: ชื่อยังอยู่ในบิล (ผู้จ่ายหรือ splits) หรือประวัติเคลียร์หนี้ → ไม่ลบ เพราะยอดคนอื่นจะผิด", async () => {
    for (const data of [
        { transactions: [{ payer: "AOY", splits: { ME: 1 } }] },
        { transactions: [{ payer: "ME", splits: { " aoy ": 1 } }] },
        { settlements: [{ from: "ME", to: "aoy" }] }
    ]) {
        const { app, calls } = makeApp(data);
        await app.deleteMember("AOY");
        assert.equal(calls.deleted.length, 0);
        assert.match(calls.alerts[0], /ลบ AOY ไม่ได้/);
    }
});

test("deleteMember: ชื่อมี ' ลบได้ และชื่อซ้ำลบทุกเอกสารของชื่อนั้น", async () => {
    const a = makeApp();
    await a.app.deleteMember("P'CHAMP");
    assert.deepEqual(a.calls.deleted, [{ col: "members", id: "m4" }]);
    const b = makeApp();
    await b.app.deleteMember("G A M E 👾");
    assert.deepEqual(b.calls.deleted.map((d) => d.id).sort(), ["m2", "m3"]);
    assert.match(b.calls.toasts[0], /ลบสมาชิก/);
});

test("deleteMember: ผู้ใช้กดยกเลิก → ไม่ลบ", async () => {
    const { app, calls } = makeApp({ confirmResult: false });
    await app.deleteMember("AOY");
    assert.equal(calls.deleted.length, 0);
});

test("ไม่เหลือการเรียกฟังก์ชันที่ไม่มีอยู่ (loadTransactions) และไม่มี onclick ที่ฝังชื่อสมาชิก", () => {
    assert.ok(!html.includes("this.loadTransactions"));
    assert.ok(!html.includes("deleteMember('${m}')"));
});
