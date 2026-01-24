import { initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

// Initialize Firebase Admin (ถ้ายังไม่ได้ init)
let db;
try {
    db = getFirestore();
} catch (e) {
    const app = initializeApp();
    db = getFirestore(app);
}

const SLIPOK_API_URL = 'https://api.slipok.com/api/line/apikey/59702';
const SLIPOK_API_KEY = 'SLIPOK4D5KB1A';

export default async function handler(req, res) {
    // CORS
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ success: false, message: 'Method not allowed' });
    }

    try {
        const { settlementId, file, qrData } = req.body;

        if (!settlementId) {
            return res.status(400).json({ success: false, message: 'ต้องระบุ settlementId' });
        }

        if (!file && !qrData) {
            return res.status(400).json({ success: false, message: 'ต้องส่งรูปสลิปหรือ QR Code' });
        }

        // 1. Get Settlement Data
        const settlementDoc = await db.collection('settlements').doc(settlementId).get();

        if (!settlementDoc.exists) {
            return res.status(404).json({ success: false, message: 'ไม่พบข้อมูล Settlement' });
        }

        const settlement = settlementDoc.data();
        const { from, to, amount, month } = settlement;

        // 2. Get Receiver Member Data
        const receiverSnapshot = await db.collection('members')
            .where('name', '==', to)
            .limit(1)
            .get();

        if (receiverSnapshot.empty) {
            return res.status(404).json({ success: false, message: `ไม่พบข้อมูลสมาชิก ${to}` });
        }

        const receiverDoc = receiverSnapshot.docs[0];
        const receiver = receiverDoc.data();

        // 3. เช็คว่าผู้รับมีชื่อจริงหรือไม่
        if (!receiver.realName || receiver.realName.trim() === '') {
            return res.status(400).json({
                success: false,
                message: `${to} ยังไม่ได้ตั้งค่าชื่อจริง กรุณาแจ้งให้ตั้งค่าในหน้า Settings ก่อน`
            });
        }

        // 4. Verify Slip ผ่าน SlipOK API
        const slipData = await verifySlipWithSlipOK(file, qrData, amount);

        if (!slipData.success) {
            return res.status(400).json({
                success: false,
                message: slipData.message || 'สลิปไม่ถูกต้อง',
                code: slipData.code
            });
        }

        const slip = slipData.data;

        // 5. เช็คสลิปซ้ำ
        const duplicateCheck = await db.collection('settlements')
            .where('slip.transRef', '==', slip.transRef)
            .where('status', '==', 'verified')
            .limit(1)
            .get();

        if (!duplicateCheck.empty) {
            return res.status(400).json({
                success: false,
                message: 'สลิปนี้เคยใช้ยืนยันการโอนเงินแล้ว'
            });
        }

        // 6. Match ชื่อผู้รับ
        const matchResult = matchReceiverName(slip.receiver, receiver.realName);

        if (!matchResult.matched) {
            return res.status(400).json({
                success: false,
                message: `ผู้รับไม่ตรง: คาดหวัง "${receiver.realName}" แต่สลิปเป็น "${slip.receiver.displayName}"`
            });
        }

        // 7. บันทึกข้อมูล
        await db.collection('settlements').doc(settlementId).update({
            status: 'verified',
            slip: {
                transRef: slip.transRef,
                transDate: slip.transDate,
                transTime: slip.transTime,
                transTimestamp: slip.transTimestamp,
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
                uploadedBy: from,

                receiverMatched: true,
                matchedField: matchResult.field,
                matchConfidence: matchResult.confidence
            },
            updatedAt: new Date()
        });

        // 8. ส่ง LINE Notification ไปหาผู้รับเงิน
        try {
            if (receiver.lineUserId) {
                await sendLineNotification(receiver.lineUserId, from, to, amount, slip);
            }
        } catch (error) {
            console.error('Failed to send LINE notification:', error);
            // ไม่ return error เพราะ notification ไม่สำคัญพอจะทำให้ verify ล้มเหลว
        }

        // 9. Return Success
        return res.json({
            success: true,
            slip: slip,
            message: 'ยืนยันการโอนเงินสำเร็จ'
        });

    } catch (error) {
        console.error('Error verifying settlement slip:', error);
        return res.status(500).json({
            success: false,
            message: 'เกิดข้อผิดพลาด: ' + error.message
        });
    }
}

// Helper: Verify Slip with SlipOK API
async function verifySlipWithSlipOK(file, qrData, expectedAmount) {
    try {
        const formData = new FormData();

        if (file) {
            // ถ้ามีไฟล์ (รูปสลิป)
            formData.append('files', file);
        } else if (qrData) {
            // ถ้ามี QR String
            formData.append('data', qrData);
        }

        formData.append('amount', expectedAmount);
        formData.append('log', 'false'); // ไม่เก็บใน SlipOK LIFF

        const response = await fetch(SLIPOK_API_URL, {
            method: 'POST',
            headers: {
                'x-authorization': SLIPOK_API_KEY
            },
            body: formData
        });

        const result = await response.json();

        if (!response.ok) {
            return {
                success: false,
                code: result.code,
                message: result.message
            };
        }

        return result;

    } catch (error) {
        console.error('SlipOK API Error:', error);
        return {
            success: false,
            message: 'ไม่สามารถเชื่อมต่อกับ SlipOK API ได้'
        };
    }
}

// Helper: Match Receiver Name
function matchReceiverName(slipReceiver, realName) {
    const normalize = (str) => {
        if (!str) return '';
        return str.toUpperCase()
            .replace(/นาย|นาง|นางสาว|MR|MRS|MISS|MS|MR\.|MRS\.|MISS\.|MS\./gi, '')
            .replace(/[^A-Z0-9ก-๙]/g, '');
    };

    const realNameNorm = normalize(realName);

    // Try displayName
    const displayNameNorm = normalize(slipReceiver.displayName);
    if (displayNameNorm.includes(realNameNorm) || realNameNorm.includes(displayNameNorm)) {
        return {
            matched: true,
            field: 'displayName',
            confidence: 0.95
        };
    }

    // Try name
    const nameNorm = normalize(slipReceiver.name);
    if (nameNorm.includes(realNameNorm) || realNameNorm.includes(nameNorm)) {
        return {
            matched: true,
            field: 'name',
            confidence: 0.90
        };
    }

    // No match
    return {
        matched: false,
        field: null,
        confidence: 0
    };
}

// Helper: Send LINE Notification
async function sendLineNotification(lineUserId, fromName, toName, amount, slip) {
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
                        text: '✅ ยืนยันการโอนเงิน',
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
                                        text: 'วันที่',
                                        color: '#aaaaaa',
                                        size: 'sm',
                                        flex: 2
                                    },
                                    {
                                        type: 'text',
                                        text: formatThaiDate(slip.transDate),
                                        wrap: true,
                                        color: '#666666',
                                        size: 'sm',
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
                                        text: 'เวลา',
                                        color: '#aaaaaa',
                                        size: 'sm',
                                        flex: 2
                                    },
                                    {
                                        type: 'text',
                                        text: slip.transTime,
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
                                text: '💡 Settlement ของเดือนนี้ได้รับการอัปเดตแล้ว',
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

    // ส่งผ่าน LINE Messaging API
    const response = await fetch('https://api.line.me/v2/bot/message/push', {
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

    if (!response.ok) {
        throw new Error('Failed to send LINE message');
    }
}

function formatThaiDate(dateStr) {
    // dateStr = "20260124"
    const year = parseInt(dateStr.substring(0, 4));
    const month = parseInt(dateStr.substring(4, 6));
    const day = parseInt(dateStr.substring(6, 8));

    const thaiMonths = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.',
        'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];

    return `${day} ${thaiMonths[month - 1]} ${year + 543}`;
}
