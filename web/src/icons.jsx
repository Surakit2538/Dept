// ชุดไอคอนเส้นบาง 1.8px ปลายมน (ชุดเดียวกับในหน้าเลือกแบบ) ไม่มี emoji
import { brandOf } from "./brands.js";
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
const FA = {
    "fa-utensils": "food", "fa-mug-hot": "coffee", "fa-wine-glass": "coffee",
    "fa-car": "car", "fa-gas-pump": "car", "fa-bus": "car", "fa-plane": "plane",
    "fa-cart-shopping": "bag", "fa-basket-shopping": "bag", "fa-scissors": "bag", "fa-pills": "pill", "fa-paw": "paw", "fa-gift": "gift",
    "fa-film": "film", "fa-house": "key",
    "fa-bolt": "bolt", "fa-mobile-screen": "bolt", "fa-mobile-screen-button": "bolt",
    "fa-arrow-down": "down"
};
export const iconFor = (fa) => FA[fa] || "bill";

// ข้อมูลรูปโลโก้ (หลายสิบกิโลไบต์) โหลดเมื่อมีรายการที่ตรงกับแบรนด์เท่านั้น ระหว่างรอใช้สีแบรนด์ + ไอคอนหมวดไปก่อน
let PATHS = null;
let pending = null;
const waiting = new Set();
function loadPaths() {
    if (!pending) pending = import("./brand-paths.js").then((m) => { PATHS = m.SI; waiting.forEach((f) => f()); }).catch(() => {});
}
function useBrandPaths() {
    const [, tick] = useState(0);
    useEffect(() => {
        if (PATHS) return undefined;
        const f = () => tick((n) => n + 1);
        waiting.add(f);
        loadPaths();
        return () => waiting.delete(f);
    }, []);
    return PATHS;
}

function BrandBadge({ b, size, name }) {
    const paths = useBrandPaths();
    if (b.si && paths && paths[b.si]) {
        const dim = Math.round(size * 0.58);
        return <svg viewBox="0 0 24 24" width={dim} height={dim} aria-hidden="true"><path d={paths[b.si]} fill={b.fg} /></svg>;
    }
    return <Icon name={name} size={Math.round(size * 0.5)} />;
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
