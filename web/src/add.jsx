// ปุ่มบันทึก: เลือกประเภท แล้วกรอก บิลหารกับเพื่อน / รายจ่ายส่วนตัว / รายรับ
import { useState, useMemo } from "preact/hooks";
import { Icon } from "./icons.jsx";
import { Sheet } from "./ui.jsx";
import { buildBill, equalSplit, guessBillIcon, BILL_ICONS, baht } from "./model.js";

export function AddSheet({ onClose, onSaved, save, saveBill, today, members, me, suggested = [], initial = null }) {
    const [mode, setMode] = useState(initial); // null | "bill" | "expense" | "income"
    if (mode === "bill") return <BillForm onBack={() => setMode(null)} onClose={onClose} onSaved={onSaved} saveBill={saveBill} today={today} members={members} me={me} suggested={suggested} />;
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
    { key: "normal", label: "ครั้งเดียว" },
    { key: "installment", label: "ผ่อนชำระ" },
    { key: "subscription", label: "รายเดือน" }
];
const MODES = [{ key: "equal", label: "หารเท่ากัน" }, { key: "custom", label: "กำหนดยอดเอง" }];
const LAST_KEY = "dm:v2:lastPeople";

function Segmented({ id, label, value, options, onChange }) {
    return (
        <div class="field">
            <span class="fl" id={id}>{label}</span>
            <div class="seg" role="group" aria-labelledby={id}>
                {options.map((o) => <button type="button" key={o.key} class={value === o.key ? "on" : ""} aria-pressed={value === o.key} onClick={() => onChange(o.key)}>{o.label}</button>)}
            </div>
        </div>
    );
}

export function addDays(dateStr, delta) {
    const [y, m, d] = dateStr.split("-").map(Number);
    const t = new Date(Date.UTC(y, m - 1, d + delta));
    return `${t.getUTCFullYear()}-${String(t.getUTCMonth() + 1).padStart(2, "0")}-${String(t.getUTCDate()).padStart(2, "0")}`;
}

function readLast(all) {
    try {
        const v = JSON.parse(localStorage.getItem(LAST_KEY) || "[]").filter((n) => all.includes(n));
        return v.length > 0 ? v : null;
    } catch (e) { return null; }
}

const PANELS = [
    { key: "date", label: "วันที่" },
    { key: "payer", label: "คนจ่าย" },
    { key: "split", label: "วิธีแบ่ง" },
    { key: "type", label: "ชำระแบบ" }
];

/** ฟอร์มบิลหารกับเพื่อน แบบสั้นหน้าเดียว: ยอด รายการ หารกับใคร (ชิปทางลัด) หมวด และตัวเลือกเพิ่มเติมแบบเปิดทีละหัวข้อ */
function BillForm({ onBack, onClose, onSaved, saveBill, today, members, me, suggested = [] }) {
    const all = members || [];
    const quick = suggested.filter((m) => all.includes(m));
    const [amount, setAmount] = useState("");
    const [desc, setDesc] = useState("");
    const [date, setDate] = useState(today);
    const [pickDate, setPickDate] = useState(false);
    const [payer, setPayer] = useState(me);
    const [people, setPeople] = useState(() => {
        const last = readLast(all);
        if (last) return new Set(last);
        const start = [me, ...quick.slice(0, 2)].filter((m) => all.includes(m));
        return new Set(start.length > 0 ? start : all.slice(0, 1));
    });
    const [more, setMore] = useState(false);
    const [find, setFind] = useState("");
    const [mode, setMode] = useState("equal");
    const [custom, setCustom] = useState({});
    const [type, setType] = useState("normal");
    const [installments, setInstallments] = useState("3");
    const [recurring, setRecurring] = useState(true);
    const [iconKey, setIconKey] = useState("other");
    const [iconTouched, setIconTouched] = useState(false);
    const [panel, setPanel] = useState(null);
    const [busy, setBusy] = useState(false);
    const [err, setErr] = useState("");

    const chosen = all.filter((m) => people.has(m));
    const n = Number(amount);
    const preview = useMemo(() => (n > 0 && chosen.length > 0 && mode === "equal" ? equalSplit(n, chosen) : null), [n, chosen.join("|"), mode]);
    const customSum = chosen.reduce((a, p) => a + (Math.round(Number(custom[p]) * 100) || 0), 0);
    const toggle = (m) => setPeople((cur) => { const s = new Set(cur); if (s.has(m)) s.delete(m); else s.add(m); return s; });
    const onDesc = (v) => { setDesc(v); if (!iconTouched) setIconKey(guessBillIcon(v)); };
    const label = (m) => (m === me ? "ฉัน" : m);
    const addable = quick.filter((m) => !people.has(m));
    const others = all.filter((m) => !people.has(m) && (!find.trim() || m.toLowerCase().includes(find.trim().toLowerCase())));

    let resultText = "เลือกคนหารอย่างน้อย 1 คน";
    let resultTone = "mute";
    if (chosen.length > 0) {
        if (mode === "custom") { resultText = "กำหนดยอดเอง"; }
        else if (type === "installment" && n > 0 && Number(installments) >= 2) { resultText = `ผ่อน ${installments} เดือน หาร ${chosen.length} คน`; }
        else { resultText = `${payer === me ? "ฉัน" : payer} จ่าย หารเท่ากัน ${chosen.length} คน${chosen.includes(payer) ? "" : " (จ่ายแทน)"}`; }
        resultTone = "";
    }
    const each = preview ? (preview[chosen[0]] ?? 0) : 0;
    const dateLabel = date === today ? "วันนี้" : date === addDays(today, -1) ? "เมื่อวาน" : date.slice(5).split("-").reverse().join("/");
    const values = {
        date: dateLabel,
        payer: payer === me ? "ฉัน" : payer,
        split: mode === "custom" ? "ยอดเอง" : "เท่ากัน",
        type: type === "installment" ? `ผ่อน ${installments} งวด` : type === "subscription" ? "รายเดือน" : "ครั้งเดียว"
    };
    const catHint = !iconTouched && desc.trim() ? "เลือกให้อัตโนมัติ" : "";

    async function submit(e) {
        e.preventDefault();
        setErr("");
        const fa = (BILL_ICONS.find((i) => i.key === iconKey) || BILL_ICONS[BILL_ICONS.length - 1]).fa;
        const r = buildBill({ amount, desc, payer, date, today, participants: chosen, mode, custom, type, installments, recurring, icon: fa });
        if (!r.ok) {
            setErr(r.error);
            // ปัญหาอยู่ในหัวข้อที่ปิดอยู่ ให้เปิดหัวข้อนั้นให้เห็นเลย
            if (!/จำนวนเงิน/.test(r.error)) {
                if (/วันที่/.test(r.error)) setPanel("date");
                else if (/คนจ่าย/.test(r.error)) setPanel("payer");
                else if (/ผ่อน|งวด/.test(r.error)) setPanel("type");
                else if (/ยอด/.test(r.error)) setPanel(mode === "custom" ? "split" : "type");
            }
            return;
        }
        setBusy(true);
        try {
            await saveBill(r);
            try { localStorage.setItem(LAST_KEY, JSON.stringify(chosen)); } catch (ex) { /* ไม่เป็นไร */ }
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
            <div class="field"><label for="b-desc">รายการ</label><input id="b-desc" type="text" maxLength={100} placeholder="เช่น ข้าวมันไก่" value={desc} onInput={(e) => onDesc(e.currentTarget.value)} /></div>

            <div class="field">
                <span class="fl" id="b-people-l">หารกับใคร <span class="mute">({chosen.length} คน)</span></span>
                <div class="pchips" role="group" aria-labelledby="b-people-l">
                    {chosen.map((m) => (
                        <button type="button" key={m} class="pchip on" aria-label={`เอา ${label(m)} ออก`} onClick={() => toggle(m)}>
                            <span class="pav-s">{[...m][0]}</span>{label(m)}<Icon name="close" size={14} />
                        </button>
                    ))}
                    {addable.map((m) => (
                        <button type="button" key={m} class="pchip" aria-label={`เพิ่ม ${label(m)}`} onClick={() => toggle(m)}>
                            <Icon name="plus" size={14} />{label(m)}
                        </button>
                    ))}
                    {others.length > 0 || more ? (
                        <button type="button" class={`pchip ghost ${more ? "open" : ""}`} aria-expanded={more} aria-controls="b-pick" onClick={() => { setMore(!more); setFind(""); }}>
                            <Icon name="search" size={14} />คนอื่น
                        </button>
                    ) : null}
                </div>
                {more && (
                    <div id="b-pick" class="picker">
                        <input type="search" aria-label="ค้นหาชื่อ" placeholder="พิมพ์ชื่อเพื่อค้นหา" value={find} onInput={(e) => setFind(e.currentTarget.value)} />
                        <div class="plist">
                            {others.map((m) => <button type="button" key={m} onClick={() => toggle(m)}><span class="pav-s">{[...m][0]}</span>{m}<Icon name="plus" size={14} class="mute" /></button>)}
                            {others.length === 0 && <p class="mute">{find.trim() ? "ไม่พบชื่อนี้" : "เลือกครบทุกคนแล้ว"}</p>}
                        </div>
                        {others.length > 1 && !find.trim() && <button type="button" class="link" onClick={() => setPeople(new Set(all))}>เลือกทุกคน</button>}
                    </div>
                )}
            </div>

            <div class="field">
                <div class="hd-row"><span class="fl" id="b-icon-l">หมวด</span>{catHint && <span class="hint">{catHint}</span>}</div>
                <div class="cats-pick" role="group" aria-labelledby="b-icon-l">
                    {BILL_ICONS.map((i) => <button type="button" key={i.key} class={iconKey === i.key ? "on" : ""} aria-pressed={iconKey === i.key} onClick={() => { setIconKey(i.key); setIconTouched(true); }}><span class="ct"><Icon name={i.icon} /></span>{i.label}</button>)}
                </div>
            </div>

            <div class={`result ${resultTone}`} role="status">
                <span>{resultText}</span>
                {preview && type !== "installment" && <b class="num rcv">คนละ {baht(each, { decimals: 2 })}</b>}
                {preview && type === "installment" && Number(installments) >= 2 && <b class="num rcv">งวดละ {baht(n / Number(installments), { decimals: 2 })}</b>}
            </div>

            <div class="opts">
                <span class="fl" id="b-opt-l">ตัวเลือกเพิ่มเติม</span>
                <div class="opt-chips" role="group" aria-labelledby="b-opt-l">
                    {PANELS.map((p) => (
                        <button type="button" key={p.key} class={panel === p.key ? "on" : ""} aria-expanded={panel === p.key} aria-controls={`b-p-${p.key}`} onClick={() => setPanel(panel === p.key ? null : p.key)}>
                            <small>{p.label}</small><b>{values[p.key]}</b>
                        </button>
                    ))}
                </div>
                {panel === "date" && (
                    <div id="b-p-date" class="opt-panel">
                        <div class="chips-pick">
                            <button type="button" class={date === today && !pickDate ? "on" : ""} aria-pressed={date === today && !pickDate} onClick={() => { setDate(today); setPickDate(false); }}>วันนี้</button>
                            <button type="button" class={date === addDays(today, -1) && !pickDate ? "on" : ""} aria-pressed={date === addDays(today, -1) && !pickDate} onClick={() => { setDate(addDays(today, -1)); setPickDate(false); }}>เมื่อวาน</button>
                            <button type="button" class={pickDate ? "on" : ""} aria-pressed={pickDate} onClick={() => setPickDate(true)}>เลือกวัน</button>
                        </div>
                        {pickDate && <input id="b-date" type="date" aria-label="วันที่" max={today} value={date} onInput={(e) => setDate(e.currentTarget.value)} />}
                    </div>
                )}
                {panel === "payer" && (
                    <div id="b-p-payer" class="opt-panel">
                        <label for="b-payer" class="fl">ใครจ่ายเงินก่อน</label>
                        <select id="b-payer" value={payer} onChange={(e) => setPayer(e.currentTarget.value)}>{all.map((m) => <option key={m} value={m}>{m === me ? `${m} (ฉัน)` : m}</option>)}</select>
                        {!people.has(payer) && people.size > 0 && <small>{payer} ไม่ได้อยู่ในคนหาร: เป็นการจ่ายแทนเพื่อน ไม่มีส่วนของ {payer}</small>}
                    </div>
                )}
                {panel === "split" && (
                    <div id="b-p-split" class="opt-panel">
                        <div class="seg" role="group" aria-label="วิธีแบ่ง">
                            {MODES.map((o) => <button type="button" key={o.key} class={mode === o.key ? "on" : ""} aria-pressed={mode === o.key} onClick={() => setMode(o.key)}>{o.label}</button>)}
                        </div>
                        {mode === "custom" && (
                            <div class="split-custom">
                                {chosen.map((m) => (
                                    <div class="cust" key={m}>
                                        <label for={`c-${m}`}>{label(m)}</label>
                                        <input id={`c-${m}`} class="num" type="number" inputmode="decimal" step="0.01" min="0" placeholder="0.00" value={custom[m] ?? ""} onInput={(e) => setCustom({ ...custom, [m]: e.currentTarget.value })} />
                                    </div>
                                ))}
                                <p class={`lbl num ${n > 0 && customSum !== Math.round(n * 100) ? "pay" : ""}`}>รวม {baht(customSum / 100, { decimals: 2 })} จากยอดบิล {baht(n || 0, { decimals: 2 })}</p>
                            </div>
                        )}
                    </div>
                )}
                {panel === "type" && (
                    <div id="b-p-type" class="opt-panel">
                        <div class="seg" role="group" aria-label="ชำระแบบไหน">
                            {TYPES.map((o) => <button type="button" key={o.key} class={type === o.key ? "on" : ""} aria-pressed={type === o.key} onClick={() => setType(o.key)}>{o.label}</button>)}
                        </div>
                        {type === "installment" && (
                            <div class="field"><label for="b-inst">ผ่อนกี่เดือน (2 ถึง 60)</label><input id="b-inst" class="num" type="number" inputmode="numeric" min="2" max="60" value={installments} onInput={(e) => setInstallments(e.currentTarget.value)} /></div>
                        )}
                        {type === "subscription" && (
                            <label class="check"><input type="checkbox" checked={recurring} onChange={(e) => setRecurring(e.currentTarget.checked)} /><span>สร้างบิลนี้ซ้ำทุกเดือนอัตโนมัติ (ยกเลิกได้ภายหลัง)</span></label>
                        )}
                    </div>
                )}
            </div>

            {err && <p class="msg" role="alert">{err}</p>}
            <button type="submit" class="btn block" disabled={busy}>{busy ? "กำลังบันทึก" : "บันทึกบิล"}</button>
        </Sheet>
    );
}
