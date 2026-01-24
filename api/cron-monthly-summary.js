import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import { generateMonthlyReportFlex } from "./firestore-helpers.js";

// --- CONFIGURATION ---
const firebaseConfig = {
    apiKey: "AIzaSyDD_3oEFAFgZyUdW2n6S36P_Ln47DIeNpc",
    authDomain: "deptmoney-6682a.firebaseapp.com",
    projectId: "deptmoney-6682a",
    storageBucket: "deptmoney-6682a.firebasestorage.app",
    messagingSenderId: "6714403201",
    appId: "1:6714403201:web:a98a2cefcebef5c63b6080"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default async function handler(req, res) {
    // 1. Security Check (CRON_SECRET)
    const authHeader = req.headers['authorization'];
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
        // Allow manual testing if CRON_SECRET is not set in environment yet (Optional: for local test)
        if (process.env.CRON_SECRET) {
            return res.status(401).json({ success: false, message: 'Unauthorized' });
        }
    }

    console.log('⏰ Starting Cron: Monthly Summary Report');

    try {
        // 2. Determine Target Month (Previous Month)
        // If run on Feb 1st, we want Jan report.
        const today = new Date();
        const targetDate = new Date(today.getFullYear(), today.getMonth() - 1, 1);
        const currentMonthStr = targetDate.toISOString().slice(0, 7); // YYYY-MM

        console.log(`📅 Generating report for: ${currentMonthStr}`);

        // 3. Get All Members with LINE User ID
        const membersRef = collection(db, "members");
        const q = query(membersRef, where("lineUserId", "!=", null));
        const snapshot = await getDocs(q);

        const results = [];

        // 4. Process Each Member
        for (const doc of snapshot.docs) {
            const member = doc.data();
            const memberName = member.name;
            const lineUserId = member.lineUserId;

            if (!lineUserId) continue;

            console.log(`👤 Processing: ${memberName} (${lineUserId})`);

            try {
                // Generate Report
                const flexMessage = await generateMonthlyReportFlex(db, memberName, targetDate);

                // Push to LINE
                await pushFlex(lineUserId, `สรุปยอดประจำเดือน ${currentMonthStr}`, flexMessage);

                results.push({ name: memberName, status: 'sent' });
            } catch (err) {
                console.error(`❌ Error sending to ${memberName}:`, err);
                results.push({ name: memberName, status: 'error', error: err.message });
            }
        }

        console.log('✅ Cron Completed:', results);
        return res.status(200).json({ success: true, processed: results });

    } catch (error) {
        console.error('🔥 Cron Fatal Error:', error);
        return res.status(500).json({ success: false, error: error.message });
    }
}

// Helper: Push Flex Message
async function pushFlex(userId, altText, contents) {
    const response = await fetch('https://api.line.me/v2/bot/message/push', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.LINE_CHANNEL_ACCESS_TOKEN}`
        },
        body: JSON.stringify({
            to: userId,
            messages: [{ type: 'flex', altText, contents }]
        })
    });

    if (!response.ok) {
        const text = await response.text();
        throw new Error(`LINE API Error: ${text}`);
    }
}
