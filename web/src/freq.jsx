// รายการที่จ่ายเป็นรอบ (เจ้าของเลือกแบบ B: วงกลมปี) ทุกเดือน / 3 เดือน / 6 เดือน / ทุกปี
// - YearRing: วงกลมแบ่ง 12 เดือน ช่องที่ถึงรอบเป็นสีทานตะวัน ตรงกลางบอกยอดต่อปี
// - FreqPicker: ปุ่มเลือกรอบ 4 ปุ่ม (บอกจำนวนครั้งต่อปี) · FreqBox = วงกลม + ปุ่ม + ครั้งถัดไป (ใช้ในหน้าบันทึกและหน้าแก้)
// - YearBars: กราฟ 12 เดือน (รายเดือนสีเทา รายการเป็นรอบสีทานตะวัน) · MonthStrip: แถบเดือนเล็กในแถวรายการ
// ตรรกะรอบอยู่ที่ lib/recurrence.mjs ที่เดียว (ใช้ร่วมกับ cron)
import { isDueMonth, dueMonths, timesPerYear, TH_MONTH } from "../../lib/recurrence.mjs";
import { baht } from "./model.js";

export const FREQS = [
    { every: 1, label: "ทุกเดือน", times: "12 ครั้ง" },
    { every: 3, label: "3 เดือน", times: "4 ครั้ง" },
    { every: 6, label: "6 เดือน", times: "2 ครั้ง" },
    { every: 12, label: "ทุกปี", times: "1 ครั้ง" }
];
const money = (n) => baht(n, { decimals: Math.round(n * 100) % 100 ? 2 : 0 });
const whole = (n) => baht(Math.round(n)); // กราฟทั้งปี: ปัดเป็นบาท อ่านง่าย

function arc(r, a0, a1) {
    const p = (a) => [Math.cos(((a - 90) * Math.PI) / 180) * r, Math.sin(((a - 90) * Math.PI) / 180) * r];
    const [x0, y0] = p(a0);
    const [x1, y1] = p(a1);
    return `M ${x0.toFixed(2)} ${y0.toFixed(2)} A ${r} ${r} 0 0 1 ${x1.toFixed(2)} ${y1.toFixed(2)}`;
}

/** วงกลมปี: ช่อง 12 เดือนเริ่มจาก ม.ค. ด้านบน ช่องที่จ่ายเป็นสีทานตะวัน */
export function YearRing({ every = 1, startMonth = 1, day = 1, amount = 0, size = 120 }) {
    const t = { every, startMonth };
    const months = dueMonths(t);
    const perYear = amount * timesPerYear(t);
    const sub = every === 1 ? `ทุกวันที่ ${day}` : every === 12 ? `${day} ${TH_MONTH[startMonth - 1]}` : `${months.length} ครั้ง วันที่ ${day}`;
    return (
        <svg class="yring" viewBox="0 0 120 120" width={size} height={size} role="img" aria-label={`จ่ายเดือน ${months.map((m) => TH_MONTH[m - 1]).join(" ")} ปีละ ${money(perYear)}`}>
            <g transform="translate(60 60)">
                {Array.from({ length: 12 }, (_, i) => (
                    <path key={i} d={arc(46, i * 30 + 2, (i + 1) * 30 - 2)} class={months.includes(i + 1) ? "on" : ""} />
                ))}
                <text y="-6" text-anchor="middle" class="yr-l">ปีละ</text>
                <text y="11" text-anchor="middle" class="yr-v">{amount > 0 ? money(perYear) : "-"}</text>
                <text y="26" text-anchor="middle" class="yr-s">{sub}</text>
            </g>
        </svg>
    );
}

export function FreqPicker({ every, onChange, idLabel }) {
    return (
        <div class="fqpick" role="group" aria-labelledby={idLabel}>
            {FREQS.map((f) => (
                <button type="button" key={f.every} class={every === f.every ? "on" : ""} aria-pressed={every === f.every} onClick={() => onChange(f.every)}>
                    <b>{f.label}</b><small>{f.times}</small>
                </button>
            ))}
        </div>
    );
}

/** วันที่ครั้งถัดไป (ตั้งแต่วันนี้) ของรอบนี้ คืน { date, days } */
export function nextDue({ every, startMonth, day }, today) {
    const [y0, m0] = today.split("-").map(Number);
    for (let k = 0; k < 24; k++) {
        const y = y0 + Math.floor((m0 - 1 + k) / 12);
        const m = ((m0 - 1 + k) % 12) + 1;
        const month = `${y}-${String(m).padStart(2, "0")}`;
        if (!isDueMonth({ every, startMonth }, month)) continue;
        const last = new Date(Date.UTC(y, m, 0)).getUTCDate();
        const date = `${month}-${String(Math.min(day, last)).padStart(2, "0")}`;
        if (date < today) continue;
        return { date, days: Math.round((Date.parse(date) - Date.parse(today)) / 86400000) };
    }
    return null;
}

/** วงกลมปี + ปุ่มรอบ + ครั้งถัดไป (เดือนเริ่ม = เดือนของวันที่ในฟอร์ม) */
export function FreqBox({ every, onEvery, date, amount = 0, today, startMonth: sm }) {
    const startMonth = sm || Number(String(date).slice(5, 7)) || 1;
    const day = Number(String(date).slice(8, 10)) || 1;
    // รายการที่บันทึกตอนนี้คือครั้งแรก (วันที่ในฟอร์ม) ครั้งถัดไป = อีก every เดือน
    const nextDate = sm ? (nextDue({ every, startMonth, day }, today) || {}).date : addMonths(date, every);
    const nd = nextDate ? { date: nextDate, days: Math.max(0, Math.round((Date.parse(nextDate) - Date.parse(today)) / 86400000)) } : null;
    return (
        <div class="fqbox">
            <div class="fqrow">
                <YearRing every={every} startMonth={startMonth} day={day} amount={amount} size={112} />
                <FreqPicker every={every} onChange={onEvery} idLabel="fq-l" />
            </div>
            {nd && (
                <div class="fqnext num">
                    <span class="fqcal"><b>{TH_MONTH[Number(nd.date.slice(5, 7)) - 1]}</b><span>{Number(nd.date.slice(8, 10))}</span></span>
                    <span><b>ครั้งถัดไป{nd.days === 0 ? " วันนี้" : ` อีก ${nd.days} วัน`}</b><small>{amount > 0 && every > 1 ? `เฉลี่ยเดือนละ ${money((amount * timesPerYear({ every })) / 12)}` : "ระบบสร้างรายการให้เองเมื่อถึงรอบ"}</small></span>
                </div>
            )}
        </div>
    );
}

export function addMonths(date, n) {
    const [y, m, d] = String(date).split("-").map(Number);
    const t = new Date(Date.UTC(y, m - 1 + n, 1));
    const last = new Date(Date.UTC(t.getUTCFullYear(), t.getUTCMonth() + 1, 0)).getUTCDate();
    return `${t.getUTCFullYear()}-${String(t.getUTCMonth() + 1).padStart(2, "0")}-${String(Math.min(d || 1, last)).padStart(2, "0")}`;
}

/** แถบเดือนเล็ก 12 ช่องในแถวรายการ (เดือนที่จ่ายสีทานตะวัน) */
export function MonthStrip({ t }) {
    const ms = dueMonths(t);
    return <span class="mstrip" aria-hidden="true">{Array.from({ length: 12 }, (_, i) => <i key={i} class={ms.includes(i + 1) ? "on" : ""} />)}</span>;
}

/**
 * กราฟค่าใช้จ่ายประจำทั้งปี: แต่ละเดือน = รายเดือน (เทา) + รายการเป็นรอบที่ถึงรอบเดือนนั้น (ทานตะวัน)
 * items = [{ amount (ยอดของฉัน บาท), every, startMonth }] · nowMonth = 1..12 (ไฮไลต์เดือนนี้)
 */
export function YearBars({ items, nowMonth = 0 }) {
    const monthly = items.filter((t) => (Number(t.every) || 1) === 1).reduce((a, t) => a + (Number(t.amount) || 0), 0);
    const rounds = items.filter((t) => (Number(t.every) || 1) > 1);
    const cols = Array.from({ length: 12 }, (_, i) => {
        const r = rounds.filter((t) => isDueMonth(t, `2000-${String(i + 1).padStart(2, "0")}`)).reduce((a, t) => a + (Number(t.amount) || 0), 0);
        return { m: monthly, r, total: monthly + r };
    });
    const max = Math.max(1, ...cols.map((c) => c.total));
    const peak = cols.reduce((best, c, i) => (c.r > 0 && c.total > (cols[best] ? cols[best].total : 0) ? i : best), -1);
    const roundYear = rounds.reduce((a, t) => a + (Number(t.amount) || 0) * timesPerYear(t), 0);
    return (
        <div class="ybars">
            <div class="ybars-sum num">
                <div><span class="lbl">ทุกเดือน</span><b>{whole(monthly)}</b></div>
                <div><span class="lbl">เป็นรอบ (ต่อปี)</span><b>{whole(roundYear)}</b></div>
            </div>
            <div class="ybars-g num" role="img" aria-label={`ค่าใช้จ่ายประจำแต่ละเดือน สูงสุดเดือน ${peak >= 0 ? TH_MONTH[peak] : "-"}`}>
                {cols.map((c, i) => (
                    <span class="yb" key={i}>
                        {i === peak && <span class="yb-t">{whole(c.total)}</span>}
                        <span class="yb-col">
                            {c.r > 0 && <i class="r" style={{ height: `${(c.r / max) * 100}%` }} />}
                            <i style={{ height: `${Math.max(c.m > 0 ? 3 : 0, (c.m / max) * 100)}%` }} />
                        </span>
                        <small class={nowMonth === i + 1 ? "now" : ""}>{TH_MONTH[i]}</small>
                    </span>
                ))}
            </div>
            <div class="ybars-lg"><span>ทุกเดือน</span><span class="r">เป็นรอบ</span></div>
        </div>
    );
}
