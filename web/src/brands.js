/**
 * โลโก้ร้าน/บริการดังที่ใช้บ่อย: เดาจากชื่อรายการ แล้วแสดงเป็นป้ายสีของแบรนด์แทนไอคอนหมวด (ใช้แค่หน้าตา ไม่เปลี่ยนหมวดหรือข้อมูล)
 * real(...) = มีโลโก้จริง (Simple Icons, ไฟล์ละแบรนด์ใน brand-icons/<slug>.js โหลดเมื่อต้องใช้) สีพื้นจากสีแบรนด์ใน brand-hex.js
 * color(...) = ไม่มีโลโก้จริงในชุดฟรี: ใช้สีแบรนด์เป็นพื้นป้าย + ไอคอนหมวด (icon = ไอคอนหมวดที่ใช้แทน) ไม่วาดโลโก้ปลอมขึ้นมาเอง
 * word(...) = บริษัทที่ไม่มีโลโก้จริงในชุดฟรี (บริษัทประกัน): ชื่อย่อที่บริษัทใช้จริงบนสีบริษัท
 * สีของ color/word วัดจากโลโก้บนเว็บทางการของแต่ละบริษัท (พ.ย. 2569) แบรนด์ที่ตรวจสีไม่ได้ไม่ใส่ (ใช้ไอคอนหมวดตามปกติ)
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
const word = (key, re, text, bg, o = {}) => ({ key, re, text, bg, fg: o.fg || ink(bg), ...o });

export const BRANDS = [
    // ---------- บริษัทประกัน (ชื่อย่อบนสีบริษัท) ----------
    word("aia", /\baia\b|เอไอเอ/, "AIA", "#d31145"),
    word("axa", /\baxa\b|แอกซ่า/, "AXA", "#00008f"),
    word("fwd", /\bfwd\b|เอฟดับบลิวดี/, "FWD", "#183028", { fg: "#ee7623" }),
    word("allianz", /allianz|อลิอันซ์/, "Allianz", "#003781"),
    word("prudential", /prudential|พรูเด็นเชียล/, "PRU", "#ed1b2e"),
    word("muangthailife", /muang ?thai ?life|เมืองไทยประกันชีวิต/, "MTL", "#388fca"),
    word("thailife", /thai ?life|ไทยประกันชีวิต/, "TLI", "#007ac1"),
    word("bangkoklife", /bangkok ?life|กรุงเทพประกันชีวิต/, "BLA", "#003394"),
    word("generali", /generali|เจนเนอราลี่/, "Generali", "#c1210d"),
    word("manulife", /manulife|แมนูไลฟ์/, "Manulife", "#00a758"),
    word("dhipaya", /dhipaya|ทิพยประกัน/, "ทิพย", "#ec2227"),
    word("viriyah", /viriyah|วิริยะ/, "วิริยะ", "#0134a2", { fg: "#fcaf17" }),
    word("msig", /\bmsig\b/, "MSIG", "#e11f27"),
    word("bki", /bangkok ?insurance|กรุงเทพประกันภัย|\bbki\b/, "BKI", "#05048c"),
    word("roojai", /roojai|รู้ใจ/, "รู้ใจ", "#003b71", { fg: "#ff5011" }),
    word("chubb", /chubb|ชับบ์/, "CHUBB", "#000000"),
    word("sompo", /sompo|ซมโปะ/, "SOMPO", "#e10032"),
    // ---------- ร้านไทยที่ไม่มีโลโก้จริงในชุดฟรี (สีแบรนด์ + ไอคอนหมวด) ----------
    color("coway", /coway|โคเวย์/, "#00a8e1", { icon: "water" }),
    color("foodland", /foodland|ฟู้ดแลนด์/, "#fc0001", { icon: "bag" }),
    color("tops", /\btops\b|ท็อปส์/, "#ff3d1c", { icon: "bag" }),
    color("central", /central|เซ็นทรัล/, "#f50a3c", { icon: "bag" }),
    color("mk", /\bmk\b|เอ็มเค/, "#ec1c24", { icon: "food" }),
    color("swensens", /swensen|สเวนเซ่น/, "#e10e18", { icon: "cake" }),
    color("watsons", /watsons|วัตสัน/, "#009aa9", { icon: "beauty" }),
    color("powerbuy", /power ?buy|เพาเวอร์บาย/, "#5f3281", { icon: "laptop" }),
    color("bts", /\bbts\b|บีทีเอส/, "#c81518", { icon: "train" }),
    color("mrt", /\bmrt\b|เอ็มอาร์ที/, "#045091", { icon: "train" }),
    color("bangchak", /bangchak|บางจาก/, "#37b34a", { icon: "fuel" }),
    // ---------- โลโก้จริงที่เพิ่ม (ตัวที่เฉพาะกว่าอยู่ก่อนตัวกว้าง: apple pay ก่อน apple, uber eats ก่อน uber ฯลฯ) ----------
    real("applepay", /apple ?pay/, "applepay"),
    real("googlepay", /google ?pay|g ?pay/, "googlepay", { bg: "#ffffff", fg: "#4285f4", ring: true }),
    real("gemini", /gemini|เจมิไน/, "googlegemini"),
    real("primevideo", /prime ?video/, "primevideo"),
    real("ubereats", /uber ?eats/, "ubereats"),
    real("burgerking", /burger ?king|เบอร์เกอร์ ?คิง/, "burgerking"),
    real("tripdotcom", /trip\.com|ทริปดอทคอม/, "tripdotcom"),
    real("hotelsdotcom", /hotels\.com/, "hotelsdotcom"),
    real("epicgames", /epic ?games/, "epicgames"),
    real("duolingo", /duolingo/, "duolingo"),
    real("udemy", /udemy/, "udemy"),
    real("coursera", /coursera/, "coursera"),
    real("visa", /\bvisa\b|วีซ่า/, "visa"),
    real("mastercard", /master ?card|มาสเตอร์การ์ด/, "mastercard", { bg: "#ffffff", fg: "#eb001b", ring: true }),
    real("amex", /american ?express|\bamex\b/, "americanexpress"),
    real("jcb", /\bjcb\b/, "jcb"),
    real("wise", /\bwise\b/, "wise"),
    real("perplexity", /perplexity/, "perplexity"),
    real("xiaomi", /xiaomi|เสียวหมี่/, "xiaomi"),
    real("huawei", /huawei|หัวเว่ย/, "huawei"),
    real("oppo", /\boppo\b/, "oppo"),
    real("x", /\bx\.com|twitter|ทวิตเตอร์/, "x"),
    real("pinterest", /pinterest/, "pinterest"),
    real("snapchat", /snapchat/, "snapchat"),
    real("messenger", /messenger/, "messenger"),
    real("nordvpn", /nordvpn/, "nordvpn"),
    real("expressvpn", /expressvpn/, "expressvpn"),
    real("boots", /\bboots\b|บู๊ทส์/, "boots"),
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
    real("claude", /claude/, "claude", { bg: "#d97757", fg: "#ffffff" }),
    real("anthropic", /anthropic/, "anthropic", { bg: "#d97757", fg: "#ffffff" }),
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
