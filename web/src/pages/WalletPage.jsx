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

const pct = (a, b) => (b > 0 ? Math.round((a / b) * 100) : 0);

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
                    {m.items.length === 0 ? <p class="empty">ยังไม่มีรายการในเดือนนี้ กดปุ่ม &ldquo;บันทึก&rdquo; เพื่อเพิ่ม</p>
                        : <ul class="plain">{m.items.map((it) => <Item key={it.id} it={it} onDeleted={onChanged} onError={onError} />)}</ul>}
                </section>
            </div>
        </div>
    );
}
