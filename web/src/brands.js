/**
 * โลโก้ร้าน/บริการดังที่ใช้บ่อย: เดาจากชื่อรายการ แล้วแสดงเป็นป้ายสีของแบรนด์แทนไอคอนหมวด (ใช้แค่หน้าตา ไม่เปลี่ยนหมวดหรือข้อมูล)
 * real(...) = มีโลโก้จริง (Simple Icons, ข้อมูลรูปอยู่ brand-paths.js โหลดเมื่อต้องใช้) สีพื้นจากสีแบรนด์ใน brand-hex.js
 * color(...) = ไม่มีโลโก้จริงในชุดฟรี: ใช้สีแบรนด์เป็นพื้นป้าย + ไอคอนหมวดของรายการ (ไม่วาดโลโก้ปลอมขึ้นมาเอง)
 * ring = ป้ายขาวมีเส้นขอบบางๆ, round = ป้ายวงกลม
 * ลำดับสำคัญ: ตัวที่เฉพาะกว่าอยู่ก่อน (youtube music ก่อน youtube, apple music ก่อน apple, คาเฟ่อเมซอนก่อน amazon)
 */
import { SI_HEX } from "./brand-hex.js";

const isLight = (hex) => {
    const n = parseInt(hex.slice(1), 16);
    return 0.299 * ((n >> 16) & 255) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255) > 170;
};
const ink = (bg) => (isLight(bg) ? "#111111" : "#ffffff");
const real = (key, re, si, o = {}) => { const bg = o.bg || "#" + SI_HEX[si]; return { key, re, si, bg, fg: o.fg || ink(bg), ...o }; };
const ringed = (key, re, si) => real(key, re, si, { bg: "#ffffff", fg: "#" + SI_HEX[si], ring: true });
const color = (key, re, bg, o = {}) => ({ key, re, bg, fg: o.fg || ink(bg), ...o });

export const BRANDS = [
    real("netflix", /netflix|เน็ตฟลิกซ์/, "netflix", { bg: "#000000", fg: "#e50914" }),
    real("youtubemusic", /youtube ?music|ยูทูบ ?มิวสิค/, "youtubemusic"),
    ringed("youtube", /youtube|ยูทูบ/, "youtube"),
    real("spotify", /spotify|สปอติฟาย/, "spotify", { bg: "#191414", fg: "#1ed760" }),
    color("disney", /disney|ดิสนีย์/, "#113ccf"),
    real("hbo", /\bhbo\b/, "hbo"),
    real("applemusic", /apple ?music/, "applemusic"),
    real("icloud", /icloud/, "icloud"),
    real("apple", /apple|itunes/, "apple"),
    ringed("googlecloud", /google ?cloud/, "googlecloud"),
    ringed("googledrive", /google ?(drive|one)/, "googledrive"),
    ringed("googleplay", /google ?play/, "googleplay"),
    ringed("google", /google|กูเกิล/, "google"),
    real("chatgpt", /chatgpt|openai/, "openai", { bg: "#10a37f", fg: "#ffffff" }),
    real("claude", /claude|anthropic/, "anthropic", { bg: "#d97757", fg: "#ffffff" }),
    color("lineman", /line ?man|ไลน์แมน|lpth\*pf|\blm_/, "#06c755"),
    real("line", /\bline\b|ไลน์/, "line", { bg: "#06c755", fg: "#ffffff" }),
    real("grab", /\bgrab|แกร็บ/, "grab"),
    real("uber", /\buber\b/, "uber"),
    real("foodpanda", /foodpanda|ฟู้ดแพนด้า/, "foodpanda"),
    color("seven", /7-?11|7-eleven|seven ?eleven|เซเว่น/, "#00a650"),
    color("cafeamazon", /caf[eé] ?amazon|คาเฟ่ ?อเมซอน|อเมซอน/, "#00693c"),
    real("amazon", /\bamazon\b/, "amazon", { bg: "#232f3e", fg: "#ff9900" }),
    real("starbucks", /starbucks|สตาร์บัค/, "starbucks", { round: true }),
    real("shopee", /shopee|ช้อปปี้/, "shopee"),
    color("lazada", /lazada|ลาซาด้า/, "#0f146d"),
    real("aliexpress", /aliexpress|อาลีเอ็กซ์/, "aliexpress"),
    real("mcdonald", /mcdonald|แมคโดนัลด์|แมค ?ดี/, "mcdonalds", { bg: "#da291c", fg: "#ffc72c" }),
    real("kfc", /\bkfc|เคเอฟซี/, "kfc"),
    color("ais", /\bais\b|เอไอเอส/, "#8dc63f"),
    color("true", /\btrue\b|ทรูมูฟ|ทรูออนไลน์/, "#ee2e24"),
    color("3bb", /3bb/, "#0055a5"),
    color("ptt", /\bptt\b|ปตท/, "#00439c"),
    real("shell", /\bshell\b|เชลล์/, "shell", { bg: "#ffd500", fg: "#dd1d21" }),
    color("lotus", /lotus|โลตัส/, "#00a651"),
    color("bigc", /big ?c\b|บิ๊กซี/, "#ed1c24"),
    color("makro", /makro|แม็คโคร|แมคโคร/, "#003d8f"),
    real("airasia", /airasia|แอร์เอเชีย/, "airasia"),
    real("airbnb", /airbnb/, "airbnb"),
    real("expedia", /expedia/, "expedia"),
    real("tripadvisor", /tripadvisor/, "tripadvisor"),
    real("tiktok", /tiktok|ติ๊กต็อก/, "tiktok"),
    real("instagram", /instagram/, "instagram"),
    real("facebook", /facebook|เฟซบุ๊ก/, "facebook"),
    real("whatsapp", /whatsapp/, "whatsapp"),
    real("telegram", /telegram/, "telegram"),
    real("discord", /discord/, "discord"),
    real("twitch", /twitch/, "twitch"),
    real("steam", /steam|สตีม/, "steam"),
    real("playstation", /playstation|เพลย์สเตชัน|\bpsn\b/, "playstation"),
    real("nintendo", /nintendo|นินเทนโด/, "nintendoswitch"),
    real("roblox", /roblox/, "roblox"),
    real("soundcloud", /soundcloud/, "soundcloud"),
    real("tidal", /\btidal\b/, "tidal"),
    real("linkedin", /linkedin/, "linkedin"),
    real("patreon", /patreon/, "patreon"),
    real("paypal", /paypal/, "paypal"),
    real("github", /github/, "github"),
    real("adobe", /adobe/, "adobe"),
    real("dropbox", /dropbox/, "dropbox"),
    real("canva", /canva/, "canva"),
    real("notion", /notion/, "notion"),
    real("figma", /figma/, "figma"),
    real("zoom", /\bzoom\b/, "zoom"),
    real("slack", /\bslack\b/, "slack"),
    real("samsung", /samsung|ซัมซุง/, "samsung"),
    real("ikea", /ikea|อิเกีย/, "ikea"),
    real("uniqlo", /uniqlo|ยูนิโคล่/, "uniqlo"),
    real("handm", /h&m/, "handm"),
    real("zara", /\bzara\b/, "zara"),
    real("nike", /\bnike\b|ไนกี้/, "nike"),
    real("adidas", /adidas|อาดิดาส/, "adidas"),
    real("toyota", /toyota|โตโยต้า|โตโยตา/, "toyota"),
    real("honda", /honda|ฮอนด้า|civic|ซีวิค/, "honda"),
    real("mazda", /mazda|มาสด้า/, "mazda"),
    real("nissan", /nissan|นิสสัน/, "nissan"),
    real("mitsubishi", /mitsubishi|มิตซู/, "mitsubishi"),
    real("bmw", /\bbmw\b/, "bmw"),
    real("mercedes", /mercedes|benz|เบนซ์/, "mercedes"),
    real("tesla", /tesla|เทสล่า/, "tesla"),
    real("suzuki", /suzuki|ซูซูกิ/, "suzuki")
];

/** แบรนด์จากชื่อรายการ (ไม่พบ = null) */
export function brandOf(desc) {
    const d = String(desc || "").toLowerCase();
    if (!d.trim()) return null;
    return BRANDS.find((b) => b.re.test(d)) || null;
}
