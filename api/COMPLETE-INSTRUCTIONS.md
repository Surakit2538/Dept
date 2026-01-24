// ==========================================
// COMPLETE UPDATED webhook.js
// ไฟล์นี้เป็นเวอร์ชันสมบูรณ์ของ webhook.js ที่มีการเพิ่ม Slip Verification
// คัดลอกเนื้อหาทั้งหมดแทนที่ไฟล์ api/webhook.js เดิมได้เลย
// ==========================================

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

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

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
            await replyText(event.replyToken, "❌ เกิดข้อผิดพลาด: " + err.message);
        }
    }));
    return res.status(200).send('OK');
}

// [เก็บ handleTextMessage และ functions อื่นๆ ทั้งหมดจากไฟล์เดิม...]
// ผมจะเพิ่มเฉพาะ handleImageMessage ใหม่

// --- HANDLER: Image Message (Slip Verification) ---
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

        if (!slipData.success) {
            const errorMsg = getSlipErrorMessage(slipData.code);
            return pushMessage(userId, `❌ ${errorMsg}\\n\\nรหัสข้อผิดพลาด: ${slipData.code || 'Unknown'}`);
        }

        const slip = slipData.data;

        // 4. หา Settlement ที่ตรงกับจำนวนเงินในสลิป
        const currentMonth = new Date().toISOString().slice(0, 7);
        const matchingSettlement = await findMatchingSettlement(db, userMember.name, slip.amount, currentMonth);

        if (!matchingSettlement) {
            return pushMessage(userId, 
                `⚠️ ไม่พบรายการ Settlement ที่ตรงกับจำนวนเงิน ${slip.amount.toLocaleString()} บาท\\n\\n` +
                `กรุณาตรวจสอบว่าคุณมีรายการที่ต้องชำระจำนวนนี้หรือไม่`
            );
        }

        // 5. ตรวจสอบชื่อผู้รับ
        const receiver = await getMemberByNameHelper(db, matchingSettlement.to);
        
        if (!receiver || !receiver.realName) {
            return pushMessage(userId,
                `⚠️ ผู้รับ (${matchingSettlement.to}) ยังไม่ได้ตั้งค่าชื่อจริง\\n` +
                `กรุณาแจ้งให้ตั้งค่าในหน้า Settings ก่อน`
            );
        }

        const matchResult = matchReceiverName(slip.receiver, receiver.realName);

        if (!matchResult.matched) {
            return pushMessage(userId,
                `❌ ชื่อผู้รับไม่ตรงกัน\\n\\n` +
                `🎯 คาดหวัง: ${receiver.realName}\\n` +
                `📄 ในสลิป: ${slip.receiver.displayName}\\n\\n` +
                `กรุณาตรวจสอบว่าโอนให้ถูกคนหรือไม่`
            );
        }

        // 6. เช็คสลิปซ้ำ
        const isDuplicate = await checkDuplicateSlip(db, slip.transRef);
        
        if (isDuplicate) {
            return pushMessage(userId, "⚠️ สลิปนี้เคยใช้ยืนยันการโอนเงินแล้ว");
        }

        // 7. บันทึกข้อมูลใน Firestore
        await saveVerifiedSettlement(db, matchingSettlement, slip, userMember.name, matchResult);

        // 8. ส่ง LINE notification ให้ผู้รับ
        if (receiver.lineUserId) {
            await sendSlipVerifiedNotification(
                receiver.lineUserId,
                userMember.name,
                matchingSettlement.to,
                slip.amount,
                slip
            );
        }

        // 9. ส่ง Success Message
        const successFlex = createSlipSuccessMessage(slip, matchingSettlement);
        return pushFlex(userId, "✅ ยืนยันการโอนเงินสำเร็จ", successFlex);

    } catch (error) {
        console.error("Error in handleImageMessage:", error);
        return pushMessage(userId, "❌ เกิดข้อผิดพลาด: " + error.message);
    }
}

// Helper: Get image content from LINE
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

// ==========================================
// NOTE: คัดลอกเนื้อหาที่เหลือทั้งหมดจากไฟล์ webhook.js เดิม
// มาวางต่อจากส่วนนี้ (handleTextMessage, checkSettlement, และ functions อื่นๆ ทั้งหมด)
// ==========================================
