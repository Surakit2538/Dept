// ส่วนประกอบหน้าตาที่ใช้ร่วมกันทุกหน้า
import { useEffect, useRef, useState } from "preact/hooks";
import { Icon, Mark } from "./icons.jsx";
import { shiftMonth, monthLabel } from "./model.js";

export const TABS = [
    { key: "home", label: "หน้าแรก", icon: "home" },
    { key: "bills", label: "บิล", icon: "bill" },
    { key: "clear", label: "เคลียร์เงิน", icon: "swap" },
    { key: "wallet", label: "กระเป๋า", icon: "wallet" },
    { key: "me", label: "ฉัน", icon: "user" }
];

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

export function Avatar({ name }) {
    return <div class="av" aria-hidden="true">{[...String(name || "?")][0]}</div>;
}

/** กล่องเลื่อนขึ้น (มือถือ) / กล่องกลางจอ (คอมพิวเตอร์): ปิดด้วย Esc หรือแตะพื้นหลัง คืนโฟกัสให้ปุ่มที่เปิด และล็อกการเลื่อนหน้าหลัง */
export function Sheet({ title, onClose, children, as = "div", onSubmit, action }) {
    const ref = useRef(null);
    useEffect(() => {
        const opener = document.activeElement;
        const onKey = (e) => { if (e.key === "Escape") onClose(); };
        document.addEventListener("keydown", onKey);
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        const first = ref.current && ref.current.querySelector("input, select, textarea");
        (first || ref.current).focus({ preventScroll: true });
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = prev;
            if (opener && opener.focus) opener.focus({ preventScroll: true });
        };
    }, []);
    const Tag = as;
    return (
        <div class="scrim" onClick={(e) => e.target === e.currentTarget && onClose()}>
            <Tag class="sheet" role="dialog" aria-modal="true" aria-label={title} tabIndex={-1} ref={ref} onSubmit={onSubmit}>
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
export function Shell({ tab, onTab, userName, tools, onAdd, children }) {
    const title = (TABS.find((t) => t.key === tab) || TABS[0]).label;
    return (
        <div class="app">
            <a class="skip" href="#main">ข้ามไปเนื้อหา</a>
            <aside class="side">
                <div class="brand"><Mark size={28} />Dept Money</div>
                <nav aria-label="เมนูหลัก">
                    {TABS.map((t) => <button type="button" key={t.key} class={`snav ${tab === t.key ? "on" : ""}`} aria-current={tab === t.key ? "page" : undefined} onClick={() => onTab(t.key)}><Icon name={t.icon} />{t.label}</button>)}
                </nav>
                <button type="button" class="btn side-add" onClick={onAdd}><Icon name="plus" />บันทึกรายการ</button>
                <div class="side-me"><Avatar name={userName} /><span>{userName}</span></div>
            </aside>
            <main class="page" id="main">
                <header class="top">
                    <div class="brand mobile-only" aria-hidden="true"><Mark size={24} />Dept Money</div>
                    <h1 class="page-title">{title}</h1>
                    {tools}
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
