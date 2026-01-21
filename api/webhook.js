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
            await handleMessage(event);
        }
    }));
    return res.status(200).send('OK');
}

// --- 3. LOGIC CORE (State Machine) ---
async function handleMessage(event) {
    const userId = event.source.userId;
    const text = event.message.text.trim();
    const replyToken = event.replyToken;

    if (['ยกเลิก', 'cancel', 'เริ่มใหม่', 'พอ'].includes(text.toLowerCase())) {
        await deleteDoc(doc(db, 'user_sessions', userId));
        return replyText(replyToken, "❌ ยกเลิกรายการแล้วครับ พิมพ์ชื่อรายการเพื่อเริ่มใหม่ได้เลย");
    }

    const sessionRef = doc(db, 'user_sessions', userId);
    const sessionSnap = await getDoc(sessionRef);
    let session = sessionSnap.exists() ? sessionSnap.data() : null;

    // STEP 1: ชื่อรายการ
    if (!session) {
        await setDoc(sessionRef, {
            step: 'ASK_AMOUNT',
            data: { desc: text },
            timestamp: serverTimestamp()
        });
        return replyText(replyToken, `📝 รายการ "${text}"\n💰 ราคาเท่าไหร่ครับ?`);
    }

    const currentStep = session.step;
    const data = session.data || {};

    // STEP 2: ราคา
    if (currentStep === 'ASK_AMOUNT') {
        const amount = parseFloat(text.replace(/,/g, ''));
        if (isNaN(amount) || amount <= 0) return replyText(replyToken, "⚠️ ขอเป็นตัวเลขราคานะครับ");

        await setDoc(sessionRef, { step: 'ASK_PAYER', data: { ...data, amount } }, { merge: true });
        const members = await getMemberNames();
        const actions = members.map(m => ({ type: "action", action: { type: "message", label: m, text: m } }));
        return replyQuickReply(replyToken, `💰 ยอด ${amount.toLocaleString()} บ.\n👤 ใครจ่ายครับ?`, actions);
    }

    // STEP 3: คนจ่าย
    if (currentStep === 'ASK_PAYER') {
        const payer = text.toUpperCase();
        await setDoc(sessionRef, { step: 'ASK_PAYMENT_TYPE', data: { ...data, payer } }, { merge: true });
        const actions = [
            { type: "action", action: { type: "message", label: "ชำระเต็มจำนวน", text: "จ่ายเต็ม" } },
            { type: "action", action: { type: "message", label: "ผ่อนชำระ", text: "ผ่อนชำระ" } }
        ];
        return replyQuickReply(replyToken, `👤 จ่ายโดย ${payer}\n💳 จ่ายแบบไหนครับ?`, actions);
    }

    // STEP 4: รูปแบบชำระ
    if (currentStep === 'ASK_PAYMENT_TYPE') {
        if (text.includes("ผ่อน")) {
            await setDoc(sessionRef, { step: 'ASK_INSTALLMENTS', data: { ...data, paymentType: 'installment' } }, { merge: true });
            return replyText(replyToken, "📅 ผ่อนกี่งวดครับ?");
        } else {
            await setDoc(sessionRef, { step: 'ASK_PARTICIPANTS', data: { ...data, paymentType: 'normal', installments: 1 } }, { merge: true });
            return askParticipants(replyToken);
        }
    }

    // STEP 4.5: จำนวนงวด
    if (currentStep === 'ASK_INSTALLMENTS') {
        let installments = parseInt(text);
        if (isNaN(installments) || installments < 2) installments = 2;
        await setDoc(sessionRef, { step: 'ASK_PARTICIPANTS', data: { ...data, installments } }, { merge: true });
        return askParticipants(replyToken);
    }

    // STEP 5: คนหาร
    if (currentStep === 'ASK_PARTICIPANTS') {
        let participants = [];
        if (text === 'ทุกคน' || text.toLowerCase() === 'all') {
            participants = await getMemberNames();
        } else {
            participants = text.split(/[\s,]+/).map(n => n.trim().toUpperCase()).filter(n => n);
        }
        if (participants.length === 0) return replyText(replyToken, "⚠️ ไม่พบชื่อคนหาร ลองพิมพ์ใหม่ครับ");

        await setDoc(sessionRef, { step: 'ASK_SPLIT_METHOD', data: { ...data, participants } }, { merge: true });
        const actions = [
            { type: "action", action: { type: "message", label: "หารเท่ากัน", text: "หารเท่า" } },
            { type: "action", action: { type: "message", label: "ระบุจำนวนเอง", text: "ระบุจำนวน" } }
        ];
        return replyQuickReply(replyToken, `👥 หารกับ: ${participants.join(', ')}\n➗ คิดเงินยังไงดี?`, actions);
    }

    // STEP 6: วิธีหาร
    if (currentStep === 'ASK_SPLIT_METHOD') {
        if (text.includes("ระบุ")) {
            await setDoc(sessionRef, { step: 'ASK_CUSTOM_AMOUNTS', data: { ...data, splitMethod: 'custom' } }, { merge: true });
            const example = data.participants.map(p => `${p}=100`).join(', ');
            return replyText(replyToken, `📝 พิมพ์ยอดแต่ละคน\nเช่น ${example}`);
        } else {
            return await saveTransaction(replyToken, userId, { ...data, splitMethod: 'equal' });
        }
    }

    // STEP 7: ยอด Custom
    if (currentStep === 'ASK_CUSTOM_AMOUNTS') {
        return await saveTransaction(replyToken, userId, { ...data, customAmountStr: text });
    }
}

// --- 4. HELPER FUNCTIONS ---

async function getMemberNames() {
    const snap = await getDocs(collection(db, 'members'));
    if (snap.empty) return ["GAME", "CARE"];
    return snap.docs.map(d => d.data().name);
}

async function askParticipants(replyToken) {
    const members = await getMemberNames();
    const actions = [
        { type: "action", action: { type: "message", label: "ทุกคน (All)", text: "ทุกคน" } },
        ...members.slice(0, 12).map(m => ({ type: "action", action: { type: "message", label: m, text: m } }))
    ];
    return replyQuickReply(replyToken, "👥 หารกับใครบ้าง?", actions);
}

// บันทึกและส่ง Flex Message
async function saveTransaction(replyToken, userId, finalData) {
    try {
        const batch = writeBatch(db);
        const today = new Date();
        const splits = {};
        
        if (finalData.splitMethod === 'custom') {
            const parts = finalData.customAmountStr.split(/[\s,]+/);
            parts.forEach(p => {
                const [name, val] = p.split('=');
                if(name && val) splits[name.trim().toUpperCase()] = parseFloat(val);
            });
        } else {
            const share = finalData.amount / finalData.participants.length;
            finalData.participants.forEach(p => splits[p] = share);
        }

        if (finalData.paymentType === 'installment') {
            const amountPerMonth = finalData.amount / finalData.installments;
            const monthlySplits = {};
            for (let p in splits) monthlySplits[p] = (splits[p] / finalData.amount) * amountPerMonth;

            for (let i = 0; i < finalData.installments; i++) {
                const nextDate = new Date();
                nextDate.setMonth(today.getMonth() + i);
                const ref = doc(collection(db, "transactions"));
                batch.set(ref, {
                    date: nextDate.toISOString().slice(0, 10),
                    desc: `${finalData.desc} (${i+1}/${finalData.installments})`,
                    amount: amountPerMonth, payer: finalData.payer,
                    splits: monthlySplits, paymentType: 'installment',
                    installments: finalData.installments, timestamp: Date.now() + i
                });
            }
        } else {
            const ref = doc(collection(db, "transactions"));
            batch.set(ref, {
                date: today.toISOString().slice(0, 10),
                desc: finalData.desc, amount: finalData.amount,
                payer: finalData.payer, splits: splits,
                paymentType: 'normal', timestamp: Date.now()
            });
        }

        await batch.commit();
        await deleteDoc(doc(db, 'user_sessions', userId));

        // สร้าง Flex Message ใบเสร็จ
        const flexBody = createReceiptFlex(finalData);
        return replyFlex(replyToken, `บันทึก ${finalData.desc} สำเร็จ`, flexBody);

    } catch (e) {
        console.error(e);
        return replyText(replyToken, `❌ Error: ${e.message}`);
    }
}

// ฟังก์ชันสร้างโครงสร้าง JSON ของ Flex Message
function createReceiptFlex(data) {
    const isInstallment = data.paymentType === 'installment';
    const mainColor = isInstallment ? "#f97316" : "#22c55e"; // ส้ม vs เขียว
    const typeLabel = isInstallment ? `ผ่อนชำระ ${data.installments} งวด` : "ชำระเต็มจำนวน";

    return {
        "type": "bubble",
        "size": "mega",
        "header": {
            "type": "box",
            "layout": "vertical",
            "contents": [
                { "type": "text", "text": "บันทึกรายการสำเร็จ", "color": "#ffffff", "weight": "bold", "size": "sm" }
            ],
            "backgroundColor": mainColor,
            "paddingAll": "md"
        },
        "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
                { "type": "text", "text": data.desc, "weight": "bold", "size": "xl", "margin": "md" },
                { "type": "text", "text": `${data.amount.toLocaleString()} ฿`, "size": "3xl", "color": mainColor, "weight": "bold", "margin": "xs" },
                { "type": "separator", "margin": "lg" },
                {
                    "type": "box", "layout": "vertical", "margin": "lg", "spacing": "sm",
                    "contents": [
                        {
                            "type": "box", "layout": "horizontal",
                            "contents": [
                                { "type": "text", "text": "คนจ่าย", "size": "sm", "color": "#aaaaaa", "flex": 2 },
                                { "type": "text", "text": data.payer, "size": "sm", "color": "#666666", "flex": 4, "align": "end", "weight": "bold" }
                            ]
                        },
                        {
                            "type": "box", "layout": "horizontal",
                            "contents": [
                                { "type": "text", "text": "รูปแบบ", "size": "sm", "color": "#aaaaaa", "flex": 2 },
                                { "type": "text", "text": typeLabel, "size": "sm", "color": "#666666", "flex": 4, "align": "end" }
                            ]
                        },
                        {
                            "type": "box", "layout": "horizontal",
                            "contents": [
                                { "type": "text", "text": "คนหาร", "size": "sm", "color": "#aaaaaa", "flex": 2 },
                                { "type": "text", "text": data.participants.join(', '), "size": "sm", "color": "#666666", "flex": 4, "align": "end", "wrap": true }
                            ]
                        }
                    ]
                },
                { "type": "separator", "margin": "lg" },
                { "type": "text", "text": "ตรวจสอบข้อมูลได้ที่เว็บไซต์ Dept Money", "size": "xxs", "color": "#cccccc", "margin": "md", "align": "center" }
            ]
        },
        "styles": { "footer": { "separator": true } }
    };
}

// --- LINE API Helpers ---
async function replyText(replyToken, message) {
    const token = process.env.LINE_CHANNEL_ACCESS_TOKEN;
    await fetch('https://api.line.me/v2/bot/message/reply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ replyToken, messages: [{ type: 'text', text: message }] })
    });
}

async function replyQuickReply(replyToken, message, items) {
    const token = process.env.LINE_CHANNEL_ACCESS_TOKEN;
    await fetch('https://api.line.me/v2/bot/message/reply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ replyToken, messages: [{ type: 'text', text: message, quickReply: { items: items } }] })
    });
}

async function replyFlex(replyToken, altText, flexContents) {
    const token = process.env.LINE_CHANNEL_ACCESS_TOKEN;
    await fetch('https://api.line.me/v2/bot/message/reply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({
            replyToken,
            messages: [{
                type: 'flex',
                altText: altText,
                contents: flexContents
            }]
        })
    });
}
