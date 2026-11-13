import crypto from "crypto";
import { initializeApp, getApps } from "firebase/app";
import { getFirestore, collection, getDocs, query, where, updateDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDD_3oEFAFgZyUdW2n6S36P_Ln47DIeNpc",
    authDomain: "deptmoney-6682a.firebaseapp.com",
    projectId: "deptmoney-6682a",
    storageBucket: "deptmoney-6682a.firebasestorage.app",
    messagingSenderId: "6714403201",
    appId: "1:6714403201:web:a98a2cefcebef5c63b6080"
};

export function getDbInstance() {
    const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
    return getFirestore(app);
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
