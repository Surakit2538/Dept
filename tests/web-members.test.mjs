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
    return new Function("deps", `const { doc, deleteDoc, updateDoc, db, alert, confirm, prompt } = deps; return { ${body} };`);
}

function makeApp({ role = "admin", currentUser = "ME", transactions = [], settlements = [], rawMembers, confirmResult = true, answers = [] } = {}) {
    const calls = { alerts: [], deleted: [], toasts: [], updated: [] };
    const make = extractApp();
    const app = make({
        db: {},
        doc: (_db, col, id) => ({ col, id }),
        deleteDoc: async (ref) => { calls.deleted.push(ref); },
        updateDoc: async (ref, data) => { calls.updated.push({ ref, data }); },
        prompt: () => (answers.length ? answers.shift() : null),
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
    app.renderMemberList = () => {};
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

test("ล็อกอิน: ไม่สร้างสมาชิกซ้ำ (ตรวจฐานข้อมูลจริงก่อนสร้างเสมอ)", () => {
    assert.match(html, /Not in cache\. Checking DB/);
    assert.ok(!html.includes("if (!usedCache && !existingByName)"));
    assert.equal((html.match(/const dupCheck = await getDocs\(query\(collection\(db, "members"\), where\("lineUserId", "==", userId\)\)\)/g) || []).length, 2);
});

test("editMemberInfo: แอดมินกรอกชื่อจริง/พร้อมเพย์ให้เพื่อนได้ และตรวจรูปแบบ", async () => {
    const ok = makeApp({ answers: ["สมชาย ใจดี", "081-234-5678"] });
    await ok.app.editMemberInfo("AOY");
    assert.equal(ok.calls.updated.length, 1);
    assert.deepEqual([ok.calls.updated[0].ref.id, ok.calls.updated[0].data.realName, ok.calls.updated[0].data.promptpay], ["m1", "สมชาย ใจดี", "0812345678"]);

    const badPp = makeApp({ answers: ["สมชาย", "12345"] });
    await badPp.app.editMemberInfo("AOY");
    assert.equal(badPp.calls.updated.length, 0);
    assert.equal(badPp.calls.alerts.length, 1);

    const cancel = makeApp({ answers: [null] });
    await cancel.app.editMemberInfo("AOY");
    assert.equal(cancel.calls.updated.length, 0);

    const notAdmin = makeApp({ role: "member", answers: ["x", "0812345678"] });
    await notAdmin.app.editMemberInfo("AOY");
    assert.equal(notAdmin.calls.updated.length, 0);
});

test("ฟอร์มกรอกข้อมูล: ชื่ออังกฤษไม่บังคับ", () => {
    assert.ok(!html.includes('id="onboard-english-name" required'));
    assert.ok(html.includes("return Boolean(hasRealName && hasPromptpay);"));
    assert.ok(!html.includes("return hasRealName && hasEnglishName && hasPromptpay;"));
});
