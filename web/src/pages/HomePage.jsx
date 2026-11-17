// หน้าแรก: สรุปเดือน (เลขเดียวก่อน) หมวด กราฟรายเดือนแตะดูรายวัน หนี้ และรายการล่าสุด
import { useState, useEffect, useMemo } from "preact/hooks";
import { Icon, iconFor } from "../icons.jsx";
import { Avatar, SectionTitle, Sheet } from "../ui.jsx";
import { monthLabel, monthShort, monthFullLabel, daysInMonth, shiftMonth, baht, TH_MONTHS_FULL, buildHomeModel } from "../model.js";

const CAT_ICON = { food: "food", bills: "bolt", goods: "bag", travel: "car", fun: "film", other: "dots" };

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

function Monthly({ series, selected, onSelect, onOpenCalendar }) {
    const max = Math.max(1, ...series.map((s) => s.spentSat));
    if (series.every((s) => s.spentSat === 0)) return <><SectionTitle icon="chart" title="ใช้ไปรายเดือน" /><p class="empty">ยังไม่มีรายจ่ายใน 6 เดือนที่ผ่านมา บันทึกรายการแรกได้จากปุ่ม &ldquo;บันทึก&rdquo;</p></>;
    return (
        <>
            <SectionTitle icon="chart" title="ใช้ไปรายเดือน" note="แตะแท่งเดือนเพื่อดูปฏิทินรายวัน" />
            <div class="months" role="group" aria-label="ใช้ไปรายเดือน">
                {series.map((s) => {
                    const on = s.month === selected;
                    return (
                        <button
                            type="button"
                            class={`mcol ${on ? "on" : ""}`}
                            key={s.month}
                            aria-pressed={on}
                            aria-label={`${monthLabel(s.month)} ใช้ไป ${baht(s.spentSat / 100)}`}
                            onClick={() => {
                                onSelect(s.month);
                                onOpenCalendar(s.month);
                            }}
                        >
                            <span class="mval num">{s.spentSat > 0 ? shortBaht(s.spentSat / 100) : ""}</span>
                            <span class="mplot">
                                <i class="mbar" style={{ height: `${Math.max(2, Math.round((s.spentSat / max) * 100))}%` }} />
                            </span>
                            <span class="mlab">{monthShort(s.month)}</span>
                        </button>
                    );
                })}
            </div>
            <button
                type="button"
                class="more cal-open-btn"
                onClick={() => onOpenCalendar(selected)}
            >
                <Icon name="calendar" size={16} />
                <span>ดูตารางปฏิทินรายวัน ({monthLabel(selected)})</span>
                <Icon name="right" size={14} />
            </button>
        </>
    );
}

export function DailyCalendarSheet({ month, calendarDays = [], spentSat = 0, average = 0, onMonth, onClose }) {
    const totalDays = daysInMonth(month);
    const [y, m] = month.split("-").map(Number);
    const mIndex = m - 1;
    const firstDow = new Date(Date.UTC(y, mIndex, 1)).getUTCDay();

    const topDay = calendarDays.length > 0
        ? calendarDays.reduce((a, d) => (d.satang > a.satang ? d : a), calendarDays[0])
        : null;

    const findDefaultDay = () => {
        const todayDay = (calendarDays || []).find((d) => d.today)?.day;
        if (todayDay) return todayDay;
        if (topDay && topDay.satang > 0) return topDay.day;
        return 1;
    };

    const [selectedDay, setSelectedDay] = useState(findDefaultDay);

    useEffect(() => {
        setSelectedDay(findDefaultDay());
    }, [month, calendarDays]);

    const activeDay = Math.min(Math.max(1, selectedDay || 1), totalDays);
    const activeDayData = (calendarDays || []).find((d) => d.day === activeDay);

    const DOW = ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"];

    const emptySlots = [];
    for (let i = 0; i < firstDow; i++) emptySlots.push(i);

    return (
        <Sheet title="ปฏิทินรายวัน" onClose={onClose}>
            <div class="daily-cal-box">
                <div class="cal-hd">
                    <button
                        type="button"
                        class="icon-btn"
                        aria-label="เดือนก่อนหน้า"
                        onClick={() => onMonth(shiftMonth(month, -1))}
                    >
                        <Icon name="left" size={16} />
                    </button>
                    <span class="cal-month-title num">{monthFullLabel(month)}</span>
                    <button
                        type="button"
                        class="icon-btn"
                        aria-label="เดือนถัดไป"
                        onClick={() => onMonth(shiftMonth(month, 1))}
                    >
                        <Icon name="right" size={16} />
                    </button>
                </div>

                <div class="cal-summary-strip">
                    <div class="cal-stat">
                        <span class="lbl">ใช้ไปทั้งเดือน</span>
                        <b class="num pay">{baht(spentSat / 100)}</b>
                    </div>
                    <div class="cal-stat">
                        <span class="lbl">เฉลี่ยต่อวัน</span>
                        <b class="num">{baht(average)}</b>
                    </div>
                    <div class="cal-stat">
                        <span class="lbl">มากสุดวันที่</span>
                        <b class="num">{topDay && topDay.satang > 0 ? `${topDay.day} (${shortBaht(topDay.satang / 100)})` : "-"}</b>
                    </div>
                </div>

                <div class="daily-cal-table">
                    <div class="daily-dow-row" role="row">
                        {DOW.map((w, i) => (
                            <span key={w} class={`daily-dow ${i === 0 || i === 6 ? "weekend" : ""}`} role="columnheader">
                                {w}
                            </span>
                        ))}
                    </div>
                    <div class="daily-days-grid" role="grid">
                        {emptySlots.map((i) => <span key={`empty-${i}`} class="daily-cell empty" />)}
                        {calendarDays.map((d) => {
                            const isSel = d.day === activeDay;
                            const isPeak = topDay && topDay.satang > 0 && d.satang === topDay.satang;
                            return (
                                <button
                                    type="button"
                                    key={d.day}
                                    class={`daily-cell ${isSel ? "on" : ""} ${d.today ? "today" : ""} ${d.isFuture ? "future" : ""} ${d.satang > 0 ? "has-spend" : ""} ${isPeak ? "peak" : ""}`}
                                    onClick={() => setSelectedDay(d.day)}
                                    aria-pressed={isSel}
                                    aria-label={`วันที่ ${d.day} ใช้ไป ${d.satang > 0 ? baht(d.satang / 100) : "0 บาท"}`}
                                >
                                    <span class="daily-cell-num num">{d.day}</span>
                                    {d.satang > 0 ? (
                                        <span class="daily-cell-amt num">{shortBaht(d.satang / 100)}</span>
                                    ) : (
                                        <span class="daily-cell-amt empty">&middot;</span>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div class="daily-detail-box">
                    <div class="daily-detail-hd">
                        <span class="daily-detail-date">
                            <b>วันที่ {activeDay} {TH_MONTHS_FULL[mIndex]}</b>
                            {activeDayData && activeDayData.today && <span class="tag-today">วันนี้</span>}
                        </span>
                        <span class="num pay">{activeDayData && activeDayData.satang > 0 ? `รวม ${baht(activeDayData.satang / 100)}` : "฿0"}</span>
                    </div>
                    {activeDayData && activeDayData.items && activeDayData.items.length > 0 ? (
                        <ul class="daily-items-list plain">
                            {activeDayData.items.map((it, idx) => (
                                <li key={idx} class="row">
                                    <span class="ico"><Icon name={iconFor(it.icon)} size={16} /></span>
                                    <div class="grow">
                                        <div class="t">{it.desc || "ไม่ระบุ"}</div>
                                        <div class="s">{it.kind === "group" ? "ส่วนของฉันในกลุ่ม" : "ส่วนตัว"}</div>
                                    </div>
                                    <span class="num pay">{baht(it.satang / 100, { decimals: 2 })}</span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p class="empty"><Icon name="check" size={16} class="rcv" />ไม่มีรายจ่ายในวันนี้</p>
                    )}
                </div>
            </div>
        </Sheet>
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

function Debts({ m, month, nowMonth }) {
    const isCurrent = !month || !nowMonth || month === nowMonth;
    const title = isCurrent ? "เพื่อนค้างฉัน" : `เพื่อนค้างฉัน (${monthShort(month)})`;
    const emptyMsg = isCurrent ? "ไม่มีใครค้างคุณในเดือนนี้" : `ไม่มีใครค้างคุณในเดือน ${monthLabel(month)}`;
    return (
        <section class="card">
            <SectionTitle icon="people" title={title} note={m.owedTotal > 0 ? `รอรับคืนรวม ${baht(m.owedTotal)}` : undefined} />
            {m.owedToMe.length === 0 ? <p class="empty"><Icon name="check" size={16} class="rcv" />{emptyMsg}</p> : <ul class="plain">{m.owedToMe.map((o) => <DebtRow key={o.name} d={o} tone="g" action="ดู" />)}</ul>}
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

export function HomePage({ model, series, month, onMonth, onAddIncome, all, members, userName, today, nowMonth }) {
    const [calOpen, setCalOpen] = useState(false);
    const [calMonth, setCalMonth] = useState(month);

    useEffect(() => {
        setCalMonth(month);
    }, [month]);

    const handleOpenCalendarForMonth = (m) => {
        setCalMonth(m);
        setCalOpen(true);
    };

    const calModel = useMemo(() => {
        if (calMonth === month) return model;
        if (all && all.transactions && userName) {
            return buildHomeModel({
                name: userName,
                month: calMonth,
                today,
                members,
                transactions: all.transactions,
                settlements: all.settlements,
                walletItems: all.wallet || []
            });
        }
        return model;
    }, [calMonth, month, model, all, userName, today, members]);

    return (
        <div class="home-grid">
            <div class="col">
                <Hero m={model} onAddIncome={onAddIncome} />
                <Categories cats={model.categories} />
                {series ? (
                    <section class="card">
                        <Monthly
                            series={series}
                            selected={month}
                            onSelect={handleOpenCalendarForMonth}
                            onOpenCalendar={handleOpenCalendarForMonth}
                        />
                    </section>
                ) : <div class="card sk" style={{ height: "260px" }} aria-busy="true" aria-label="กำลังโหลดกราฟ" />}
            </div>
            <div class="col">
                <Debts m={model} month={month} nowMonth={nowMonth} />
                <Recent items={model.recent} />
            </div>

            {calOpen && (
                <DailyCalendarSheet
                    month={calMonth}
                    calendarDays={calModel.calendarDays}
                    spentSat={calModel.spentSat}
                    average={calModel.average}
                    onMonth={setCalMonth}
                    onClose={() => setCalOpen(false)}
                />
            )}
        </div>
    );
}
