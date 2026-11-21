/**
 * ล็อกอินเว็บแบบใหม่: เซิร์ฟเวอร์ตรวจตัวตนกับ LINE แล้วออก "บัตรผ่าน Firebase" (custom token) ให้เฉพาะสมาชิกที่ผูกบัญชีแล้ว
 * กฎ Firestore (firestore.rules) ให้อ่าน/เขียนข้อมูลกลุ่มได้เฉพาะคนที่ถือบัตรนี้ คนนอกที่รู้ที่อยู่ฐานข้อมูลจึงทำอะไรไม่ได้
 *
 * ปิดการสมัครเอง: คนที่ยังไม่มีชื่อในกลุ่ม ต้องให้ผู้ดูแลเพิ่มชื่อก่อน (แท็บ ฉัน > จัดการสมาชิก) แล้วค่อยผูก LINE กับชื่อนั้น
 *
 * รับ db, fs (ชุดฟังก์ชัน Firestore), verifyLine (ตรวจ idToken กับ LINE) และ mintToken (ออก custom token) เป็นพารามิเตอร์
 * เพื่อทดสอบด้วยฐานข้อมูลจำลองได้ · ห้าม import แพ็กเกจ npm
 */
import { isAdminMember } from "./line-auth.mjs";

export const PASS_PREFIX = "m_";
const cleanName = (n) => String(n || "").replace(/\s+/g, " ").trim().toUpperCase();
const httpsOnly = (u) => (/^https:\/\//i.test(String(u || "")) ? String(u) : "");

/** ข้อมูลสมาชิกที่ส่งกลับให้เว็บ (เฉพาะของตัวเอง) */
export function memberView(id, d) {
    return {
        id,
        name: cleanName(d.name),
        pictureUrl: httpsOnly(d.pictureUrl),
        role: d.role === "admin" ? "admin" : "member",
        isAdmin: isAdminMember(d),
        realName: String(d.realName || ""),
        promptpay: String(d.promptpay || ""),
        lineUserId: String(d.lineUserId || "")
    };
}

/** uid และข้อมูลในบัตรผ่าน (mid = รหัสสมาชิก ใช้ในกฎ Firestore) */
export function passClaims(id, d) {
    return { uid: PASS_PREFIX + id, claims: { mid: String(id), member: cleanName(d.name), admin: isAdminMember(d) } };
}

export function createMemberLogin({ db, fs, verifyLine, mintToken, now = () => Date.now() }) {
    const { collection, doc, getDoc, getDocs, query, where, updateDoc } = fs;

    async function pass(id, d) {
        const { uid, claims } = passClaims(id, d);
        try {
            return (await mintToken(uid, claims)) || "";
        } catch (e) {
            console.warn("mint firebase token failed:", e.message);
            return ""; // ออกบัตรไม่ได้: เว็บยังทำงานได้ตราบที่กฎยังเปิด (ช่วงเปลี่ยนผ่าน)
        }
    }

    async function verified(idToken) {
        if (!idToken || typeof idToken !== "string") return { ok: false, status: 400, message: "จำเป็นต้องส่ง idToken จาก LINE" };
        try {
            const p = await verifyLine(idToken);
            if (!p || !p.sub) return { ok: false, status: 401, message: "LINE ID Token ไม่ถูกต้อง" };
            return { ok: true, line: { userId: p.sub, displayName: cleanName(p.name), pictureUrl: httpsOnly(p.picture) } };
        } catch (e) {
            return { ok: false, status: 401, message: "LINE ID Token ไม่ถูกต้องหรือหมดอายุ" };
        }
    }

    /** สมาชิกที่ผูกกับ LINE นี้ (มีหลายคน เลือกคนที่กรอกชื่อจริงแล้วก่อน เหมือนเว็บเดิม) */
    async function findByLine(userId) {
        const snap = await getDocs(query(collection(db, "members"), where("lineUserId", "==", userId)));
        if (snap.empty) return null;
        return snap.docs.find((x) => x.data().realName) || snap.docs[0];
    }

    /** เข้าสู่ระบบด้วย LINE: ผูกแล้ว = ได้ข้อมูลสมาชิก + บัตรผ่าน / ยังไม่ผูก = รายชื่อที่ยังไม่ผูกให้เลือก (ไม่สร้างสมาชิกใหม่เอง) */
    async function login(idToken) {
        const v = await verified(idToken);
        if (!v.ok) return { status: v.status, body: { success: false, message: v.message } };
        const m = await findByLine(v.line.userId);
        if (m) {
            const d = m.data();
            if (v.line.pictureUrl && d.pictureUrl !== v.line.pictureUrl) {
                try { await updateDoc(doc(db, "members", m.id), { pictureUrl: v.line.pictureUrl }); d.pictureUrl = v.line.pictureUrl; } catch (e) { /* รูปไม่สำคัญ */ }
            }
            return { status: 200, body: { success: true, member: memberView(m.id, d), firebaseToken: await pass(m.id, d) } };
        }
        const all = await getDocs(collection(db, "members"));
        const candidates = all.docs.filter((x) => !x.data().lineUserId)
            .map((x) => ({ id: x.id, name: cleanName(x.data().name) }))
            .filter((c) => c.name)
            .sort((a, b) => a.name.localeCompare(b.name));
        const same = candidates.find((c) => c.name === v.line.displayName);
        return { status: 200, body: { success: true, needLink: true, profile: v.line, candidates, suggest: same ? same.id : "" } };
    }

    /** ผูก LINE นี้กับชื่อที่ผู้ดูแลเพิ่มไว้ (ชื่อที่ผูกกับ LINE อื่นแล้วผูกไม่ได้) */
    async function link(idToken, memberId) {
        const v = await verified(idToken);
        if (!v.ok) return { status: v.status, body: { success: false, message: v.message } };
        const id = String(memberId || "");
        if (!id || id.includes("/") || id.length > 100) return { status: 400, body: { success: false, message: "ไม่พบชื่อที่เลือก" } };
        const already = await findByLine(v.line.userId);
        if (already && already.id !== id) return { status: 409, body: { success: false, message: "บัญชี LINE นี้ผูกกับชื่ออื่นในกลุ่มแล้ว แจ้งผู้ดูแลให้แก้ให้" } };
        const ref = doc(db, "members", id);
        const cur = await getDoc(ref);
        if (!cur.exists()) return { status: 404, body: { success: false, message: "ไม่พบชื่อนี้ ลองรีเฟรชหน้า" } };
        const d = cur.data();
        if (d.lineUserId && d.lineUserId !== v.line.userId) return { status: 409, body: { success: false, message: "ชื่อนี้ถูกผูกกับ LINE อื่นแล้ว" } };
        const upd = { lineUserId: v.line.userId, lineDisplayName: v.line.displayName, pictureUrl: v.line.pictureUrl || d.pictureUrl || "", linkedAt: new Date(now()).toISOString() };
        await updateDoc(ref, upd);
        const nd = { ...d, ...upd };
        return { status: 200, body: { success: true, member: memberView(id, nd), firebaseToken: await pass(id, nd) } };
    }

    /** ต่อบัตรผ่านด้วยรหัสเว็บที่จำไว้ (คอมที่ไม่ได้ล็อกอิน LINE ค้างไว้) auth = ผลของ verifyDeviceToken */
    async function renew(auth) {
        const ref = doc(db, "members", String(auth.memberId));
        const cur = await getDoc(ref);
        if (!cur.exists()) return { status: 404, body: { success: false, message: "ไม่พบสมาชิกนี้แล้ว" } };
        return { status: 200, body: { success: true, member: memberView(cur.id || String(auth.memberId), cur.data()), firebaseToken: await pass(String(auth.memberId), cur.data()) } };
    }

    return { login, link, renew };
}
