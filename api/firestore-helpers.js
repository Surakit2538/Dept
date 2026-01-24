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
    // Calculate settlements based on transactions
    // This is a simplified version - in production, you'd want to cache this
    const transactionsSnapshot = await getDocs(collection(db, 'transactions'));
    const membersSnapshot = await getDocs(collection(db, 'members'));

    const members = membersSnapshot.docs.map(d => d.data().name);
    const transactions = transactionsSnapshot.docs
        .map(d => ({ id: d.id, ...d.data() }))
        .filter(t => t.date && t.date.startsWith(month));

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

        // Check if this matches the slip
        if (d.name === fromName && Math.abs(pay - amount) < 1) {
            return {
                from: d.name,
                to: c.name,
                amount: pay,
                month: month
            };
        }

        d.amount -= pay;
        c.amount -= pay;

        if (d.amount <= 0.01) i++;
        if (c.amount <= 0.01) j++;
    }

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
