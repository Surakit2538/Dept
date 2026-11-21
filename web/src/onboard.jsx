// ครั้งแรกที่เข้าใช้: ผูกบัญชี LINE กับชื่อที่ผู้ดูแลเพิ่มไว้ (ปิดการสมัครเอง) แล้วกรอกชื่อจริง/พร้อมเพย์
import { useState } from "preact/hooks";
import { Mark, Icon } from "./icons.jsx";
import { validPromptpay } from "./model.js";
import { linkMember, saveMyProfile, logout } from "./data.js";

export function LinkPage({ profile, candidates, suggest = "", onDone }) {
    const [pick, setPick] = useState(candidates.some((c) => c.id === suggest) ? suggest : null);
    const [busy, setBusy] = useState(false);
    const [err, setErr] = useState("");
    async function run(fn) {
        setBusy(true);
        setErr("");
        try { onDone(await fn()); } catch (e) { setErr(e.message || "ไม่สำเร็จ ลองใหม่อีกครั้ง"); setBusy(false); }
    }
    if (candidates.length === 0) {
        return (
            <main class="gate">
                <Mark size={48} />
                <h1>ยังไม่มีชื่อคุณในกลุ่ม</h1>
                <p class="lbl">ให้ผู้ดูแลเพิ่มชื่อคุณก่อน (แท็บ ฉัน → จัดการสมาชิก) แล้วเปิดหน้านี้ใหม่อีกครั้ง</p>
                {profile.displayName && <p class="lbl">บัญชี LINE นี้: {profile.displayName}</p>}
                <button type="button" class="btn block" onClick={() => location.reload()}>ลองใหม่</button>
                <button type="button" class="link" onClick={logout}>ออกจากระบบ</button>
            </main>
        );
    }
    return (
        <main class="gate">
            <Mark size={48} />
            <h1>ยินดีต้อนรับ</h1>
            <p class="lbl">เลือกชื่อของคุณในกลุ่ม เพื่อให้ประวัติบิลเดิมมาอยู่กับบัญชี LINE นี้ ({profile.displayName})</p>
            <ul class="plain pick-list" aria-label="รายชื่อสมาชิกที่ยังไม่ผูกบัญชี">
                {candidates.map((c) => (
                    <li key={c.id}>
                        <button type="button" class={`pick ${pick === c.id ? "on" : ""}`} aria-pressed={pick === c.id} disabled={busy} onClick={() => setPick(c.id)}>
                            <span class="av">{[...c.name][0]}</span><span class="grow">{c.name}</span>{pick === c.id && <Icon name="check" size={18} />}
                        </button>
                    </li>
                ))}
            </ul>
            {err && <p class="msg" role="alert">{err}</p>}
            <button type="button" class="btn block" disabled={!pick || busy} onClick={() => run(() => linkMember(profile, pick))}>
                {pick ? `ยืนยัน ฉันคือ ${candidates.find((c) => c.id === pick).name}` : "เลือกชื่อของคุณก่อน"}
            </button>
            <p class="lbl">ไม่มีชื่อคุณในรายการ? ให้ผู้ดูแลเพิ่มชื่อก่อน (แท็บ ฉัน → จัดการสมาชิก) แล้วเปิดหน้านี้ใหม่ · ถ้าเลือกผิดคน แจ้งผู้ดูแลให้แก้ให้ได้</p>
        </main>
    );
}

export function OnboardPage({ user, onDone }) {
    const [realName, setRealName] = useState(user.realName || "");
    const [promptpay, setPromptpay] = useState(user.promptpay || "");
    const [busy, setBusy] = useState(false);
    const [err, setErr] = useState("");
    async function save(e) {
        e.preventDefault();
        setErr("");
        const rn = realName.trim();
        const pp = validPromptpay(promptpay);
        if (!rn || !/[ก-๙a-zA-Z]/.test(rn)) return setErr("กรอกชื่อจริงภาษาไทย");
        if (!pp) return setErr("พร้อมเพย์ต้องเป็นเบอร์มือถือ 10 หลัก หรือเลขบัตรประชาชน 13 หลัก");
        setBusy(true);
        try {
            await saveMyProfile(user.memberId, { realName: rn, promptpay: pp });
            onDone({ ...user, realName: rn, promptpay: pp });
        } catch (ex) {
            setErr(ex.message || "บันทึกไม่สำเร็จ ลองใหม่อีกครั้ง");
            setBusy(false);
        }
    }
    return (
        <main class="gate">
            <Mark size={48} />
            <h1>ข้อมูลของคุณ ({user.name})</h1>
            <p class="lbl">กรอกครั้งเดียว ใช้ให้เพื่อนโอนเงินคืนผ่าน QR และให้ระบบแยกเงินเพื่อนโอนคืนออกจากรายรับของคุณ</p>
            <form onSubmit={save}>
                <div class="field">
                    <label for="ob-real">ชื่อจริงภาษาไทย</label>
                    <input id="ob-real" type="text" maxLength={80} autocomplete="name" required value={realName} onInput={(e) => setRealName(e.currentTarget.value)} />
                    <small>ใช้เทียบกับชื่อบนสลิปโอนเงิน</small>
                </div>
                <div class="field">
                    <label for="ob-pp">พร้อมเพย์</label>
                    <input id="ob-pp" class="num" type="text" inputmode="numeric" autocomplete="off" required placeholder="เบอร์มือถือ 10 หลัก หรือบัตรประชาชน 13 หลัก" value={promptpay} onInput={(e) => setPromptpay(e.currentTarget.value)} />
                </div>
                {err && <p class="msg" role="alert">{err}</p>}
                <button type="submit" class="btn block" disabled={busy}>{busy ? "กำลังบันทึก" : "เริ่มใช้งาน"}</button>
            </form>
            <button type="button" class="link" onClick={logout}>ออกจากระบบ</button>
        </main>
    );
}
