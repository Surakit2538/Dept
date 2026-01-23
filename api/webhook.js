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

        const flex = createInteractiveCard("จดรายการใหม่", "พิมพ์ชื่อรายการมาได้เลยครับ", "ตัวอย่าง: ค่าน้ำ, ค่าไฟ, ค่าอินเทอร์เน็ต");
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

        const flex = createInteractiveCard("ราคาเท่าไหร่?", `รายการ: ${desc}`, "ระบุจำนวนเงินเป็นตัวเลข");
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
        const flex = createInteractiveCard("รูปแบบการจ่าย?", `ยอดเงิน ${amount.toLocaleString()} บาท`);
        return replyQuickReply(replyToken, flex, actions);
    }

    if (step === 'ASK_PAYMENT_TYPE') {
        if (text.includes("ผ่อน")) {
            await setDoc(sessionRef, { step: 'ASK_INSTALLMENTS', data: { ...data, paymentType: 'installment' } }, { merge: true });
            const flex = createInteractiveCard("ผ่อนกี่เดือน?", "ระบุจำนวนงวด (2-24)", "ระบบจะแบ่งยอดเท่าๆ กันทุกเดือน");
            return replyFlex(replyToken, "ระบุจำนวนงวด", flex);
        } else {
            await setDoc(sessionRef, { step: 'ASK_PAYER', data: { ...data, paymentType: 'normal', installments: 1 } }, { merge: true });
            const members = await getMemberNames();
            const actions = members.map(m => ({ type: "action", action: { type: "message", label: m.substring(0, 20), text: m } }));
            const flex = createInteractiveCard("ใครเป็นคนจ่าย?", `ยอดเงิน ${data.amount.toLocaleString()} บาท (จ่ายเต็ม)` );
            return replyQuickReply(replyToken, flex, actions);
        }
    }

    if (step === 'ASK_INSTALLMENTS') {
        let installments = parseInt(text);
        if (isNaN(installments) || installments < 2) installments = 2;
        await setDoc(sessionRef, { step: 'ASK_PAYER', data: { ...data, installments } }, { merge: true });

        const members = await getMemberNames();
        const actions = members.map(m => ({ type: "action", action: { type: "message", label: m.substring(0, 20), text: m } }));
        const monthlyAmt = (data.amount / installments).toLocaleString();
        const flexMsg = "ผ่อน " + installments + " เดือน (" + monthlyAmt + " บาท/เดือน)";
        const flex = createInteractiveCard("ใครเป็นคนจ่าย?", flexMsg);
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
        const flex = createInteractiveCard("ใครหารบ้าง?", "กดเลือกรายชื่อ (กดซ้ำเพื่อยกเลิก)", "เลือกเสร็จแล้วกด 'ยืนยัน'");
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
            ...members.map(m => {
                const isSelected = currentParticipants.includes(m);
                return { type: "action", action: { type: "message", label: `${isSelected ? '✔️ ' : ''}${m.substring(0, 18)}`, text: m } };
            })
        ];

        const selectedText = currentParticipants.length > 0 ? `เลือกแล้ว: ${currentParticipants.join(', ')}` : "ยังไม่ได้เลือกใคร";
        const flex = createInteractiveCard("ใครหารบ้าง?", selectedText, "เลือกเสร็จแล้วกด 'ยืนยัน'");
        return replyQuickReply(replyToken, flex, actions);
    }
}

// --- LOGIC: Checking Settlement ---
async function checkSettlement(userId, replyToken) {
    const name = await getMemberNameByLineId(userId);
    if (!name) return replyText(replyToken, "⚠️ ไม่พบข้อมูลบัญชีของคุณ\nกรุณา Login หน้าเว็บเพื่อผูกบัญชี LINE ก่อนครับ");

    const today = new Date();
    const currentMonth = today.toISOString().slice(0, 7);
    const thaiMonth = today.toLocaleString('th-TH', { month: 'long' });

    const q = query(collection(db, "transactions"), where("date", ">=", currentMonth + "-01"));
    const snap = await getDocs(q);
    const transactions = snap.docs.map(d => d.data()).filter(t => t.date && t.date.startsWith(currentMonth));

    if (transactions.length === 0) return replyText(replyToken, `เดือน ${thaiMonth} ยังไม่มีรายการค่าใช้จ่ายครับ`);

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

    const debtors = [];
    const creditors = [];
    members.forEach(m => {
        const bal = Math.round(balances[m]);
        if (bal < -1) debtors.push({ name: m, amount: Math.abs(bal) });
        if (bal > 1) creditors.push({ name: m, amount: bal });
    });

    const myTransfers = [];
    const myReceivables = [];
    let i = 0, j = 0;
    while (i < debtors.length && j < creditors.length) {
        const d = debtors[i]; const c = creditors[j];
        const pay = Math.min(d.amount, c.amount);
        if (d.name === name) myTransfers.push({ to: c.name, amount: pay });
        if (c.name === name) myReceivables.push({ from: d.name, amount: pay });
        d.amount -= pay; c.amount -= pay;
        if (d.amount <= 0.1) i++;
        if (c.amount <= 0.1) j++;
    }

    const flex = createSettlementBubble(name, thaiMonth, myTransfers, myReceivables);
    return replyFlex(replyToken, "สรุปยอดค่าใช้จ่าย", flex);
}

// --- HANDLER: Image Message (Gemini) ---
async function handleImageMessage(event) {
    return replyText(event.replyToken, "🤖 ระบบยังไม่รองรับการอ่านรูปภาพในเวอร์ชั่นนี้ครับ");
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
    const message = { type: 'flex', altText: 'เลือกรายการ', contents: flex, quickReply: { items: actions } };
    await sendToLine(replyToken, message);
}

function createInteractiveCard(title, description, hintText = null) {
    const contents = [
        // Header with icon + title
        {
            type: "box",
            layout: "horizontal",
            contents: [
                { type: "text", text: "📝", size: "xxl", flex: 0 },
                {
                    type: "text",
                    text: title,
                    weight: "bold",
                    size: "xl",
                    color: "#1e293b",
                    margin: "md",
                    flex: 1,
                    wrap: true
                }
            ]
        },
        // Separator
        { type: "separator", margin: "md", color: "#e2e8f0" },
        // Description
        {
            type: "text",
            text: "💬 " + description,
            size: "sm",
            color: "#64748b",
            margin: "md",
            wrap: true
        }
    ];

    // Optional hint text box
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
                    style: "italic",
                    wrap: true
                }
            ],
            backgroundColor: "#f1f5f9",
            cornerRadius: "md",
            paddingAll: "sm",
            margin: "md"
        });
    }

    return {
        type: "bubble",
        size: "kilo",
        body: {
            type: "box",
            layout: "vertical",
            contents: contents
        },
        styles: {
            body: { backgroundColor: "#ffffff" }
        }
    };
}

function createSuccessBubble(data, totalAmount, installments) {
    // Build detail rows with icons
    const details = [
        {
            type: "box",
            layout: "horizontal",
            contents: [
                { type: "text", text: "📝", size: "md", flex: 0 },
                { type: "text", text: data.desc, size: "lg", weight: "bold", color: "#1e293b", margin: "sm", flex: 1, wrap: true }
            ],
            margin: "md"
        },
        {
            type: "box",
            layout: "vertical",
            contents: [
                {
                    type: "text",
                    text: totalAmount.toLocaleString() + " บาท",
                    size: "xxl",
                    weight: "bold",
                    color: "#4338ca",
                    align: "center"
                }
            ],
            backgroundColor: "#e0e7ff",
            cornerRadius: "lg",
            paddingAll: "md",
            margin: "md"
        },
        { type: "separator", margin: "md", color: "#e2e8f0" }
    ];

    // Add installment info if applicable
    if (installments > 1) {
        details.push({
            type: "box",
            layout: "horizontal",
            contents: [
                { type: "text", text: "📅", size: "md", flex: 0 },
                { type: "text", text: "รูปแบบ:", size: "sm", color: "#64748b", margin: "sm", flex: 2 },
                { type: "text", text: "ผ่อน " + installments + " เดือน", size: "sm", weight: "bold", color: "#1e293b", flex: 3, wrap: true }
            ],
            margin: "sm"
        });
    }

    // Payer
    details.push({
        type: "box",
        layout: "horizontal",
        contents: [
            { type: "text", text: "💳", size: "md", flex: 0 },
            { type: "text", text: "คนจ่าย:", size: "sm", color: "#64748b", margin: "sm", flex: 2 },
            { type: "text", text: data.payer, size: "sm", weight: "bold", color: "#1e293b", flex: 3 }
        ],
        margin: "sm"
    });

    // Participants
    details.push({
        type: "box",
        layout: "horizontal",
        contents: [
            { type: "text", text: "👥", size: "md", flex: 0 },
            { type: "text", text: "คนหาร:", size: "sm", color: "#64748b", margin: "sm", flex: 2 },
            { type: "text", text: data.participants.join(", "), size: "sm", weight: "bold", color: "#1e293b", flex: 3, wrap: true }
        ],
        margin: "sm"
    });

    return {
        type: "bubble",
        size: "kilo",
        header: {
            type: "box",
            layout: "vertical",
            contents: [
                {
                    type: "text",
                    text: "✅ บันทึกสำเร็จ!",
                    size: "xl",
                    weight: "bold",
                    color: "#ffffff",
                    align: "center"
                }
            ],
            backgroundColor: "#4338ca",
            paddingAll: "md"
        },
        body: {
            type: "box",
            layout: "vertical",
            contents: details
        },
        footer: {
            type: "box",
            layout: "vertical",
            contents: [
                {
                    type: "button",
                    action: { type: "uri", label: "ดูประวัติในเว็บ →", uri: "https://dept-three.vercel.app/" },
                    style: "primary",
                    color: "#4338ca",
                    height: "sm"
                }
            ]
        },
        styles: {
            body: { backgroundColor: "#ffffff" },
            footer: { backgroundColor: "#f8fafc" }
        }
    };
}

function createSettlementBubble(name, month, transfers, receivables) {
    const contents = [
        {
            type: "box",
            layout: "horizontal",
            contents: [
                { type: "text", text: "📊", size: "xxl", flex: 0 },
                {
                    type: "box",
                    layout: "vertical",
                    contents: [
                        { type: "text", text: "ยอดเดือน" + month, weight: "bold", size: "xl", color: "#1e293b" },
                        { type: "text", text: "สำหรับคุณ " + name, size: "xs", color: "#64748b", margin: "xs" }
                    ],
                    margin: "md",
                    flex: 1
                }
            ]
        },
        { type: "separator", margin: "lg", color: "#e2e8f0" }
    ];

    // Check if cleared all debts
    if (transfers.length === 0 && receivables.length === 0) {
        contents.push({
            type: "box",
            layout: "vertical",
            contents: [
                {
                    type: "text",
                    text: "🎉",
                    size: "xxl",
                    align: "center"
                },
                {
                    type: "text",
                    text: "เคลียร์ครบหมดแล้ว!",
                    size: "lg",
                    weight: "bold",
                    color: "#4338ca",
                    align: "center",
                    margin: "md"
                },
                {
                    type: "text",
                    text: "ไม่มีรายการค้างชำระ",
                    size: "sm",
                    color: "#64748b",
                    align: "center",
                    margin: "sm"
                }
            ],
            backgroundColor: "#e0e7ff",
            cornerRadius: "lg",
            paddingAll: "lg",
            margin: "lg"
        });
    } else {
        // Has debts or receivables
        if (transfers.length > 0) {
            contents.push({ 
                type: "text", 
                text: "💸 ต้องโอนจ่าย", 
                size: "sm", 
                weight: "bold", 
                color: "#8b5cf6", 
                margin: "lg" 
            });
            
            transfers.forEach(t => {
                contents.push({
                    type: "box",
                    layout: "horizontal",
                    contents: [
                        { 
                            type: "text", 
                            text: "➡️ " + t.to, 
                            size: "sm", 
                            color: "#1e293b", 
                            flex: 3 
                        },
                        { 
                            type: "text", 
                            text: t.amount.toLocaleString() + " ฿", 
                            size: "sm", 
                            weight: "bold", 
                            color: "#8b5cf6", 
                            align: "end", 
                            flex: 2 
                        }
                    ],
                    backgroundColor: "#f3e8ff",
                    cornerRadius: "md",
                    paddingAll: "sm",
                    margin: "sm"
                });
            });
        }

        if (receivables.length > 0) {
            contents.push({ 
                type: "text", 
                text: "💰 รอรับเงิน", 
                size: "sm", 
                weight: "bold", 
                color: "#6366f1", 
                margin: "lg" 
            });
            
            receivables.forEach(t => {
                contents.push({
                    type: "box",
                    layout: "horizontal",
                    contents: [
                        { 
                            type: "text", 
                            text: "⬅️ " + t.from, 
                            size: "sm", 
                            color: "#1e293b", 
                            flex: 3 
                        },
                        { 
                            type: "text", 
                            text: t.amount.toLocaleString() + " ฿", 
                            size: "sm", 
                            weight: "bold", 
                            color: "#6366f1", 
                            align: "end", 
                            flex: 2 
                        }
                    ],
                    backgroundColor: "#eef2ff",
                    cornerRadius: "md",
                    paddingAll: "sm",
                    margin: "sm"
                });
            });
        }
    }

    return {
        type: "bubble",
        size: "kilo",
        body: { 
            type: "box", 
            layout: "vertical", 
            contents: contents 
        },
        footer: {
            type: "box",
            layout: "vertical",
            contents: [
                { 
                    type: "button", 
                    action: { type: "uri", label: "เปิดแอป Dept Money →", uri: "https://dept-three.vercel.app/" }, 
                    style: "primary", 
                    color: "#4338ca",
                    height: "sm"
                }
            ]
        },
        styles: {
            body: { backgroundColor: "#ffffff" },
            footer: { backgroundColor: "#f8fafc" }
        }
    };
}

async function sendToLine(replyToken, payload) {
    const token = process.env.LINE_CHANNEL_ACCESS_TOKEN;
    if (!token) return;
    const messages = Array.isArray(payload) ? payload : [payload];
    await fetch('https://api.line.me/v2/bot/message/reply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ replyToken, messages })
    });
}

async function saveTransaction(replyToken, userId, data) {
    try {
        const batch = writeBatch(db);
        const installments = data.paymentType === 'installment' ? Number(data.installments) || 1 : 1;
        const groupId = data.paymentType === 'installment' ? "grp_" + Date.now() : null;
        const baseDate = new Date();
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
        batch.delete(doc(db, 'user_sessions', userId));
        await batch.commit();

        const flex = createSuccessBubble(data, totalAmount, installments);
        return replyFlex(replyToken, "บันทึกเรียบร้อย", flex);
    } catch (e) {
        return replyText(replyToken, "❌ Error saving: " + e.message);
    }
}
