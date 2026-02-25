import { initializeApp } from "firebase/app";
import {
    getFirestore, doc, getDoc, setDoc, deleteDoc,
    collection, getDocs, writeBatch, serverTimestamp, query, where
} from "firebase/firestore";
import { GoogleGenerativeAI } from "@google/generative-ai";
// Import SlipOK helpers
import {
    verifySlipWithSlipOK,
    matchReceiverName,
    getSlipErrorMessage,
    createSlipSuccessMessage
} from './slipok-helpers.js';

import {
    getMemberByLineId as getMemberByLineIdHelper,
    getMemberByName as getMemberByNameHelper,
    findMatchingSettlement,
    checkDuplicateSlip,
    saveVerifiedSettlement,
    sendSlipVerifiedNotification
} from './firestore-helpers.js';

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

// --- MAIN HANDLER ---
export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

    const events = req.body.events || [];
    await Promise.all(events.map(async (event) => {
        try {
            if (event.type === 'message') {
                if (event.message.type === 'text') await handleTextMessage(event);
                if (event.message.type === 'image') await handleImageMessage(event);
            }
        } catch (err) {
            console.error("Handler Error:", err);
        }
    }));
    return res.status(200).send('OK');
}

// --- TEXT MESSAGE HANDLER ---
async function handleTextMessage(event) {
    const userId = event.source.userId;
    const text = event.message.text.trim();
    const replyToken = event.replyToken;

    // คำสั่งยกเลิก
    if (['ยกเลิก', 'cancel', 'เริ่มใหม่', 'reset', 'พอ'].includes(text.toLowerCase())) {
        await deleteDoc(doc(db, 'user_sessions', userId));
        return replyText(replyToken, "❌ ยกเลิกรายการแล้วครับ");
    }

    const sessionRef = doc(db, 'user_sessions', userId);
    const sessionSnap = await getDoc(sessionRef);
    let session = sessionSnap.exists() ? sessionSnap.data() : null;

    // --- STEP 0: จุดเริ่มต้น (ไม่มี Session ค้าง) ---
    if (!session) {
        // 1. คำสั่งเริ่มจดบันทึก
        if (text === "เริ่มต้นจดบันทึก") {
            await setDoc(sessionRef, {
                step: 'ASK_DESC_START',
                timestamp: serverTimestamp()
            });
            return replyText(replyToken, "📝 เริ่มบันทึกรายการ\nกรุณาพิมพ์ชื่อรายการครับ");
        }

        // 2. คำสั่งดูค่าใช้จ่าย - ดึงจาก userId โดยอัตโนมัติ
        if (text === "ต้องการดูค่าใช้จ่ายของเดือนนี้") {
            const memberName = await getMemberNameByLineId(userId);
            if (!memberName) {
                return replyText(replyToken, "❌ ไม่พบข้อมูลสมาชิก กรุณาลงทะเบียนก่อนใช้งาน");
            }
            await generateMemberReport(replyToken, memberName);
            return;
        }

        // ถ้าพิมพ์อย่างอื่นมา ให้ปล่อยผ่าน (Ignore)
        return;
    }

    // --- มี Session ค้างอยู่ ---
    const currentStep = session.step;
    const data = session.data || {};

    // STEP 0.5: รับชื่อรายการ
    if (currentStep === 'ASK_DESC_START') {
        await setDoc(sessionRef, {
            step: 'ASK_AMOUNT',
            data: { desc: text },
            timestamp: serverTimestamp()
        });
        const flex = createInteractiveCard("ระบุราคา", `รายการ: ${text}`, "ระบุราคาเป็นจำนวนเงิน (ใส่เฉพาะตัวเลขไม่ต้องมี บาท) ครับ");
        return replyFlex(replyToken, "ระบุราคา", flex);
    }

    // STEP 2: รับราคา -> ถามคนจ่าย
    if (currentStep === 'ASK_AMOUNT') {
        const amount = parseFloat(text.replace(/,/g, ''));
        if (isNaN(amount) || amount <= 0) return replyText(replyToken, "⚠️ โปรดระบุราคาเป็นตัวเลขครับ");

        await setDoc(sessionRef, { step: 'ASK_PAYER', data: { ...data, amount } }, { merge: true });
        const members = await getMemberNames();
        const actions = members.map(m => ({ type: "action", action: { type: "message", label: m, text: m } }));
        const flex = createInteractiveCard("ระบุคนจ่าย", `ยอดเงิน: ${amount.toLocaleString()} บาท (หากไม่พบชื่อให้ทำในเว็บไซต์)`);
        return replyQuickReply(replyToken, flex, actions);
    }

    // STEP 3: รับคนจ่าย -> ถามรูปแบบการชำระ
    if (currentStep === 'ASK_PAYER') {
        const payer = text.toUpperCase();
        await setDoc(sessionRef, { step: 'ASK_PAYMENT_TYPE', data: { ...data, payer } }, { merge: true });
        const actions = [
            { type: "action", action: { type: "message", label: "จ่ายเต็มจำนวน", text: "จ่ายเต็ม" } },
            { type: "action", action: { type: "message", label: "ผ่อนชำระ", text: "ผ่อนชำระ" } },
            { type: "action", action: { type: "message", label: "💳 Subscription", text: "Subscription" } }
        ];
        const flex = createInteractiveCard("รูปแบบการชำระ", `คนจ่าย: ${payer}
เลือกรูปแบบการชำระครับ`);
        return replyQuickReply(replyToken, flex, actions);
    }

    // STEP 4: รูปแบบชำระ
    if (currentStep === 'ASK_PAYMENT_TYPE') {
        if (text.includes("ผ่อน")) {
            await setDoc(sessionRef, { step: 'ASK_INSTALLMENTS', data: { ...data, paymentType: 'installment' } }, { merge: true });
            const flex = createInteractiveCard("ระบุจำนวนงวด", "ต้องการผ่อนกี่เดือน? (2-24)", "ตัวอย่าง: 3, 6, 12");
            return replyFlex(replyToken, "ระบุจำนวนงวด", flex);
        } else if (text.toLowerCase().includes("subscription") || text.includes("💳")) {
            // Subscription - ข้ามไปถามคนหารเลย
            await setDoc(sessionRef, {
                step: 'ASK_PARTICIPANTS',
                data: { ...data, paymentType: 'subscription', installments: 1, participants: [] }
            }, { merge: true });
            return await askParticipants(replyToken, userId, []);
        } else {
            // จ่ายเต็ม
            await setDoc(sessionRef, {
                step: 'ASK_PARTICIPANTS',
                data: { ...data, paymentType: 'normal', installments: 1, participants: [] }
            }, { merge: true });
            return await askParticipants(replyToken, userId, []);
        }
    }

    // STEP 4.5: รับจำนวนงวด
    if (currentStep === 'ASK_INSTALLMENTS') {
        let installments = parseInt(text);
        if (isNaN(installments) || installments < 2) installments = 2;
        await setDoc(sessionRef, { step: 'ASK_PARTICIPANTS', data: { ...data, installments, participants: [] } }, { merge: true });
        return await askParticipants(replyToken, userId, []);
    }

    // STEP 5: เลือกคนหาร
    if (currentStep === 'ASK_PARTICIPANTS') {
        let currentList = data.participants || [];
        if (text === 'ยืนยัน' || text === '✅ ตกลง') {
            if (currentList.length === 0) return replyText(replyToken, "⚠️ กรุณาเลือกอย่างน้อย 1 คนครับ");
            await setDoc(sessionRef, { step: 'ASK_SPLIT_METHOD' }, { merge: true });
            const actions = [
                { type: "action", action: { type: "message", label: "หารเท่ากัน", text: "หารเท่า" } },
                { type: "action", action: { type: "message", label: "ระบุจำนวนเอง", text: "ระบุจำนวน" } }
            ];
            const flex = createInteractiveCard("วิธีหารเงิน", `ผู้ร่วมหาร: ${currentList.join(', ')}`);
            return replyQuickReply(replyToken, flex, actions);
        }

        const members = await getMemberNames();
        const inputName = text.toUpperCase();
        if (text === 'ทุกคน') {
            currentList = [...members];
        } else if (members.includes(inputName)) {
            currentList = currentList.includes(inputName) ? currentList.filter(m => m !== inputName) : [...currentList, inputName];
        }
        await setDoc(sessionRef, { data: { ...data, participants: currentList } }, { merge: true });
        return await askParticipants(replyToken, userId, currentList);
    }

    // STEP 6: วิธีหาร
    if (currentStep === 'ASK_SPLIT_METHOD') {
        if (text.includes("ระบุ")) {
            await setDoc(sessionRef, { step: 'ASK_CUSTOM_AMOUNTS', data: { ...data, splitMethod: 'custom' } }, { merge: true });
            const example = data.participants.map(p => `${p}=100`).join(', ');
            const flex = createInteractiveCard("ระบุยอดรายคน", `ตัวอย่าง: ${example}`, "พิมพ์ตามรูปแบบ 'ชื่อ=จำนวน'");
            return replyFlex(replyToken, "ระบุยอดแยก", flex);
        } else {
            return await saveTransaction(replyToken, userId, { ...data, splitMethod: 'equal' });
        }
    }

    // STEP 7: ยอด Custom
    if (currentStep === 'ASK_CUSTOM_AMOUNTS') {
        return await saveTransaction(replyToken, userId, { ...data, customAmountStr: text });
    }
}

// --- IMAGE MESSAGE HANDLER (SLIP VERIFICATION) ---
async function handleImageMessage(event) {
    const userId = event.source.userId;
    const replyToken = event.replyToken;
    const messageId = event.message.id;

    try {
        // 1. ดึงรูปภาพจาก LINE
        const imageBuffer = await getImageContent(messageId);

        if (!imageBuffer) {
            return replyText(replyToken, "❌ ไม่สามารถดึงรูปภาพได้ กรุณาลองใหม่อีกครั้ง");
        }

        // 2. ตรวจสอบว่า user มีข้อมูลสมาชิกหรือไม่
        const userMember = await getMemberByLineIdHelper(db, userId);

        if (!userMember) {
            return replyText(replyToken, "❌ ไม่พบข้อมูลสมาชิก กรุณาลงทะเบียนก่อนใช้งาน");
        }

        // 3. ส่งรูปไปตรวจสอบกับ SlipOK API
        await replyText(replyToken, "🔍 กำลังตรวจสอบสลิป...");

        const slipData = await verifySlipWithSlipOK(imageBuffer);

        // 🔍 DEBUG: Log SlipOK response
        console.log('=== SlipOK Response ===');
        console.log('Success:', slipData.success);
        console.log('Full Response:', JSON.stringify(slipData, null, 2));

        if (!slipData.success) {
            const errorMsg = getSlipErrorMessage(slipData.code, slipData.message);
            return pushMessage(userId, `❌ ${errorMsg}`);
        }

        const slip = slipData.data;

        // 🔍 DEBUG: Log slip data structure
        console.log('=== Slip Data Structure ===');
        console.log('slip.amount:', slip.amount);
        console.log('Type of slip.amount:', typeof slip.amount);

        // 4. ตรวจสอบว่ามียอดเงินในสลิปหรือไม่
        // SlipOK ส่ง amount เป็น number โดยตรง (เช่น 50) ไม่ใช่ object
        const slipAmount = typeof slip.amount === 'number' ? slip.amount : (slip.amount?.amount || 0);

        if (!slipAmount || slipAmount <= 0) {
            console.log('❌ Amount validation failed! slip.amount =', slip.amount);

            return pushMessage(userId,
                `❌ ไม่สามารถอ่านยอดเงินจากสลิปได้\n\n` +
                `กรุณาตรวจสอบว่าสลิปชัดเจนและลองใหม่อีกครั้ง`
            );
        }

        console.log('✅ Slip amount validated:', slipAmount);

        // 5. หา Settlement ที่ตรงกับยอดเงินในสลิป
        // ใช้เดือนปัจจุบัน (YYYY-MM format)
        const currentMonth = new Date().toISOString().slice(0, 7);
        console.log('🔍 Finding settlement for:', userMember.name, 'amount:', slipAmount, 'month:', currentMonth);

        const matchingSettlement = await findMatchingSettlement(db, userMember.name, slipAmount, currentMonth);

        console.log('Settlement found:', matchingSettlement ? 'YES' : 'NO');
        if (matchingSettlement) {
            console.log('Settlement details:', JSON.stringify(matchingSettlement, null, 2));
        }

        if (!matchingSettlement) {
            return pushMessage(userId,
                `⚠️ ไม่พบรายการ Settlement ที่ตรงกับจำนวนเงิน ${slipAmount.toLocaleString()} บาท\n\n` +
                `กรุณาตรวจสอบยอดในหน้า Settlement แล้วลองใหม่อีกครั้ง\n\n` +
                `💡 ตรวจสอบว่า:\n` +
                `- มี Transaction ในเดือนนี้หรือไม่\n` +
                `- ยอดคงเหลือที่ต้องจ่ายตรงกับ ${slipAmount} บาทหรือไม่`
            );
        }

        // 5. ตรวจสอบชื่อผู้รับ
        const receiver = await getMemberByNameHelper(db, matchingSettlement.to);

        if (!receiver || !receiver.realName) {
            return pushMessage(userId,
                `⚠️ ผู้รับ (${matchingSettlement.to}) ยังไม่ได้ตั้งค่าชื่อจริง\n` +
                `กรุณาแจ้งให้ผู้รับไปตั้งค่าในหน้า Settings`
            );
        }

        console.log(`🔍 MATCHING DEBUG:`);
        console.log(`   - Slip Receiver: ${JSON.stringify(slip.receiver)}`);
        console.log(`   - DB Real Name: "${receiver.realName}"`);

        const matchResult = matchReceiverName(slip.receiver, receiver.realName);
        console.log(`   - Result: ${JSON.stringify(matchResult)}`);

        if (!matchResult.matched) {
            const debugInfo = matchResult.debug || {};
            return pushMessage(userId,
                `❌ ชื่อผู้รับไม่ตรงกัน!\n\n` +
                `ในสลิป: ${slip.receiver.displayName || slip.receiver.name}\n` +
                `ในระบบ: ${receiver.realName}\n\n` +
                `🔍 Debug Info (Normalized):\n` +
                `Slip: "${debugInfo.slipDisplay || debugInfo.slipName}"\n` +
                `DB: "${debugInfo.db}"\n\n` +
                `กรุณาตรวจสอบว่าชื่อจริงในระบบตรงกับบัญชีธนาคารหรือไม่`
            );
        }

        // 6. เช็คว่าสลิปนี้เคยถูกใช้แล้วหรือยัง
        const isDuplicate = await checkDuplicateSlip(db, slip.transRef);

        if (isDuplicate) {
            return pushMessage(userId, `⚠️ สลิปนี้เคยถูกใช้ยืนยันการโอนเงินแล้ว`);
        }

        // 7. บันทึกข้อมูลการ Verify
        await saveVerifiedSettlement(db, matchingSettlement, slip, userMember.name, matchResult);

        // 8. ส่ง Notification ไปหาผู้รับ
        if (receiver.lineUserId) {
            await sendSlipVerifiedNotification(
                receiver.lineUserId,
                userMember.name,
                receiver.name,
                slipAmount,
                slip
            );
        }

        // 9. ส่งข้อความยืนยันกลับไปหาผู้ส่ง
        const successFlex = createSlipSuccessMessage(slip, matchingSettlement);
        return pushFlex(userId, "✅ ยืนยันการโอนเงินสำเร็จ", successFlex);

    } catch (error) {
        console.error("Error in handleImageMessage:", error);
        return pushMessage(userId, "❌ เกิดข้อผิดพลาด: " + error.message);
    }
}

// Helper function to get image content from LINE
async function getImageContent(messageId) {
    try {
        const response = await fetch(`https://api-data.line.me/v2/bot/message/${messageId}/content`, {
            headers: {
                'Authorization': `Bearer ${process.env.LINE_CHANNEL_ACCESS_TOKEN}`
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch image from LINE');
        }

        const arrayBuffer = await response.arrayBuffer();
        return Buffer.from(arrayBuffer);
    } catch (error) {
        console.error('Error getting image content:', error);
        return null;
    }
}

// --- HELPERS ---
async function getMemberNames() {
    const snap = await getDocs(collection(db, "members"));
    const names = new Set();
    snap.docs.forEach(d => { if (d.data().name) names.add(d.data().name.toUpperCase()); });
    return Array.from(names).sort();
}

async function getMemberNameByLineId(lineId) {
    const q = query(collection(db, "members"), where("lineUserId", "==", lineId));
    const snap = await getDocs(q);
    if (snap.empty) return null;
    return snap.docs[0].data().name.toUpperCase();
}

async function replyText(replyToken, text) {
    await sendToLine(replyToken, { type: 'text', text });
}

async function replyFlex(replyToken, altText, contents) {
    await sendToLine(replyToken, { type: 'flex', altText, contents });
}

async function replyQuickReply(replyToken, flex, actions) {
    const message = { type: 'flex', altText: 'กรุณาเลือก', contents: flex, quickReply: { items: actions } };
    await sendToLine(replyToken, message);
}

async function pushMessage(userId, text) {
    try {
        await fetch('https://api.line.me/v2/bot/message/push', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.LINE_CHANNEL_ACCESS_TOKEN}`
            },
            body: JSON.stringify({
                to: userId,
                messages: [{ type: 'text', text }]
            })
        });
    } catch (error) {
        console.error('Error pushing message:', error);
    }
}

async function pushFlex(userId, altText, contents) {
    try {
        await fetch('https://api.line.me/v2/bot/message/push', {
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
    } catch (error) {
        console.error('Error pushing flex:', error);
    }
}

function createInteractiveCard(title, description, hintText = null) {
    const contents = [];

    if (hintText) {
        contents.push({
            type: "box",
            layout: "vertical",
            contents: [
                {
                    type: "text",
                    text: hintText,
                    size: "xs",
                    color: "#94a3b8",
                    wrap: true
                }
            ],
            paddingAll: "sm",
            backgroundColor: "#f8fafc",
            cornerRadius: "md",
            margin: "md"
        });
    } else {
        contents.push({
            type: "text", text: "โปรดเลือกหรือพิมพ์ข้อความด้านล่าง", size: "xs", color: "#94a3b8", align: "center"
        });
    }

    return {
        type: "bubble",
        size: "kilo",
        header: {
            type: "box", layout: "vertical", backgroundColor: "#334155",
            contents: [
                { type: "text", text: "DEPT ALERT", color: "#94a3b8", size: "xxs", weight: "bold" },
                { type: "text", text: title, color: "#ffffff", size: "lg", weight: "bold", margin: "xs" },
                { type: "text", text: description, color: "#cbd5e1", size: "xs", wrap: true }
            ]
        },
        body: {
            type: "box",
            layout: "vertical",
            contents: contents,
            paddingAll: "lg"
        }
    };
}

async function askParticipants(replyToken, userId, selectedList) {
    const members = await getMemberNames();
    const actions = [
        { type: "action", action: { type: "message", label: "✅ ยืนยันรายชื่อ", text: "ยืนยัน" } },
        { type: "action", action: { type: "message", label: "เลือกทุกคน", text: "ทุกคน" } },
        ...members.slice(0, 11).map(m => ({
            type: "action",
            action: { type: "message", label: (selectedList.includes(m) ? `✅ ${m}` : m), text: m }
        }))
    ];

    const flex = {
        "type": "bubble", "size": "mega",
        "header": {
            "type": "box", "layout": "vertical", "backgroundColor": "#334155",
            "contents": [
                { "type": "text", "text": "DEPT ALERT", "color": "#94a3b8", "size": "xxs", "weight": "bold" },
                { "type": "text", "text": "หารกับใครบ้าง?", "color": "#ffffff", "size": "lg", "weight": "bold", "margin": "xs" },
                { "type": "text", "text": selectedList.length > 0 ? `เลือกแล้ว: ${selectedList.join(', ')}` : "ยังไม่ได้เลือกใคร", "color": "#cbd5e1", "size": "xs", "wrap": true }
            ]
        },
        "body": {
            "type": "box", "layout": "vertical", "backgroundColor": "#ffffff",
            "contents": [
                { "type": "text", "text": "แตะที่ชื่อเพื่อเลือก/ออก แล้วกดปุ่มยืนยัน", "size": "xs", "color": "#94a3b8", "align": "center" }
            ],
            "paddingAll": "lg"
        }
    };
    return replyQuickReply(replyToken, flex, actions);
}

async function saveTransaction(replyToken, userId, finalData) {
    try {
        const batch = writeBatch(db);
        const today = new Date();
        const splits = {};

        if (finalData.splitMethod === 'custom') {
            finalData.customAmountStr.split(/[\s,]+/).forEach(p => {
                const [name, val] = p.split('=');
                if (name && val) splits[name.trim().toUpperCase()] = parseFloat(val);
            });
        } else {
            const share = finalData.amount / finalData.participants.length;
            finalData.participants.forEach(p => splits[p] = share);
        }

        const icon = 'fa-utensils';

        if (finalData.paymentType === 'installment') {
            const amountPerMonth = finalData.amount / finalData.installments;
            const monthlySplits = {};
            for (let p in splits) monthlySplits[p] = (splits[p] / finalData.amount) * amountPerMonth;
            const groupId = `grp_line_${Date.now()}`;

            for (let i = 0; i < finalData.installments; i++) {
                const nextDate = new Date(); nextDate.setMonth(today.getMonth() + i);
                batch.set(doc(collection(db, "transactions")), {
                    date: nextDate.toISOString().slice(0, 10),
                    desc: `${finalData.desc} (${i + 1}/${finalData.installments})`,
                    amount: amountPerMonth, payer: finalData.payer, splits: monthlySplits,
                    paymentType: 'installment', installments: finalData.installments,
                    timestamp: Date.now() + i, groupId: groupId, icon: icon
                });
            }
        } else if (finalData.paymentType === 'subscription') {
            // Subscription - สร้างเฉพาะเดือนปัจจุบัน + template (ใช้ Cloud Functions สร้างเดือนถัดไป)
            const groupId = `sub_${Date.now()}`;

            // สร้างรายการเดือนปัจจุบัน
            batch.set(doc(collection(db, "transactions")), {
                date: today.toISOString().slice(0, 10),
                desc: `${finalData.desc} 📅`,
                amount: finalData.amount,
                payer: finalData.payer,
                splits: splits,
                paymentType: 'subscription',
                subscriptionRecurring: true,
                subscriptionStartDate: today.toISOString().slice(0, 10),
                groupId: groupId,
                icon: icon,
                timestamp: Date.now()
            });

            // บันทึก template สำหรับ Cloud Functions
            const billingDay = today.getDate();
            batch.set(doc(collection(db, "subscription_templates")), {
                desc: finalData.desc,
                amount: finalData.amount,
                payer: finalData.payer,
                splits: splits,
                icon: icon,
                billingDay: billingDay,
                groupId: groupId,
                active: true,
                createdAt: today,
                createdBy: finalData.payer,
                lastGeneratedMonth: today.toISOString().slice(0, 7) // "2026-02"
            });
        } else {
            // จ่ายเต็ม (normal)
            batch.set(doc(collection(db, "transactions")), {
                date: today.toISOString().slice(0, 10),
                desc: finalData.desc, amount: finalData.amount, payer: finalData.payer,
                splits: splits, paymentType: 'normal', timestamp: Date.now(), icon: icon
            });
        }

        await batch.commit();
        await deleteDoc(doc(db, 'user_sessions', userId));

        const flex = {
            "type": "bubble",
            "header": {
                "type": "box", "layout": "vertical",
                "backgroundColor": "#334155",
                "contents": [
                    { "type": "text", "text": "SUCCESS REPORT", "color": "#22c55e", "size": "xxs", "weight": "bold" },
                    { "type": "text", "text": "บันทึกสำเร็จ ✅", "color": "#ffffff", "size": "lg", "weight": "bold", "margin": "xs" },
                    { "type": "text", "text": finalData.desc, "color": "#cbd5e1", "size": "xs", "wrap": true }
                ]
            },
            "body": {
                "type": "box", "layout": "vertical", "spacing": "md",
                "contents": [
                    {
                        "type": "box", "layout": "horizontal",
                        "contents": [
                            { "type": "text", "text": "ยอดเงิน", "size": "xs", "color": "#64748b" },
                            { "type": "text", "text": `${finalData.amount.toLocaleString()} ฿`, "size": "sm", "color": finalData.paymentType === 'installment' ? "#f97316" : finalData.paymentType === 'subscription' ? "#9333ea" : "#22c55e", "align": "end", "weight": "bold" }
                        ]
                    },
                    { "type": "separator", "margin": "md" },
                    {
                        "type": "box", "layout": "horizontal", "margin": "md",
                        "contents": [
                            { "type": "text", "text": "คนจ่าย", "size": "xs", "color": "#64748b" },
                            { "type": "text", "text": finalData.payer, "size": "sm", "color": "#1e293b", "align": "end", "weight": "bold" }
                        ]
                    },
                    {
                        "type": "box", "layout": "horizontal", "margin": "md",
                        "contents": [
                            { "type": "text", "text": "คนหาร", "size": "xs", "color": "#64748b", "flex": 1 },
                            { "type": "text", "text": finalData.participants.join(', '), "size": "sm", "color": "#1e293b", "align": "end", "weight": "bold", "wrap": true, "flex": 3 }
                        ]
                    },
                    ...(finalData.paymentType === 'subscription' ? [
                        { "type": "separator", "margin": "md" },
                        { "type": "text", "text": "💳 Subscription (สร้างทุกเดือนอัตโนมัติ)", "size": "xs", "color": "#9333ea", "margin": "md", "align": "center" }
                    ] : [])
                ]
            }
        };

        return replyFlex(replyToken, "บันทึกสำเร็จ", flex);
    } catch (e) {
        return replyText(replyToken, "❌ เกิดข้อผิดพลาด: " + e.message);
    }
}

async function generateMemberReport(replyToken, memberName) {
    try {
        const date = new Date();
        const currentMonth = date.toISOString().slice(0, 7);

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
        // Init balances
        Object.keys(membersData).forEach(m => balances[m] = 0);

        let totalPaid = 0;
        let totalShare = 0;
        let recentItems = [];

        // 2. Calculate Balances & Stats
        snapshot.forEach(doc => {
            const t = doc.data();
            if (!t.date.startsWith(currentMonth)) return;

            // Stats for Report
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

            // Calculation for Settlement
            const payer = t.payer;
            if (balances[payer] !== undefined) balances[payer] += Number(t.amount);

            if (t.splits) {
                Object.entries(t.splits).forEach(([debtor, amount]) => {
                    if (balances[debtor] !== undefined) balances[debtor] -= Number(amount);
                });
            }
        });

        // 3. Match Debts (Settlement Algorithm)
        const debtors = [];
        const creditors = [];
        Object.entries(balances).forEach(([m, bal]) => {
            const b = Math.round(bal * 100) / 100; // Fix floating point
            if (b < -1) debtors.push({ name: m, amount: Math.abs(b) });
            if (b > 1) creditors.push({ name: m, amount: b });
        });

        // Sort to optimize matching (Optional: Largest First)
        debtors.sort((a, b) => b.amount - a.amount);
        creditors.sort((a, b) => b.amount - a.amount);

        const myDebts = []; // List of people I owe

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

        // Items Rows
        const itemRows = recentItems.slice(0, 5).map(item => ({
            type: "box", layout: "horizontal", margin: "sm",
            contents: [
                { type: "text", text: item.desc, size: "xs", color: "#555555", flex: 5, wrap: true },
                { type: "text", text: item.isPayer ? "จ่าย" : "หาร", size: "xs", color: "#aaaaaa", flex: 2, align: "center" },
                { type: "text", text: `${(item.myShare || 0).toLocaleString()}฿`, size: "xs", color: "#111111", flex: 3, align: "end", weight: "bold" }
            ]
        }));

        // QR Code Section
        const debtRows = [];
        if (myDebts.length > 0) {
            debtRows.push({ type: "separator", margin: "lg" });
            debtRows.push({ type: "text", text: "🔻 ที่ต้องโอนจ่าย", size: "sm", weight: "bold", color: "#ef4444", margin: "md" });

            for (const debt of myDebts) {
                const creditor = membersData[debt.to];
                const qrUrl = (creditor && creditor.promptpay)
                    ? `https://promptpay.io/${creditor.promptpay.replace(/[^0-9]/g, '')}/${debt.amount.toFixed(2)}`
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

        const flex = {
            type: "bubble",
            header: {
                type: "box", layout: "vertical", backgroundColor: "#334155",
                contents: [
                    { type: "text", text: "MONTHLY REPORT", color: "#94a3b8", size: "xxs", weight: "bold" },
                    { type: "text", text: `สรุปยอด: ${memberName}`, color: "#ffffff", size: "lg", weight: "bold", margin: "xs" },
                    { type: "text", text: `ประจำเดือน: ${currentMonth}`, color: "#cbd5e1", size: "xs" }
                ]
            },
            body: {
                type: "box", layout: "vertical", backgroundColor: "#ffffff",
                contents: [
                    {
                        type: "box", layout: "horizontal",
                        contents: [
                            { type: "text", text: "สำรองจ่ายไป", size: "xs", color: "#64748b" },
                            { type: "text", text: `${(totalPaid || 0).toLocaleString()} ฿`, size: "sm", color: "#1e293b", align: "end", weight: "bold" }
                        ]
                    },
                    {
                        type: "box", layout: "horizontal", margin: "sm",
                        contents: [
                            { type: "text", text: "ส่วนที่ต้องหาร", size: "xs", color: "#64748b" },
                            { type: "text", text: `${(totalShare || 0).toLocaleString()} ฿`, size: "sm", color: "#ef4444", align: "end", weight: "bold" }
                        ]
                    },
                    { type: "separator", margin: "md" },
                    {
                        type: "box", layout: "horizontal", margin: "md",
                        contents: [
                            { type: "text", text: "ยอดสุทธิ", size: "sm", color: "#334155", weight: "bold" },
                            {
                                type: "text",
                                text: balance >= 0 ? `+${(balance || 0).toLocaleString()} ฿ (รับ)` : `${(balance || 0).toLocaleString()} ฿ (จ่าย)`,
                                size: "lg",
                                color: balance >= 0 ? "#22c55e" : "#ef4444",
                                align: "end",
                                weight: "bold"
                            }
                        ]
                    },
                    // Add QR Code Rows here
                    ...debtRows,

                    { type: "separator", margin: "lg" },
                    { type: "text", text: "รายการล่าสุด", size: "xs", color: "#94a3b8", margin: "md", weight: "bold" },
                    ...itemRows
                ]
            }
        };

        await replyFlex(replyToken, "รายงานค่าใช้จ่าย", flex);

    } catch (e) {
        console.error(e);
        await replyText(replyToken, "❌ เกิดข้อผิดพลาดในการดึงข้อมูลครับ");
    }
}

async function sendToLine(replyToken, payload) {
    const res = await fetch('https://api.line.me/v2/bot/message/reply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${process.env.LINE_CHANNEL_ACCESS_TOKEN}` },
        body: JSON.stringify({ replyToken, messages: [payload] })
    });
    if (!res.ok) {
        const errData = await res.json();
        console.error("LINE API Error:", JSON.stringify(errData));
    }
}
