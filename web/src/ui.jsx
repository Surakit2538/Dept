// ส่วนประกอบหน้าตาที่ใช้ร่วมกันทุกหน้า
import { Icon } from "./icons.jsx";
import { shiftMonth, monthLabel } from "./model.js";

export function MonthPicker({ month, onChange, min, max }) {
    return (
        <div class="month" role="group" aria-label="เลือกเดือน">
            <button type="button" aria-label="เดือนก่อนหน้า" disabled={month <= min} onClick={() => onChange(shiftMonth(month, -1))}><Icon name="left" size={16} /></button>
            <span class="num">{monthLabel(month)}</span>
            <button type="button" aria-label="เดือนถัดไป" disabled={month >= max} onClick={() => onChange(shiftMonth(month, 1))}><Icon name="right" size={16} /></button>
        </div>
    );
}

export function SectionTitle({ icon, title, note }) {
    return (
        <div class="sec-t">
            <span class="ico"><Icon name={icon} /></span>
            <div><h3>{title}</h3>{note && <p>{note}</p>}</div>
        </div>
    );
}

/** กล่องเลื่อนขึ้น (มือถือ) / กล่องกลางจอ (คอมพิวเตอร์) */
export function Sheet({ title, onClose, children }) {
    return (
        <div class="scrim" onClick={(e) => e.target === e.currentTarget && onClose()}>
            <div class="sheet" role="dialog" aria-label={title}>
                <div class="grab" />
                <div class="hd-row" style={{ marginBottom: "4px" }}>
                    <b>{title}</b>
                    <button type="button" class="btn sm ghost" onClick={onClose} aria-label="ปิด"><Icon name="close" size={14} />ปิด</button>
                </div>
                {children}
            </div>
        </div>
    );
}

export function Avatar({ name }) {
    return <div class="av" aria-hidden="true">{[...String(name || "?")][0]}</div>;
}
