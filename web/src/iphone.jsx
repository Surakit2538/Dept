// ตั้งค่า iPhone ในเว็บใหม่: สร้างรหัสอุปกรณ์ แล้วคัดลอกสคริปต์ติดตั้ง (Scriptable) ให้วางได้เลย ไม่ต้องไปหน้าเดิม
import { useState } from "preact/hooks";
import { Icon, Mark } from "./icons.jsx";
import { Sheet } from "./ui.jsx";
import { makeDeviceToken, revokeDeviceTokens } from "./data.js";

/** สคริปต์ติดตั้งที่ผู้ใช้วางใน Scriptable: เก็บรหัสใน Keychain แล้วโหลดสคริปต์ล่าสุด (DeptWidget, DeptAuto) และเสนอลบสคริปต์ Dept เก่า */
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
        "Keychain.set(\"dept_token\", DEVICE_TOKEN);",
        "",
        "const FILES = [\"DeptWidget.js\", \"DeptAuto.js\"];",
        "const downloaded = {};",
        "let failedFile = \"\";",
        "for (const name of FILES) {",
        "    try {",
        "        const code = await new Request(`${BASE_URL}/scriptable/${name}`).loadString();",
        "        if (!code.includes(\"SCRIPT_VERSION\") || !code.includes(\"Script.complete();\") || code.includes(\"<!DOCTYPE html>\")) { failedFile = name; break; }",
        "        downloaded[name] = code;",
        "    } catch (e) { failedFile = name; break; }",
        "}",
        "",
        "if (failedFile) {",
        "    const errAlert = new Alert();",
        "    errAlert.title = \"ติดตั้งไม่สำเร็จ\";",
        "    errAlert.message = `ดาวน์โหลดไฟล์ ${failedFile} ไม่สมบูรณ์ (ยังไม่มีการเปลี่ยนแปลงใดๆ) กรุณาตรวจสอบอินเทอร์เน็ตแล้วลองใหม่อีกครั้ง`;",
        "    errAlert.addAction(\"ตกลง\");",
        "    await errAlert.present();",
        "    Script.complete();",
        "} else {",
        "    const fm = FileManager.iCloud() ? FileManager.iCloud() : FileManager.local();",
        "    const dir = fm.documentsDirectory();",
        "    const installed = [];",
        "    for (const name of FILES) {",
        "        fm.writeString(fm.joinPath(dir, name), downloaded[name]);",
        "        const v = /SCRIPT_VERSION\\s*=\\s*\"([^\"]+)\"/.exec(downloaded[name]);",
        "        installed.push(name.replace(\".js\", \"\") + \" v\" + (v ? v[1] : \"?\"));",
        "    }",
        "    let confirmedUser = \"\";",
        "    try {",
        "        const testReq = new Request(`${BASE_URL}/api/widget-summary`);",
        "        testReq.headers = { \"Authorization\": `Bearer ${DEVICE_TOKEN}` };",
        "        const testRes = await testReq.loadJSON();",
        "        if (testRes && testRes.success) { confirmedUser = testRes.user || \"\"; }",
        "    } catch (e) {}",
        "",
        "    // สคริปต์ Dept ตัวเก่าหรือชื่ออื่นที่ระบบปัจจุบันไม่ใช้แล้ว (ดูจากเนื้อหาที่มีรหัสอุปกรณ์หรือที่อยู่เว็บ Dept)",
        "    const keep = FILES.concat([\"DeptInstaller.js\", Script.name() + \".js\"]);",
        "    const stale = [];",
        "    for (const f of fm.listContents(dir)) {",
        "        if (!f.endsWith(\".js\") || keep.includes(f)) continue;",
        "        try {",
        "            if (/dept_token|dept-game/i.test(fm.readString(fm.joinPath(dir, f)))) stale.push(f);",
        "        } catch (e) {}",
        "    }",
        "",
        "    const successAlert = new Alert();",
        "    successAlert.title = \"ติดตั้งสำเร็จ\";",
        "    successAlert.message = `สมาชิก: ${confirmedUser}\\n\\n${installed.join(\"\\n\")}\\n\\nต่อไปให้เพิ่ม Widget บนหน้าจอโฮม และตั้งคำสั่งลัดตามคู่มือครับ`;",
        "    successAlert.addAction(\"เรียบร้อย\");",
        "    await successAlert.present();",
        "",
        "    if (stale.length > 0) {",
        "        const staleAlert = new Alert();",
        "        staleAlert.title = \"พบสคริปต์ Dept ที่ไม่ใช้แล้ว\";",
        "        staleAlert.message = `${stale.join(\"\\n\")}\\n\\nระบบปัจจุบันไม่เรียกสคริปต์เหล่านี้ ลบออกไหม (ถ้าคำสั่งลัดของคุณยังเรียกชื่อเหล่านี้อยู่ ให้เลือก เก็บไว้ ก่อน)`;",
        "        staleAlert.addDestructiveAction(\"ลบทั้งหมด\");",
        "        staleAlert.addCancelAction(\"เก็บไว้\");",
        "        const pick = await staleAlert.presentAlert();",
        "        if (pick === 0) {",
        "            for (const f of stale) fm.remove(fm.joinPath(dir, f));",
        "        }",
        "    }",
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

function IphoneInfographicSvg() {
    return (
        <svg viewBox="0 0 480 150" class="ip-diagram-svg" aria-label="แผนผังระบบ Dept Money บน iPhone">
            {/* โหนด 1: เว็บไซต์ Dept Money */}
            <rect x="8" y="10" width="130" height="130" rx="10" fill="var(--chip)" stroke="var(--line)" stroke-width="1" />
            <circle cx="28" cy="30" r="10" fill="var(--accent)" />
            <text x="28" y="34" fill="var(--accent-ink)" font-size="11" font-weight="600" text-anchor="middle">1</text>
            <text x="44" y="34" fill="var(--ink)" font-size="13" font-weight="600">เว็บ Dept</text>
            
            <rect x="18" y="52" width="110" height="28" rx="6" fill="var(--surface)" stroke="var(--line)" stroke-width="1" />
            <text x="73" y="70" fill="var(--accent)" font-size="11" font-weight="600" text-anchor="middle" font-family="var(--mono)">Device Token</text>
            
            <text x="73" y="102" fill="var(--mute)" font-size="11" text-anchor="middle">ออกรหัสเฉพาะเครื่อง</text>
            <text x="73" y="118" fill="var(--mute)" font-size="11" text-anchor="middle">ผูกบัญชีอัตโนมัติ</text>

            {/* เชื่อม 1 -> 2 */}
            <path d="M 138 75 L 170 75" stroke="var(--accent)" stroke-width="1.8" stroke-dasharray="3 3" />
            <polygon points="168,71 176,75 168,79" fill="var(--accent)" />
            <text x="154" y="68" fill="var(--accent)" font-size="11" font-weight="500" text-anchor="middle">คัดลอก</text>

            {/* โหนด 2: Scriptable */}
            <rect x="176" y="10" width="134" height="130" rx="10" fill="var(--chip)" stroke="var(--line)" stroke-width="1" />
            <circle cx="196" cy="30" r="10" fill="var(--accent)" />
            <text x="196" y="34" fill="var(--accent-ink)" font-size="11" font-weight="600" text-anchor="middle">2</text>
            <text x="212" y="34" fill="var(--ink)" font-size="13" font-weight="600">Scriptable</text>

            <rect x="186" y="52" width="114" height="28" rx="6" fill="var(--surface)" stroke="var(--line)" stroke-width="1" />
            <text x="243" y="70" fill="var(--ink)" font-size="11" font-weight="600" text-anchor="middle">รัน DeptInstaller ▶</text>

            <text x="243" y="102" fill="var(--mute)" font-size="11" text-anchor="middle">บันทึกลง Keychain</text>
            <text x="243" y="118" fill="var(--mute)" font-size="11" text-anchor="middle">โหลด 2 สคริปต์ลงเครื่อง</text>

            {/* เชื่อม 2 -> 3 */}
            <path d="M 310 65 L 326 65 L 326 42 L 340 42" stroke="var(--accent)" stroke-width="1.8" fill="none" stroke-dasharray="3 3" />
            <polygon points="338,38 346,42 338,46" fill="var(--accent)" />
            
            <path d="M 310 85 L 326 85 L 326 108 L 340 108" stroke="var(--accent)" stroke-width="1.8" fill="none" stroke-dasharray="3 3" />
            <polygon points="338,104 346,108 338,112" fill="var(--accent)" />

            {/* โหนด 3A: DeptWidget */}
            <rect x="346" y="10" width="126" height="60" rx="8" fill="var(--chip)" stroke="var(--line)" stroke-width="1" />
            <circle cx="362" cy="28" r="8" fill="var(--receive)" />
            <text x="362" y="32" fill="var(--accent-ink)" font-size="11" font-weight="600" text-anchor="middle">3</text>
            <text x="376" y="32" fill="var(--ink)" font-size="12" font-weight="600">DeptWidget</text>
            <text x="356" y="52" fill="var(--mute)" font-size="11">วิดเจ็ต 2 ช่องหน้าโฮม</text>

            {/* โหนด 3B: DeptAuto */}
            <rect x="346" y="80" width="126" height="60" rx="8" fill="var(--chip)" stroke="var(--line)" stroke-width="1" />
            <circle cx="362" cy="98" r="8" fill="var(--receive)" />
            <text x="362" y="102" fill="var(--accent-ink)" font-size="11" font-weight="600" text-anchor="middle">3</text>
            <text x="376" y="102" fill="var(--ink)" font-size="12" font-weight="600">DeptAuto</text>
            <text x="356" y="122" fill="var(--mute)" font-size="11">บันทึกเอง แล้วถาม</text>
        </svg>
    );
}

export function IphoneSheet({ onClose }) {
    const [view, setView] = useState("steps"); // "steps" | "infographic"
    const [script, setScript] = useState("");
    const [userName, setUserName] = useState("");
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
            setUserName(r.name || "");
            const ok = await copyText(code);
            setCopied(ok);
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
            setUserName("");
            setMsg({ ok: true, text: r.message || "ยกเลิกรหัสอุปกรณ์แล้ว" });
        } catch (e) {
            setMsg({ ok: false, text: e.message });
        }
        setBusy(false);
    }

    return (
        <Sheet title="ตั้งค่า iPhone" onClose={onClose} class="sheet-wide">
            <div class="ip-wrap">
                <p class="ip-desc">ติดตั้ง Widget และบันทึกรายจ่ายอัตโนมัติ (สลิป, SMS บัตร, อีเมลธนาคาร) ทำครั้งเดียวต่อเครื่อง</p>
                
                {/* สลับมุมมอง */}
                <div class="seg ip-seg" role="tablist" aria-label="เลือกมุมมอง">
                    <button type="button" role="tab" aria-selected={view === "steps"} class={view === "steps" ? "on" : ""} onClick={() => setView("steps")}>
                        <Icon name="sliders" size={14} /> วิธีติดตั้ง
                    </button>
                    <button type="button" role="tab" aria-selected={view === "infographic"} class={view === "infographic" ? "on" : ""} onClick={() => setView("infographic")}>
                        <Icon name="chart" size={14} /> แผนผัง Infographic
                    </button>
                </div>

                {view === "steps" && (
                    <>
                        {/* แถบสรุปขั้นตอน */}
                        <div class="ip-progress-bar" aria-hidden="true">
                            <div class={`ip-progress-step ${script ? "done" : "active"}`}>
                                <span class="ip-progress-dot">{script ? <Icon name="check" size={11} /> : "1"}</span>
                                <span>สร้างรหัส</span>
                            </div>
                            <div class="ip-progress-sep" />
                            <div class={`ip-progress-step ${script ? "active" : ""}`}>
                                <span class="ip-progress-dot">2</span>
                                <span>รันสคริปต์</span>
                            </div>
                            <div class="ip-progress-sep" />
                            <div class="ip-progress-step">
                                <span class="ip-progress-dot">3</span>
                                <span>พร้อมใช้งาน</span>
                            </div>
                        </div>

                        {/* ขั้นที่ 1 */}
                        <section class="ip-card">
                            <div class="ip-step-hd">
                                <div class={`ip-badge ${script ? "done" : "active"}`}>
                                    {script ? <Icon name="check" size={14} /> : "1"}
                                </div>
                                <div class="ip-step-t">
                                    <h3>ขั้นที่ 1: สร้างรหัสและคัดลอกโค้ด</h3>
                                </div>
                                {script && <span class="ip-status-pill done">คัดลอกแล้ว</span>}
                            </div>

                            <button type="button" class="btn block" disabled={busy} onClick={generate}>
                                <Icon name="key" size={16} />
                                {busy ? "กำลังสร้างรหัส..." : script ? "สร้างรหัสใหม่และคัดลอกอีกครั้ง" : "สร้างรหัสและคัดลอกสคริปต์"}
                            </button>

                            {script && (
                                <div class="ip-success-box" role="status">
                                    <div class="ip-success-head">
                                        <span class="ip-inline-msg">
                                            <Icon name={copied ? "check" : "alert"} size={16} />
                                            {copied ? "คัดลอกโค้ดแล้ว ไปวางใน Scriptable ได้เลย" : "คัดลอกอัตโนมัติไม่สำเร็จ"}
                                        </span>
                                        {userName && <span class="ip-status-pill">{userName}</span>}
                                    </div>
                                    <div class="ip-code-box">
                                        <span class="ip-code-preview">DeptInstaller.js</span>
                                        <button type="button" class="btn sm ghost" onClick={async () => setCopied(await copyText(script))}>
                                            <Icon name="copy" size={14} /> คัดลอกอีกครั้ง
                                        </button>
                                    </div>
                                </div>
                            )}
                        </section>

                        {/* ขั้นที่ 2 */}
                        <section class="ip-card">
                            <div class="ip-step-hd">
                                <div class="ip-badge">2</div>
                                <div class="ip-step-t">
                                    <h3>ขั้นที่ 2: วางและรันใน Scriptable</h3>
                                </div>
                            </div>

                            <div class="ip-substeps">
                                <div class="ip-substep-item">
                                    <span class="ip-num-bullet">1</span>
                                    <span>เปิดแอป <b>Scriptable</b></span>
                                </div>
                                <div class="ip-substep-item">
                                    <span class="ip-num-bullet">2</span>
                                    <span>กด <span class="ip-kbd">+</span> สร้างสคริปต์ใหม่</span>
                                </div>
                                <div class="ip-substep-item">
                                    <span class="ip-num-bullet">3</span>
                                    <span>ลบโค้ดเดิม แล้วกด <b>วาง (Paste)</b></span>
                                </div>
                                <div class="ip-substep-item">
                                    <span class="ip-num-bullet">4</span>
                                    <span>กดปุ่ม <span class="ip-kbd"><Icon name="play" size={10} /> รัน</span></span>
                                </div>
                            </div>

                            <div class="ip-highlight-box">
                                <Icon name="sparkle" size={16} />
                                <span>เมื่อขึ้น &ldquo;ติดตั้งสำเร็จ&rdquo; จะได้สคริปต์ <b>DeptWidget</b> และ <b>DeptAuto</b> ในแอป</span>
                            </div>

                            <div>
                                <a href="https://apps.apple.com/th/app/scriptable/id1405459188" target="_blank" rel="noopener" class="ip-appstore-link">
                                    <Icon name="external" size={12} /> ดาวน์โหลด Scriptable บน App Store (ฟรี)
                                </a>
                            </div>
                        </section>

                        {/* ขั้นที่ 3 */}
                        <section class="ip-card">
                            <div class="ip-step-hd">
                                <div class="ip-badge">3</div>
                                <div class="ip-step-t">
                                    <h3>ขั้นที่ 3: นำไปใช้งานบน iPhone</h3>
                                </div>
                            </div>

                            <div class="ip-two-col">
                                <div class="ip-subcard">
                                    <h4><Icon name="layers" size={16} /> วิดเจ็ตหน้าจอโฮม</h4>
                                    <p>กดค้างหน้าจอโฮม &gt; กด + &gt; Scriptable &gt; เลือก DeptWidget</p>
                                </div>
                                <div class="ip-subcard">
                                    <h4><Icon name="qr" size={16} /> บันทึกรายจ่ายเอง</h4>
                                    <p>สร้างคำสั่งลัด Dept บันทึก แล้วตั้งให้ทำงานเองตามคู่มือ</p>
                                    <a href="/shortcut-guide.html" target="_blank" rel="noopener" class="btn sm ghost ip-guide-btn">
                                        <Icon name="external" size={14} /> คู่มือคำสั่งลัด
                                    </a>
                                </div>
                            </div>
                        </section>

                        {/* ขั้นที่ 4 */}
                        <section class="ip-card">
                            <div class="ip-step-hd">
                                <div class="ip-badge">4</div>
                                <div class="ip-step-t">
                                    <h3>ขั้นที่ 4: ตั้งระบบอัตโนมัติ (ไม่ต้องกดเอง)</h3>
                                </div>
                            </div>
                            <p class="ip-desc">ทุกแบบเรียกคำสั่งลัด <b>Dept บันทึก</b> ตัวเดียว แล้ว iPhone จะเด้งแจ้งเตือน แตะเพื่อแก้ชื่อ แล้วเลือก <b>ส่วนตัว</b> หรือ <b>หารกับเพื่อน</b></p>
                            <div class="ip-substeps">
                                <div class="ip-substep-item"><span><b>ปิดแอปธนาคาร</b> อ่านสลิปหรือภาพหน้าจอล่าสุด</span></div>
                                <div class="ip-substep-item"><span><b>ข้อความ SMS ที่มีคำว่า THB</b> รายจ่ายบัตร KTC, CardX, ttb</span></div>
                                <div class="ip-substep-item"><span><b>อีเมลจากธนาคาร</b> รายจ่ายบัตรหรือบัญชีที่ธนาคารส่งอีเมลแจ้ง</span></div>
                            </div>
                            <a href="/shortcut-guide.html#auto-more" target="_blank" rel="noopener" class="btn sm ghost ip-guide-btn">
                                <Icon name="external" size={14} /> วิธีตั้งแต่ละแบบ
                            </a>
                        </section>

                        <details class="ip-details">
                            <summary>บนเครื่องควรมีอะไร และลบอะไรได้</summary>
                            <div class="ip-substeps" style="margin-top: 8px;">
                                <div class="ip-substep-item"><span><b>Scriptable ควรมี 3 ตัว</b> DeptInstaller, DeptWidget, DeptAuto</span></div>
                                <div class="ip-substep-item"><span><b>คำสั่งลัดควรมี</b> Dept บันทึก ตัวเดียว (ลบ สแกนสลิป และ สลิปอัตโนมัติ ได้)</span></div>
                                <div class="ip-substep-item"><span><b>ลบได้</b> สคริปต์หรือคำสั่งลัดเก่าของ Dept ที่ไม่อยู่ในรายการข้างบน ตัวติดตั้งจะถามก่อนลบสคริปต์เก่าให้เอง</span></div>
                            </div>
                        </details>

                        {/* ความปลอดภัยย่อ */}
                        <div class="ip-sec-card">
                            <Icon name="shield" size={16} />
                            <span>รหัสเก็บใน iOS Keychain · อ่านสลิปด้วย Live Text ในเครื่อง รูปไม่ออกนอกเครื่อง · ซ่อนรหัส OTP ก่อนส่ง</span>
                        </div>

                        {msg && <p class={`msg ${msg.ok ? "ok" : ""}`} role={msg.ok ? "status" : "alert"}>{msg.text}</p>}

                        {/* ยกเลิกรหัส */}
                        <details class="ip-details">
                            <summary>ยกเลิกรหัสอุปกรณ์ (กรณีเครื่องหาย)</summary>
                            <div class="ip-danger-box">
                                <p class="lbl">ยกเลิกการเข้าถึงของ Widget และคำสั่งลัดบนเครื่องเดิมทั้งหมด</p>
                                <button type="button" class="btn ghost danger sm" disabled={busy} onClick={revoke}>
                                    <Icon name="trash" size={14} /> ยกเลิกรหัสอุปกรณ์ทั้งหมด
                                </button>
                            </div>
                        </details>
                    </>
                )}

                {view === "infographic" && (
                    <div class="ip-infobox">
                        <div class="ip-diagram-wrap">
                            <IphoneInfographicSvg />
                        </div>

                        {/* Preview Widget */}
                        <div>
                            <div class="ip-mock-title">
                                <span>ตัวอย่าง Widget หน้าจอโฮม</span>
                                <span class="lbl">DeptWidget</span>
                            </div>
                            <div class="ip-widget-mock" aria-hidden="true" style="margin-top: 8px;">
                                <div class="ip-wm-hd">
                                    <div class="ip-wm-logo">
                                        <Mark size={14} />
                                        <span>DEPT MONEY</span>
                                    </div>
                                    <span class="ip-wm-date">วันนี้</span>
                                </div>
                                <div class="ip-wm-cols">
                                    <div class="ip-wm-col">
                                        <span>รายรับเดือนนี้</span>
                                        <b class="rcv">฿25,000</b>
                                    </div>
                                    <div class="ip-wm-vl" />
                                    <div class="ip-wm-col">
                                        <span>ใช้ไปเดือนนี้</span>
                                        <b class="pay">฿18,450</b>
                                    </div>
                                </div>
                                <div class="ip-wm-bar">
                                    <div class="ip-wm-bar-fill" style="width: 74%" />
                                </div>
                                <div class="ip-wm-ft">
                                    <span>เหลือ <b class="rcv">฿6,550</b></span>
                                    <small>เพื่อนค้างเรา <b class="rcv">฿1,733</b></small>
                                </div>
                            </div>
                        </div>

                        {/* Preview Slip Flow */}
                        <div>
                            <div class="ip-mock-title">
                                <span>การสแกนสลิป Live Text</span>
                                <span class="lbl">รูปไม่ออกจากเครื่อง</span>
                            </div>
                            <div class="ip-slip-flow" aria-hidden="true" style="margin-top: 8px;">
                                <div class="ip-slip-step">
                                    <div class="ip-slip-icon"><Icon name="mobile" size={16} /></div>
                                    <span>1. แคปสลิป</span>
                                </div>
                                <span class="ip-slip-arr">&rarr;</span>
                                <div class="ip-slip-step">
                                    <div class="ip-slip-icon"><Icon name="search" size={16} /></div>
                                    <span>2. Live Text</span>
                                </div>
                                <span class="ip-slip-arr">&rarr;</span>
                                <div class="ip-slip-step">
                                    <div class="ip-slip-icon"><Icon name="bill" size={16} /></div>
                                    <span>3. ส่วนตัว / หาร</span>
                                </div>
                            </div>
                        </div>

                        <button type="button" class="btn block" onClick={() => setView("steps")}>
                            ไปยังขั้นตอนการติดตั้ง
                        </button>
                    </div>
                )}
            </div>
        </Sheet>
    );
}
