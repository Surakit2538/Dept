// เลือกหลายรายการ: แถวที่ติ๊กได้ + แถบล่างสำหรับเปลี่ยนหมวด/ลบพร้อมกัน ใช้ในหน้ารายการ
import { useState } from "preact/hooks";
import { Icon } from "./icons.jsx";
import { Sheet } from "./ui.jsx";
import { CategoryPicker, faOf } from "./cats.jsx";

/** แถวที่แตะเพื่อเลือกได้ (children = เนื้อหาเดิมของแถว ไม่มีปุ่มแก้ไข/ลบ) */
export function SelectRow({ picked, label, onToggle, cls = "", children }) {
    const onKey = (e) => { if (e.key === " " || e.key === "Enter") { e.preventDefault(); onToggle(); } };
    return (
        <li class={`row sel ${cls} ${picked ? "on" : ""}`} role="checkbox" aria-checked={picked} aria-label={label} tabIndex={0} onClick={onToggle} onKeyDown={onKey}>
            <span class={`pick ${picked ? "on" : ""}`} aria-hidden="true">{picked ? <Icon name="check" size={14} /> : null}</span>
            {children}
        </li>
    );
}

/**
 * แถบจัดการรายการที่เลือก
 * onCategory(fa) / onDelete() ต้องจัดการข้อผิดพลาดเอง (แจ้งเตือนแล้วไม่โยนต่อ)
 */
export function BulkBar({ count, total, onAll, onNone, onCategory, onDelete, note = "" }) {
    const [mode, setMode] = useState("idle"); // idle | cat | confirm | busy
    const run = async (fn) => { setMode("busy"); try { await fn(); } finally { setMode("idle"); } };
    const busy = mode === "busy";
    return (
        <div class="bulk-bar" role="region" aria-label="จัดการหลายรายการ">
            <div class="bulk-top">
                <b>{busy ? "กำลังทำรายการ" : count > 0 ? `เลือกแล้ว ${count} รายการ` : "แตะรายการที่ต้องการ"}</b>
                <span class="bulk-sel">
                    <button type="button" class="btn sm ghost" disabled={busy || count === total} onClick={onAll}>เลือกทั้งหมด</button>
                    <button type="button" class="btn sm ghost" disabled={busy || count === 0} onClick={onNone}>ล้าง</button>
                </span>
            </div>
            {count > 0 && mode !== "confirm" && (
                <div class="acts remind">
                    <button type="button" class="btn sm" disabled={busy} onClick={() => setMode("cat")}><Icon name="sliders" size={14} />เปลี่ยนหมวด</button>
                    <button type="button" class="btn sm ghost" disabled={busy} onClick={() => setMode("confirm")}><Icon name="trash" size={14} />ลบ</button>
                </div>
            )}
            {mode === "confirm" && (
                <div class="acts remind">
                    <span class="lbl">ลบ {count} รายการ ลบแล้วกู้คืนไม่ได้ ลบเลยไหม</span>
                    <button type="button" class="btn sm danger" onClick={() => run(onDelete)}>ลบเลย</button>
                    <button type="button" class="btn sm ghost" onClick={() => setMode("idle")}>ไม่ลบ</button>
                </div>
            )}
            {mode === "cat" && (
                <Sheet title={`เปลี่ยนหมวด ${count} รายการ`} onClose={() => setMode("idle")}>
                    <CategoryPicker value="" onPick={(k) => run(() => onCategory(faOf(k)))} labelId="bulk-cat-l" />
                    {note && <p class="lbl">{note}</p>}
                </Sheet>
            )}
        </div>
    );
}
