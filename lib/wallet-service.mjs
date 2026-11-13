/**
 * กระเป๋าของฉัน (wallet_entries): รายรับ + รายจ่ายส่วนตัวของแต่ละคน (เห็นคนเดียว)
 * เอกสาร: { ownerName, payer(=ownerName เพื่อให้โค้ดเดิมที่ค้นด้วย payer ใช้ต่อได้), ownerMemberId, type: income|expense,
 *           amount(บาท), date(YYYY-MM-DD), month(YYYY-MM), desc, category, icon, source, bank, transRef, dedupKey,
 *           createdAt, timestamp }
 * รายจ่ายส่วนตัวเดิม (personal_expenses) ถูกย้ายมาที่นี่ด้วย id เดิม (migratePersonalExpenses)
 */
import { normalizeName, getBangkokDateString } from "./slip-core.mjs";

export const WALLET_COL = "wallet_entries";
export const MAX_AMOUNT = 100000000;
const SOURCES = new Set(["web", "ios_shortcut", "ios_auto", "line", "sms", "migrated"]);

/** ตรวจและสร้างเอกสารกระเป๋า ส่งกลับ { ok, entry } หรือ { ok:false, message } */
export function buildWalletEntry(input, { ownerName, ownerMemberId = null, nowMs = Date.now() }) {
    const type = String(input.type || "").toLowerCase();
    if (type !== "income" && type !== "expense") return { ok: false, message: "ประเภทต้องเป็น income (รายรับ) หรือ expense (รายจ่าย)" };
    const amount = Number(input.amount);
    if (!Number.isFinite(amount) || amount <= 0 || amount > MAX_AMOUNT) return { ok: false, message: "จำนวนเงินไม่ถูกต้อง" };
    const rounded = Math.round(amount * 100) / 100;
    const today = getBangkokDateString(new Date(nowMs));
    const date = input.date == null || input.date === "" ? today : String(input.date);
    if (!/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/.test(date)) return { ok: false, message: "วันที่ต้องเป็นรูปแบบ YYYY-MM-DD" };
    const owner = normalizeName(ownerName);
    if (!owner) return { ok: false, message: "ไม่พบเจ้าของรายการ" };
    const source = SOURCES.has(String(input.source)) ? String(input.source) : "web";
    const desc = String(input.desc || "").trim().slice(0, 100) || (type === "income" ? "รายรับ" : "รายจ่าย");
    return {
        ok: true,
        entry: {
            ownerName: owner,
            payer: owner,
            ownerMemberId,
            type,
            amount: rounded,
            date,
            month: date.slice(0, 7),
            desc,
            category: String(input.category || "").trim().slice(0, 40),
            icon: String(input.icon || "").slice(0, 40) || (type === "income" ? "fa-arrow-down" : "fa-wallet"),
            source,
            bank: String(input.bank || "").slice(0, 40),
            transRef: input.transRef ? String(input.transRef).slice(0, 80) : null,
            dedupKey: input.dedupKey ? String(input.dedupKey).slice(0, 120) : null,
            createdAt: new Date(nowMs).toISOString(),
            timestamp: nowMs
        }
    };
}

/** ย้าย personal_expenses → wallet_entries (id เดิม, type=expense) ทำซ้ำได้ ไม่เขียนทับรายการที่ย้ายไปแล้ว ไม่ลบของเดิม */
export async function migratePersonalExpenses({ db, fs }) {
    const { collection, getDocs, doc, getDoc, setDoc } = fs;
    const snap = await getDocs(collection(db, "personal_expenses"));
    const result = { total: snap.docs.length, migrated: 0, skipped: 0, invalid: 0 };
    for (const d of snap.docs) {
        const x = d.data();
        const owner = normalizeName(x.payer);
        const amount = Number(x.amount);
        if (!owner || !Number.isFinite(amount) || amount <= 0 || typeof x.date !== "string" || x.date.length < 10) {
            result.invalid++;
            continue;
        }
        const ref = doc(db, WALLET_COL, d.id);
        if ((await getDoc(ref)).exists()) {
            result.skipped++;
            continue;
        }
        await setDoc(ref, {
            ...x,
            ownerName: owner,
            payer: owner,
            ownerMemberId: null,
            type: "expense",
            month: x.date.slice(0, 7),
            source: x.source || "migrated",
            migratedFrom: "personal_expenses"
        });
        result.migrated++;
    }
    return result;
}
