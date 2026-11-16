// ตั้งค่า iPhone ในเว็บใหม่: สร้างรหัสอุปกรณ์ แล้วคัดลอกสคริปต์ติดตั้ง (Scriptable) ให้วางได้เลย ไม่ต้องไปหน้าเดิม
import { useState } from "preact/hooks";
import { Icon } from "./icons.jsx";
import { Sheet } from "./ui.jsx";
import { makeDeviceToken, revokeDeviceTokens } from "./data.js";

/** สคริปต์ติดตั้งที่ผู้ใช้วางใน Scriptable (ตรงกับของหน้าเดิม: เก็บรหัสใน Keychain แล้วโหลด 3 สคริปต์ล่าสุด) */
export function installerScript(token, userName, baseUrl) {
    const safeName = String(userName || "สมาชิก").replace(/[`$\\"\r\n]/g, "");
    return [
        "// Variables used by Scriptable.",
        "// These must be at the very top of the file. Do not edit.",
        "// icon-color: cyan; icon-glyph: download;",
        "",
        "/**",
        " * Dept Money - ตัวติดตั้งอัตโนมัติ (DeptInstaller)",
        ` * รหัสประจำตัวสำหรับ: ${safeName}`,
        " */",
        `const DEVICE_TOKEN = ${JSON.stringify(String(token))};`,
        `const BASE_URL = ${JSON.stringify(String(baseUrl))};`,
        "",
        'Keychain.set("dept_token", DEVICE_TOKEN);',
        "",
        'const FILES = ["DeptWidget.js", "DeptSlip.js", "DeptAuto.js"];',
        "const downloaded = {};",
        'let failedFile = "";',
        "for (const name of FILES) {",
        "    try {",
        "        const code = await new Request(`${BASE_URL}/scriptable/${name}`).loadString();",
        '        if (!code.includes("SCRIPT_VERSION") || !code.includes("Script.complete();") || code.includes("<!DOCTYPE html>")) { failedFile = name; break; }',
        "        downloaded[name] = code;",
        "    } catch (e) { failedFile = name; break; }",
        "}",
        "",
        "if (failedFile) {",
        "    const errAlert = new Alert();",
        '    errAlert.title = "ติดตั้งไม่สำเร็จ";',
        "    errAlert.message = `ดาวน์โหลดไฟล์ ${failedFile} ไม่สมบูรณ์ (ยังไม่มีการเปลี่ยนแปลงใดๆ) กรุณาตรวจสอบอินเทอร์เน็ตแล้วลองใหม่อีกครั้ง`;",
        '    errAlert.addAction("ตกลง");',
        "    await errAlert.present();",
        "    Script.complete();",
        "} else {",
        "    const fm = FileManager.iCloud() ? FileManager.iCloud() : FileManager.local();",
        "    for (const name of FILES) {",
        "        fm.writeString(fm.joinPath(fm.documentsDirectory(), name), downloaded[name]);",
        "    }",
        '    let confirmedUser = "";',
        "    try {",
        "        const testReq = new Request(`${BASE_URL}/api/widget-summary`);",
        '        testReq.headers = { "Authorization": `Bearer ${DEVICE_TOKEN}` };',
        "        const testRes = await testReq.loadJSON();",
        '        if (testRes && testRes.success) { confirmedUser = testRes.user || ""; }',
        "    } catch (e) {}",
        "    const successAlert = new Alert();",
        '    successAlert.title = "ติดตั้งสำเร็จ";',
        '    successAlert.message = `ติดตั้ง DeptWidget, DeptSlip และ DeptAuto เรียบร้อยแล้ว\\n\\nสมาชิก: ${confirmedUser}\\nต่อไปให้เพิ่ม Widget บนหน้าจอโฮม และสร้างคำสั่งลัดสแกนสลิปตามคู่มือครับ`;',
        '    successAlert.addAction("เรียบร้อย");',
        "    await successAlert.present();",
        "    Script.complete();",
        "}",
        ""
    ].join("\n");
}

async function copyText(text) {
    try {
        if (navigator.clipboard && navigator.clipboard.writeText) { await navigator.clipboard.writeText(text); return true; }
    } catch (e) { /* ลองวิธีสำรอง */ }
    try {
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.setAttribute("readonly", "");
        ta.style.cssText = "position:fixed;top:0;left:0;opacity:0";
        document.body.appendChild(ta);
        ta.select();
        const ok = document.execCommand("copy");
        ta.remove();
        return ok;
    } catch (e) { return false; }
}

export function IphoneSheet({ onClose }) {
    const [script, setScript] = useState("");
    const [copied, setCopied] = useState(false);
    const [busy, setBusy] = useState(false);
    const [msg, setMsg] = useState(null);

    async function generate() {
        setBusy(true);
        setMsg(null);
        setCopied(false);
        try {
            const r = await makeDeviceToken();
            const code = installerScript(r.token, r.name, location.origin);
            setScript(code);
            setCopied(await copyText(code));
        } catch (e) {
            setMsg({ ok: false, text: e.message });
        }
        setBusy(false);
    }
    async function revoke() {
        setBusy(true);
        setMsg(null);
        try {
            const r = await revokeDeviceTokens();
            setScript("");
            setMsg({ ok: true, text: r.message || "ยกเลิกรหัสอุปกรณ์แล้ว" });
        } catch (e) {
            setMsg({ ok: false, text: e.message });
        }
        setBusy(false);
    }

    return (
        <Sheet title="ตั้งค่า iPhone" onClose={onClose}>
            <p class="lbl">ติดตั้ง Widget และสแกนสลิปอัตโนมัติ ทำครั้งเดียวต่อเครื่อง ต้องมีแอป Scriptable ในเครื่องก่อน</p>
            <ol class="steps">
                <li><b>กด &ldquo;สร้างรหัสและคัดลอกสคริปต์&rdquo;</b> ด้านล่าง สคริปต์ติดตั้งจะถูกคัดลอกให้อัตโนมัติ</li>
                <li>เปิดแอป <b>Scriptable</b> แล้วกด + สร้างสคริปต์ใหม่ (ชื่ออะไรก็ได้ เช่น DeptInstaller) ลบโค้ดเดิมทั้งหมด แล้ว <b>วาง</b></li>
                <li>กดปุ่ม ▶ ต้องขึ้นว่า &ldquo;ติดตั้งสำเร็จ&rdquo; และมีสคริปต์ DeptWidget, DeptSlip, DeptAuto เพิ่มขึ้นมา</li>
                <li>เพิ่ม Widget บนหน้าจอโฮม (Scriptable แล้วเลือกสคริปต์ DeptWidget) และตั้งคำสั่งลัดสแกนสลิปตาม <a href="/shortcut-guide.html">คู่มือ</a></li>
            </ol>
            <button type="button" class="btn block" disabled={busy} onClick={generate}>{busy ? "กำลังสร้างรหัส" : script ? "สร้างรหัสใหม่และคัดลอกอีกครั้ง" : "สร้างรหัสและคัดลอกสคริปต์"}</button>
            {script && (
                <div class="copied" role="status">
                    <p class={copied ? "msg ok" : "msg"}><Icon name={copied ? "check" : "alert"} size={16} /> {copied ? "คัดลอกสคริปต์แล้ว ไปวางใน Scriptable ได้เลย" : "คัดลอกอัตโนมัติไม่สำเร็จ กดปุ่มด้านล่างเพื่อคัดลอกเอง"}</p>
                    <button type="button" class="btn ghost block" onClick={async () => setCopied(await copyText(script))}>คัดลอกสคริปต์อีกครั้ง</button>
                    <p class="lbl">สร้างรหัสใหม่ทุกครั้ง รหัสเก่าของคุณจะใช้ไม่ได้ ต้องวางสคริปต์ใหม่ใน Scriptable ด้วย</p>
                </div>
            )}
            {msg && <p class={`msg ${msg.ok ? "ok" : ""}`} role={msg.ok ? "status" : "alert"}>{msg.text}</p>}
            <button type="button" class="btn ghost block danger-text" disabled={busy} onClick={revoke}>ยกเลิกรหัสอุปกรณ์ทั้งหมด</button>
            <p class="lbl">ใช้เมื่อทำเครื่องหาย หลังยกเลิก Widget และคำสั่งลัดจะดูข้อมูลไม่ได้จนกว่าจะสร้างรหัสใหม่</p>
        </Sheet>
    );
}
