/**
 * หมวดของรายการ (ใช้ร่วมกันทั้งหน้าเว็บ เซิร์ฟเวอร์ LINE และ Widget) ห้าม import แพ็กเกจ npm
 * - CATEGORY_LIST: 40 หมวดที่เลือกได้ key = รหัสหมวดในฟอร์ม, fa = รหัสไอคอนที่เก็บในฐานข้อมูล, icon = รูปในเว็บ (web/src/icons.jsx), group = 1 ใน 6 กลุ่มสรุป
 *   12 หมวดเดิม (food drink goods travel bills rent fun health trip gift pet other) ใช้รหัส fa เดิม ข้อมูลเก่าไม่ต้องแก้
 * - CATEGORY_GROUPS: 6 กลุ่มสรุป (หน้าแรก งบ การ์ด LINE) ไม่เปลี่ยน แค่มีไอคอนในกลุ่มมากขึ้น
 */
export const CATEGORY_LIST = [
    // อาหาร
    { key: "food", label: "อาหาร", fa: "fa-utensils", icon: "food", group: "food" },
    { key: "drink", label: "กาแฟ/เครื่องดื่ม", fa: "fa-mug-hot", icon: "coffee", group: "food" },
    { key: "snack", label: "ขนม/เบเกอรี่", fa: "fa-cookie", icon: "cake", group: "food" },
    { key: "fresh", label: "ของสด/ตลาด", fa: "fa-carrot", icon: "leaf", group: "food" },
    { key: "delivery", label: "เดลิเวอรี่", fa: "fa-box", icon: "box", group: "food" },
    { key: "party", label: "เหล้า/ปาร์ตี้", fa: "fa-wine-glass", icon: "glass", group: "food" },
    // บิล/รายเดือน
    { key: "bills", label: "ค่าไฟ/บิล", fa: "fa-bolt", icon: "bolt", group: "bills" },
    { key: "water", label: "ค่าน้ำ", fa: "fa-droplet", icon: "water", group: "bills" },
    { key: "net", label: "เน็ต/WiFi", fa: "fa-wifi", icon: "wifi", group: "bills" },
    { key: "phone", label: "มือถือ", fa: "fa-mobile-screen", icon: "mobile", group: "bills" },
    { key: "rent", label: "ที่พัก/ค่าห้อง", fa: "fa-house", icon: "key", group: "bills" },
    { key: "condo", label: "ค่าส่วนกลาง", fa: "fa-building", icon: "building", group: "bills" },
    { key: "insure", label: "ประกัน", fa: "fa-shield", icon: "shieldok", group: "bills" },
    { key: "tax", label: "ภาษี/ค่าธรรมเนียม", fa: "fa-file-invoice-dollar", icon: "taxdoc", group: "bills" },
    { key: "app", label: "แอป/สมาชิก", fa: "fa-table-cells", icon: "apps", group: "bills" },
    // ของใช้
    { key: "goods", label: "ของใช้/ซุปเปอร์", fa: "fa-cart-shopping", icon: "bag", group: "goods" },
    { key: "clothes", label: "เสื้อผ้า", fa: "fa-shirt", icon: "shirt", group: "goods" },
    { key: "beauty", label: "ความงาม", fa: "fa-spray-can", icon: "beauty", group: "goods" },
    { key: "gadget", label: "ไอที/อุปกรณ์", fa: "fa-laptop", icon: "laptop", group: "goods" },
    { key: "home", label: "ของแต่งบ้าน", fa: "fa-couch", icon: "sofa", group: "goods" },
    { key: "health", label: "ยา/สุขภาพ", fa: "fa-pills", icon: "pill", group: "goods" },
    { key: "doctor", label: "หมอ/โรงพยาบาล", fa: "fa-hospital", icon: "cross", group: "goods" },
    { key: "pet", label: "สัตว์เลี้ยง", fa: "fa-paw", icon: "paw", group: "goods" },
    { key: "gift", label: "ของขวัญ", fa: "fa-gift", icon: "gift", group: "goods" },
    { key: "kid", label: "ลูก/เด็ก", fa: "fa-baby", icon: "baby", group: "goods" },
    // เดินทาง
    { key: "travel", label: "รถ/ผ่อนรถ", fa: "fa-car", icon: "car", group: "travel" },
    { key: "fuel", label: "น้ำมัน/ชาร์จรถ", fa: "fa-gas-pump", icon: "fuel", group: "travel" },
    { key: "transit", label: "รถไฟฟ้า/รถเมล์", fa: "fa-train-subway", icon: "train", group: "travel" },
    { key: "ride", label: "วิน/แท็กซี่", fa: "fa-motorcycle", icon: "moto", group: "travel" },
    { key: "parking", label: "ทางด่วน/ที่จอด", fa: "fa-square-parking", icon: "parking", group: "travel" },
    { key: "carcare", label: "ล้าง/ซ่อมรถ", fa: "fa-wrench", icon: "wrench", group: "travel" },
    { key: "trip", label: "เที่ยว", fa: "fa-plane", icon: "plane", group: "travel" },
    // บันเทิง
    { key: "fun", label: "หนัง/สตรีม", fa: "fa-film", icon: "film", group: "fun" },
    { key: "game", label: "เกม", fa: "fa-gamepad", icon: "game", group: "fun" },
    { key: "sport", label: "กีฬา/ฟิตเนส", fa: "fa-dumbbell", icon: "dumbbell", group: "fun" },
    { key: "event", label: "คอนเสิร์ต/งาน", fa: "fa-ticket", icon: "ticket", group: "fun" },
    // อื่นๆ (อื่นๆ ต้องอยู่ท้ายสุด)
    { key: "merit", label: "ทำบุญ/บริจาค", fa: "fa-hands-praying", icon: "lotus", group: "other" },
    { key: "edu", label: "การศึกษา", fa: "fa-graduation-cap", icon: "grad", group: "other" },
    { key: "transfer", label: "โอน/เติมเงิน", fa: "fa-money-bill-transfer", icon: "swap", group: "other" },
    { key: "other", label: "อื่นๆ", fa: "fa-money-bill", icon: "dots", group: "other" }
];

export const FA_BY_KEY = Object.fromEntries(CATEGORY_LIST.map((c) => [c.key, c.fa]));

/** คำที่ใช้เดาหมวดจากชื่อรายการ ตรวจตามลำดับ เจออันแรกใช้อันนั้น (คำที่เฉพาะกว่าต้องอยู่ก่อน) */
const GUESS = [
    ["delivery", ["grab food", "grabfood", "lineman", "line man", "foodpanda", "robinhood", "shopeefood", "เดลิเวอรี่", "ส่งอาหาร"]],
    ["insure", ["ประกัน", "เบี้ย", "aia", "axa", "fwd", "allianz", "prudential", "generali", "manulife", "msig", "chubb", "sompo", "roojai", "รู้ใจ", "ทิพย", "วิริยะ"]],
    ["tax", ["ภาษี", "สรรพากร", "revenue", "ค่าธรรมเนียม", "ค่าปรับ"]],
    ["condo", ["ค่าส่วนกลาง", "นิติบุคคล"]],
    ["trip", ["เที่ยว", "โรงแรม", "ที่พักรีสอร์ท", "เครื่องบิน", "ตั๋วเครื่องบิน", "airbnb", "agoda", "ทริป", "airasia", "trip.com", "booking"]],
    ["rent", ["ค่าเช่า", "ค่าห้อง", "ค่าหอ", "คอนโด"]],
    ["party", ["เหล้า", "เบียร์", "ไวน์", "ปาร์ตี้", "ผับ"]],
    ["drink", ["กาแฟ", "ชานม", "ชาไข่มุก", "คาเฟ่", "เครื่องดื่ม", "น้ำผลไม้", "starbucks", "amazon", "coffee"]],
    ["snack", ["ขนม", "เค้ก", "เบเกอรี่", "ขนมปัง", "ไอติม", "ไอศกรีม", "โดนัท", "ครัวซอง", "swensen", "after you"]],
    ["fresh", ["ผักสด", "ผลไม้", "ตลาดสด", "ของสด", "ผัก "]],
    ["pet", ["แมว", "หมา", "สุนัข", "สัตว์"]],
    ["water", ["ค่าน้ำ", "ประปา", "coway"]],
    ["net", ["ค่าเน็ต", "อินเทอร์เน็ต", "internet", "เน็ตบ้าน", "wifi", "3bb", "fiber", "ไฟเบอร์"]],
    ["phone", ["ค่าโทร", "ค่ามือถือ", "โทรศัพท์", "dtac", "ais", "truemove", "เติมเงินมือถือ"]],
    ["app", ["netflix", "spotify", "youtube", "disney", "subscription", "claude", "chatgpt", "openai", "icloud", "adobe", "canva", "hbo", "prime video", "google one", "apple music", "notion", "gemini", "perplexity", "ค่าบริการ"]],
    ["bills", ["ค่าไฟ", "การไฟฟ้า", "เน็ต", "ค่าเช่ารายเดือน", "google cloud"]],
    ["delivery", ["grab"]],
    ["food", ["ข้าว", "กิน", "อาหาร", "ก๋วยเตี๋ยว", "หมูกระทะ", "ชาบู", "สุกี้", "บุฟเฟ", "ส้มตำ", "ไก่", "หมู", "เนื้อ", "ปิ้งย่าง", "ผัด", "ต้ม", "แกง", "กะเพรา", "กระเพรา", "ไข่เจียว", "ลูกชิ้น", "บะหมี่", "สเต๊ะ", "สลัด", "salad", "บอนชอน", "bonchon", "kfc", "mcdonald", "burger", "pizza", "ร้านอาหาร"]],
    ["fuel", ["น้ำมัน", "ปตท", "ptt", "shell", "บางจาก", "bangchak", "esso", "caltex", "ชาร์จรถ"]],
    ["transit", ["bts", "mrt", "รถไฟฟ้า", "รถเมล์", "รถไฟ", "airport link"]],
    ["ride", ["แท็กซี่", "taxi", "วินมอเตอร์ไซค์", "มอเตอร์ไซค์รับจ้าง", "bolt"]],
    ["parking", ["ทางด่วน", "ที่จอดรถ", "จอดรถ", "easy pass", "m-flow"]],
    ["carcare", ["ล้างรถ", "ซ่อมรถ", "เปลี่ยนยาง", "เช็คระยะ", "อะไหล่"]],
    ["travel", ["รถ", "แท็กซี่", "ค่าเดินทาง", "ตั๋วรถ", "civic", "honda", "toyota", "mazda", "nissan", "isuzu", "mitsubishi", "benz", "bmw", "พ.ร.บ.", "ค่างวดรถ", "ผ่อนรถ", "ค่ารถ"]],
    ["game", ["เกม", "steam", "playstation", "nintendo", "garena", "rov"]],
    ["sport", ["ฟิตเนส", "ยิม", "fitness", "ฟุตบอล", "แบดมินตัน", "ว่ายน้ำ"]],
    ["event", ["คอนเสิร์ต", "บัตรคอน", "งานแฟร์", "อีเวนต์"]],
    ["fun", ["หนัง", "โรงหนัง", "ดูหนัง", "karaoke", "คาราโอเกะ", "บอร์ดเกม"]],
    ["doctor", ["หมอ", "โรงพยาบาล", "คลินิก", "ทำฟัน", "หมอฟัน", "ตรวจสุขภาพ"]],
    ["health", ["ค่ายา", "ซื้อยา", "วิตามิน", "ร้านยา"]],
    ["beauty", ["สิว", "เครื่องสำอาง", "สกินแคร์", "ลิป", "เซรั่ม", "ทำเล็บ", "ทำผม", "ตัดผม", "ซาลอน", "สปา", "นวด", "watsons", "วัตสัน"]],
    ["clothes", ["เสื้อ", "กางเกง", "ยีน", "กระโปรง", "รองเท้า", "uniqlo", "h&m", "zara", "nike", "adidas"]],
    ["gadget", ["ipad", "iphone", "macbook", "โน้ตบุ๊ก", "notebook", "หูฟัง", "สายชาร์จ", "power buy", "powerbuy"]],
    ["home", ["เฟอร์นิเจอร์", "ikea", "homepro", "โฮมโปร", "ผ้าม่าน", "ที่นอน", "หมอน"]],
    ["kid", ["นมผง", "ผ้าอ้อม", "แพมเพิส", "ของเล่น", "ค่าลูก"]],
    ["merit", ["ทำบุญ", "บริจาค", "พวงมาลัย", "ใส่บาตร", "ถวาย"]],
    ["edu", ["ค่าเรียน", "ค่าเทอม", "คอร์สเรียน", "udemy", "coursera", "duolingo"]],
    ["gift", ["ของขวัญ", "วันเกิด", "ซองงาน", "ดอกไม้"]],
    ["goods", ["ซื้อ", "ของใช้", "ช้อป", "shopee", "lazada", "7-11", "เซเว่น", "ซุปเปอร์", "โลตัส", "lotus", "บิ๊กซี", "big c", "tops", "foodland", "makro", "แม็คโคร", "cj", "ที่ปิ้ง", "ครีม", "สบู่", "ยาสระผม", "ที่ปั่นหู", "ทิชชู่"]]
];

/** เดาหมวดจากชื่อรายการ คืนรหัสหมวด (ไม่รู้จักหรือว่าง = other) */
export function guessCategoryKey(desc) {
    const d = String(desc || "").toLowerCase();
    if (!d.trim()) return "other";
    for (const [key, words] of GUESS) if (words.some((w) => d.includes(w))) return key;
    return "other";
}

/** รหัสไอคอน (fa-*) จากชื่อรายการ คืน "" ถ้าเดาไม่ได้ */
export function guessCategoryFa(desc) {
    const k = guessCategoryKey(desc);
    return k === "other" ? "" : FA_BY_KEY[k];
}

/** รหัสไอคอนเก่าที่ยังมีในข้อมูล (สลิปรุ่นเก่า ฟอร์มรุ่นเก่า) -> กลุ่ม */
const LEGACY = {
    food: [],
    bills: ["fa-mobile-screen-button"],
    goods: ["fa-basket-shopping", "fa-shopping-basket", "fa-shopping-bag", "fa-scissors"],
    travel: ["fa-bus"],
    fun: ["fa-tv"],
    other: []
};

/**
 * 6 กลุ่มหมวดที่หน้าแรกของเว็บใช้ (web/src/model.js CATEGORIES สร้างจากตัวนี้)
 * ใช้สรุปใน LINE ให้ตัวเลขตรงกับเว็บ short = ชื่อสั้นสำหรับการ์ด LINE
 */
const GROUP_META = [
    { key: "food", label: "อาหารและเครื่องดื่ม", short: "อาหาร" },
    { key: "bills", label: "บิลและค่าบริการ", short: "บิล/รายเดือน" },
    { key: "goods", label: "ของใช้", short: "ของใช้" },
    { key: "travel", label: "เดินทาง", short: "เดินทาง" },
    { key: "fun", label: "บันเทิง", short: "บันเทิง" },
    { key: "other", label: "อื่นๆ", short: "อื่นๆ" }
];
export const CATEGORY_GROUPS = GROUP_META.map((g) => ({
    ...g,
    // กลุ่ม "อื่นๆ" ไม่ระบุไอคอน (ไอคอนที่ไม่รู้จักทั้งหมดตกที่นี่อยู่แล้ว)
    icons: g.key === "other" ? [] : [...CATEGORY_LIST.filter((c) => c.group === g.key).map((c) => c.fa), ...LEGACY[g.key]]
}));

/** กลุ่มหมวดจากไอคอนที่บันทึกไว้ (ไม่มีไอคอน = อื่นๆ เหมือนหน้าเว็บ) */
export function categoryGroupOf(icon) {
    const g = CATEGORY_GROUPS.find((x) => x.icons.includes(icon));
    return g ? g.key : "other";
}

/** ไอคอนตัวแทนของแต่ละกลุ่ม (ใช้ตอนเปลี่ยนหมวดจากแชต) */
export const GROUP_ICON = { food: "fa-utensils", bills: "fa-bolt", goods: "fa-cart-shopping", travel: "fa-car", fun: "fa-film", other: "fa-money-bill" };
