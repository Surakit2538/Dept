import { collection, getDocs } from "./auth-helpers.js";
import { getDbInstance, verifyDeviceToken } from "./auth-helpers.js";

const db = getDbInstance();

/**
 * GET /api/get-members   (ต้องมี Authorization: Bearer <รหัสอุปกรณ์>)
 *   ปกติ: คืนรายชื่อเพื่อน "ไม่รวมตัวเอง"
 *   ?include_self=1: คืนรายชื่อทั้งหมด โดยชื่อตัวเองอยู่บนสุดและมีป้าย "⭐ ชื่อ (ฉัน)"
 *                    (ใช้ในคำสั่งลัดเพื่อให้ติ๊กเลือกได้ว่าจะหารรวมตัวเองหรือจ่ายแทน)
 */
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
        const auth = await verifyDeviceToken(db, req);
        if (!auth.authenticated) {
            return res.status(auth.status || 401).json({ success: false, message: auth.message });
        }

        const selfName = String(auth.name || '').replace(/\s+/g, ' ').trim();
        const selfUpper = selfName.toUpperCase();
        const includeSelf = ['1', 'true', 'yes'].includes(String(req.query?.include_self || '').toLowerCase());

        const snap = await getDocs(collection(db, 'members'));
        const seenNames = new Set();
        const members = [];

        snap.docs.forEach(d => {
            const rawName = (d.data().name || '').replace(/\s+/g, ' ').trim();
            if (!rawName) return;

            const upperName = rawName.toUpperCase();
            // กรองชื่อซ้ำ (เช่น G A M E 👾 ที่มี 2 รายการ)
            if (seenNames.has(upperName)) return;
            seenNames.add(upperName);

            // ชื่อตัวเองจัดการแยกด้านล่าง
            if (upperName === selfUpper) return;

            members.push(rawName);
        });

        members.sort((a, b) => a.localeCompare(b, 'th'));

        if (includeSelf && selfName) {
            members.unshift(`⭐ ${selfName} (ฉัน)`);
        }

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
