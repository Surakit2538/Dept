// ตั้งค่า iPhone ในเว็บใหม่: สร้างรหัสอุปกรณ์ แล้วคัดลอกสคริปต์ติดตั้ง (Scriptable) ให้วางได้เลย ไม่ต้องไปหน้าเดิม
import { useState } from "preact/hooks";
import { Icon, Mark } from "./icons.jsx";
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

function IphoneInfographicSvg() {
    return (
        <svg viewBox="0 0 540 180" class="ip-diagram-svg" aria-label="แผนผังการทำงานของระบบ Dept Money บน iPhone">
            {/* โหนด 1: เว็บไซต์ Dept Money */}
            <rect x="12" y="15" width="144" height="150" rx="12" fill="var(--chip)" stroke="var(--line)" stroke-width="1" />
            <circle cx="34" cy="38" r="11" fill="var(--accent)" />
            <text x="34" y="42" fill="var(--accent-ink)" font-size="11" font-weight="700" text-anchor="middle">1</text>
            <text x="52" y="38" fill="var(--ink)" font-size="13" font-weight="600">เว็บ Dept Money</text>
            <text x="52" y="52" fill="var(--mute)" font-size="10">เว็บบนเบราว์เซอร์</text>
            
            <rect x="24" y="68" width="120" height="34" rx="6" fill="var(--surface)" stroke="var(--line)" stroke-width="1" />
            <text x="84" y="89" fill="var(--accent)" font-size="11" font-weight="600" text-anchor="middle" font-family="var(--mono)">Device Token</text>
            
            <text x="24" y="122" fill="var(--mute)" font-size="11">
                <tspan x="24" dy="0">• ออกรหัสเฉพาะเครื่อง</tspan>
                <tspan x="24" dy="16">• ยืนยันตัวตนผ่าน LINE</tspan>
            </text>

            {/* เชื่อม 1 -> 2 */}
            <path d="M 156 90 L 194 90" stroke="var(--accent)" stroke-width="2" stroke-dasharray="4 3" />
            <polygon points="192,86 200,90 192,94" fill="var(--accent)" />
            <text x="176" y="82" fill="var(--accent)" font-size="9" font-weight="600" text-anchor="middle">คัดลอกโค้ด</text>

            {/* โหนด 2: Scriptable */}
            <rect x="200" y="15" width="148" height="150" rx="12" fill="var(--chip)" stroke="var(--line)" stroke-width="1" />
            <circle cx="222" cy="38" r="11" fill="var(--accent)" />
            <text x="222" y="42" fill="var(--accent-ink)" font-size="11" font-weight="700" text-anchor="middle">2</text>
            <text x="240" y="38" fill="var(--ink)" font-size="13" font-weight="600">แอป Scriptable</text>
            <text x="240" y="52" fill="var(--mute)" font-size="10">รัน DeptInstaller (▶)</text>

            <rect x="212" y="68" width="124" height="34" rx="6" fill="var(--surface)" stroke="var(--line)" stroke-width="1" />
            <text x="274" y="89" fill="var(--ink)" font-size="11" font-weight="600" text-anchor="middle">Apple Keychain</text>

            <text x="212" y="122" fill="var(--mute)" font-size="11">
                <tspan x="212" dy="0">• เก็บ Token ในเครื่อง</tspan>
                <tspan x="212" dy="16">• โหลด 3 สคริปต์อัตโนมัติ</tspan>
            </text>

            {/* เชื่อม 2 -> 3 */}
            <path d="M 348 85 L 366 85 L 366 52 L 382 52" stroke="var(--accent)" stroke-width="2" fill="none" stroke-dasharray="4 3" />
            <polygon points="380,48 388,52 380,56" fill="var(--accent)" />
            
            <path d="M 348 105 L 366 105 L 366 138 L 382 138" stroke="var(--accent)" stroke-width="2" fill="none" stroke-dasharray="4 3" />
            <polygon points="380,134 388,138 380,142" fill="var(--accent)" />

            {/* โหนด 3A: DeptWidget */}
            <rect x="388" y="15" width="140" height="70" rx="10" fill="var(--chip)" stroke="var(--line)" stroke-width="1" />
            <circle cx="406" cy="35" r="9" fill="var(--receive)" />
            <text x="406" y="38" fill="var(--accent-ink)" font-size="9" font-weight="700" text-anchor="middle">3A</text>
            <text x="422" y="38" fill="var(--ink)" font-size="12" font-weight="600">DeptWidget</text>
            <text x="402" y="56" fill="var(--mute)" font-size="10">
                <tspan x="402" dy="0">วิดเจ็ต 2 ช่องหน้าโฮม</tspan>
                <tspan x="402" dy="14">สรุปรายรับ ใช้ไป และหนี้</tspan>
            </text>

            {/* โหนด 3B: DeptSlip */}
            <rect x="388" y="95" width="140" height="70" rx="10" fill="var(--chip)" stroke="var(--line)" stroke-width="1" />
            <circle cx="406" cy="115" r="9" fill="var(--receive)" />
            <text x="406" y="118" fill="var(--accent-ink)" font-size="9" font-weight="700" text-anchor="middle">3B</text>
            <text x="422" y="118" fill="var(--ink)" font-size="12" font-weight="600">DeptSlip & Auto</text>
            <text x="402" y="136" fill="var(--mute)" font-size="10">
                <tspan x="402" dy="0">สแกนสลิป Live Text</tspan>
                <tspan x="402" dy="14">รูปไม่ออกจากเครื่อง</tspan>
            </text>
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
                <p class="ip-desc">ติดตั้ง Widget หน้าจอโฮมและคำสั่งลัดสแกนสลิปอัตโนมัติ ทำครั้งเดียวต่อเครื่อง โดยใช้แอป Scriptable บน iOS</p>
                
                {/* ปุ่มสลับมุมมอง */}
                <div class="seg ip-seg" role="tablist" aria-label="เลือกมุมมอง">
                    <button type="button" role="tab" aria-selected={view === "steps"} class={view === "steps" ? "on" : ""} onClick={() => setView("steps")}>
                        <Icon name="sliders" size={14} /> วิธีติดตั้ง (3 ขั้นตอน)
                    </button>
                    <button type="button" role="tab" aria-selected={view === "infographic"} class={view === "infographic" ? "on" : ""} onClick={() => setView("infographic")}>
                        <Icon name="chart" size={14} /> แผนผังระบบ (Infographic)
                    </button>
                </div>

                {view === "steps" && (
                    <>
                        {/* แถบสรุปขั้นตอนแบบย่อ */}
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
                                    <h3>ขั้นที่ 1: สร้างรหัสและคัดลอกตัวติดตั้ง</h3>
                                    <p>ระบบจะสร้าง Device Token เฉพาะเครื่องนี้และรวมสคริปต์ DeptInstaller ให้พร้อมใช้งาน</p>
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
                                        <span style="display:flex;align-items:center;gap:6px;">
                                            <Icon name={copied ? "check" : "alert"} size={16} />
                                            {copied ? "คัดลอกสคริปต์แล้ว! สลับไปที่แอป Scriptable เพื่อวางได้เลย" : "คัดลอกอัตโนมัติไม่สำเร็จ กรุณากดปุ่มคัดลอกด้านล่าง"}
                                        </span>
                                        {userName && <span class="ip-status-pill">{`สมาชิก: ${userName}`}</span>}
                                    </div>
                                    <div class="ip-code-box">
                                        <span class="ip-code-preview">DeptInstaller.js (พร้อม Keychain & 3 สคริปต์)</span>
                                        <button type="button" class="btn sm ghost" onClick={async () => setCopied(await copyText(script))}>
                                            <Icon name="copy" size={14} /> คัดลอกอีกครั้ง
                                        </button>
                                    </div>
                                    <p class="lbl">หากสร้างรหัสใหม่ รหัสบนเครื่องเก่าจะถูกแทนที่ทันที</p>
                                </div>
                            )}
                        </section>

                        {/* ขั้นที่ 2 */}
                        <section class="ip-card">
                            <div class="ip-step-hd">
                                <div class="ip-badge">2</div>
                                <div class="ip-step-t">
                                    <h3>ขั้นที่ 2: วางและรันในแอป Scriptable</h3>
                                    <p>ทำเพียงครั้งเดียว สคริปต์จะดาวน์โหลดไฟล์ทั้งหมดมาไว้บนเครื่องให้อัตโนมัติ</p>
                                </div>
                            </div>

                            <div class="ip-substeps">
                                <div class="ip-substep-item">
                                    <span class="ip-num-bullet">1</span>
                                    <span>เปิดแอป <b>Scriptable</b> บน iPhone</span>
                                </div>
                                <div class="ip-substep-item">
                                    <span class="ip-num-bullet">2</span>
                                    <span>กดเครื่องหมาย <span class="ip-kbd">+</span> มุมขวาบนเพื่อสร้างสคริปต์ใหม่</span>
                                </div>
                                <div class="ip-substep-item">
                                    <span class="ip-num-bullet">3</span>
                                    <span>ลบโค้ดเริ่มต้นทั้งหมด แล้วกด <b>วาง (Paste)</b> สคริปต์ที่คัดลอกมา</span>
                                </div>
                                <div class="ip-substep-item">
                                    <span class="ip-num-bullet">4</span>
                                    <span>กดปุ่ม <span class="ip-kbd"><Icon name="play" size={10} /> รัน</span> ที่แถบด้านล่าง 1 ครั้ง</span>
                                </div>
                            </div>

                            <div class="ip-highlight-box">
                                <Icon name="sparkle" size={16} />
                                <span>เมื่อขึ้นข้อความ <b>&ldquo;ติดตั้งสำเร็จ&rdquo;</b> จะมีสคริปต์ <b>DeptWidget</b>, <b>DeptSlip</b> และ <b>DeptAuto</b> เพิ่มขึ้นมาในเครื่องทันที</span>
                            </div>

                            <div>
                                <a href="https://apps.apple.com/th/app/scriptable/id1405459188" target="_blank" rel="noopener" class="ip-appstore-link">
                                    <Icon name="external" size={12} /> ดาวน์โหลดแอป Scriptable บน App Store (โหลดฟรี)
                                </a>
                            </div>
                        </section>

                        {/* ขั้นที่ 3 */}
                        <section class="ip-card">
                            <div class="ip-step-hd">
                                <div class="ip-badge">3</div>
                                <div class="ip-step-t">
                                    <h3>ขั้นที่ 3: เลือกใช้งาน Widget หรือสแกนสลิป</h3>
                                    <p>เลือกนำไปติดตั้งใช้งานได้ 2 รูปแบบตามต้องการ</p>
                                </div>
                            </div>

                            <div class="ip-two-col">
                                <div class="ip-subcard">
                                    <h4><Icon name="layers" size={16} /> วิดเจ็ตหน้าจอโฮม</h4>
                                    <p>แตะค้างที่หน้าจอโฮม &gt; กด + มุมซ้ายบน &gt; เลือก Scriptable &gt; แตะวิดเจ็ตแล้วเลือก Script เป็น <b>DeptWidget</b></p>
                                </div>
                                <div class="ip-subcard">
                                    <h4><Icon name="qr" size={16} /> คำสั่งลัดสแกนสลิป</h4>
                                    <p>ใช้ Live Text ของ iPhone สแกนรูปสลิปโดยรูปไม่ออกจากเครื่อง แตะไอคอนเดียวบันทึกได้ทันที</p>
                                    <a href="/shortcut-guide.html" target="_blank" rel="noopener" class="btn sm ghost ip-guide-btn">
                                        <Icon name="external" size={14} /> เปิดคู่มือสร้างคำสั่งลัด
                                    </a>
                                </div>
                            </div>
                        </section>

                        {/* ความปลอดภัย */}
                        <div class="ip-sec-card">
                            <Icon name="shield" size={18} />
                            <div>
                                <b>ความปลอดภัยระดับ iOS:</b> รหัสอุปกรณ์ถูกเก็บใน Apple Keychain เข้ารหัสภายในเครื่อง ไม่ผ่านเซิร์ฟเวอร์ภายนอก และการอ่านสลิปทำงานผ่าน Live Text บนชิปของ iPhone ภาพถ่ายไม่ออกจากเครื่อง 100%
                            </div>
                        </div>

                        {/* แจ้งเตือนข้อความสถานะ */}
                        {msg && <p class={`msg ${msg.ok ? "ok" : ""}`} role={msg.ok ? "status" : "alert"}>{msg.text}</p>}

                        {/* โซนฉุกเฉิน / ยกเลิก */}
                        <details class="ip-details">
                            <summary>เปลี่ยนเครื่องหรือทำอุปกรณ์หาย?</summary>
                            <div class="ip-danger-box">
                                <p class="lbl">หากทำเครื่องหายหรือต้องการยกเลิกการเข้าถึงของ Widget บนเครื่องเดิมทั้งหมด ให้กดยกเลิกรหัส</p>
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
                                <span>ตัวอย่างวิดเจ็ตบนหน้าจอโฮม (DeptWidget)</span>
                                <span class="lbl">ขนาดกลาง (Medium)</span>
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

                        {/* Preview Slip */}
                        <div>
                            <div class="ip-mock-title">
                                <span>กระบวนการสแกนสลิปด้วย Live Text (DeptSlip)</span>
                                <span class="lbl">รูปไม่ออกจากเครื่อง</span>
                            </div>
                            <div style="margin-top: 8px; display: flex; flex-direction: column; gap: 8px;">
                                <div class="ip-slip-flow" aria-hidden="true">
                                    <div class="ip-slip-step">
                                        <div class="ip-slip-icon"><Icon name="mobile" size={16} /></div>
                                        <span>1. แคปสลิป</span>
                                    </div>
                                    <span class="ip-slip-arr">&rarr;</span>
                                    <div class="ip-slip-step">
                                        <div class="ip-slip-icon"><Icon name="search" size={16} /></div>
                                        <span>2. Live Text แกะยอด</span>
                                    </div>
                                    <span class="ip-slip-arr">&rarr;</span>
                                    <div class="ip-slip-step">
                                        <div class="ip-slip-icon"><Icon name="bill" size={16} /></div>
                                        <span>3. บันทึกส่วนตัว/หาร</span>
                                    </div>
                                </div>
                                <p class="ip-slip-note">
                                    <Icon name="shield" size={14} />
                                    <span>Live Text ใช้ Neural Engine บนชิปของ iPhone ในการอ่านตัวอักษร ไม่ต้องส่งรูปขึ้นคลาวด์</span>
                                </p>
                            </div>
                        </div>

                        {/* สรุป 3 สคริปต์ */}
                        <div class="ip-substeps">
                            <p style="font-weight: 600; font-size: var(--fs-sm);">3 สคริปต์ที่ติดตั้งในครั้งเดียว:</p>
                            <p><b>1. DeptWidget.js</b> &mdash; วิดเจ็ตหน้าจอโฮม สรุปรายรับ ใช้ไป และหนี้คงค้าง รีเฟรชอัตโนมัติ</p>
                            <p><b>2. DeptSlip.js</b> &mdash; สแกนสลิปด่วน มีเมนูเลือกว่าเป็นบิลส่วนตัว หรือจะหารกับเพื่อนคนไหนบ้าง</p>
                            <p><b>3. DeptAuto.js</b> &mdash; สแกนสลิปอัตโนมัติเมื่อปิดแอปธนาคาร (ทางเลือกตั้งในคำสั่งลัด)</p>
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
