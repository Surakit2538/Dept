/**
 * โลโก้ร้าน/บริการดังที่ใช้บ่อย: เดาจากชื่อรายการ แล้วแสดงเป็นป้ายสีของแบรนด์แทนไอคอนหมวด (ใช้แค่หน้าตา ไม่เปลี่ยนหมวดหรือข้อมูล)
 * si = ชื่อไอคอนจริงใน brand-paths.js (Simple Icons) / ไม่มี si = วาดเองแบบเรียบง่าย (text = ตัวอักษรบนป้าย, glyph = stripes)
 * ring = ป้ายขาวมีเส้นขอบบางๆ, round = ป้ายวงกลม, small = ตัวอักษรเล็ก (ชื่อยาว)
 * ลำดับสำคัญ: ตัวที่เฉพาะกว่าอยู่ก่อน (เช่น youtube ก่อน google, apple music ก่อน apple)
 */
export const BRANDS = [
    { key: "netflix", re: /netflix|เน็ตฟลิกซ์/, bg: "#000000", fg: "#e50914", si: "netflix" },
    { key: "youtube", re: /youtube|ยูทูบ/, bg: "#ffffff", fg: "#ff0000", si: "youtube", ring: true },
    { key: "spotify", re: /spotify|สปอติฟาย/, bg: "#191414", fg: "#1ed760", si: "spotify" },
    { key: "disney", re: /disney|ดิสนีย์/, bg: "#0e2a5c", fg: "#ffffff", text: "D+", round: true },
    { key: "applemusic", re: /apple ?music/, bg: "#fa243c", fg: "#ffffff", si: "applemusic" },
    { key: "icloud", re: /icloud/, bg: "#3693f3", fg: "#ffffff", si: "icloud" },
    { key: "apple", re: /apple|itunes/, bg: "#000000", fg: "#ffffff", si: "apple" },
    { key: "googlecloud", re: /google ?cloud/, bg: "#ffffff", fg: "#4285f4", si: "googlecloud", ring: true },
    { key: "google", re: /google|กูเกิล/, bg: "#ffffff", fg: "#4285f4", si: "google", ring: true },
    { key: "chatgpt", re: /chatgpt|openai/, bg: "#000000", fg: "#ffffff", si: "openai" },
    { key: "claude", re: /claude|anthropic/, bg: "#d97757", fg: "#ffffff", si: "anthropic" },
    { key: "lineman", re: /line ?man|ไลน์แมน|lpth\*pf|\blm_/, bg: "#06c755", fg: "#ffffff", text: "LM" },
    { key: "line", re: /\bline\b|ไลน์/, bg: "#06c755", fg: "#ffffff", si: "line" },
    { key: "grab", re: /\bgrab|แกร็บ/, bg: "#00b14f", fg: "#ffffff", si: "grab" },
    { key: "foodpanda", re: /foodpanda|ฟู้ดแพนด้า/, bg: "#d70f64", fg: "#ffffff", si: "foodpanda" },
    { key: "seven", re: /7-?11|7-eleven|seven ?eleven|เซเว่น/, bg: "#00a650", fg: "#ffffff", text: "7", glyph: "stripes" },
    { key: "amazon", re: /amazon|อเมซอน/, bg: "#1b5e20", fg: "#ffffff", text: "Az", small: true },
    { key: "starbucks", re: /starbucks|สตาร์บัค/, bg: "#006241", fg: "#ffffff", si: "starbucks", round: true },
    { key: "shopee", re: /shopee|ช้อปปี้/, bg: "#ee4d2d", fg: "#ffffff", si: "shopee" },
    { key: "lazada", re: /lazada|ลาซาด้า/, bg: "#0f146d", fg: "#ffffff", text: "Lz" },
    { key: "mcdonald", re: /mcdonald|แมคโดนัลด์|แมค ?ดี/, bg: "#da291c", fg: "#ffc72c", si: "mcdonalds" },
    { key: "kfc", re: /\bkfc|เคเอฟซี/, bg: "#e4002b", fg: "#ffffff", si: "kfc" },
    { key: "ais", re: /\bais\b|เอไอเอส/, bg: "#7ab800", fg: "#ffffff", text: "ais", small: true },
    { key: "true", re: /\btrue\b|ทรูมูฟ|ทรูออนไลน์/, bg: "#e4002b", fg: "#ffffff", text: "true", small: true },
    { key: "3bb", re: /3bb/, bg: "#ffffff", fg: "#0055a5", text: "3BB", small: true, ring: true },
    { key: "ptt", re: /\bptt\b|ปตท/, bg: "#1e4fa3", fg: "#ffffff", text: "PTT", small: true },
    { key: "shell", re: /\bshell\b|เชลล์/, bg: "#ffd500", fg: "#dd1d21", si: "shell" },
    { key: "lotus", re: /lotus|โลตัส/, bg: "#00a19a", fg: "#ffffff", text: "L" },
    { key: "bigc", re: /big ?c\b|บิ๊กซี/, bg: "#c4d600", fg: "#1f5e2e", text: "C" },
    { key: "makro", re: /makro|แม็คโคร|แมคโคร/, bg: "#e30613", fg: "#ffd600", text: "m" }
];

/** แบรนด์จากชื่อรายการ (ไม่พบ = null) */
export function brandOf(desc) {
    const d = String(desc || "").toLowerCase();
    if (!d.trim()) return null;
    return BRANDS.find((b) => b.re.test(d)) || null;
}
