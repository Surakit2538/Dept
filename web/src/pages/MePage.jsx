// ฉัน: โปรไฟล์ (ชื่อจริง พร้อมเพย์) แผนเดือนนี้ (งบ + เงินเก็บ) เป้าเก็บเงิน ตั้งค่า iPhone ผู้ดูแล ออกจากระบบ
import { useState, useEffect } from "preact/hooks";
import { Icon } from "../icons.jsx";
import { Avatar, SectionTitle, Sheet, Lazy } from "../ui.jsx";
import { validPromptpay, maskPromptpay } from "../model.js";
import { saveMyProfile, logout } from "../data.js";
import { PlanCard, GoalStack } from "../plan.jsx";

function EditProfileSheet({ realName, promptpay, onSave, onClose, busy, msg, setRealName, setPromptpay }) {
    return (
        <Sheet title="แก้ไขข้อมูลส่วนตัว" onClose={onClose}>
            <form onSubmit={onSave}>
                <div class="field">
                    <label for="me-real">ชื่อจริงภาษาไทย</label>
                    <input id="me-real" type="text" maxLength={80} autocomplete="name" aria-describedby="me-real-h" placeholder="เช่น สมชาย ใจดี" value={realName} onInput={(e) => setRealName(e.currentTarget.value)} />
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
        </Sheet>
    );
}

export function MePage({ auth, profiles, onSaved, onRefresh, onMembers, onToast, transactions = [], onDataChanged = () => {}, bm = null, onBudget = () => {}, onGoalAdd = () => {}, onGoalMove = () => {}, onGoalEdit = () => {} }) {
    const mine = (profiles || []).find((p) => p.id === auth.user.memberId) || (profiles || []).find((p) => p.name === auth.user.name) || {};
    const [realName, setRealName] = useState("");
    const [promptpay, setPromptpay] = useState("");
    const [msg, setMsg] = useState(null);
    const [busy, setBusy] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const [iphone, setIphone] = useState(false);
    const [members, setMembers] = useState(false);
    const [tools, setTools] = useState(false);
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
            if (onToast) onToast("บันทึกข้อมูลส่วนตัวแล้ว");
            onSaved();
            setEditOpen(false);
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
                        <Avatar name={auth.user.name} pictureUrl={auth.user.pictureUrl || mine.pictureUrl} size="xl" />
                        <div>
                            <h2>{auth.user.name}</h2>
                            <span class="tag-role">{auth.user.isAdmin ? "ผู้ดูแล" : "สมาชิก"}</span>
                        </div>
                    </div>

                    <div class="info-cards">
                        <button type="button" class="info-card" title="ใช้เทียบกับชื่อบนสลิปโอนเงิน" onClick={() => { setMsg(null); setEditOpen(true); }}>
                            <span class="info-card-label">ชื่อจริงภาษาไทย</span>
                            <span class={`info-card-val ${mine.realName ? "" : "placeholder"}`}>{mine.realName || "ยังไม่ได้กรอก"}</span>
                            <span class="info-card-act"><Icon name="pencil" size={14} /></span>
                        </button>
                        <button type="button" class="info-card" title="ใช้สร้าง QR ให้เพื่อนโอนเงินคืน" onClick={() => { setMsg(null); setEditOpen(true); }}>
                            <span class="info-card-label">พร้อมเพย์</span>
                            <span class={`info-card-val num ${validPromptpay(mine.promptpay) ? "" : "placeholder"}`}>{validPromptpay(mine.promptpay) ? maskPromptpay(mine.promptpay) : "ยังไม่ได้ตั้ง"}</span>
                            <span class="info-card-act"><Icon name="pencil" size={14} /></span>
                        </button>
                    </div>
                </section>
                {bm ? <PlanCard bm={bm} onBudget={onBudget} /> : <section class="card plan-card skel" aria-busy="true"><p class="lbl">กำลังโหลดแผนเดือนนี้</p></section>}
            </div>
            <div class="col">
                {bm && <GoalStack goals={bm.goals} month={bm.month} onAdd={onGoalAdd} onMove={onGoalMove} onEdit={onGoalEdit} />}
                <section class="card">
                    <SectionTitle icon="sliders" title="ตั้งค่า" />
                    <button type="button" class="opt-row" onClick={() => setIphone(true)}><span class="ico"><Icon name="qr" /></span><span><b>ตั้งค่า iPhone</b><small>คัดลอกสคริปต์ติดตั้ง Widget และสแกนสลิปอัตโนมัติ</small></span><Icon name="right" size={16} class="mute" /></button>
                    <button type="button" class="opt-row" onClick={onRefresh}><span class="ico"><Icon name="swap" /></span><span><b>โหลดข้อมูลใหม่</b><small>ใช้เมื่อตัวเลขดูไม่อัปเดต</small></span></button>
                </section>
                {auth.user.isAdmin && (
                    <section class="card">
                        <SectionTitle icon="lock" title="สำหรับผู้ดูแล" />
                        <button type="button" class="opt-row" onClick={() => setMembers(true)}><span class="ico"><Icon name="people" /></span><span><b>จัดการสมาชิก</b><small>เพิ่มชื่อ แก้ชื่อจริง/พร้อมเพย์ ตั้งแอดมิน ลบ</small></span><Icon name="right" size={16} class="mute" /></button>
                        <button type="button" class="opt-row" onClick={() => setTools(true)}><span class="ico"><Icon name="chart" /></span><span><b>จัดการข้อมูล</b><small>ส่งออกไฟล์ CSV และลบข้อมูลทั้งเดือน</small></span><Icon name="right" size={16} class="mute" /></button>
                        <a class="opt-row" href="/admin.html"><span class="ico"><Icon name="lock" /></span><span><b>หน้าแอดมิน</b><small>ยืนยันการจ่ายแทนคน ดูประวัติ</small></span><Icon name="right" size={16} class="mute" /></a>
                    </section>
                )}
                <button type="button" class="btn ghost block logout" onClick={logout}><Icon name="close" size={16} />ออกจากระบบ</button>
            </div>
        {editOpen && (
            <EditProfileSheet
                realName={realName}
                promptpay={promptpay}
                onSave={save}
                onClose={() => setEditOpen(false)}
                busy={busy}
                msg={msg}
                setRealName={setRealName}
                setPromptpay={setPromptpay}
            />
        )}
        {tools && <Lazy load={() => import("../datatools.jsx")} name="DataToolsSheet" transactions={transactions} onClose={() => setTools(false)} onToast={onToast} onChanged={onDataChanged} />}
        {members && <Lazy load={() => import("../members.jsx")} name="MembersSheet" profiles={profiles} me={auth.user.name} onClose={() => setMembers(false)} onChanged={onMembers} onToast={onToast} />}
        {iphone && <Lazy load={() => import("../iphone.jsx")} name="IphoneSheet" onClose={() => setIphone(false)} />}
        </div>
    );
}
