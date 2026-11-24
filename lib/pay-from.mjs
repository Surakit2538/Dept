/**
 * จ่ายจากบัญชี/บัตรไหน (เรื่อง 7 แบบ A, 24 พ.ย. 2569) ติดป้ายอย่างเดียว ไม่มียอดคงเหลือ
 * รายการกระเป๋าเก็บ cardId (บัตรใน wallet_cards ของเจ้าของ) หรือ account (เงินสด/ธนาคาร ในรายการด้านล่าง) อย่างใดอย่างหนึ่ง
 * รายการจาก SMS/อีเมลบัตรยังใช้ card (เช่น "ttb-2468") เหมือนเดิม lib/card-cycle.mjs cardIdForItem จับคู่เข้ากับบัตรให้
 * สีวัดจากเว็บทางการของแต่ละธนาคาร (24 พ.ย. 2569: โลโก้ ถ้าโลโก้เป็นสีขาวใช้สีหลักของหน้าเว็บ) เงินสดใช้สีรับเงินของแอป
 * เจ้าของไม่ได้ตอบ 2 ข้อ: ใช้รายชื่อธนาคารที่ตั้งไว้ (ไม่ตั้งชื่อบัญชีเอง) และทำเฉพาะรายจ่ายส่วนตัว (ไม่ทำบิลกลุ่ม)
 */
export const PAY_ACCOUNTS = [
    { key: "cash", label: "เงินสด", short: "฿", bg: "#0f7f63", fg: "#ffffff" },
    { key: "kbank", label: "กสิกรไทย", short: "K", bg: "#009b3b", fg: "#ffffff" },
    { key: "scb", label: "ไทยพาณิชย์", short: "SCB", bg: "#462279", fg: "#ffffff" },
    { key: "ktb", label: "กรุงไทย", short: "KTB", bg: "#00a6e6", fg: "#ffffff" },
    { key: "bbl", label: "กรุงเทพ", short: "BBL", bg: "#0064ff", fg: "#ffffff" },
    { key: "bay", label: "กรุงศรี", short: "BAY", bg: "#ffd400", fg: "#2e2100" },
    { key: "ttb", label: "ttb", short: "ttb", bg: "#002d63", fg: "#ffffff" },
    { key: "gsb", label: "ออมสิน", short: "GSB", bg: "#ec008c", fg: "#ffffff" },
    { key: "uob", label: "UOB", short: "UOB", bg: "#005cb9", fg: "#ffffff" },
    { key: "truemoney", label: "TrueMoney", short: "TM", bg: "#f47721", fg: "#ffffff" }
];
const KEYS = new Set(PAY_ACCOUNTS.map((a) => a.key));

export const accountOf = (key) => PAY_ACCOUNTS.find((a) => a.key === key) || null;

/**
 * ตรวจค่าที่ส่งมา: คืน { ok, fields } fields มีเฉพาะช่องที่ส่งมา (undefined = ไม่แตะ)
 * เลือกบัตร = ล้าง account / เลือกบัญชี = ล้าง cardId / ส่งค่าว่างทั้งคู่ = ไม่ระบุ
 */
export function cleanPayFrom(input) {
    const b = input && typeof input === "object" ? input : {};
    const hasCard = b.cardId !== undefined;
    const hasAcc = b.account !== undefined;
    if (!hasCard && !hasAcc) return { ok: true, fields: {} };
    const cardId = hasCard ? String(b.cardId || "").trim() : "";
    const account = hasAcc ? String(b.account || "").trim() : "";
    if (cardId && !/^[A-Za-z0-9_-]{1,40}$/.test(cardId)) return { ok: false, message: "บัตรไม่ถูกต้อง" };
    if (account && !KEYS.has(account)) return { ok: false, message: "บัญชีไม่ถูกต้อง" };
    if (cardId && account) return { ok: false, message: "เลือกได้อย่างเดียว บัตรหรือบัญชี" };
    return { ok: true, fields: { cardId, account } };
}

/** กุญแจป้ายของรายการ (ใช้กรองในหน้ารายการ) c:<บัตร> / a:<บัญชี> / s:<ป้ายจาก SMS ที่จับคู่บัตรไม่ได้> / "" ไม่ระบุ */
export function payKeyOf(item, cardIdFor = () => "") {
    if (!item) return "";
    const cid = item.cardId || cardIdFor(item);
    if (cid) return "c:" + cid;
    if (item.account && KEYS.has(item.account)) return "a:" + item.account;
    if (item.card) return "s:" + item.card;
    return "";
}
