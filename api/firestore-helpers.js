// Firestore helper functions for Settlement Slip Verification

import { doc, getDoc, getDocs, setDoc, collection, query, where } from "./auth-helpers.js";
import { matchSlipToDebt } from "../lib/settlement-match.mjs";
import { normalizeName } from "../lib/ledger.mjs";
import { settlementPeople } from "../lib/privacy.mjs";
import { matchReceiverName } from "./slipok-helpers.js";
import { buildInfoCard } from "../lib/line-cards.mjs";

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

// หาหนี้ที่ตรงกับสลิป (ใช้ lib/settlement-match.mjs: คิดหนี้หลังหักที่เคลียร์แล้ว รองรับจ่ายบางส่วน)
// คืน { ok, settlement?, reason?, owed? } — reason: 'no_debt' | 'overpay'
// slipReceiver (ถ้ามี) ใช้เลือกเจ้าหนี้ที่ชื่อบัญชีผู้รับตรงกับสลิป
export async function findSettlementForSlip(db, fromName, amount, slipReceiver = null) {
    const [txSnap, memberSnap, setSnap] = await Promise.all([
        getDocs(collection(db, 'transactions')),
        getDocs(collection(db, 'members')),
        getDocs(collection(db, 'settlements'))
    ]);

    const memberNames = new Set();
    const realNames = {};
    memberSnap.docs.forEach(d => {
        const data = d.data();
        const key = normalizeName(data.name);
        if (!key) return;
        memberNames.add(key);
        if (data.realName && !realNames[key]) realNames[key] = data.realName;
    });

    const receiverMatches = slipReceiver
        ? (toName) => {
            const real = realNames[normalizeName(toName)];
            return Boolean(real) && matchReceiverName(slipReceiver, real).matched;
        }
        : null;

    return matchSlipToDebt({
        memberNames: [...memberNames],
        transactions: txSnap.docs.map(d => ({ id: d.id, ...d.data() })),
        settlements: setSnap.docs.map(d => ({ id: d.id, ...d.data() })),
        fromName,
        amount,
        receiverMatches
    });
}

// เข้ากันได้กับโค้ดเดิม: คืน settlement หรือ null
export async function findMatchingSettlementSmart(db, fromName, amount, slipReceiver = null) {
    const result = await findSettlementForSlip(db, fromName, amount, slipReceiver);
    return result.ok ? result.settlement : null;
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
        people: settlementPeople(settlement),
        amount: settlement.amount,
        partial: Boolean(settlement.partial),
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
    // การ์ดธีมเดียวกับเว็บ (โคบอลต์) แจ้งคนรับเงินว่ามีคนโอนให้
    const message = buildInfoCard({
        kicker: "มีคนโอนเงินให้คุณ", big: `฿${Number(amount).toLocaleString("en-US")}`, title: `${fromName} โอนให้คุณแล้ว`,
        altText: `${fromName} โอนเงิน ${amount.toLocaleString()} บาทให้คุณแล้ว`,
        rows: [["จาก", fromName], ["วันที่โอน", formatSlipDate(slip.transDate)]],
        note: "ยอดเคลียร์เงินของเดือนนี้อัปเดตแล้ว"
    });

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
