// เลือกหมวด (ไอคอน) แบบแถวเดียวเลื่อนข้าง ใช้ร่วมกันในฟอร์มรายจ่ายส่วนตัวและหน้าแก้ไข
import { Icon } from "./icons.jsx";
import { BILL_ICONS } from "./model.js";

export function CategoryPicker({ value, onPick, labelId = "cat-l", hint = "" }) {
    return (
        <div class="field">
            <div class="hd-row"><span class="fl" id={labelId}>หมวด</span>{hint && <span class="cat-hint">{hint}</span>}</div>
            <div class="cats-pick" role="group" aria-labelledby={labelId}>
                {BILL_ICONS.map((i) => <button type="button" key={i.key} class={value === i.key ? "on" : ""} aria-pressed={value === i.key} onClick={() => onPick(i.key)}><span class="ct"><Icon name={i.icon} /></span>{i.label}</button>)}
            </div>
        </div>
    );
}

/** รหัสไอคอนที่เก็บในฐานข้อมูล (fa-*) จากชื่อหมวด */
export const faOf = (key) => (BILL_ICONS.find((i) => i.key === key) || BILL_ICONS[BILL_ICONS.length - 1]).fa;
/** ชื่อหมวดจากรหัสไอคอนที่เก็บไว้ (ไม่รู้จัก = อื่นๆ) */
export const keyOfFa = (fa) => (BILL_ICONS.find((i) => i.fa === fa) || BILL_ICONS[BILL_ICONS.length - 1]).key;
/** รายการนี้มีหมวดที่เลือกไว้แล้วหรือยัง (ไม่มีไอคอน หรือเป็นไอคอนเริ่มต้นของกระเป๋า fa-wallet = ยังไม่มี) */
export const hasCategory = (fa) => Boolean(fa) && fa !== "fa-wallet";
