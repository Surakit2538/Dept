// หน้าแรก: สรุปเดือน, เพื่อนค้างฉัน/ฉันค้างเพื่อน (รูปเพื่อนซ้อนกัน), ใช้ไปกับอะไร และปฏิทินใช้จ่าย (ดูเป็นวัน เดือน ปี)
import { useState, useEffect } from "preact/hooks";
import { Icon, iconFor, ItemIcon } from "../icons.jsx";
import { AvatarStack, SectionTitle } from "../ui.jsx";
import { monthLabel, monthShort, monthFullLabel, daysInMonth, shiftMonth, baht, TH_MONTHS } from "../model.js";

const CAT_ICON = { food: "food", bills: "bolt", goods: "bag", travel: "car", fun: "film", other: "dots" };
const TH_DAYS = ["วันอาทิตย์", "วันจันทร์", "วันอังคาร", "วันพุธ", "วันพฤหัสบดี", "วันศุกร์", "วันเสาร์"];
const DOW = ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"];

function Ring({ percent }) {
    const r = 42, c = 2 * Math.PI * r;
    const p = Math.max(0, Math.min(100, percent));
    return (
        <div class="ring" role="img" aria-label={`ใช้ไปแล้ว ${percent}% ของรายรับ`}>
            <svg viewBox="0 0 100 100" aria-hidden="true">
                <circle cx="50" cy="50" r={r} fill="none" stroke="var(--chip)" stroke-width="10" />
                <circle cx="50" cy="50" r={r} fill="none" stroke="var(--pay)" stroke-width="10" stroke-linecap="round" stroke-dasharray={`${(c * p) / 100} ${c}`} transform="rotate(-90 50 50)" />
            </svg>
            <div class="ring-t"><b class="num">{percent}%</b><span>ใช้ไปแล้ว</span></div>
        </div>
    );
}

/** ป้ายวันที่แบบปฏิทิน: เดือนนี้แสดงวันนี้ เดือนอื่นแสดงจำนวนวันทั้งเดือน */
export function DateTile({ month, today }) {
    if (!month) return null;
    const isNow = today && today.startsWith(month);
    const day = isNow ? Number(today.slice(8, 10)) : daysInMonth(month);
    const [y, mo] = month.split("-").map(Number);
    const sub = isNow ? TH_DAYS[new Date(Date.UTC(y, mo - 1, day)).getUTCDay()] : "ทั้งเดือน";
    return (
        <span class="dtile" aria-hidden="true">
            <span class="m">{monthShort(month)}</span>
            <span class="d num">{day}</span>
            <span class="w">{sub}</span>
        </span>
    );
}

export function Hero({ m, onAddIncome, today = "" }) {
    const hasIncome = m.incomeSat > 0;
    const over = hasIncome && m.netSat < 0;
    const label = !hasIncome ? "ใช้ไปเดือนนี้" : over ? "ใช้เกินรายรับ" : "เหลือใช้เดือนนี้";
    const value = !hasIncome ? m.spentSat / 100 : Math.abs(m.netSat) / 100;
    const tone = !hasIncome || over ? "pay" : "rcv";
    return (
        <section class="card hero" aria-label="สรุปเดือน">
            <div class="hero-l">
                <div class="hero-top">
                    <DateTile month={m.month} today={today} />
                    <div>
                        <p class="lbl">{label}</p>
                        <p class={`big num ${tone}`}>{baht(Math.round(value))}</p>
                    </div>
                </div>
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

/** เพื่อนค้างฉัน / ฉันค้างเพื่อน: ยอดรวม + รูปเพื่อนซ้อนกัน แตะแล้วไปหน้าเคลียร์เงิน (รายชื่อและยอดแต่ละคนดูที่นั่น) */
export function OweCards({ m, profiles = [], month = "", nowMonth = "" }) {
    const pic = Object.fromEntries((profiles || []).map((p) => [p.name, p.pictureUrl]));
    const owedNames = m.owedToMe.map((o) => o.name);
    const oweNames = m.iOwe.map((o) => o.name);
    const suffix = month && nowMonth && month !== nowMonth ? ` (${monthShort(month)})` : "";
    return (
        <div class="owe-grid">
            <a class="card owe-card" href="#clear" aria-label={`เพื่อนค้างฉัน ${baht(m.owedTotal)}${owedNames.length ? " ได้แก่ " + owedNames.join(", ") : ""}`}>
                <span class="owe-k">เพื่อนค้างฉัน{suffix}<Icon name="right" size={14} /></span>
                <b class={`owe-v num ${m.owedTotal > 0 ? "rcv" : ""}`}>{baht(m.owedTotal)}</b>
                {owedNames.length > 0 ? <AvatarStack names={owedNames} pictures={pic} /> : <span class="owe-ok"><Icon name="check" size={14} />ไม่มีใครค้าง</span>}
            </a>
            <a class="card owe-card" href="#clear" aria-label={`ฉันค้างเพื่อน ${baht(m.iOweTotal)}${oweNames.length ? " ได้แก่ " + oweNames.join(", ") : ""}`}>
                <span class="owe-k">ฉันค้างเพื่อน{suffix}<Icon name="right" size={14} /></span>
                <b class={`owe-v num ${m.iOweTotal > 0 ? "pay" : ""}`}>{baht(m.iOweTotal)}</b>
                {oweNames.length > 0 ? <AvatarStack names={oweNames} pictures={pic} /> : <span class="owe-ok"><Icon name="check" size={14} />ไม่ค้างใคร</span>}
            </a>
        </div>
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
const money2 = (satang) => baht(satang / 100, { decimals: 2 });

/** ความเข้มของสีช่องวัน 0-3 ตามยอดเทียบวันที่ใช้มากสุดของเดือน */
function heat(satang, max) {
    if (!satang || !max) return 0;
    const r = satang / max;
    return r > 0.6 ? 3 : r > 0.25 ? 2 : 1;
}

function MonthGrid({ month, days, onPick }) {
    const [y, m] = month.split("-").map(Number);
    const firstDow = new Date(Date.UTC(y, m - 1, 1)).getUTCDay();
    const max = days.reduce((a, d) => Math.max(a, d.satang), 0);
    return (
        <div class="sc-grid" role="group" aria-label={`ปฏิทินรายจ่าย ${monthFullLabel(month)}`}>
            {DOW.map((w) => <span key={w} class="sc-dow" aria-hidden="true">{w}</span>)}
            {Array.from({ length: firstDow }, (_, i) => <span key={`e${i}`} />)}
            {days.map((d) => (
                <button
                    type="button"
                    key={d.day}
                    class={`sc-day h${heat(d.satang, max)} ${d.today ? "today" : ""} ${d.satang > 0 && d.satang === max ? "peak" : ""}`}
                    disabled={d.isFuture}
                    onClick={() => onPick(d.day)}
                    aria-label={`วันที่ ${d.day} ใช้ไป ${d.satang > 0 ? baht(d.satang / 100) : "0 บาท"}`}
                >
                    <span class="num">{d.day}</span>
                    {d.satang > 0 ? <small class="num">{shortBaht(d.satang / 100)}</small> : null}
                </button>
            ))}
        </div>
    );
}

export function DayView({ month, days, day, onDay }) {
    const d = days.find((x) => x.day === day) || days[0];
    if (!d) return null;
    const [y, m] = month.split("-").map(Number);
    const dow = TH_DAYS[new Date(Date.UTC(y, m - 1, d.day)).getUTCDay()];
    const last = days.filter((x) => !x.isFuture).length;
    return (
        <div class="sc-day-view">
            <div class="sc-day-hd">
                <span class="dtile sm" aria-hidden="true"><span class="m">{monthShort(month)}</span><span class="d num">{d.day}</span></span>
                <div class="grow"><b>{dow} {d.day} {monthShort(month)}</b><span class="lbl">{d.items.length} รายการ</span></div>
                <b class="num pay">{baht(d.satang / 100)}</b>
            </div>
            <div class="sc-day-nav">
                <button type="button" class="icon-btn" aria-label="วันก่อนหน้า" disabled={d.day <= 1} onClick={() => onDay(d.day - 1)}><Icon name="left" size={16} /></button>
                <span class="lbl">เลื่อนดูวันอื่น</span>
                <button type="button" class="icon-btn" aria-label="วันถัดไป" disabled={d.day >= last} onClick={() => onDay(d.day + 1)}><Icon name="right" size={16} /></button>
            </div>
            {d.items.length === 0 ? <p class="empty"><Icon name="check" size={16} class="rcv" />ไม่มีรายจ่ายในวันนี้</p> : (
                <ul class="plain">
                    {d.items.map((it, i) => (
                        <li class="row" key={i}>
                            <ItemIcon desc={it.desc} name={iconFor(it.icon)} size={36} iconSize={18} />
                            <div class="grow"><div class="t">{it.desc || "ไม่ระบุ"}</div><div class="s">{it.kind === "group" ? "ส่วนของฉันในกลุ่ม" : "ส่วนตัว"}</div></div>
                            <span class="num pay">{money2(it.satang)}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export function YearView({ year, series, since, nowMonth, onPick }) {
    const byMonth = Object.fromEntries((series || []).map((s) => [s.month, s.spentSat]));
    const rows = Array.from({ length: 12 }, (_, i) => {
        const key = `${year}-${String(i + 1).padStart(2, "0")}`;
        const inRange = key >= since && key <= nowMonth;
        return { key, label: TH_MONTHS[i], inRange, sat: inRange ? byMonth[key] || 0 : 0 };
    });
    const max = rows.reduce((a, r) => Math.max(a, r.sat), 0);
    return (
        <div class="sc-year">
            {rows.map((r) => (
                <button type="button" key={r.key} class={`sc-mon ${r.key === nowMonth ? "cur" : ""}`} disabled={!r.inRange} onClick={() => onPick(r.key)} aria-label={`${monthLabel(r.key)} ใช้ไป ${r.inRange ? baht(r.sat / 100) : "ไม่มีข้อมูล"}`}>
                    <small>{r.label}</small>
                    <b class="num">{r.inRange ? shortBaht(r.sat / 100) : "-"}</b>
                    <i style={{ width: `${r.inRange && max > 0 ? Math.max(4, Math.round((r.sat / max) * 100)) : 0}%` }} />
                </button>
            ))}
        </div>
    );
}

/**
 * ใช้ไปเท่าไร: ปฏิทินรายจ่าย ขยายดูเป็น วัน / เดือน / ปี ได้
 * เดือนเปลี่ยนที่ตัวเลือกเดือนของแอปตัวเดียวกัน (month/onMonth) ปีใช้ข้อมูล 12 เดือนล่าสุด (โหลดตอนเปิดดูแบบปีเท่านั้น)
 */
export function SpendCalendar({ model, month, onMonth, since, nowMonth, series, onNeedYear = () => {} }) {
    const [view, setView] = useState("month");
    const [day, setDay] = useState(1);
    useEffect(() => { if (view === "year") onNeedYear(); }, [view]);
    const days = model.calendarDays || [];
    const year = Number(month.slice(0, 4));
    const topDay = days.reduce((a, d) => (d.satang > (a ? a.satang : 0) ? d : a), null);
    const goMonth = (delta) => { const t = shiftMonth(month, delta); if (t >= since && t <= nowMonth) onMonth(t); };
    const goYear = (delta) => {
        const mm = month.slice(5, 7);
        let t = `${year + delta}-${mm}`;
        if (t < since) t = since; else if (t > nowMonth) t = nowMonth;
        onMonth(t);
    };
    const prevYearOk = since < `${year}-01`;
    const nextYearOk = `${year + 1}-01` <= nowMonth;
    const total = (series || []).filter((s) => s.month.startsWith(String(year))).reduce((a, s) => a + s.spentSat, 0);
    const counted = (series || []).filter((s) => s.month.startsWith(String(year)) && s.month >= since && s.month <= nowMonth).length;

    function pickDay(d) { setDay(d); setView("day"); }
    function pickMonth(key) { onMonth(key); setView("month"); }
    function changeView(v) {
        if (v === "day" && view !== "day") { const t = days.find((d) => d.today); setDay(t ? t.day : topDay ? topDay.day : 1); }
        setView(v);
    }

    return (
        <section class="card sc" aria-label="ปฏิทินรายจ่าย">
            <SectionTitle icon="calendar" title="ใช้ไปเท่าไร" note="รวมรายจ่ายส่วนตัวและส่วนของฉันในกลุ่ม" />
            <div class="seg sc-seg" role="group" aria-label="ดูเป็น">
                {[["day", "วัน"], ["month", "เดือน"], ["year", "ปี"]].map(([k, l]) => (
                    <button type="button" key={k} class={view === k ? "on" : ""} aria-pressed={view === k} onClick={() => changeView(k)}>{l}</button>
                ))}
            </div>

            {view === "year" ? (
                <>
                    <div class="sc-nav">
                        <button type="button" class="icon-btn" aria-label="ปีก่อนหน้า" disabled={!prevYearOk} onClick={() => goYear(-1)}><Icon name="left" size={16} /></button>
                        <b class="num">ปี {year + 543}</b>
                        <button type="button" class="icon-btn" aria-label="ปีถัดไป" disabled={!nextYearOk} onClick={() => goYear(1)}><Icon name="right" size={16} /></button>
                    </div>
                    {series ? (
                        <>
                            <div class="sc-sum">
                                <div><span class="lbl">ใช้ไปทั้งปี</span><b class="num pay">{baht(total / 100)}</b></div>
                                <div><span class="lbl">เฉลี่ยต่อเดือน</span><b class="num">{baht(counted > 0 ? total / 100 / counted : 0)}</b></div>
                            </div>
                            <YearView year={year} series={series} since={since} nowMonth={nowMonth} onPick={pickMonth} />
                        </>
                    ) : <p class="empty" aria-busy="true">กำลังโหลดข้อมูลทั้งปี</p>}
                </>
            ) : (
                <>
                    <div class="sc-nav">
                        <button type="button" class="icon-btn" aria-label="เดือนก่อนหน้า" disabled={month <= since} onClick={() => goMonth(-1)}><Icon name="left" size={16} /></button>
                        <b class="num">{monthFullLabel(month)}</b>
                        <button type="button" class="icon-btn" aria-label="เดือนถัดไป" disabled={month >= nowMonth} onClick={() => goMonth(1)}><Icon name="right" size={16} /></button>
                    </div>
                    {view === "month" ? (
                        <>
                            <div class="sc-sum">
                                <div><span class="lbl">ใช้ไปทั้งเดือน</span><b class="num pay">{baht(model.spentSat / 100)}</b></div>
                                <div><span class="lbl">เฉลี่ยต่อวัน</span><b class="num">{baht(model.average)}</b></div>
                            </div>
                            <MonthGrid month={month} days={days} onPick={pickDay} />
                            {topDay ? <p class="lbl sc-foot">ใช้มากสุดวันที่ {topDay.day} ({baht(topDay.satang / 100)}) แตะวันเพื่อดูรายการ</p> : <p class="lbl sc-foot">ยังไม่มีรายจ่ายในเดือนนี้</p>}
                        </>
                    ) : <DayView month={month} days={days} day={day} onDay={setDay} />}
                </>
            )}
        </section>
    );
}

export function HomePage({ model, series, month, onMonth, onAddIncome, profiles = [], today = "", nowMonth = "", since = "", onNeedYear }) {
    const now = nowMonth || month;
    return (
        <div class="home-grid">
            <div class="col">
                <Hero m={model} onAddIncome={onAddIncome} today={today} />
                <OweCards m={model} profiles={profiles} month={month} nowMonth={now} />
                <Categories cats={model.categories} />
            </div>
            <div class="col">
                <SpendCalendar model={model} month={month} onMonth={onMonth} since={since || shiftMonth(now, -11)} nowMonth={now} series={series} onNeedYear={onNeedYear} />
            </div>
        </div>
    );
}
