/**
 * คำนวณงวดผ่อนชำระ (ใช้ร่วมกันทั้งหน้าเว็บและบอท LINE)
 * - วันที่: บวกทีละเดือนแบบไม่ล้นเดือน (31 ม.ค. + 1 เดือน = 28/29 ก.พ. ไม่ใช่ 3 มี.ค.)
 * - เงิน: คิดเป็นสตางค์ เศษที่หารไม่ลงตัวไล่ให้งวดแรกๆ ทำให้ผลรวมทุกงวดเท่ากับยอดเต็มเป๊ะ
 *   และผลรวมส่วนของแต่ละคนในงวดหนึ่ง = ยอดของงวดนั้นเสมอ
 */
const satang = (v) => {
    const n = Number(v);
    return Number.isFinite(n) ? Math.round(n * 100) : 0;
};

export const MAX_INSTALLMENTS = 60;

/** 'YYYY-MM-DD' + months → 'YYYY-MM-DD' (วันที่เกินเดือนปลายทางจะถอยเป็นวันสุดท้ายของเดือน) */
export function addMonthsClamped(dateStr, months) {
    const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(dateStr || ""));
    if (!m) throw new Error("รูปแบบวันที่ไม่ถูกต้อง");
    const y = Number(m[1]);
    const mo = Number(m[2]) - 1;
    const d = Number(m[3]);
    const total = y * 12 + mo + Number(months);
    const ny = Math.floor(total / 12);
    const nm = total - ny * 12;
    const last = new Date(Date.UTC(ny, nm + 1, 0)).getUTCDate();
    const nd = Math.min(d, last);
    return `${String(ny).padStart(4, "0")}-${String(nm + 1).padStart(2, "0")}-${String(nd).padStart(2, "0")}`;
}

/**
 * @param {{amount:number, installments:number, splits:Record<string,number>, date:string}} p
 * @returns {Array<{index:number, date:string, amount:number, splits:Record<string,number>}>}
 */
export function splitInstallments({ amount, installments, splits, date }) {
    const n = Number(installments);
    if (!Number.isInteger(n) || n < 1 || n > MAX_INSTALLMENTS) {
        throw new Error(`จำนวนงวดต้องเป็นเลข 1–${MAX_INSTALLMENTS}`);
    }
    const names = Object.keys(splits || {});
    if (names.length === 0) throw new Error("ไม่มีผู้ร่วมจ่าย");
    const totalSat = satang(amount);
    if (totalSat <= 0) throw new Error("ยอดเงินไม่ถูกต้อง");

    // ส่วนของแต่ละคน (สตางค์) ปรับให้ผลรวมเท่ายอดเต็มพอดี (เศษจากทศนิยมไปลงคนแรกที่ส่วนมากที่สุด)
    const person = names.map((k) => [k, satang(splits[k])]);
    const diff = totalSat - person.reduce((a, [, v]) => a + v, 0);
    if (diff !== 0) {
        let big = 0;
        person.forEach(([, v], i) => { if (v > person[big][1]) big = i; });
        person[big][1] += diff;
    }

    const out = [];
    for (let i = 0; i < n; i++) {
        const parts = {};
        let sum = 0;
        for (const [k, v] of person) {
            const base = Math.floor(v / n);
            const extra = i < v - base * n ? 1 : 0; // เศษไล่ให้งวดแรกๆ
            parts[k] = (base + extra) / 100;
            sum += base + extra;
        }
        out.push({ index: i + 1, date: addMonthsClamped(date, i), amount: sum / 100, splits: parts });
    }
    return out;
}
