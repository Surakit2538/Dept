/**
 * โลโก้ร้าน/บริการดังที่ใช้บ่อย: เดาจากชื่อรายการ แล้วแสดงเป็นป้ายสีของแบรนด์แทนไอคอนหมวด (ใช้แค่หน้าตา ไม่เปลี่ยนหมวดหรือข้อมูล)
 * วาดเองแบบเรียบง่าย (ตัวอักษร/รูปทรงสีแบรนด์) ไม่ได้ใช้ไฟล์โลโก้จริง
 * text = ตัวอักษรบนป้าย, glyph = รูปทรงที่วาดใน ItemIcon (icons.jsx), round = ป้ายวงกลม
 */
export const BRANDS = [
    { key: "netflix", re: /netflix|เน็ตฟลิกซ์/, bg: "#141414", fg: "#e50914", text: "N" },
    { key: "youtube", re: /youtube|ยูทูบ/, bg: "#ffffff", fg: "#ff0000", glyph: "play", ring: true },
    { key: "spotify", re: /spotify|สปอติฟาย/, bg: "#1ed760", fg: "#000000", glyph: "waves", round: true },
    { key: "disney", re: /disney|ดิสนีย์/, bg: "#0e2a5c", fg: "#ffffff", text: "D+", round: true },
    { key: "apple", re: /apple|icloud|itunes/, bg: "#fa3a55", fg: "#ffffff", glyph: "note" },
    { key: "google", re: /google|กูเกิล/, bg: "#ffffff", fg: "#4285f4", text: "G", ring: true },
    { key: "chatgpt", re: /chatgpt|openai/, bg: "#10a37f", fg: "#ffffff", text: "AI" },
    { key: "claude", re: /claude|anthropic/, bg: "#d97757", fg: "#ffffff", text: "C" },
    { key: "lineman", re: /line ?man|ไลน์แมน|lpth\*pf|\blm_/, bg: "#06c755", fg: "#ffffff", text: "LM" },
    { key: "grab", re: /\bgrab|แกร็บ/, bg: "#00b14f", fg: "#ffffff", text: "Grab", small: true },
    { key: "foodpanda", re: /foodpanda|ฟู้ดแพนด้า/, bg: "#d70f64", fg: "#ffffff", text: "fp" },
    { key: "seven", re: /7-?11|7-eleven|seven ?eleven|เซเว่น/, bg: "#00a650", fg: "#ffffff", text: "7", glyph: "stripes" },
    { key: "amazon", re: /amazon|อเมซอน/, bg: "#1b5e20", fg: "#ffffff", glyph: "cup" },
    { key: "starbucks", re: /starbucks|สตาร์บัค/, bg: "#00704a", fg: "#ffffff", glyph: "cup", round: true },
    { key: "shopee", re: /shopee|ช้อปปี้/, bg: "#ee4d2d", fg: "#ffffff", glyph: "bag" },
    { key: "lazada", re: /lazada|ลาซาด้า/, bg: "#0f146d", fg: "#ffffff", text: "Lz" },
    { key: "mcdonald", re: /mcdonald|แมคโดนัลด์|แมค ?ดี/, bg: "#da291c", fg: "#ffc72c", text: "M" },
    { key: "kfc", re: /\bkfc|เคเอฟซี/, bg: "#a3080c", fg: "#ffffff", text: "KFC", small: true },
    { key: "ais", re: /\bais\b|เอไอเอส/, bg: "#7ab800", fg: "#ffffff", text: "ais", small: true },
    { key: "true", re: /\btrue\b|ทรูมูฟ|ทรูออนไลน์/, bg: "#e4002b", fg: "#ffffff", text: "true", small: true },
    { key: "3bb", re: /3bb/, bg: "#ffffff", fg: "#0055a5", text: "3BB", small: true, ring: true },
    { key: "ptt", re: /\bptt\b|ปตท/, bg: "#1e4fa3", fg: "#ffffff", text: "PTT", small: true },
    { key: "shell", re: /\bshell\b|เชลล์/, bg: "#fbce07", fg: "#dd1d21", text: "S" },
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
