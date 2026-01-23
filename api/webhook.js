import { initializeApp } from "firebase/app";
import {
    getFirestore, doc, getDoc, setDoc, deleteDoc,
    collection, getDocs, writeBatch, serverTimestamp, query, where
} from "firebase/firestore";
import { GoogleGenerativeAI } from "@google/generative-ai";

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

// --- HANDLER: Text Message ---
async function handleTextMessage(event) {
    const text = event.message.text.trim();
    const userId = event.source.userId;
    const replyToken = event.replyToken;

    // --- COMMAND 1: ดูค่าใช้จ่าย ---
    if (text.includes("ต้องการดูค่าใช้จ่ายของเดือนนี้") || text.includes("ดูยอด")) {
        return await checkSettlement(userId, replyToken);
    }

    // --- COMMAND 2: เริ่มต้นจดบันทึก ---
    if (text === "เริ่มต้นจดบันทึก" || text === "จด") {
        await deleteDoc(doc(db, 'user_sessions', userId));
        await setDoc(doc(db, 'user_sessions', userId), {
            step: 'ASK_DESC',
            data: {},
            lastUpdated: serverTimestamp()
        });

        // UPDATE: ใช้ Flex Message + Icon
        const flex = createBubbleWithIcon("จดรายการใหม่ 📝", "พิมพ์ชื่อรายการมาได้เลยครับ", "https://img.icons8.com/color/96/create-new.png");
        return replyFlex(replyToken, "เริ่มจดบันทึก", flex);
    }

    // --- COMMAND 3: ยกเลิก ---
    if (['ยกเลิก', 'cancel', 'พอ'].includes(text.toLowerCase())) {
        await deleteDoc(doc(db, 'user_sessions', userId));
        return replyText(replyToken, "รับทราบ ยกเลิกรายการให้แล้วครับ");
    }

    // --- SESSION HANDLING ---
    const sessionRef = doc(db, 'user_sessions', userId);
    const sessionSnap = await getDoc(sessionRef);

    if (!sessionSnap.exists()) {
        if (text.includes("หวัดดี") || text.includes("hi")) return replyText(replyToken, "สวัสดีครับ พิมพ์ 'เริ่มต้นจดบันทึก' เพื่อเริ่มใช้งานได้เลย");
        return;
    }

    const session = sessionSnap.data();
    const step = session.step;
    const data = session.data || {};

    // FLOW: DESC -> AMOUNT -> PAYMENT_TYPE -> [INSTALLMENTS] -> PAYER -> SPLIT
    if (step === 'ASK_DESC') {
        const desc = text;
        await setDoc(sessionRef, { step: 'ASK_AMOUNT', data: { ...data, desc } }, { merge: true });

        const flex = createBubbleWithIcon("ราคาเท่าไหร่?", `รายการ: ${desc}`, "https://img.icons8.com/color/96/money-bag-baht.png");
        return replyFlex(replyToken, "ระบุราคา", flex);
    }

    if (step === 'ASK_AMOUNT') {
        const amount = parseFloat(text.replace(/,/g, ''));
        if (isNaN(amount) || amount <= 0) return replyText(replyToken, "⚠️ ขอเป็นตัวเลขนะครับ\nราคาเท่าไหร่ครับ?");

        await setDoc(sessionRef, { step: 'ASK_PAYMENT_TYPE', data: { ...data, amount } }, { merge: true });

        const actions = [
            { type: "action", action: { type: "message", label: "ชำระเต็มจำนวน", text: "ชำระเต็ม" } },
            { type: "action", action: { type: "message", label: "ผ่อนชำระ", text: "ผ่อนชำระ" } }
        ];
        const flex = createBubbleWithIcon("รูปแบบการจ่าย?", `ยอดเงิน ${amount.toLocaleString()} บาท`, "https://img.icons8.com/color/96/card-exchange.png");
        return replyQuickReply(replyToken, flex, actions);
    }

    if (step === 'ASK_PAYMENT_TYPE') {
        if (text.includes("ผ่อน")) {
            await setDoc(sessionRef, { step: 'ASK_INSTALLMENTS', data: { ...data, paymentType: 'installment' } }, { merge: true });
            const flex = createBubbleWithIcon("ผ่อนกี่เดือน?", "ระบุจำนวนงวด (2-24)", "https://img.icons8.com/color/96/calendar--v1.png");
            return replyFlex(replyToken, "ระบุจำนวนงวด", flex);
        } else {
            await setDoc(sessionRef, { step: 'ASK_PAYER', data: { ...data, paymentType: 'normal', installments: 1 } }, { merge: true });
            const members = await getMemberNames();
            const actions = members.map(m => ({ type: "action", action: { type: "message", label: m.substring(0, 20), text: m } }));
            const flex = createBubbleWithIcon("ใครเป็นคนจ่าย?", `ยอดเงิน ${data.amount.toLocaleString()} บาท (จ่ายเต็ม)`, "https://img.icons8.com/color/96/user-male-circle--v1.png");
            return replyQuickReply(replyToken, flex, actions);
        }
    }

    if (step === 'ASK_INSTALLMENTS') {
        let installments = parseInt(text);
        if (isNaN(installments) || installments < 2) installments = 2;
        await setDoc(sessionRef, { step: 'ASK_PAYER', data: { ...data, installments } }, { merge: true });

        const members = await getMemberNames();
        const actions = members.map(m => ({ type: "action", action: { type: "message", label: m.substring(0, 20), text: m } }));
        const flex = createBubbleWithIcon("ใครเป็นคนจ่าย?", `ผ่อน ${installments} เดือน (${(data.amount / installments).toLocaleString()} ฿/ด)`, "https://img.icons8.com/color/96/user-male-circle--v1.png");
        return replyQuickReply(replyToken, flex, actions);
    }

    if (step === 'ASK_PAYER') {
        const payer = text.toUpperCase();
        const members = await getMemberNames();
        if (!members.includes(payer)) return replyText(replyToken, `⚠️ ไม่รู้จักชื่อ "${payer}" ครับ\nลองเลือกจากรายการด้านล่างครับ`);

        await setDoc(sessionRef, { step: 'ASK_SPLIT', data: { ...data, payer, participants: [] } }, { merge: true });

        const actions = [
            { type: "action", action: { type: "message", label: "✅ ยืนยัน", text: "ตกลง" } },
            { type: "action", action: { type: "message", label: "👥 ทุกคน", text: "ทุกคน" } },
            ...members.map(m => ({ type: "action", action: { type: "message", label: m.substring(0, 20), text: m } }))
        ];
        const flex = createBubbleWithIcon("ใครหารบ้าง?", "กดเลือกรายชื่อ (กดซ้ำเพื่อยกเลิก)\nแล้วกด 'ยืนยัน'", "https://img.icons8.com/color/96/conference-call.png");
        return replyQuickReply(replyToken, flex, actions);
    }

    if (step === 'ASK_SPLIT') {
        const members = await getMemberNames();
        let currentParticipants = data.participants || [];

        if (text === 'ทุกคน') {
            currentParticipants = [...members];
            return await saveTransaction(replyToken, userId, { ...data, participants: currentParticipants, splitMethod: 'equal' });
        }

        if (text === 'ตกลง' || text === 'ยืนยัน' || text === '✅ ตกลง') {
            if (currentParticipants.length === 0) return replyText(replyToken, "⚠️ กรุณาเลือกอย่างน้อย 1 คนครับ");
            return await saveTransaction(replyToken, userId, { ...data, participants: currentParticipants, splitMethod: 'equal' });
        }

        // Toggle Logic
        const inputName = text.toUpperCase();
        if (members.includes(inputName)) {
            if (currentParticipants.includes(inputName)) {
                currentParticipants = currentParticipants.filter(p => p !== inputName);
            } else {
                currentParticipants.push(inputName);
            }
        }

        await setDoc(sessionRef, { data: { ...data, participants: currentParticipants } }, { merge: true });

        const actions = [
            { type: "action", action: { type: "message", label: "✅ ยืนยัน", text: "ตกลง" } },
            { type: "action", action: { type: "message", label: "👥 ทุกคน", text: "ทุกคน" } },
            ...members.map(m => {
                const isSelected = currentParticipants.includes(m);
                return { type: "action", action: { type: "message", label: `${isSelected ? '✔️ ' : ''}${m.substring(0, 18)}`, text: m } };
            })
        ];

        const selectedText = currentParticipants.length > 0 ? `เลือกแล้ว: ${currentParticipants.join(', ')}` : "ยังไม่ได้เลือกใคร";
        const flex = createBubbleWithIcon("ใครหารบ้าง?", selectedText, "https://img.icons8.com/color/96/conference-call.png");
        return replyQuickReply(replyToken, flex, actions);
    }
}

// --- LOGIC: Checking Settlement ---
async function checkSettlement(userId, replyToken) {
    const name = await getMemberNameByLineId(userId);
    if (!name) return replyText(replyToken, "⚠️ ไม่พบข้อมูลบัญชีของคุณ\nกรุณา Login หน้าเว็บเพื่อผูกบัญชี LINE ก่อนครับ");

    const today = new Date();
    const currentMonth = today.toISOString().slice(0, 7); // YYYY-MM
    const thaiMonth = today.toLocaleString('th-TH', { month: 'long' });

    // 1. Get All Transactions for Month
    const q = query(collection(db, "transactions"), where("date", ">=", currentMonth + "-01"));
    // Note: Simple query, client-side filtering for strict prefix match is safer for strings YYYY-MM
    const snap = await getDocs(q);
    const transactions = snap.docs.map(d => d.data()).filter(t => t.date && t.date.startsWith(currentMonth));

    if (transactions.length === 0) return replyText(replyToken, `เดือน ${thaiMonth} ยังไม่มีรายการค่าใช้จ่ายครับ`);

    // 2. Calculate Balances
    const members = await getMemberNames();
    const balances = {};
    members.forEach(m => balances[m] = 0);

    transactions.forEach(t => {
        const payer = (t.payer || "").toUpperCase();
        const amount = Number(t.amount);

        if (balances.hasOwnProperty(payer)) balances[payer] += amount;

        if (t.splits) {
            Object.keys(t.splits).forEach(k => {
                const member = k.toUpperCase();
                if (balances.hasOwnProperty(member)) balances[member] -= Number(t.splits[k]);
            });
        }
    });

    // 3. Solve Settlement (Who pays Whom)
    const debtors = []; // People with Negative Balance (Owe money)
    const creditors = []; // People with Positive Balance (Paid extra)

    members.forEach(m => {
        const bal = Math.round(balances[m]);
        if (bal < -1) debtors.push({ name: m, amount: Math.abs(bal) });
        if (bal > 1) creditors.push({ name: m, amount: bal });
    });

    // Match them up
    // We only care about transactions involving "name" (The Requesting User)
    const myTransfers = []; // I need to pay X
    const myReceivables = []; // X needs to pay Me

    let i = 0, j = 0;
    while (i < debtors.length && j < creditors.length) {
        const d = debtors[i];
        const c = creditors[j];
        const pay = Math.min(d.amount, c.amount);

        if (d.name === name) {
            myTransfers.push({ to: c.name, amount: pay });
        }
        if (c.name === name) {
            myReceivables.push({ from: d.name, amount: pay });
        }

        d.amount -= pay;
        c.amount -= pay;

        if (d.amount <= 0.1) i++;
        if (c.amount <= 0.1) j++;
    }

    // 4. Construct Reply
    // Case 1: Cleared
    if (myTransfers.length === 0 && myReceivables.length === 0) {
        return replyText(replyToken, `🎉 ยอดเดือน ${thaiMonth} ของคุณ ${name} เคลียร์หมดแล้วครับ (0 บาท)`);
    }

    let msg = `📊 **สรุปยอดเดือน ${thaiMonth} ของ ${name}**\n`;

    if (myTransfers.length > 0) {
        msg += `\n🔴 **ต้องโอนจ่าย:**\n`;
        myTransfers.forEach(t => {
            msg += `- โอนให้ ${t.to}: ${t.amount.toLocaleString()} บาท\n`;
        });
    }

    if (myReceivables.length > 0) {
        msg += `\n🟢 **รอรับเงิน:**\n`;
        myReceivables.forEach(t => {
            msg += `- จาก ${t.from}: ${t.amount.toLocaleString()} บาท\n`;
        });
    }

    msg += `\n(ข้อมูล ณ ${today.toLocaleTimeString('th-TH')})`;
    return replyText(replyToken, msg);
}

// --- HANDLER: Image Message (Gemini) ---
async function handleImageMessage(event) {
    return replyText(event.replyToken, "🤖 ระบบยังไม่รองรับการอ่านรูปภาพในเวอร์ชั่นนี้ครับ");
}

// --- HELPERS ---

async function getMemberNames() {
    const snap = await getDocs(collection(db, "members"));
    // Filter duplicates and invalid
    const names = new Set();
    snap.docs.forEach(d => {
        if (d.data().name) names.add(d.data().name.toUpperCase());
    });
    const arr = Array.from(names).sort();
    return arr;
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
    // Note: QuickReply is a property of the message object, not Flex Container itself
    // Structure: { type: 'flex', altText: '...', contents: flex, quickReply: { items: [...] } }
    const message = {
        type: 'flex',
        altText: 'เลือกรายการ',
        contents: flex,
        quickReply: { items: actions }
    };
    await sendToLine(replyToken, message);
}

function createBubbleWithIcon(title, text, iconUrl) {
    return {
        type: "bubble",
        hero: {
            type: "image",
            url: iconUrl,
            size: "full",
            aspectRatio: "20:13",
            aspectMode: "cover"
        },
        body: {
            type: "box",
            layout: "vertical",
            contents: [
                { type: "text", text: title, weight: "bold", size: "xl", color: "#1e293b" },
                { type: "text", text: text, size: "md", color: "#64748b", margin: "sm", wrap: true }
            ]
        }
    };
}

async function sendToLine(replyToken, payload) {
    // If replyToken is null (push message), logic is different. But here we always have replyToken.
    const token = process.env.LINE_CHANNEL_ACCESS_TOKEN;
    if (!token) {
        console.error("Missing LINE_CHANNEL_ACCESS_TOKEN");
        return;
    }

    // Check if payload is array or single
    const messages = Array.isArray(payload) ? payload : [payload];

    await fetch('https://api.line.me/v2/bot/message/reply', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ replyToken, messages })
    });
}

async function saveTransaction(replyToken, userId, data) {
    try {
        const batch = writeBatch(db);
        const installments = data.paymentType === 'installment' ? Number(data.installments) || 1 : 1;
        const groupId = data.paymentType === 'installment' ? "grp_" + Date.now() : null;
        const baseDate = new Date(); // Using server-side "today" for webhook

        const splits = {};
        const totalAmount = Number(data.amount);
        const share = totalAmount / data.participants.length;
        data.participants.forEach(p => splits[p] = share);

        for (let i = 0; i < installments; i++) {
            const currentInstallmentDate = new Date(baseDate);
            currentInstallmentDate.setMonth(baseDate.getMonth() + i);

            const txn = {
                date: currentInstallmentDate.toISOString().slice(0, 10),
                desc: installments > 1 ? `${data.desc} (${i + 1}/${installments})` : data.desc,
                amount: totalAmount / installments,
                payer: data.payer,
                splits: Object.fromEntries(Object.entries(splits).map(([k, v]) => [k, v / installments])),
                paymentType: data.paymentType || 'normal',
                icon: 'fa-utensils',
                groupId: groupId,
                timestamp: Date.now() + i
            };
            batch.set(doc(collection(db, "transactions")), txn);
        }

        // Delete Session
        batch.delete(doc(db, 'user_sessions', userId));

        await batch.commit();

        // Confirmation Message
        const msg = `✅ บันทึกเรียบร้อย! ${installments > 1 ? `(ผ่อน ${installments} เดือน)` : ''}\nรายการ: ${data.desc}\nยอดรวม: ${totalAmount.toLocaleString()} บาท\nคนจ่าย: ${data.payer}\nหาร: ${data.participants.join(', ')}`;
        return replyText(replyToken, msg);
    } catch (e) {
        return replyText(replyToken, "❌ Error saving: " + e.message);
    }
}
