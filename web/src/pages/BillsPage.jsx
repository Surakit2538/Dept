// บิล: รายการบิลของเดือน ค้นหา และลบ (เฉพาะคนจ่ายหรือแอดมิน) การเพิ่ม/แก้ไขบิลหารยังใช้ฟอร์มหน้าเดิมไปก่อน
import { useState } from "preact/hooks";
import { Icon, iconFor } from "../icons.jsx";
import { SectionTitle, DeleteButton } from "../ui.jsx";
import { baht } from "../model.js";
import { deleteBill } from "../data.js";

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
                <a class="more" href="/index.html#add">เพิ่มหรือแก้ไขบิล (ฟอร์มหน้าเดิม)<Icon name="right" size={14} /></a>
            </section>
        </div>
    );
}
