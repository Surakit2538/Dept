// บิล: รายการบิลของเดือน ค้นหา และลบ (เฉพาะคนจ่ายหรือแอดมิน) การเพิ่ม/แก้ไขบิลหารยังใช้ฟอร์มหน้าเดิมไปก่อน
import { useState, useEffect } from "preact/hooks";
import { Icon, iconFor, ItemIcon } from "../icons.jsx";
import { SectionTitle, DeleteButton, Lazy, Collapsible } from "../ui.jsx";
import { baht, monthShort } from "../model.js";
import { deleteBill, deleteBills, updateBillIcons, loadTemplates, stopTemplate } from "../data.js";
import { SelectToggle, SelectRow, BulkBar } from "../bulk.jsx";

function Bill({ b, canDelete, onDeleted, onError, onEdit, selecting, picked, onToggle }) {
    const kind = b.type === "installment" ? "ผ่อน" : b.type === "subscription" ? "รายเดือน" : "";
    const name = b.desc || "ไม่ระบุ";
    const has = b.myShareSat > 0;
    const body = (
        <>
            <ItemIcon desc={b.desc} name={iconFor(b.icon)} />
            <div class="grow">
                <div class="t">{name}</div>
                <div class="s">{b.payer} จ่าย &middot; {b.people.length} คน{kind ? <span class="tag">{kind}</span> : null}</div>
            </div>
            <div class="amt2">
                {has ? <><span class="num pay mine">{baht(b.myShareSat / 100, { decimals: 2 })}</span><small>ส่วนฉัน &middot; บิล <span class="num">{baht(b.amountSat / 100, { decimals: 2 })}</span></small></>
                    : <><span class="num mute">{baht(b.amountSat / 100, { decimals: 2 })}</span><small>ไม่มีส่วนของฉัน</small></>}
            </div>
        </>
    );
    if (selecting && canDelete) return <SelectRow cls="bill" picked={picked} label={name} onToggle={() => onToggle(b.id)}>{body}</SelectRow>;
    if (selecting) return <li class="row bill dim" aria-disabled="true">{body}</li>;
    return (
        <li class="row bill">
            {body}
            {canDelete && <button type="button" class="icon-btn" aria-label={`แก้ไข ${name}`} onClick={() => onEdit(b)}><Icon name="pencil" size={17} /></button>}
            {canDelete && <DeleteButton label={name} onConfirm={async () => { try { await deleteBill(b.id); onDeleted(); } catch (e) { onError(e.message); } }} />}
        </li>
    );
}

const dayLabel = (d) => `${Number(d.slice(8, 10))} ${monthShort(d.slice(0, 7))}`;

function groupByDay(list) {
    const out = [];
    for (const b of list) {
        const last = out[out.length - 1];
        if (last && last[0] === b.date) last[1].push(b); else out.push([b.date, [b]]);
    }
    return out;
}

function Recurring({ me, isAdmin, onError }) {
    const [list, setList] = useState(null);
    useEffect(() => { let on = true; loadTemplates().then((l) => on && setList(l)).catch(() => on && setList([])); return () => { on = false; }; }, []);
    if (!list || list.length === 0) return null;
    return (
        <Collapsible icon="swap" title="บิลรายเดือนที่ตั้งไว้" summary={`${list.length} รายการ · รวม ${baht(list.reduce((a, t) => a + (Number(t.amount) || 0), 0))} ต่อเดือน`}>
            <ul class="plain">
                {list.map((t) => (
                    <li class="row" key={t.id}>
                        <ItemIcon desc={t.desc} name={iconFor(t.icon)} />
                        <div class="grow">
                            <div class="t">{t.desc || "ไม่ระบุ"}</div>
                            <div class="s">ทุกวันที่ {t.billingDay} &middot; {t.payer} จ่าย &middot; {Object.keys(t.splits || {}).length} คน</div>
                        </div>
                        <div class="amt2"><span class="num">{baht(Number(t.amount) || 0, { decimals: 2 })}</span></div>
                        {(isAdmin || String(t.payer || "").trim().toUpperCase() === me) && (
                            <DeleteButton verb="หยุด" busyText="กำลังหยุด" keepText="ไม่หยุด" label={t.desc || "บิลรายเดือน"}
                                onConfirm={async () => { try { await stopTemplate(t.id); setList((cur) => cur.filter((x) => x.id !== t.id)); } catch (e) { onError(e.message); } }} />
                        )}
                    </li>
                ))}
            </ul>
            <p class="lbl">หยุดแล้วเดือนถัดไปจะไม่สร้างบิลนี้ซ้ำ บิลที่สร้างไปแล้วยังอยู่</p>
        </Collapsible>
    );
}

export function BillsPage({ model, search, onSearch, me, isAdmin, onChanged, onError, onInfo = () => {} }) {
    const [mineOnly, setMineOnly] = useState(false);
    const [editing, setEditing] = useState(null);
    const [selecting, setSelecting] = useState(false);
    const [picked, setPicked] = useState([]);
    const list = mineOnly ? model.mine : model.all;
    const canEdit = (b) => isAdmin || b.payer.trim().toUpperCase() === me;
    const ids = list.filter(canEdit).map((b) => b.id);
    const live = picked.filter((id) => ids.includes(id));
    const toggle = (id) => setPicked((cur) => (cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id]));
    const stopSelecting = () => { setSelecting(false); setPicked([]); };
    async function bulkDelete() {
        try {
            const n = await deleteBills(live);
            onInfo(`ลบแล้ว ${n} บิล`);
            stopSelecting();
            onChanged();
        } catch (e) { onError(e.message); onChanged(); }
    }
    async function bulkCategory(fa) {
        try {
            const n = await updateBillIcons(live, fa);
            onInfo(`เปลี่ยนหมวดแล้ว ${n} บิล`);
            stopSelecting();
            onChanged();
        } catch (e) { onError(e.message); onChanged(); }
    }
    return (
        <div class="col narrow">
            <section class="card">
                <div class="strip">
                    <div><p class="lbl">ยอดเต็มทุกบิลเดือนนี้</p><p class="num mid">{baht(model.totalSat / 100)}</p></div>
                    <div class="vl" />
                    <div><p class="lbl">ส่วนของฉัน</p><p class="num mid pay">{baht(model.myShareSat / 100)}</p></div>
                </div>
            </section>
            <section class="card">
                <SectionTitle icon="bill" title="บิลของเดือนนี้" note={`${list.length} รายการ`} />
                <div class="toolbar">
                    <div class="field search">
                        <label for="bill-search">ค้นหาบิล</label>
                        <input id="bill-search" type="search" placeholder="ชื่อรายการหรือคนจ่าย" value={search} onInput={(e) => onSearch(e.currentTarget.value)} />
                    </div>
                    <button type="button" class={`btn sm ${mineOnly ? "" : "ghost"}`} aria-pressed={mineOnly} onClick={() => setMineOnly(!mineOnly)}>เฉพาะของฉัน</button>
                </div>
                {ids.length > 1 && <SelectToggle on={selecting} onToggle={() => (selecting ? stopSelecting() : setSelecting(true))} />}
                {list.length === 0 ? <p class="empty">{search ? `ไม่พบบิลที่ตรงกับ "${search}"` : "ยังไม่มีบิลในเดือนนี้"}</p>
                    : groupByDay(list).map(([d, items]) => (
                        <div class="day" key={d}>
                            <h3 class="day-h">{dayLabel(d)}</h3>
                            <ul class="plain">{items.map((b) => <Bill key={b.id} b={b} canDelete={canEdit(b)} onDeleted={onChanged} onError={onError} onEdit={setEditing} selecting={selecting} picked={live.includes(b.id)} onToggle={toggle} />)}</ul>
                        </div>
                    ))}
                {selecting && <BulkBar count={live.length} total={ids.length} onAll={() => setPicked(ids)} onNone={() => setPicked([])} onCategory={bulkCategory} onDelete={bulkDelete} note="เลือกได้เฉพาะบิลที่คุณจ่ายเอง (แอดมินเลือกได้ทุกบิล) เปลี่ยนเฉพาะหมวด ไม่แก้ยอดและคนหาร" />}
            </section>
            <Recurring me={me} isAdmin={isAdmin} onError={onError} />
            {editing && <Lazy load={() => import("../editbill.jsx")} name="EditBillSheet" bill={editing} onClose={() => setEditing(null)} onSaved={() => { onChanged(); }} />}
        </div>
    );
}
