import { initializeApp, getApps } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, query, where } from "firebase/firestore";

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

// Bangkok date string YYYY-MM-DD
function getBangkokDateString(date = new Date()) {
    const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Bangkok",
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    });
    const parts = formatter.formatToParts(date);
    const y = parts.find(p => p.type === "year").value;
    const m = parts.find(p => p.type === "month").value;
    const d = parts.find(p => p.type === "day").value;
    return `${y}-${m}-${d}`;
}

// Icon resolver for transactions
function resolveIcon(desc = '', bank = '') {
    const text = (desc + ' ' + bank).toLowerCase();
    if (text.includes('coffee') || text.includes('cafe') || text.includes('กาแฟ') || text.includes('ชา')) return 'fa-mug-hot';
    if (text.includes('food') || text.includes('อาหาร') || text.includes('ข้าว') || text.includes('ส้มตำ') || text.includes('kfc') || text.includes('mcdonald')) return 'fa-utensils';
    if (text.includes('oil') || text.includes('ปั๊ม') || text.includes('น้ำมัน') || text.includes('ptt') || text.includes('bcp') || text.includes('shell')) return 'fa-gas-pump';
    if (text.includes('seven') || text.includes('7-11') || text.includes('cj') || text.includes('lotus') || text.includes('big c') || text.includes('mart')) return 'fa-shopping-basket';
    if (text.includes('shopee') || text.includes('lazada') || text.includes('tiktok')) return 'fa-shopping-bag';
    if (text.includes('grab') || text.includes('lineman') || text.includes('robinhood')) return 'fa-motorcycle';
    if (text.includes('bill') || text.includes('ค่าน้ำ') || text.includes('ค่าไฟ') || text.includes('เน็ต')) return 'fa-file-invoice-dollar';
    return 'fa-receipt';
}

export default async function handler(req, res) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: 'Method Not Allowed' });
    }

    try {
        const body = req.body || {};
        const {
            payer,
            amount,
            desc = 'ค่าใช้จ่ายทั่วไป',
            date,
            bank = '',
            transRef = '',
            type = 'expense', // 'expense' or 'income'
            splitType = 'personal', // 'personal' or 'equal'
            splitWith = [],
            secret = ''
        } = body;

        // Check optional server secret if configured
        if (process.env.SHORTCUT_SECRET && secret !== process.env.SHORTCUT_SECRET) {
            return res.status(401).json({ success: false, message: 'Unauthorized (Invalid secret)' });
        }

        // Validate payer and amount
        if (!payer || typeof payer !== 'string') {
            return res.status(400).json({ success: false, message: 'กรุณาระบุชื่อผู้จ่าย (payer)' });
        }

        const numAmount = Number(amount);
        if (isNaN(numAmount) || numAmount <= 0) {
            return res.status(400).json({ success: false, message: 'ยอดเงินไม่ถูกต้อง' });
        }

        const cleanTransRef = String(transRef || '').trim();

        // 1. Check for Duplicate Slip if transRef is provided
        if (cleanTransRef) {
            const dupQuery = query(
                collection(db, 'transactions'),
                where('transRef', '==', cleanTransRef)
            );
            const dupSnap = await getDocs(dupQuery);
            if (!dupSnap.empty) {
                const existing = dupSnap.docs[0].data();
                return res.status(200).json({
                    success: true,
                    duplicated: true,
                    message: `สลิปนี้ถูกบันทึกไปแล้วเมื่อวันที่ ${existing.date || ''} (${existing.desc || ''})`,
                    id: dupSnap.docs[0].id
                });
            }
        }

        // 2. Prepare Splits
        let splits = {};
        const payerKey = payer.trim();

        if (splitType === 'equal' && Array.isArray(splitWith) && splitWith.length > 0) {
            // Clean names
            const participants = splitWith.map(s => String(s).trim()).filter(Boolean);
            const count = participants.length;
            const each = Math.round((numAmount / count) * 100) / 100;
            let sum = 0;

            participants.forEach((m, idx) => {
                if (idx === count - 1) {
                    splits[m] = Math.round((numAmount - sum) * 100) / 100;
                } else {
                    splits[m] = each;
                    sum += each;
                }
            });
        } else {
            // Personal expense: 100% of the amount assigned to payer
            // This maintains 0 net change in group debt balance
            splits[payerKey] = numAmount;
        }

        const recordDate = date && /^\d{4}-\d{2}-\d{2}$/.test(date) ? date : getBangkokDateString();
        const icon = resolveIcon(desc, bank);

        const newTxn = {
            date: recordDate,
            desc: desc.trim(),
            amount: numAmount,
            payer: payerKey,
            splits: splits,
            paymentType: 'normal',
            type: type,
            bank: bank ? bank.toUpperCase().trim() : '',
            transRef: cleanTransRef || null,
            icon: icon,
            source: 'ios_shortcut',
            createdAt: new Date().toISOString(),
            timestamp: Date.now()
        };

        const docRef = await addDoc(collection(db, 'transactions'), newTxn);

        // Optional LINE notification for shared bill
        if (splitType === 'equal' && Object.keys(splits).length > 1 && process.env.LINE_CHANNEL_ACCESS_TOKEN && process.env.LINE_GROUP_ID) {
            try {
                const targetMembers = Object.keys(splits).join(', ');
                const lineMsg = {
                    type: 'text',
                    text: `🧾 [บันทึกผ่าน Shortcut]\n👤 ผู้จ่าย: ${payerKey}\n💰 ยอดเงิน: ฿${numAmount.toLocaleString('th-TH', { minimumFractionDigits: 2 })}\n📝 รายการ: ${desc}\n👥 ผู้หาร (${Object.keys(splits).length} คน): ${targetMembers}`
                };
                await fetch('https://api.line.me/v2/bot/message/push', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${process.env.LINE_CHANNEL_ACCESS_TOKEN}`
                    },
                    body: JSON.stringify({
                        to: process.env.LINE_GROUP_ID,
                        messages: [lineMsg]
                    })
                });
            } catch (lineErr) {
                console.error('Failed to send optional LINE notification:', lineErr);
            }
        }

        return res.status(200).json({
            success: true,
            id: docRef.id,
            amount: numAmount,
            payer: payerKey,
            desc: desc.trim(),
            bank: bank,
            splitType: splitType,
            splits: splits,
            message: 'บันทึกรายจ่ายสำเร็จ'
        });

    } catch (err) {
        console.error('Error saving shortcut transaction:', err);
        return res.status(500).json({
            success: false,
            message: 'Internal server error: ' + err.message
        });
    }
}
