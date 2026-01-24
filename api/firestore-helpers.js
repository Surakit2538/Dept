// Firestore helper functions for Settlement Slip Verification

import { doc, getDoc, getDocs, setDoc, collection, query, where } from "firebase/firestore";

// Get member by LINE user ID
export async function getMemberByLineId(db, lineUserId) {
    const querySnapshot = await getDocs(
        query(collection(db, 'members'), where('lineUserId', '==', lineUserId))
    );

    if (querySnapshot.empty) {
        return null;
    }

    const memberDoc = querySnapshot.docs[0];
    return {
        id: memberDoc.id,
        ...memberDoc.data(),
        ref: memberDoc.ref
    };
}

// Get member by name
export async function getMemberByName(db, name) {
    const querySnapshot = await getDocs(
        query(collection(db, 'members'), where('name', '==', name))
    );

    if (querySnapshot.empty) {
        return null;
    }

    const memberDoc = querySnapshot.docs[0];
    return {
        id: memberDoc.id,
        ...memberDoc.data(),
        ref: memberDoc.ref
    };
}

// Find matching settlement for the user
export async function findMatchingSettlement(db, fromName, amount, month) {
    console.log('🔍 [findMatchingSettlement] Starting...');
    console.log('  fromName:', fromName);
    console.log('  amount:', amount);
    console.log('  month:', month);

    // Calculate settlements based on transactions
    // This is a simplified version - in production, you'd want to cache this
    const transactionsSnapshot = await getDocs(collection(db, 'transactions'));
    const membersSnapshot = await getDocs(collection(db, 'members'));

    const members = membersSnapshot.docs.map(d => d.data().name);
    const transactions = transactionsSnapshot.docs
        .map(d => ({ id: d.id, ...d.data() }))
        .filter(t => t.date && t.date.startsWith(month));

    console.log('  📊 Found', transactions.length, 'transactions for month', month);
    console.log('  👥 Members:', members);

    // Calculate balances
    const balances = {};
    members.forEach(m => balances[m] = 0);

    transactions.forEach(t => {
        const payer = t.payer || "";
        if (balances.hasOwnProperty(payer)) balances[payer] += Number(t.amount);
        if (t.splits) {
            Object.keys(t.splits).forEach(k => {
                if (balances.hasOwnProperty(k)) balances[k] -= Number(t.splits[k]);
            });
        }
    });

    console.log('  💰 Balances:', balances);

    // Generate settlement plan
    const debtors = [], creditors = [];
    Object.keys(balances).forEach(m => {
        const b = Math.round(balances[m]);
        if (b < -1) debtors.push({ name: m, amount: Math.abs(b) });
        if (b > 1) creditors.push({ name: m, amount: b });
    });

    console.log('  📉 Debtors (owe money):', debtors);
    console.log('  📈 Creditors (should receive):', creditors);

    let i = 0, j = 0;
    while (i < debtors.length && j < creditors.length) {
        const d = debtors[i];
        const c = creditors[j];
        const pay = Math.min(d.amount, c.amount);

        console.log(`  🔄 Checking: ${d.name} → ${c.name} = ${pay} บาท (looking for ${amount})`);

        // Check if this matches the slip
        if (d.name === fromName && Math.abs(pay - amount) < 1) {
            console.log('  ✅ MATCH FOUND!');
            return {
                from: d.name,
                to: c.name,
                amount: pay,
                month: month,
                transactionIds: transactions.map(t => t.id) // เก็บ transaction IDs ที่เกี่ยวข้อง
            };
        }

        d.amount -= pay;
        c.amount -= pay;

        if (d.amount <= 0.01) i++;
        if (c.amount <= 0.01) j++;
    }

    console.log('  ❌ No matching settlement found');
    return null;
}

// Check duplicate slip
export async function checkDuplicateSlip(db, transRef) {
    const querySnapshot = await getDocs(
        query(collection(db, 'settlements'), where('slip.transRef', '==', transRef), where('status', '==', 'verified'))
    );

    return !querySnapshot.empty;
}

// Save verified settlement
export async function saveVerifiedSettlement(db, settlement, slip, uploadedBy, matchResult) {
    const settlementId = `${settlement.from}-${settlement.to}-${settlement.month}-${Date.now()}`;

    await setDoc(doc(db, 'settlements', settlementId), {
        id: settlementId,
        transactionIds: settlement.transactionIds || [], // เก็บ transaction IDs
        month: settlement.month,
        from: settlement.from,
        to: settlement.to,
        amount: settlement.amount,
        status: 'verified',

        slip: {
            transRef: slip.transRef,
            transDate: slip.transDate,
            transTime: slip.transTime,
            transTimestamp: slip.transTimestamp || null,
            amount: slip.amount,

            sender: {
                displayName: slip.sender.displayName,
                name: slip.sender.name,
                account: slip.sender.account?.value || ''
            },

            receiver: {
                displayName: slip.receiver.displayName,
                name: slip.receiver.name,
                account: slip.receiver.account?.value || ''
            },

            sendingBank: slip.sendingBank,
            receivingBank: slip.receivingBank,

            uploadedAt: new Date(),
            uploadedBy: uploadedBy,

            receiverMatched: true,
            matchedField: matchResult.field,
            matchConfidence: matchResult.confidence
        },

        createdAt: new Date(),
        updatedAt: new Date()
    });

    return settlementId;
}

// Send slip verified notification to receiver
export async function sendSlipVerifiedNotification(lineUserId, fromName, toName, amount, slip) {
    const message = {
        type: 'flex',
        altText: `${fromName} โอนเงิน ${amount.toLocaleString()} บาทให้คุณแล้ว`,
        contents: {
            type: 'bubble',
            size: 'kilo',
            header: {
                type: 'box',
                layout: 'vertical',
                contents: [
                    {
                        type: 'text',
                        text: '💰 มีคนโอนเงินให้คุณแล้ว',
                        weight: 'bold',
                        color: '#ffffff',
                        size: 'sm'
                    }
                ],
                backgroundColor: '#10b981',
                paddingAll: '15px'
            },
            body: {
                type: 'box',
                layout: 'vertical',
                contents: [
                    {
                        type: 'text',
                        text: `${fromName} โอนเงินให้คุณแล้ว`,
                        weight: 'bold',
                        size: 'lg',
                        margin: 'none'
                    },
                    {
                        type: 'box',
                        layout: 'vertical',
                        margin: 'lg',
                        spacing: 'sm',
                        contents: [
                            {
                                type: 'box',
                                layout: 'baseline',
                                spacing: 'sm',
                                contents: [
                                    {
                                        type: 'text',
                                        text: 'จำนวนเงิน',
                                        color: '#aaaaaa',
                                        size: 'sm',
                                        flex: 2
                                    },
                                    {
                                        type: 'text',
                                        text: `${amount.toLocaleString()} บาท`,
                                        wrap: true,
                                        color: '#10b981',
                                        size: 'md',
                                        weight: 'bold',
                                        flex: 3
                                    }
                                ]
                            },
                            {
                                type: 'box',
                                layout: 'baseline',
                                spacing: 'sm',
                                contents: [
                                    {
                                        type: 'text',
                                        text: 'วันที่โอน',
                                        color: '#aaaaaa',
                                        size: 'sm',
                                        flex: 2
                                    },
                                    {
                                        type: 'text',
                                        text: formatSlipDate(slip.transDate),
                                        wrap: true,
                                        color: '#666666',
                                        size: 'sm',
                                        flex: 3
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        type: 'box',
                        layout: 'vertical',
                        margin: 'lg',
                        contents: [
                            {
                                type: 'text',
                                text: '✅ Settlement ของเดือนนี้อัปเดตแล้ว',
                                size: 'xs',
                                color: '#999999',
                                wrap: true
                            }
                        ]
                    }
                ]
            }
        }
    };

    // Send via LINE API
    await fetch('https://api.line.me/v2/bot/message/push', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.LINE_CHANNEL_ACCESS_TOKEN}`
        },
        body: JSON.stringify({
            to: lineUserId,
            messages: [message]
        })
    });
}

function formatSlipDate(dateStr) {
    // dateStr = "20260124"
    const year = parseInt(dateStr.substring(0, 4));
    const month = parseInt(dateStr.substring(4, 6));
    const day = parseInt(dateStr.substring(6, 8));

    const thaiMonths = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.',
        'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];

    return `${day} ${thaiMonths[month - 1]} ${year + 543}`;
}

// --- REPORT GENERATION HELPER ---
export async function generateMonthlyReportFlex(db, memberName, monthDate = new Date()) {
    const currentMonth = monthDate.toISOString().slice(0, 7);
    const thaiMonths = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];
    const monthName = `${thaiMonths[parseInt(currentMonth.slice(5, 7)) - 1]} ${parseInt(currentMonth.slice(0, 4)) + 543}`;

    // 1. Fetch Transactions
    const q = query(collection(db, "transactions"),
        where("date", ">=", `${currentMonth}-01`),
        where("date", "<=", `${currentMonth}-31`)
    );

    const snapshot = await getDocs(q);
    const membersSnapshot = await getDocs(collection(db, "members"));
    const membersData = {};
    membersSnapshot.docs.forEach(d => {
        const data = d.data();
        if (data.name) membersData[data.name.toUpperCase()] = data;
    });

    const balances = {};
    Object.keys(membersData).forEach(m => balances[m] = 0);

    let totalPaid = 0;
    let totalShare = 0;
    let recentItems = [];

    // 2. Calculate Balances & Stats
    snapshot.forEach(doc => {
        const t = doc.data();
        if (!t.date.startsWith(currentMonth)) return;

        let involved = false;
        if (t.payer === memberName) {
            totalPaid += Number(t.amount);
            involved = true;
        }
        if (t.splits && t.splits[memberName]) {
            totalShare += Number(t.splits[memberName]);
            involved = true;
        }
        if (involved) {
            recentItems.push({
                desc: t.desc, amount: t.amount, myShare: t.splits[memberName] || 0,
                isPayer: t.payer === memberName, date: t.date
            });
        }

        const payer = t.payer;
        if (balances[payer] !== undefined) balances[payer] += Number(t.amount);

        if (t.splits) {
            Object.entries(t.splits).forEach(([debtor, amount]) => {
                if (balances[debtor] !== undefined) balances[debtor] -= Number(amount);
            });
        }
    });

    // 3. Match Debts
    const debtors = [], creditors = [];
    Object.entries(balances).forEach(([m, bal]) => {
        const b = Math.round(bal * 100) / 100;
        if (b < -1) debtors.push({ name: m, amount: Math.abs(b) });
        if (b > 1) creditors.push({ name: m, amount: b });
    });

    debtors.sort((a, b) => b.amount - a.amount);
    creditors.sort((a, b) => b.amount - a.amount);

    const myDebts = [];
    let i = 0, j = 0;
    while (i < debtors.length && j < creditors.length) {
        const debtor = debtors[i];
        const creditor = creditors[j];
        const pay = Math.min(debtor.amount, creditor.amount);

        if (debtor.name === memberName) {
            myDebts.push({ to: creditor.name, amount: pay });
        }

        debtor.amount -= pay;
        creditor.amount -= pay;

        if (debtor.amount < 0.01) i++;
        if (creditor.amount < 0.01) j++;
    }

    // 4. Generate Flex Message
    const balance = totalPaid - totalShare;
    recentItems.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Item Rows
    const itemRows = recentItems.slice(0, 5).map(item => ({
        type: "box", layout: "horizontal", margin: "sm",
        contents: [
            { type: "text", text: item.desc, size: "xs", color: "#555555", flex: 5, wrap: true },
            { type: "text", text: item.isPayer ? "จ่าย" : "หาร", size: "xs", color: "#aaaaaa", flex: 2, align: "center" },
            { type: "text", text: `${(item.myShare || 0).toLocaleString()}฿`, size: "xs", color: "#111111", flex: 3, align: "end", weight: "bold" }
        ]
    }));

    // Debt Section (QR Codes)
    const debtRows = [];
    if (myDebts.length > 0) {
        debtRows.push({ type: "separator", margin: "lg" });
        debtRows.push({ type: "text", text: "🔻 ที่ต้องโอนจ่าย", size: "sm", weight: "bold", color: "#ef4444", margin: "md" });

        for (const debt of myDebts) {
            const creditor = membersData[debt.to];
            // Format PromptPay: 000-000-0000 -> 0000000000
            const cleanPromptpay = (creditor && creditor.promptpay) ? creditor.promptpay.replace(/[^0-9]/g, '') : null;
            const qrUrl = cleanPromptpay
                ? `https://promptpay.io/${cleanPromptpay}/${debt.amount.toFixed(2)}`
                : null;

            debtRows.push({
                type: "box", layout: "vertical", margin: "md", backgroundColor: "#fef2f2", cornerRadius: "md", paddingAll: "md",
                contents: [
                    {
                        type: "box", layout: "horizontal",
                        contents: [
                            { type: "text", text: `จ่ายให้ ${debt.to}`, size: "sm", weight: "bold", color: "#b91c1c", flex: 7 },
                            { type: "text", text: `${debt.amount.toLocaleString()} ฿`, size: "sm", weight: "bold", color: "#b91c1c", align: "end", flex: 3 }
                        ]
                    }
                ]
            });

            if (qrUrl) {
                debtRows.push({
                    type: "image", url: qrUrl, size: "md", aspectRatio: "1:1", aspectMode: "cover", margin: "sm"
                });
                debtRows.push({
                    type: "text", text: "(สแกนเพื่อจ่าย)", size: "xxs", color: "#ef4444", align: "center", margin: "xs"
                });
            } else {
                debtRows.push({
                    type: "text", text: "(ยังไม่ได้ตั้งค่า PromptPay)", size: "xxs", color: "#9ca3af", align: "center", margin: "xs"
                });
            }
        }
    }

    // Main Flex Container
    return {
        type: "bubble",
        size: "mega",
        header: {
            type: "box", layout: "vertical",
            backgroundColor: balance >= 0 ? "#ecfdf5" : "#fff7ed",
            contents: [
                { type: "text", text: `สรุปยอด ${monthName}`, weight: "bold", color: "#1f2937", size: "sm" },
                {
                    type: "text",
                    text: `${balance >= 0 ? '+' : ''}${balance.toLocaleString()} บาท`,
                    weight: "bold",
                    size: "3xl",
                    color: balance >= 0 ? "#059669" : "#ea580c",
                    margin: "sm"
                },
                { type: "text", text: balance >= 0 ? "ยอดคงเหลือ (ได้คืน)" : "ยอดคงเหลือ (ต้องจ่าย)", size: "xs", color: balance >= 0 ? "#059669" : "#ea580c" }
            ]
        },
        body: {
            type: "box", layout: "vertical",
            contents: [
                {
                    type: "box", layout: "horizontal",
                    contents: [
                        { type: "text", text: "จ่ายไป", size: "xs", color: "#6b7280" },
                        { type: "text", text: `${totalPaid.toLocaleString()} ฿`, size: "xs", color: "#1f2937", align: "end", weight: "bold" }
                    ]
                },
                {
                    type: "box", layout: "horizontal", margin: "sm",
                    contents: [
                        { type: "text", text: "หารแล้ว", size: "xs", color: "#6b7280" },
                        { type: "text", text: `${totalShare.toLocaleString()} ฿`, size: "xs", color: "#1f2937", align: "end", weight: "bold" }
                    ]
                },
                { type: "separator", margin: "lg" },
                { type: "text", text: "รายการล่าสุด", size: "xs", weight: "bold", color: "#374151", margin: "md" },
                ...itemRows,
                ...debtRows
            ]
        },
        footer: {
            type: "box", layout: "vertical", spacing: "sm",
            contents: [
                {
                    type: "button",
                    style: "primary",
                    color: "#06C755",
                    height: "sm",
                    action: {
                        type: "uri",
                        label: "ดูรายละเอียดเพิ่มเติม",
                        uri: "https://liff.line.me/2008948704-db2goT00"
                    }
                }
            ]
        }
    };
}
