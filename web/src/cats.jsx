// เลือกหมวด (เจ้าของเลือกแบบ B): 8 หมวดที่ใช้บ่อย (นับจากที่เคยเลือกในเครื่องนี้) + ปุ่ม ดูทั้งหมด = 40 หมวดแบ่งตาม 6 กลุ่ม
// ใช้ร่วมกันในฟอร์มรายจ่ายส่วนตัว บิลหารกับเพื่อน และหน้าแก้ไข
import { useState } from "preact/hooks";
import { Icon } from "./icons.jsx";
import { BILL_ICONS, CATEGORIES } from "./model.js";

const USE_KEY = "dm:v2:catuse";
const DEFAULT_TOP = ["food", "drink", "goods", "travel", "bills", "app", "clothes", "fun"];
function readUse() {
    try { const v = JSON.parse(localStorage.getItem(USE_KEY) || "{}"); return v && typeof v === "object" ? v : {}; } catch (e) { return {}; }
}
function bump(key) {
    try { const u = readUse(); u[key] = (Number(u[key]) || 0) + 1; localStorage.setItem(USE_KEY, JSON.stringify(u)); } catch (e) { /* ไม่เป็นไร */ }
}
/** 8 หมวดที่ใช้บ่อย (ยังไม่เคยเลือก = ชุดเริ่มต้น) หมวดที่เลือกอยู่ต้องอยู่ในแถวเสมอ */
export function topCats(value, use = readUse()) {
    const byUse = Object.entries(use).filter(([k]) => k !== "other" && BILL_ICONS.some((i) => i.key === k)).sort((a, b) => b[1] - a[1]).map(([k]) => k);
    const keys = [...new Set([...byUse, ...DEFAULT_TOP])].slice(0, 8);
    if (value && value !== "other" && !keys.includes(value)) keys[7] = value;
    return keys.map((k) => BILL_ICONS.find((i) => i.key === k)).filter(Boolean);
}

function Btn({ i, value, onPick }) {
    return <button type="button" class={value === i.key ? "on" : ""} aria-pressed={value === i.key} onClick={() => onPick(i.key)}><span class="ct"><Icon name={i.icon} /></span>{i.label}</button>;
}

export function CategoryPicker({ value, onPick, labelId = "cat-l", hint = "" }) {
    const [all, setAll] = useState(false);
    const pick = (k) => { bump(k); onPick(k); };
    const top = topCats(value);
    return (
        <div class="field">
            <div class="hd-row"><span class="fl" id={labelId}>หมวด</span>{hint && <span class="cat-hint">{hint}</span>}</div>
            {!all ? (
                <div class="cats-grid" role="group" aria-labelledby={labelId}>
                    {top.map((i) => <Btn key={i.key} i={i} value={value} onPick={pick} />)}
                    <button type="button" class="more" aria-expanded="false" onClick={() => setAll(true)}><span class="ct"><Icon name="dots" /></span>ดูทั้งหมด {BILL_ICONS.length}</button>
                </div>
            ) : (
                <div class="cats-all" role="group" aria-labelledby={labelId}>
                    {CATEGORIES.map((g) => (
                        <div class="cats-g" key={g.key}>
                            <span class="cats-gl">{g.label}</span>
                            <div class="cats-grid">{BILL_ICONS.filter((i) => i.group === g.key).map((i) => <Btn key={i.key} i={i} value={value} onPick={pick} />)}</div>
                        </div>
                    ))}
                    <button type="button" class="link-btn" aria-expanded="true" onClick={() => setAll(false)}>แสดงเฉพาะที่ใช้บ่อย</button>
                </div>
            )}
        </div>
    );
}

/** รหัสไอคอนที่เก็บในฐานข้อมูล (fa-*) จากชื่อหมวด */
export const faOf = (key) => (BILL_ICONS.find((i) => i.key === key) || BILL_ICONS[BILL_ICONS.length - 1]).fa;
/** ชื่อหมวดจากรหัสไอคอนที่เก็บไว้ (ไม่รู้จัก = อื่นๆ) */
export const keyOfFa = (fa) => (BILL_ICONS.find((i) => i.fa === fa) || BILL_ICONS[BILL_ICONS.length - 1]).key;
/** รายการนี้มีหมวดที่เลือกไว้แล้วหรือยัง (ไม่มีไอคอน หรือเป็นไอคอนเริ่มต้นของกระเป๋า fa-wallet = ยังไม่มี) */
export const hasCategory = (fa) => Boolean(fa) && fa !== "fa-wallet";
