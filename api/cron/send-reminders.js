import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where, doc, getDoc, setDoc } from "firebase/firestore";

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
    const bkkString = date.toLocaleString('en-US', { timeZone: 'Asia/Bangkok' });
    const bkkDate = new Date(bkkString);
    const yyyy = bkkDate.getFullYear();
    const mm = String(bkkDate.getMonth() + 1).padStart(2, '0');
    return `${yyyy}-${mm}`;
}

export default async function handler(req, res) {
    // Vercel Cron Security check
    if (req.headers.authorization !== `Bearer ${process.env.CRON_SECRET}`) {
        return res.status(401).end('Unauthorized');
    }

    try {
        console.log("🔄 Starting debt reminders (Vercel Cron)...");
        const currentMonth = getBangkokMonthString();

        // 1. Add idempotency
        const logRef = doc(db, "reminder_logs", currentMonth);
        const logDoc = await getDoc(logRef);
        if (logDoc.exists() && logDoc.data().status === 'success') {
            console.log(`⏭️ Skipping - Reminders already sent for ${currentMonth}`);
            return res.status(200).json({ success: true, message: 'Already sent' });
        }

        // 2. Query transactions for current month
        const txQuery = query(collection(db, 'transactions'),
            where('date', '>=', currentMonth + '-01'),
            where('date', '<=', currentMonth + '-31')
        );
        const txSnapshot = await getDocs(txQuery);
        
        // 3. Query all members
        const membersSnapshot = await getDocs(collection(db, 'members'));
        const members = {};
        membersSnapshot.forEach(docSnap => {
            members[docSnap.id] = docSnap.data();
        });

        // 4. Query settlements for current month
        const settlementsQuery = query(collection(db, 'settlements'),
            where('month', '==', currentMonth),
            where('status', '==', 'verified')
        );
        const settlementsSnapshot = await getDocs(settlementsQuery);

        // 5. Calculate net balance
        const balances = {};
        membersSnapshot.forEach(docSnap => {
            balances[docSnap.id] = 0;
        });

        txSnapshot.forEach(docSnap => {
            const data = docSnap.data();
            const payer = data.payer;
            const splits = data.splits || {};
            const amount = data.amount || 0;
            
            if (payer && balances[payer] !== undefined) {
                balances[payer] += amount;
            }
            
            for (const [key, value] of Object.entries(splits)) {
                if (balances[key] !== undefined) {
                    balances[key] -= value;
                }
            }
        });

        settlementsSnapshot.forEach(docSnap => {
            const data = docSnap.data();
            const from = data.from;
            const to = data.to;
            const amount = data.amount || 0;
            
            if (from && balances[from] !== undefined) {
                balances[from] += amount;
            }
            if (to && balances[to] !== undefined) {
                balances[to] -= amount;
            }
        });

        // 6. Separate debtors and creditors
        const debtors = [];
        const creditors = [];
        for (const [memberId, balance] of Object.entries(balances)) {
            if (balance < -1) {
                debtors.push({ id: memberId, amount: Math.abs(balance) });
            } else if (balance > 1) {
                creditors.push({ id: memberId, amount: balance });
            }
        }

        debtors.sort((a, b) => b.amount - a.amount);
        creditors.sort((a, b) => b.amount - a.amount);

        // 7. Run greedy matching
        const settlementPlan = [];
        let i = 0;
        let j = 0;

        while (i < debtors.length && j < creditors.length) {
            const debtor = debtors[i];
            const creditor = creditors[j];
            const amount = Math.min(debtor.amount, creditor.amount);

            if (amount > 0) {
                settlementPlan.push({
                    from: debtor.id,
                    to: creditor.id,
                    amount: amount
                });
            }

            debtor.amount -= amount;
            creditor.amount -= amount;

            if (debtor.amount < 1) i++;
            if (creditor.amount < 1) j++;
        }

        const remindersByUser = {};
        for (const plan of settlementPlan) {
            if (!remindersByUser[plan.from]) {
                remindersByUser[plan.from] = [];
            }
            remindersByUser[plan.from].push({
                to: plan.to,
                amount: plan.amount
            });
        }

        // 8. Send LINE Push Flex Messages
        let successCount = 0;
        const token = process.env.LINE_CHANNEL_ACCESS_TOKEN;

        if (!token) {
            throw new Error("LINE_CHANNEL_ACCESS_TOKEN is missing from environment variables.");
        }

        for (const [userId, debts] of Object.entries(remindersByUser)) {
            const member = members[userId];
            if (member && member.lineUserId) {
                
                const contents = debts.map(d => {
                    const creditorName = members[d.to]?.name || d.to;
                    const amtStr = d.amount.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 });
                    return {
                        type: "text",
                        text: `คุณค้าง ฿${amtStr} ให้ ${creditorName}`,
                        wrap: true,
                        size: "md"
                    };
                });

                const flexMessage = {
                    type: "flex",
                    altText: "แจ้งเตือนยอดค้างชำระ",
                    contents: {
                        type: "bubble",
                        header: {
                            type: "box",
                            layout: "vertical",
                            backgroundColor: "#f59e0b",
                            contents: [
                                {
                                    type: "text",
                                    text: "⏰ แจ้งเตือนยอดค้างชำระ",
                                    weight: "bold",
                                    color: "#ffffff",
                                    size: "lg"
                                }
                            ]
                        },
                        body: {
                            type: "box",
                            layout: "vertical",
                            spacing: "md",
                            contents: contents
                        },
                        footer: {
                            type: "box",
                            layout: "vertical",
                            contents: [
                                {
                                    type: "button",
                                    style: "primary",
                                    color: "#f59e0b",
                                    action: {
                                        type: "uri",
                                        label: "เปิดแอป Dept",
                                        uri: "https://dept-game.vercel.app/"
                                    }
                                }
                            ]
                        }
                    }
                };

                try {
                    const res = await fetch('https://api.line.me/v2/bot/message/push', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`
                        },
                        body: JSON.stringify({
                            to: member.lineUserId,
                            messages: [flexMessage]
                        })
                    });

                    if (res.ok) {
                        successCount++;
                    } else {
                        const errBody = await res.text();
                        console.error(`Failed to send LINE message to ${userId}: ${errBody}`);
                    }
                } catch (err) {
                    console.error(`Error sending LINE message to ${userId}`, err);
                }
            }
        }

        await setDoc(logRef, {
            status: 'success',
            sentCount: successCount,
            timestamp: Date.now()
        });

        console.log(`✅ Successfully sent ${successCount} debt reminders for ${currentMonth}`);
        return res.status(200).json({ success: true, sentCount: successCount });

    } catch (error) {
        console.error("❌ Error sending debt reminders:", error);
        return res.status(500).json({ success: false, error: error.message });
    }
}
