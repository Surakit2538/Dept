import { initializeApp, getApps } from "firebase/app";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDD_3oEFAFgZyUdW2n6S36P_Ln47DIeNpc",
    authDomain: "deptmoney-6682a.firebaseapp.com",
    projectId: "deptmoney-6682a",
    storageBucket: "deptmoney-6682a.firebasestorage.app",
    messagingSenderId: "6714403201",
    appId: "1:6714403201:web:a98a2cefcebef5c63b6080"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

function getBangkokDateParts(date = new Date()) {
    const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Bangkok",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        weekday: "short"
    });
    const parts = formatter.formatToParts(date);
    const y = parts.find(p => p.type === "year").value;
    const m = parts.find(p => p.type === "month").value;
    const d = parts.find(p => p.type === "day").value;
    return {
        dateStr: `${y}-${m}-${d}`,
        monthStr: `${y}-${m}`,
        day: d,
        month: m,
        year: y
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
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'GET') {
        return res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }

    try {
        const { user } = req.query;
        if (!user) {
            return res.status(400).json({ success: false, message: 'Query parameter "user" is required.' });
        }

        const targetUser = String(user).trim().toUpperCase();
        const now = new Date();
        const { dateStr: todayStr, monthStr: currentMonthStr, day, month, year } = getBangkokDateParts(now);

        // Fetch transactions for the month
        const transSnap = await getDocs(collection(db, 'transactions'));
        const allTrans = transSnap.docs.map(d => ({ id: d.id, ...d.data() }));

        let todayExpense = 0;
        let monthExpense = 0;
        let userTransactions = [];

        // Balances calculation for debt status
        let balance = 0;

        allTrans.forEach(t => {
            const tDate = t.date || '';
            const tPayer = (t.payer || '').toUpperCase();
            const tSplits = t.splits || {};
            const isThisMonth = tDate.startsWith(currentMonthStr);
            const isToday = tDate === todayStr;

            // Find portion spent by targetUser
            let userShare = 0;
            const splitKeys = Object.keys(tSplits);
            const userInSplits = splitKeys.find(k => k.toUpperCase() === targetUser);

            if (userInSplits) {
                userShare = Number(tSplits[userInSplits]) || 0;
            } else if (tPayer === targetUser && splitKeys.length === 0) {
                userShare = Number(t.amount) || 0;
            }

            if (isThisMonth) {
                monthExpense += userShare;
                // Group balance logic (only for shared transactions)
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

            // If user is involved, collect for sorting latest transaction
            if (tPayer === targetUser || userInSplits) {
                userTransactions.push({
                    ...t,
                    userShare: userShare
                });
            }
        });

        // Sort latest transactions
        userTransactions.sort((a, b) => {
            const timeA = a.timestamp || new Date(a.createdAt || a.date).getTime() || 0;
            const timeB = b.timestamp || new Date(b.createdAt || b.date).getTime() || 0;
            return timeB - timeA;
        });

        const latest = userTransactions[0] || null;
        let lastTransaction = null;
        if (latest) {
            lastTransaction = {
                desc: latest.desc || 'ค่าใช้จ่าย',
                amount: Number(latest.userShare || latest.amount || 0),
                bank: latest.bank || (latest.paymentType === 'installment' ? 'CARD' : 'EXP'),
                date: latest.date || todayStr,
                payer: latest.payer || ''
            };
        }

        // Formatted Thai Header Date: e.g. "พฤหัสบดี 12 พ.ย."
        const dayOfWeekIndex = now.getDay();
        const dayNames = ['อาทิตย์', 'จันทร์', 'อังคาร', 'พุธ', 'พฤหัสบดี', 'ศุกร์', 'เสาร์'];
        const thaiDateHeader = `${dayNames[dayOfWeekIndex]} ${parseInt(day, 10)} ${THAI_MONTHS_SHORT[parseInt(month, 10) - 1]}`;

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
            user: targetUser,
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
