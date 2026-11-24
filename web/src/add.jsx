// ปุ่มบันทึก: เลือกประเภท แล้วกรอก บิลหารกับเพื่อน / รายจ่ายส่วนตัว / รายรับ
import { useState, useMemo } from "preact/hooks";
import { Icon, ItemIcon } from "./icons.jsx";
import { brandOf } from "./brands.js";
import { Sheet, Avatar, DatePickerField } from "./ui.jsx";
import { CategoryPicker, faOf, keyOfFa, hasCategory } from "./cats.jsx";
import { buildBill, equalSplit, guessBillIcon, BILL_ICONS, baht } from "./model.js";
import { FreqBox } from "./freq.jsx";
import { PayFromPicker, payOptions, lastPay, payFields, rememberPay } from "./payfrom.jsx";

export function AddSheet({ onClose, onSaved, save, saveBill, today, members, me, suggested = [], initial = null, prefill = null, convertWallet = null, openFrom = "", cards = [] }) {
    const [mode, setMode] = useState(initial); // null | "bill" | "expense" | "income"
    if (mode === "bill") return <BillForm onBack={() => setMode(null)} onClose={onClose} onSaved={onSaved} saveBill={saveBill} today={today} members={members} me={me} suggested={suggested} prefill={prefill} convertWallet={convertWallet} openFrom={openFrom} />;
    if (mode) return <AddForm type={mode} onBack={() => setMode(null)} onClose={onClose} onSaved={onSaved} save={save} today={today} cards={cards} />;
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

function AddForm({ type, onBack, onClose, onSaved, save, today, cards = [] }) {
    const [amount, setAmount] = useState("");
    const [desc, setDesc] = useState("");
    const [date, setDate] = useState(today);
    const [busy, setBusy] = useState(false);
    const [err, setErr] = useState("");
    const [monthly, setMonthly] = useState(false);
    const [every, setEvery] = useState(1); // รอบ: ทุกเดือน / 3 / 6 / 12 เดือน (เริ่มจากเดือนของวันที่)
    const [iconKey, setIconKey] = useState("other");
    const [iconTouched, setIconTouched] = useState(false);
    // จ่ายจาก: เลือกอันที่ใช้ล่าสุดไว้ให้ (แตะซ้ำ = ไม่ระบุ)
    const [pay, setPay] = useState(() => (type === "income" ? "" : lastPay(payOptions(cards))));
    const income = type === "income";
    const onDesc = (v) => { setDesc(v); if (!iconTouched && !income) setIconKey(guessBillIcon(v)); };
    async function submit(e) {
        e.preventDefault();
        setErr("");
        const n = Number(amount);
        if (!Number.isFinite(n) || n <= 0) { setErr("ใส่จำนวนเงินเป็นตัวเลขมากกว่า 0"); return; }
        if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || date > today) { setErr("เลือกวันที่ไม่เกินวันนี้"); return; }
        setBusy(true);
        try {
            await save({ type, amount: n, desc: desc.trim() || undefined, date, ...(income ? {} : { icon: faOf(iconKey) }), ...(monthly && !income ? { recurring: true, every } : {}), ...(!income && pay ? payFields(pay) : {}) });
            if (!income && pay) rememberPay(pay);
            onSaved(income ? "บันทึกรายรับแล้ว" : monthly ? `บันทึกรายจ่ายแล้ว และจะสร้างซ้ำ${every === 1 ? "ทุกเดือน" : every === 12 ? "ทุกปี" : `ทุก ${every} เดือน`}` : "บันทึกรายจ่ายแล้ว", [date.slice(0, 7)]);
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
            <div class="field"><div class="hd-row"><label for="f-desc">รายการ</label>{!income && brandOf(desc) && <ItemIcon desc={desc} name="dots" size={24} iconSize={12} />}</div><input id="f-desc" type="text" maxLength={100} placeholder={income ? "เช่น เงินเดือน" : "เช่น กาแฟ"} value={desc} onInput={(e) => onDesc(e.currentTarget.value)} /></div>
            {!income && <CategoryPicker value={iconKey} onPick={(k) => { setIconKey(k); setIconTouched(true); }} labelId="f-cat-l" hint={!iconTouched && desc.trim() ? "เลือกให้อัตโนมัติ" : ""} />}
            {!income && <PayFromPicker value={pay} onChange={setPay} cards={cards} labelId="f-pay-l" />}
            <DatePickerField id="f-date" label="วันที่" value={date} onChange={setDate} max={today} today={today} />
            {!income && (
                <div class="field">
                    <span class="fl" id="f-type-l">ชำระแบบ</span>
                    <div class="seg" role="group" aria-labelledby="f-type-l">
                        <button type="button" class={!monthly ? "on" : ""} aria-pressed={!monthly} onClick={() => setMonthly(false)}>ครั้งเดียว</button>
                        <button type="button" class={monthly ? "on" : ""} aria-pressed={monthly} onClick={() => setMonthly(true)}>ทำซ้ำ</button>
                    </div>
                    {monthly && <FreqBox every={every} onEvery={setEvery} date={date} amount={Number(amount) || 0} today={today} />}
                    {monthly && <small>ระบบสร้างรายจ่ายนี้ให้เองเมื่อถึงรอบ ตามวันที่ {Number(date.slice(8, 10))} (วันที่ 29 ถึง 31 จะปรับเป็นวันสุดท้ายของเดือนที่สั้นกว่า) หยุดได้ที่หน้ารายการ</small>}
                </div>
            )}
            {err && <p class="msg" role="alert">{err}</p>}
            <button type="submit" class="btn block" disabled={busy}>{busy ? "กำลังบันทึก" : income ? "บันทึกรายรับ" : "บันทึกรายจ่าย"}</button>
        </Sheet>
    );
}

const TYPES = [
    { key: "normal", label: "ครั้งเดียว" },
    { key: "installment", label: "ผ่อนชำระ" },
    { key: "subscription", label: "ทำซ้ำ" }
];
const MODES = [{ key: "equal", label: "หารเท่ากัน" }, { key: "custom", label: "กำหนดยอดเอง" }];

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

const PANELS = [
    { key: "payer", label: "คนจ่าย" },
    { key: "split", label: "วิธีแบ่ง" },
    { key: "type", label: "ชำระแบบ" }
];

/** ฟอร์มบิลหารกับเพื่อน แบบสั้นหน้าเดียว: ยอด รายการ หารกับใคร (ชิปทางลัด) หมวด และตัวเลือกเพิ่มเติมแบบเปิดทีละหัวข้อ */
// openFrom: วันแรกของเดือนที่ยังเปิด (เดือนที่ปิดยอดแล้วลงบิลไม่ได้ lib/month-lock.mjs) ว่าง = ผู้ดูแลหลัก เลือกได้ทุกวัน
function BillForm({ onBack, onClose, onSaved, saveBill, today, members, me, suggested = [], prefill = null, convertWallet = null, openFrom = "" }) {
    const all = members || [];
    const quick = suggested.filter((m) => all.includes(m));
    const [amount, setAmount] = useState(prefill ? String(prefill.amount) : "");
    const [desc, setDesc] = useState(prefill ? prefill.desc || "" : "");
    // รายการส่วนตัวของเดือนที่ปิดยอดแล้ว เปลี่ยนเป็นบิลหารได้ แต่ลงเป็นบิลของวันนี้แทน
    const movedFrom = prefill && prefill.date && openFrom && prefill.date < openFrom ? prefill.date : "";
    const [date, setDate] = useState(prefill && prefill.date && prefill.date <= today && !movedFrom ? prefill.date : today);
    const [payer, setPayer] = useState(me);
    const [people, setPeople] = useState(() => new Set()); // เริ่มต้นไม่เลือกใครให้ ผู้ใช้เลือกเอง
    const [more, setMore] = useState(false);
    const [find, setFind] = useState("");
    const [mode, setMode] = useState("equal");
    const [custom, setCustom] = useState({});
    const [type, setType] = useState("normal");
    const [installments, setInstallments] = useState("3");
    const [recurring, setRecurring] = useState(true);
    const [every, setEvery] = useState(1);
    const [iconKey, setIconKey] = useState(() => (prefill ? (hasCategory(prefill.icon) ? keyOfFa(prefill.icon) : guessBillIcon(prefill.desc)) : "other"));
    const [iconTouched, setIconTouched] = useState(Boolean(prefill && hasCategory(prefill.icon)));
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
    // แถบเดียวเลื่อนข้าง: ฉัน + คนที่หารด้วยบ่อย (ลำดับคงที่ ไม่สลับตอนแตะ) + คนที่เลือกเพิ่มจากการค้นหา
    const base = [...new Set([me, ...quick])].filter((m) => all.includes(m));
    const strip = [...base, ...chosen.filter((m) => !base.includes(m))];
    const others = all.filter((m) => !strip.includes(m) && (!find.trim() || m.toLowerCase().includes(find.trim().toLowerCase())));

    let resultText = "เลือกคนหารอย่างน้อย 1 คน";
    let resultTone = "mute";
    if (chosen.length > 0) {
        if (mode === "custom") { resultText = "กำหนดยอดเอง"; }
        else if (type === "installment" && n > 0 && Number(installments) >= 2) { resultText = `ผ่อน ${installments} เดือน หาร ${chosen.length} คน`; }
        else { resultText = `${payer === me ? "ฉัน" : payer} จ่าย หารเท่ากัน ${chosen.length} คน${chosen.includes(payer) ? "" : " (จ่ายแทน)"}`; }
        resultTone = "";
    }
    const each = preview ? (preview[chosen[0]] ?? 0) : 0;
    const values = {
        payer: payer === me ? "ฉัน" : payer,
        split: mode === "custom" ? "ยอดเอง" : "เท่ากัน",
        type: type === "installment" ? `ผ่อน ${installments} งวด` : type === "subscription" ? (every === 1 ? "ทุกเดือน" : every === 12 ? "ทุกปี" : `ทุก ${every} เดือน`) : "ครั้งเดียว"
    };
    const catHint = !iconTouched && desc.trim() ? "เลือกให้อัตโนมัติ" : "";

    async function submit(e) {
        e.preventDefault();
        setErr("");
        const fa = (BILL_ICONS.find((i) => i.key === iconKey) || BILL_ICONS[BILL_ICONS.length - 1]).fa;
        const r = buildBill({ amount, desc, payer, date, today, participants: chosen, mode, custom, type, installments, recurring, every, icon: fa });
        if (!r.ok) {
            setErr(r.error);
            // ปัญหาอยู่ในหัวข้อที่ปิดอยู่ ให้เปิดหัวข้อนั้นให้เห็นเลย
            if (!/จำนวนเงิน/.test(r.error)) {
                if (/คนจ่าย/.test(r.error)) setPanel("payer");
                else if (/ผ่อน|งวด/.test(r.error)) setPanel("type");
                else if (/ยอด/.test(r.error)) setPanel(mode === "custom" ? "split" : "type");
            }
            return;
        }
        setBusy(true);
        try {
            await saveBill(r);
            // เปลี่ยนจากรายการส่วนตัวมาเป็นบิลหาร: ลบรายการส่วนตัวเดิมหลังบันทึกบิลสำเร็จแล้วเท่านั้น (กันหายทั้งคู่)
            let note = "";
            if (prefill && prefill.convertId && convertWallet) {
                try { await convertWallet(prefill.convertId); } catch (ex) { note = " (ลบรายการส่วนตัวเดิมไม่สำเร็จ ลบเองได้ที่หน้ากระเป๋า)"; }
            }
            const months = new Set(r.docs.map((d) => d.date.slice(0, 7)));
            if (prefill && prefill.month) months.add(prefill.month);
            onSaved(`บันทึกบิลแล้ว ${r.summary}${note}`, [...months]);
            onClose();
        } catch (ex) {
            setErr(ex.message || "บันทึกไม่สำเร็จ ลองใหม่อีกครั้ง");
            setBusy(false);
        }
    }

    return (
        <Sheet as="form" title="บิลหารกับเพื่อน" onClose={onClose} onSubmit={submit}
            action={<button type="button" class="btn sm ghost" onClick={onBack}>เปลี่ยนประเภท</button>}>
            <DatePickerField id="b-date" label="วันที่" value={date} onChange={setDate} max={today} min={openFrom} today={today} />
            {movedFrom && <small class="payer-note">รายการนี้อยู่ในเดือนที่ปิดยอดแล้ว จึงลงเป็นบิลของวันนี้แทน (ยอดเคลียร์เงินของเดือนเก่าจะได้ไม่เปลี่ยน)</small>}
            <div class="field amount">
                <label for="b-amount">ยอดเต็มของบิล (บาท)</label>
                <input id="b-amount" class="num" type="number" inputmode="decimal" step="0.01" min="0" placeholder="0.00" required value={amount} onInput={(e) => setAmount(e.currentTarget.value)} />
            </div>
            <div class="field"><div class="hd-row"><label for="b-desc">รายการ</label>{brandOf(desc) && <ItemIcon desc={desc} name="dots" size={24} iconSize={12} />}</div><input id="b-desc" type="text" maxLength={100} placeholder="เช่น ข้าวมันไก่" value={desc} onInput={(e) => onDesc(e.currentTarget.value)} /></div>

            <div class="field">
                <div class="hd-row">
                    <span class="fl" id="b-people-l">หารกับใคร <span class="mute">({chosen.length} คน)</span></span>
                    {(others.length > 0 || more) && <button type="button" class="link" aria-expanded={more} aria-controls="b-pick" onClick={() => { setMore(!more); setFind(""); }}>{more ? "ปิดค้นหา" : "ค้นหาคนอื่น"}</button>}
                </div>
                <div class="pstrip" role="group" aria-labelledby="b-people-l">
                    {strip.map((m) => (
                        <button type="button" key={m} class={`pchip ${people.has(m) ? "on" : ""}`} aria-pressed={people.has(m)} onClick={() => toggle(m)}>
                            <span class="pav-s">{people.has(m) ? <Icon name="check" size={14} /> : [...m][0]}</span>{label(m)}
                        </button>
                    ))}
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

            <CategoryPicker value={iconKey} onPick={(k) => { setIconKey(k); setIconTouched(true); }} labelId="b-icon-l" hint={catHint} />

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
                {panel === "payer" && (
                    <div id="b-p-payer" class="opt-panel">
                        <span class="fl" id="b-payer-l">ใครจ่ายเงินก่อน</span>
                        <div class="payer-pick-grid" role="radiogroup" aria-labelledby="b-payer-l">
                            {all.map((m) => {
                                const isSel = payer === m;
                                return (
                                    <button
                                        type="button"
                                        key={m}
                                        class={`payer-card ${isSel ? "on" : ""}`}
                                        role="radio"
                                        aria-checked={isSel}
                                        onClick={() => setPayer(m)}
                                    >
                                        <Avatar name={m} size="sm" />
                                        <span class="payer-card-name">{m === me ? `${m} (ฉัน)` : m}</span>
                                        {isSel && <Icon name="check" size={16} class="payer-card-chk" />}
                                    </button>
                                );
                            })}
                        </div>
                        {!people.has(payer) && people.size > 0 && <small class="payer-note">{payer} ไม่ได้อยู่ในคนหาร: เป็นการจ่ายแทนเพื่อน ไม่มีส่วนของ {payer}</small>}
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
                            <>
                                <FreqBox every={every} onEvery={setEvery} date={date} amount={n || 0} today={today} />
                                <label class="check"><input type="checkbox" checked={recurring} onChange={(e) => setRecurring(e.currentTarget.checked)} /><span>สร้างบิลนี้ซ้ำอัตโนมัติเมื่อถึงรอบ (ยกเลิกได้ภายหลัง)</span></label>
                            </>
                        )}
                    </div>
                )}
            </div>

            {err && <p class="msg" role="alert">{err}</p>}
            <button type="submit" class="btn block" disabled={busy}>{busy ? "กำลังบันทึก" : "บันทึกบิล"}</button>
        </Sheet>
    );
}
