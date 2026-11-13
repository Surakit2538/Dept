import { collection, getDocs } from "firebase/firestore";
import { getDbInstance, verifyDeviceToken } from "./auth-helpers.js";

const db = getDbInstance();

export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'GET') {
        return res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }

    try {
        let excludeName = req.query.exclude ? String(req.query.exclude).trim().toUpperCase() : null;

        // ถ้ามี Authorization header ให้ตรวจ token เพื่อดึงชื่อผู้ใช้มาตัดออกอัตโนมัติ (11.3)
        const authHeader = req.headers.authorization || req.headers.Authorization;
        if (authHeader) {
            const authResult = await verifyDeviceToken(db, req);
            if (authResult.authenticated && authResult.name) {
                excludeName = authResult.name.trim().toUpperCase();
            }
        }

        const snap = await getDocs(collection(db, 'members'));
        const seenNames = new Set();
        const members = [];

        snap.docs.forEach(d => {
            const data = d.data();
            const rawName = data.name ? data.name.trim() : null;
            if (!rawName) return;

            const upperName = rawName.toUpperCase();
            // กรองชื่อซ้ำ (เช่น G A M E 👾 ที่มี 2 รายการ)
            if (seenNames.has(upperName)) return;
            seenNames.add(upperName);

            // ตัดชื่อเจ้าของ token หรือชื่อใน exclude ออก
            if (excludeName && upperName === excludeName) return;

            members.push(rawName);
        });

        // เรียงลำดับตามตัวอักษรไทย
        members.sort((a, b) => a.localeCompare(b, 'th'));

        return res.status(200).json({
            success: true,
            count: members.length,
            members: members
        });
    } catch (err) {
        console.error('Error fetching members:', err);
        return res.status(500).json({
            success: false,
            message: 'Failed to fetch members: ' + err.message
        });
    }
}
