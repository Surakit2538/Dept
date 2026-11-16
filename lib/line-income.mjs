/**
 * พิมพ์รายรับในแชต LINE ส่วนตัว เช่น "เงินเดือน 25000", "โบนัส 5,000 บาท", "รายรับ ฟรีแลนซ์ 3000"
 * ต้องขึ้นต้นด้วยคำที่บอกว่าเป็นรายรับ และมีตัวเลขเป็นจำนวนเงิน ไม่งั้นไม่ถือว่าเป็นรายรับ (กันตีความข้อความทั่วไปผิด)
 */
const KEYWORDS = ["เงินเดือน", "รายรับ", "รายได้", "โบนัส", "ค่าจ้าง", "ค่าคอมมิชชั่น", "ค่าคอม", "ดอกเบี้ย", "เงินเข้า", "ได้เงิน", "รับเงิน"];
const GENERIC = new Set(["รายรับ", "รายได้", "เงินเข้า", "ได้เงิน", "รับเงิน"]);
const NUM = "(\\d{1,3}(?:,\\d{3})+|\\d+)(?:\\.(\\d{1,2}))?";
const TAIL = "\\s*(?:บาท|฿)?";

const toAmount = (whole, frac) => Number(String(whole).replace(/,/g, "") + (frac ? "." + frac : ""));

/** คืน { desc, amount } หรือ null ถ้าไม่ใช่ข้อความรายรับ */
export function parseIncomeText(input) {
    const text = String(input || "").replace(/\s+/g, " ").trim();
    if (!text || text.length > 80) return null;
    const kw = KEYWORDS.find((k) => text.startsWith(k));
    if (!kw) return null;
    const rest = text.slice(kw.length).trim();
    let extra = "";
    let amount = NaN;
    // รูปแบบ: คำหลัก [รายละเอียด] จำนวน  หรือ  คำหลัก จำนวน [รายละเอียด]
    let m = rest.match(new RegExp(`^(.*?)\\s*${NUM}${TAIL}$`));
    if (m) { extra = m[1].trim(); amount = toAmount(m[2], m[3]); }
    else {
        m = rest.match(new RegExp(`^${NUM}${TAIL}\\s+(.+)$`));
        if (m) { extra = m[3].trim(); amount = toAmount(m[1], m[2]); }
    }
    if (!Number.isFinite(amount) || amount <= 0 || amount > 100000000) return null;
    if (/[-+−]$/.test(extra) || extra.startsWith("-")) return null; // เครื่องหมายลบ/บวกนำหน้าตัวเลข ไม่แน่ใจ ไม่บันทึกเอง
    if (/\d/.test(extra)) return null; // มีตัวเลขอื่นปนในรายละเอียด ไม่แน่ใจ ไม่บันทึกเอง
    const desc = GENERIC.has(kw) ? (extra || kw) : (extra ? `${kw} ${extra}` : kw);
    return { desc: desc.slice(0, 100), amount: Math.round(amount * 100) / 100 };
}
