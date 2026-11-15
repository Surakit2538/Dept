// หน้าแรก: สรุปเดือน (เลขเดียวก่อน) หมวด กราฟรายเดือนแตะดูรายวัน หนี้ และรายการล่าสุด
import { Icon, iconFor } from "../icons.jsx";
import { Avatar, SectionTitle } from "../ui.jsx";
import { monthLabel, monthShort, baht } from "../model.js";

const CAT_ICON = { food: "food", bills: "bolt", goods: "bag", travel: "car", other: "dots" };

function Ring({ percent }) {
    const r = 42, c = 2 * Math.PI * r;
    const p = Math.max(0, Math.min(100, percent));
    return (
        <div class="ring" role="img" aria-label={`ใช้ไป ${percent}% ของรายรับ`}>
            <svg viewBox="0 0 100 100" aria-hidden="true">
                <circle cx="50" cy="50" r={r} fill="none" stroke="var(--chip)" stroke-width="10" />
                <circle cx="50" cy="50" r={r} fill="none" stroke="var(--pay)" stroke-width="10" stroke-linecap="round" stroke-dasharray={`${(c * p) / 100} ${c}`} transform="rotate(-90 50 50)" />
            </svg>
            <div class="ring-t"><b class="num">{percent}%</b><span>ของรายรับ</span></div>
        </div>
    );
}

export function Hero({ m, onAddIncome }) {
    const hasIncome = m.incomeSat > 0;
    const over = hasIncome && m.netSat < 0;
    const label = !hasIncome ? "ใช้ไปเดือนนี้" : over ? "ใช้เกินรายรับ" : "เหลือใช้เดือนนี้";
    const value = !hasIncome ? m.spentSat / 100 : Math.abs(m.netSat) / 100;
    const tone = !hasIncome || over ? "pay" : "rcv";
    return (
        <section class="card hero" aria-label="สรุปเดือน">
            <div class="hero-l">
                <p class="lbl">{label}</p>
                <p class={`big num ${tone}`}>{baht(Math.round(value))}</p>
                <div class="chips">
                    <span class="chip"><Icon name="down" size={14} class="rcv" />รายรับ <b class="num">{baht(m.incomeSat / 100)}</b></span>
                    <span class="chip"><Icon name="up" size={14} class="pay" />ใช้ไป <b class="num">{baht(m.spentSat / 100)}</b></span>
                </div>
                <p class="lbl hero-split">ส่วนตัว <span class="num">{baht(m.personalSat / 100)}</span> &middot; ส่วนของฉันในกลุ่ม <span class="num">{baht(m.groupShareSat / 100)}</span></p>
            </div>
            {hasIncome ? <Ring percent={m.spentPercent} /> : (
                <button type="button" class="hint" onClick={onAddIncome}><Icon name="plus" size={20} />เพิ่มรายรับ<small>เพื่อดูว่าเหลือใช้เท่าไร</small></button>
            )}
        </section>
    );
}

function Categories({ cats }) {
    if (cats.length === 0) return null;
    const top = cats[0];
    return (
        <section class="card">
            <SectionTitle icon="bag" title="ใช้ไปกับอะไร" note={`ส่วนใหญ่ไปกับ${top.label} ${top.percent}%`} />
            <ul class="cats">
                {cats.map((c) => (
                    <li class="cat" key={c.key}>
                        <span class="ico big-ico"><Icon name={CAT_ICON[c.key] || "dots"} /></span>
                        <div class="cat-b">
                            <div class="cat-r"><span>{c.label}</span><span class="num"><b>{c.percent}%</b><em>{baht(c.satang / 100)}</em></span></div>
                            <div class="bar"><i style={{ width: `${Math.max(3, Math.round((c.percent / top.percent) * 100))}%` }} /></div>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}

const shortBaht = (n) => (n >= 10000 ? `${Math.round(n / 1000)}k` : n >= 1000 ? `${(n / 1000).toFixed(1)}k` : String(Math.round(n)));

function Monthly({ series, selected, onSelect }) {
    const max = Math.max(1, ...series.map((s) => s.spentSat));
    if (series.every((s) => s.spentSat === 0)) return <><SectionTitle icon="chart" title="ใช้ไปรายเดือน" /><p class="empty">ยังไม่มีรายจ่ายใน 6 เดือนที่ผ่านมา บันทึกรายการแรกได้จากปุ่ม &ldquo;บันทึก&rdquo;</p></>;
    return (
        <>
            <SectionTitle icon="chart" title="ใช้ไปรายเดือน" note="แตะแท่งเพื่อดูรายวันของเดือนนั้น" />
            <div class="months" role="group" aria-label="ใช้ไปรายเดือน">
                {series.map((s) => {
                    const on = s.month === selected;
                    return (
                        <button type="button" class={`mcol ${on ? "on" : ""}`} key={s.month} aria-pressed={on} aria-label={`${monthLabel(s.month)} ใช้ไป ${baht(s.spentSat / 100)}`} onClick={() => onSelect(s.month)}>
                            <span class="mval num">{s.spentSat > 0 ? shortBaht(s.spentSat / 100) : ""}</span>
                            <span class="mplot">
                                <i class="mbar" style={{ height: `${Math.max(2, Math.round((s.spentSat / max) * 100))}%` }} />
                            </span>
                            <span class="mlab">{monthShort(s.month)}</span>
                        </button>
                    );
                })}
            </div>
        </>
    );
}

function Daily({ month, daily, hide }) {
    if (!daily.length || hide) return null;
    const max = Math.max(1, ...daily.map((d) => d.satang));
    const top = daily.reduce((a, d) => (d.satang > a.satang ? d : a), daily[0]);
    const total = daily.reduce((a, d) => a + d.satang, 0);
    return (
        <div class="daily">
            <div class="hd-row"><h3>รายวันของ {monthLabel(month)}</h3>{total > 0 && <span class="lbl">มากสุดวันที่ {top.day} <span class="num">{baht(top.satang / 100)}</span></span>}</div>
            {total === 0 ? <p class="empty">ยังไม่มีรายจ่ายในเดือนนี้</p> : (
                <>
                    <div class="days" role="img" aria-label={`ใช้ไปรายวัน มากสุดวันที่ ${top.day}`}>
                        {daily.map((d) => <i key={d.day} class={d.satang === top.satang ? "peak" : d.today ? "today" : ""} style={{ height: `${Math.max(3, Math.round((d.satang / max) * 100))}%` }} />)}
                    </div>
                    <div class="axis num" aria-hidden="true"><span>1</span><span>{Math.ceil(daily.length / 2)}</span><span>{daily.length}</span></div>
                </>
            )}
        </div>
    );
}

function DebtRow({ d, tone, action }) {
    return (
        <li class="dbar">
            <div class="r1">
                <Avatar name={d.name} />
                <span class="who">{d.name}</span>
                <span class={`num amt ${tone === "g" ? "rcv" : "pay"}`}>{baht(d.amount)}</span>
                <a class="btn sm ghost" href="#clear"><Icon name={tone === "g" ? "swap" : "qr"} size={14} />{action}</a>
            </div>
            <div class={`bar ${tone === "g" ? "g" : ""}`}><i style={{ width: `${d.share}%` }} /></div>
        </li>
    );
}

function Debts({ m }) {
    return (
        <section class="card">
            <SectionTitle icon="people" title="เพื่อนค้างฉัน" note={m.owedTotal > 0 ? `รอรับคืนรวม ${baht(m.owedTotal)}` : undefined} />
            {m.owedToMe.length === 0 ? <p class="empty"><Icon name="check" size={16} class="rcv" />ไม่มีใครค้างคุณในเดือนนี้</p> : <ul class="plain">{m.owedToMe.map((o) => <DebtRow key={o.name} d={o} tone="g" action="ดู" />)}</ul>}
            {m.iOweTotal > 0 && (
                <>
                    <h3 class="sub-t">ฉันค้างเพื่อน <span class="num pay">{baht(m.iOweTotal)}</span></h3>
                    <ul class="plain">{m.iOwe.map((o) => <DebtRow key={o.name} d={o} tone="p" action="โอน" />)}</ul>
                </>
            )}
        </section>
    );
}

function Recent({ items }) {
    if (!items.length) return null;
    return (
        <section class="card">
            <SectionTitle icon="bill" title="รายการล่าสุด" />
            <ul class="plain">
                {items.map((r) => (
                    <li class="row" key={r.kind + r.id}>
                        <span class="ico"><Icon name={r.kind === "income" ? "down" : iconFor(r.icon)} /></span>
                        <div class="grow"><div class="t">{r.desc || "ไม่ระบุ"}</div><div class="s">{r.kind === "group" ? "ส่วนของฉันในกลุ่ม" : r.kind === "income" ? "รายรับ" : "ส่วนตัว"} &middot; {r.date.slice(8, 10)}/{r.date.slice(5, 7)}</div></div>
                        <span class={`num ${r.kind === "income" ? "rcv" : ""}`}>{baht(r.satang / 100, { decimals: 2 })}</span>
                    </li>
                ))}
            </ul>
            <a class="more" href="#bills">ดูบิลทั้งหมด<Icon name="right" size={14} /></a>
        </section>
    );
}

export function HomePage({ model, series, month, onMonth, onAddIncome }) {
    return (
        <div class="home-grid">
            <div class="col">
                <Hero m={model} onAddIncome={onAddIncome} />
                <Categories cats={model.categories} />
                <section class="card">
                    <Monthly series={series} selected={month} onSelect={onMonth} />
                    <Daily month={month} daily={model.daily} hide={series.every((s) => s.spentSat === 0)} />
                </section>
            </div>
            <div class="col">
                <Debts m={model} />
                <Recent items={model.recent} />
            </div>
        </div>
    );
}
