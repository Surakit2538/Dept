// รายการ: รวมบิลหารกับเพื่อน + รายรับรายจ่ายส่วนตัว ไว้แท็บเดียว (เดิมแยกเป็นหน้าบิลกับหน้ากระเป๋า)
// มีค้นหา ตัวกรอง (ทั้งหมด/บิลกลุ่ม/ส่วนตัว/รายรับ) เฉพาะของฉัน เลือกหลายรายการ แก้ไข/ลบ ยืนยันรายการอัตโนมัติ จัดหมวดให้ และรายการที่ทำซ้ำทุกเดือน
import { useState, useEffect } from "preact/hooks";
import { Icon, iconFor, ItemIcon } from "../icons.jsx";
import { SectionTitle, DeleteButton, Lazy, Collapsible, DateTile } from "../ui.jsx";
import { baht, monthShort, guessBillIcon } from "../model.js";
import {
    deleteBill, deleteBills, updateBillIcons, loadTemplates, stopTemplate,
    deleteWalletEntry, deleteWalletEntries, loadWalletTemplates, stopWalletTemplate, categorizeWalletEntries, confirmWalletEntries
} from "../data.js";
import { SelectRow, BulkBar } from "../bulk.jsx";
import { faOf, hasCategory } from "../cats.jsx";

const FILTERS = [["all", "ทั้งหมด"], ["group", "บิลกลุ่ม"], ["personal", "ส่วนตัว"], ["income", "รายรับ"]];
const dayLabel = (d) => `${Number(d.slice(8, 10))} ${monthShort(d.slice(0, 7))}`;

/** แถวสองบรรทัด: ชื่อ + ยอด / รายละเอียดสั้นๆ + ปุ่มแก้ไข ลบ */
function RowBody({ lead, title, value, tone = "", sub, badge = null, actions = null }) {
    return (
        <>
            {lead}
            <div class="lr-b">
                <div class="lr-1"><span class="t">{title}</span>{badge}<span class={`num v ${tone}`}>{value}</span></div>
                <div class="lr-2"><span class="s">{sub}</span>{actions && <span class="lr-acts">{actions}</span>}</div>
            </div>
        </>
    );
}

function BillRow({ b, canEdit, onDeleted, onError, onEdit, selecting, picked, onToggle }) {
    const kind = b.type === "installment" ? "ผ่อน" : b.type === "subscription" ? "รายเดือน" : "";
    const name = b.desc || "ไม่ระบุ";
    const has = b.myShareSat > 0;
    const sub = (
        <>
            {b.payer} จ่าย &middot; {b.people.length} คน &middot; {has ? <>บิล <span class="num">{baht(b.amountSat / 100, { decimals: 2 })}</span></> : "ไม่มีส่วนของฉัน"}
        </>
    );
    const lead = <ItemIcon desc={b.desc} name={iconFor(b.icon)} />;
    const badge = kind ? <span class="tag">{kind}</span> : null;
    const value = baht((has ? b.myShareSat : b.amountSat) / 100, { decimals: 2 });
    const tone = has ? "pay" : "mute";
    if (selecting && canEdit) return <SelectRow cls="bill" picked={picked} label={name} onToggle={onToggle}><RowBody lead={lead} title={name} value={value} tone={tone} sub={sub} badge={badge} /></SelectRow>;
    if (selecting) return <li class="row bill dim" aria-disabled="true"><RowBody lead={lead} title={name} value={value} tone={tone} sub={sub} badge={badge} /></li>;
    return (
        <li class="row bill">
            <RowBody lead={lead} title={name} value={value} tone={tone} sub={sub} badge={badge} actions={canEdit ? (
                <>
                    <button type="button" class="icon-btn" aria-label={`แก้ไข ${name}`} onClick={() => onEdit(b)}><Icon name="pencil" size={16} /></button>
                    <DeleteButton label={name} onConfirm={async () => { try { await deleteBill(b.id); onDeleted(); } catch (e) { onError(e.message); } }} />
                </>
            ) : null} />
        </li>
    );
}

function WalletRow({ it, onDeleted, onError, onEdit, selecting, picked, onToggle }) {
    const income = it.type === "income";
    const name = it.desc || (income ? "รายรับ" : "รายจ่าย");
    const lead = <ItemIcon desc={income ? "" : it.desc} name={income ? "down" : iconFor(it.icon)} />;
    const sub = <>{income ? "รายรับ" : "ส่วนตัว"}{it.card ? ` · บัตร ${it.card}` : ""}</>;
    const badge = it.unconfirmed ? <span class="tag warn">ยังไม่ยืนยัน</span> : null;
    const value = (income ? "+" : "") + baht(it.amount, { decimals: 2 });
    if (selecting) return <SelectRow picked={picked} label={name} onToggle={onToggle}><RowBody lead={lead} title={name} value={value} tone={income ? "rcv" : ""} sub={sub} badge={badge} /></SelectRow>;
    return (
        <li class="row">
            <RowBody lead={lead} title={name} value={value} tone={income ? "rcv" : ""} sub={sub} badge={badge} actions={(
                <>
                    <button type="button" class="icon-btn" aria-label={`แก้ไข ${name}`} onClick={() => onEdit(it)}><Icon name="pencil" size={16} /></button>
                    <DeleteButton label={name} onConfirm={async () => { try { await deleteWalletEntry(it.id); onDeleted(); } catch (e) { onError(e.message); } }} />
                </>
            )} />
        </li>
    );
}

/** รายจ่ายที่ยังไม่มีหมวด: เดาหมวดจากชื่อรายการแล้วจัดให้ทีเดียว (ถามยืนยันก่อน) */
function AutoCategorize({ items, onDone, onError, onInfo }) {
    const [state, setState] = useState("idle");
    const todo = items
        .filter((it) => it.type === "expense" && !hasCategory(it.icon))
        .map((it) => ({ id: it.id, key: guessBillIcon(it.desc) }))
        .filter((x) => x.key !== "other")
        .map((x) => ({ id: x.id, icon: faOf(x.key) }));
    if (todo.length === 0) return null;
    if (state === "idle") return <button type="button" class="btn sm ghost" onClick={() => setState("ask")}><Icon name="sliders" size={14} />จัดหมวดให้ ({todo.length})</button>;
    return (
        <div class="acts remind">
            <span class="lbl">ระบบจะเดาหมวดจากชื่อรายการให้ {todo.length} รายการที่ยังไม่มีหมวด (แก้ทีหลังได้ทีละรายการ) ทำเลยไหม</span>
            <button type="button" class="btn sm" disabled={state === "busy"} onClick={async () => { setState("busy"); try { const n = await categorizeWalletEntries(todo); onInfo(`จัดหมวดให้ ${n} รายการแล้ว`); onDone(); } catch (e) { onError(e.message); } setState("idle"); }}>{state === "busy" ? "กำลังจัด" : "ทำเลย"}</button>
            <button type="button" class="btn sm ghost" disabled={state === "busy"} onClick={() => setState("idle")}>ยกเลิก</button>
        </div>
    );
}

/** รายการที่บันทึกอัตโนมัติ (สลิป, SMS, อีเมล) ยังไม่ยืนยัน: แจ้งไว้ และยืนยันทั้งหมดได้ทีเดียว (ถามก่อน) */
function UnconfirmedBar({ items, onDone, onError, onInfo }) {
    const [state, setState] = useState("idle");
    const ids = items.filter((it) => it.unconfirmed).map((it) => it.id);
    if (ids.length === 0) return null;
    return (
        <div class="note-bar" role="status">
            <Icon name="alert" size={16} />
            <span class="t">มี {ids.length} รายการที่บันทึกอัตโนมัติ <b>ยังไม่ยืนยัน</b> แตะรายการเพื่อตรวจหรือแก้ไข</span>
            {state === "idle" && <button type="button" class="btn sm ghost" onClick={() => setState("ask")}>ยืนยันทั้งหมด</button>}
            {state !== "idle" && <>
                <button type="button" class="btn sm" disabled={state === "busy"} onClick={async () => { setState("busy"); try { const n = await confirmWalletEntries(ids); onInfo(`ยืนยันแล้ว ${n} รายการ`); onDone(); } catch (e) { onError(e.message); } setState("idle"); }}>{state === "busy" ? "กำลังยืนยัน" : `ยืนยัน ${ids.length} รายการ`}</button>
                <button type="button" class="btn sm ghost" disabled={state === "busy"} onClick={() => setState("idle")}>ยกเลิก</button>
            </>}
        </div>
    );
}

/** รายการที่ตั้งให้ทำซ้ำทุกเดือน: บิลกลุ่ม (หยุดได้เฉพาะคนจ่ายหรือแอดมิน) + รายจ่ายส่วนตัว (แก้ไข/หยุดได้) */
function Recurring({ me, isAdmin, version, onError }) {
    const [bills, setBills] = useState(null);
    const [mine, setMine] = useState(null);
    const [editing, setEditing] = useState(null);
    const [tick, setTick] = useState(0);
    useEffect(() => {
        let on = true;
        loadTemplates().then((l) => on && setBills(l)).catch(() => on && setBills([]));
        loadWalletTemplates().then((l) => on && setMine(l)).catch(() => on && setMine([]));
        return () => { on = false; };
    }, [version, tick]);
    const b = bills || [], w = mine || [];
    if (b.length + w.length === 0) return null;
    const total = [...b, ...w].reduce((a, t) => a + (Number(t.amount) || 0), 0);
    return (
        <Collapsible icon="swap" title="รายการที่ตั้งให้ทำซ้ำทุกเดือน" summary={`บิลกลุ่ม ${b.length} · ส่วนตัว ${w.length} · รวม ${baht(total)} ต่อเดือน`}>
            <ul class="plain">
                {b.map((t) => (
                    <li class="row" key={"b" + t.id}>
                        <ItemIcon desc={t.desc} name={iconFor(t.icon)} />
                        <div class="lr-b">
                            <div class="lr-1"><span class="t">{t.desc || "ไม่ระบุ"}</span><span class="num v">{baht(Number(t.amount) || 0, { decimals: 2 })}</span></div>
                            <div class="lr-2"><span class="s">บิลกลุ่ม &middot; ทุกวันที่ {t.billingDay} &middot; {t.payer} จ่าย &middot; {Object.keys(t.splits || {}).length} คน</span>
                                {(isAdmin || String(t.payer || "").trim().toUpperCase() === me) && (
                                    <span class="lr-acts"><DeleteButton verb="หยุด" busyText="กำลังหยุด" keepText="ไม่หยุด" label={t.desc || "บิลรายเดือน"}
                                        onConfirm={async () => { try { await stopTemplate(t.id); setBills((cur) => cur.filter((x) => x.id !== t.id)); } catch (e) { onError(e.message); } }} /></span>
                                )}
                            </div>
                        </div>
                    </li>
                ))}
                {w.map((t) => (
                    <li class="row" key={"w" + t.id}>
                        <ItemIcon desc={t.desc} name={iconFor(t.icon)} />
                        <div class="lr-b">
                            <div class="lr-1"><span class="t">{t.desc || "รายจ่าย"}</span><span class="num v">{baht(Number(t.amount) || 0, { decimals: 2 })}</span></div>
                            <div class="lr-2"><span class="s">ส่วนตัว &middot; สร้างให้ทุกวันที่ {t.billingDay} ของเดือน</span>
                                <span class="lr-acts">
                                    <button type="button" class="icon-btn" aria-label={`แก้ไข ${t.desc || "รายจ่ายรายเดือน"}`} onClick={() => setEditing(t)}><Icon name="pencil" size={16} /></button>
                                    <DeleteButton verb="หยุด" busyText="กำลังหยุด" keepText="ไม่หยุด" label={t.desc || "รายจ่ายรายเดือน"}
                                        onConfirm={async () => { try { await stopWalletTemplate(t.id); setMine((cur) => cur.filter((x) => x.id !== t.id)); } catch (e) { onError(e.message); } }} />
                                </span>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            <p class="lbl">หยุดแล้วเดือนถัดไปจะไม่สร้างซ้ำ รายการที่สร้างไปแล้วยังอยู่</p>
            {editing && <Lazy load={() => import("../editbill.jsx")} name="EditTemplateSheet" template={editing} onClose={() => setEditing(null)} onSaved={() => setTick((n) => n + 1)} />}
        </Collapsible>
    );
}

/** รวมรายการของเดือน (บิลกลุ่ม + กระเป๋า) ตามตัวกรองและคำค้น เรียงวันใหม่ก่อน */
export function mergeItems({ bills, wallet, filter = "all", mineOnly = false, search = "" }) {
    const q = String(search || "").trim().toUpperCase();
    const out = [];
    if (filter === "all" || filter === "group") {
        for (const b of mineOnly ? bills.mine : bills.all) out.push({ kind: "bill", key: "b:" + b.id, id: b.id, date: b.date, ts: b.ts || 0, b });
    }
    if (filter !== "group") {
        for (const it of wallet.items) {
            if (filter === "personal" && it.type === "income") continue;
            if (filter === "income" && it.type !== "income") continue;
            if (q && !String(it.desc || "").toUpperCase().includes(q)) continue;
            out.push({ kind: "wallet", key: "w:" + it.id, id: it.id, date: it.date, ts: it.ts || 0, it });
        }
    }
    return out.sort((a, b) => b.date.localeCompare(a.date) || b.ts - a.ts);
}

function groupByDay(list) {
    const out = [];
    for (const x of list) {
        const last = out[out.length - 1];
        if (last && last[0] === x.date) last[1].push(x); else out.push([x.date, [x]]);
    }
    return out;
}

export function ListPage({ bills, wallet, month = "", today = "", search, onSearch, me, isAdmin, onChanged, onError, onInfo = () => {}, onSplit = null, version = 0, openEdit = null }) {
    const [filter, setFilter] = useState("all");
    const [mineOnly, setMineOnly] = useState(false);
    const [editingBill, setEditingBill] = useState(null);
    const [editingWallet, setEditingWallet] = useState(null);
    const [selecting, setSelecting] = useState(false);
    const [picked, setPicked] = useState([]);
    // เปิดหน้าแก้ไขจากลิงก์ในแจ้งเตือน (#edit=รหัส)
    useEffect(() => { if (openEdit) setEditingWallet(openEdit); }, [openEdit]);

    const canEdit = (b) => isAdmin || b.payer.trim().toUpperCase() === me;
    const items = mergeItems({ bills, wallet, filter, mineOnly, search });
    const selectable = items.filter((x) => x.kind === "wallet" || canEdit(x.b)).map((x) => x.key);
    const live = picked.filter((k) => selectable.includes(k));
    const toggle = (k) => setPicked((cur) => (cur.includes(k) ? cur.filter((x) => x !== k) : [...cur, k]));
    const stopSelecting = () => { setSelecting(false); setPicked([]); };
    const billIds = live.filter((k) => k.startsWith("b:")).map((k) => k.slice(2));
    const walletIds = live.filter((k) => k.startsWith("w:")).map((k) => k.slice(2));
    const noBillFilter = filter === "personal" || filter === "income";

    async function bulkDelete() {
        try {
            const parts = [];
            if (billIds.length) parts.push(`${await deleteBills(billIds)} บิล`);
            if (walletIds.length) {
                const r = await deleteWalletEntries(walletIds);
                parts.push(`${r.deleted} รายการ${r.failed ? ` (ลบไม่ได้ ${r.failed})` : ""}`);
            }
            onInfo(`ลบแล้ว ${parts.join(" และ ")}`);
            stopSelecting();
            onChanged();
        } catch (e) { onError(e.message); onChanged(); }
    }
    async function bulkCategory(fa) {
        const exp = wallet.items.filter((it) => walletIds.includes(it.id) && it.type === "expense").map((it) => ({ id: it.id, icon: fa }));
        if (billIds.length === 0 && exp.length === 0) { onError("รายรับไม่มีหมวด เลือกรายจ่ายหรือบิลอย่างน้อย 1 รายการ"); return; }
        try {
            let n = 0;
            if (billIds.length) n += await updateBillIcons(billIds, fa);
            if (exp.length) n += await categorizeWalletEntries(exp);
            onInfo(`เปลี่ยนหมวดแล้ว ${n} รายการ`);
            stopSelecting();
            onChanged();
        } catch (e) { onError(e.message); onChanged(); }
    }

    return (
        <div class="col narrow lp">
            <section class="card hero lp-hero" aria-label="สรุปบิลของเดือน">
                <div class="hero-top">
                    <DateTile month={month} today={today} />
                    <div><p class="lbl">บิลกลุ่มทั้งหมด</p><p class="big num">{baht(bills.totalSat / 100)}</p></div>
                </div>
                <div class="chips">
                    <span class="chip">ส่วนของฉันในบิลกลุ่ม <b class="num">{baht(bills.myShareSat / 100)}</b></span>
                    <span class="chip"><b class="num">{bills.all.length}</b> บิล</span>
                </div>
            </section>
            <section class="card">
                <SectionTitle icon="list" title="รายการของเดือนนี้" note={`${items.length} รายการ`} />
                <div class="field search">
                    <label for="list-search">ค้นหารายการ</label>
                    <input id="list-search" type="search" placeholder="ค้นหาชื่อรายการหรือคนจ่าย" value={search} onInput={(e) => onSearch(e.currentTarget.value)} />
                </div>
                <div class="lp-tools">
                    <button type="button" class={`btn sm ${mineOnly ? "" : "ghost"}`} aria-pressed={mineOnly} disabled={noBillFilter} title={noBillFilter ? "ใช้กับบิลกลุ่มเท่านั้น" : undefined} onClick={() => setMineOnly(!mineOnly)}><Icon name="user" size={14} />เฉพาะของฉัน</button>
                    <button type="button" class={`btn sm ${selecting ? "" : "ghost"}`} aria-pressed={selecting} disabled={selectable.length < 2 && !selecting} onClick={() => (selecting ? stopSelecting() : setSelecting(true))}>
                        <Icon name={selecting ? "check" : "sliders"} size={14} />{selecting ? "เสร็จสิ้น" : "เลือกหลายรายการ"}
                    </button>
                </div>
                <div class="fchips" role="group" aria-label="ตัวกรอง">
                    {FILTERS.map(([k, l]) => <button type="button" key={k} class={filter === k ? "on" : ""} aria-pressed={filter === k} onClick={() => setFilter(k)}>{l}</button>)}
                </div>
                {!selecting && (filter === "all" || filter === "personal") && <UnconfirmedBar items={wallet.items} onDone={onChanged} onError={onError} onInfo={onInfo} />}
                {!selecting && (filter === "all" || filter === "personal") && <AutoCategorize items={wallet.items} onDone={onChanged} onError={onError} onInfo={onInfo} />}
                {items.length === 0 ? <p class="empty">{search ? `ไม่พบรายการที่ตรงกับ "${search}"` : filter === "all" ? "ยังไม่มีรายการในเดือนนี้ กดปุ่ม “บันทึก” เพื่อเพิ่ม" : "ไม่มีรายการในหมวดนี้"}</p>
                    : groupByDay(items).map(([d, list]) => (
                        <div class="day" key={d}>
                            <h3 class="day-h">{dayLabel(d)}</h3>
                            <ul class="plain">
                                {list.map((x) => x.kind === "bill"
                                    ? <BillRow key={x.key} b={x.b} canEdit={canEdit(x.b)} onDeleted={onChanged} onError={onError} onEdit={setEditingBill} selecting={selecting} picked={live.includes(x.key)} onToggle={() => toggle(x.key)} />
                                    : <WalletRow key={x.key} it={x.it} onDeleted={onChanged} onError={onError} onEdit={setEditingWallet} selecting={selecting} picked={live.includes(x.key)} onToggle={() => toggle(x.key)} />)}
                            </ul>
                        </div>
                    ))}
                {selecting && <BulkBar count={live.length} total={selectable.length} onAll={() => setPicked(selectable)} onNone={() => setPicked([])} onCategory={bulkCategory} onDelete={bulkDelete} note="เปลี่ยนเฉพาะหมวด ไม่แก้ยอดและคนหาร รายรับไม่มีหมวด บิลที่เลือกได้คือบิลที่คุณจ่ายเอง (แอดมินเลือกได้ทุกบิล)" />}
            </section>
            <Recurring me={me} isAdmin={isAdmin} version={version} onError={onError} />
            {editingBill && <Lazy load={() => import("../editbill.jsx")} name="EditBillSheet" bill={editingBill} onClose={() => setEditingBill(null)} onSaved={() => onChanged()} />}
            {editingWallet && <Lazy load={() => import("../editbill.jsx")} name="EditWalletSheet" item={editingWallet} onClose={() => setEditingWallet(null)} onSaved={() => onChanged()} onSplit={onSplit ? (it) => { setEditingWallet(null); onSplit(it); } : null} />}
        </div>
    );
}
