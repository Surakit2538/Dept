// หารตามรายการสินค้า: ถ่ายรูปใบเสร็จ (Gemini อ่าน เฉพาะคนที่ผู้ดูแลเปิดให้) หรือพิมพ์เอง -> แตะว่าใครกินอะไร
// -> ส่วนต่าง (VAT ปัดเศษ ส่วนลด) หารเท่ากัน · ตรรกะเงินอยู่ lib/receipt-split.mjs ที่เดียว
import { useState, useRef } from "preact/hooks";
import { Sheet } from "./ui.jsx";
import { Icon } from "./icons.jsx";
import { baht } from "./model.js";
import { computeItemSplit, convertItems, unitsOf } from "../../lib/receipt-split.mjs";

// สีแถบต่อคน (ชุดสีของแอป) วนเมื่อเกิน 5 คน
export const PERSON_COLORS = ["var(--accent)", "var(--accent2-light)", "var(--sun)", "var(--receive)", "var(--pay)"];
const short = (n) => baht(n, { decimals: Number.isInteger(n) ? 0 : 2 });
const label = (m, me) => (m === me ? "ฉัน" : m);

/** ชิปคนในรายการ: แตะ = เพิ่ม 1 ชิ้น (เต็มแล้วแตะคนที่มีอยู่ = เอาออก) กดค้าง/คลิกขวา = ลด 1 */
function PersonChip({ name, me, units, multi, onTap, onLess }) {
    const timer = useRef(0);
    const held = useRef(false);
    const on = units > 0;
    const start = () => { held.current = false; timer.current = setTimeout(() => { held.current = true; onLess(); }, 500); };
    const stop = () => clearTimeout(timer.current);
    return (
        <span class="is-chip">
            <button type="button" class={`is-av${on ? " on" : ""}`} aria-pressed={on}
                aria-label={`${name}${multi && on ? ` x${units}` : ""}`}
                onPointerDown={multi ? start : undefined} onPointerUp={multi ? stop : undefined} onPointerLeave={multi ? stop : undefined}
                onContextMenu={multi ? (e) => { e.preventDefault(); stop(); if (!held.current) onLess(); held.current = true; } : undefined}
                onClick={() => { if (held.current) { held.current = false; return; } onTap(); }}>
                {name === me ? "ฉัน" : [...name][0]}
            </button>
            {multi && on && <span class="is-badge num" aria-hidden="true">{units}</span>}
        </span>
    );
}

function ItemRow({ it, idx, people, me, onChange, onRemove }) {
    const [edit, setEdit] = useState(!it.name || !(it.amount > 0));
    const multi = unitsOf(it) > 1;
    const cap = unitsOf(it);
    const used = Object.values(it.units || {}).reduce((a, b) => a + b, 0);
    const setUnits = (u) => onChange({ ...it, units: u });
    function tap(m) {
        const cur = (it.units || {})[m] || 0;
        const u = { ...(it.units || {}) };
        if (!multi) { if (cur) delete u[m]; else u[m] = 1; }
        else if (used < cap) u[m] = cur + 1;
        else if (cur) delete u[m];
        else return;
        setUnits(u);
    }
    function less(m) {
        const cur = (it.units || {})[m] || 0;
        if (!cur) return;
        const u = { ...(it.units || {}) };
        if (cur <= 1) delete u[m]; else u[m] = cur - 1;
        setUnits(u);
    }
    const qtyText = it.qty && it.qty !== 1 ? `x${it.qty}` : "";
    return (
        <li class="is-item">
            {edit ? (
                <div class="is-edit">
                    <label class="sr-only" for={`is-n-${idx}`}>ชื่อรายการ</label>
                    <input id={`is-n-${idx}`} type="text" maxLength={60} placeholder="ชื่อรายการ" value={it.name} onInput={(e) => onChange({ ...it, name: e.currentTarget.value })} />
                    <label class="sr-only" for={`is-q-${idx}`}>จำนวน</label>
                    <input id={`is-q-${idx}`} class="num q" type="number" inputmode="decimal" min="0" step="any" placeholder="1" value={it.qty === 1 ? "" : it.qty} onInput={(e) => onChange({ ...it, qty: Number(e.currentTarget.value) || 1, units: {} })} />
                    <label class="sr-only" for={`is-a-${idx}`}>ราคารวม</label>
                    <input id={`is-a-${idx}`} class="num a" type="number" inputmode="decimal" min="0" step="0.01" placeholder="ราคา" value={it.amount || ""} onInput={(e) => onChange({ ...it, amount: Number(e.currentTarget.value) || 0 })} />
                    <button type="button" class="icon-btn" aria-label="เสร็จ" onClick={() => setEdit(false)} disabled={!it.name.trim() || !(it.amount > 0)}><Icon name="check" size={16} /></button>
                    <button type="button" class="icon-btn" aria-label={`ลบ ${it.name || "รายการนี้"}`} onClick={onRemove}><Icon name="trash" size={16} /></button>
                </div>
            ) : (
                <button type="button" class="is-hd" onClick={() => setEdit(true)} aria-label={`แก้ ${it.name}`}>
                    <span class="n">{it.name}{qtyText && <span class="mute"> {qtyText}</span>}</span>
                    <span class="num">{short(it.amount)}</span>
                </button>
            )}
            {people.length > 0 ? (
                <div class="is-people">
                    {people.map((m) => <PersonChip key={m} name={m} me={me} units={(it.units || {})[m] || 0} multi={multi} onTap={() => tap(m)} onLess={() => less(m)} />)}
                </div>
            ) : null}
            {multi && (used > 0 && used < cap
                ? <span class="is-hint warn num">เลือกแล้ว {used} จาก {cap} ชิ้น ที่เหลือจะเฉลี่ยให้คนที่เลือก</span>
                : <span class="is-hint">แตะซ้ำเพื่อเพิ่ม กดค้างเพื่อลด</span>)}
        </li>
    );
}

/** แถบสัดส่วนต่อคน + ยอดของแต่ละคน */
export function PeopleBar({ splits, order, me, total }) {
    const names = order.filter((p) => splits[p] > 0);
    if (!names.length) return null;
    return (
        <div class="is-sum">
            <div class="is-bar" role="img" aria-label={names.map((p) => `${label(p, me)} ${short(splits[p])}`).join(", ")}>
                {names.map((p, i) => <i key={p} style={{ flexGrow: splits[p], background: PERSON_COLORS[i % PERSON_COLORS.length] }} />)}
            </div>
            <div class="is-legend">
                {names.map((p, i) => (
                    <div key={p}><span><i style={{ background: PERSON_COLORS[i % PERSON_COLORS.length] }} />{label(p, me)}</span><b class="num">{short(splits[p])}</b></div>
                ))}
            </div>
            {total > 0 && <small class="mute num">รวม {short(total)}</small>}
        </div>
    );
}

/**
 * ส่วน "ตามรายการ" ในฟอร์มบิล
 * value = { items:[{name,qty,amount,units}], store, cur, foreignTotal } · people = คนที่เลือกไว้ใน หารกับใคร
 * canScan = ผู้ดูแลเปิดให้ถ่ายรูป · readReceipt(file) -> { store, currency, total, items }
 */
export function ItemSplit({ value, onChange, people, me, payer, total, canScan, readReceipt, onReceipt }) {
    const fileRef = useRef(null);
    const [reading, setReading] = useState(false);
    const [err, setErr] = useState("");
    const [foreign, setForeign] = useState(null); // { cur, total, items, store } รอใส่ยอดบาท
    const [thb, setThb] = useState("");
    const items = value.items || [];
    const set = (patch) => onChange({ ...value, ...patch });

    async function pick(e) {
        const f = e.currentTarget.files && e.currentTarget.files[0];
        e.currentTarget.value = "";
        if (!f) return;
        setErr("");
        setReading(true);
        try {
            const r = await readReceipt(f);
            const its = r.items.map((it) => ({ ...it, units: {} }));
            if (r.currency && r.currency !== "THB") { setForeign({ cur: r.currency, total: r.total, items: its, store: r.store }); setThb(""); }
            else { set({ items: its, store: r.store || "", cur: "THB", foreignTotal: 0 }); onReceipt({ total: r.total, store: r.store }); }
        } catch (ex) { setErr(ex.message || "อ่านใบเสร็จไม่สำเร็จ"); }
        setReading(false);
    }
    function confirmForeign() {
        const t = Number(String(thb).replace(/,/g, ""));
        if (!(t > 0)) return setErr("ใส่ยอดบาทที่จ่ายจริง");
        setErr("");
        set({ items: convertItems(foreign.items, foreign.total, t), store: foreign.store || "", cur: foreign.cur, foreignTotal: foreign.total });
        onReceipt({ total: t, store: foreign.store });
        setForeign(null);
    }

    if (reading) {
        return (
            <div class="is-reading" role="status">
                <span class="is-doc" aria-hidden="true"><i /><i /><i class="on" /><i /></span>
                <div><b>กำลังอ่านรายการ</b><small class="mute">ประมาณ 5-10 วินาที</small></div>
            </div>
        );
    }
    if (foreign) {
        return (
            <div class="is-foreign">
                <b>ใบเสร็จเป็นเงิน {foreign.cur}</b>
                <label for="is-thb">บัตรตัดเงินไปกี่บาท</label>
                <div class="is-thb"><input id="is-thb" class="num" type="number" inputmode="decimal" min="0" step="0.01" placeholder="0.00" value={thb} onInput={(e) => setThb(e.currentTarget.value)} /><span>บาท</span></div>
                <small class="mute num">{foreign.cur} {foreign.total.toLocaleString("en-US")} · {foreign.items.length} รายการ</small>
                {err && <p class="msg" role="alert">{err}</p>}
                <div class="row-btns"><button type="button" class="btn ghost" onClick={() => setForeign(null)}>ยกเลิก</button><button type="button" class="btn" onClick={confirmForeign}>ต่อไป</button></div>
            </div>
        );
    }

    const calc = items.length ? computeItemSplit({ items, total, payer }) : null;
    const camera = canScan && (
        <>
            <input ref={fileRef} type="file" accept="image/*" capture="environment" class="sr-only" tabIndex={-1} aria-hidden="true" onChange={pick} />
            <button type="button" class={items.length ? "link" : "is-cam"} onClick={() => fileRef.current && fileRef.current.click()}>
                {!items.length && <Icon name="upload" size={28} />}{items.length ? "ถ่ายใหม่" : "ถ่ายรูปใบเสร็จ"}
            </button>
        </>
    );
    const addRow = () => set({ items: [...items, { name: "", qty: 1, amount: 0, units: {} }] });

    if (!items.length) {
        return (
            <div class="is-empty">
                {camera}
                <button type="button" class="link" onClick={addRow}>{canScan ? "หรือพิมพ์รายการเอง" : "+ เพิ่มรายการ"}</button>
                {err && <p class="msg" role="alert">{err}</p>}
            </div>
        );
    }
    return (
        <div class="is-wrap">
            <div class="hd-row"><span class="fl">ใครกินอะไร</span>{camera}</div>
            {people.length === 0 && <p class="lbl">เลือกคนใน หารกับใคร ก่อน แล้วแตะรูปใต้แต่ละรายการ</p>}
            <ul class="is-list">
                {items.map((it, i) => (
                    <ItemRow key={i} idx={i} it={it} people={people} me={me}
                        onChange={(n) => set({ items: items.map((x, j) => (j === i ? n : x)) })}
                        onRemove={() => set({ items: items.filter((_, j) => j !== i) })} />
                ))}
            </ul>
            <button type="button" class="link is-add" onClick={addRow}>+ เพิ่มรายการ</button>
            {calc && calc.ok
                ? <>{calc.extraSat !== 0 && <small class="mute num">{calc.extraSat > 0 ? "VAT ค่าบริการ ปัดเศษ" : "ส่วนลด"} {short(Math.abs(calc.extraSat) / 100)} หารเท่ากัน</small>}<PeopleBar splits={calc.splits} order={people.filter((p) => calc.splits[p] > 0).concat(calc.people.filter((p) => !people.includes(p)))} me={me} total={total} /></>
                : calc && <small class="mute">{calc.error}</small>}
            {err && <p class="msg" role="alert">{err}</p>}
        </div>
    );
}

/** เพื่อนแตะดูบิลที่หารตามรายการ: ส่วนของฉัน (วงแหวน %) + ทั้งบิล (แถบต่อคน) */
export function ReceiptBillSheet({ bill, me, onClose }) {
    const rc = bill.receipt || {};
    const items = rc.items || [];
    const total = (Number(bill.amountSat) || 0) / 100;
    const calc = computeItemSplit({ items, total, payer: bill.payer });
    const mine = calc.ok ? calc.splits[me] || 0 : 0;
    const pct = total > 0 ? Math.round((mine / total) * 100) : 0;
    const C = 2 * Math.PI * 28;
    const myParts = calc.ok ? (calc.parts[me] || []) : [];
    const people = calc.ok ? calc.people : [];
    const order = [bill.payer, ...people.filter((p) => p !== bill.payer)].filter((p) => people.includes(p));
    const unitsText = (it) => Object.entries(it.units || {}).map(([k, v]) => (unitsOf(it) > 1 ? `${label(k, me)} ${v}` : label(k, me))).join(" · ");
    return (
        <Sheet title={bill.desc || "บิล"} onClose={onClose}>
            <p class="lbl">{bill.payer === me ? "คุณจ่าย" : `${bill.payer} จ่าย`}{rc.cur ? ` · ใบเสร็จ ${rc.cur} ${Number(rc.foreignTotal).toLocaleString("en-US")}` : ""}</p>
            {!calc.ok ? <p class="msg">{calc.error}</p> : (
                <>
                    {mine > 0 && (
                        <div class="rb-me">
                            <div class="rb-top">
                                <div><small>ส่วนของคุณ</small><b class="num">{short(mine)}</b></div>
                                <svg width="72" height="72" viewBox="0 0 72 72" role="img" aria-label={`${pct} เปอร์เซ็นต์ของบิล`}>
                                    <circle cx="36" cy="36" r="28" fill="none" stroke="rgba(255,255,255,.2)" stroke-width="8" />
                                    <circle cx="36" cy="36" r="28" fill="none" stroke="var(--sun)" stroke-width="8" stroke-linecap="round" stroke-dasharray={`${(C * pct) / 100} ${C}`} transform="rotate(-90 36 36)" />
                                    <text x="36" y="41" text-anchor="middle" font-size="15" font-weight="700" fill="#fff">{pct}%</text>
                                </svg>
                            </div>
                            <ul>
                                {myParts.map((p) => <li key={p.i}><span>{items[p.i].name}{unitsOf(items[p.i]) > 1 ? ` x${p.units}` : ""}</span><span class="num">{short(p.sat / 100)}</span></li>)}
                                {calc.extraOf[me] ? <li class="dim"><span>{calc.extraSat > 0 ? "VAT ปัดเศษ" : "ส่วนลด"}</span><span class="num">{short(calc.extraOf[me] / 100)}</span></li> : null}
                            </ul>
                        </div>
                    )}
                    <span class="fl">ทั้งบิล</span>
                    <PeopleBar splits={calc.splits} order={order} me={me} total={0} />
                    <ul class="rb-all">
                        {items.map((it, i) => <li key={i}><div><span>{it.name}{it.qty !== 1 ? <span class="mute"> x{it.qty}</span> : null}</span><small class="mute">{unitsText(it)}</small></div><span class="num">{short(it.amount)}</span></li>)}
                        {calc.extraSat ? <li class="dim"><div><span>{calc.extraSat > 0 ? "VAT ค่าบริการ ปัดเศษ" : "ส่วนลด"}</span><small class="mute">หารเท่ากัน {people.length} คน</small></div><span class="num">{short(calc.extraSat / 100)}</span></li> : null}
                        <li class="tot"><span>รวม</span><span class="num">{short(total)}</span></li>
                    </ul>
                </>
            )}
        </Sheet>
    );
}
