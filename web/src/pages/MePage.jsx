// ฉัน: โปรไฟล์ (ชื่อจริง พร้อมเพย์) ตั้งค่า iPhone ผู้ดูแล ออกจากระบบ
import { useState, useEffect } from "preact/hooks";
import { Icon } from "../icons.jsx";
import { SectionTitle } from "../ui.jsx";
import { IphoneSheet } from "../iphone.jsx";
import { MembersSheet } from "../members.jsx";
import { validPromptpay, maskPromptpay } from "../model.js";
import { saveMyProfile, logout } from "../data.js";

export function MePage({ auth, profiles, onSaved, onRefresh, onMembers, onToast }) {
    const mine = (profiles || []).find((p) => p.id === auth.user.memberId) || (profiles || []).find((p) => p.name === auth.user.name) || {};
    const [realName, setRealName] = useState("");
    const [promptpay, setPromptpay] = useState("");
    const [msg, setMsg] = useState(null);
    const [busy, setBusy] = useState(false);
    const [iphone, setIphone] = useState(false);
    const [members, setMembers] = useState(false);
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
                <section class="card profile">
                    <div class="who-big">
                        <div class="av xl" aria-hidden="true">{[...String(auth.user.name || "?")][0]}</div>
                        <div><h2>{auth.user.name}</h2><span class="tag-role">{auth.user.isAdmin ? "ผู้ดูแล" : "สมาชิก"}</span></div>
                    </div>
                    <ul class="plain status">
                        <li class={mine.realName ? "ok" : "todo"}><Icon name={mine.realName ? "check" : "alert"} size={16} /><span>{mine.realName ? `ชื่อจริง ${mine.realName}` : "ยังไม่ได้กรอกชื่อจริง"}</span></li>
                        <li class={validPromptpay(mine.promptpay) ? "ok" : "todo"}><Icon name={validPromptpay(mine.promptpay) ? "check" : "alert"} size={16} /><span>{validPromptpay(mine.promptpay) ? <>พร้อมเพย์ <span class="num">{maskPromptpay(mine.promptpay)}</span></> : "ยังไม่ได้ตั้งพร้อมเพย์ เพื่อนจะโอนคืนผ่าน QR ไม่ได้"}</span></li>
                    </ul>
                    <form onSubmit={save}>
                        <div class="field">
                            <label for="me-real">ชื่อจริงภาษาไทย</label>
                            <input id="me-real" type="text" maxLength={80} autocomplete="name" aria-describedby="me-real-h" value={realName} onInput={(e) => setRealName(e.currentTarget.value)} />
                            <small id="me-real-h">ใช้เทียบกับชื่อบนสลิป เพื่อแยกรายรับออกจากเพื่อนโอนคืนหนี้</small>
                        </div>
                        <div class="field">
                            <label for="me-pp">พร้อมเพย์</label>
                            <input id="me-pp" class="num" type="text" inputmode="numeric" autocomplete="off" aria-describedby="me-pp-h" placeholder="เบอร์มือถือ 10 หลัก หรือบัตรประชาชน 13 หลัก" value={promptpay} onInput={(e) => setPromptpay(e.currentTarget.value)} />
                            <small id="me-pp-h">ใช้สร้าง QR ให้เพื่อนโอนเงินคืนคุณ</small>
                        </div>
                        {msg && <p class={`msg ${msg.ok ? "ok" : ""}`} role={msg.ok ? "status" : "alert"}>{msg.text}</p>}
                        <button type="submit" class="btn block" disabled={busy}>{busy ? "กำลังบันทึก" : "บันทึกข้อมูล"}</button>
                    </form>
                </section>
            </div>
            <div class="col">
                <section class="card">
                    <SectionTitle icon="bell" title="ตั้งค่า" />
                    <button type="button" class="opt-row" onClick={() => setIphone(true)}><span class="ico"><Icon name="qr" /></span><span><b>ตั้งค่า iPhone</b><small>คัดลอกสคริปต์ติดตั้ง Widget และสแกนสลิปอัตโนมัติ</small></span><Icon name="right" size={16} class="mute" /></button>
                    <button type="button" class="opt-row" onClick={onRefresh}><span class="ico"><Icon name="swap" /></span><span><b>โหลดข้อมูลใหม่</b><small>ใช้เมื่อตัวเลขดูไม่อัปเดต</small></span></button>
                </section>
                {auth.user.isAdmin && (
                    <section class="card">
                        <SectionTitle icon="lock" title="สำหรับผู้ดูแล" />
                        <button type="button" class="opt-row" onClick={() => setMembers(true)}><span class="ico"><Icon name="people" /></span><span><b>จัดการสมาชิก</b><small>เพิ่มชื่อ แก้ชื่อจริง/พร้อมเพย์ ตั้งแอดมิน ลบ</small></span><Icon name="right" size={16} class="mute" /></button>
                        <a class="opt-row" href="/admin.html"><span class="ico"><Icon name="lock" /></span><span><b>หน้าแอดมิน</b><small>ยืนยันการจ่ายแทนคน ดูประวัติ</small></span><Icon name="right" size={16} class="mute" /></a>
                    </section>
                )}
                <button type="button" class="btn ghost block logout" onClick={logout}><Icon name="close" size={16} />ออกจากระบบ</button>
            </div>
        {members && <MembersSheet profiles={profiles} me={auth.user.name} onClose={() => setMembers(false)} onChanged={onMembers} onToast={onToast} />}
        {iphone && <IphoneSheet onClose={() => setIphone(false)} />}
        </div>
    );
}
