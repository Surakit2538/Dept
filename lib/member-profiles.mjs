/**
 * รายชื่อสมาชิกสำหรับหน้าเว็บ (ชื่อ รูป พร้อมเพย์ ชื่อจริง สิทธิ์) จากเอกสาร members
 * ใช้ร่วมเว็บ (อ่าน Firestore ตรง) กับเซิร์ฟเวอร์ (action member-list สำรองเมื่อเครื่องต่อฐานข้อมูลไม่ได้)
 * ฟังก์ชันล้วน ไม่แตะฐานข้อมูล
 */
import { normalizeName } from "./ledger.mjs";

const httpsUrl = (u) => (/^https?:\/\//i.test(String(u || "")) ? String(u) : "");

/** docs = [{ id, data }] -> โปรไฟล์ต่อชื่อ (ชื่อซ้ำหลายเอกสาร: รวมรหัสไว้ และเลือกเอกสารที่ข้อมูลครบกว่า) */
export function buildProfiles(docs) {
    const byName = new Map();
    for (const d of docs || []) {
        const x = (d && d.data) || {};
        const name = normalizeName(x.name);
        if (!name) continue;
        const p = {
            id: d.id, name, promptpay: x.promptpay || "", realName: x.realName || "", englishName: x.englishName || "",
            hasLine: Boolean(x.lineUserId), pictureUrl: httpsUrl(x.pictureUrl), role: x.role === "admin" ? "admin" : "member",
            cardAlerts: x.cardAlerts === true, receiptScan: x.receiptScan === true, ids: [d.id]
        };
        const cur = byName.get(name);
        if (cur) { p.ids = [...cur.ids, d.id]; p.cardAlerts = p.cardAlerts || cur.cardAlerts; p.receiptScan = p.receiptScan || cur.receiptScan; }
        if (!cur || (!cur.hasLine && p.hasLine) || (!cur.promptpay && p.promptpay) || (!cur.pictureUrl && p.pictureUrl)) byName.set(name, p);
        else { cur.ids = p.ids; cur.cardAlerts = p.cardAlerts; cur.receiptScan = p.receiptScan; }
    }
    return [...byName.values()];
}

/** ชื่อสมาชิกทั้งหมด (ไม่ซ้ำ) */
export function memberNamesOf(docs) {
    return [...new Set((docs || []).map((d) => normalizeName(d && d.data && d.data.name)).filter(Boolean))];
}
