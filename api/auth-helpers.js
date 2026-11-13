import crypto from "crypto";
import { initializeApp, getApps } from "firebase/app";
const { getFirestore } = client;
import * as client from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDD_3oEFAFgZyUdW2n6S36P_Ln47DIeNpc",
    authDomain: "deptmoney-6682a.firebaseapp.com",
    projectId: "deptmoney-6682a",
    storageBucket: "deptmoney-6682a.firebasestorage.app",
    messagingSenderId: "6714403201",
    appId: "1:6714403201:web:a98a2cefcebef5c63b6080"
};

/** อ่านกุญแจบริการ (service account) จาก env: รับเป็น JSON ตรงๆ หรือเข้ารหัส base64 */
export function parseServiceAccount(raw) {
    const text = String(raw || "").trim();
    if (!text) return null;
    const json = text.startsWith("{") ? text : Buffer.from(text, "base64").toString("utf8");
    const sa = JSON.parse(json);
    if (!sa.client_email || !sa.private_key) throw new Error("service account ไม่ครบ (ต้องมี client_email และ private_key)");
    return sa;
}

let cachedDb = null;
// โหลด firebase-admin แบบ dynamic เฉพาะเมื่อตั้ง FIREBASE_SERVICE_ACCOUNT
const adminLib = process.env.FIREBASE_SERVICE_ACCOUNT
    ? await Promise.all([import("firebase-admin/app"), import("firebase-admin/firestore")])
        .then(([a, f]) => ({ initAdminApp: a.initializeApp, getAdminApps: a.getApps, cert: a.cert, getAdminFirestore: f.getFirestore, FieldValue: f.FieldValue }))
        .catch((e) => { console.error("[db] โหลด firebase-admin ไม่ได้ กลับไปใช้แบบเดิม:", e.message); return null; })
    : null;

/**
 * ถ้าตั้ง FIREBASE_SERVICE_ACCOUNT บน Vercel จะใช้ firebase-admin (ข้ามกฎความปลอดภัย จึงปิดกฎให้เบราว์เซอร์ได้)
 * ถ้าไม่ตั้ง (หรือกุญแจเสีย) จะใช้แบบเดิม = ย้อนกลับได้ทันทีโดยลบตัวแปรนี้
 */
export function getDbInstance() {
    if (cachedDb) return cachedDb;
    if (adminLib) {
        try {
            const sa = parseServiceAccount(process.env.FIREBASE_SERVICE_ACCOUNT);
            const { initAdminApp, getAdminApps, cert, getAdminFirestore, FieldValue } = adminLib;
            const existing = getAdminApps();
            const adminApp = existing.length ? existing[0] : initAdminApp({ credential: cert(sa) });
            const adb = getAdminFirestore(adminApp);
            try { adb.settings({ ignoreUndefinedProperties: true }); } catch (e) { /* ตั้งค่าไปแล้ว */ }
            registerAdminFieldValue(FieldValue);
            cachedDb = adb;
            console.log("[db] using firebase-admin");
            return cachedDb;
        } catch (e) {
            console.error("[db] FIREBASE_SERVICE_ACCOUNT ใช้ไม่ได้ กลับไปใช้แบบเดิม:", e.message);
        }
    }
    const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
    cachedDb = getFirestore(app);
    return cachedDb;
}

// ============================================================
// ตัวกลางเรียกฐานข้อมูล: ใช้ชุดฟังก์ชันเดียว (collection, doc, query, ...) ได้ทั้งแบบ client และ firebase-admin
// (อยู่ในไฟล์นี้เพราะโฟลเดอร์ lib/ ต้องไม่ import แพ็กเกจ npm โดยตรง — Vercel หาแพ็กเกจจากโฟลเดอร์ api/)
// db ของแอดมินมีเมธอด .collection จึงสลับโหมดอัตโนมัติ ไม่ต้องแก้โค้ดที่เรียกใช้
// ============================================================
let adminFieldValue = null;

/** เรียกครั้งเดียวตอนสร้าง db แบบแอดมิน เพื่อให้ serverTimestamp() ใช้ชนิดของแอดมิน */
function registerAdminFieldValue(FieldValue) {
    adminFieldValue = FieldValue;
}

const isClientObj = (o) => Boolean(o) && typeof o.type === "string" && (o.type === "document" || o.type === "collection" || o.type === "query");
const isAdminDb = (db) => Boolean(db) && typeof db.collection === "function" && typeof db.batch === "function";

export function collection(db, name) {
    return isAdminDb(db) ? db.collection(name) : client.collection(db, name);
}

export function doc(a, ...rest) {
    if (isAdminDb(a)) return a.collection(rest[0]).doc(rest[1]);
    if (a && !isClientObj(a) && typeof a.doc === "function") return a.doc(); // collection ของแอดมิน → รหัสสุ่ม
    return client.doc(a, ...rest);
}

export function where(field, op, value) {
    return { __where: [field, op, value] };
}

export function query(ref, ...constraints) {
    if (isClientObj(ref)) return client.query(ref, ...constraints.map((c) => client.where(...c.__where)));
    return constraints.reduce((q, c) => q.where(...c.__where), ref);
}

export async function getDocs(q) {
    return isClientObj(q) ? client.getDocs(q) : q.get();
}

export async function getDoc(ref) {
    if (isClientObj(ref)) return client.getDoc(ref);
    const s = await ref.get();
    // ของแอดมิน exists เป็นค่า ไม่ใช่ฟังก์ชัน ทำให้เหมือนของเดิม
    return { id: s.id, ref: s.ref, exists: () => s.exists, data: () => s.data() };
}

export async function setDoc(ref, data, options) {
    return isClientObj(ref) ? client.setDoc(ref, data, options) : ref.set(data, options || {});
}

export async function addDoc(colRef, data) {
    return isClientObj(colRef) ? client.addDoc(colRef, data) : colRef.add(data);
}

export async function updateDoc(ref, data) {
    return isClientObj(ref) ? client.updateDoc(ref, data) : ref.update(data);
}

export async function deleteDoc(ref) {
    return isClientObj(ref) ? client.deleteDoc(ref) : ref.delete();
}

export function writeBatch(db) {
    return isAdminDb(db) ? db.batch() : client.writeBatch(db);
}

export function serverTimestamp() {
    return adminFieldValue ? adminFieldValue.serverTimestamp() : client.serverTimestamp();
}

export function hashToken(rawToken) {
    if (!rawToken) return "";
    return crypto.createHash("sha256").update(String(rawToken).trim()).digest("hex");
}

/**
 * ตรวจสอบ Device Token จาก Authorization header (Bearer <token>)
 * คืน { authenticated: true, memberId, name, lineUserId } หรือ { authenticated: false, status, message }
 */
export async function verifyDeviceToken(db, req) {
    const authHeader = req.headers.authorization || req.headers.Authorization;
    if (!authHeader || typeof authHeader !== "string") {
        return {
            authenticated: false,
            status: 401,
            message: "กรุณาระบุรหัสการเข้าถึง (Bearer Token)"
        };
    }

    const match = authHeader.match(/^Bearer\s+(.+)$/i);
    if (!match) {
        return {
            authenticated: false,
            status: 401,
            message: "รูปแบบ Authorization Header ไม่ถูกต้อง (ต้องเป็น Bearer <token>)"
        };
    }

    const rawToken = match[1].trim();
    if (!rawToken) {
        return {
            authenticated: false,
            status: 401,
            message: "รหัสไม่ถูกต้อง กรุณาตั้งค่าใหม่จากเว็บ"
        };
    }

    const tokenHash = hashToken(rawToken);

    try {
        const tokenQuery = query(
            collection(db, "device_tokens"),
            where("tokenHash", "==", tokenHash)
        );
        const snap = await getDocs(tokenQuery);

        if (snap.empty) {
            return {
                authenticated: false,
                status: 401,
                message: "รหัสไม่ถูกต้อง กรุณาตั้งค่าใหม่จากเว็บ"
            };
        }

        const tokenDoc = snap.docs[0];
        const tokenData = tokenDoc.data();

        if (tokenData.revoked) {
            return {
                authenticated: false,
                status: 401,
                message: "รหัสนี้ถูกยกเลิกแล้ว กรุณาตั้งค่าใหม่จากเว็บ"
            };
        }

        // อัปเดต lastUsedAt
        updateDoc(tokenDoc.ref, {
            lastUsedAt: new Date().toISOString()
        }).catch(err => console.warn("Failed to update lastUsedAt:", err));

        return {
            authenticated: true,
            memberId: tokenData.memberId,
            name: tokenData.name,
            lineUserId: tokenData.lineUserId
        };
    } catch (err) {
        console.error("Error verifying device token:", err);
        return {
            authenticated: false,
            status: 500,
            message: "เกิดข้อผิดพลาดในการตรวจสอบรหัส: " + err.message
        };
    }
}
