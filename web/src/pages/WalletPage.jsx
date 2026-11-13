// กระเป๋า: รายรับ รายจ่ายส่วนตัว ส่วนของฉันในกลุ่ม สุทธิ (เห็นเฉพาะเจ้าของ)
import { useState } from "preact/hooks";
import { Icon, iconFor } from "../icons.jsx";
import { SectionTitle } from "../ui.jsx";
import { baht } from "../model.js";
import { deleteWalletEntry } from "../data.js";

function Item({ it, onDeleted, onError }) {
    const [confirming, setConfirming] = useState(false);
    const [busy, setBusy] = useState(false);
    async function del() {
        setBusy(true);
        try { await deleteWalletEntry(it.id); onDeleted(); } catch (e) { onError(e.message); setBusy(false); setConfirming(false); }
    }
    return (
        <div class="row">
            <span class="ico"><Icon name={it.type === "income" ? "down" : iconFor(it.icon)} /></span>
            <div class="grow"><div class="t">{it.desc || (it.type === "income" ? "รายรับ" : "รายจ่าย")}</div><div class="s">{it.type === "income" ? "รายรับ" : "ส่วนตัว"} &middot; {it.date.slice(8, 10)}/{it.date.slice(5, 7)}</div></div>
            <div class={`num ${it.type === "income" ? "rcv" : ""}`}>{baht(it.amount, { decimals: 2 })}</div>
            {confirming
                ? <button type="button" class="btn sm" disabled={busy} onClick={del}>ยืนยันลบ</button>
                : <button type="button" class="btn sm ghost" aria-label={`ลบ ${it.desc || "รายการ"}`} onClick={() => setConfirming(true)}><Icon name="close" size={14} /></button>}
        </div>
    );
}

export function WalletPage({ model, onChanged, onError }) {
    const m = model;
    const over = m.netSat < 0;
    return (
        <div class="home-grid">
            <div class="col">
                <section class="card hero">
                    <div class="hero-l">
                        <div class="lbl">{m.incomeSat > 0 ? (over ? "ใช้เกินรายรับ" : "เหลือเดือนนี้") : "ใช้ไปเดือนนี้"}</div>
                        <div class={`big num ${over || m.incomeSat === 0 ? "pay" : "rcv"}`}>{baht(Math.round(m.incomeSat > 0 ? Math.abs(m.netSat) / 100 : m.spentSat / 100))}</div>
                        <div class="chips">
                            <span class="chip"><Icon name="down" size={14} class="rcv" />รายรับ <b class="num">{baht(m.incomeSat / 100)}</b></span>
                            <span class="chip"><Icon name="up" size={14} class="pay" />ใช้ไป <b class="num">{baht(m.spentSat / 100)}</b></span>
                        </div>
                    </div>
                </section>
                <section class="card">
                    <SectionTitle icon="wallet" title="ใช้ไปมาจากอะไร" note="เห็นเฉพาะคุณ ไม่แสดงให้เพื่อนเห็น" />
                    <div class="row"><span class="ico"><Icon name="lock" /></span><div class="grow"><div class="t">ส่วนตัว</div></div><div class="num">{baht(m.personalSat / 100, { decimals: 2 })}</div></div>
                    <div class="row"><span class="ico"><Icon name="people" /></span><div class="grow"><div class="t">ส่วนของฉันในกลุ่ม</div><div class="s">เฉพาะส่วนที่คุณรับผิดชอบ ไม่ใช่ยอดเต็มบิล</div></div><div class="num">{baht(m.groupShareSat / 100, { decimals: 2 })}</div></div>
                    <div class="row"><span class="ico"><Icon name="swap" /></span><div class="grow"><div class="t">ได้คืนจากเพื่อนแล้ว</div><div class="s">ไม่นับเป็นรายรับ</div></div><div class="num rcv">{baht(m.receivedBackSat / 100, { decimals: 2 })}</div></div>
                    {m.paidBackSat > 0 && <div class="row"><span class="ico"><Icon name="swap" /></span><div class="grow"><div class="t">โอนคืนเพื่อนแล้ว</div><div class="s">ไม่นับเป็นรายจ่ายซ้ำ</div></div><div class="num">{baht(m.paidBackSat / 100, { decimals: 2 })}</div></div>}
                </section>
            </div>
            <div class="col">
                <section class="card">
                    <SectionTitle icon="bill" title="รายการของฉัน" note="รายรับและรายจ่ายส่วนตัว" />
                    {m.items.length === 0 && <div class="empty">ยังไม่มีรายการในเดือนนี้ กดปุ่ม &ldquo;บันทึก&rdquo; เพื่อเพิ่ม</div>}
                    {m.items.map((it) => <Item key={it.id} it={it} onDeleted={onChanged} onError={onError} />)}
                </section>
            </div>
        </div>
    );
}
