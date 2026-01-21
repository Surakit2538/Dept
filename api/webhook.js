import { initializeApp } from "firebase/app";
import { 
    getFirestore, doc, getDoc, setDoc, deleteDoc, 
    collection, getDocs, writeBatch, serverTimestamp 
} from "firebase/firestore";
import { GoogleGenerativeAI } from "@google/generative-ai";

// --- 1. CONFIGURATION ---
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

// --- 2. MAIN HANDLER ---
export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

    const events = req.body.events || [];
    await Promise.all(events.map(async (event) => {
        try {
            if (event.type === 'message') {
                if (event.message.type === 'text') {
                    await handleTextMessage(event);
                } else if (event.message.type === 'image') {
                    await handleImageMessage(event);
                }
            }
        } catch (err) {
            console.error("Handler Error:", err);
        }
    }));
    return res.status(200).send('OK');
}

// --- 3. HANDLE TEXT MESSAGES (State Machine) ---
async function handleTextMessage(event) {
    const userId = event.source.userId;
    const text = event.message.text.trim();
    const replyToken = event.replyToken;

    // คำสั่งยกเลิก
    if (['ยกเลิก', 'cancel', 'เริ่มใหม่', 'reset'].includes(text.toLowerCase())) {
        await deleteDoc(doc(db, 'user_sessions', userId));
        return replyText(replyToken, "❌ ยกเลิกรายการแล้วครับ ส่งสลิปหรือพิมพ์ชื่อรายการใหม่ได้เลย");
    }

    const sessionRef = doc(db, 'user_sessions', userId);
    const sessionSnap = await getDoc(sessionRef);
    let session = sessionSnap.exists() ? sessionSnap.data() : null;

    // --- STEP 1: เริ่มต้น (รับชื่อรายการ) ---
    if (!session) {
        // 1. ลองให้ AI วิเคราะห์ข้อความก่อน
        const members = await getMemberNames();
        const aiResult = await analyzeWithGemini(text, members);

        if (aiResult) {
            // กรณี 1.1: AI ได้ข้อมูลครบจบเลย (รายการ + ราคา + คนจ่าย)
            if (aiResult.desc && aiResult.amount > 0 && aiResult.payer) {
                const finalData = {
                    desc: aiResult.desc,
                    amount: aiResult.amount,
                    payer: aiResult.payer,
                    participants: (aiResult.participants && aiResult.participants.length > 0) ? aiResult.participants : members,
                    paymentType: 'normal',
                    splitMethod: 'equal',
                    installments: 1
                };
                return await saveTransaction(replyToken, userId, finalData, true); // true = skip session delete
            }

            // กรณี 1.2: AI ได้แค่ "รายการ" กับ "ราคา" (ขาดคนจ่าย) -> ลัดไป Step 3
            if (aiResult.desc && aiResult.amount > 0) {
                await setDoc(sessionRef, {
                    step: 'ASK_PAYER',
                    data: { desc: aiResult.desc, amount: aiResult.amount },
                    timestamp: serverTimestamp()
                });
                
                const actions = members.map(m => ({ type: "action", action: { type: "message", label: m, text: m } }));
                const flex = createQuestionFlex("ระบุคนจ่าย", `AI บันทึก: ${aiResult.desc} (${aiResult.amount.toLocaleString()} ฿)\nใครจ่ายครับ?`, "#1e293b");
                return replyQuickReply(replyToken, flex, actions);
            }
        }

        // กรณี 1.3: AI งง หรือเป็นคำสั้นๆ -> เข้าสู่โหมด Manual Step 1
        await setDoc(sessionRef, {
            step: 'ASK_AMOUNT',
            data: { desc: text },
            timestamp: serverTimestamp()
        });
        const flex = createQuestionFlex("ระบุราคา", `รายการ: ${text}\nราคาเท่าไหร่ครับ?`, "#1e293b");
        return replyFlex(replyToken, "ระบุราคา", flex);
    }

    const currentStep = session.step;
    const data = session.data || {};

    // กรณีพิเศษ: มาจาก Image (มี Amount แล้ว รอ Desc) -> รับ Desc แล้วไปถามคนจ่าย
    if (currentStep === 'ASK_DESC_AFTER_IMAGE') {
        const desc = text;
        // ข้าม Step ASK_AMOUNT เพราะได้จากรูปแล้ว ไป ASK_PAYER เลย
        await setDoc(sessionRef, { step: 'ASK_PAYER', data: { ...data, desc } }, { merge: true });
        
        const members = await getMemberNames();
        // ถ้า AI เดาคนจ่ายมาได้ (data.suggestedPayer) ให้เอาไว้ปุ่มแรก
        let sortedMembers = members;
        if (data.suggestedPayer && members.includes(data.suggestedPayer)) {
            sortedMembers = [data.suggestedPayer, ...members.filter(m => m !== data.suggestedPayer)];
        }

        const actions = sortedMembers.map(m => ({ type: "action", action: { type: "message", label: m, text: m } }));
        const flex = createQuestionFlex("ระบุคนจ่าย", `รายการ: ${desc}\n💰 ยอดเงิน: ${data.amount.toLocaleString()} ฿\nใครเป็นคนจ่ายครับ?`, "#1e293b");
        return replyQuickReply(replyToken, flex, actions);
    }

    // --- STEP 2: รับราคา -> ถามคนจ่าย ---
    if (currentStep === 'ASK_AMOUNT') {
        const amount = parseFloat(text.replace(/,/g, ''));
        if (isNaN(amount) || amount <= 0) return replyText(replyToken, "⚠️ โปรดระบุราคาเป็นตัวเลขครับ");

        await setDoc(sessionRef, { step: 'ASK_PAYER', data: { ...data, amount } }, { merge: true });
        
        const members = await getMemberNames();
        const actions = members.map(m => ({ type: "action", action: { type: "message", label: m, text: m } }));
        const flex = createQuestionFlex("ระบุคนจ่าย", `ยอดเงิน: ${amount.toLocaleString()} ฿\nใครเป็นคนจ่ายครับ?`, "#1e293b");
        
        return replyQuickReply(replyToken, flex, actions);
    }

    // --- STEP 3: รับคนจ่าย -> ถามรูปแบบการชำระ ---
    if (currentStep === 'ASK_PAYER') {
        const payer = text.toUpperCase();
        await setDoc(sessionRef, { step: 'ASK_PAYMENT_TYPE', data: { ...data, payer } }, { merge: true });

        const actions = [
            { type: "action", action: { type: "message", label: "ชำระเต็มจำนวน", text: "จ่ายเต็ม" } },
            { type: "action", action: { type: "message", label: "ผ่อนชำระ", text: "ผ่อนชำระ" } }
        ];
        const flex = createQuestionFlex("รูปแบบการชำระ", `คนจ่าย: ${payer}\nต้องการชำระแบบไหนครับ?`, "#1e293b");
        return replyQuickReply(replyToken, flex, actions);
    }

    // --- STEP 4: รับรูปแบบชำระ -> ถามงวด หรือ ข้ามไปถามคนหาร ---
    if (currentStep === 'ASK_PAYMENT_TYPE') {
        if (text.includes("ผ่อน")) {
            await setDoc(sessionRef, { step: 'ASK_INSTALLMENTS', data: { ...data, paymentType: 'installment' } }, { merge: true });
            const flex = createQuestionFlex("ระบุจำนวนงวด", "ต้องการผ่อนกี่เดือนครับ? (พิมพ์ตัวเลข 2-24)", "#f97316");
            return replyFlex(replyToken, "พิมพ์จำนวนงวด", flex);
        } else {
            await setDoc(sessionRef, { 
                step: 'ASK_PARTICIPANTS', 
                data: { ...data, paymentType: 'normal', installments: 1, participants: [] } 
            }, { merge: true });
            return await askParticipants(replyToken, userId, []);
        }
    }

    // --- STEP 4.5: รับจำนวนงวด (เฉพาะกรณีผ่อน) -> ถามคนหาร ---
    if (currentStep === 'ASK_INSTALLMENTS') {
        let installments = parseInt(text);
        if (isNaN(installments) || installments < 2) installments = 2;
        await setDoc(sessionRef, { step: 'ASK_PARTICIPANTS', data: { ...data, installments, participants: [] } }, { merge: true });
        return await askParticipants(replyToken, userId, []);
    }

    // --- STEP 5: เลือกคนหาร (ระบบ Toggle) ---
    if (currentStep === 'ASK_PARTICIPANTS') {
        let currentList = data.participants || [];

        // เมื่อกดปุ่มยืนยัน
        if (text === 'ยืนยัน' || text === '✅ ตกลง') {
            if (currentList.length === 0) return replyText(replyToken, "⚠️ กรุณาเลือกคนหารอย่างน้อย 1 คนครับ");
            
            await setDoc(sessionRef, { step: 'ASK_SPLIT_METHOD' }, { merge: true });
            const actions = [
                { type: "action", action: { type: "message", label: "หารเท่ากัน", text: "หารเท่า" } },
                { type: "action", action: { type: "message", label: "ระบุจำนวนเอง", text: "ระบุจำนวน" } }
            ];
            const flex = createQuestionFlex("เลือกวิธีหารเงิน", `ผู้ร่วมหาร: ${currentList.join(', ')}\nจะหารเงินด้วยวิธีใดครับ?`, "#1e293b");
            return replyQuickReply(replyToken, flex, actions);
        }

        const members = await getMemberNames();
        const inputName = text.toUpperCase();

        if (text === 'ทุกคน') {
            currentList = [...members];
        } else if (members.includes(inputName)) {
            if (currentList.includes(inputName)) {
                currentList = currentList.filter(m => m !== inputName);
            } else {
                currentList.push(inputName);
            }
        }

        await setDoc(sessionRef, { data: { ...data, participants: currentList } }, { merge: true });
        return await askParticipants(replyToken, userId, currentList);
    }

    // --- STEP 6: รับวิธีหาร -> จบงาน หรือ ถามยอดแยกคน ---
    if (currentStep === 'ASK_SPLIT_METHOD') {
        if (text.includes("ระบุ")) {
            await setDoc(sessionRef, { step: 'ASK_CUSTOM_AMOUNTS', data: { ...data, splitMethod: 'custom' } }, { merge: true });
            const example = data.participants.map(p => `${p}=100`).join(', ');
            const flex = createQuestionFlex("ระบุจำนวนเงินรายคน", `กรุณาพิมพ์ชื่อตามด้วยยอดเงิน\nตัวอย่าง: ${example}`, "#1e293b");
            return replyFlex(replyToken, "ระบุยอดเงินแยกคน", flex);
        } else {
            return await saveTransaction(replyToken, userId, { ...data, splitMethod: 'equal' });
        }
    }

    // --- STEP 7: รับยอด Custom -> บันทึกข้อมูลจริง ---
    if (currentStep === 'ASK_CUSTOM_AMOUNTS') {
        return await saveTransaction(replyToken, userId, { ...data, customAmountStr: text });
    }
}

// --- 4. HANDLE IMAGE MESSAGES (Gemini Vision) ---
async function handleImageMessage(event) {
    if (!process.env.GEMINI_API_KEY) return replyText(event.replyToken, "⚠️ ระบบ AI ยังไม่พร้อมใช้งาน (Missing API Key)");

    const messageId = event.message.id;
    const userId = event.source.userId;

    try {
        const imageBuffer = await getLineContent(messageId);
        const members = await getMemberNames();
        
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = `
        Analyze this transfer slip/receipt.
        Target Members: [${members.join(', ')}] (Normalize names to UPPERCASE).
        Extract:
        1. "amount": Total amount (number).
        2. "payer": Who paid? Match with Target Members. If unknown, null.
        Output JSON only: { "amount": number, "payer": "string" or null }
        `;

        const imagePart = {
            inlineData: {
                data: Buffer.from(imageBuffer).toString("base64"),
                mimeType: "image/jpeg"
            }
        };

        const result = await model.generateContent([prompt, imagePart]);
        const text = result.response.text().replace(/```json|```/g, '').trim();
        const json = JSON.parse(text);

        if (json.amount > 0) {
            await setDoc(doc(db, 'user_sessions', userId), {
                step: 'ASK_DESC_AFTER_IMAGE', 
                data: { amount: json.amount, suggestedPayer: json.payer },
                timestamp: serverTimestamp()
            });

            const payerText = json.payer ? `\n(เดาว่าจ่ายโดย: ${json.payer})` : "";
            const flex = createQuestionFlex("ระบุชื่อรายการ", `📸 อ่านสลิปเรียบร้อย!\n💰 ยอดเงิน: ${json.amount.toLocaleString()} ฿${payerText}\n\nรายการนี้คือค่าอะไรครับ?`, "#0ea5e9");
            return replyFlex(event.replyToken, "อ่านสลิปสำเร็จ", flex);
        } else {
            return replyText(event.replyToken, "⚠️ AI อ่านยอดเงินไม่ออกครับ รบกวนพิมพ์รายการเองนะ");
        }

    } catch (e) {
        console.error("Image Error:", e);
        return replyText(event.replyToken, "❌ เกิดข้อผิดพลาดในการอ่านรูปภาพ");
    }
}

// --- 5. AI TEXT ANALYSIS ---
async function analyzeWithGemini(text, members) {
    if (!process.env.GEMINI_API_KEY) return null;
    try {
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const prompt = `
        You are an expense tracker assistant.
        Members: [${members.join(', ')}] (UPPERCASE).
        Text: "${text}"
        Extract JSON: { "desc": string, "amount": number, "payer": string|null, "participants": string[] }
        Rules: "Pizza 200 Game" -> {"desc":"Pizza","amount":200,"payer":"GAME"}. "Pizza" -> null.
        `;
        const result = await model.generateContent(prompt);
        return JSON.parse(result.response.text().replace(/```json|```/g, '').trim());
    } catch (e) { return null; }
}

// --- 6. HELPERS & DB ---

async function getLineContent(messageId) {
    const url = `https://api-data.line.me/v2/bot/message/${messageId}/content`;
    const response = await fetch(url, {
        headers: { 'Authorization': `Bearer ${process.env.LINE_CHANNEL_ACCESS_TOKEN}` }
    });
    if (!response.ok) throw new Error('Failed to download image');
    return await response.arrayBuffer();
}

async function getMemberNames() {
    const snap = await getDocs(collection(db, 'members'));
    return !snap.empty ? snap.docs.map(d => d.data().name) : ["GAME", "CARE"];
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
        "type": "bubble",
        "size": "mega",
        "body": {
            "type": "box", "layout": "vertical",
            "contents": [
                { "type": "text", "text": "👥 หารกับใครบ้าง?", "weight": "bold", "size": "md", "color": "#1e293b" },
                { "type": "text", "text": selectedList.length > 0 ? `เลือกแล้ว: ${selectedList.join(', ')}` : "ยังไม่ได้เลือกใคร", "size": "xs", "color": "#64748b", "margin": "sm", "wrap": true },
                { "type": "text", "text": "แตะที่ชื่อเพื่อเลือก/ออก แล้วกดปุ่มยืนยัน", "size": "xxs", "color": "#aaaaaa", "margin": "xs" }
            ]
        }
    };
    return replyQuickReply(replyToken, flex, actions);
}

async function saveTransaction(replyToken, userId, finalData, skipDeleteSession = false) {
    try {
        const batch = writeBatch(db);
        const today = new Date();
        const splits = {};
        
        if (finalData.splitMethod === 'custom') {
            finalData.customAmountStr.split(/[\s,]+/).forEach(p => {
                const [name, val] = p.split('=');
                if(name && val) splits[name.trim().toUpperCase()] = parseFloat(val);
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
                    desc: `${finalData.desc} (${i+1}/${finalData.installments})`,
                    amount: amountPerMonth, payer: finalData.payer, splits: monthlySplits,
                    paymentType: 'installment', installments: finalData.installments, 
                    timestamp: Date.now() + i, groupId: groupId, icon: icon
                });
            }
        } else {
            batch.set(doc(collection(db, "transactions")), {
                date: today.toISOString().slice(0, 10),
                desc: finalData.desc, amount: finalData.amount,
                payer: finalData.payer, splits: splits,
                paymentType: 'normal', timestamp: Date.now(), icon: icon
            });
        }

        await batch.commit();
        if (!skipDeleteSession) await deleteDoc(doc(db, 'user_sessions', userId));
        return replyFlex(replyToken, "บันทึกสำเร็จ", createReceiptFlex(finalData));

    } catch (e) {
        return replyText(replyToken, `❌ Error: ${e.message}`);
    }
}

// --- TEMPLATES ---
function createQuestionFlex(title, sub, color) {
    return {
        "type": "bubble",
        "size": "mega",
        "body": {
            "type": "box", "layout": "vertical", "backgroundColor": color,
            "contents": [
                { "type": "text", "text": title, "color": "#ffffff", "weight": "bold", "size": "md" },
                { "type": "text", "text": sub, "color": "#ffffffcc", "size": "xs", "margin": "xs", "wrap": true }
            ],
            "paddingAll": "lg"
        }
    };
}

function createReceiptFlex(data) {
    const color = data.paymentType === 'installment' ? "#f97316" : "#22c55e";
    const typeText = data.paymentType === 'installment' ? `ผ่อน ${data.installments} งวด` : "จ่ายเต็ม";
    return {
        "type": "bubble",
        "header": { "type": "box", "layout": "vertical", "backgroundColor": color, "contents": [{ "type": "text", "text": "บันทึกสำเร็จ ✅", "color": "#ffffff", "weight": "bold", "size": "sm" }] },
        "body": {
            "type": "box", "layout": "vertical", "spacing": "md",
            "contents": [
                { "type": "text", "text": data.desc, "weight": "bold", "size": "lg" },
                { "type": "text", "text": `${data.amount.toLocaleString()} ฿`, "size": "xxl", "color": color, "weight": "bold" },
                { "type": "separator" },
                { "type": "box", "layout": "vertical", "spacing": "xs", "contents": [
                    { "type": "box", "layout": "horizontal", "contents": [{ "type": "text", "text": "คนจ่าย", "size": "xs", "color": "#aaaaaa" }, { "type": "text", "text": data.payer, "size": "xs", "align": "end", "weight": "bold" }] },
                    { "type": "box", "layout": "horizontal", "contents": [{ "type": "text", "text": "รูปแบบ", "size": "xs", "color": "#aaaaaa" }, { "type": "text", "text": typeText, "size": "xs", "align": "end" }] },
                    { "type": "box", "layout": "horizontal", "contents": [{ "type": "text", "text": "คนหาร", "size": "xs", "color": "#aaaaaa" }, { "type": "text", "text": data.participants.join(', '), "size": "xs", "align": "end", "wrap": true }] }
                ]}
            ]
        }
    };
}

// --- LINE API ---
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
async function replyText(replyToken, text) { await sendToLine(replyToken, { type: 'text', text }); }
async function replyFlex(replyToken, altText, contents) { await sendToLine(replyToken, { type: 'flex', altText, contents }); }
async function replyQuickReply(replyToken, flex, actions) { await sendToLine(replyToken, { type: 'flex', altText: "เลือกรายการ", contents: flex, quickReply: { items: actions } }); }
