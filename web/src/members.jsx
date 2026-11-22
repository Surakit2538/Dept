// จัดการสมาชิก (เฉพาะแอดมิน): เพิ่มชื่อ แก้ชื่อจริง/พร้อมเพย์ ตั้งสิทธิ์แอดมิน ลบ (ลบได้เมื่อไม่มีชื่อนี้ในบิลหรือประวัติเคลียร์เงิน)
import { useState, useEffect } from "preact/hooks";
import { Avatar, Sheet, DeleteButton } from "./ui.jsx";
import { Icon } from "./icons.jsx";
import { validPromptpay, maskPromptpay } from "./model.js";
import { addMemberName, updateMember, deleteMemberIfUnused, setCardAlerts, loadLineQuota } from "./data.js";

/** สวิตช์เปิดเตือนบัตรเครดิตทาง LINE ให้สมาชิกคนนี้ (ใช้โควต้าข้อความ LINE ที่ส่งหาเอง) */
function CardSwitch({ p, onChanged, onToast }) {
    const [on, setOn] = useState(Boolean(p.cardAlerts));
    const [busy, setBusy] = useState(false);
    async function flip() {
        const v = !on;
        setBusy(true);
        try { await setCardAlerts(p, v); setOn(v); onToast(v ? `เปิดเตือนบัตรเครดิตให้ ${p.name} แล้ว` : `ปิดเตือนบัตรเครดิตของ ${p.name} แล้ว`); onChanged(); } catch (ex) { onToast(ex.message); }
        setBusy(false);
    }
    return (
        <label class="cc-switch">
            <input type="checkbox" role="switch" checked={on} disabled={busy} onChange={flip} />
            <span class="sw" aria-hidden="true" />
            <span>เตือนบัตรเครดิตทาง LINE{!p.hasLine && on ? " (ยังไม่ผูก LINE จึงยังส่งไม่ได้)" : ""}</span>
        </label>
    );
}

/** โควต้าข้อความ LINE เดือนนี้ (ข้อความที่ LINE ส่งหาเอง เช่น เตือนหนี้วันที่ 1 และเตือนบัตร) */
function LineQuota() {
    const [q, setQ] = useState(undefined);
    useEffect(() => { loadLineQuota().then(setQ).catch(() => setQ(null)); }, []);
    if (q === undefined) return <p class="lbl">กำลังอ่านโควต้าข้อความ LINE</p>;
    if (!q) return null;
    const pct = q.limit ? Math.min(100, Math.round((q.used / q.limit) * 100)) : 0;
    return (
        <div class="lq">
            <div class="lq-t"><b>ข้อความ LINE เดือนนี้</b><span class="num">{q.used.toLocaleString("en-US")}{q.limit ? ` / ${q.limit.toLocaleString("en-US")}` : " (ไม่จำกัด)"}</span></div>
            {q.limit ? <div class="lq-bar" role="img" aria-label={`ใช้ไป ${pct}%`}><i style={{ width: `${Math.max(q.used > 0 ? 2 : 0, pct)}%` }} class={pct >= 80 ? "near" : ""} /></div> : null}
            <p class="lbl">นับเฉพาะที่ LINE ส่งหาเอง (เตือนหนี้วันที่ 1, เตือนบัตร, ปุ่มเตือนเพื่อน) ข้อความตอบกลับในแชตไม่นับ · บัตร 1 ใบใช้ประมาณ 2 ข้อความต่อเดือน</p>
        </div>
    );
}

function Row({ p, isMe, onChanged, onToast }) {
    const cardSw = <CardSwitch p={p} onChanged={onChanged} onToast={onToast} />;
    const [open, setOpen] = useState(false);
    const [realName, setRealName] = useState(p.realName || "");
    const [promptpay, setPromptpay] = useState(p.promptpay || "");
    const [admin, setAdmin] = useState(p.role === "admin");
    const [busy, setBusy] = useState(false);
    const [err, setErr] = useState("");
    const complete = Boolean(p.realName && p.promptpay);
    async function save(e) {
        e.preventDefault();
        setErr("");
        const rn = realName.trim();
        const pp = promptpay.trim() ? validPromptpay(promptpay) : "";
        if (rn && !/[ก-๙a-zA-Z]/.test(rn)) return setErr("ชื่อจริงไม่ถูกต้อง");
        if (promptpay.trim() && !pp) return setErr("พร้อมเพย์ต้องเป็นเบอร์ 10 หลัก หรือเลขบัตร 13 หลัก");
        setBusy(true);
        try {
            await updateMember(p.id, { realName: rn, promptpay: pp, role: admin ? "admin" : "member" });
            onToast(`บันทึกข้อมูลของ ${p.name} แล้ว`);
            setOpen(false);
            onChanged();
        } catch (ex) { setErr(ex.message); }
        setBusy(false);
    }
    return (
        <li class="mrow">
            <div class="mtop">
                <Avatar name={p.name} pictureUrl={p.pictureUrl} />
                <div class="grow">
                    <div class="t-line">
                        <span class="t">{p.name}</span>
                        {isMe && <span class="tag-me">ฉัน</span>}
                    </div>
                    {(p.realName || p.promptpay) && (
                        <div class="m-sub">
                            {p.realName && <span>{p.realName}</span>}
                            {p.realName && p.promptpay && <span class="dot-sep">&middot;</span>}
                            {p.promptpay && <span class="num">{maskPromptpay(p.promptpay)}</span>}
                        </div>
                    )}
                    <div class="s">
                        {p.role === "admin" && <span class="tag tag-admin">แอดมิน</span>}
                        {!p.hasLine && <span class="tag tag-mute">ยังไม่ผูก LINE</span>}
                        {!complete && <span class="tag warn">ข้อมูลไม่ครบ</span>}
                    </div>
                    {cardSw}
                </div>
                <button type="button" class="btn sm ghost" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? "ปิด" : "แก้ไข"}</button>
            </div>
            {open && (
                <form class="mform" onSubmit={save}>
                    <div class="field"><label for={`mr-${p.id}`}>ชื่อจริงภาษาไทย</label><input id={`mr-${p.id}`} type="text" maxLength={80} value={realName} onInput={(e) => setRealName(e.currentTarget.value)} /></div>
                    <div class="field"><label for={`mp-${p.id}`}>พร้อมเพย์</label><input id={`mp-${p.id}`} class="num" type="text" inputmode="numeric" value={promptpay} onInput={(e) => setPromptpay(e.currentTarget.value)} /></div>
                    {!isMe && <label class="check"><input type="checkbox" checked={admin} onChange={(e) => setAdmin(e.currentTarget.checked)} /><span>เป็นแอดมิน</span></label>}
                    {err && <p class="msg" role="alert">{err}</p>}
                    <div class="mact">
                        <button type="submit" class="btn sm" disabled={busy}>{busy ? "กำลังบันทึก" : "บันทึก"}</button>
                        {!isMe && p.name !== "GAME" && (
                            <DeleteButton label={p.name} onConfirm={async () => {
                                try { await deleteMemberIfUnused(p); onToast(`ลบสมาชิก ${p.name} แล้ว`); onChanged(); } catch (ex) { setErr(ex.message); }
                            }} />
                        )}
                    </div>
                </form>
            )}
        </li>
    );
}

export function MembersSheet({ profiles, me, onClose, onChanged, onToast }) {
    const [name, setName] = useState("");
    const [busy, setBusy] = useState(false);
    const [err, setErr] = useState("");
    const list = [...(profiles || [])].sort((a, b) => a.name.localeCompare(b.name));
    async function add(e) {
        e.preventDefault();
        setErr("");
        const n = name.replace(/\s+/g, " ").trim().toUpperCase();
        if (!n) return setErr("กรอกชื่อสมาชิก");
        if (list.some((p) => p.name === n)) return setErr("ชื่อนี้มีอยู่แล้ว");
        setBusy(true);
        try { await addMemberName(n); setName(""); onToast(`เพิ่มสมาชิก ${n} แล้ว`); onChanged(); } catch (ex) { setErr(ex.message); }
        setBusy(false);
    }
    return (
        <Sheet title="จัดการสมาชิก" onClose={onClose}>
            <div class="madd-box">
                <form class="madd" onSubmit={add}>
                    <div class="field grow"><label for="m-new">เพิ่มสมาชิกใหม่</label><input id="m-new" type="text" maxLength={30} placeholder="ชื่อเล่นหรือชื่อที่ใช้ในกลุ่ม" value={name} onInput={(e) => setName(e.currentTarget.value)} /></div>
                    <button type="submit" class="btn" disabled={busy}><Icon name="plus" size={16} />เพิ่ม</button>
                </form>
                {err && <p class="msg" role="alert">{err}</p>}
                <p class="lbl madd-hint">คนที่เพิ่มด้วยชื่อ จะผูกบัญชี LINE ของตัวเองได้ตอนเข้าใช้ครั้งแรก โดยเลือกชื่อนี้</p>
            </div>
            <LineQuota />
            <div class="mlist-head"><span class="lbl">สมาชิก ({list.length} คน)</span></div>
            <ul class="plain mlist">{list.map((p) => <Row key={p.id} p={p} isMe={p.name === me} onChanged={onChanged} onToast={onToast} />)}</ul>
        </Sheet>
    );
}
