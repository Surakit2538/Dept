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

// แก้ไขชื่อโมเดลจาก "gemini-1.5-flash" เป็น "gemini-1.5-flash-latest" เพื่อแก้ปัญหา 404
const GEMINI_MODEL_NAME = "gemini-1.5-flash-latest";

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

// --- 3. HANDLE TEXT MESSAGES ---
async function handleTextMessage(event) {
    const userId = event.source.userId;
    const text = event.message.text.trim();
    const replyToken = event.replyToken;

    if (['ยกเลิก', 'cancel', 'เริ่มใหม่', 'reset', 'พอ'].includes(text.toLowerCase())) {
        await deleteDoc(doc(db, 'user_sessions', userId));
        return replyText(replyToken, "❌ ยกเลิกรายการแล้วครับ");
    }

    const sessionRef = doc(db, 'user_sessions', userId);
    const sessionSnap = await getDoc(sessionRef);
    let session = sessionSnap.exists() ? sessionSnap.data() : null;

    // --- STEP 1: เริ่มต้น (ไม่มี Session) ---
    if (!session) {
        const members = await getMemberNames();
        
        // 1. ลองใช้ AI Gemini ก่อน
        let result = await analyzeWithGemini(text, members);

        // 2. (Backup) ถ้า AI พลาด/พัง ให้ใช้ Regex ง่ายๆ แกะเอง
        if (!result || !result.amount) {
            console.log("AI Failed, using fallback regex");
            result = analyzeWithRegex(text, members);
        }

        // --- ตัดสินใจจากผลลัพธ์ ---
        if (result && result.amount > 0) {
            // Case A: ได้ครบ (รายการ + ราคา + คนจ่าย) -> บันทึกเลย
            if (result.desc && result.payer) {
                const finalData = {
                    desc: result.desc, amount: result.amount, payer: result.payer,
                    participants: (result.participants && result.participants.length > 0) ? result.participants : members,
                    paymentType: 'normal', splitMethod: 'equal', installments: 1
                };
                return await saveTransaction(replyToken, userId, finalData, true);
            }
            
            // Case B: ได้แค่ (รายการ + ราคา) -> ข้ามไปถามคนจ่าย
            await setDoc(sessionRef, {
                step: 'ASK_PAYER',
                data: { desc: result.desc, amount: result.amount },
                timestamp: serverTimestamp()
            });
            
            // Limit 13 items for Quick Reply Safety
            const safeMembers = members.slice(0, 13);
            const actions = safeMembers.map(m => ({ type: "action", action: { type: "message", label: m.substring(0, 20), text: m } }));
            const flex = createQuestionFlex("👤 ระบุคนจ่าย", `ระบบอ่านค่า: ${result.desc} (${result.amount.toLocaleString()} ฿)\nใครเป็นคนจ่ายครับ?`, "#1e293b");
            return replyQuickReply(replyToken, flex, actions);
        }

        // Case C: ไม่รู้อะไรเลย -> เข้าโหมดปกติ ถามราคา
        await setDoc(sessionRef, { step: 'ASK_AMOUNT', data: { desc: text }, timestamp: serverTimestamp() });
        const flex = createQuestionFlex("💰 ระบุราคา", `รายการ: ${text}\nราคาเท่าไหร่ครับ?`, "#1e293b");
        return replyFlex(replyToken, "ระบุราคา", flex);
    }

    // --- STATE MACHINE (ขั้นตอนถัดไป) ---
    const currentStep = session.step;
    const data = session.data || {};

    // กรณีพิเศษ: มาจาก Image (มี Amount แล้ว รอ Desc)
    if (currentStep === 'ASK_DESC_AFTER_IMAGE') {
        const desc = text;
        await setDoc(sessionRef, { step: 'ASK_PAYER', data: { ...data, desc } }, { merge: true });
        
        const members = await getMemberNames();
        let sortedMembers = members;
        if (data.suggestedPayer && members.includes(data.suggestedPayer)) {
            sortedMembers = [data.suggestedPayer, ...members.filter(m => m !== data.suggestedPayer)];
        }
        
        const safeMembers = sortedMembers.slice(0, 13);
        const actions = safeMembers.map(m => ({ 
            type: "action", action: { type: "message", label: m.substring(0, 20), text: m } 
        }));
        
        const flex = createQuestionFlex("👤 ระบุคนจ่าย", `รายการ: ${desc}\n💰 ยอดเงิน: ${data.amount.toLocaleString()} ฿\nใครเป็นคนจ่ายครับ?`, "#1e293b");
        return replyQuickReply(replyToken, flex, actions);
    }

    // STEP 2: รับราคา
    if (currentStep === 'ASK_AMOUNT') {
        const amount = parseFloat(text.replace(/,/g, ''));
        if (isNaN(amount) || amount <= 0) return replyText(replyToken, "⚠️ โปรดระบุราคาเป็นตัวเลขครับ");
        await setDoc(sessionRef, { step: 'ASK_PAYER', data: { ...data, amount } }, { merge: true });
        
        const members = await getMemberNames();
        const safeMembers = members.slice(0, 13);
        const actions = safeMembers.map(m => ({ 
            type: "action", action: { type: "message", label: m.substring(0, 20), text: m } 
        }));
        const flex = createQuestionFlex("👤 ระบุคนจ่าย", `ยอดเงิน: ${amount.toLocaleString()} ฿\nใครเป็นคนจ่ายครับ?`, "#1e293b");
        return replyQuickReply(replyToken, flex, actions);
    }

    // STEP 3: รับคนจ่าย
    if (currentStep === 'ASK_PAYER') {
        const payer = text.toUpperCase();
        await setDoc(sessionRef, { step: 'ASK_PAYMENT_TYPE', data: { ...data, payer } }, { merge: true });
        const actions = [
            { type: "action", action: { type: "message", label: "ชำระเต็มจำนวน", text: "จ่ายเต็ม" } },
            { type: "action", action: { type: "message", label: "ผ่อนชำระ", text: "ผ่อนชำระ" } }
        ];
        const flex = createQuestionFlex("💳 รูปแบบการชำระ", `คนจ่าย: ${payer}\nต้องการชำระแบบไหนครับ?`, "#1e293b");
        return replyQuickReply(replyToken, flex, actions);
    }

    // STEP 4: รูปแบบ
    if (currentStep === 'ASK_PAYMENT_TYPE') {
        if (text.includes("ผ่อน")) {
            await setDoc(sessionRef, { step: 'ASK_INSTALLMENTS', data: { ...data, paymentType: 'installment' } }, { merge: true });
            const flex = createQuestionFlex("📅 ระบุจำนวนงวด", "ต้องการผ่อนกี่เดือนครับ? (พิมพ์ตัวเลข 2-24)", "#f97316");
            return replyFlex(replyToken, "พิมพ์จำนวนงวด", flex);
        } else {
            await setDoc(sessionRef, { step: 'ASK_PARTICIPANTS', data: { ...data, paymentType: 'normal', installments: 1, participants: [] } }, { merge: true });
            return await askParticipants(replyToken, []);
        }
    }

    // STEP 4.5: งวด
    if (currentStep === 'ASK_INSTALLMENTS') {
        let installments = parseInt(text);
        if (isNaN(installments) || installments < 2) installments = 2;
        await setDoc(sessionRef, { step: 'ASK_PARTICIPANTS', data: { ...data, installments, participants: [] } }, { merge: true });
        return await askParticipants(replyToken, []);
    }

    // STEP 5: เลือกคนหาร (Toggle)
    if (currentStep === 'ASK_PARTICIPANTS') {
        let currentList = data.participants || [];
        if (text === 'ยืนยัน' || text === '✅ ตกลง') {
            if (currentList.length === 0) return replyText(replyToken, "⚠️ เลือกอย่างน้อย 1 คนครับ");
            await setDoc(sessionRef, { step: 'ASK_SPLIT_METHOD' }, { merge: true });
            const actions = [
                { type: "action", action: { type: "message", label: "หารเท่ากัน", text: "หารเท่า" } },
                { type: "action", action: { type: "message", label: "ระบุจำนวนเอง", text: "ระบุจำนวน" } }
            ];
            const flex = createQuestionFlex("➗ เลือกวิธีหารเงิน", `ผู้ร่วมหาร: ${currentList.join(', ')}\nจะหารเงินด้วยวิธีใดครับ?`, "#1e293b");
            return replyQuickReply(replyToken, flex, actions);
        }
        const members = await getMemberNames();
        const inputName = text.toUpperCase();
        if (text === 'ทุกคน') currentList = [...members];
        else if (members.includes(inputName)) currentList = currentList.includes(inputName) ? currentList.filter(m => m !== inputName) : [...currentList, inputName];
        await setDoc(sessionRef, { data: { ...data, participants: currentList } }, { merge: true });
        return await askParticipants(replyToken, currentList);
    }

    // STEP 6: วิธีหาร
    if (currentStep === 'ASK_SPLIT_METHOD') {
        if (text.includes("ระบุ")) {
            await setDoc(sessionRef, { step: 'ASK_CUSTOM_AMOUNTS', data: { ...data, splitMethod: 'custom' } }, { merge: true });
            const example = data.participants.map(p => `${p}=100`).join(', ');
            const flex = createQuestionFlex("📝 ระบุยอดรายคน", `ตัวอย่าง: ${example}`, "#1e293b");
            return replyFlex(replyToken, "ระบุยอดแยก", flex);
        } else {
            return await saveTransaction(replyToken, userId, { ...data, splitMethod: 'equal' });
        }
    }

    // STEP 7: จบ
    if (currentStep === 'ASK_CUSTOM_AMOUNTS') {
        return await saveTransaction(replyToken, userId, { ...data, customAmountStr: text });
    }
}

// --- 4. HANDLE IMAGE MESSAGES (Gemini Vision) ---
async function handleImageMessage(event) {
    if (!process.env.GEMINI_API_KEY) return replyText(event.replyToken, "⚠️ AI Key Missing");
    const userId = event.source.userId;
    try {
        const buffer = await getLineContent(event.message.id);
        const members = await getMemberNames();
        
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        // FIX: Use latest model
        const model = genAI.getGenerativeModel({ model: GEMINI_MODEL_NAME, generationConfig: { responseMimeType: "application/json" } });
        
        const prompt = `Analyze receipt. Members: [${members.join(', ')}]. Extract JSON: {"amount":number, "payer":string|null}`;
        const result = await model.generateContent([prompt, { inlineData: { data: Buffer.from(buffer).toString("base64"), mimeType: "image/jpeg" } }]);
        const json = JSON.parse(result.response.text());

        if (json.amount > 0) {
            await setDoc(doc(db, 'user_sessions', userId), {
                step: 'ASK_DESC_AFTER_IMAGE', 
                data: { amount: json.amount, suggestedPayer: json.payer },
                timestamp: serverTimestamp()
            });
            const payerText = json.payer ? `\n(เดาว่าจ่ายโดย: ${json.payer})` : "";
            const flex = createQuestionFlex("📸 ระบุชื่อรายการ", `อ่านสลิปเรียบร้อย!\n💰 ยอด: ${json.amount.toLocaleString()} ฿${payerText}\n\nรายการนี้คือค่าอะไรครับ?`, "#0ea5e9");
            return replyFlex(event.replyToken, "อ่านสลิปสำเร็จ", flex);
        } else {
            return replyText(event.replyToken, "⚠️ AI อ่านยอดเงินไม่ออกครับ");
        }
    } catch (e) {
        console.error("Image Error:", e);
        return replyText(event.replyToken, "❌ อ่านรูปไม่ได้ครับ (AI Error)");
    }
}

// --- 5. AI TEXT ANALYSIS ---
async function analyzeWithGemini(text, members) {
    if (!process.env.GEMINI_API_KEY) return null;
    try {
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        // FIX: Use latest model
        const model = genAI.getGenerativeModel({ model: GEMINI_MODEL_NAME, generationConfig: { responseMimeType: "application/json" } });
        const prompt = `Expense tracker. Members:[${members.join(',')}]. Text:"${text}". Extract JSON:{"desc":string,"amount":number,"payer":string|null,"participants":string[]}. "Pizza 200"->{"desc":"Pizza","amount":200,"payer":null}`;
        const result = await model.generateContent(prompt);
        return JSON.parse(result.response.text());
    } catch (e) { return null; }
}

// --- 6. REGEX FALLBACK (BACKUP) ---
function analyzeWithRegex(text, members) {
    const amountMatch = text.match(/(\d+(\.\d+)?)/);
    const amount = amountMatch ? parseFloat(amountMatch[0]) : 0;
    if (amount === 0) return null;
    
    let payer = null;
    const upperText = text.toUpperCase();
    for (const m of members) {
        if (upperText.includes(m)) { payer = m; break; }
    }
    const desc = text.replace(amount.toString(), '').replace(payer || '', '').trim() || "รายการทั่วไป";
    return { desc, amount, payer, participants: [] };
}

// --- 7. HELPERS ---
async function getLineContent(messageId) {
    const url = `https://api-data.line.me/v2/bot/message/${messageId}/content`;
    const response = await fetch(url, { headers: { 'Authorization': `Bearer ${process.env.LINE_CHANNEL_ACCESS_TOKEN}` } });
    if (!response.ok) throw new Error('Failed to download image');
    return await response.arrayBuffer();
}

async function getMemberNames() {
    const snap = await getDocs(collection(db, 'members'));
    return !snap.empty ? snap.docs.map(d => d.data().name) : ["GAME", "CARE"];
}

async function askParticipants(replyToken, selectedList) {
    const members = await getMemberNames();
    const safeMembers = members.slice(0, 11);
    const actions = [
        { type: "action", action: { type: "message", label: "✅ ยืนยันรายชื่อ", text: "ยืนยัน" } },
        { type: "action", action: { type: "message", label: "เลือกทุกคน", text: "ทุกคน" } },
        ...safeMembers.map(m => ({ 
            type: "action", 
            action: { type: "message", label: (selectedList.includes(m) ? `✅ ${m}` : m).substring(0, 20), text: m } 
        }))
    ];
    const flex = {
        "type": "bubble", "size": "mega",
        "body": {
            "type": "box", "layout": "vertical", "backgroundColor": "#1e293b",
            "contents": [
                { "type": "text", "text": "👥 หารกับใครบ้าง?", "weight": "bold", "size": "md", "color": "#ffffff" },
                { "type": "text", "text": selectedList.length > 0 ? `เลือกแล้ว: ${selectedList.join(', ')}` : "ยังไม่ได้เลือกใคร", "size": "xs", "color": "#ffffffcc", "margin": "sm", "wrap": true },
                { "type": "text", "text": "แตะที่ชื่อเพื่อเลือก/ออก แล้วกดปุ่มยืนยัน", "size": "xxs", "color": "#94a3b8", "margin": "xs" }
            ], "paddingAll": "lg"
        }
    };
    return replyQuickReply(replyToken, flex, actions);
}

// ... Save Transaction, Templates, SendToLine ...
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
