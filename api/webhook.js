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
    findMatchingSettlementSmart,
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

// --- TIMEZONE HELPERS ---
function getBangkokDateString(date = new Date()) {
    const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Bangkok",
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    });
    const parts = formatter.formatToParts(date);
    const y = parts.find(p => p.type === "year").value;
    const m = parts.find(p => p.type === "month").value;
    const d = parts.find(p => p.type === "day").value;
    return `${y}-${m}-${d}`;
}

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
            try {
                if (event.replyToken) {
                    await replyText(event.replyToken, `⚠️ เกิดข้อผิดพลาด: ${err.message}`);
                }
            } catch (replyErr) {
                console.error("Reply Error:", replyErr);
            }
        }
    }));
    return res.status(200).send('OK');
}

// --- TEXT MESSAGE HANDLER ---
async function handleTextMessage(event) {
    const userId = event.source.userId;
    const text = event.message.text.trim();
    const replyToken = event.replyToken;

    // คำสั่งยกเลิก (Global)
    if (['ยกเลิก', 'cancel', 'เริ่มใหม่', 'reset', 'พอ'].includes(text.toLowerCase())) {
        await deleteDoc(doc(db, 'user_sessions', userId));
        return replyText(replyToken, "❌ ยกเลิกรายการแล้วครับ");
    }

    const sessionRef = doc(db, 'user_sessions', userId);
    
    // 1. คำสั่งเริ่มจดบันทึก (Global)
    if (text === "เริ่มต้นจดบันทึก") {
        await setDoc(sessionRef, {
            step: 'ASK_DESC_START',
            timestamp: serverTimestamp()
        });
        return replyText(replyToken, "📝 เริ่มบันทึกรายการ\nกรุณาพิมพ์ชื่อรายการครับ");
    }

    // 2. คำสั่งดูค่าใช้จ่าย (Global)
    if (text === "ต้องการดูค่าใช้จ่ายของเดือนนี้") {
        await deleteDoc(sessionRef); // Clear active session to avoid trapping
        const memberName = await getMemberNameByLineId(userId);
        if (!memberName) {
            return replyText(replyToken, "❌ ไม่พบข้อมูลสมาชิก กรุณาลงทะเบียนก่อนใช้งาน");
        }
        await generateMemberReport(replyToken, memberName);
        return;
    }

    const sessionSnap = await getDoc(sessionRef);
    let session = sessionSnap.exists() ? sessionSnap.data() : null;

    // --- STEP 0: จุดเริ่มต้น (ไม่มี Session ค้าง) ---
    if (!session) {
        // 3. AI Expense Parsing (Feature F) - ถ้าข้อความยาวพอและมี API KEY
        if (text.length > 5 && process.env.GEMINI_API_KEY && !text.includes('://')) { 
            const members = await getMemberNames();
            const parsedExpense = await parseExpenseWithGemini(text, members);
            
            if (parsedExpense && parsedExpense.error_msg) {
                return replyText(replyToken, `❌ ข้อผิดพลาดจาก AI: ${parsedExpense.error_msg}\n(เช็ค API Key หรือโควต้าของ Gemini)`);
            }
            
            if (parsedExpense && parsedExpense.is_expense) {
                let finalPayer = (parsedExpense.payer || "").toUpperCase();
                
                // ถ้าระบุคนจ่ายเป็นสรรพนามบุรุษที่ 1 หรือไม่ได้ระบุ
                if (["ฉัน", "ผม", "หนู", "เรา", "พี่", "น้อง"].includes(finalPayer) || !finalPayer) {
                    const memberName = await getMemberNameByLineId(userId);
                    if (memberName) {
                        finalPayer = memberName;
                    }
                } else if (!members.includes(finalPayer)) {
                    // ใช้ AI ช่วย map ชื่อที่พิมพ์มา เช่น "เกม" -> "GAME"
                    const mapped = await mapNamesWithGemini(finalPayer, members);
                    if (mapped && mapped.length > 0) {
                        finalPayer = mapped[0];
                    }
                }

                // ข้อมูลเบื้องต้นที่ดึงได้
                let partialData = {
                    desc: parsedExpense.desc || null,
                    amount: parsedExpense.amount ? parseFloat(parsedExpense.amount) : null,
                    participants: parsedExpense.participants || [],
                    payer: members.includes(finalPayer) ? finalPayer : null,
                    paymentType: parsedExpense.payment_type || null,
                    installments: parsedExpense.installments ? parseInt(parsedExpense.installments) : null,
                    splitMethod: parsedExpense.split_method || null
                };

                // ถ้ามีชื่อผู้หาร ให้ map/validate ทันที
                if (partialData.participants && partialData.participants.length > 0) {
                    if (partialData.participants.includes("ทุกคน")) {
                        partialData.participants = members;
                    } else {
                        let validated = partialData.participants
                            .map(p => p.toUpperCase())
                            .filter(p => members.includes(p));
                        if (validated.length === 0) {
                            const mapped = await mapNamesWithGemini(partialData.participants.join(' '), members);
                            if (mapped && mapped.length > 0) validated = mapped;
                        }
                        partialData.participants = validated;
                    }
                }

                // ดำเนินการเช็คข้อมูลและถามทีละสเต็ป (แบบมีปุ่ม Quick Reply และพิมพ์ได้)
                return await checkNextStepAndAsk(replyToken, sessionRef, partialData, members, userId);
            }
        } else if (text.length > 5 && (text.includes('จ่าย') || text.includes('บาท')) && !process.env.GEMINI_API_KEY) {
            // กรณีพิมพ์เหมือนรายจ่าย แต่ยังไม่ได้ตั้งค่า API Key
            return replyText(replyToken, "⚠️ ระบบ AI ยังไม่พร้อมใช้งาน กรุณาตั้งค่า GEMINI_API_KEY ใน Vercel Environment Variables และกด Redeploy");
        }

        // ถ้าพิมพ์อย่างอื่นมา ให้ปล่อยผ่าน (Ignore)
        return;
    }

    // --- มี Session ค้างอยู่ ---
    const currentStep = session.step;
    const data = session.data || {};

    // คำสั่งยกเลิกที่พิมพ์มาเมื่อไหร่ก็ได้
    if (text === 'ยกเลิก' || text === '❌ ยกเลิก' || text === 'cancel') {
        await deleteDoc(sessionRef);
        return replyText(replyToken, "❌ ยกเลิกรายการแล้วครับ");
    }

    // STEP 0.5: รับชื่อรายการ (แบบแมนนวล "เริ่มต้นจดบันทึก")
    if (currentStep === 'ASK_DESC_START') {
        await setDoc(sessionRef, {
            step: 'ASK_AMOUNT',
            data: { desc: text },
            timestamp: serverTimestamp()
        });
        const flex = createInteractiveCard("ระบุราคา", `รายการ: ${text}`, "ระบุราคาเป็นจำนวนเงิน (ใส่เฉพาะตัวเลขไม่ต้องมี บาท) ครับ");
        return replyFlex(replyToken, "ระบุราคา", flex);
    }

    // STEP AI: รับการยืนยันจาก AI
    if (currentStep === 'CONFIRM_AI_EXPENSE') {
        if (text === 'ยืนยัน' || text === '✅ บันทึก' || text === '✅ ตกลง' || text === 'บันทึก') {
            return await saveTransaction(replyToken, userId, data);
        } else {
            await deleteDoc(sessionRef);
            return replyText(replyToken, "❌ ยกเลิกรายการแล้วครับ");
        }
    }

    // STEP AI 1.1: รับชื่อรายการที่ขาด
    if (currentStep === 'AI_ASK_DESC') {
        const members = await getMemberNames();
        data.desc = text.trim();
        return await checkNextStepAndAsk(replyToken, sessionRef, data, members, userId);
    }

    // STEP AI 1.2: รับจำนวนเงินที่ขาด
    if (currentStep === 'AI_ASK_AMOUNT') {
        const members = await getMemberNames();
        const cleaned = text.replace(/,/g, '').replace(/บาท/g, '').trim();
        const amount = parseFloat(cleaned);
        if (isNaN(amount) || amount <= 0) {
            return replyText(replyToken, "❌ กรุณาพิมพ์จำนวนเงินเป็นตัวเลขที่ถูกต้องครับ (เช่น 350 หรือ 1200)");
        }
        data.amount = amount;
        return await checkNextStepAndAsk(replyToken, sessionRef, data, members, userId);
    }

    // STEP AI 2: รับคนจ่าย (จากปุ่มหรือพิมพ์)
    if (currentStep === 'AI_ASK_PAYER') {
        const members = await getMemberNames();
        let finalPayer = text.trim().toUpperCase();
        
        if (["ฉัน", "ผม", "หนู", "เรา", "พี่", "น้อง"].includes(finalPayer)) {
            const memberName = await getMemberNameByLineId(userId);
            if (memberName) finalPayer = memberName;
        } else if (!members.includes(finalPayer)) {
            // ลองใช้ AI ช่วย map ชื่อ
            const mappedNames = await mapNamesWithGemini(text, members);
            if (mappedNames && mappedNames.length > 0) {
                finalPayer = mappedNames[0];
            }
        }
        
        if (!members.includes(finalPayer)) {
            const actions = [
                ...members.map(m => ({ type: "action", action: { type: "message", label: m, text: m } })),
                { type: "action", action: { type: "message", label: "❌ ยกเลิก", text: "ยกเลิก" } }
            ];
            const flex = createInteractiveCard("ไม่พบชื่อในระบบ", `คุณพิมพ์: "${text}"\nกรุณาแตะเลือกชื่อคนจ่ายจากปุ่มด้านล่าง หรือพิมพ์ให้ตรงกับ: ${members.join(', ')}`);
            return replyQuickReply(replyToken, flex, actions);
        }
        
        data.payer = finalPayer;
        return await checkNextStepAndAsk(replyToken, sessionRef, data, members, userId);
    }
    
    // STEP AI 3: รับคนหาร (เลือกจากปุ่มหรือพิมพ์)
    if (currentStep === 'AI_ASK_PARTICIPANTS') {
        const members = await getMemberNames();
        let currentList = data.participants || [];

        if (text === 'ยืนยันรายชื่อ' || text === '✅ ยืนยัน' || text === 'ยืนยัน') {
            if (currentList.length === 0) {
                return replyText(replyToken, "⚠️ กรุณาเลือกคนหารอย่างน้อย 1 คน หรือกดเลือกทุกคนครับ");
            }
            data.participants = currentList;
            return await checkNextStepAndAsk(replyToken, sessionRef, data, members, userId);
        }

        if (text === 'ทุกคน' || text === '👥 ทุกคน') {
            data.participants = members;
            return await checkNextStepAndAsk(replyToken, sessionRef, data, members, userId);
        }

        // เช็คว่ากดปุ่มชื่อสมาชิก หรือพิมพ์ชื่อเข้ามา
        const inputUpper = text.trim().toUpperCase();
        if (members.includes(inputUpper)) {
            // สลับสถานะ (toggle)
            if (currentList.includes(inputUpper)) {
                currentList = currentList.filter(m => m !== inputUpper);
            } else {
                currentList = [...currentList, inputUpper];
            }
            data.participants = currentList;
            await setDoc(sessionRef, { step: 'AI_ASK_PARTICIPANTS', data: data, timestamp: serverTimestamp() });
            
            const actions = [
                { type: "action", action: { type: "message", label: "✅ ยืนยันรายชื่อ", text: "ยืนยันรายชื่อ" } },
                { type: "action", action: { type: "message", label: "👥 ทุกคน", text: "ทุกคน" } },
                ...members.slice(0, 10).map(m => ({
                    type: "action",
                    action: { type: "message", label: (currentList.includes(m) ? `✅ ${m}` : m), text: m }
                })),
                { type: "action", action: { type: "message", label: "❌ ยกเลิก", text: "ยกเลิก" } }
            ];
            const flex = createInteractiveCard(
                "เลือกคนหารเงิน",
                `รายการ: ${data.desc}\nยอด: ${data.amount ? data.amount.toLocaleString() : 0} ฿\n\nเลือกแล้ว (${currentList.length} คน): ${currentList.length > 0 ? currentList.join(', ') : 'ยังไม่ได้เลือก'}`,
                "แตะที่ชื่อเพื่อเลือก/เอาออก เมื่อครบแล้วกด 'ยืนยันรายชื่อ' (หรือพิมพ์ชื่อได้)"
            );
            return replyQuickReply(replyToken, flex, actions);
        }

        // กรณีพิมพ์หลายชื่อมาพร้อมกัน เช่น "เกม แคร์" หรือ "GAME, CARE"
        const mapped = await mapNamesWithGemini(text, members);
        if (mapped && mapped.length > 0) {
            data.participants = mapped;
            return await checkNextStepAndAsk(replyToken, sessionRef, data, members, userId);
        }

        return replyText(replyToken, `🤖 ไม่พบชื่อ "${text}" ในระบบครับ\nกรุณาแตะปุ่มเลือก หรือพิมพ์ชื่อให้ตรงกับ: ${members.join(', ')} (หรือพิมพ์ว่า "ทุกคน")`);
    }

    // STEP AI 4: รับรูปแบบการชำระ (จ่ายเต็ม / ผ่อนชำระ / Subscription)
    if (currentStep === 'AI_ASK_PAYMENT_TYPE') {
        const members = await getMemberNames();
        const lower = text.toLowerCase();
        if (lower.includes("ผ่อน") || lower.includes("installment")) {
            data.paymentType = 'installment';
            return await checkNextStepAndAsk(replyToken, sessionRef, data, members, userId);
        } else if (lower.includes("sub") || lower.includes("รายเดือน") || text.includes("💳")) {
            data.paymentType = 'subscription';
            data.installments = 1;
            return await checkNextStepAndAsk(replyToken, sessionRef, data, members, userId);
        } else if (lower.includes("เต็ม") || lower.includes("normal") || text.includes("จ่ายเต็ม")) {
            data.paymentType = 'normal';
            data.installments = 1;
            return await checkNextStepAndAsk(replyToken, sessionRef, data, members, userId);
        } else {
            const actions = [
                { type: "action", action: { type: "message", label: "🟢 จ่ายเต็มจำนวน", text: "จ่ายเต็ม" } },
                { type: "action", action: { type: "message", label: "🟡 ผ่อนชำระ", text: "ผ่อนชำระ" } },
                { type: "action", action: { type: "message", label: "💳 Subscription", text: "Subscription" } },
                { type: "action", action: { type: "message", label: "❌ ยกเลิก", text: "ยกเลิก" } }
            ];
            const flex = createInteractiveCard("เลือกรูปแบบการชำระ", `รายการ: ${data.desc}\nยอดเงิน: ${(data.amount || 0).toLocaleString()} ฿\n\nโปรดแตะเลือกจากปุ่มด้านล่าง หรือพิมพ์ "จ่ายเต็ม" / "ผ่อนชำระ" / "Subscription"`);
            return replyQuickReply(replyToken, flex, actions);
        }
    }

    // STEP AI 4.5: รับจำนวนงวดผ่อนชำระ
    if (currentStep === 'AI_ASK_INSTALLMENTS') {
        const members = await getMemberNames();
        const cleanNumber = text.replace(/[^0-9]/g, '');
        let installments = parseInt(cleanNumber);
        if (isNaN(installments) || installments < 2 || installments > 60) {
            const actions = [
                { type: "action", action: { type: "message", label: "3 งวด", text: "3" } },
                { type: "action", action: { type: "message", label: "6 งวด", text: "6" } },
                { type: "action", action: { type: "message", label: "10 งวด", text: "10" } },
                { type: "action", action: { type: "message", label: "12 งวด", text: "12" } }
            ];
            const flex = createInteractiveCard("ระบุจำนวนงวดผ่อน", `ยอดรวม: ${(data.amount || 0).toLocaleString()} ฿\nต้องการผ่อนกี่เดือนครับ? (2-60 เดือน)`, "แตะเลือกงวด หรือพิมพ์ตัวเลขได้เลยครับ");
            return replyQuickReply(replyToken, flex, actions);
        }
        data.installments = installments;
        return await checkNextStepAndAsk(replyToken, sessionRef, data, members, userId);
    }

    // STEP AI 5: รับวิธีหาร (หารเท่า / กำหนดเอง)
    if (currentStep === 'AI_ASK_SPLIT_METHOD') {
        const members = await getMemberNames();
        if (text.includes("กำหนด") || text.includes("แยก") || text.includes("เอง") || text.includes("custom")) {
            data.splitMethod = 'custom';
            return await checkNextStepAndAsk(replyToken, sessionRef, data, members, userId);
        } else if (text.includes("เท่า") || text.includes("equal") || text.includes("หารเท่า")) {
            data.splitMethod = 'equal';
            return await checkNextStepAndAsk(replyToken, sessionRef, data, members, userId);
        } else {
            const perPerson = Math.round(((data.amount || 0) / (data.participants?.length || 1)) * 100) / 100;
            const actions = [
                { type: "action", action: { type: "message", label: `⚖️ หารเท่า (~${perPerson}฿)`, text: "หารเท่า" } },
                { type: "action", action: { type: "message", label: "✏️ กำหนดเอง", text: "กำหนดเอง" } },
                { type: "action", action: { type: "message", label: "❌ ยกเลิก", text: "ยกเลิก" } }
            ];
            const flex = createInteractiveCard("วิธีหารเงิน", `ยอดรวม: ${(data.amount || 0).toLocaleString()} ฿ (${data.participants?.length || 0} คน)\n\nแตะเลือกหารเท่ากัน หรือระบุยอดแยกรายคน`);
            return replyQuickReply(replyToken, flex, actions);
        }
    }

    // STEP AI 6: รับยอดระบุเอง (Custom amounts)
    if (currentStep === 'AI_ASK_CUSTOM_AMOUNTS') {
        const members = await getMemberNames();
        // ตรวจสอบ format: ชื่อ=จำนวน
        const parts = text.split(/[\s,]+/);
        let sum = 0;
        let valid = false;
        parts.forEach(p => {
            const [name, val] = p.split('=');
            if (name && val && !isNaN(parseFloat(val))) {
                valid = true;
                sum += parseFloat(val);
            }
        });

        if (!valid) {
            const example = (data.participants || members.slice(0, 2)).map((p, idx) => `${p}=${(idx + 1) * 100}`).join(' ');
            return replyText(replyToken, `⚠️ รูปแบบไม่ถูกต้องครับ\nกรุณาพิมพ์ตามรูปแบบ "ชื่อ=จำนวน"\nตัวอย่าง: ${example}`);
        }

        data.customAmountStr = text.trim();
        return await checkNextStepAndAsk(replyToken, sessionRef, data, members, userId);
    }

    // STEP 2: รับราคา -> ถามคนจ่าย (โหมดเริ่มต้นจดบันทึกแบบเดิม)
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
        // ใช้เดือนปัจจุบัน (YYYY-MM format) (ถูกค้นหาย้อนหลังด้วย Smart search)
        console.log('🔍 Finding settlement for:', userMember.name, 'amount:', slipAmount);

        const matchingSettlement = await findMatchingSettlementSmart(db, userMember.name, slipAmount);

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

// --- AI HELPER ---
let resolvedGeminiModel = null;
let allAvailableModels = [];

async function getAvailableGeminiModel() {
    if (resolvedGeminiModel) return resolvedGeminiModel;
    try {
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) return "gemini-3.6-flash";
        
        const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
        const data = await res.json();
        
        if (data.models && Array.isArray(data.models)) {
            const available = data.models
                .filter(m => m.supportedGenerationMethods && m.supportedGenerationMethods.includes("generateContent"))
                .map(m => m.name.replace(/^models\//, ''));
            
            console.log("Supported Gemini models for key:", available);
            allAvailableModels = available;

            // Prioritize Gemini 3.6 Flash (officially recommended by Google error response)
            const candidates = [
                "gemini-3.6-flash",
                "gemini-3.6-flash-latest",
                "gemini-3.6-pro",
                "gemini-2.0-flash",
                "gemini-1.5-flash",
                "gemini-pro"
            ];
            for (const cand of candidates) {
                if (available.includes(cand)) {
                    resolvedGeminiModel = cand;
                    console.log("Selected Gemini model:", resolvedGeminiModel);
                    return resolvedGeminiModel;
                }
            }
            // Filter out deprecated models like 2.5
            const valid = available.filter(m => !m.includes("2.5"));
            if (valid.length > 0) {
                resolvedGeminiModel = valid[0];
                return resolvedGeminiModel;
            }
        }
    } catch (e) {
        console.error("Failed to query available Gemini models:", e);
    }
    resolvedGeminiModel = "gemini-3.6-flash";
    return resolvedGeminiModel;
}

async function generateWithRetry(model, prompt, maxRetries = 2) {
    for (let attempt = 0; attempt <= maxRetries; attempt++) {
        try {
            const result = await model.generateContent(prompt);
            return result.response.text();
        } catch (err) {
            const is503OrOverload = err.message && (
                err.message.includes("503") || 
                err.message.includes("high demand") || 
                err.message.includes("overloaded") || 
                err.message.includes("Service Unavailable")
            );
            if (is503OrOverload && attempt < maxRetries) {
                console.warn(`Gemini 503 high demand. Retrying in 1.5s (attempt ${attempt + 1}/${maxRetries})...`);
                await new Promise(r => setTimeout(r, 1500));
                continue;
            }
            throw err;
        }
    }
}

async function generateContentWithFallback(genAI, prompt) {
    let modelName = await getAvailableGeminiModel();
    try {
        const model = genAI.getGenerativeModel({ model: modelName });
        return await generateWithRetry(model, prompt, 2);
    } catch (err) {
        console.warn(`Gemini call failed with model '${modelName}':`, err.message);
        
        // Build fallback list dynamically from candidates + available models (excluding deprecated)
        const candidates = ["gemini-3.6-flash", "gemini-3.6-pro", "gemini-2.0-flash", "gemini-1.5-flash"];
        const fallbacks = [...new Set([...candidates, ...allAvailableModels])].filter(m => m !== modelName && !m.includes("2.5"));
        
        for (const fb of fallbacks) {
            try {
                console.log(`Retrying Gemini with fallback model '${fb}'...`);
                const fallbackModel = genAI.getGenerativeModel({ model: fb });
                const text = await generateWithRetry(fallbackModel, prompt, 1);
                resolvedGeminiModel = fb; // update cache to working model
                return text;
            } catch (fbErr) {
                console.warn(`Fallback '${fb}' also failed:`, fbErr.message);
            }
        }
        throw err;
    }
}

async function parseExpenseWithGemini(text, membersList) {
    try {
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        
        const prompt = `
คุณเป็นผู้ช่วยจดบันทึกรายจ่ายสำหรับกลุ่มเพื่อน 
หน้าที่ของคุณคือวิเคราะห์ข้อความ แล้วสกัดข้อมูลรายจ่ายให้อยู่ในรูปแบบ JSON เท่านั้น ห้ามตอบข้อความอื่นๆ 
ถ้าข้อความดูไม่ใช่การจดบันทึกรายจ่าย ให้ตอบ {"is_expense": false}

รายชื่อสมาชิกในระบบที่มีอยู่: ${membersList.join(', ')}
(หากผู้ใช้สะกดชื่อเป็นภาษาไทย เช่น "เกม", "เจ", "วิน" ให้พยายามแปลงและเทียบเคียงเสียงเป็นชื่อภาษาอังกฤษที่มีในระบบให้ถูกต้องที่สุด)

JSON Format ที่ต้องการ:
{
  "is_expense": true,
  "desc": "ชื่อรายการ (สั้นๆ กระชับ)",
  "amount": จำนวนเงิน (ตัวเลขเท่านั้น),
  "payer": "ชื่อคนจ่าย (ต้องเป็นภาษาอังกฤษตามที่มีในระบบ หรือถ้าไม่ได้ระบุให้ตอบ null, ถ้าระบุสรรพนามบุรุษที่ 1 เช่น 'ฉัน', 'เรา' ให้ตอบ 'ฉัน')",
  "participants": ["ชื่อคนหาร1", "ชื่อคนหาร2"] (หากในข้อความไม่ได้ระบุว่าหารกับใคร ห้ามคิดไปเองว่าทุกคน ให้ตอบ null, แต่ถ้าระบุว่าทุกคน ให้ตอบ ["ทุกคน"]),
  "payment_type": "normal" หรือ "installment" หรือ "subscription" (ถ้าไม่ระบุให้ตอบ null, ถ้ามีคำว่า 'ผ่อน' ให้ตอบ 'installment', ถ้ามีคำว่า 'รายเดือน' หรือ 'subscription' ให้ตอบ 'subscription', ถ้ามีคำว่า 'จ่ายเต็ม' ให้ตอบ 'normal'),
  "installments": จำนวนงวด (ตัวเลขเท่านั้น เช่น 3, 6, 10, 12 ถ้าไม่ใช่ผ่อนชำระให้ตอบ null),
  "split_method": "equal" หรือ "custom" (ถ้าไม่ระบุให้ตอบ null, ถ้ามีคำว่า 'หารเท่า' ให้ตอบ 'equal', ถ้ามีการระบุยอดรายคนแยกกัน ให้ตอบ 'custom')
}

ตัวอย่าง 1:
Input: "กินข้าว 450 GAME จ่าย หารทุกคน"
Output: {"is_expense": true, "desc": "กินข้าว", "amount": 450, "payer": "GAME", "participants": ["ทุกคน"], "payment_type": "normal", "installments": null, "split_method": "equal"}

ตัวอย่าง 2:
Input: "ผ่อนตู้เย็น 12000 6 งวด เราจ่าย หารกับ เจ"
Output: {"is_expense": true, "desc": "ตู้เย็น", "amount": 12000, "payer": "ฉัน", "participants": ["JAY"], "payment_type": "installment", "installments": 6, "split_method": "equal"}

ตัวอย่าง 3:
Input: "เน็ตบ้าน 800 subscription หารทุกคน"
Output: {"is_expense": true, "desc": "เน็ตบ้าน", "amount": 800, "payer": null, "participants": ["ทุกคน"], "payment_type": "subscription", "installments": null, "split_method": "equal"}

ข้อความที่ต้องวิเคราะห์: "${text}"`;

        let responseText = await generateContentWithFallback(genAI, prompt);
        
        // Clean JSON string (remove markdown format if any)
        responseText = responseText.replace(/```json/g, '').replace(/```/g, '').trim();
        
        return JSON.parse(responseText);
    } catch (error) {
        console.error("Gemini API Error:", error);
        return { 
            is_expense: true, 
            payer: "ERROR_AI", 
            error_msg: `[GoogleGenerativeAI Error]: ${error.message}` 
        };
    }
}

async function checkNextStepAndAsk(replyToken, sessionRef, data, members, userId) {
    // 1. เช็คชื่อรายการ
    if (!data.desc) {
        await setDoc(sessionRef, {
            step: 'AI_ASK_DESC',
            data: data,
            timestamp: serverTimestamp()
        });
        return replyText(replyToken, `🤖 ขาดชื่อรายการครับ ค่าใช้จ่ายนี้คือค่าอะไรครับ? (พิมพ์ชื่อรายการได้เลย)`);
    }

    // 2. เช็คจำนวนเงิน
    if (!data.amount || data.amount <= 0) {
        await setDoc(sessionRef, {
            step: 'AI_ASK_AMOUNT',
            data: data,
            timestamp: serverTimestamp()
        });
        return replyText(replyToken, `🤖 ขาดจำนวนเงินสำหรับ "${data.desc}" ครับ\nยอดรวมทั้งหมดเท่าไหร่ครับ? (พิมพ์เฉพาะตัวเลข เช่น 350 หรือ 1200)`);
    }

    // 3. เช็คคนจ่าย
    if (!data.payer || !members.includes(data.payer)) {
        await setDoc(sessionRef, {
            step: 'AI_ASK_PAYER',
            data: data,
            timestamp: serverTimestamp()
        });
        const actions = [
            ...members.map(m => ({ type: "action", action: { type: "message", label: m, text: m } })),
            { type: "action", action: { type: "message", label: "❌ ยกเลิก", text: "ยกเลิก" } }
        ];
        const flex = createInteractiveCard(
            "ใครเป็นคนจ่ายเงิน?",
            `รายการ: ${data.desc}\nยอดเงิน: ${data.amount.toLocaleString()} ฿\n\nแตะเลือกชื่อคนออกเงินจากปุ่ม หรือพิมพ์ชื่อได้ครับ`
        );
        return replyQuickReply(replyToken, flex, actions);
    }

    // 4. เช็คคนหาร
    if (!data.participants || !Array.isArray(data.participants) || data.participants.length === 0) {
        await setDoc(sessionRef, {
            step: 'AI_ASK_PARTICIPANTS',
            data: { ...data, participants: [] },
            timestamp: serverTimestamp()
        });
        const actions = [
            { type: "action", action: { type: "message", label: "👥 ทุกคน", text: "ทุกคน" } },
            ...members.slice(0, 10).map(m => ({
                type: "action",
                action: { type: "message", label: m, text: m }
            })),
            { type: "action", action: { type: "message", label: "❌ ยกเลิก", text: "ยกเลิก" } }
        ];
        const flex = createInteractiveCard(
            "หารกับใครบ้าง?",
            `รายการ: ${data.desc}\nยอดเงิน: ${data.amount.toLocaleString()} ฿\nคนจ่าย: ${data.payer}\n\nแตะเลือกชื่อคนหาร หรือแตะ "ทุกคน" หรือพิมพ์ชื่อได้เลยครับ`
        );
        return replyQuickReply(replyToken, flex, actions);
    }

    // 5. เช็ครูปแบบการชำระ (จ่ายเต็ม / ผ่อนชำระ / Subscription)
    if (!data.paymentType) {
        await setDoc(sessionRef, {
            step: 'AI_ASK_PAYMENT_TYPE',
            data: data,
            timestamp: serverTimestamp()
        });
        const actions = [
            { type: "action", action: { type: "message", label: "🟢 จ่ายเต็มจำนวน", text: "จ่ายเต็ม" } },
            { type: "action", action: { type: "message", label: "🟡 ผ่อนชำระ", text: "ผ่อนชำระ" } },
            { type: "action", action: { type: "message", label: "💳 Subscription", text: "Subscription" } },
            { type: "action", action: { type: "message", label: "❌ ยกเลิก", text: "ยกเลิก" } }
        ];
        const flex = createInteractiveCard(
            "เลือกรูปแบบการชำระ",
            `รายการ: ${data.desc}\nยอดเงิน: ${data.amount.toLocaleString()} ฿\nคนจ่าย: ${data.payer}\nคนหาร: ${data.participants.join(', ')}\n\nโปรดเลือกรูปแบบการชำระ`
        );
        return replyQuickReply(replyToken, flex, actions);
    }

    // 5.1 ถ้าเป็นผ่อนชำระ -> เช็คจำนวนงวด
    if (data.paymentType === 'installment' && (!data.installments || data.installments < 2)) {
        await setDoc(sessionRef, {
            step: 'AI_ASK_INSTALLMENTS',
            data: data,
            timestamp: serverTimestamp()
        });
        const actions = [
            { type: "action", action: { type: "message", label: "3 งวด", text: "3" } },
            { type: "action", action: { type: "message", label: "6 งวด", text: "6" } },
            { type: "action", action: { type: "message", label: "10 งวด", text: "10" } },
            { type: "action", action: { type: "message", label: "12 งวด", text: "12" } }
        ];
        const flex = createInteractiveCard(
            "ระบุจำนวนงวดผ่อน",
            `รายการ: ${data.desc}\nยอดรวม: ${data.amount.toLocaleString()} ฿\n\nต้องการผ่อนชำระกี่เดือนครับ? (2-60 เดือน)`
        );
        return replyQuickReply(replyToken, flex, actions);
    }

    // 6. เช็ควรรวมวิธีหาร (ถ้าคนหาร > 1 คน และยังไม่ระบุวิธีหาร)
    if (data.participants.length > 1 && !data.splitMethod) {
        await setDoc(sessionRef, {
            step: 'AI_ASK_SPLIT_METHOD',
            data: data,
            timestamp: serverTimestamp()
        });
        const perPerson = Math.round((data.amount / data.participants.length) * 100) / 100;
        const actions = [
            { type: "action", action: { type: "message", label: `⚖️ หารเท่า (~${perPerson}฿)`, text: "หารเท่า" } },
            { type: "action", action: { type: "message", label: "✏️ กำหนดเอง", text: "กำหนดเอง" } },
            { type: "action", action: { type: "message", label: "❌ ยกเลิก", text: "ยกเลิก" } }
        ];
        const flex = createInteractiveCard(
            "เลือกวิธีหารเงิน",
            `ยอดรวม: ${data.amount.toLocaleString()} ฿ (${data.participants.length} คน)\n\nแตะเลือกหารเท่ากัน หรือระบุยอดแยกรายคน`
        );
        return replyQuickReply(replyToken, flex, actions);
    }

    // 6.1 ถ้าเลือกแบบ custom แต่ยังไม่มี customAmountStr
    if (data.splitMethod === 'custom' && !data.customAmountStr) {
        await setDoc(sessionRef, {
            step: 'AI_ASK_CUSTOM_AMOUNTS',
            data: data,
            timestamp: serverTimestamp()
        });
        const example = data.participants.map((p, idx) => `${p}=${(idx + 1) * 100}`).join(' ');
        const flex = createInteractiveCard(
            "ระบุยอดแยกรายคน",
            `ยอดรวมทั้งหมด: ${data.amount.toLocaleString()} ฿\nคนหาร: ${data.participants.join(', ')}\n\nตัวอย่าง: ${example}`,
            "พิมพ์ตามรูปแบบ 'ชื่อ=จำนวน' ได้เลยครับ"
        );
        return replyFlex(replyToken, "ระบุยอดแยก", flex);
    }

    // Default splitMethod สำหรับคนเดียว
    if (data.participants.length === 1 && !data.splitMethod) {
        data.splitMethod = 'equal';
    }

    // 7. ข้อมูลครบทุกอย่างแล้ว -> แสดงสรุปและปุ่มกดยืนยันบันทึก
    await setDoc(sessionRef, {
        step: 'CONFIRM_AI_EXPENSE',
        data: data,
        timestamp: serverTimestamp()
    });

    const paymentLabel = data.paymentType === 'installment'
        ? `ผ่อนชำระ (${data.installments} งวด / ตกงวดละ ${(data.amount / data.installments).toLocaleString()} ฿)`
        : data.paymentType === 'subscription'
        ? `Subscription 💳 (สร้างซ้ำทุกเดือน)`
        : `จ่ายเต็มจำนวน 🟢`;

    const splitLabel = data.splitMethod === 'custom'
        ? `กำหนดเอง (${data.customAmountStr})`
        : `หารเท่ากัน (~${(data.amount / data.participants.length).toLocaleString()} ฿/คน)`;

    const summary = `📝 รายการ: ${data.desc}\n💰 ยอดรวม: ${data.amount.toLocaleString()} ฿\n👤 คนจ่าย: ${data.payer}\n👥 คนหาร (${data.participants.length} คน): ${data.participants.join(', ')}\n💳 รูปแบบ: ${paymentLabel}\n⚖️ วิธีหาร: ${splitLabel}`;

    const actions = [
        { type: "action", action: { type: "message", label: "✅ ยืนยันบันทึก", text: "ยืนยัน" } },
        { type: "action", action: { type: "message", label: "❌ ยกเลิก", text: "ยกเลิก" } }
    ];

    const flex = createInteractiveCard("🤖 ตรวจสอบและยืนยันบันทึก", summary, "แตะ 'ยืนยันบันทึก' เพื่อลงบัญชีทันที หรือ 'ยกเลิก' เพื่อเริ่มใหม่");
    return replyQuickReply(replyToken, flex, actions);
}

async function mapNamesWithGemini(text, membersList) {
    if (!process.env.GEMINI_API_KEY) return [];
    try {
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        
        const prompt = `
คุณมีหน้าที่แปลงรายชื่อที่ผู้ใช้พิมพ์แบบไม่เป็นทางการ (ภาษาไทย, ชื่อย่อ) ให้ตรงกับรายชื่อทางการในระบบเป๊ะๆ

รายชื่อทางการในระบบ: ${membersList.join(', ')}

ข้อความที่ผู้ใช้พิมพ์มา: "${text}"

จงส่งคืนผลลัพธ์เป็น JSON Array ของชื่อทางการที่แมตช์ได้ (เช่น ["G A M E 👾", "CARE 🦖"]) 
ห้ามตอบข้อความอื่นนอกจาก JSON Array
ถ้าหาไม่เจอเลย หรือไม่แน่ใจ ให้ตอบ []`;

        let responseText = await generateContentWithFallback(genAI, prompt);
        responseText = responseText.replace(/```json/g, '').replace(/```/g, '').trim();
        
        return JSON.parse(responseText);
    } catch (error) {
        console.error("Gemini Name Mapping Error:", error);
        return []; // Fallback
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
            const members = await getMemberNames();
            const rawPairs = finalData.customAmountStr.split(/[\s,]+/);
            for (const p of rawPairs) {
                const [rawName, val] = p.split('=');
                if (rawName && val) {
                    let targetName = rawName.trim().toUpperCase();
                    if (!members.includes(targetName)) {
                        const mapped = await mapNamesWithGemini(rawName.trim(), members);
                        if (mapped && mapped.length > 0) targetName = mapped[0];
                    }
                    splits[targetName] = parseFloat(val);
                }
            }
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
                    date: getBangkokDateString(nextDate),
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
                date: getBangkokDateString(today),
                desc: `${finalData.desc} 📅`,
                amount: finalData.amount,
                payer: finalData.payer,
                splits: splits,
                paymentType: 'subscription',
                subscriptionRecurring: true,
                subscriptionStartDate: getBangkokDateString(today),
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
                lastGeneratedMonth: getBangkokMonthString(today) // "2026-02"
            });
        } else {
            // จ่ายเต็ม (normal)
            batch.set(doc(collection(db, "transactions")), {
                date: getBangkokDateString(today),
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
        const currentMonth = getBangkokMonthString(date);

        // 1. Fetch Transactions for current month only
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
        const upperMember = memberName.toUpperCase();

        // 2. Calculate Balances & Stats for current month
        snapshot.forEach(doc => {
            const t = doc.data();
            const payer = (t.payer || "").toUpperCase();

            let involved = false;
            if (payer === upperMember) {
                totalPaid += Number(t.amount);
                involved = true;
            }
            if (t.splits) {
                Object.entries(t.splits).forEach(([debtor, amt]) => {
                    const debtorKey = (debtor || "").toUpperCase();
                    if (debtorKey === upperMember) {
                        totalShare += Number(amt);
                        involved = true;
                    }
                });
            }
            if (involved) {
                recentItems.push({
                    desc: t.desc, 
                    amount: t.amount, 
                    myShare: (t.splits && (t.splits[memberName] || t.splits[upperMember])) || 0,
                    isPayer: payer === upperMember, 
                    date: t.date
                });
            }

            // Calculation for Settlement (Current month)
            if (balances[payer] !== undefined) balances[payer] += Number(t.amount);

            if (t.splits) {
                Object.entries(t.splits).forEach(([debtor, amount]) => {
                    const debtorKey = (debtor || "").toUpperCase();
                    if (balances[debtorKey] !== undefined) balances[debtorKey] -= Number(amount);
                });
            }
        });

        // หัก verified settlements ของเดือนปัจจุบัน
        const verifiedSnap = await getDocs(
            query(collection(db, 'settlements'),
                where('month', '==', currentMonth))
        );
        verifiedSnap.forEach(vDoc => {
            const s = vDoc.data();
            if (s.status === 'verified') {
                const fromKey = (s.from || "").toUpperCase();
                const toKey = (s.to || "").toUpperCase();
                if (balances[fromKey] !== undefined) balances[fromKey] += Number(s.amount);
                if (balances[toKey] !== undefined) balances[toKey] -= Number(s.amount);
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

        const myDebts = []; // List of people I owe
        const incomingDebts = []; // List of people who owe me

        let i = 0, j = 0;
        while (i < debtors.length && j < creditors.length) {
            const debtor = debtors[i];
            const creditor = creditors[j];
            const pay = Math.min(debtor.amount, creditor.amount);

            if (debtor.name === upperMember) {
                myDebts.push({ to: creditor.name, amount: pay });
            }
            if (creditor.name === upperMember) {
                incomingDebts.push({ from: debtor.name, amount: pay });
            }

            debtor.amount -= pay;
            creditor.amount -= pay;

            if (debtor.amount < 0.01) i++;
            if (creditor.amount < 0.01) j++;
        }

        // 4. Generate Flex Message
        const balance = balances[upperMember] !== undefined ? balances[upperMember] : (totalPaid - totalShare);
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

        // QR Code Section & Debts
        const debtRows = [];

        // แสดงยอดที่คนอื่นต้องโอนให้เรา (กรณีเป็นเจ้าหนี้)
        if (incomingDebts.length > 0) {
            debtRows.push({ type: "separator", margin: "lg" });
            debtRows.push({ type: "text", text: "🟢 ยอดที่คนอื่นต้องโอนให้คุณ", size: "sm", weight: "bold", color: "#16a34a", margin: "md" });

            for (const inc of incomingDebts) {
                debtRows.push({
                    type: "box", layout: "horizontal", margin: "sm",
                    contents: [
                        { type: "text", text: `• ${inc.from}`, size: "xs", color: "#334155", flex: 7 },
                        { type: "text", text: `+${inc.amount.toLocaleString()} ฿`, size: "xs", weight: "bold", color: "#16a34a", align: "end", flex: 3 }
                    ]
                });
            }
        }

        if (myDebts.length > 0) {
            debtRows.push({ type: "separator", margin: "lg" });
            debtRows.push({ type: "text", text: "🔻 ที่คุณต้องโอนจ่าย", size: "sm", weight: "bold", color: "#ef4444", margin: "md" });

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
        await replyText(replyToken, "❌ เกิดข้อผิดพลาดในการดึงข้อมูล: " + e.message);
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
