// ชุดไอคอนเส้นบาง 1.8px ปลายมน (ชุดเดียวกับในหน้าเลือกแบบ) ไม่มี emoji
import { brandOf } from "./brands.js";
import { CATEGORY_LIST } from "../../lib/categories.mjs";
import { useState, useEffect } from "preact/hooks";
const P = {
    home: <><path d="M3.5 11 12 4l8.5 7" /><path d="M5.5 9.8V20h13V9.8" /><path d="M10 20v-5.5h4V20" /></>,
    bill: <><path d="M6 3.5h12v17l-3-1.8-3 1.8-3-1.8-3 1.8z" /><path d="M9 8.5h6M9 12h6" /></>,
    swap: <path d="M5 8h13l-3.2-3.2M19 16H6l3.2 3.2" />,
    wallet: <><path d="M4 7.5A2.5 2.5 0 0 1 6.5 5H18v3" /><rect x="4" y="8" width="16" height="11.5" rx="2.5" /><path d="M15.5 13.8h2.2" /></>,
    user: <><circle cx="12" cy="8.5" r="3.6" /><path d="M5 20c.7-3.6 3.4-5.6 7-5.6s6.3 2 7 5.6" /></>,
    plus: <path d="M12 5v14M5 12h14" />,
    check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
    qr: <><rect x="4" y="4" width="6" height="6" rx="1" /><rect x="14" y="4" width="6" height="6" rx="1" /><rect x="4" y="14" width="6" height="6" rx="1" /><path d="M14 14h2.5v2.5H14zM18.5 14.5v5M14.5 19.5h2" /></>,
    up: <path d="M12 19V6M6.5 11.5 12 6l5.5 5.5" />,
    down: <path d="M12 5v13M6.5 12.5 12 18l5.5-5.5" />,
    left: <path d="m14.5 6.5-5.5 5.5 5.5 5.5" />,
    right: <path d="m9.5 6.5 5.5 5.5-5.5 5.5" />,
    food: <path d="M7 3.5v7.2M4.5 3.5v5a2.5 2.5 0 0 0 5 0v-5M7 11v9.5M16.5 20.5V3.5c-2 1.2-3 3.8-3 6.5 0 1.7 1 2.6 3 2.8" />,
    car: <><path d="M5 15.5V12l1.8-4.5h10.4L19 12v3.5M5 15.5h14M5 15.5V18M19 15.5V18" /><path d="M7.5 12.5h.01M16.5 12.5h.01" /></>,
    bag: <><path d="M5.5 8h13l-1 11.5h-11z" /><path d="M9 8V6.5a3 3 0 0 1 6 0V8" /></>,
    bolt: <path d="M13 3.5 6 13.5h5l-1 7 7-10h-5z" />,
    dots: <><circle cx="6" cy="12" r="1.1" /><circle cx="12" cy="12" r="1.1" /><circle cx="18" cy="12" r="1.1" /></>,
    people: <><circle cx="9" cy="8.5" r="3.2" /><path d="M3 19.5c.6-3.2 2.9-5 6-5s5.4 1.8 6 5" /><path d="M16 5.6a3.2 3.2 0 0 1 0 5.8M18 14.8c1.7.6 2.7 2 3 4.2" /></>,
    lock: <><rect x="5" y="10.5" width="14" height="9.5" rx="2.5" /><path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5" /></>,
    bell: <><path d="M6.5 16.5V11a5.5 5.5 0 0 1 11 0v5.5l1.5 1.5H5z" /><path d="M10 20.5h4" /></>,
    trash: <><path d="M5 7h14M10 7V5h4v2M7 7l1 12.5h8L17 7" /><path d="M10.5 11v5M13.5 11v5" /></>,
    alert: <><path d="M12 4.5 3.5 19h17z" /><path d="M12 10v4.5M12 17h.01" /></>,
    chart: <path d="M5 19.5V11M10 19.5V5M15 19.5v-6M20 19.5V8.5" />,
    sliders: <><path d="M5 7h9M18 7h1M5 17h1M10 17h9" /><circle cx="16" cy="7" r="2" /><circle cx="8" cy="17" r="2" /></>,
    coffee: <><path d="M5 9.5h11v5a4.5 4.5 0 0 1-4.5 4.5h-2A4.5 4.5 0 0 1 5 14.5z" /><path d="M16 11h1.5a2 2 0 0 1 0 4H16M8.5 4.5v2M12 4.5v2" /></>,
    key: <><circle cx="8.5" cy="14.5" r="3.5" /><path d="M11 12 19 4.5M16 7.5l2.5 2.5M14 9.5l1.8 1.8" /></>,
    film: <><rect x="4" y="5" width="16" height="14" rx="2" /><path d="M8 5v14M16 5v14M4 9.5h4M4 14.5h4M16 9.5h4M16 14.5h4" /></>,
    pill: <><rect x="3.5" y="9" width="17" height="6.5" rx="3.25" transform="rotate(-40 12 12)" /><path d="m9.4 9.4 5.2 5.2" /></>,
    plane: <path d="M3.5 13.5 20.5 5l-4 14-4.5-4.5-3 3v-4.5zM11.5 14.5 20.5 5" />,
    gift: <><rect x="4" y="9" width="16" height="4" rx="1" /><path d="M5.5 13v6.5h13V13M12 9v10.5M12 9c-1-3.5-5-3.5-5-1.2C7 9 9 9 12 9zM12 9c1-3.5 5-3.5 5-1.2 0 1.2-2 1.2-5 1.2z" /></>,
    paw: <><circle cx="7" cy="10" r="1.6" /><circle cx="11" cy="6.8" r="1.6" /><circle cx="15.5" cy="7.5" r="1.6" /><circle cx="18" cy="11.5" r="1.6" /><path d="M8 17.5c0-2.5 2.2-4.5 4.5-4.5s4.5 2 4 4.2c-.4 1.8-2 2.3-4 2.3S8 19.5 8 17.5z" /></>,
    search: <><circle cx="11" cy="11" r="6" /><path d="m16 16 4 4" /></>,
    pencil: <path d="M5 19l1-4L16.5 4.5a2 2 0 0 1 3 3L9 18zM14.5 6.5l3 3" />,
    close: <path d="M6 6l12 12M18 6 6 18" />,
    copy: <><rect x="9" y="9" width="11" height="11" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></>,
    play: <polygon points="8 5 19 12 8 19" style="fill:currentColor" />,
    shield: <path d="M12 3s8 3 8 9c0 5-4.5 8.5-8 9.5-3.5-1-8-4.5-8-9.5 0-6 8-9 8-9z" />,
    mobile: <><rect x="7" y="3" width="10" height="18" rx="2.5" /><path d="M11 17.5h2" /></>,
    external: <><path d="M14 4h6v6M10 14 20 4M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6" /></>,
    layers: <><polygon points="12 3 3 8 12 13 21 8" /><path d="m3 12 9 5 9-5M3 16l9 5 9-5" /></>,
    sparkle: <path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5z" />,
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" /></>,
    moon: <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z" />,
    list: <path d="M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01" />,
    upload: <path d="M12 16V5M7.5 9.5 12 5l4.5 4.5M5 19h14" />,
    grid: <><rect x="4" y="4" width="7" height="7" rx="1.5" /><rect x="13" y="4" width="7" height="7" rx="1.5" /><rect x="4" y="13" width="7" height="7" rx="1.5" /><rect x="13" y="13" width="7" height="7" rx="1.5" /></>,
    heart: <path d="M12 20s-7.5-4.4-7.5-10a4.3 4.3 0 0 1 7.5-2.9A4.3 4.3 0 0 1 19.5 10c0 5.6-7.5 10-7.5 10z" />,
    star: <path d="m12 3.8 2.5 5.2 5.7.8-4.1 4 1 5.7-5.1-2.7-5.1 2.7 1-5.7-4.1-4 5.7-.8z" />,
    target: <><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="4.8" /><circle cx="12" cy="12" r="1.2" /></>,
    card: <><rect x="3" y="5.5" width="18" height="13" rx="2.5" /><path d="M3 10h18M7 14.5h4" /></>,
    cake: <path d="M6 11h12l-1.5 8.5h-9zM6 11a6 6 0 0 1 12 0M9.5 11.5l.6 8M14.5 11.5l-.6 8" />,
    leaf: <path d="M5 19c0-8 5-13 14-14-1 9-6 14-14 14zM5 19l7.5-7.5" />,
    box: <path d="M4 8l8-4 8 4v8l-8 4-8-4zM4 8l8 4 8-4M12 12v8" />,
    glass: <path d="M8 3.5h8l-.5 5a3.5 3.5 0 0 1-7 0zM12 12v8M8.5 20h7" />,
    water: <path d="M12 3.5c3.5 4 6 7.2 6 10.2a6 6 0 0 1-12 0c0-3 2.5-6.2 6-10.2z" />,
    wifi: <path d="M4.5 9.5a11 11 0 0 1 15 0M7.5 12.8a7 7 0 0 1 9 0M10.5 16a3 3 0 0 1 3 0M12 19h.01" />,
    building: <path d="M5 20V5h9v15M14 9h5v11M3.5 20h17M8 8h3M8 11h3M8 14h3" />,
    shieldok: <><path d="M12 3s8 3 8 9c0 5-4.5 8.5-8 9.5-3.5-1-8-4.5-8-9.5 0-6 8-9 8-9z" /><path d="m8.8 12.2 2.2 2.2 4.2-4.4" /></>,
    taxdoc: <path d="M7 3.5h7l4 4v13H7zM14 3.5v4h4M9.5 16.5l5-5M10 12h.01M14 16h.01" />,
    apps: <><rect x="4" y="4" width="7" height="7" rx="2" /><rect x="13" y="4" width="7" height="7" rx="2" /><rect x="4" y="13" width="7" height="7" rx="2" /><path d="M16.5 13v7M13 16.5h7" /></>,
    shirt: <path d="M8 4 4.5 6.5 6 10l2-1v11h8V9l2 1 1.5-3.5L16 4c-.8 1.5-2.2 2.2-4 2.2S8.8 5.5 8 4z" />,
    beauty: <path d="M9 21h6v-8H9zM10 13V9.5l4-2V13M13.5 4.5l1.5-1.5M16 6l2-1" />,
    laptop: <><rect x="5" y="5.5" width="14" height="10" rx="1.5" /><path d="M3 18.5h18" /></>,
    sofa: <path d="M5 11V8.5A2.5 2.5 0 0 1 7.5 6h9A2.5 2.5 0 0 1 19 8.5V11M3.5 12a1.5 1.5 0 0 1 3 0v2h11v-2a1.5 1.5 0 0 1 3 0v5h-17zM6 17v2M18 17v2" />,
    cross: <path d="M9.5 4h5v5.5H20v5h-5.5V20h-5v-5.5H4v-5h5.5z" />,
    baby: <path d="M9 8h6v11a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2zM10 8V5.5h4V8M12 3v2.5M9 12h3M9 15h3" />,
    fuel: <path d="M5 20V5.5A1.5 1.5 0 0 1 6.5 4h6A1.5 1.5 0 0 1 14 5.5V20M3.5 20h12M6.5 9h6M14 10h2a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 0 3 0V9l-2.5-3" />,
    train: <path d="M7 4h10a2 2 0 0 1 2 2v8a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V6a2 2 0 0 1 2-2zM5 10h14M9 13.5h.01M15 13.5h.01M8 17l-2 3M16 17l2 3" />,
    moto: <><circle cx="5.5" cy="16.5" r="2.5" /><circle cx="18.5" cy="16.5" r="2.5" /><path d="M8 16.5h6l-2.5-6H8M11.5 10.5h3.5l3.5 6M15 10.5l1-3h2.5" /></>,
    parking: <><rect x="4.5" y="4" width="15" height="16" rx="3" /><path d="M10 16V8h3a2.5 2.5 0 0 1 0 5h-3" /></>,
    wrench: <path d="M14.5 6.5a4 4 0 0 0-5 5L4 17l3 3 5.5-5.5a4 4 0 0 0 5-5l-2.5 2.5-2.5-.5-.5-2.5z" />,
    game: <path d="M7 9h10a4 4 0 0 1 4 4v1a3 3 0 0 1-5.4 1.8L14.5 14h-5l-1.1 1.8A3 3 0 0 1 3 14v-1a4 4 0 0 1 4-4zM8 11.5v3M6.5 13h3M15.5 12.5h.01M17.5 14h.01" />,
    dumbbell: <path d="M4 9v6M7 7v10M17 7v10M20 9v6M7 12h10" />,
    ticket: <path d="M4 7.5h16v3a1.5 1.5 0 0 0 0 3v3H4v-3a1.5 1.5 0 0 0 0-3zM14 7.5v9" />,
    lotus: <path d="M12 19c-4 0-7-2.5-7.5-6 2.6 0 4.8 1 6 2.6M12 19c4 0 7-2.5 7.5-6-2.6 0-4.8 1-6 2.6M12 19c-1.8-2-2.5-4.3-2-7 .5-2.4 1.2-4 2-5.5.8 1.5 1.5 3.1 2 5.5.5 2.7-.2 5-2 7z" />,
    grad: <path d="M2.5 9.5 12 5l9.5 4.5L12 14zM6.5 11.5V16c1.5 1.5 3.5 2.2 5.5 2.2s4-.7 5.5-2.2v-4.5M21.5 9.5V14" />,
    calendar: <><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></>
};

export function Icon({ name, size, class: cls = "" }) {
    return (
        <svg class={`ic ${cls}`} viewBox="0 0 24 24" aria-hidden="true" style={size ? { width: size, height: size } : undefined}>
            {P[name] || P.dots}
        </svg>
    );
}

/** ไอคอนรายการ จากไอคอนที่เลือกตอนบันทึก (fa-*) → ไอคอนชุดนี้ */
// 40 หมวดจาก lib/categories.mjs + รหัสเก่าที่ยังมีในข้อมูล (สลิปรุ่นเก่าใช้ fa-shopping-basket, fa-shopping-bag, fa-receipt ฯลฯ)
const FA = {
    ...Object.fromEntries(CATEGORY_LIST.map((c) => [c.fa, c.icon])),
    "fa-basket-shopping": "bag", "fa-shopping-basket": "bag", "fa-shopping-bag": "bag", "fa-scissors": "beauty",
    "fa-bus": "train", "fa-mobile-screen-button": "mobile", "fa-tv": "film", "fa-receipt": "bill",
    "fa-arrow-down": "down", "fa-credit-card": "card"
};
export const iconFor = (fa) => FA[fa] || "bill";

// รูปโลโก้แยกไฟล์ละแบรนด์ (brand-icons/<slug>.js ไฟล์ละไม่กี่ร้อยไบต์ถึงไม่กี่กิโลไบต์) โหลดเฉพาะแบรนด์ที่มีในหน้านั้น
// ระหว่างรอใช้สีแบรนด์ + ไอคอนหมวดไปก่อน
// Vite แปลงบรรทัดนี้เป็นรายการไฟล์ตอน build (ตอนเทสต์ด้วย node ไม่มี glob จึงได้รายการว่าง = ใช้ไอคอนหมวดแทน)
let BRAND_FILES = {};
try { BRAND_FILES = import.meta.glob("./brand-icons/*.js"); } catch (e) { /* นอก Vite */ }
const PATHS = {};
const pending = {};
const waiting = new Set();
function loadPath(si) {
    if (PATHS[si] || pending[si]) return;
    const load = BRAND_FILES[`./brand-icons/${si}.js`];
    if (!load) return;
    pending[si] = load().then((m) => { PATHS[si] = m.default; waiting.forEach((f) => f()); }).catch(() => {});
}
function useBrandPath(si) {
    const [, tick] = useState(0);
    useEffect(() => {
        if (!si || PATHS[si]) return undefined;
        const f = () => tick((n) => n + 1);
        waiting.add(f);
        loadPath(si);
        return () => waiting.delete(f);
    }, [si]);
    return si ? PATHS[si] : null;
}

function BrandBadge({ b, size, name }) {
    const p = useBrandPath(b.si);
    if (b.text) {
        // บริษัทที่ไม่มีโลโก้จริงในชุดฟรี (เช่น บริษัทประกัน): ชื่อย่อบนสีบริษัท
        // ตัวไทยแคบกว่า นับความยาวแค่ครึ่งเดียว
        const len = /[ก-๙]/.test(b.text) ? Math.ceil(b.text.replace(/[ิีึืุูั่้๊๋็์]/g, "").length * 0.75) : b.text.length;
        const fs = Math.round(size * (len > 5 ? 0.21 : len > 3 ? 0.26 : 0.32));
        return <b class="brand-wm" style={{ fontSize: fs }}>{b.text}</b>;
    }
    if (p) {
        const dim = Math.round(size * 0.58);
        return <svg viewBox="0 0 24 24" width={dim} height={dim} aria-hidden="true"><path d={p} fill={b.fg} /></svg>;
    }
    return <Icon name={b.icon || name} size={Math.round(size * 0.5)} />;
}

/**
 * ไอคอนหน้ารายการ: ร้าน/บริการดัง (เดาจากชื่อ) แสดงป้ายสีแบรนด์ (โลโก้จริงจาก Simple Icons ถ้ามี ไม่มีก็สีแบรนด์ + ไอคอนหมวด)
 * ไม่ใช่แบรนด์ = ไอคอนหมวดเหมือนเดิม  name = ไอคอนหมวดที่จะใช้ (เช่น "down" ของรายรับ)
 */
export function ItemIcon({ desc, name, size = 40, iconSize }) {
    const b = brandOf(desc);
    if (!b) return <span class="ico" style={size !== 40 ? { width: size, height: size } : undefined}><Icon name={name} size={iconSize} /></span>;
    const style = { width: size, height: size, background: b.bg, color: b.fg, borderRadius: b.round ? "50%" : Math.round(size * 0.3) };
    if (b.ring) style.boxShadow = "inset 0 0 0 1.5px #e3e8f5";
    return <span class="ico brand" style={style} aria-hidden="true"><BrandBadge b={b} size={size} name={name} /></span>;
}

export function Mark({ size = 24 }) {
    return (
        // โลโก้ใบเสร็จผ่ากลาง (บิลที่หารกัน) ตรงกับ icons/dm-icon.svg
        <svg viewBox="0 0 64 64" width={size} height={size} aria-hidden="true" style={{ flex: "none" }}>
            <rect width="64" height="64" rx="18" fill="#2343c9" />
            <path d="M19 13h26v38l-4.3-3-4.4 3-4.3-3-4.3 3-4.4-3-4.3 3z" fill="#ffffff" />
            <path d="M32 16v31" stroke="#2343c9" stroke-width="3" stroke-dasharray="3.5 3.5" />
            <rect x="22.5" y="22" width="7" height="4" rx="2" fill="#ffc23d" />
            <rect x="34.5" y="22" width="7" height="4" rx="2" fill="#ffc23d" />
        </svg>
    );
}

/**
 * ตัวโหลดตอนเข้าเว็บ: โลโก้ใบเสร็จผ่ากลาง ใบเสร็จแยกออกเป็นสองซีกแล้วกลับมารวมกัน (หารบิล) จุดสีทานตะวันกระดกตาม
 * ต้องตรงกับมาร์กอัปใน web/index.html (แสดงก่อนสคริปต์โหลดเสร็จ) ปิดแอนิเมชันเมื่อผู้ใช้ตั้งลดการเคลื่อนไหว
 */
export function Loader({ size = 88, label = "" }) {
    return (
        <div class="ld-wrap" role="status" aria-live="polite">
            <svg class="ld" viewBox="0 0 64 64" width={size} height={size} aria-hidden="true">
                <rect width="64" height="64" rx="18" fill="#2343c9" />
                <g class="ld-l"><path d="M19 13h13v35l-4.3 3-4.4-3-4.3 3z" fill="#ffffff" /><rect x="22.5" y="22" width="7" height="4" rx="2" fill="#ffc23d" class="ld-pill" /></g>
                <g class="ld-r"><path d="M32 13h13v38l-4.3-3-4.4 3-4.3-3z" fill="#ffffff" /><rect x="34.5" y="22" width="7" height="4" rx="2" fill="#ffc23d" class="ld-pill" /></g>
                <path class="ld-cut" d="M32 16v31" stroke="#2343c9" stroke-width="3" stroke-dasharray="3.5 3.5" />
            </svg>
            {label ? <p class="ld-t">{label}</p> : null}
        </div>
    );
}
