// กระเป๋า: รายรับ รายจ่ายส่วนตัว ส่วนของฉันในกลุ่ม สุทธิ (เห็นเฉพาะเจ้าของ)
import { Icon, iconFor } from "../icons.jsx";
import { SectionTitle, DeleteButton, Lazy, Collapsible } from "../ui.jsx";
import { baht } from "../model.js";
import { useState, useEffect } from "preact/hooks";
import { deleteWalletEntry, loadWalletTemplates, stopWalletTemplate, categorizeWalletEntries } from "../data.js";
import { guessBillIcon } from "../model.js";
import { faOf, hasCategory } from "../cats.jsx";

function Item({ it, onDeleted, onError, onEdit }) {
    const name = it.desc || (it.type === "income" ? "รายรับ" : "รายจ่าย");
    return (
        <li class="row">
            <span class="ico"><Icon name={it.type === "income" ? "down" : iconFor(it.icon)} /></span>
            <div class="grow"><div class="t">{name}</div><div class="s">{it.type === "income" ? "รายรับ" : "ส่วนตัว"} &middot; {it.date.slice(8, 10)}/{it.date.slice(5, 7)}</div></div>
            <span class={`num ${it.type === "income" ? "rcv" : ""}`}>{baht(it.amount, { decimals: 2 })}</span>
            <button type="button" class="icon-btn" aria-label={`แก้ไข ${name}`} onClick={() => onEdit(it)}><Icon name="pencil" size={17} /></button>
            <DeleteButton label={name} onConfirm={async () => { try { await deleteWalletEntry(it.id); onDeleted(); } catch (e) { onError(e.message); } }} />
        </li>
    );
}

/** รายจ่ายส่วนตัวแบบรายเดือนที่ตั้งไว้ (สร้างให้อัตโนมัติทุกเดือน หยุดได้) */
/** รายจ่ายที่ยังไม่มีหมวด: เดาหมวดจากชื่อรายการแล้วจัดให้ทีเดียว (ถามยืนยันก่อน) */
function AutoCategorize({ items, onDone, onError, onInfo }) {
    const [state, setState] = useState("idle");
    const todo = items
        .filter((it) => it.type === "expense" && !hasCategory(it.icon))
        .map((it) => ({ id: it.id, key: guessBillIcon(it.desc) }))
        .filter((x) => x.key !== "other")
        .map((x) => ({ id: x.id, icon: faOf(x.key) }));
    if (todo.length === 0) return null;
    if (state === "idle") return <div class="acts remind"><button type="button" class="btn sm ghost" onClick={() => setState("ask")}><Icon name="sliders" size={14} />จัดหมวดอัตโนมัติ ({todo.length} รายการ)</button></div>;
    return (
        <div class="acts remind">
            <span class="lbl">ระบบจะเดาหมวดจากชื่อรายการให้ {todo.length} รายการที่ยังไม่มีหมวด (แก้ทีหลังได้ทีละรายการ) ทำเลยไหม</span>
            <button type="button" class="btn sm" disabled={state === "busy"} onClick={async () => { setState("busy"); try { const n = await categorizeWalletEntries(todo); onInfo(`จัดหมวดให้ ${n} รายการแล้ว`); onDone(); } catch (e) { onError(e.message); } setState("idle"); }}>{state === "busy" ? "กำลังจัด" : "ทำเลย"}</button>
            <button type="button" class="btn sm ghost" disabled={state === "busy"} onClick={() => setState("idle")}>ยกเลิก</button>
        </div>
    );
}

function RecurringWallet({ version, onError }) {
    const [list, setList] = useState(null);
    const [editing, setEditing] = useState(null);
    const [tick, setTick] = useState(0);
    useEffect(() => { let on = true; loadWalletTemplates().then((l) => on && setList(l)).catch(() => on && setList([])); return () => { on = false; }; }, [version, tick]);
    if (!list || list.length === 0) return null;
    return (
        <Collapsible icon="swap" title="รายจ่ายรายเดือนที่ตั้งไว้" summary={`${list.length} รายการ · รวม ${baht(list.reduce((a, t) => a + (Number(t.amount) || 0), 0))} ต่อเดือน`}>
            <ul class="plain">
                {list.map((t) => (
                    <li class="row" key={t.id}>
                        <span class="ico"><Icon name={iconFor(t.icon)} /></span>
                        <div class="grow"><div class="t">{t.desc || "รายจ่าย"}</div><div class="s">สร้างให้ทุกวันที่ {t.billingDay} ของเดือน</div></div>
                        <span class="num">{baht(Number(t.amount) || 0, { decimals: 2 })}</span>
                        <button type="button" class="icon-btn" aria-label={`แก้ไข ${t.desc || "รายจ่ายรายเดือน"}`} onClick={() => setEditing(t)}><Icon name="pencil" size={17} /></button>
                        <DeleteButton verb="หยุด" busyText="กำลังหยุด" keepText="ไม่หยุด" label={t.desc || "รายจ่ายรายเดือน"}
                            onConfirm={async () => { try { await stopWalletTemplate(t.id); setList((cur) => cur.filter((x) => x.id !== t.id)); } catch (e) { onError(e.message); } }} />
                    </li>
                ))}
            </ul>
            <p class="lbl">หยุดแล้วเดือนถัดไปจะไม่สร้างซ้ำ รายการที่สร้างไปแล้วยังอยู่</p>
            {editing && <Lazy load={() => import("../editbill.jsx")} name="EditTemplateSheet" template={editing} onClose={() => setEditing(null)} onSaved={() => setTick((n) => n + 1)} />}
        </Collapsible>
    );
}

function Line({ icon, title, note, value, tone = "" }) {
    return (
        <li class="row">
            <span class="ico"><Icon name={icon} /></span>
            <div class="grow"><div class="t">{title}</div>{note && <div class="s">{note}</div>}</div>
            <span class={`num ${tone}`}>{baht(value / 100, { decimals: 2 })}</span>
        </li>
    );
}

const pct = (a, b) => (b > 0 ? Math.round((a / b) * 100) : 0);

export function WalletPage({ model, onChanged, onError, onInfo = () => {}, version = 0 }) {
    const m = model;
    const [editing, setEditing] = useState(null);
    const hasIncome = m.incomeSat > 0;
    const over = m.netSat < 0;
    return (
        <div class="home-grid">
            <div class="col">
                <section class="card hero" aria-label="สรุปกระเป๋า">
                    <div class="hero-l">
                        <p class="lbl">{hasIncome ? (over ? "ใช้เกินรายรับ" : "เหลือเดือนนี้") : "ใช้ไปเดือนนี้"}</p>
                        <p class={`big num ${over || !hasIncome ? "pay" : "rcv"}`}>{baht(Math.round(hasIncome ? Math.abs(m.netSat) / 100 : m.spentSat / 100))}</p>
                        <div class="chips">
                            <span class="chip"><Icon name="down" size={14} class="rcv" />รายรับ <b class="num">{baht(m.incomeSat / 100)}</b></span>
                            <span class="chip"><Icon name="up" size={14} class="pay" />ใช้ไป <b class="num">{baht(m.spentSat / 100)}</b></span>
                        </div>
                    </div>
                </section>
                <section class="card">
                    <SectionTitle icon="wallet" title="ใช้ไปมาจากอะไร" note="เห็นเฉพาะคุณ เพื่อนไม่เห็น" />
                    {m.spentSat > 0 && (
                        <div class="stack" role="img" aria-label={`ส่วนตัว ${pct(m.personalSat, m.spentSat)}% ส่วนในกลุ่ม ${pct(m.groupShareSat, m.spentSat)}%`}>
                            <i class="a" style={{ width: `${(m.personalSat / m.spentSat) * 100}%` }} />
                            <i class="b" style={{ width: `${(m.groupShareSat / m.spentSat) * 100}%` }} />
                        </div>
                    )}
                    <ul class="plain legend">
                        <li><i class="dot a" /><span class="grow">ส่วนตัว</span><b class="num">{baht(m.personalSat / 100, { decimals: 2 })}</b></li>
                        <li><i class="dot b" /><span class="grow">ส่วนของฉันในกลุ่ม<small>เฉพาะส่วนที่ฉันรับผิดชอบ ไม่ใช่ยอดเต็มบิล</small></span><b class="num">{baht(m.groupShareSat / 100, { decimals: 2 })}</b></li>
                    </ul>
                    {(m.receivedBackSat > 0 || m.paidBackSat > 0) && (
                        <ul class="plain side-notes">
                            {m.receivedBackSat > 0 && <li><Icon name="swap" size={16} /><span class="grow">ได้คืนจากเพื่อนแล้ว<small>ไม่นับเป็นรายรับ</small></span><span class="num rcv">{baht(m.receivedBackSat / 100, { decimals: 2 })}</span></li>}
                            {m.paidBackSat > 0 && <li><Icon name="swap" size={16} /><span class="grow">โอนคืนเพื่อนแล้ว<small>ไม่นับเป็นรายจ่ายซ้ำ</small></span><span class="num">{baht(m.paidBackSat / 100, { decimals: 2 })}</span></li>}
                        </ul>
                    )}
                </section>
            </div>
            <div class="col">
                <section class="card">
                    <SectionTitle icon="bill" title="รายการของฉัน" note="รายรับและรายจ่ายส่วนตัว" />
                    <AutoCategorize items={m.items} onDone={onChanged} onError={onError} onInfo={onInfo} />
                    {m.items.length === 0 ? <p class="empty">ยังไม่มีรายการในเดือนนี้ กดปุ่ม &ldquo;บันทึก&rdquo; เพื่อเพิ่ม</p>
                        : <ul class="plain">{m.items.map((it) => <Item key={it.id} it={it} onDeleted={onChanged} onError={onError} onEdit={setEditing} />)}</ul>}
                </section>
                <RecurringWallet version={version} onError={onError} />
            </div>
            {editing && <Lazy load={() => import("../editbill.jsx")} name="EditWalletSheet" item={editing} onClose={() => setEditing(null)} onSaved={() => onChanged()} />}
        </div>
    );
}
