// บิล: รายการบิลของเดือน ค้นหา และลบ (เฉพาะคนจ่ายหรือแอดมิน) การเพิ่ม/แก้ไขบิลหารยังใช้ฟอร์มหน้าเดิมไปก่อน
import { useState } from "preact/hooks";
import { Icon, iconFor } from "../icons.jsx";
import { SectionTitle } from "../ui.jsx";
import { baht } from "../model.js";
import { deleteBill } from "../data.js";

function Bill({ b, canDelete, onDeleted, onError }) {
    const [confirming, setConfirming] = useState(false);
    const [busy, setBusy] = useState(false);
    async function del() {
        setBusy(true);
        try { await deleteBill(b.id); onDeleted(); } catch (e) { onError(e.message); setBusy(false); setConfirming(false); }
    }
    const kind = b.type === "installment" ? "ผ่อน" : b.type === "subscription" ? "รายเดือน" : "";
    return (
        <div class="row">
            <span class="ico"><Icon name={iconFor(b.icon)} /></span>
            <div class="grow">
                <div class="t">{b.desc || "ไม่ระบุ"}</div>
                <div class="s">{b.date.slice(8, 10)}/{b.date.slice(5, 7)} &middot; จ่ายโดย {b.payer}{kind ? ` · ${kind}` : ""} &middot; {b.people.length} คน</div>
            </div>
            <div style={{ textAlign: "right" }}>
                <div class="num">{baht(b.amountSat / 100, { decimals: 2 })}</div>
                {b.myShareSat > 0 && <div class="s num">ส่วนฉัน {baht(b.myShareSat / 100, { decimals: 2 })}</div>}
            </div>
            {canDelete && (confirming
                ? <button type="button" class="btn sm" disabled={busy} onClick={del}>ยืนยันลบ</button>
                : <button type="button" class="btn sm ghost" aria-label={`ลบ ${b.desc || "บิล"}`} onClick={() => setConfirming(true)}><Icon name="close" size={14} /></button>)}
        </div>
    );
}

export function BillsPage({ model, search, onSearch, me, isAdmin, onChanged, onError }) {
    const [mineOnly, setMineOnly] = useState(false);
    const list = mineOnly ? model.mine : model.all;
    return (
        <div class="col">
            <section class="card">
                <div class="strip" style={{ marginTop: 0 }}>
                    <div><div class="lbl">ยอดเต็มทุกบิลเดือนนี้</div><div class="num" style={{ fontSize: "20px", fontWeight: 600 }}>{baht(model.totalSat / 100)}</div></div>
                    <div class="vl" />
                    <div><div class="lbl">ส่วนของฉัน</div><div class="num pay" style={{ fontSize: "20px", fontWeight: 600 }}>{baht(model.myShareSat / 100)}</div></div>
                </div>
                <div class="toolbar">
                    <div class="field" style={{ flex: 1, marginTop: 0 }}>
                        <label for="bill-search">ค้นหา</label>
                        <input id="bill-search" type="search" placeholder="ชื่อรายการหรือคนจ่าย" value={search} onInput={(e) => onSearch(e.currentTarget.value)} />
                    </div>
                    <button type="button" class={`btn sm ${mineOnly ? "" : "ghost"}`} aria-pressed={mineOnly} onClick={() => setMineOnly(!mineOnly)}>เฉพาะที่เกี่ยวกับฉัน</button>
                </div>
            </section>
            <section class="card">
                <SectionTitle icon="bill" title="บิลของเดือนนี้" note={`${list.length} รายการ`} />
                {list.length === 0 && <div class="empty">ไม่พบบิล</div>}
                {list.map((b) => <Bill key={b.id} b={b} canDelete={isAdmin || b.payer.trim().toUpperCase() === me} onDeleted={onChanged} onError={onError} />)}
                <a class="btn ghost" style={{ marginTop: "12px" }} href="/index.html#add">เพิ่ม/แก้ไขบิล (ฟอร์มหน้าเดิม)</a>
            </section>
        </div>
    );
}
