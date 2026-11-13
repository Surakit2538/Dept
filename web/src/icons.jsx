// ชุดไอคอนเส้นบาง 1.8px ปลายมน (ชุดเดียวกับในหน้าเลือกแบบ) ไม่มี emoji
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
    dots: <path d="M6 12h.01M12 12h.01M18 12h.01" />,
    people: <><circle cx="9" cy="8.5" r="3.2" /><path d="M3 19.5c.6-3.2 2.9-5 6-5s5.4 1.8 6 5" /><path d="M16 5.6a3.2 3.2 0 0 1 0 5.8M18 14.8c1.7.6 2.7 2 3 4.2" /></>,
    lock: <><rect x="5" y="10.5" width="14" height="9.5" rx="2.5" /><path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5" /></>,
    bell: <><path d="M6.5 16.5V11a5.5 5.5 0 0 1 11 0v5.5l1.5 1.5H5z" /><path d="M10 20.5h4" /></>,
    close: <path d="M6 6l12 12M18 6 6 18" />
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
    "fa-utensils": "food", "fa-mug-hot": "food", "fa-wine-glass": "food",
    "fa-car": "car", "fa-gas-pump": "car", "fa-bus": "car", "fa-plane": "car",
    "fa-cart-shopping": "bag", "fa-basket-shopping": "bag", "fa-scissors": "bag", "fa-pills": "bag", "fa-paw": "bag", "fa-gift": "bag",
    "fa-bolt": "bolt", "fa-house": "bolt", "fa-mobile-screen": "bolt", "fa-mobile-screen-button": "bolt",
    "fa-arrow-down": "down"
};
export const iconFor = (fa) => FA[fa] || "bill";

export function Mark({ size = 24 }) {
    return (
        <svg viewBox="0 0 120 120" width={size} height={size} aria-hidden="true">
            <g transform="translate(-8 0)">
                <path d="M20 32 A28 28 0 0 1 20 88 Z" fill="#f3a10b" />
                <path d="M56 88 V46 A14 14 0 0 1 84 46 V88 M84 46 A14 14 0 0 1 112 46 V88" fill="none" stroke="currentColor" stroke-width="9" />
            </g>
        </svg>
    );
}
