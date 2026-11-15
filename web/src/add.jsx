// ปุ่มบันทึก: เลือกประเภท แล้วกรอก บิลหารกับเพื่อน / รายจ่ายส่วนตัว / รายรับ
import { useState, useMemo } from "preact/hooks";
import { Icon } from "./icons.jsx";
import { Sheet } from "./ui.jsx";
import { buildBill, equalSplit, guessBillIcon, BILL_ICONS, baht } from "./model.js";

export function AddSheet({ onClose, onSaved, save, saveBill, today, members, me, initial = null }) {
    const [mode, setMode] = useState(initial); // null | "bill" | "expense" | "income"
    if (mode === "bill") return <BillForm onBack={() => setMode(null)} onClose={onClose} onSaved={onSaved} saveBill={saveBill} today={today} members={members} me={me} />;
    if (mode) return <AddForm type={mode} onBack={() => setMode(null)} onClose={onClose} onSaved={onSaved} save={save} today={today} />;
    return (
        <Sheet title="บันทึกอะไร" onClose={onClose}>
            <button type="button" class="opt-row" onClick={() => setMode("bill")}>
                <span class="ico"><Icon name="people" /></span>
                <span><b>บิลหารกับเพื่อน</b><small>หารเท่ากันหรือกำหนดเอง ผ่อนชำระ หรือรายเดือน</small></span>
                <Icon name="right" size={16} class="mute" />
            </button>
            <button type="button" class="opt-row" onClick={() => setMode("expense")}>
                <span class="ico"><Icon name="lock" /></span>
                <span><b>รายจ่ายส่วนตัว</b><small>เพื่อนไม่เห็น ไม่กระทบยอดหนี้</small></span>
                <Icon name="right" size={16} class="mute" />
            </button>
            <button type="button" class="opt-row" onClick={() => setMode("income")}>
                <span class="ico"><Icon name="down" class="rcv" /></span>
                <span><b>รายรับ</b><small>เงินเดือนและรายได้อื่น ไม่รวมเพื่อนโอนคืนหนี้</small></span>
                <Icon name="right" size={16} class="mute" />
            </button>
        </Sheet>
    );
}

function AddForm({ type, onBack, onClose, onSaved, save, today }) {
    const [amount, setAmount] = useState("");
    const [desc, setDesc] = useState("");
    const [date, setDate] = useState(today);
    const [busy, setBusy] = useState(false);
    const [err, setErr] = useState("");
    const income = type === "income";
    async function submit(e) {
        e.preventDefault();
        setErr("");
        const n = Number(amount);
        if (!Number.isFinite(n) || n <= 0) { setErr("ใส่จำนวนเงินเป็นตัวเลขมากกว่า 0"); return; }
        if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || date > today) { setErr("เลือกวันที่ไม่เกินวันนี้"); return; }
        setBusy(true);
        try {
            await save({ type, amount: n, desc: desc.trim() || undefined, date });
            onSaved(income ? "บันทึกรายรับแล้ว" : "บันทึกรายจ่ายแล้ว", [date.slice(0, 7)]);
            onClose();
        } catch (ex) {
            setErr(ex.message || "บันทึกไม่สำเร็จ ลองใหม่อีกครั้ง");
            setBusy(false);
        }
    }
    return (
        <Sheet as="form" title={income ? "บันทึกรายรับ" : "บันทึกรายจ่ายส่วนตัว"} onClose={onClose} onSubmit={submit}
            action={<button type="button" class="btn sm ghost" onClick={onBack}>เปลี่ยนประเภท</button>}>
            <div class="field amount">
                <label for="f-amount">จำนวนเงิน (บาท)</label>
                <input id="f-amount" class="num" type="number" inputmode="decimal" step="0.01" min="0" placeholder="0.00" required value={amount} aria-invalid={err && !(Number(amount) > 0) ? "true" : undefined} onInput={(e) => setAmount(e.currentTarget.value)} />
            </div>
            <div class="field"><label for="f-desc">รายการ</label><input id="f-desc" type="text" maxLength={100} placeholder={income ? "เช่น เงินเดือน" : "เช่น กาแฟ"} value={desc} onInput={(e) => setDesc(e.currentTarget.value)} /></div>
            <div class="field"><label for="f-date">วันที่</label><input id="f-date" type="date" max={today} value={date} onInput={(e) => setDate(e.currentTarget.value)} /></div>
            {err && <p class="msg" role="alert">{err}</p>}
            <button type="submit" class="btn block" disabled={busy}>{busy ? "กำลังบันทึก" : income ? "บันทึกรายรับ" : "บันทึกรายจ่าย"}</button>
        </Sheet>
    );
}

const TYPES = [
    { key: "normal", label: "จ่ายครั้งเดียว" },
    { key: "installment", label: "ผ่อนชำระ" },
    { key: "subscription", label: "รายเดือน" }
];

function Segmented({ label, value, options, onChange }) {
    return (
        <div class="field">
            <span class="fl" id={`seg-${label}`}>{label}</span>
            <div class="seg" role="group" aria-labelledby={`seg-${label}`}>
                {options.map((o) => <button type="button" key={o.key} class={value === o.key ? "on" : ""} aria-pressed={value === o.key} onClick={() => onChange(o.key)}>{o.label}</button>)}
            </div>
        </div>
    );
}

function BillForm({ onBack, onClose, onSaved, saveBill, today, members, me }) {
    const all = members || [];
    const [amount, setAmount] = useState("");
    const [desc, setDesc] = useState("");
    const [date, setDate] = useState(today);
    const [payer, setPayer] = useState(me);
    const [people, setPeople] = useState(() => new Set(all));
    const [mode, setMode] = useState("equal");
    const [custom, setCustom] = useState({});
    const [type, setType] = useState("normal");
    const [installments, setInstallments] = useState("3");
    const [recurring, setRecurring] = useState(true);
    const [iconKey, setIconKey] = useState("other");
    const [iconTouched, setIconTouched] = useState(false);
    const [busy, setBusy] = useState(false);
    const [err, setErr] = useState("");

    const chosen = all.filter((m) => people.has(m));
    const n = Number(amount);
    const preview = useMemo(() => (n > 0 && chosen.length > 0 && mode === "equal" ? equalSplit(n, chosen) : null), [n, chosen.join("|"), mode]);
    const customSum = chosen.reduce((a, p) => a + (Math.round(Number(custom[p]) * 100) || 0), 0);
    const toggle = (m) => setPeople((cur) => { const s = new Set(cur); if (s.has(m)) s.delete(m); else s.add(m); return s; });
    const onDesc = (v) => { setDesc(v); if (!iconTouched) setIconKey(guessBillIcon(v)); };

    async function submit(e) {
        e.preventDefault();
        setErr("");
        const fa = (BILL_ICONS.find((i) => i.key === iconKey) || BILL_ICONS[4]).fa;
        const r = buildBill({ amount, desc, payer, date, today, participants: chosen, mode, custom, type, installments, recurring, icon: fa });
        if (!r.ok) { setErr(r.error); return; }
        setBusy(true);
        try {
            await saveBill(r);
            onSaved(`บันทึกบิลแล้ว ${r.summary}`, [...new Set(r.docs.map((d) => d.date.slice(0, 7)))]);
            onClose();
        } catch (ex) {
            setErr(ex.message || "บันทึกไม่สำเร็จ ลองใหม่อีกครั้ง");
            setBusy(false);
        }
    }

    return (
        <Sheet as="form" title="บิลหารกับเพื่อน" onClose={onClose} onSubmit={submit}
            action={<button type="button" class="btn sm ghost" onClick={onBack}>เปลี่ยนประเภท</button>}>
            <div class="field amount">
                <label for="b-amount">ยอดเต็มของบิล (บาท)</label>
                <input id="b-amount" class="num" type="number" inputmode="decimal" step="0.01" min="0" placeholder="0.00" required value={amount} onInput={(e) => setAmount(e.currentTarget.value)} />
            </div>
            <div class="field"><label for="b-desc">รายการ</label><input id="b-desc" type="text" maxLength={100} placeholder="เช่น กินข้าวกับเพื่อน" value={desc} onInput={(e) => onDesc(e.currentTarget.value)} /></div>
            <div class="field two">
                <div class="field"><label for="b-date">วันที่</label><input id="b-date" type="date" max={today} value={date} onInput={(e) => setDate(e.currentTarget.value)} /></div>
                <div class="field"><label for="b-payer">คนจ่าย</label>
                    <select id="b-payer" value={payer} onChange={(e) => setPayer(e.currentTarget.value)}>{all.map((m) => <option key={m} value={m}>{m}</option>)}</select>
                </div>
            </div>

            <div class="field">
                <div class="hd-row"><span class="fl" id="b-people-l">หารกับใครบ้าง</span><button type="button" class="link" onClick={() => setPeople(new Set(people.size === all.length ? [] : all))}>{people.size === all.length ? "ไม่เลือกเลย" : "เลือกทุกคน"}</button></div>
                <div class="chips-pick" role="group" aria-labelledby="b-people-l">
                    {all.map((m) => <button type="button" key={m} class={people.has(m) ? "on" : ""} aria-pressed={people.has(m)} onClick={() => toggle(m)}>{people.has(m) && <Icon name="check" size={14} />}{m}</button>)}
                </div>
                {!people.has(payer) && people.size > 0 && <small>{payer} ไม่ได้เลือกหาร: จะเป็นการจ่ายแทนเพื่อน ไม่มีส่วนของ {payer}</small>}
            </div>

            <Segmented label="วิธีแบ่ง" value={mode} onChange={setMode} options={[{ key: "equal", label: "หารเท่ากัน" }, { key: "custom", label: "กำหนดยอดเอง" }]} />
            {mode === "equal" && preview && <ul class="plain split-prev">{chosen.map((m) => <li key={m}><span>{m}</span><span class="num">{baht(preview[m], { decimals: 2 })}</span></li>)}</ul>}
            {mode === "custom" && (
                <div class="split-custom">
                    {chosen.map((m) => (
                        <div class="cust" key={m}>
                            <label for={`c-${m}`}>{m}</label>
                            <input id={`c-${m}`} class="num" type="number" inputmode="decimal" step="0.01" min="0" placeholder="0.00" value={custom[m] ?? ""} onInput={(e) => setCustom({ ...custom, [m]: e.currentTarget.value })} />
                        </div>
                    ))}
                    <p class={`lbl num ${n > 0 && customSum !== Math.round(n * 100) ? "pay" : ""}`}>รวม {baht(customSum / 100, { decimals: 2 })} จากยอดบิล {baht(n || 0, { decimals: 2 })}</p>
                </div>
            )}

            <Segmented label="ชำระแบบไหน" value={type} onChange={setType} options={TYPES} />
            {type === "installment" && (
                <div class="field"><label for="b-inst">ผ่อนกี่เดือน (2 ถึง 60)</label><input id="b-inst" class="num" type="number" inputmode="numeric" min="2" max="60" value={installments} onInput={(e) => setInstallments(e.currentTarget.value)} />
                    {n > 0 && Number(installments) >= 2 && <small>งวดละประมาณ {baht(n / Number(installments), { decimals: 2 })} เริ่มวันที่ {date}</small>}</div>
            )}
            {type === "subscription" && (
                <label class="check"><input type="checkbox" checked={recurring} onChange={(e) => setRecurring(e.currentTarget.checked)} /><span>สร้างบิลนี้ซ้ำทุกเดือนอัตโนมัติ (ยกเลิกได้ภายหลัง)</span></label>
            )}

            <div class="field">
                <span class="fl" id="b-icon-l">หมวด</span>
                <div class="chips-pick" role="group" aria-labelledby="b-icon-l">
                    {BILL_ICONS.map((i) => <button type="button" key={i.key} class={iconKey === i.key ? "on" : ""} aria-pressed={iconKey === i.key} onClick={() => { setIconKey(i.key); setIconTouched(true); }}><Icon name={i.icon} size={14} />{i.label}</button>)}
                </div>
            </div>

            {err && <p class="msg" role="alert">{err}</p>}
            <button type="submit" class="btn block" disabled={busy}>{busy ? "กำลังบันทึก" : "บันทึกบิล"}</button>
        </Sheet>
    );
}
