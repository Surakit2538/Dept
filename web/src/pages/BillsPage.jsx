// บิล: รายการบิลของเดือน ค้นหา และลบ (เฉพาะคนจ่ายหรือแอดมิน) การเพิ่ม/แก้ไขบิลหารยังใช้ฟอร์มหน้าเดิมไปก่อน
import { useState, useEffect } from "preact/hooks";
import { Icon, iconFor } from "../icons.jsx";
import { SectionTitle, DeleteButton } from "../ui.jsx";
import { baht } from "../model.js";
import { deleteBill, loadTemplates, stopTemplate } from "../data.js";

function Bill({ b, canDelete, onDeleted, onError }) {
    const kind = b.type === "installment" ? "ผ่อน" : b.type === "subscription" ? "รายเดือน" : "";
    const name = b.desc || "ไม่ระบุ";
    return (
        <li class="row">
            <span class="ico"><Icon name={iconFor(b.icon)} /></span>
            <div class="grow">
                <div class="t">{name}</div>
                <div class="s">{b.date.slice(8, 10)}/{b.date.slice(5, 7)} &middot; {b.payer} จ่าย{kind ? ` · ${kind}` : ""} &middot; {b.people.length} คน</div>
            </div>
            <div class="amt2">
                <span class="num">{baht(b.amountSat / 100, { decimals: 2 })}</span>
                {b.myShareSat > 0 && <small class="num">ส่วนฉัน {baht(b.myShareSat / 100, { decimals: 2 })}</small>}
            </div>
            {canDelete && <DeleteButton label={name} onConfirm={async () => { try { await deleteBill(b.id); onDeleted(); } catch (e) { onError(e.message); } }} />}
        </li>
    );
}

function Recurring({ me, isAdmin, onError }) {
    const [list, setList] = useState(null);
    useEffect(() => { let on = true; loadTemplates().then((l) => on && setList(l)).catch(() => on && setList([])); return () => { on = false; }; }, []);
    if (!list || list.length === 0) return null;
    return (
        <section class="card">
            <SectionTitle icon="swap" title="บิลรายเดือนที่ตั้งไว้" note={`${list.length} รายการ`} />
            <ul class="plain">
                {list.map((t) => (
                    <li class="row" key={t.id}>
                        <span class="ico"><Icon name={iconFor(t.icon)} /></span>
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
        </section>
    );
}

export function BillsPage({ model, search, onSearch, me, isAdmin, onChanged, onError }) {
    const [mineOnly, setMineOnly] = useState(false);
    const list = mineOnly ? model.mine : model.all;
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
                {list.length === 0 ? <p class="empty">{search ? `ไม่พบบิลที่ตรงกับ "${search}"` : "ยังไม่มีบิลในเดือนนี้"}</p>
                    : <ul class="plain">{list.map((b) => <Bill key={b.id} b={b} canDelete={isAdmin || b.payer.trim().toUpperCase() === me} onDeleted={onChanged} onError={onError} />)}</ul>}
                <a class="more" href="/index.html#history">แก้ไขบิลที่บันทึกไปแล้ว (หน้าเดิม)<Icon name="right" size={14} /></a>
            </section>
            <Recurring me={me} isAdmin={isAdmin} onError={onError} />
        </div>
    );
}
