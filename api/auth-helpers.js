import crypto from "crypto";
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { initializeApp as initAdminApp, getApps as getAdminApps, cert } from "firebase-admin/app";
import { getFirestore as getAdminFirestore, FieldValue } from "firebase-admin/firestore";
import { collection, getDocs, query, where, updateDoc, registerAdminFieldValue } from "../lib/fs-compat.mjs";

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

/**
 * ถ้าตั้ง FIREBASE_SERVICE_ACCOUNT บน Vercel จะใช้ firebase-admin (ข้ามกฎความปลอดภัย จึงปิดกฎให้เบราว์เซอร์ได้)
 * ถ้าไม่ตั้ง (หรือกุญแจเสีย) จะใช้แบบเดิม = ย้อนกลับได้ทันทีโดยลบตัวแปรนี้
 */
export function getDbInstance() {
    if (cachedDb) return cachedDb;
    if (process.env.FIREBASE_SERVICE_ACCOUNT) {
        try {
            const sa = parseServiceAccount(process.env.FIREBASE_SERVICE_ACCOUNT);
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
