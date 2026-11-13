import { collection, getDocs, query, where } from "firebase/firestore";
import { getDbInstance, verifyDeviceToken } from "./auth-helpers.js";

const db = getDbInstance();

function getBangkokDateParts(date = new Date()) {
    const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Bangkok",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        weekday: "short"
    });
    const parts = formatter.formatToParts(date);
    const y = parts.find(p => p.type === "year")?.value;
    const m = parts.find(p => p.type === "month")?.value;
    const d = parts.find(p => p.type === "day")?.value;
    const weekday = parts.find(p => p.type === "weekday")?.value;

    return {
        dateStr: `${y}-${m}-${d}`,
        monthStr: `${y}-${m}`,
        day: d,
        month: m,
        year: y,
        weekday: weekday // "Sun", "Mon", "Tue", ...
    };
}

const THAI_MONTHS_SHORT = [
    'ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.',
    'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'
];

const THAI_DAYS = {
    'Sun': 'อาทิตย์',
    'Mon': 'จันทร์',
    'Tue': 'อังคาร',
    'Wed': 'พุธ',
    'Thu': 'พฤหัสบดี',
    'Fri': 'ศุกร์',
    'Sat': 'เสาร์'
};

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
        // 1. ตรวจสอบสิทธิ์ด้วย Device Token (11.3 & W1)
        const auth = await verifyDeviceToken(db, req);
        if (!auth.authenticated) {
            return res.status(auth.status).json({
                success: false,
                message: auth.message
            });
        }

        const targetUser = String(auth.name || '').trim().toUpperCase();
        if (!targetUser) {
            return res.status(400).json({ success: false, message: 'ไม่พบชื่อสมาชิกจากรหัสอุปกรณ์' });
        }

        // ตรวจสอบว่าชื่อสมาชิกยังคงมีอยู่ในระบบ members
        const membersSnap = await getDocs(collection(db, 'members'));
        const allMemberNames = membersSnap.docs
            .map(d => (d.data().name || '').trim().toUpperCase())
            .filter(Boolean);

        if (!allMemberNames.includes(targetUser)) {
            return res.status(404).json({
                success: false,
                message: `ไม่พบชื่อสมาชิก "${auth.name}" ในระบบ กรุณาติดต่อผู้ดูแล`
            });
        }

        const now = new Date();
        const { dateStr: todayStr, monthStr: currentMonthStr, day, month, weekday } = getBangkokDateParts(now);

        // F9: ใช้ชื่อวันจาก Intl Asia/Bangkok
        const dayThai = THAI_DAYS[weekday] || 'วันนี้';
        const monthIndex = parseInt(month, 10) - 1;
        const thaiDateHeader = `${dayThai} ${parseInt(day, 10)} ${THAI_MONTHS_SHORT[monthIndex] || ''}`;

        // F14: Fetch transactions เฉพาะเดือนปัจจุบัน
        const transQuery = query(
            collection(db, 'transactions'),
            where('date', '>=', `${currentMonthStr}-01`),
            where('date', '<=', `${currentMonthStr}-31`)
        );
        const transSnap = await getDocs(transQuery);
        const allTrans = transSnap.docs.map(d => ({ id: d.id, ...d.data() }));

        // ดึง personal_expenses เผื่อมีรายการส่วนตัว (D1)
        let allPersonal = [];
        try {
            const personalQuery = query(
                collection(db, 'personal_expenses'),
                where('date', '>=', `${currentMonthStr}-01`),
                where('date', '<=', `${currentMonthStr}-31`)
            );
            const personalSnap = await getDocs(personalQuery);
            allPersonal = personalSnap.docs.map(d => ({ id: d.id, ...d.data() }));
        } catch (e) {
            // คอลเลกชันอาจยังไม่มีในเฟส 1
            allPersonal = [];
        }

        let todayExpense = 0;
        let monthExpense = 0;
        let userTransactions = [];
        let balance = 0;

        // คำนวณจาก transactions กลุ่ม
        allTrans.forEach(t => {
            const tDate = t.date || '';
            const tPayer = (t.payer || '').trim().toUpperCase();
            const tSplits = t.splits || {};
            const isThisMonth = tDate.startsWith(currentMonthStr);
            const isToday = tDate === todayStr;

            // ส่วนที่ targetUser จ่ายหรือถูกหาร
            let userShare = 0;
            const splitKeys = Object.keys(tSplits);
            const userInSplits = splitKeys.find(k => k.trim().toUpperCase() === targetUser);

            if (userInSplits) {
                userShare = Number(tSplits[userInSplits]) || 0;
            } else if (tPayer === targetUser && splitKeys.length === 0) {
                userShare = Number(t.amount) || 0;
            }

            if (isThisMonth) {
                monthExpense += userShare;
                // ยอดค้างรับ-จ่าย (Group Balance)
                if (tPayer === targetUser) {
                    balance += Number(t.amount) || 0;
                }
                if (userInSplits) {
                    balance -= Number(tSplits[userInSplits]) || 0;
                }
            }

            if (isToday) {
                todayExpense += userShare;
            }

            // ถ้าเกี่ยวข้องกับ user ให้เก็บไว้สำหรับหงรายการล่าสุด
            if (tPayer === targetUser || userInSplits) {
                userTransactions.push({
                    desc: t.desc || 'ค่าใช้จ่ายกลุ่ม',
                    amount: Number(userShare || t.amount || 0),
                    bank: t.bank || (t.paymentType === 'installment' ? 'CARD' : 'EXP'),
                    date: t.date || todayStr,
                    timestamp: t.timestamp || new Date(t.createdAt || t.date).getTime() || 0,
                    source: 'group'
                });
            }
        });

        // คำนวณจาก personal_expenses ของ user คนนี้ (ถ้ามี)
        allPersonal.forEach(p => {
            const pPayer = (p.payer || '').trim().toUpperCase();
            if (pPayer !== targetUser) return;

            const pDate = p.date || '';
            const pAmount = Number(p.amount) || 0;
            const isThisMonth = pDate.startsWith(currentMonthStr);
            const isToday = pDate === todayStr;

            if (isThisMonth) {
                monthExpense += pAmount;
            }
            if (isToday) {
                todayExpense += pAmount;
            }

            userTransactions.push({
                desc: p.desc || 'ค่าใช้จ่ายส่วนตัว',
                amount: pAmount,
                bank: p.bank || 'EXP',
                date: p.date || todayStr,
                timestamp: p.timestamp || new Date(p.createdAt || p.date).getTime() || 0,
                source: 'personal'
            });
            // รายการส่วนตัวไม่กระทบ balance
        });

        // F8: หัก settlements ที่สถานะ verified ของเดือนปัจจุบัน
        const settlementsQuery = query(
            collection(db, 'settlements'),
            where('month', '==', currentMonthStr)
        );
        const settlementsSnap = await getDocs(settlementsQuery);

        settlementsSnap.forEach(sDoc => {
            const s = sDoc.data();
            if (s.status === 'verified') {
                const fromUpper = (s.from || '').trim().toUpperCase();
                const toUpper = (s.to || '').trim().toUpperCase();
                const amount = Number(s.amount) || 0;

                // คนโอนเงินเคลียร์หนี้แล้ว -> หนี้ลดลง / balance เพิ่มขึ้น
                if (fromUpper === targetUser) {
                    balance += amount;
                }
                // คนรับเงินคืนแล้ว -> ยอดที่เพื่อนค้างเราลดลง / balance ลดลง
                if (toUpper === targetUser) {
                    balance -= amount;
                }
            }
        });

        // เรียงหารายการล่าสุด
        userTransactions.sort((a, b) => b.timestamp - a.timestamp);
        const latest = userTransactions[0] || null;
        let lastTransaction = null;
        if (latest) {
            lastTransaction = {
                desc: latest.desc,
                amount: latest.amount,
                bank: latest.bank,
                date: latest.date
            };
        }

        // ข้อความสรุปหนี้สิน
        let debtText = 'เคลียร์ครบแล้ว';
        let debtType = 'settled';
        const roundedBalance = Math.round(balance);
        if (roundedBalance > 0) {
            debtText = `เพื่อนค้างคุณ ฿${roundedBalance.toLocaleString('th-TH')}`;
            debtType = 'receive';
        } else if (roundedBalance < 0) {
            debtText = `คุณค้างเพื่อน ฿${Math.abs(roundedBalance).toLocaleString('th-TH')}`;
            debtType = 'pay';
        }

        return res.status(200).json({
            success: true,
            user: auth.name,
            dateHeader: thaiDateHeader,
            todayExpense: todayExpense,
            monthExpense: monthExpense,
            lastTransaction: lastTransaction,
            debt: {
                balance: roundedBalance,
                type: debtType,
                text: debtText
            }
        });

    } catch (err) {
        console.error('Error in widget-summary:', err);
        return res.status(500).json({
            success: false,
            message: 'Failed to generate summary: ' + err.message
        });
    }
}
