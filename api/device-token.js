import crypto from "crypto";
import { collection, getDocs, query, where, updateDoc, addDoc } from "firebase/firestore";
import { getDbInstance, hashToken, verifyDeviceToken } from "./auth-helpers.js";

const db = getDbInstance();

async function verifyLineIdToken(idToken) {
    if (!idToken || typeof idToken !== "string") {
        throw new Error("Missing or invalid idToken");
    }

    const channelId = process.env.LINE_LOGIN_CHANNEL_ID || "2008948704";
    const body = new URLSearchParams({
        id_token: idToken,
        client_id: channelId
    });

    const verifyRes = await fetch("https://api.line.me/oauth2/v2.1/verify", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: body.toString()
    });

    const data = await verifyRes.json();
    if (!verifyRes.ok || data.error) {
        const errorDesc = data.error_description || data.error || "Failed to verify LINE ID Token";
        throw new Error(`LINE Token Verification Failed: ${errorDesc}`);
    }

    return data; // contains { sub, name, picture, ... }
}

export default async function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    try {
        // GET: ตรวจสอบ token ปัจจุบันผ่าน Authorization header
        if (req.method === "GET") {
            const authResult = await verifyDeviceToken(db, req);
            if (!authResult.authenticated) {
                return res.status(authResult.status).json({
                    success: false,
                    message: authResult.message
                });
            }
            return res.status(200).json({
                success: true,
                valid: true,
                name: authResult.name,
                memberId: authResult.memberId
            });
        }

        // POST / DELETE: ต้องยืนยันตัวตนด้วย LINE idToken
        let body = req.body;
        if (typeof body === "string") {
            try {
                body = JSON.parse(body);
            } catch (e) {
                body = {};
            }
        }
        body = body || {};

        const { idToken } = body;
        if (!idToken) {
            return res.status(400).json({
                success: false,
                message: "จำเป็นต้องส่ง idToken จาก LINE เพื่อยืนยันตัวตน"
            });
        }

        let lineProfile;
        try {
            lineProfile = await verifyLineIdToken(idToken);
        } catch (err) {
            console.error("verifyLineIdToken error:", err.message);
            return res.status(401).json({
                success: false,
                message: "LINE ID Token ไม่ถูกต้องหรือหมดอายุ: " + err.message
            });
        }

        const lineUserId = lineProfile.sub;

        // ค้นหา member ที่ตรงกับ lineUserId
        const membersSnap = await getDocs(
            query(collection(db, "members"), where("lineUserId", "==", lineUserId))
        );

        if (membersSnap.empty) {
            return res.status(403).json({
                success: false,
                message: "ไม่พบบัญชีสมาชิกที่ผูกกับ LINE บัญชีนี้ในระบบ"
            });
        }

        // หากมีหลาย doc (เช่น กรณีชื่อซ้ำ) เลือก doc ที่ match
        const memberDoc = membersSnap.docs[0];
        const memberData = memberDoc.data();
        const memberId = memberDoc.id;
        const memberName = (memberData.name || "").trim();

        // DELETE: ยกเลิกรหัสทั้งหมดของสมาชิกนี้
        if (req.method === "DELETE") {
            const tokensSnap = await getDocs(
                query(
                    collection(db, "device_tokens"),
                    where("memberId", "==", memberId),
                    where("revoked", "==", false)
                )
            );

            const updates = [];
            tokensSnap.forEach(docSnap => {
                updates.push(
                    updateDoc(docSnap.ref, {
                        revoked: true,
                        revokedAt: new Date().toISOString()
                    })
                );
            });
            await Promise.all(updates);

            return res.status(200).json({
                success: true,
                message: `ยกเลิกรหัสอุปกรณ์ทั้งหมดของ ${memberName} สำเร็จ (${updates.length} รหัส)`
            });
        }

        // POST: สร้าง token ใหม่ และยกเลิกรหัสเดิม
        if (req.method === "POST") {
            // 1. ยกเลิกรหัสเก่าของคนนี้
            const oldTokensSnap = await getDocs(
                query(
                    collection(db, "device_tokens"),
                    where("memberId", "==", memberId),
                    where("revoked", "==", false)
                )
            );

            const revokePromises = [];
            oldTokensSnap.forEach(docSnap => {
                revokePromises.push(
                    updateDoc(docSnap.ref, {
                        revoked: true,
                        revokedAt: new Date().toISOString()
                    })
                );
            });
            await Promise.all(revokePromises);

            // 2. สร้าง Token สุ่ม 24 bytes (base64url)
            const rawToken = crypto.randomBytes(24).toString("base64url");
            const tokenHash = hashToken(rawToken);

            // 3. บันทึก hash ลง Firestore (ห้ามเก็บ token ดิบ)
            await addDoc(collection(db, "device_tokens"), {
                memberId: memberId,
                name: memberName,
                lineUserId: lineUserId,
                tokenHash: tokenHash,
                createdAt: new Date().toISOString(),
                lastUsedAt: null,
                revoked: false
            });

            // 4. ส่ง Token ดิบกลับไปให้ผู้ใช้บันทึกลงเครื่องครั้งเดียว
            return res.status(200).json({
                success: true,
                token: rawToken,
                name: memberName
            });
        }

        return res.status(405).json({ success: false, message: "Method Not Allowed" });

    } catch (err) {
        console.error("Error in device-token handler:", err);
        return res.status(500).json({
            success: false,
            message: "เกิดข้อผิดพลาดภายในเซิร์ฟเวอร์: " + err.message
        });
    }
}
