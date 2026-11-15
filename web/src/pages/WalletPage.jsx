// กระเป๋า: รายรับ รายจ่ายส่วนตัว ส่วนของฉันในกลุ่ม สุทธิ (เห็นเฉพาะเจ้าของ)
import { Icon, iconFor } from "../icons.jsx";
import { SectionTitle, DeleteButton } from "../ui.jsx";
import { baht } from "../model.js";
import { deleteWalletEntry } from "../data.js";

function Item({ it, onDeleted, onError }) {
    const name = it.desc || (it.type === "income" ? "รายรับ" : "รายจ่าย");
    return (
        <li class="row">
            <span class="ico"><Icon name={it.type === "income" ? "down" : iconFor(it.icon)} /></span>
            <div class="grow"><div class="t">{name}</div><div class="s">{it.type === "income" ? "รายรับ" : "ส่วนตัว"} &middot; {it.date.slice(8, 10)}/{it.date.slice(5, 7)}</div></div>
            <span class={`num ${it.type === "income" ? "rcv" : ""}`}>{baht(it.amount, { decimals: 2 })}</span>
            <DeleteButton label={name} onConfirm={async () => { try { await deleteWalletEntry(it.id); onDeleted(); } catch (e) { onError(e.message); } }} />
        </li>
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

export function WalletPage({ model, onChanged, onError }) {
    const m = model;
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
                    <ul class="plain">
                        <Line icon="lock" title="ส่วนตัว" value={m.personalSat} />
                        <Line icon="people" title="ส่วนของฉันในกลุ่ม" note="เฉพาะส่วนที่คุณรับผิดชอบ ไม่ใช่ยอดเต็มบิล" value={m.groupShareSat} />
                        <Line icon="swap" title="ได้คืนจากเพื่อนแล้ว" note="ไม่นับเป็นรายรับ" value={m.receivedBackSat} tone="rcv" />
                        {m.paidBackSat > 0 && <Line icon="swap" title="โอนคืนเพื่อนแล้ว" note="ไม่นับเป็นรายจ่ายซ้ำ" value={m.paidBackSat} />}
                    </ul>
                </section>
            </div>
            <div class="col">
                <section class="card">
                    <SectionTitle icon="bill" title="รายการของฉัน" note="รายรับและรายจ่ายส่วนตัว" />
                    {m.items.length === 0 ? <p class="empty">ยังไม่มีรายการในเดือนนี้ กดปุ่ม &ldquo;บันทึก&rdquo; เพื่อเพิ่ม</p>
                        : <ul class="plain">{m.items.map((it) => <Item key={it.id} it={it} onDeleted={onChanged} onError={onError} />)}</ul>}
                </section>
            </div>
        </div>
    );
}
