/**
 * Dept Money - iPhone Setup Modal Module
 * จัดการหน้าต่างตั้งค่า Widget และ Token สำหรับ iPhone
 */

(function () {
    const BASE_URL = window.location.origin;

    function getInstallerScript(token, userName) {
        return `// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: cyan; icon-glyph: download;

/**
 * Dept Money - ตัวติดตั้ง Widget อัตโนมัติ (DeptInstaller)
 * รหัสประจำตัวสำหรับ: ${userName || 'สมาชิก'}
 */
const DEVICE_TOKEN = "${token}";
const BASE_URL = "${BASE_URL}";

// 1. บันทึก Token ลง Keychain ของ iOS อย่างปลอดภัย
Keychain.set("dept_token", DEVICE_TOKEN);

// 2. ดาวน์โหลดสคริปต์ทั้งหมดเวอร์ชันล่าสุด (Widget + สแกนสลิป + บันทึกอัตโนมัติ)
const FILES = ["DeptWidget.js", "DeptSlip.js", "DeptAuto.js"];
const downloaded = {};
let failedFile = "";
for (const name of FILES) {
    try {
        const code = await new Request(\`\${BASE_URL}/scriptable/\${name}\`).loadString();
        // 3. ตรวจสอบความสมบูรณ์ก่อนบันทึก
        if (!code.includes("SCRIPT_VERSION") || !code.includes("Script.complete();") || code.includes("<!DOCTYPE html>")) {
            failedFile = name;
            break;
        }
        downloaded[name] = code;
    } catch (e) {
        failedFile = name;
        break;
    }
}

if (failedFile) {
    const errAlert = new Alert();
    errAlert.title = "ติดตั้งไม่สำเร็จ";
    errAlert.message = \`ดาวน์โหลดไฟล์ \${failedFile} ไม่สมบูรณ์ (ยังไม่มีการเปลี่ยนแปลงใดๆ) กรุณาตรวจสอบอินเทอร์เน็ตแล้วลองใหม่อีกครั้ง\`;
    errAlert.addAction("ตกลง");
    await errAlert.present();
    Script.complete();
} else {
    // 4. บันทึกลง Scriptable (บันทึกเมื่อโหลดครบทุกไฟล์แล้วเท่านั้น)
    const fm = FileManager.iCloud() ? FileManager.iCloud() : FileManager.local();
    for (const name of FILES) {
        fm.writeString(fm.joinPath(fm.documentsDirectory(), name), downloaded[name]);
    }

    // 5. ทดสอบเรียก API ยืนยันว่ารหัสใช้งานได้จริง
    let confirmedUser = "";
    try {
        const testReq = new Request(\`\${BASE_URL}/api/widget-summary\`);
        testReq.headers = { "Authorization": \`Bearer \${DEVICE_TOKEN}\` };
        const testRes = await testReq.loadJSON();
        if (testRes && testRes.success) {
            confirmedUser = testRes.user || "";
        }
    } catch (e) {}

    const successAlert = new Alert();
    successAlert.title = "ติดตั้งสำเร็จ";
    successAlert.message = \`ติดตั้ง DeptWidget, DeptSlip และ DeptAuto เรียบร้อยแล้ว\n\nสมาชิก: \${confirmedUser || "${userName}"}\nต่อไปให้เพิ่ม Widget บนหน้าจอโฮม และสร้างคำสั่งลัดสแกนสลิปตามคู่มือในเว็บครับ\`;
    successAlert.addAction("เรียบร้อย");
    await successAlert.present();
    Script.complete();
}`;
    }

    let currentToken = null;
    let currentUserName = null;

    function createModalDOM() {
        if (document.getElementById("iphone-setup-modal")) return;

        const modalOverlay = document.createElement("div");
        modalOverlay.id = "iphone-setup-modal";
        modalOverlay.className = "fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 hidden";
        modalOverlay.style.transition = "opacity 0.2s ease";

        modalOverlay.innerHTML = `
            <div class="bg-[#1c1c1e] text-white w-full max-w-lg rounded-3xl p-6 shadow-2xl border border-white/10 max-h-[90vh] overflow-y-auto space-y-5" onclick="event.stopPropagation()">
                <!-- Header -->
                <div class="flex items-center justify-between border-b border-white/10 pb-4">
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-2xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-xl">
                            <i class="fa-solid fa-mobile-screen-button"></i>
                        </div>
                        <div>
                            <h3 class="font-bold text-lg text-white">ตั้งค่า iPhone</h3>
                            <p class="text-xs text-slate-400">สำหรับ Widget และคำสั่งลัดสแกนสลิป</p>
                        </div>
                    </div>
                    <button onclick="window.iphoneSetup.closeModal()" class="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-colors">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>

                <!-- Not Logged In Warning -->
                <div id="iphone-setup-not-logged-in" class="hidden bg-amber-500/10 border border-amber-500/30 rounded-2xl p-4 text-center space-y-2">
                    <i class="fa-solid fa-triangle-exclamation text-amber-400 text-2xl"></i>
                    <p class="text-sm text-amber-200 font-bold">กรุณาเข้าสู่ระบบด้วย LINE ก่อน</p>
                    <p class="text-xs text-amber-300/80">ระบบต้องยืนยันตัวตนเพื่อสร้างรหัสความปลอดภัยสำหรับอุปกรณ์ของคุณ</p>
                </div>

                <!-- Main Action: Generate Token -->
                <div id="iphone-setup-generate-section" class="space-y-3">
                    <div class="bg-white/5 border border-white/5 rounded-2xl p-4 text-xs text-slate-300 leading-relaxed">
                        <p class="font-bold text-white mb-1"><i class="fa-solid fa-shield-halved text-emerald-400 mr-1.5"></i> รหัสส่วนตัวเฉพาะบุคคล (Device Token)</p>
                        ระบบจะสร้างรหัสประจำตัวที่ผูกกับบัญชีของคุณอัตโนมัติ โดยไม่ต้องพิมพ์ชื่อหรือจำรหัสผ่าน
                    </div>

                    <button id="btn-generate-iphone-token" onclick="window.iphoneSetup.generateToken()" class="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white py-3.5 px-4 rounded-2xl font-bold text-sm shadow-lg shadow-indigo-600/30 active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                        <i class="fa-solid fa-key"></i>
                        <span id="btn-generate-text">สร้างรหัสสำหรับเครื่องนี้</span>
                    </button>
                    <p class="text-[11px] text-slate-400 text-center">หากสร้างรหัสใหม่ รหัสบนเครื่องเก่าจะถูกยกเลิกทันที</p>
                </div>

                <!-- Result Steps (Shown after token created) -->
                <div id="iphone-setup-steps" class="space-y-4 hidden">
                    <!-- Step 1: Widget -->
                    <div class="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-3">
                        <div class="flex items-center justify-between">
                            <span class="text-xs font-bold uppercase tracking-wider text-indigo-400 flex items-center gap-1.5">
                                <i class="fa-solid fa-circle-check"></i> ขั้นที่ 1: ติดตั้ง Widget
                            </span>
                            <span id="step-user-badge" class="text-[10px] bg-white/10 text-slate-300 px-2 py-0.5 rounded-full font-bold"></span>
                        </div>
                        
                        <div class="text-xs text-slate-300 space-y-1.5 bg-black/30 p-3 rounded-xl border border-white/5">
                            <p class="font-bold text-white mb-1">วิธีติดตั้งใน 3 ขั้นตอน:</p>
                            <p>1. เปิดแอป <strong>Scriptable</strong> บน iPhone</p>
                            <p>2. กดเครื่องหมาย <strong>+</strong> (ขวาบน) แล้วกด <strong>วาง (Paste)</strong></p>
                            <p>3. กดปุ่ม <strong>Play (ปุ่มสามเหลี่ยม)</strong> เพื่อรันติดตั้งครั้งเดียว</p>
                        </div>

                        <button onclick="window.iphoneSetup.copyInstallerCode()" id="btn-copy-installer" class="w-full bg-indigo-600 hover:bg-indigo-500 active:scale-[0.98] text-white py-3 px-4 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-md">
                            <i class="fa-solid fa-copy"></i>
                            <span id="btn-copy-installer-text">คัดลอกโค้ดติดตั้ง Widget</span>
                        </button>
                    </div>

                    <!-- Step 2: ใช้งานสแกนสลิป -->
                    <div class="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-3">
                        <span class="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                            <i class="fa-solid fa-receipt"></i> ขั้นที่ 2: สแกนสลิป
                        </span>
                        <p class="text-xs text-slate-300">
                            หลังรันโค้ดติดตั้งสำเร็จ จะได้สคริปต์ <b>DeptSlip</b> เพิ่มมาด้วย สร้างคำสั่งลัด 3 คำสั่ง (ใช้ Live Text ของ iPhone อ่านสลิป รูปไม่ออกจากเครื่อง) แล้วเพิ่มเป็นไอคอนบนหน้าจอโฮม หลังจากนั้นแตะไอคอนเดียวก็สแกนสลิปได้
                        </p>
                        <a href="/shortcut-guide.html" target="_blank" rel="noopener" class="block w-full text-center bg-emerald-600 hover:bg-emerald-500 text-white py-2.5 rounded-xl font-bold text-xs transition-colors">
                            <i class="fa-solid fa-book-open mr-1"></i> เปิดคู่มือการใช้งาน
                        </a>
                        <details class="text-xs text-slate-400">
                            <summary class="cursor-pointer">ขั้นสูง: รหัสสำหรับคำสั่งลัดแบบละเอียด</summary>
                            <div class="flex gap-2 mt-2">
                                <input type="password" id="iphone-token-display" readonly value="" class="flex-1 bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-xs font-mono text-slate-300 outline-none select-all" />
                                <button onclick="window.iphoneSetup.copyRawToken()" id="btn-copy-token" class="bg-slate-600 hover:bg-slate-500 active:scale-[0.98] text-white px-4 py-2 rounded-xl font-bold text-xs transition-all flex items-center gap-1.5 shrink-0">
                                    <i class="fa-solid fa-key"></i>
                                    <span id="btn-copy-token-text">คัดลอกรหัส</span>
                                </button>
                            </div>
                            <p class="mt-1">คัดลอกในรูปแบบ <span class="font-mono">Bearer รหัส</span> พร้อมวางในคำสั่งลัด</p>
                        </details>
                    </div>

                    <!-- Revoke Zone -->
                    <div class="pt-2 border-t border-white/10 flex items-center justify-between">
                        <span class="text-xs text-slate-400">เปลี่ยนหรือทำมือถือหาย?</span>
                        <button onclick="window.iphoneSetup.revokeToken()" class="text-xs text-red-400 hover:text-red-300 hover:underline flex items-center gap-1 transition-colors py-1">
                            <i class="fa-solid fa-trash-can"></i> ยกเลิกรหัสทั้งหมด
                        </button>
                    </div>
                </div>
            </div>
        `;

        modalOverlay.addEventListener("click", () => window.iphoneSetup.closeModal());
        document.body.appendChild(modalOverlay);
    }

    window.iphoneSetup = {
        openModal: function () {
            createModalDOM();
            const modal = document.getElementById("iphone-setup-modal");
            const notLogged = document.getElementById("iphone-setup-not-logged-in");
            const generateSection = document.getElementById("iphone-setup-generate-section");

            modal.classList.remove("hidden");

            // เช็คว่า login LINE หรือยัง
            const isLoggedIn = typeof liff !== "undefined" && liff.isLoggedIn && liff.isLoggedIn();
            if (!isLoggedIn) {
                notLogged.classList.remove("hidden");
                generateSection.classList.add("hidden");
            } else {
                notLogged.classList.add("hidden");
                generateSection.classList.remove("hidden");
            }
        },

        closeModal: function () {
            const modal = document.getElementById("iphone-setup-modal");
            if (modal) modal.classList.add("hidden");
        },

        generateToken: async function () {
            if (typeof liff === "undefined" || !liff.isLoggedIn || !liff.isLoggedIn()) {
                alert("กรุณาเข้าสู่ระบบ LINE ก่อนดำเนินการครับ");
                return;
            }

            const btn = document.getElementById("btn-generate-iphone-token");
            const btnText = document.getElementById("btn-generate-text");
            const originalText = btnText.innerText;

            btn.disabled = true;
            btnText.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin mr-1"></i> กำลังสร้างรหัส...';

            try {
                const idToken = liff.getIDToken();
                if (!idToken) {
                    throw new Error("ไม่สามารถดึง LINE ID Token ได้ กรุณาล็อกอินใหม่อีกครั้ง");
                }

                const res = await fetch("/api/device-token", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ idToken: idToken })
                });

                const data = await res.json();
                if (!res.ok || !data.success) {
                    throw new Error(data.message || "เกิดข้อผิดพลาดในการสร้างรหัส");
                }

                currentToken = data.token;
                currentUserName = data.name;

                // อัปเดต UI แสดงขั้นตอน
                document.getElementById("iphone-setup-steps").classList.remove("hidden");
                document.getElementById("step-user-badge").innerText = `สมาชิก: ${data.name}`;
                document.getElementById("iphone-token-display").value = data.token;

                // เปลี่ยนปุ่มสร้างเป็นสร้างใหม่
                btnText.innerText = "สร้างรหัสใหม่อีกครั้ง";

                // คัดลอกโค้ด Widget ให้อัตโนมัติเลยเพื่อความสะดวก
                await this.copyInstallerCode(true);

            } catch (err) {
                console.error("Generate token error:", err);
                alert("เกิดข้อผิดพลาด: " + err.message);
                btnText.innerText = originalText;
            } finally {
                btn.disabled = false;
            }
        },

        copyInstallerCode: async function (silent) {
            if (!currentToken) return;
            const script = getInstallerScript(currentToken, currentUserName);
            const btnText = document.getElementById("btn-copy-installer-text");
            try {
                await navigator.clipboard.writeText(script);
                btnText.innerText = "คัดลอกโค้ดติดตั้งสำเร็จแล้ว!";
                setTimeout(() => {
                    btnText.innerText = "คัดลอกโค้ดติดตั้งอีกครั้ง";
                }, 3000);
            } catch (e) {
                // iOS ไม่ให้คัดลอกอัตโนมัติหลังรอเซิร์ฟเวอร์ (ต้องเป็นการแตะของผู้ใช้เอง) จึงให้แตะปุ่มแทน ไม่ต้องขึ้นข้อความผิดพลาด
                btnText.innerText = "แตะที่นี่เพื่อคัดลอกโค้ดติดตั้ง";
                if (!silent) alert("ไม่สามารถคัดลอกได้ กรุณาแตะปุ่ม \"คัดลอกโค้ดติดตั้ง\" อีกครั้ง");
            }
        },

        copyRawToken: async function () {
            if (!currentToken) return;
            try {
                // คัดลอกในรูปแบบที่คำสั่งลัดใช้ใน Header: Authorization = Bearer <รหัส>
                await navigator.clipboard.writeText("Bearer " + currentToken);
                const btnText = document.getElementById("btn-copy-token-text");
                const oldText = btnText.innerText;
                btnText.innerText = "คัดลอกแล้ว!";
                setTimeout(() => {
                    btnText.innerText = oldText;
                }, 3000);
            } catch (e) {
                alert("ไม่สามารถคัดลอกรหัสได้");
            }
        },

        revokeToken: async function () {
            if (!confirm("คุณแน่ใจหรือไม่ว่าต้องการยกเลิกรหัสอุปกรณ์ทั้งหมด?\n(หลังจากยกเลิก Widget และ Shortcut บนเครื่องจะไม่สามารถเข้าถึงข้อมูลได้จนกว่าจะสร้างรหัสใหม่)")) {
                return;
            }

            try {
                const idToken = liff.getIDToken();
                const res = await fetch("/api/device-token", {
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ idToken: idToken })
                });
                const data = await res.json();
                if (data.success) {
                    alert("ยกเลิกรหัสอุปกรณ์สำเร็จแล้ว");
                    currentToken = null;
                    document.getElementById("iphone-setup-steps").classList.add("hidden");
                    document.getElementById("btn-generate-text").innerText = "สร้างรหัสสำหรับเครื่องนี้";
                } else {
                    alert(data.message || "ไม่สามารถยกเลิกรหัสได้");
                }
            } catch (err) {
                alert("เกิดข้อผิดพลาด: " + err.message);
            }
        }
    };

    // Auto-create modal on DOMContentLoaded
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", createModalDOM);
    } else {
        createModalDOM();
    }
})();
