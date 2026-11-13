/**
 * ตรวจลายเซ็น (x-line-signature) ของ webhook จาก LINE ว่ามาจาก LINE จริง
 * ลายเซ็น = base64(HMAC-SHA256(ตัวข้อความดิบที่ LINE ส่งมา, Channel secret))
 */
import crypto from "node:crypto";

export function verifyLineSignature(rawBody, signature, secret) {
    if (!secret || !signature || typeof signature !== "string") return false;
    const expected = crypto.createHmac("sha256", secret).update(rawBody).digest();
    let given;
    try {
        given = Buffer.from(signature, "base64");
    } catch (e) {
        return false;
    }
    return given.length === expected.length && crypto.timingSafeEqual(given, expected);
}

/** อ่านเนื้อหาดิบของคำขอ (ใช้เมื่อปิด bodyParser) */
export async function readRawBody(req) {
    if (Buffer.isBuffer(req.rawBody)) return req.rawBody;
    const chunks = [];
    for await (const c of req) chunks.push(Buffer.isBuffer(c) ? c : Buffer.from(c));
    return Buffer.concat(chunks);
}

/**
 * ตัดสินใจว่าจะรับคำขอ webhook ไหม
 * - ไม่ได้ตั้ง LINE_CHANNEL_SECRET → รับ (แต่เตือน)
 * - ตั้งแล้วแต่ลายเซ็นผิด → ถ้า enforce=true ปฏิเสธ, ไม่งั้นแค่บันทึก log (ช่วงทดลอง)
 */
export function decideWebhookAccess({ rawBody, signature, secret, enforce }) {
    if (!secret) return { allow: true, valid: null, reason: "no_secret" };
    const valid = verifyLineSignature(rawBody, signature, secret);
    if (valid) return { allow: true, valid: true, reason: "ok" };
    return { allow: !enforce, valid: false, reason: enforce ? "bad_signature_rejected" : "bad_signature_logged" };
}
