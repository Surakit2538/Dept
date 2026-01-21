import { initializeApp } from "firebase/app";
import { 
    getFirestore, doc, getDoc, setDoc, deleteDoc, 
    collection, getDocs, writeBatch, serverTimestamp 
} from "firebase/firestore";

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
        if (event.type === 'message' && event.message.type === 'text') {
            try {
                await handleMessage(event);
            } catch (err) {
                console.error("Handler Error:", err);
            }
        }
    }));
    return res.status(200).send('OK');
}

// --- 3. LOGIC CORE (State Machine) ---
async function handleMessage(event) {
    const userId = event.source.userId;
    const text = event.message.text.trim();
    const replyToken = event.replyToken;

    if (['ยกเลิก', 'cancel', 'เริ่มใหม่', 'reset'].includes(text.toLowerCase())) {
        await deleteDoc(doc(db, 'user_sessions', userId));
        return replyText(replyToken, "❌ ยกเลิกรายการแล้วครับ เริ่มพิมพ์ชื่อรายการใหม่ได้เลย");
    }

    const sessionRef = doc(db, 'user_sessions', userId);
    const sessionSnap = await getDoc(sessionRef);
    let session = sessionSnap.exists() ? sessionSnap.data() : null;

    // STEP 1: เริ่มต้น (รับชื่อรายการ)
    if (!session) {
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

    // STEP 2: รับราคา -> ถามคนจ่าย
    if (currentStep === 'ASK_AMOUNT') {
        const amount = parseFloat(text.replace(/,/g, ''));
        if (isNaN(amount) || amount <= 0) return replyText(replyToken, "⚠️ โปรดระบุราคาเป็นตัวเลขครับ");

        await setDoc(sessionRef, { step: 'ASK_PAYER', data: { ...data, amount } }, { merge: true });
        const members = await getMemberNames();
        const actions = members.map(m => ({ type: "action", action: { type: "message", label: m, text: m } }));
        const flex = createQuestionFlex("ระบุคนจ่าย", `ยอดเงิน: ${amount.toLocaleString()} ฿\nใครเป็นคนจ่ายครับ?`, "#1e293b");
        return replyQuickReply(replyToken, flex, actions);
    }

    // STEP 3: รับคนจ่าย -> ถามรูปแบบการชำระ
    if (currentStep === 'ASK_PAYER') {
        const payer = text.toUpperCase();
        await setDoc(sessionRef, { step: 'ASK_PAYMENT_TYPE', data: { ...data, payer } }, { merge: true });
        const actions = [
            { type: "action", action: { type: "message", label: "จ่ายเต็มจำนวน", text: "จ่ายเต็ม" } },
            { type: "action", action: { type: "message", label: "ผ่อนชำระ", text: "ผ่อนชำระ" } }
        ];
        const flex = createQuestionFlex("รูปแบบการชำระ", `คนจ่าย: ${payer}\nเลือกรูปแบบการชำระครับ`, "#1e293b");
        return replyQuickReply(replyToken, flex, actions);
    }

    // STEP 4: รูปแบบชำระ -> ถามงวด หรือ ข้ามไปถามคนหาร
    if (currentStep === 'ASK_PAYMENT_TYPE') {
        if (text.includes("ผ่อน")) {
            await setDoc(sessionRef, { step: 'ASK_INSTALLMENTS', data: { ...data, paymentType: 'installment' } }, { merge: true });
            const flex = createQuestionFlex("ระบุจำนวนงวด", "ต้องการผ่อนกี่เดือน? (2-24)", "#f97316");
            return replyFlex(replyToken, "ระบุจำนวนงวด", flex);
        } else {
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

    // STEP 5: เลือกคนหาร (ระบบ Toggle)
    if (currentStep === 'ASK_PARTICIPANTS') {
        let currentList = data.participants || [];
        if (text === 'ยืนยัน' || text === '✅ ตกลง') {
            if (currentList.length === 0) return replyText(replyToken, "⚠️ กรุณาเลือกอย่างน้อย 1 คนครับ");
            await setDoc(sessionRef, { step: 'ASK_SPLIT_METHOD' }, { merge: true });
            const actions = [
                { type: "action", action: { type: "message", label: "หารเท่ากัน", text: "หารเท่า" } },
                { type: "action", action: { type: "message", label: "ระบุจำนวนเอง", text: "ระบุจำนวน" } }
            ];
            const flex = createQuestionFlex("วิธีหารเงิน", `ผู้ร่วมหาร: ${currentList.join(', ')}`, "#1e293b");
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
            const flex = createQuestionFlex("ระบุยอดรายคน", `ตัวอย่าง: ${example}`, "#1e293b");
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

// --- 4. HELPERS ---

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
            "backgroundColor": "#ffffff", // Changed to white
            "contents": [
                {
                    "type": "box", "layout": "horizontal", "contents": [
                        { "type": "text", "text": "👥", "size": "xxl", "flex": 0 },
                        { "type": "text", "text": "หารกับใครบ้าง?", "weight": "bold", "size": "md", "color": "#1e293b", "margin": "md", "align": "start", "gravity": "center" }
                    ],
                    "alignItems": "center"
                },
                { "type": "text", "text": selectedList.length > 0 ? `เลือกแล้ว: ${selectedList.join(', ')}` : "ยังไม่ได้เลือกใคร", "size": "xs", "color": "#64748b", "margin": "md", "wrap": true },
                { "type": "text", "text": "แตะที่ชื่อเพื่อเลือก/ออก แล้วกดปุ่มยืนยัน", "size": "xxs", "color": "#94a3b8", "margin": "xs" }
            ],
            "paddingAll": "lg",
            "borderColor": "#e2e8f0",
            "borderWidth": "normal",
            "cornerRadius": "md"
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
                if(name && val) splits[name.trim().toUpperCase()] = parseFloat(val);
            });
        } else {
            const share = finalData.amount / finalData.participants.length;
            finalData.participants.forEach(p => splits[p] = share);
        }

        const icon = 'fa-utensils'; // Default Icon for LINE Entries

        if (finalData.paymentType === 'installment') {
            const amountPerMonth = finalData.amount / finalData.installments;
            const monthlySplits = {};
            for (let p in splits) monthlySplits[p] = (splits[p] / finalData.amount) * amountPerMonth;

            // NEW: Generate Group ID for Installments
            const groupId = `grp_line_${Date.now()}`;

            for (let i = 0; i < finalData.installments; i++) {
                const nextDate = new Date(); nextDate.setMonth(today.getMonth() + i);
                batch.set(doc(collection(db, "transactions")), {
                    date: nextDate.toISOString().slice(0, 10),
                    desc: `${finalData.desc} (${i+1}/${finalData.installments})`,
                    amount: amountPerMonth, 
                    payer: finalData.payer, 
                    splits: monthlySplits,
                    paymentType: 'installment', 
                    installments: finalData.installments, 
                    timestamp: Date.now() + i,
                    groupId: groupId, // <-- Added Group ID
                    icon: icon
                });
            }
        } else {
            batch.set(doc(collection(db, "transactions")), {
                date: today.toISOString().slice(0, 10),
                desc: finalData.desc, 
                amount: finalData.amount,
                payer: finalData.payer, 
                splits: splits, 
                paymentType: 'normal', 
                timestamp: Date.now(),
                icon: icon
            });
        }

        await batch.commit();
        await deleteDoc(doc(db, 'user_sessions', userId));
        return replyFlex(replyToken, "บันทึกสำเร็จ", createReceiptFlex(finalData));
    } catch (e) {
        return replyText(replyToken, "❌ เกิดข้อผิดพลาด: " + e.message);
    }
}

// --- UPDATED UI FUNCTION: White Box with Icon ---
function createQuestionFlex(title, sub, color) {
    // Select Icon based on Title
    let icon = "📝"; // Default
    if (title.includes("ราคา")) icon = "💰";
    else if (title.includes("คนจ่าย")) icon = "👤";
    else if (title.includes("รูปแบบ")) icon = "💳";
    else if (title.includes("งวด")) icon = "📅";
    else if (title.includes("วิธีหาร")) icon = "➗";
    else if (title.includes("ยอดรายคน")) icon = "✍️";

    return {
        "type": "bubble",
        "size": "mega",
        "body": {
            "type": "box",
            "layout": "vertical",
            "backgroundColor": "#ffffff", // White background
            "contents": [
                {
                    "type": "box",
                    "layout": "horizontal",
                    "contents": [
                        {
                            "type": "text",
                            "text": icon,
                            "size": "xxl",
                            "flex": 0
                        },
                        {
                            "type": "box",
                            "layout": "vertical",
                            "contents": [
                                { "type": "text", "text": title, "color": color, "weight": "bold", "size": "md" },
                                { "type": "text", "text": sub, "color": "#64748b", "size": "xs", "margin": "xs", "wrap": true }
                            ],
                            "margin": "md"
                        }
                    ],
                    "alignItems": "center"
                }
            ],
            "paddingAll": "lg",
            "cornerRadius": "md",
            "borderColor": "#e2e8f0", // Light border
            "borderWidth": "normal"
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
