import { initializeApp } from "firebase/app";
import { 
    getFirestore, doc, getDoc, setDoc, deleteDoc, 
    collection, getDocs, writeBatch, serverTimestamp 
} from "firebase/firestore";

// --- 1. การตั้งค่า FIREBASE (ใช้ข้อมูลเดิมของโปรเจกต์) ---
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

// --- 2. ฟังก์ชันหลักสำหรับรับ Event จาก LINE ---
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

// --- 3. ตรรกะจัดการข้อความ (State Machine) ---
async function handleMessage(event) {
    const userId = event.source.userId;
    const text = event.message.text.trim();
    const replyToken = event.replyToken;

    // คำสั่งพิเศษเพื่อยกเลิกรายการ
    if (['ยกเลิก', 'cancel', 'เริ่มใหม่', 'reset'].includes(text.toLowerCase())) {
        await deleteDoc(doc(db, 'user_sessions', userId));
        return replyText(replyToken, "❌ ยกเลิกรายการเรียบร้อยแล้ว พิมพ์ชื่อรายการใหม่ได้ทันทีครับ");
    }

    const sessionRef = doc(db, 'user_sessions', userId);
    const sessionSnap = await getDoc(sessionRef);
    let session = sessionSnap.exists() ? sessionSnap.data() : null;

    // --- STEP 1: เริ่มต้นรายการ (รับชื่อรายการ) ---
    if (!session) {
        await setDoc(sessionRef, {
            step: 'ASK_AMOUNT',
            data: { desc: text },
            timestamp: serverTimestamp()
        });
        const flex = createQuestionFlex("ระบุราคา", `รายการ: ${text}\nราคาเท่าไหร่ครับ?`, "#1e293b");
        return replyFlex(replyToken, "ระบุราคาของรายการ", flex);
    }

    const currentStep = session.step;
    const data = session.data || {};

    // --- STEP 2: รับราคา -> ถามคนจ่าย ---
    if (currentStep === 'ASK_AMOUNT') {
        const amount = parseFloat(text.replace(/,/g, ''));
        if (isNaN(amount) || amount <= 0) return replyText(replyToken, "⚠️ โปรดระบุราคาเป็นตัวเลข (เช่น 250)");

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
            const flex = createQuestionFlex("เลือกวิธีหารเงิน", `ผู้เข้าร่วม: ${currentList.join(', ')}\nจะหารเงินด้วยวิธีใดครับ?`, "#1e293b");
            return replyQuickReply(replyToken, flex, actions);
        }

        const members = await getMemberNames();
        const inputName = text.toUpperCase();

        if (text === 'ทุกคน') {
            currentList = [...members];
        } else if (members.includes(inputName)) {
            if (currentList.includes(inputName)) {
                currentList = currentList.filter(m => m !== inputName); // ลบออกถ้ามีอยู่แล้ว
            } else {
                currentList.push(inputName); // เพิ่มเข้าถ้ายังไม่มี
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

// --- 4. ฟังก์ชันช่วยเหลือ (Helpers) ---

async function getMemberNames() {
    const snap = await getDocs(collection(db, 'members'));
    if (snap.empty) return ["GAME", "CARE"];
    return snap.docs.map(d => d.data().name);
}

// ฟังก์ชันสร้าง UI สำหรับเลือกคนหาร (Toggle)
async function askParticipants(replyToken, userId, selectedList) {
    const members = await getMemberNames();
    const actions = [
        ...members.map(m => {
            const isSelected = selectedList.includes(m);
            return { 
                type: "action", 
                action: { type: "message", label: (isSelected ? `✅ ${m}` : m), text: m } 
            };
        }),
        { type: "action", action: { type: "message", label: "เลือกทุกคน", text: "ทุกคน" } },
        { type: "action", action: { type: "message", label: "✅ ยืนยันรายชื่อ", text: "ยืนยัน" } }
    ];

    const flex = {
        "type": "bubble",
        "body": {
            "type": "box", "layout": "vertical",
            "contents": [
                { "type": "text", "text": "หารกับใครบ้าง?", "weight": "bold", "size": "md", "color": "#1e293b" },
                { "type": "text", "text": selectedList.length > 0 ? `เลือกแล้ว: ${selectedList.join(', ')}` : "ยังไม่ได้เลือกใคร", "size": "xs", "color": "#64748b", "margin": "sm", "wrap": true },
                { "type": "text", "text": "แตะที่ชื่อเพื่อเลือก/ลบออก เมื่อครบแล้วกดปุ่มยืนยัน", "size": "xxs", "color": "#94a3b8", "margin": "xs" }
            ]
        }
    };

    return replyQuickReply(replyToken, flex, actions);
}

// ฟังก์ชันบันทึกลง Firebase และส่งใบเสร็จ
async function saveTransaction(replyToken, userId, finalData) {
    try {
        const batch = writeBatch(db);
        const today = new Date();
        const splits = {};
        
        // จัดการส่วนแบ่งเงิน
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

        const isInstallment = finalData.paymentType === 'installment';
        if (isInstallment) {
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

        const receipt = createReceiptFlex(finalData);
        return replyFlex(replyToken, `บันทึกสำเร็จ: ${finalData.desc}`, receipt);

    } catch (e) {
        return replyText(replyToken, `❌ เกิดข้อผิดพลาดขณะบันทึก: ${e.message}`);
    }
}

// --- TEMPLATES ---

function createQuestionFlex(title, sub, color) {
    return {
        "type": "bubble",
        "size": "slim",
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
    const isInstallment = data.paymentType === 'installment';
    const mainColor = isInstallment ? "#f97316" : "#22c55e";
    return {
        "type": "bubble",
        "header": {
            "type": "box", "layout": "vertical", "backgroundColor": mainColor,
            "contents": [{ "type": "text", "text": "บันทึกข้อมูลสำเร็จ ✅", "color": "#ffffff", "weight": "bold", "size": "sm" }]
        },
        "body": {
            "type": "box", "layout": "vertical", "spacing": "md",
            "contents": [
                { "type": "text", "text": data.desc, "weight": "bold", "size": "lg" },
                { "type": "text", "text": `${data.amount.toLocaleString()} ฿`, "size": "xxl", "color": mainColor, "weight": "bold" },
                { "type": "separator" },
                {
                    "type": "box", "layout": "vertical", "spacing": "xs",
                    "contents": [
                        { "type": "box", "layout": "horizontal", "contents": [{ "type": "text", "text": "ผู้จ่ายเงิน", "size": "xs", "color": "#aaaaaa" }, { "type": "text", "text": data.payer, "size": "xs", "align": "end", "weight": "bold" }] },
                        { "type": "box", "layout": "horizontal", "contents": [{ "type": "text", "text": "ผู้หารเงิน", "size": "xs", "color": "#aaaaaa" }, { "type": "text", "text": data.participants.join(', '), "size": "xs", "align": "end", "wrap": true }] }
                    ]
                }
            ]
        }
    };
}

// --- LINE SENDING HELPERS ---
async function replyText(replyToken, message) {
    const token = process.env.LINE_CHANNEL_ACCESS_TOKEN;
    await fetch('https://api.line.me/v2/bot/message/reply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ replyToken, messages: [{ type: 'text', text: message }] })
    });
}

async function replyFlex(replyToken, altText, flex) {
    const token = process.env.LINE_CHANNEL_ACCESS_TOKEN;
    await fetch('https://api.line.me/v2/bot/message/reply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ replyToken, messages: [{ type: 'flex', altText, contents: flex }] })
    });
}

async function replyQuickReply(replyToken, flex, actions) {
    const token = process.env.LINE_CHANNEL_ACCESS_TOKEN;
    await fetch('https://api.line.me/v2/bot/message/reply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({
            replyToken,
            messages: [{
                type: 'flex', altText: "โปรดเลือกรายการเพื่อดำเนินการต่อ", contents: flex, quickReply: { items: actions }
            }]
        })
    });
}
