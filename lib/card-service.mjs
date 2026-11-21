/**
 * บัตรเครดิต: บริการหลังบ้าน (ใช้ใน shortcut-service, งานเตือนรายวัน และปุ่ม "จ่ายแล้ว" ใน LINE) รับฐานข้อมูลเป็นพารามิเตอร์ ทดสอบได้
 * - ใช้ได้เฉพาะสมาชิกที่ผู้ดูแลเปิดให้ (members.cardAlerts === true)
 * - เอกสารเดียวต่อคนใน wallet_cards รหัสเอกสารมาจากชื่อที่ล็อกอิน จึงแก้บัตรของคนอื่นไม่ได้
 * - ยอดของรอบ = รวมรายจ่ายในกระเป๋า (wallet_entries) ที่ระบุบัตรนั้น อ่านเฉพาะเดือนที่รอบครอบคลุม
 * ห้าม import แพ็กเกจ npm
 */
import { normalizeName, getBangkokDateString } from "./slip-core.mjs";
import { WALLET_COL } from "./wallet-service.mjs";
import {
    CARDS_COL, CARD_MAX, cardsDocId, normalizeCards, cleanCardInput, newCardId, cardStatus, monthsNeeded,
    cycleSpend, cardLabel, trimKeys, cardForPayment
} from "./card-cycle.mjs";

export function createCardService({ db, fs, now = () => Date.now() }) {
    const { collection, doc, getDoc, getDocs, query, where, setDoc } = fs;
    const today = () => getBangkokDateString(new Date(now()));

    async function readCards(owner) {
        const ref = doc(db, CARDS_COL, cardsDocId(owner));
        const snap = await getDoc(ref);
        return { ref, exists: snap.exists(), cards: normalizeCards(snap.exists() ? snap.data() : {}) };
    }
    async function writeCards(ref, owner, cards) {
        await setDoc(ref, {
            ownerName: owner,
            cards: cards.map((c) => ({ ...c, paid: trimKeys(c.paid), sent: trimKeys(c.sent) })),
            updatedAt: new Date(now()).toISOString()
        });
    }

    /** สมาชิกคนนี้ผู้ดูแลเปิดเตือนบัตรให้ไหม */
    async function allowed(memberId) {
        if (!memberId) return false;
        const m = await getDoc(doc(db, "members", String(memberId)));
        return m.exists() && m.data().cardAlerts === true;
    }

    /** รายจ่ายในกระเป๋าของเจ้าของ เฉพาะเดือนที่ใช้ (ไม่อ่านทั้งประวัติ) */
    async function loadItems(owner, months) {
        if (!months.length) return [];
        const snap = await getDocs(query(collection(db, WALLET_COL), where("ownerName", "==", owner), where("month", "in", months.slice(0, 10))));
        return snap.docs.map((d) => {
            const x = d.data();
            return { id: d.id, type: x.type === "income" ? "income" : "expense", date: x.date || "", desc: x.desc || "", amount: Number(x.amount) || 0, icon: x.icon || "", card: x.card || "", bank: x.bank || "", cardId: x.cardId || "" };
        });
    }

    const brief = (list) => list.slice().sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, 60).map((x) => ({ id: x.id, date: x.date, desc: x.desc, amount: x.amount, icon: x.icon }));

    /** บัตรทั้งหมดพร้อมยอดรอบที่ต้องจ่าย/รอบที่ใช้อยู่ และรายการในแต่ละรอบ */
    async function list(owner) {
        const { cards } = await readCards(owner);
        const t = today();
        const items = await loadItems(owner, monthsNeeded(cards, t));
        return cards.map((c) => {
            const s = cardStatus(c, cards, items, t);
            if (s.due) s.due.items = brief(cycleSpend(c, cards, items, s.due.start, s.due.end).items);
            s.open.items = brief(cycleSpend(c, cards, items, s.open.start, s.open.end).items);
            return s;
        });
    }

    async function save(owner, body) {
        const c = cleanCardInput(body);
        if (!c.ok) return { ok: false, code: 400, message: c.message };
        const { ref, cards } = await readCards(owner);
        const id = typeof body.id === "string" ? body.id.trim() : "";
        if (id) {
            const i = cards.findIndex((x) => x.id === id);
            if (i < 0) return { ok: false, code: 404, message: "ไม่พบบัตรนี้" };
            cards[i] = { ...cards[i], ...c.card };
        } else {
            if (cards.length >= CARD_MAX) return { ok: false, code: 400, message: `เพิ่มบัตรได้ไม่เกิน ${CARD_MAX} ใบ` };
            if (c.card.last4 && cards.some((x) => x.bank === c.card.bank && x.last4 === c.card.last4)) return { ok: false, code: 400, message: "มีบัตรนี้อยู่แล้ว" };
            cards.push({ id: newCardId(now(), cards), ...c.card, createdAt: new Date(now()).toISOString(), paid: {}, sent: {} });
        }
        await writeCards(ref, owner, cards);
        return { ok: true, message: id ? `แก้บัตร ${cardLabel(c.card)} แล้ว` : `เพิ่มบัตร ${cardLabel(c.card)} แล้ว` };
    }

    async function remove(owner, id) {
        const { ref, cards } = await readCards(owner);
        const card = cards.find((x) => x.id === id);
        if (!card) return { ok: false, code: 404, message: "ไม่พบบัตรนี้" };
        await writeCards(ref, owner, cards.filter((x) => x.id !== id));
        return { ok: true, message: `ลบบัตร ${cardLabel(card)} แล้ว` };
    }

    /** กด "จ่ายแล้ว" (paid = true) หรือยกเลิก (false) ของรอบ key ไม่ระบุ key = รอบที่ต้องจ่ายตอนนี้ */
    async function setPaid(owner, id, paid = true, key = "") {
        const { ref, cards } = await readCards(owner);
        const card = cards.find((x) => x.id === id);
        if (!card) return { ok: false, code: 404, message: "ไม่พบบัตรนี้" };
        const s = cardStatus(card, cards, [], today());
        const k = /^\d{4}-\d{2}$/.test(String(key || "")) ? key : (s.due ? s.due.key : "");
        if (!k) return { ok: false, code: 400, message: "ตอนนี้ยังไม่มีรอบที่ต้องจ่าย" };
        if (paid) card.paid = { ...card.paid, [k]: new Date(now()).toISOString() };
        else { card.paid = { ...card.paid }; delete card.paid[k]; }
        await writeCards(ref, owner, cards);
        return { ok: true, card, key: k, message: paid ? `จ่ายบัตร ${cardLabel(card)} แล้ว ไม่เตือนรอบนี้อีก` : `ยกเลิก จ่ายแล้ว ของบัตร ${cardLabel(card)}` };
    }

    /** สลิปจ่ายบิลบัตรเข้ามา: ถ้าระบุได้ว่าเป็นบัตรใบไหน (ชื่อธนาคาร/เลขท้ายในสลิป หรือค้างจ่ายอยู่ใบเดียว) ถือว่าจ่ายแล้ว */
    async function markPaidFromSlip(owner, payeeText) {
        try {
            const { exists, cards } = await readCards(owner);
            if (!exists || !cards.length) return "";
            const id = cardForPayment(cards, payeeText, today());
            if (!id) return "";
            const r = await setPaid(owner, id, true);
            return r.ok ? cardLabel(r.card) : "";
        } catch (e) {
            console.warn("markPaidFromSlip:", e && e.message);
            return "";
        }
    }

    return { readCards, writeCards, allowed, loadItems, list, save, remove, setPaid, markPaidFromSlip, ownerOf: normalizeName };
}

/** โควต้าข้อความ LINE ที่ส่งหาเองได้ต่อเดือน และที่ใช้ไปแล้ว (ข้อความตอบกลับในแชตไม่นับ) */
export async function lineQuota({ fetchFn, token }) {
    if (!token || !fetchFn) return { ok: false };
    const h = { Authorization: `Bearer ${token}` };
    const [q, c] = await Promise.all([
        fetchFn("https://api.line.me/v2/bot/message/quota", { headers: h }),
        fetchFn("https://api.line.me/v2/bot/message/quota/consumption", { headers: h })
    ]);
    if (!q.ok || !c.ok) return { ok: false };
    const qj = await q.json();
    const cj = await c.json();
    return { ok: true, limit: qj.type === "limited" ? Number(qj.value) || 0 : null, used: Number(cj.totalUsage) || 0 };
}
