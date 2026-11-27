// แก้ไขบิลที่บันทึกแล้ว: ชื่อรายการ หมวด และคนหาร/วิธีหาร (ยอด คนจ่าย วันที่ แก้ไม่ได้ ถ้าผิดให้ลบแล้วเพิ่มใหม่)
import { useState } from "preact/hooks";
import { Sheet } from "./ui.jsx";
import { Icon } from "./icons.jsx";
import { BILL_ICONS, guessBillIcon, buildBill, equalSplit, buildSplitEdit, isEqualSplit, splitsForAmount, baht } from "./model.js";
import { updateBillFields, updateBillSplits, updateWalletEntry, updateWalletTemplate, updateTemplate, confirmWalletEntries } from "./data.js";
import { YearRing, FreqPicker } from "./freq.jsx";
import { PayFromPicker, payKeyFor, payFields, rememberPay } from "./payfrom.jsx";
const TH_MONTH_FULL = ["มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"];
import { CategoryPicker, faOf, keyOfFa, hasCategory } from "./cats.jsx";

const upName = (n) => String(n || "").trim().replace(/\s+/g, " ").toUpperCase();
const SPLIT_MODES = [{ key: "equal", label: "หารเท่ากัน" }, { key: "custom", label: "กำหนดยอดเอง" }];

/** locked = บิลเดือนที่ปิดยอดแล้ว (และไม่ใช่ผู้ดูแลหลัก) แก้คนหารไม่ได้ · canSplit = คนจ่ายหรือผู้ดูแล */
export function EditBillSheet({ bill, onClose, onSaved, members = [], me = "", locked = false }) {
    const grouped = bill.type === "installment";
    const cur = (BILL_ICONS.find((i) => i.fa === bill.icon) || BILL_ICONS[BILL_ICONS.length - 1]).key;
    const amount = (Number(bill.amountSat) || 0) / 100;
    const origSplits = bill.splits || {};
    const origNames = Object.keys(origSplits).map(upName);
    const payer = upName(bill.payer);
    const meN = upName(me);
    const [desc, setDesc] = useState(bill.desc || "");
    const [iconKey, setIconKey] = useState(cur);
    const [people, setPeople] = useState(() => new Set(origNames));
    const [mode, setMode] = useState(() => (isEqualSplit(origSplits, amount, payer) ? "equal" : "custom"));
    const [custom, setCustom] = useState(() => Object.fromEntries(Object.entries(origSplits).map(([k, v]) => [upName(k), String(v)])));
    const [more, setMore] = useState(false);
    const [find, setFind] = useState("");
    const [busy, setBusy] = useState(false);
    const [err, setErr] = useState("");

    // รายชื่อ: สมาชิกตอนนี้ + คนในบิลเดิม (เผื่อคนที่ออกจากกลุ่มไปแล้ว)
    const all = [...new Set([...members.map(upName), ...origNames])].filter(Boolean);
    const chosen = all.filter((m) => people.has(m));
    const base = [...new Set([meN, payer, ...origNames])].filter((m) => all.includes(m));
    const strip = [...base, ...chosen.filter((m) => !base.includes(m))];
    const others = all.filter((m) => !strip.includes(m) && (!find.trim() || m.toLowerCase().includes(find.trim().toLowerCase())));
    const label = (m) => (m === meN ? "ฉัน" : m);
    const toggle = (m) => setPeople((c) => { const s = new Set(c); if (s.has(m)) s.delete(m); else s.add(m); return s; });
    const preview = mode === "equal" && chosen.length ? buildSplitEdit({ amount, payer, participants: chosen, mode }) : null;
    const customSum = chosen.reduce((a, p) => a + (Math.round(Number(custom[p]) * 100) || 0), 0);

    async function save(e) {
        e.preventDefault();
        setErr("");
        const fields = { icon: BILL_ICONS.find((i) => i.key === iconKey).fa };
        if (!grouped) fields.desc = desc.trim().slice(0, 100) || "ไม่ระบุ";
        let next = null;
        if (!locked) {
            const r = buildSplitEdit({ amount, payer, participants: chosen, mode, custom });
            if (!r.ok) { setErr(r.error); return; }
            const same = Object.keys(r.splits).length === origNames.length && Object.entries(origSplits).every(([k, v]) => Math.round(Number(r.splits[upName(k)]) * 100) === Math.round(Number(v) * 100));
            if (!same) next = r.splits;
        }
        setBusy(true);
        try {
            await updateBillFields(bill.id, fields);
            if (next) await updateBillSplits({ id: bill.id, date: bill.date, payer: bill.payer, amount, type: bill.type, groupId: bill.groupId }, (amt) => splitsForAmount({ splits: next, amount: amt, payer, mode }));
            onSaved(next ? "แก้คนหารแล้ว ยอดเคลียร์เงินเปลี่ยนตามทันที" : "");
            onClose();
        } catch (ex) { setErr(ex.message || "บันทึกไม่สำเร็จ"); setBusy(false); }
    }
    return (
        <Sheet as="form" title="แก้ไขบิล" onClose={onClose} onSubmit={save}>
            {grouped
                ? <p class="lbl">บิลผ่อนชำระ ชื่อรายการมีลำดับงวดกำกับอยู่ จึงแก้ชื่อไม่ได้</p>
                : <div class="field"><label for="eb-desc">ชื่อรายการ</label><input id="eb-desc" type="text" maxLength={100} value={desc} onInput={(e) => setDesc(e.currentTarget.value)} /></div>}
            <CategoryPicker value={iconKey} onPick={setIconKey} labelId="eb-cat" />
            {locked ? (
                <p class="lbl">บิลนี้อยู่ในเดือนที่ปิดยอดแล้ว คนหารแก้ไม่ได้ (ยอดที่เตือนไปแล้วจะได้ไม่เปลี่ยน)</p>
            ) : (
                <>
                    <div class="field">
                        <div class="hd-row">
                            <span class="fl" id="eb-people-l">หารกับใคร <span class="mute">({chosen.length} คน)</span></span>
                            {(others.length > 0 || more) && <button type="button" class="link" aria-expanded={more} aria-controls="eb-pick" onClick={() => { setMore(!more); setFind(""); }}>{more ? "ปิดค้นหา" : "ค้นหาคนอื่น"}</button>}
                        </div>
                        <div class="pstrip" role="group" aria-labelledby="eb-people-l">
                            {strip.map((m) => (
                                <button type="button" key={m} class={`pchip ${people.has(m) ? "on" : ""}`} aria-pressed={people.has(m)} onClick={() => toggle(m)}>
                                    <span class="pav-s">{people.has(m) ? <Icon name="check" size={14} /> : [...m][0]}</span>{label(m)}
                                </button>
                            ))}
                        </div>
                        {more && (
                            <div id="eb-pick" class="picker">
                                <input type="search" aria-label="ค้นหาชื่อ" placeholder="พิมพ์ชื่อเพื่อค้นหา" value={find} onInput={(e) => setFind(e.currentTarget.value)} />
                                <div class="plist">
                                    {others.map((m) => <button type="button" key={m} onClick={() => toggle(m)}><span class="pav-s">{[...m][0]}</span>{m}<Icon name="plus" size={14} class="mute" /></button>)}
                                    {others.length === 0 && <p class="mute">{find.trim() ? "ไม่พบชื่อนี้" : "เลือกครบทุกคนแล้ว"}</p>}
                                </div>
                            </div>
                        )}
                        {!people.has(payer) && chosen.length > 0 && <small class="payer-note">{payer === meN ? "คุณ" : payer} (คนจ่าย) ไม่ได้อยู่ในคนหาร: เป็นการจ่ายแทนเพื่อน</small>}
                    </div>
                    <div class="field">
                        <div class="seg" role="group" aria-label="วิธีแบ่ง">
                            {SPLIT_MODES.map((o) => <button type="button" key={o.key} class={mode === o.key ? "on" : ""} aria-pressed={mode === o.key} onClick={() => setMode(o.key)}>{o.label}</button>)}
                        </div>
                        {mode === "custom" ? (
                            <div class="split-custom">
                                {chosen.map((m) => (
                                    <div class="cust" key={m}>
                                        <label for={`ec-${m}`}>{label(m)}</label>
                                        <input id={`ec-${m}`} class="num" type="number" inputmode="decimal" step="0.01" min="0" placeholder="0.00" value={custom[m] ?? ""} onInput={(e) => setCustom({ ...custom, [m]: e.currentTarget.value })} />
                                    </div>
                                ))}
                                <p class={`lbl num ${customSum !== Math.round(amount * 100) ? "pay" : ""}`}>รวม {baht(customSum / 100, { decimals: 2 })} จากยอด{grouped ? "งวดนี้" : "บิล"} {baht(amount, { decimals: 2 })}</p>
                            </div>
                        ) : (
                            preview && preview.ok && <p class="lbl num">{grouped ? "งวดนี้ " : ""}คนละ {baht(Math.min(...Object.values(preview.splits)), { decimals: 2 })}</p>
                        )}
                    </div>
                    {grouped && <p class="lbl">บิลผ่อน: เปลี่ยนคนหารให้ทุกงวดที่ยังไม่ปิดเดือน งวดของเดือนที่ปิดแล้วคงเดิม</p>}
                    {bill.type === "subscription" && <p class="lbl">บิลรายเดือน: เปลี่ยนเฉพาะบิลเดือนนี้ เดือนถัดไปยังหารแบบเดิม</p>}
                </>
            )}
            <p class="lbl">ยอดเงิน คนจ่าย และวันที่แก้ไม่ได้ ถ้าผิดให้ลบบิลแล้วเพิ่มใหม่</p>
            {err && <p class="msg" role="alert">{err}</p>}
            <button type="submit" class="btn block" disabled={busy}>{busy ? "กำลังบันทึก" : "บันทึก"}</button>
        </Sheet>
    );
}

/** แก้รายการส่วนตัว (กระเป๋า): เปลี่ยนชื่อและหมวดได้ ยอดและวันที่ไม่แก้ ถ้าผิดให้ลบแล้วเพิ่มใหม่ */
export function EditWalletSheet({ item, onClose, onSaved, onSplit = null, cards = [] }) {
    const isIncome = item.type === "income";
    const [desc, setDesc] = useState(item.desc || "");
    // จ่ายจาก: ป้ายเดิม (รายการจาก SMS/อีเมลบัตรที่ยังจับคู่บัตรไม่ได้ ไม่ได้เลือกไว้ แต่แสดงบรรทัดยอดเหมือนเดิม)
    const payStart = (() => { const k = payKeyFor(item, cards); return k.startsWith("s:") ? "" : k; })();
    const [pay, setPay] = useState(payStart);
    // รายการที่ยังไม่มีหมวด: เดาจากชื่อให้เลย (เปลี่ยนเองได้)
    const [iconKey, setIconKey] = useState(() => (hasCategory(item.icon) ? keyOfFa(item.icon) : guessBillIcon(item.desc)));
    const [busy, setBusy] = useState(false);
    const [err, setErr] = useState("");
    async function save(e) {
        e.preventDefault();
        setErr("");
        setBusy(true);
        try {
            await updateWalletEntry(item.id, { desc: desc.trim() || (isIncome ? "รายรับ" : "รายจ่าย"), ...(isIncome ? {} : { icon: faOf(iconKey) }), ...(!isIncome && pay !== payStart ? payFields(pay) : {}), confirm: true });
            if (!isIncome && pay && pay !== payStart) rememberPay(pay);
            onSaved();
            onClose();
        } catch (ex) { setErr(ex.message || "บันทึกไม่สำเร็จ"); setBusy(false); }
    }
    return (
        <Sheet as="form" title={isIncome ? "แก้ไขรายรับ" : "แก้ไขรายจ่ายส่วนตัว"} onClose={onClose} onSubmit={save}>
            {item.unconfirmed && (
                <p class="unconfirmed-note" role="status"><Icon name="alert" size={16} /><span>บันทึกอัตโนมัติจากสลิปหรือข้อความแจ้งเตือน <b>ยังไม่ได้ยืนยัน</b> ตรวจยอดและชื่อ แล้วกดยืนยัน</span></p>
            )}
            <p class="lbl">ยอด <b class="num">{Number(item.amount || 0).toLocaleString("th-TH", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} บาท</b> &middot; วันที่ {String(item.date || "").slice(8, 10)}/{String(item.date || "").slice(5, 7)}{item.card ? ` · บัตร ${item.card}` : ""}</p>
            <div class="field"><label for="ew-desc">ชื่อรายการ</label><input id="ew-desc" type="text" maxLength={100} value={desc} onInput={(e) => setDesc(e.currentTarget.value)} /></div>
            {!isIncome && <CategoryPicker value={iconKey} onPick={setIconKey} labelId="ew-cat-l" />}
            {!isIncome && <PayFromPicker value={pay} onChange={setPay} cards={cards} labelId="ew-pay-l" />}
            <p class="lbl">ยอดเงินและวันที่แก้ไม่ได้ ถ้าผิดให้ลบแล้วเพิ่มใหม่</p>
            {err && <p class="msg" role="alert">{err}</p>}
            <button type="submit" class="btn block" disabled={busy}>{busy ? "กำลังบันทึก" : item.unconfirmed ? "ยืนยันและบันทึก" : "บันทึก"}</button>
            {onSplit && !isIncome && (
                <button type="button" class="btn ghost block" disabled={busy} onClick={() => onSplit(item)}><Icon name="people" size={16} />เปลี่ยนเป็นบิลหารกับเพื่อน</button>
            )}
        </Sheet>
    );
}

/**
 * แก้รายการรายเดือนที่ตั้งไว้ มีผลกับรายการที่ระบบสร้างตั้งแต่เดือนถัดไป
 * ส่วนตัว: ชื่อ ยอด หมวด วันที่ (รายการเดือนนี้ที่ระบบสร้างไว้ย้ายวันตามด้วย) · บิลกลุ่ม (kind "group"): ชื่อ หมวด วันที่ ยอดแก้ไม่ได้
 */
export function EditTemplateSheet({ template, onClose, onSaved }) {
    const group = template.kind === "group";
    const [day, setDay] = useState(Number(template.billingDay) || 1);
    const [every, setEvery] = useState([1, 3, 6, 12].includes(Number(template.every)) ? Number(template.every) : 1);
    // แม่แบบเก่าที่ยังไม่เคยตั้งรอบ: เดือนแรกเริ่มที่เดือนนี้ (ไม่ใช่ ม.ค.)
    const [startMonth, setStartMonth] = useState(Number(template.startMonth) || Number(new Date().toISOString().slice(5, 7)) || 1);
    const [desc, setDesc] = useState(template.desc || "");
    const [amount, setAmount] = useState(String(template.amount ?? ""));
    const [iconKey, setIconKey] = useState(() => (hasCategory(template.icon) ? keyOfFa(template.icon) : guessBillIcon(template.desc)));
    const [busy, setBusy] = useState(false);
    const [err, setErr] = useState("");
    async function save(e) {
        e.preventDefault();
        setErr("");
        const n = Number(amount);
        if (!group && (!Number.isFinite(n) || n <= 0)) return setErr("ใส่จำนวนเงินเป็นตัวเลขมากกว่า 0");
        setBusy(true);
        try {
            const rec = { every, startMonth };
            if (group) await updateTemplate(template.id, { desc: desc.trim() || "บิลรายเดือน", icon: faOf(iconKey), billingDay: day, ...rec });
            else await updateWalletTemplate(template.id, { desc: desc.trim() || "รายจ่าย", amount: n, icon: faOf(iconKey), billingDay: day, ...rec });
            onSaved();
            onClose();
        } catch (ex) { setErr(ex.message || "บันทึกไม่สำเร็จ"); setBusy(false); }
    }
    return (
        <Sheet as="form" title={group ? "แก้บิลกลุ่มที่ทำซ้ำ" : "แก้รายจ่ายที่ทำซ้ำ"} onClose={onClose} onSubmit={save}>
            <div class="field"><label for="et-desc">ชื่อรายการ</label><input id="et-desc" type="text" maxLength={100} value={desc} onInput={(e) => setDesc(e.currentTarget.value)} /></div>
            {group
                ? <p class="lbl">ยอด {Number(template.amount || 0).toLocaleString("en-US", { maximumFractionDigits: 2 })} บาท แก้ไม่ได้ เพราะแบ่งส่วนคนหารไว้แล้ว (ถ้ายอดเปลี่ยน ให้หยุดบิลนี้แล้วสร้างใหม่)</p>
                : <div class="field amount"><label for="et-amount">ยอดต่อครั้ง (บาท)</label><input id="et-amount" class="num" type="number" inputmode="decimal" step="0.01" min="0" value={amount} onInput={(e) => setAmount(e.currentTarget.value)} /></div>}
            <div class="field">
                <span class="fl" id="fq-l">จ่ายทุกๆ</span>
                <div class="fqrow">
                    <YearRing every={every} startMonth={startMonth} day={day} amount={Number(template.amount) || 0} size={112} />
                    <FreqPicker every={every} onChange={setEvery} idLabel="fq-l" />
                </div>
            </div>
            {every > 1 && (
                <div class="field"><label for="et-sm">เดือนแรกที่จ่าย</label>
                    <select id="et-sm" value={startMonth} onChange={(e) => setStartMonth(Number(e.currentTarget.value))}>{TH_MONTH_FULL.map((m, i) => <option key={i} value={i + 1}>{m}</option>)}</select>
                </div>
            )}
            <div class="field"><label for="et-day">วันที่จ่าย</label>
                <select id="et-day" class="num" value={day} onChange={(e) => setDay(Number(e.currentTarget.value))}>{Array.from({ length: 31 }, (_, i) => i + 1).map((d) => <option key={d} value={d}>{d}{d >= 29 ? " (เดือนที่ไม่มีวันนี้ = วันสุดท้าย)" : ""}</option>)}</select>
            </div>
            <CategoryPicker value={iconKey} onPick={setIconKey} labelId="et-cat-l" />
            <p class="lbl">{group ? "มีผลกับบิลที่ระบบสร้างให้ตั้งแต่เดือนถัดไป บิลที่สร้างไปแล้วไม่เปลี่ยน" : "มีผลกับรายการที่ระบบสร้างให้ตั้งแต่เดือนถัดไป ถ้าเปลี่ยนวันที่ รายการของเดือนนี้ที่ระบบสร้างไว้จะย้ายไปวันใหม่ด้วย"}</p>
            {err && <p class="msg" role="alert">{err}</p>}
            <button type="submit" class="btn block" disabled={busy}>{busy ? "กำลังบันทึก" : "บันทึก"}</button>
        </Sheet>
    );
}

/**
 * เปิดจากแจ้งเตือนบน iPhone (แตะเฉยๆ): รายการที่บันทึกอัตโนมัติ "บันทึกแบบไหน" จบในหน้าเดียว
 * - แก้ชื่อรายการและหมวดได้ (เดาหมวดให้ก่อน)
 * - ส่วนตัว: บันทึกชื่อ/หมวด และยืนยันรายการ
 * - หารกับเพื่อน: เลือกเพื่อน (รวมฉันไว้ก่อน) หารเท่ากัน เห็นยอดคนละเท่าไร บันทึกบิลแล้วลบรายการส่วนตัวเดิม (บันทึกบิลสำเร็จก่อนเสมอ กันหายทั้งคู่)
 *   กรณียาก (หารไม่เท่ากัน, ผ่อน) กด "ตั้งค่าเพิ่มเติม" เปิดฟอร์มบิลเต็มพร้อมข้อมูลที่กรอกไว้
 */
export function ChooseSheet({ item, members = [], me = "", suggested = [], today = "", saveBill, removeWallet, onClose, onConfirmed = () => {}, onDone = () => {}, onMoreSplit = () => {} }) {
    const [desc, setDesc] = useState(item.desc || "");
    const [iconKey, setIconKey] = useState(() => (hasCategory(item.icon) ? keyOfFa(item.icon) : guessBillIcon(item.desc)));
    const [iconTouched, setIconTouched] = useState(hasCategory(item.icon));
    const [step, setStep] = useState("ask"); // ask | split | done
    const [busy, setBusy] = useState(false);
    const [err, setErr] = useState("");
    const [people, setPeople] = useState(() => new Set(me ? [me] : [])); // หารกับเพื่อน: รวมฉันไว้ก่อน
    const amount = Number(item.amount || 0);
    const amountText = amount.toLocaleString("th-TH", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const when = `${String(item.date || "").slice(8, 10)}/${String(item.date || "").slice(5, 7)}`;
    const fa = faOf(iconKey);
    const name = desc.trim() || "รายจ่าย";

    // แถบรายชื่อ: ฉัน, คนที่หารด้วยบ่อย, แล้วคนที่เหลือ (กลุ่มไม่เกิน 20 คน เลื่อนข้างดูได้หมด)
    const strip = [...new Set([me, ...suggested, ...members])].filter((m) => m && members.includes(m));
    const chosen = strip.filter((m) => people.has(m));
    const preview = chosen.length > 0 ? equalSplit(amount, chosen) : null;
    // หารไม่ลงตัว เศษสตางค์ไปที่คนแรกๆ: แสดงยอดน้อยสุดพร้อมคำว่าประมาณ
    const shares = preview ? Object.values(preview) : [];
    const each = shares.length ? Math.min(...shares) : 0;
    const exact = shares.every((v) => v === each);
    const toggle = (m) => setPeople((cur) => { const s = new Set(cur); if (s.has(m)) s.delete(m); else s.add(m); return s; });
    const onDesc = (v) => { setDesc(v); if (!iconTouched) setIconKey(guessBillIcon(v)); };

    async function personal() {
        setErr("");
        setBusy(true);
        try {
            await updateWalletEntry(item.id, { desc: name, icon: fa, confirm: true });
            onConfirmed();
            setStep("done");
        } catch (e) { setErr(e.message || "บันทึกไม่สำเร็จ"); }
        setBusy(false);
    }

    async function split() {
        setErr("");
        const date = item.date && (!today || item.date <= today) ? item.date : today;
        const r = buildBill({ amount, desc: name, payer: me, date, today, participants: chosen, mode: "equal", custom: {}, type: "normal", installments: "3", recurring: false, icon: fa });
        if (!r.ok) { setErr(r.error); return; }
        setBusy(true);
        try {
            await saveBill(r);
            let note = "";
            try { await removeWallet(item.id); } catch (e) { note = " (ลบรายการส่วนตัวเดิมไม่สำเร็จ ลบเองได้ที่หน้ากระเป๋า)"; }
            onDone(`บันทึกบิลหารแล้ว ${r.summary}${note}`, [...new Set([...r.docs.map((d) => d.date.slice(0, 7)), String(item.date).slice(0, 7)])]);
            onClose();
        } catch (e) { setErr(e.message || "บันทึกไม่สำเร็จ ลองใหม่อีกครั้ง"); setBusy(false); }
    }

    if (step === "done") {
        return (
            <Sheet title="บันทึกเป็นรายจ่ายส่วนตัวแล้ว" onClose={onClose}>
                <div class="choose-item">
                    <span class="ico"><Icon name={(BILL_ICONS.find((i) => i.key === iconKey) || BILL_ICONS[BILL_ICONS.length - 1]).icon} /></span>
                    <div class="grow"><div class="t">{name}</div><div class="s">วันที่ {when}{item.card ? ` · บัตร ${item.card}` : ""}</div></div>
                    <b class="num pay">{amountText} บาท</b>
                </div>
                <button type="button" class="btn block" onClick={onClose}>เสร็จ</button>
            </Sheet>
        );
    }

    return (
        <Sheet title="บันทึกแบบไหน" onClose={onClose}>
            <p class="lbl">ยอด <b class="num">{amountText} บาท</b> &middot; วันที่ {when}{item.card ? ` · บัตร ${item.card}` : ""}</p>
            <div class="field"><label for="ch-desc">ชื่อรายการ</label><input id="ch-desc" type="text" maxLength={100} value={desc} onInput={(e) => onDesc(e.currentTarget.value)} /></div>
            <CategoryPicker value={iconKey} onPick={(k) => { setIconKey(k); setIconTouched(true); }} labelId="ch-cat-l" hint={!iconTouched && desc.trim() ? "เลือกให้อัตโนมัติ" : ""} />

            {step === "ask" && (
                <div class="choose-btns">
                    <button type="button" class="btn" disabled={busy} onClick={personal}><Icon name="wallet" size={18} />{busy ? "กำลังบันทึก" : "ส่วนตัว"}</button>
                    <button type="button" class="btn ghost" disabled={busy} onClick={() => setStep("split")}><Icon name="people" size={18} />หารกับเพื่อน</button>
                </div>
            )}

            {step === "split" && (
                <div class="choose-split">
                    <div class="field">
                        <div class="hd-row"><span class="fl" id="ch-people-l">หารกับใคร <span class="mute">({chosen.length} คน)</span></span></div>
                        <div class="pstrip" role="group" aria-labelledby="ch-people-l">
                            {strip.map((m) => (
                                <button type="button" key={m} class={`pchip ${people.has(m) ? "on" : ""}`} aria-pressed={people.has(m)} onClick={() => toggle(m)}>
                                    <span class="pav-s">{people.has(m) ? <Icon name="check" size={14} /> : [...m][0]}</span>{m === me ? "ฉัน" : m}
                                </button>
                            ))}
                        </div>
                    </div>
                    <p class={`choose-each ${chosen.length > 1 ? "" : "mute"}`} role="status">
                        {chosen.length > 1 || (chosen.length === 1 && chosen[0] !== me)
                            ? <>คนละ{exact ? "" : "ประมาณ"} <b class="num">{Number(each || 0).toLocaleString("th-TH", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} บาท</b> ({chosen.length} คน){people.has(me) ? "" : " ฉันจ่ายแทน"}</>
                            : "แตะชื่อเพื่อนที่หารด้วย (ฉันถูกเลือกไว้แล้ว)"}
                    </p>
                    <div class="choose-btns">
                        <button type="button" class="btn ghost" disabled={busy} onClick={() => { setErr(""); setStep("ask"); }}>ย้อนกลับ</button>
                        <button type="button" class="btn" disabled={busy} onClick={split}><Icon name="people" size={18} />{busy ? "กำลังบันทึก" : "บันทึกบิลหาร"}</button>
                    </div>
                    <button type="button" class="link choose-more" disabled={busy} onClick={() => onMoreSplit({ ...item, desc: name, icon: fa })}>ตั้งค่าเพิ่มเติม (หารไม่เท่ากัน, ผ่อน, คนอื่นจ่าย)</button>
                </div>
            )}
            {err && <p class="msg" role="alert">{err}</p>}
        </Sheet>
    );
}
