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

// Get member by name (case-insensitive)
export async function getMemberByName(db, name) {
    const querySnapshot = await getDocs(collection(db, 'members'));
    const upperName = (name || '').toUpperCase();
    const memberDoc = querySnapshot.docs.find(
        d => (d.data().name || '').toUpperCase() === upperName
    );

    if (!memberDoc) {
        return null;
    }

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

    const members = membersSnapshot.docs.map(d => (d.data().name || '').toUpperCase());
    const transactions = transactionsSnapshot.docs
        .map(d => ({ id: d.id, ...d.data() }))
        .filter(t => t.date && t.date.startsWith(month));

    console.log('  📊 Found', transactions.length, 'transactions for month', month);
    console.log('  👥 Members:', members);

    const normalizedFromName = (fromName || '').toUpperCase();

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
        if (d.name === normalizedFromName && Math.abs(pay - amount) < 1) {
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

}

// Find matching settlement (Smart Search - ค้นหาย้อนหลังทุกเดือนที่ค้างชำระ)
export async function findMatchingSettlementSmart(db, fromName, amount) {
    console.log('🔍 [findMatchingSettlementSmart] Starting SMART SEARCH...');
    console.log('  fromName:', fromName);
    console.log('  amount:', amount);

    // Step 1: หาเดือนที่มี transaction
    const transactionsSnapshot = await getDocs(collection(db, 'transactions'));
    const membersSnapshot = await getDocs(collection(db, 'members'));

    const members = membersSnapshot.docs.map(d => (d.data().name || '').toUpperCase());
    const normalizedFromName = (fromName || '').toUpperCase();
    const allTransactions = transactionsSnapshot.docs.map(d => ({ id: d.id, ...d.data() }));

    // Group transactions by month
    const monthsWithTransactions = {};
    allTransactions.forEach(t => {
        if (t.date) {
            const month = t.date.slice(0, 7); // "2026-02"
            if (!monthsWithTransactions[month]) {
                monthsWithTransactions[month] = [];
            }
            monthsWithTransactions[month].push(t);
        }
    });

    // Sort months (newest first)
    const months = Object.keys(monthsWithTransactions).sort().reverse();
    console.log('  📅 Found transactions in months:', months);

    // Step 2: ตรวจสอบแต่ละเดือน (เดือนล่าสุดก่อน)
    const settlementsSnapshot = await getDocs(collection(db, 'settlements'));
    const verifiedSettlements = {};

    settlementsSnapshot.docs.forEach(d => {
        const settlement = d.data();
        if (settlement.status === 'verified' && settlement.month) {
            const key = `${settlement.from}-${settlement.to}-${settlement.month}`;
            verifiedSettlements[key] = true;
        }
    });

    console.log('  ✅ Verified settlements:', Object.keys(verifiedSettlements).length);

    // Step 3: ค้นหาในแต่ละเดือนที่ยังไม่ได้ชำระ
    for (const month of months) {
        console.log(`  🔍 Checking month: ${month}`);

        const transactions = monthsWithTransactions[month];

        // calculatebalances for this month
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

        // Generate settlement plan
        const debtors = [], creditors = [];
        Object.keys(balances).forEach(m => {
            const b = Math.round(balances[m]);
            if (b < -1) debtors.push({ name: m, amount: Math.abs(b) });
            if (b > 1) creditors.push({ name: m, amount: b });
        });

        let i = 0, j = 0;
        while (i < debtors.length && j < creditors.length) {
            const d = debtors[i];
            const c = creditors[j];
            const pay = Math.min(d.amount, c.amount);

            // Check if verified already
            const key = `${d.name}-${c.name}-${month}`;
            const isVerified = verifiedSettlements[key];

            // Check if this matches the slip AND not verified yet
            if (d.name === normalizedFromName && Math.abs(pay - amount) < 1 && !isVerified) {
                console.log(`  ✅ MATCH FOUND in month ${month}!`);
                return {
                    from: d.name,
                    to: c.name,
                    amount: pay,
                    month: month,
                    transactionIds: transactions.map(t => t.id)
                };
            }

            d.amount -= pay;
            c.amount -= pay;

            if (d.amount <= 0.01) i++;
            if (c.amount <= 0.01) j++;
        }
    }

    console.log('  ❌ No matching settlement found in any month');
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
                backgroundColor: '#334155',
                contents: [
                    {
                        type: 'text',
                        text: 'TRANSFER ALERT',
                        color: '#94a3b8',
                        size: 'xxs',
                        weight: 'bold'
                    },
                    {
                        type: 'text',
                        text: '💰 มีคนโอนเงินให้คุณ',
                        weight: 'bold',
                        color: '#ffffff',
                        size: 'lg',
                        margin: 'xs'
                    },
                    {
                        type: 'text',
                        text: `${fromName} โอนเงินให้คุณแล้ว`,
                        color: '#cbd5e1',
                        size: 'xs',
                        wrap: true
                    }
                ]
            },
            body: {
                type: 'box',
                layout: 'vertical',
                contents: [
                    {
                        type: 'box', layout: 'horizontal',
                        contents: [
                            { type: 'text', text: 'จำนวนเงิน', size: 'xs', color: '#64748b' },
                            { type: 'text', text: `${amount.toLocaleString()} ฿`, size: 'sm', color: '#10b981', align: 'end', weight: 'bold' }
                        ]
                    },
                    {
                        type: 'box', layout: 'horizontal', margin: 'sm',
                        contents: [
                            { type: 'text', text: 'วันที่โอน', size: 'xs', color: '#64748b' },
                            { type: 'text', text: formatSlipDate(slip.transDate), size: 'sm', color: '#1e293b', align: 'end', weight: 'bold' }
                        ]
                    },
                    { type: 'separator', margin: 'md' },
                    { type: 'text', text: '✅ Settlement ของเดือนนี้อัปเดตแล้ว', size: 'xs', color: '#64748b', align: 'center', margin: 'md', wrap: true }
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
