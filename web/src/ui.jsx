// ส่วนประกอบหน้าตาที่ใช้ร่วมกันทุกหน้า
import { useEffect, useRef, useState, useMemo } from "preact/hooks";
import { Icon, Mark } from "./icons.jsx";
import { shiftMonth, monthLabel, monthFullLabel, monthShort, daysInMonth, TH_MONTHS } from "./model.js";

export const TABS = [
    { key: "home", label: "หน้าแรก", icon: "home" },
    { key: "list", label: "รายการ", icon: "list" },
    { key: "clear", label: "เคลียร์เงิน", icon: "swap" },
    { key: "me", label: "ฉัน", icon: "user" }
];

const TH_DAYS = ["วันอาทิตย์", "วันจันทร์", "วันอังคาร", "วันพุธ", "วันพฤหัสบดี", "วันศุกร์", "วันเสาร์"];

/** ป้ายวันที่แบบปฏิทินบนการ์ดสรุปของทุกหน้า: เดือนนี้แสดงวันนี้ + วันในสัปดาห์ เดือนอื่นแสดงจำนวนวันของเดือนนั้น + "ทั้งเดือน" */
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

const PAGE_ORDER = ["home", "list", "clear", "me"];

/** ห่อเนื้อหาหน้า: เปลี่ยนหน้าแล้วเนื้อหาใหม่เลื่อนเข้า (ไปแท็บถัดไป = จากขวา, ย้อนกลับ = จากซ้าย) */
export function PageSwap({ page, children }) {
    const prev = useRef(page);
    const from = prev.current;
    useEffect(() => { prev.current = page; }, [page]);
    const dir = from === page ? "" : PAGE_ORDER.indexOf(page) > PAGE_ORDER.indexOf(from) ? "dir-r" : "dir-l";
    return <div class={`page-swap ${dir}`.trim()} key={page}>{children}</div>;
}

export function MonthPicker({ month, onChange, min, max }) {
    return (
        <div class="month-wrap">
            {month !== max && <button type="button" class="btn sm ghost" onClick={() => onChange(max)}>เดือนนี้</button>}
            <div class="month" role="group" aria-label="เลือกเดือน">
                <button type="button" aria-label="เดือนก่อนหน้า" disabled={month <= min} onClick={() => onChange(shiftMonth(month, -1))}><Icon name="left" size={16} /></button>
                <span class="num" aria-live="polite">{monthLabel(month)}</span>
                <button type="button" aria-label="เดือนถัดไป" disabled={month >= max} onClick={() => onChange(shiftMonth(month, 1))}><Icon name="right" size={16} /></button>
            </div>
        </div>
    );
}

export function SectionTitle({ icon, title, note }) {
    return (
        <div class="sec-t">
            <span class="ico"><Icon name={icon} /></span>
            <div><h2>{title}</h2>{note && <p>{note}</p>}</div>
        </div>
    );
}

/** สีพื้นรูปตัวอักษรของแต่ละคน (คงที่ตามชื่อ) 0-4 */
export function tintOf(name) {
    let h = 0;
    for (const ch of String(name || "")) h = (h * 31 + ch.codePointAt(0)) % 997;
    return h % 5;
}

/** รูปคนซ้อนกัน (ใช้แทนรายชื่อยาวๆ) แสดงสูงสุด max คน ที่เหลือขึ้น +N */
/** รูปคนจ่าย (วงทานตะวัน) */
export const PayerAv = ({ name, pictures = {} }) => <span class="payer-av" title={`${name} จ่าย`}><Avatar name={name} pictureUrl={pictures[name]} size="xs" /></span>;
/** คนจ่าย -> คนหาร (รูปซ้อน สูงสุด 3 รูป ที่เหลือ +N) ใช้ในหน้ารายการ การ์ดบิลถัดไป และปฏิทินบิล */
export const PayFlow = ({ payer, people = [], pictures = {} }) => (
    <span class="flow" aria-label={`${payer} จ่าย หารกับ ${people.join(", ")}`}>
        <PayerAv name={payer} pictures={pictures} /><Icon name="right" size={12} class="flow-arr" /><AvatarStack names={people} pictures={pictures} max={3} size="xs" />
    </span>
);

export function AvatarStack({ names = [], pictures = {}, max = 3, size = "sm" }) {
    const shown = names.slice(0, max);
    return (
        <span class="avstack" aria-hidden="true">
            {shown.map((n) => <Avatar key={n} name={n} pictureUrl={pictures[n]} size={size} />)}
            {names.length > max && <span class="avstack-more num">+{names.length - max}</span>}
        </span>
    );
}

export function Avatar({ name, pictureUrl, size = "" }) {
    const [failed, setFailed] = useState(false);
    const initial = [...String(name || "?")][0];
    const cls = `av tint${tintOf(name)} ${size}`.trim();
    if (pictureUrl && !failed) {
        return (
            <img
                src={pictureUrl}
                alt={name ? `รูปของ ${name}` : ""}
                class={cls}
                onError={() => setFailed(true)}
                loading="lazy"
            />
        );
    }
    return <div class={cls} aria-hidden="true">{initial}</div>;
}

export function ThemeToggle() {
    const [theme, setTheme] = useState(() => {
        if (typeof document === "undefined") return "light";
        const saved = localStorage.getItem("dm:theme");
        if (saved === "dark" || saved === "light") return saved;
        return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    });

    const toggle = () => {
        const next = theme === "dark" ? "light" : "dark";
        setTheme(next);
        document.documentElement.setAttribute("data-theme", next);
        try { localStorage.setItem("dm:theme", next); } catch (e) {}
    };

    const isDark = theme === "dark";
    return (
        <button
            type="button"
            class="theme-toggle"
            aria-label={isDark ? "เปลี่ยนเป็นโหมดสว่าง" : "เปลี่ยนเป็นโหมดมืด"}
            title={isDark ? "เปลี่ยนเป็นโหมดสว่าง" : "เปลี่ยนเป็นโหมดมืด"}
            onClick={toggle}
        >
            <Icon name={isDark ? "sun" : "moon"} size={18} />
        </button>
    );
}

export function CustomSelect({ label, value, options, onChange, icon = "calendar", title, id }) {
    const [open, setOpen] = useState(false);
    const selected = (options || []).find((o) => o.value === value) || (options && options[0]) || {};

    return (
        <div class="field">
            {label && <label for={id}>{label}</label>}
            <button
                type="button"
                id={id}
                class="c-select-trigger"
                onClick={() => setOpen(true)}
                aria-haspopup="dialog"
            >
                {icon && <span class="ico sm"><Icon name={icon} size={16} /></span>}
                <span class="c-select-val num">{selected.label || value}</span>
                <Icon name="down" size={16} class="mute" />
            </button>
            {open && (
                <Sheet title={title || label || "เลือกรายการ"} onClose={() => setOpen(false)}>
                    <div class="c-select-list">
                        {(options || []).map((opt) => {
                            const isSel = opt.value === value;
                            return (
                                <button
                                    type="button"
                                    key={opt.value}
                                    class={`c-select-item ${isSel ? "on" : ""}`}
                                    onClick={() => {
                                        onChange(opt.value);
                                        setOpen(false);
                                    }}
                                >
                                    <span class="c-select-item-text num">{opt.label}</span>
                                    {isSel && <Icon name="check" size={18} class="rcv" />}
                                </button>
                            );
                        })}
                    </div>
                </Sheet>
            )}
        </div>
    );
}

export function CalendarSheet({ value, max, min = "", today, onSelect, onClose }) {
    const [viewMonth, setViewMonth] = useState(() => (value || today).slice(0, 7));
    const [sel, setSel] = useState(value || today);

    const [y, m] = viewMonth.split("-").map(Number);
    const totalDays = daysInMonth(viewMonth);
    const firstDow = new Date(Date.UTC(y, m - 1, 1)).getUTCDay();

    const cells = [];
    for (let i = 0; i < firstDow; i++) cells.push(null);
    for (let d = 1; d <= totalDays; d++) {
        cells.push(`${viewMonth}-${String(d).padStart(2, "0")}`);
    }

    const DOW = ["อา", "จ", "อ", "พ", "พฤ", "ศ", "ส"];

    return (
        <Sheet title="ปฏิทิน" onClose={onClose}>
            <div class="cal-box">
                <div class="cal-hd">
                    <button
                        type="button"
                        class="icon-btn"
                        aria-label="เดือนก่อนหน้า"
                        disabled={Boolean(min) && shiftMonth(viewMonth, -1).slice(0, 7) < min.slice(0, 7)}
                        onClick={() => setViewMonth(shiftMonth(viewMonth, -1))}
                    >
                        <Icon name="left" size={16} />
                    </button>
                    <span class="cal-month-title num">{monthFullLabel(viewMonth)}</span>
                    <button
                        type="button"
                        class="icon-btn"
                        aria-label="เดือนถัดไป"
                        disabled={max && shiftMonth(viewMonth, 1).slice(0, 7) > max.slice(0, 7)}
                        onClick={() => setViewMonth(shiftMonth(viewMonth, 1))}
                    >
                        <Icon name="right" size={16} />
                    </button>
                </div>

                <div class="cal-grid" role="grid">
                    <div class="cal-dow-row" role="row">
                        {DOW.map((w) => <span key={w} class="cal-dow" role="columnheader">{w}</span>)}
                    </div>
                    <div class="cal-days-grid">
                        {cells.map((dateStr, idx) => {
                            if (!dateStr) return <span key={`empty-${idx}`} class="cal-day empty" />;
                            const dayNum = Number(dateStr.slice(8, 10));
                            const isToday = dateStr === today;
                            const isSelected = dateStr === sel;
                            const isFuture = (max && dateStr > max) || (min && dateStr < min);

                            return (
                                <button
                                    type="button"
                                    key={dateStr}
                                    class={`cal-day-btn num ${isSelected ? "on" : ""} ${isToday ? "today" : ""}`}
                                    disabled={isFuture}
                                    onClick={() => setSel(dateStr)}
                                >
                                    {dayNum}
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div class="cal-actions">
                    <button
                        type="button"
                        class="btn ghost"
                        onClick={() => { setSel(today); setViewMonth(today.slice(0, 7)); }}
                    >
                        วันนี้
                    </button>
                    <button
                        type="button"
                        class="btn"
                        onClick={() => onSelect(sel)}
                    >
                        ยืนยัน ({Number(sel.slice(8, 10))} {TH_MONTHS[Number(sel.slice(5, 7)) - 1]})
                    </button>
                </div>
            </div>
        </Sheet>
    );
}

export function DatePickerField({ id, label = "วันที่", value, onChange, max, min = "", today }) {
    const [open, setOpen] = useState(false);
    
    // Calculate yesterday
    const [ty, tm, td] = today.split("-").map(Number);
    const yesterdayDate = new Date(Date.UTC(ty, tm - 1, td - 1));
    const yesterday = `${yesterdayDate.getUTCFullYear()}-${String(yesterdayDate.getUTCMonth() + 1).padStart(2, "0")}-${String(yesterdayDate.getUTCDate()).padStart(2, "0")}`;

    const isToday = value === today;
    const isYesterday = value === yesterday;

    const [vy, vm, vd] = (value || today).split("-").map(Number);
    const thYear = vy + 543;
    const thMonth = TH_MONTHS[vm - 1] || "";
    const displayLabel = isToday
        ? `วันนี้ · ${vd} ${thMonth} ${thYear}`
        : isYesterday
        ? `เมื่อวาน · ${vd} ${thMonth} ${thYear}`
        : `${vd} ${thMonth} ${thYear}`;

    return (
        <div class="field">
            <span class="fl" id={`${id}-l`}>{label}</span>
            <div class="date-pick-wrap">
                <button
                    type="button"
                    id={id}
                    class="date-trigger"
                    aria-labelledby={`${id}-l`}
                    onClick={() => setOpen(true)}
                >
                    <span class="ico sm"><Icon name="calendar" size={16} /></span>
                    <span class="date-trigger-text num">{displayLabel}</span>
                    <span class="date-trigger-tag">ปฏิทิน</span>
                </button>
                <div class="date-quick-chips">
                    <button
                        type="button"
                        class={`date-quick-btn ${isToday ? "on" : ""}`}
                        onClick={() => onChange(today)}
                    >
                        วันนี้
                    </button>
                    <button
                        type="button"
                        class={`date-quick-btn ${isYesterday ? "on" : ""}`}
                        disabled={Boolean(min) && yesterday < min}
                        onClick={() => onChange(yesterday)}
                    >
                        เมื่อวาน
                    </button>
                    <button
                        type="button"
                        class={`date-quick-btn ${!isToday && !isYesterday ? "on" : ""}`}
                        onClick={() => setOpen(true)}
                    >
                        แก้ไขวันที่
                    </button>
                </div>
            </div>
            {open && (
                <CalendarSheet
                    value={value || today}
                    max={max || today}
                    min={min}
                    today={today}
                    onSelect={(d) => { onChange(d); setOpen(false); }}
                    onClose={() => setOpen(false)}
                />
            )}
        </div>
    );
}

/** กล่องเลื่อนขึ้น (มือถือ) / กล่องกลางจอ (คอมพิวเตอร์): ปิดด้วย Esc หรือแตะพื้นหลัง คืนโฟกัสให้ปุ่มที่เปิด และล็อกการเลื่อนหน้าหลัง */
// หน้าต่างที่เปิดซ้อนกัน (เช่น ปฏิทินในฟอร์มบิล): กด Esc ปิดเฉพาะอันบนสุด ไม่ปิดทุกอันพร้อมกัน
const sheetStack = [];

export function Sheet({ title, onClose, children, as = "div", onSubmit, action, class: cls = "" }) {
    const ref = useRef(null);
    useEffect(() => {
        const opener = document.activeElement;
        const me = {};
        sheetStack.push(me);
        const onKey = (e) => { if (e.key === "Escape" && sheetStack[sheetStack.length - 1] === me) onClose(); };
        document.addEventListener("keydown", onKey);
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const first = ref.current && ref.current.querySelector("input, select, textarea");
        (first || ref.current).focus({ preventScroll: true });
        return () => {
            const i = sheetStack.indexOf(me);
            if (i >= 0) sheetStack.splice(i, 1);
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = prev;
            if (opener && opener.focus) opener.focus({ preventScroll: true });
        };
    }, []);
    const Tag = as;
    return (
        <div class="scrim" onClick={(e) => e.target === e.currentTarget && onClose()}>
            <Tag class={`sheet ${cls}`.trim()} role="dialog" aria-modal="true" aria-label={title} tabIndex={-1} ref={ref} onSubmit={onSubmit}>
                <div class="grab" aria-hidden="true" />
                <div class="sheet-hd">
                    <h2>{title}</h2>
                    {action}
                    <button type="button" class="icon-btn" onClick={onClose} aria-label="ปิด"><Icon name="close" size={18} /></button>
                </div>
                {children}
            </Tag>
        </div>
    );
}

/** ปุ่มลบแบบยืนยันสองจังหวะ: แตะครั้งแรกขึ้น "ลบ / ยกเลิก" ถ้าไม่ทำอะไร 5 วินาทีจะกลับเอง */
export function DeleteButton({ label, onConfirm, verb = "ลบ", busyText = "กำลังลบ", keepText = "ยกเลิก", icon = "trash", danger = true }) {
    const [state, setState] = useState("idle"); // idle | confirm | busy
    useEffect(() => {
        if (state !== "confirm") return undefined;
        const t = setTimeout(() => setState("idle"), 5000);
        return () => clearTimeout(t);
    }, [state]);
    if (state === "idle") return <button type="button" class="icon-btn" aria-label={`${verb} ${label}`} onClick={() => setState("confirm")}><Icon name={icon} size={17} /></button>;
    return (
        <span class="confirm">
            <button type="button" class={`btn sm ${danger ? "danger" : ""}`} disabled={state === "busy"} onClick={async () => { setState("busy"); try { await onConfirm(); } finally { setState("idle"); } }}>{state === "busy" ? busyText : verb}</button>
            <button type="button" class="btn sm ghost" disabled={state === "busy"} onClick={() => setState("idle")}>{keepText}</button>
        </span>
    );
}

/** โหลดคอมโพเนนต์เมื่อต้องใช้ (แยกไฟล์ ลดขนาดที่ต้องโหลดตอนเปิดแอป) load = () => import("./x.jsx") */
export function Lazy({ load, name, fallback = null, ...props }) {
    // จำว่าโหลดคอมโพเนนต์ "ชื่อไหน" มา เพราะ Preact ใช้ Lazy ตัวเดิมซ้ำเมื่อสลับแท็บ ถ้าไม่เช็กชื่อจะเอาหน้าเก่ามาแสดงกับข้อมูลของหน้าใหม่
    const [mod, setMod] = useState(null); // { name, C }
    useEffect(() => {
        let on = true;
        load().then((m) => { if (on && m && m[name]) setMod({ name, C: m[name] }); }).catch(() => {});
        return () => { on = false; };
    }, [name]);
    if (!mod || mod.name !== name) return fallback;
    const C = mod.C;
    return <C {...props} />;
}

/** กล่องพับได้: ปิดไว้ก่อน เห็นแค่หัวข้อกับสรุปบรรทัดเดียว แตะเพื่อเปิดดูรายการ */
export function Collapsible({ icon, title, summary, children, defaultOpen = false }) {
    const [open, setOpen] = useState(defaultOpen);
    return (
        <section class="card collapsible">
            <button type="button" class="coll-head" aria-expanded={open} onClick={() => setOpen(!open)}>
                <span class="ico accent"><Icon name={icon} /></span>
                <span class="grow"><b>{title}</b><small>{summary}</small></span>
                <Icon name="down" size={16} class={`coll-chev ${open ? "up" : ""}`} />
            </button>
            {open && <div class="coll-body">{children}</div>}
        </section>
    );
}

/** โครงระหว่างรอข้อมูล: รูปร่างใกล้ของจริง ไม่ใช่ข้อความลอยๆ */
export function Skeleton({ blocks = 3 }) {
    return (
        <div class="home-grid" aria-busy="true" aria-label="กำลังโหลดข้อมูล">
            <div class="col">{Array.from({ length: Math.ceil(blocks / 2) }, (_, i) => <div class="card sk" key={i} style={{ height: i === 0 ? "168px" : "220px" }} />)}</div>
            <div class="col">{Array.from({ length: Math.floor(blocks / 2) }, (_, i) => <div class="card sk" key={i} style={{ height: "200px" }} />)}</div>
        </div>
    );
}

export function ErrorState({ onRetry }) {
    return (
        <div class="card state" role="alert">
            <span class="ico"><Icon name="alert" /></span>
            <div><b>โหลดข้อมูลไม่สำเร็จ</b><p>ตรวจอินเทอร์เน็ตแล้วลองใหม่ ถ้ายังไม่ได้ อาจเป็นเพราะโควต้าฐานข้อมูลของวันนี้เต็ม</p></div>
            <button type="button" class="btn sm" onClick={onRetry}>ลองใหม่</button>
        </div>
    );
}

/** โครงหน้า: เมนูข้าง (คอมพิวเตอร์) / แถบล่าง + ปุ่มลอย (มือถือ) */
export function Shell({ tab, onTab, userName, userPicture, tools, onAdd, children }) {
    const title = (TABS.find((t) => t.key === tab) || TABS[0]).label;
    return (
        <div class="app">
            <a class="skip" href="#main">ข้ามไปเนื้อหา</a>
            <aside class="side">
                <div class="brand"><Mark size={34} />Dept Money</div>
                <nav aria-label="เมนูหลัก">
                    {TABS.map((t) => <button type="button" key={t.key} class={`snav ${tab === t.key ? "on" : ""}`} aria-current={tab === t.key ? "page" : undefined} onClick={() => onTab(t.key)}><Icon name={t.icon} />{t.label}</button>)}
                </nav>
                <button type="button" class="btn side-add" onClick={onAdd}><Icon name="plus" />บันทึกรายการ</button>
                <div class="side-me"><Avatar name={userName} pictureUrl={userPicture} /><span>{userName}</span></div>
            </aside>
            <main class="page" id="main">
                <header class="top">
                    <div class="brand mobile-only" aria-hidden="true"><Mark size={30} />Dept Money</div>
                    <h1 class="page-title">{title}</h1>
                    <div class="top-actions">
                        {tools}
                        <ThemeToggle />
                    </div>
                </header>
                {children}
            </main>
            <button type="button" class="fab" onClick={onAdd}><Icon name="plus" />บันทึก</button>
            <nav class="tabbar" aria-label="เมนูหลัก"><div class="tabbar-in">
                {TABS.map((t) => <button type="button" key={t.key} class={`tab ${tab === t.key ? "on" : ""}`} aria-current={tab === t.key ? "page" : undefined} onClick={() => onTab(t.key)}><Icon name={t.icon} />{t.label}</button>)}
            </div></nav>
        </div>
    );
}
