/**
 * จำชื่อรายการที่เจ้าของแก้ (เช่น สลิปขึ้น "KSHER*SHOP123" แก้เป็น "กาแฟอเมซอน")
 * ครั้งต่อไปที่บันทึกอัตโนมัติจากชื่อเดิม จะใช้ชื่อและหมวดที่แก้ไว้ให้เอง
 * เก็บเป็นเอกสารเดียวต่อคน (คอลเลกชัน wallet_names) อ่าน 1 ครั้งต่อการบันทึกอัตโนมัติ
 */
export const LEARNED_COL = "wallet_names";
export const LEARNED_MAX = 200;

/** รหัสเอกสารของเจ้าของ (ชื่อห้ามมี /) */
export function learnedDocId(owner) {
    return "n_" + String(owner || "").replace(/\//g, "_").slice(0, 200);
}

/** กุญแจเทียบชื่อ: ประเภท + ชื่อตัวเล็ก ช่องว่างเดียว */
export function nameKey(type, raw) {
    const s = String(raw || "").toLowerCase().replace(/\s+/g, " ").trim().slice(0, 100);
    return s ? `${type === "income" ? "income" : "expense"}:${s}` : "";
}

/** หาชื่อที่เคยแก้ไว้ คืน { desc, icon } หรือ null */
export function lookupLearned(items, type, raw) {
    const k = nameKey(type, raw);
    if (!k || !Array.isArray(items)) return null;
    const hit = items.find((x) => x && x.k === k);
    if (!hit || typeof hit.desc !== "string" || !hit.desc.trim()) return null;
    return { desc: hit.desc, icon: /^fa-[a-z0-9-]{1,36}$/.test(hit.icon || "") ? hit.icon : "" };
}

/**
 * เพิ่ม/แทนที่ชื่อที่จำไว้ คืนรายการใหม่ (ล่าสุดอยู่หน้า เก็บไม่เกิน LEARNED_MAX)
 */
export function rememberName(items, { type, from, desc, icon, at }) {
    const k = nameKey(type, from);
    const list = Array.isArray(items) ? items.filter((x) => x && x.k && x.k !== k) : [];
    if (!k) return list;
    const d = String(desc || "").trim().slice(0, 100);
    if (!d) return list;
    const ic = /^fa-[a-z0-9-]{1,36}$/.test(icon || "") ? icon : "";
    return [{ k, desc: d, icon: ic, at: Number(at) || 0 }, ...list].slice(0, LEARNED_MAX);
}
