/**
 * เดาหมวดของรายการจากชื่อ (ใช้ร่วมกันทั้งหน้าเว็บและเซิร์ฟเวอร์ เช่น ตอนสร้างรายจ่ายรายเดือนอัตโนมัติ)
 * key = รหัสหมวดในฟอร์ม, fa = รหัสไอคอนที่เก็บในฐานข้อมูล
 */
export const FA_BY_KEY = {
    food: "fa-utensils", drink: "fa-mug-hot", goods: "fa-cart-shopping", travel: "fa-car", bills: "fa-bolt", rent: "fa-house",
    fun: "fa-film", health: "fa-pills", trip: "fa-plane", gift: "fa-gift", pet: "fa-paw", other: "fa-money-bill"
};

const GUESS = [
    ["trip", ["เที่ยว", "โรงแรม", "ที่พักรีสอร์ท", "เครื่องบิน", "ตั๋วเครื่องบิน", "airbnb", "agoda", "ทริป"]],
    ["rent", ["ค่าเช่า", "ค่าห้อง", "ค่าหอ", "คอนโด", "ค่าส่วนกลาง"]],
    ["drink", ["กาแฟ", "ชานม", "ชาไข่มุก", "คาเฟ่", "เครื่องดื่ม", "น้ำผลไม้", "เหล้า", "เบียร์", "ไวน์", "ปาร์ตี้", "starbucks", "amazon"]],
    ["pet", ["แมว", "หมา", "สุนัข", "สัตว์"]],
    ["food", ["ข้าว", "กิน", "อาหาร", "ก๋วยเตี๋ยว", "ขนม", "หมูกระทะ", "ชาบู", "บุฟเฟ", "ส้มตำ", "ไก่", "หมู", "เนื้อ", "ปิ้งย่าง", "ผัด", "ต้ม", "แกง", "ส้ม", "ไอติม", "เค้ก", "grab food", "lineman", "foodpanda"]],
    ["bills", ["ค่าไฟ", "ค่าน้ำ", "ค่าเน็ต", "อินเทอร์เน็ต", "เน็ต", "โทรศัพท์", "ค่าโทร", "netflix", "spotify", "youtube", "disney", "subscription", "ค่าบริการ", "claude", "chatgpt", "openai", "icloud", "adobe", "canva", "hbo", "prime video", "google one", "ค่ามือถือ", "ค่าเช่ารายเดือน", "dtac", "true", "ais"]],
    ["travel", ["รถ", "น้ำมัน", "แท็กซี่", "grab", "bolt", "bts", "mrt", "ทางด่วน", "ที่จอดรถ", "ค่าเดินทาง", "รถเมล์", "ตั๋วรถ", "civic", "honda", "toyota", "mazda", "nissan", "isuzu", "mitsubishi", "benz", "bmw", "ประกันรถ", "ภาษีรถ", "พ.ร.บ.", "ค่างวดรถ", "ผ่อนรถ", "ล้างรถ", "ค่ารถ"]],
    ["fun", ["หนัง", "โรงหนัง", "เกม", "steam", "คอนเสิร์ต", "บัตรคอน", "karaoke", "คาราโอเกะ", "บอร์ดเกม", "ดูหนัง"]],
    ["health", ["ค่ายา", "ซื้อยา", "หมอ", "โรงพยาบาล", "คลินิก", "ฟัน", "ตรวจสุขภาพ", "วิตามิน", "ฟิตเนส", "ยิม"]],
    ["gift", ["ของขวัญ", "วันเกิด", "ซองงาน", "ทำบุญ", "ดอกไม้"]],
    ["goods", ["ซื้อ", "ของใช้", "ช้อป", "shopee", "lazada", "7-11", "เซเว่น", "ซุปเปอร์", "โลตัส", "บิ๊กซี", "tops", "makro", "แม็คโคร", "ที่ปิ้ง", "ครีม", "สบู่", "ยาสระผม", "ตัดผม", "ซาลอน"]]
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
