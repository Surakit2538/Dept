// ฉัน: โปรไฟล์ (ชื่อจริง พร้อมเพย์) ตั้งค่า iPhone ผู้ดูแล ออกจากระบบ
import { useState, useEffect } from "preact/hooks";
import { Icon } from "../icons.jsx";
import { Avatar, SectionTitle } from "../ui.jsx";
import { validPromptpay } from "../model.js";
import { saveMyProfile, clearCache, logout } from "../data.js";

export function MePage({ auth, profiles, onSaved }) {
    const mine = (profiles || []).find((p) => p.id === auth.user.memberId) || (profiles || []).find((p) => p.name === auth.user.name) || {};
    const [realName, setRealName] = useState("");
    const [promptpay, setPromptpay] = useState("");
    const [msg, setMsg] = useState(null);
    const [busy, setBusy] = useState(false);
    useEffect(() => { setRealName(mine.realName || ""); setPromptpay(mine.promptpay || ""); }, [mine.id, mine.realName, mine.promptpay]);

    async function save(e) {
        e.preventDefault();
        setMsg(null);
        const rn = realName.trim();
        const pp = promptpay.trim() ? validPromptpay(promptpay) : "";
        if (rn && !/[ก-๙a-zA-Z]/.test(rn)) return setMsg({ ok: false, text: "ชื่อจริงไม่ถูกต้อง" });
        if (promptpay.trim() && !pp) return setMsg({ ok: false, text: "พร้อมเพย์ต้องเป็นเบอร์มือถือ 10 หลัก หรือเลขบัตรประชาชน 13 หลัก" });
        setBusy(true);
        try {
            await saveMyProfile(auth.user.memberId, { realName: rn, promptpay: pp });
            setMsg({ ok: true, text: "บันทึกแล้ว" });
            onSaved();
        } catch (ex) {
            setMsg({ ok: false, text: ex.message });
        }
        setBusy(false);
    }

    return (
        <div class="home-grid">
            <div class="col">
                <section class="card">
                    <div class="sec-t" style={{ marginBottom: "6px" }}>
                        <Avatar name={auth.user.name} />
                        <div><h3>{auth.user.name}</h3><p>{auth.user.isAdmin ? "ผู้ดูแล" : "สมาชิก"}</p></div>
                    </div>
                    <form onSubmit={save}>
                        <div class="field">
                            <label for="me-real">ชื่อจริงภาษาไทย</label>
                            <input id="me-real" type="text" maxLength={80} value={realName} onInput={(e) => setRealName(e.currentTarget.value)} />
                            <span class="lbl">ใช้เทียบกับชื่อบนสลิป เพื่อแยกว่าเป็นรายรับหรือเพื่อนโอนคืนหนี้</span>
                        </div>
                        <div class="field">
                            <label for="me-pp">พร้อมเพย์</label>
                            <input id="me-pp" type="text" inputmode="numeric" placeholder="เบอร์มือถือ 10 หลัก หรือบัตรประชาชน 13 หลัก" value={promptpay} onInput={(e) => setPromptpay(e.currentTarget.value)} />
                            <span class="lbl">ใช้สร้าง QR ให้เพื่อนโอนเงินคืนคุณ</span>
                        </div>
                        {msg && <div class={`msg ${msg.ok ? "ok" : ""}`} role={msg.ok ? "status" : "alert"}>{msg.text}</div>}
                        <button type="submit" class="btn" style={{ marginTop: "16px" }} disabled={busy}>{busy ? "กำลังบันทึก" : "บันทึกข้อมูล"}</button>
                    </form>
                </section>
            </div>
            <div class="col">
                <section class="card">
                    <SectionTitle icon="bell" title="ตั้งค่าอื่นๆ" />
                    <a class="opt-row" style={{ textDecoration: "none", color: "inherit" }} href="/shortcut-guide.html"><span class="ico"><Icon name="qr" /></span><div><b>ตั้งค่า iPhone</b><small>Widget และสแกนสลิปอัตโนมัติ</small></div></a>
                    {auth.user.isAdmin && <a class="opt-row" style={{ textDecoration: "none", color: "inherit" }} href="/index.html#members"><span class="ico"><Icon name="people" /></span><div><b>จัดการสมาชิก</b><small>เพิ่ม ลบ กรอกชื่อจริง/พร้อมเพย์ให้เพื่อน (หน้าเดิม)</small></div></a>}
                    {auth.user.isAdmin && <a class="opt-row" style={{ textDecoration: "none", color: "inherit" }} href="/admin.html"><span class="ico"><Icon name="lock" /></span><div><b>หน้าแอดมิน</b><small>ยืนยันการจ่ายแทนคน ดูประวัติ</small></div></a>}
                    <button type="button" class="opt-row" onClick={() => { clearCache(); location.reload(); }}><span class="ico"><Icon name="swap" /></span><div><b>ล้างข้อมูลที่จำไว้ในเครื่อง</b><small>ใช้เมื่อตัวเลขดูไม่อัปเดต</small></div></button>
                    <button type="button" class="opt-row" onClick={logout}><span class="ico"><Icon name="close" /></span><div><b>ออกจากระบบ</b></div></button>
                </section>
            </div>
        </div>
    );
}
