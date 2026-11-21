// ปฏิทินบิลรายเดือน (แบบ A ที่เจ้าของเลือก): ดูทีละเดือน วันที่มีบิลขึ้นไอคอนร้าน แตะวันเพื่อดูเฉพาะวันนั้น
// ข้อมูลมาจากแม่แบบที่ตั้งให้ทำซ้ำทุกเดือน (loadBillSchedule) ไม่อ่านฐานข้อมูลเพิ่มตอนเลื่อนเดือน
import { useState, useMemo } from "preact/hooks";
import { Icon, iconFor, ItemIcon } from "./icons.jsx";
import { Sheet, PayFlow } from "./ui.jsx";
import { buildBillSchedule, billWho, baht, monthFullLabel, monthShort, shiftMonth } from "./model.js";

const DOW = ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"];
const money = (sat) => baht(sat / 100, { decimals: sat % 100 ? 2 : 0 });

/** ยอดที่แสดงของบิล: ส่วนของฉัน (กลุ่ม = "จาก ยอดเต็ม") / จ่ายแทน = ยอดเต็ม */
export function BillAmount({ b }) {
    if (b.coverFor) return <span class="num"><b>{money(b.totalSat)}</b></span>;
    return <span class="num"><b>{money(b.mySat)}</b>{b.kind === "group" && <em class="from"> จาก {money(b.totalSat)}</em>}</span>;
}

export function statusText(b) {
    if (b.status === "done") return "ตัดแล้ว";
    if (b.status === "today") return "วันนี้";
    return `อีก ${b.daysLeft} วัน`;
}

export function BillCalendarSheet({ data, me, today, onClose, pictures = {} }) {
    const nowMonth = today.slice(0, 7);
    const [month, setMonth] = useState(nowMonth);
    const [day, setDay] = useState(null);
    const sched = useMemo(() => buildBillSchedule({ me, month, today, group: data.group, personal: data.personal, cards: data.cards || [] }), [data, me, month, today]);
    const [y, m] = month.split("-").map(Number);
    const first = new Date(Date.UTC(y, m - 1, 1)).getUTCDay();
    const last = new Date(Date.UTC(y, m, 0)).getUTCDate();
    const byDay = {};
    for (const b of sched.items) (byDay[b.day] = byDay[b.day] || []).push(b);
    const todayDay = month === nowMonth ? Number(today.slice(8, 10)) : 0;
    const list = day ? byDay[day] || [] : sched.items;
    const go = (d) => { const t = shiftMonth(month, d); if (t >= shiftMonth(nowMonth, -12) && t <= shiftMonth(nowMonth, 12)) { setMonth(t); setDay(null); } };

    return (
        <Sheet title="ปฏิทินบิลรายเดือน" onClose={onClose} class="billcal">
            <div class="bc-nav">
                <button type="button" class="icon-btn" aria-label="เดือนก่อนหน้า" onClick={() => go(-1)}><Icon name="left" size={18} /></button>
                <b>{monthFullLabel(month)}</b>
                <button type="button" class="icon-btn" aria-label="เดือนถัดไป" onClick={() => go(1)}><Icon name="right" size={18} /></button>
            </div>
            <div class="bc-sum num">
                <div><span class="lbl">บิลรายเดือนทั้งหมด</span><b>{baht(Math.round(sched.totalSat / 100))}</b></div>
                <div><span class="lbl">ยังไม่ถึงวันตัด</span><b>{baht(Math.round(sched.dueSat / 100))}</b></div>
            </div>
            {sched.items.length === 0 ? (
                <p class="empty"><Icon name="calendar" size={16} />ยังไม่มีบิลรายเดือน ติ๊ก "สร้างบิลนี้ซ้ำทุกเดือน" ตอนบันทึกบิล หรือ "รายเดือน" ตอนบันทึกรายจ่ายส่วนตัว</p>
            ) : (
                <>
                    <div class="bc-grid num" role="group" aria-label={`ปฏิทินบิล ${monthFullLabel(month)}`}>
                        {DOW.map((w) => <span key={w} class="bc-dow" aria-hidden="true">{w}</span>)}
                        {Array.from({ length: first }, (_, i) => <span key={"e" + i} />)}
                        {Array.from({ length: last }, (_, i) => {
                            const d = i + 1;
                            const bills = byDay[d] || [];
                            const past = month < nowMonth || (month === nowMonth && d < todayDay);
                            const cls = `bc-day ${bills.length ? "has" : ""} ${past ? "past" : ""} ${d === todayDay ? "today" : ""} ${day === d ? "on" : ""} ${bills.length && !past ? "soon" : ""}`;
                            return (
                                <button type="button" key={d} class={cls} disabled={!bills.length} aria-pressed={day === d}
                                    aria-label={bills.length ? `วันที่ ${d}: ${bills.map((b) => b.desc).join(", ")}` : `วันที่ ${d}`}
                                    onClick={() => setDay(day === d ? null : d)}>
                                    <span>{d}</span>
                                    {bills.length > 0 && (
                                        <span class="bc-ics" aria-hidden="true">
                                            {bills.slice(0, bills.length > 2 ? 1 : 2).map((b) => <ItemIcon key={b.id} desc={b.desc} name={iconFor(b.icon)} size={18} iconSize={11} />)}
                                            {bills.length > 2 && <small>+{bills.length - 1}</small>}
                                        </span>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                    <p class="lbl bc-legend">จาง = ตัดไปแล้ว · ขอบเหลือง = ยังไม่ถึงวันตัด · แตะวันเพื่อดูเฉพาะวันนั้น</p>
                    <div class="bc-list-hd">
                        <b>{day ? `วันที่ ${day} ${monthShort(month)}` : `ทั้งเดือน · ${sched.items.length} บิล`}</b>
                        {day && <button type="button" class="link-btn" onClick={() => setDay(null)}>ดูทั้งเดือน</button>}
                    </div>
                    <ul class="plain">
                        {list.map((b) => (
                            <li class="row" key={b.id}>
                                <ItemIcon desc={b.desc} name={iconFor(b.icon)} size={38} iconSize={18} />
                                <div class="grow"><div class="t">{b.kind === "card" ? `จ่ายบัตร ${b.desc}` : b.desc}</div><div class="s">{b.kind === "card" ? billWho(b, me) : <>ทุกวันที่ {b.billingDay > b.day ? `${b.day} (สิ้นเดือน)` : b.day} · {b.kind === "group" ? <><PayFlow payer={b.payer} people={b.names || []} pictures={pictures} />{b.coverFor && " จ่ายแทน"}</> : billWho(b, me)}</>}</div></div>
                                <div class="bc-v"><BillAmount b={b} /><span class={`bc-tag ${b.status}`}>{statusText(b)}</span></div>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </Sheet>
    );
}
