/**
 * สร้างรายการ "รายเดือนประจำ" (subscription) ของเดือนปัจจุบันจาก subscription_templates
 * ทำงานโดย Vercel Cron วันที่ 1 ของทุกเดือน (api/cron/generate-subscriptions.js) — เป็นตัวสร้างตัวเดียวของระบบ
 *
 * ป้องกันการสร้างซ้ำ 3 ชั้น:
 *  1) template.lastGeneratedMonth === เดือนนี้ → ข้าม (เว็บ/บอทตั้งค่านี้ตอนสร้างรายการแรก)
 *  2) มีรายการเดือนนี้ที่ groupId เดียวกันอยู่แล้ว → ข้าม (ไม่เทียบชื่อรายการแล้ว เพราะชื่อซ้ำกับบิลปกติทำให้ข้ามผิด)
 *  3) รหัสเอกสารตายตัว sub_<groupId>_<เดือน> → รันซ้ำก็ได้เอกสารเดิม
 * รอบ (lib/recurrence.mjs): แม่แบบที่ตั้งทุก 3 / 6 / 12 เดือน สร้างเฉพาะเดือนที่ถึงรอบ เดือนอื่นข้ามเงียบๆ
 */
import { addMonthsClamped } from "./installments.mjs";
import { bangkokMonth } from "./reminders.mjs";
import { buildWalletEntry, WALLET_COL } from "./wallet-service.mjs";
import { guessCategoryFa } from "./categories.mjs";
import { isDueMonth } from "./recurrence.mjs";
import { billPeople } from "./privacy.mjs";

const cleanId = (s) => String(s || "").trim().replace(/[^a-zA-Z0-9_-]/g, "_");
const cleanDesc = (s) => String(s || "").replace(/📅/g, "").trim();

export function createSubscriptionJob({ db, fs, now = () => new Date() }) {
    const { collection, getDocs, query, where, doc, writeBatch } = fs;

    return async function run() {
        const month = bangkokMonth(now());
        const tplSnap = await getDocs(query(collection(db, "subscription_templates"), where("active", "==", true)));
        const result = { month, created: 0, skipped: 0, invalid: 0 };
        if (tplSnap.empty) return result;

        const txSnap = await getDocs(query(
            collection(db, "transactions"),
            where("date", ">=", `${month}-01`),
            where("date", "<=", `${month}-31`)
        ));
        const existingIds = new Set(txSnap.docs.map((d) => d.id));
        const existingGroups = new Set(txSnap.docs.map((d) => String(d.data().groupId || "").trim()).filter(Boolean));

        const batch = writeBatch(db);
        let writes = 0;

        for (const d of tplSnap.docs) {
            const t = d.data();
            const groupId = String(t.groupId || d.id).trim();
            const docId = `sub_${cleanId(groupId)}_${month}`;
            const amount = Number(t.amount);
            if (!Number.isFinite(amount) || amount <= 0 || !t.payer || !t.splits || Object.keys(t.splits).length === 0) {
                result.invalid++;
                continue;
            }
            if (!isDueMonth(t, month)) { result.notDue = (result.notDue || 0) + 1; continue; }
            if (t.lastGeneratedMonth === month || existingIds.has(docId) || existingGroups.has(groupId)) {
                result.skipped++;
                if (t.lastGeneratedMonth !== month) batch.update(d.ref, { lastGeneratedMonth: month }), writes++;
                continue;
            }

            const day = Math.min(31, Math.max(1, Number(t.billingDay) || 1));
            const date = addMonthsClamped(`${month}-${String(day).padStart(2, "0")}`, 0);
            batch.set(doc(db, "transactions", docId), {
                date,
                desc: `${cleanDesc(t.desc)} 📅`,
                amount,
                payer: t.payer,
                splits: t.splits,
                people: billPeople(t),
                paymentType: "subscription",
                icon: t.icon || "fa-utensils",
                subscriptionRecurring: true,
                subscriptionStartDate: t.createdAt ?? null,
                groupId,
                timestamp: new Date(`${month}-01T02:00:00+07:00`).getTime()
            });
            batch.update(d.ref, { lastGeneratedMonth: month });
            writes += 2;
            result.created++;
        }

        if (writes > 0) await batch.commit();
        return result;
    };
}

/**
 * รายจ่ายส่วนตัวแบบรายเดือน (wallet_templates): สร้างรายการลงกระเป๋าของเจ้าของให้ทุกเดือน
 * ทำงานพร้อมงานบิลรายเดือนของกลุ่ม (cron วันที่ 1) ไม่เพิ่มจำนวน function ของ Vercel
 * กันซ้ำ: lastGeneratedMonth + รหัสเอกสารตายตัว wsub_<template>_<เดือน>
 */
export function createWalletSubscriptionJob({ db, fs, now = () => new Date() }) {
    const { collection, getDocs, query, where, doc, writeBatch } = fs;

    return async function run() {
        const month = bangkokMonth(now());
        const snap = await getDocs(query(collection(db, "wallet_templates"), where("active", "==", true)));
        const result = { month, created: 0, skipped: 0, invalid: 0 };
        if (snap.empty) return result;
        const batch = writeBatch(db);
        let writes = 0;
        for (const d of snap.docs) {
            const t = d.data();
            if (t.lastGeneratedMonth === month) { result.skipped++; continue; }
            if (!isDueMonth(t, month)) { result.notDue = (result.notDue || 0) + 1; continue; }
            const day = Math.min(31, Math.max(1, Number(t.billingDay) || 1));
            const date = addMonthsClamped(`${month}-${String(day).padStart(2, "0")}`, 0);
            const built = buildWalletEntry(
                { type: t.type === "income" ? "income" : "expense", amount: t.amount, desc: t.desc, icon: (t.icon && t.icon !== "fa-wallet") ? t.icon : (guessCategoryFa(t.desc) || t.icon), date, source: "web", ...(t.cardId ? { cardId: t.cardId } : {}), ...(t.account ? { account: t.account } : {}) },
                { ownerName: t.ownerName, ownerMemberId: t.ownerMemberId || null, nowMs: now().getTime() }
            );
            if (!built.ok) { result.invalid++; continue; }
            batch.set(doc(db, WALLET_COL, `wsub_${d.id}_${month}`), { ...built.entry, templateId: d.id, recurring: true });
            batch.update(d.ref, { lastGeneratedMonth: month });
            writes += 2;
            result.created++;
        }
        if (writes > 0) await batch.commit();
        return result;
    };
}
