/**
 * พิมพ์รายจ่ายส่วนตัวสั้นๆ ในแชต LINE ส่วนตัวกับบอท เช่น "กาแฟ 65", "ข้าวมันไก่ 50 บาท", "65 บาท กาแฟ"
 * บันทึกลงกระเป๋าของคนที่พิมพ์ (เห็นคนเดียว) แล้วลบทีหลังได้ด้วยคำว่า "ลบรายการล่าสุด" (ภายใน 15 นาที)
 *
 * ออกแบบให้ "ไม่แน่ใจ = ไม่บันทึก" (คืน null ให้ไปทางเดิมของบอท เช่น AI ช่วยหารกับเพื่อน):
 *   - ต้องเป็นรูป  ชื่อ + ช่องว่าง + ยอด  (หรือ  ยอด + บาท + ชื่อ)  ชื่อห้ามมีตัวเลข
 *   - ชื่อที่มีคำว่า หาร/ยืม/คืน/ให้ แปลว่าเกี่ยวกับเพื่อน ไม่บันทึกเป็นรายจ่ายส่วนตัว
 *   - ข้อความที่ขึ้นต้นด้วยคำรายรับ (เงินเดือน, โบนัส ฯลฯ) เป็นเรื่องของ lib/line-income.mjs
 * ห้าม import แพ็กเกจ npm (Vercel หาแพ็กเกจจากโฟลเดอร์ api/)
 */
import { buildWalletEntry, WALLET_COL } from "./wallet-service.mjs";
import { guessCategoryFa } from "./categories.mjs";

export const UNDO_COMMAND = "ลบรายการล่าสุด";
export const UNDO_WINDOW_MS = 15 * 60 * 1000;
export const LAST_ENTRY_COL = "line_last_entry";
const MAX_QUICK_AMOUNT = 500000;

const NUM = /(\d{1,3}(?:,\d{3})+|\d+)(?:\.(\d{1,2}))?/.source;
const NAME_FIRST = new RegExp(/^(.+?)(?:\s+|\s*฿\s*)/.source + NUM + /\s*(?:บาท|฿)?$/.source);
const NUM_FIRST = new RegExp(/^฿?\s*/.source + NUM + /\s*(?:บาท|฿)\s+(.+)$/.source);
const INCOME_WORDS = /^(?:เงินเดือน|รายรับ|รายได้|โบนัส|ค่าจ้าง|ค่าคอม|ดอกเบี้ย|เงินเข้า|ได้เงิน|รับเงิน)/;
const FRIEND_WORDS = /หาร|ยืม|คืน|ให้/;

const toAmount = (whole, frac) => Number(String(whole).replace(/,/g, "") + (frac ? "." + frac : ""));

/** คืน { desc, amount } หรือ null ถ้าไม่ใช่รายจ่ายสั้นๆ ที่ชัดเจน */
export function parseQuickExpense(input) {
    const text = String(input || "").replace(/\s+/g, " ").trim();
    if (!text || text.length > 60 || text.includes("://")) return null;

    let desc = "";
    let amount = NaN;
    let m = NAME_FIRST.exec(text);
    if (m) {
        desc = m[1].trim();
        amount = toAmount(m[2], m[3]);
    } else if ((m = NUM_FIRST.exec(text))) {
        amount = toAmount(m[1], m[2]);
        desc = m[3].trim();
    } else {
        return null;
    }

    if (!Number.isFinite(amount) || amount <= 0 || amount > MAX_QUICK_AMOUNT) return null;
    if (!desc || desc.length > 40 || /\d/.test(desc) || !/[A-Za-zก-๙]/.test(desc)) return null;
    if (INCOME_WORDS.test(desc) || FRIEND_WORDS.test(desc)) return null;
    return { desc, amount: Math.round(amount * 100) / 100 };
}

/** บันทึก/ลบรายจ่ายสั้นๆ (ใช้ฐานข้อมูลที่ส่งเข้ามา ทดสอบกับ fake-firestore ได้) */
export function createQuickExpenseService({ db, fs, now = () => Date.now() }) {
    const { collection, doc, getDoc, addDoc, setDoc, deleteDoc } = fs;

    async function save(userId, memberName, quick) {
        const built = buildWalletEntry(
            { type: "expense", amount: quick.amount, desc: quick.desc, icon: guessCategoryFa(quick.desc) || undefined, source: "line" },
            { ownerName: memberName, nowMs: now() }
        );
        if (!built.ok) return { ok: false, message: built.message };
        const ref = await addDoc(collection(db, WALLET_COL), built.entry);
        await setDoc(doc(db, LAST_ENTRY_COL, userId), { id: ref.id, desc: built.entry.desc, amount: built.entry.amount, ts: now() });
        return { ok: true, id: ref.id, entry: built.entry };
    }

    async function undo(userId) {
        const lastRef = doc(db, LAST_ENTRY_COL, userId);
        const snap = await getDoc(lastRef);
        if (!snap.exists()) return { ok: false, reason: "none" };
        const last = snap.data();
        if (now() - Number(last.ts) > UNDO_WINDOW_MS) {
            await deleteDoc(lastRef);
            return { ok: false, reason: "expired" };
        }
        await deleteDoc(doc(db, WALLET_COL, String(last.id)));
        await deleteDoc(lastRef);
        return { ok: true, desc: last.desc, amount: last.amount };
    }

    return { save, undo };
}
