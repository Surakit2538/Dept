import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, writeBatch, query, where } from "firebase/firestore";

// --- CONFIGURATION ---
const firebaseConfig = {
    apiKey: "AIzaSyDD_3oEFAFgZyUdW2n6S36P_Ln47DIeNpc",
    authDomain: "deptmoney-6682a.firebaseapp.com",
    projectId: "deptmoney-6682a",
    storageBucket: "deptmoney-6682a.firebasestorage.app",
    messagingSenderId: "6714403201",
    appId: "1:6714403201:web:a98a2cefcebef5c63b6080"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

function getBangkokMonthString(date = new Date()) {
    const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Bangkok",
        year: "numeric",
        month: "2-digit"
    });
    const parts = formatter.formatToParts(date);
    const y = parts.find(p => p.type === "year").value;
    const m = parts.find(p => p.type === "month").value;
    return `${y}-${m}`;
}

export default async function handler(req, res) {
    // Vercel Cron Security check (allow if secret matches or if not set)
    if (process.env.CRON_SECRET && req.headers.authorization !== `Bearer ${process.env.CRON_SECRET}`) {
        if (req.query?.secret !== process.env.CRON_SECRET) {
            return res.status(401).end('Unauthorized');
        }
    }

    try {
        const currentMonth = getBangkokMonthString();
        console.log(`🔄 Generating monthly subscriptions for ${currentMonth}...`);

        const templatesSnap = await getDocs(query(collection(db, "subscription_templates"), where("active", "==", true)));
        if (templatesSnap.empty) {
            return res.status(200).json({ success: true, message: 'No active subscriptions found' });
        }

        const activeTemplates = templatesSnap.docs.map(d => ({ id: d.id, ref: d.ref, ...d.data() }));

        // Check existing transactions for currentMonth
        const txSnap = await getDocs(query(
            collection(db, "transactions"),
            where("date", ">=", `${currentMonth}-01`),
            where("date", "<=", `${currentMonth}-31`)
        ));
        const existingSubs = txSnap.docs.map(d => d.data());

        const batch = writeBatch(db);
        let createdCount = 0;

        for (const t of activeTemplates) {
            const cleanDesc = (t.desc || '').replace(/📅/g, '').trim();
            const alreadyExists = existingSubs.some(e => {
                const eClean = (e.desc || '').replace(/📅/g, '').trim();
                return (t.groupId && e.groupId && t.groupId.trim() === e.groupId.trim()) || eClean === cleanDesc;
            });

            if (!alreadyExists) {
                const cleanGroupId = (t.groupId || t.id).trim().replace(/[^a-zA-Z0-9_-]/g, '_');
                const docId = `sub_${cleanGroupId}_${currentMonth}`;
                const newTxRef = doc(db, "transactions", docId);
                batch.set(newTxRef, {
                    date: `${currentMonth}-01`,
                    desc: `${cleanDesc} 📅`,
                    amount: Number(t.amount),
                    payer: t.payer,
                    splits: t.splits,
                    paymentType: "subscription",
                    icon: t.icon || "fa-utensils",
                    subscriptionRecurring: true,
                    subscriptionStartDate: t.createdAt,
                    groupId: t.groupId,
                    timestamp: new Date(`${currentMonth}-01T02:00:00+07:00`).getTime()
                });
                createdCount++;
            }

            if (t.lastGeneratedMonth !== currentMonth) {
                batch.update(t.ref, { lastGeneratedMonth: currentMonth });
            }
        }

        await batch.commit();

        return res.status(200).json({
            success: true,
            created: createdCount,
            month: currentMonth
        });
    } catch (err) {
        console.error("❌ Error generating subscriptions:", err);
        return res.status(500).json({ success: false, error: err.message });
    }
}
