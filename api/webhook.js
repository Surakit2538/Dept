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
            await replyText(event.replyToken, "? ??????????????: " + err.message);
        }
    }));
    return res.status(200).send('OK');
}

// --- HANDLER: Text Message ---
async function handleTextMessage(event) {
    const text = event.message.text.trim();
    const userId = event.source.userId;
    const replyToken = event.replyToken;

    // --- COMMAND 1: ???????????? ---
    if (text.includes("??????????????????????????????") || text.includes("?????")) {
        return await checkSettlement(userId, replyToken);
    }

    // --- COMMAND 2: ???????????????? ---
    if (text === "????????????????" || text === "??") {
        await deleteDoc(doc(db, 'user_sessions', userId));
        await setDoc(doc(db, 'user_sessions', userId), {
            step: 'ASK_DESC',
            data: {},
            lastUpdated: serverTimestamp()
        });

        const flex = createInteractiveCard("????????????", "???????????????????????????", "????????: ??????, ?????, ???????????????");
        return replyFlex(replyToken, "?????????????", flex);
    }

    // --- COMMAND 3: ?????? ---
    if (['??????', 'cancel', '??'].includes(text.toLowerCase())) {
        await deleteDoc(doc(db, 'user_sessions', userId));
        return replyText(replyToken, "??????? ???????????????????????");
    }

    // --- SESSION HANDLING ---
    const sessionRef = doc(db, 'user_sessions', userId);
    const sessionSnap = await getDoc(sessionRef);

    if (!sessionSnap.exists()) {
        if (text.includes("??????") || text.includes("hi")) return replyText(replyToken, "?????????? ????? '????????????????' ??????????????????????");
        return;
    }

    const session = sessionSnap.data();
    const step = session.step;
    const data = session.data || {};

    // FLOW: DESC -> AMOUNT -> PAYMENT_TYPE -> [INSTALLMENTS] -> PAYER -> SPLIT
    if (step === 'ASK_DESC') {
        const desc = text;
        await setDoc(sessionRef, { step: 'ASK_AMOUNT', data: { ...data, desc } }, { merge: true });

        const flex = createInteractiveCard("?????????????", `??????: ${desc}`, "???????????????????????");
        return replyFlex(replyToken, "????????", flex);
    }

    if (step === 'ASK_AMOUNT') {
        const amount = parseFloat(text.replace(/,/g, ''));
        if (isNaN(amount) || amount <= 0) return replyText(replyToken, "?? ??????????????????\n?????????????????");

        await setDoc(sessionRef, { step: 'ASK_PAYMENT_TYPE', data: { ...data, amount } }, { merge: true });

        const actions = [
            { type: "action", action: { type: "message", label: "?????????????", text: "????????" } },
            { type: "action", action: { type: "message", label: "????????", text: "????????" } }
        ];
        const flex = createInteractiveCard("??????????????", `??????? ${amount.toLocaleString()} ???`);
        return replyQuickReply(replyToken, flex, actions);
    }

    if (step === 'ASK_PAYMENT_TYPE') {
        if (text.includes("????")) {
            await setDoc(sessionRef, { step: 'ASK_INSTALLMENTS', data: { ...data, paymentType: 'installment' } }, { merge: true });
            const flex = createInteractiveCard("?????????????", "???????????? (2-24)", "?????????????????? ???????????");
            return replyFlex(replyToken, "????????????", flex);
        } else {
            await setDoc(sessionRef, { step: 'ASK_PAYER', data: { ...data, paymentType: 'normal', installments: 1 } }, { merge: true });
            const members = await getMemberNames();
            const actions = members.map(m => ({ type: "action", action: { type: "message", label: m.substring(0, 20), text: m } }));
            const flex = createInteractiveCard("??????????????", `??????? ${data.amount.toLocaleString()} ??? (????????)` );
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
        const flexMsg = "???? " + installments + " ????? (" + monthlyAmt + " ???/?????)";
        const flex = createInteractiveCard("??????????????", flexMsg);
        return replyQuickReply(replyToken, flex, actions);
    }

    if (step === 'ASK_PAYER') {
        const payer = text.toUpperCase();
        const members = await getMemberNames();
        if (!members.includes(payer)) return replyText(replyToken, `?? ????????????? "${payer}" ????\n?????????????????????????????`);

        await setDoc(sessionRef, { step: 'ASK_SPLIT', data: { ...data, payer, participants: [] } }, { merge: true });

        const actions = [
            { type: "action", action: { type: "message", label: "? ??????", text: "????" } },
            { type: "action", action: { type: "message", label: "?? ?????", text: "?????" } },
            ...members.map(m => ({ type: "action", action: { type: "message", label: m.substring(0, 20), text: m } }))
        ];
        const flex = createInteractiveCard("???????????", "?????????????? (????????????????)", "???????????????? '??????'");
        return replyQuickReply(replyToken, flex, actions);
    }

    if (step === 'ASK_SPLIT') {
        const members = await getMemberNames();
        let currentParticipants = data.participants || [];

        if (text === '?????') {
            currentParticipants = [...members];
            return await saveTransaction(replyToken, userId, { ...data, participants: currentParticipants, splitMethod: 'equal' });
        }

        if (text === '????' || text === '??????' || text === '? ????') {
            if (currentParticipants.length === 0) return replyText(replyToken, "?? ??????????????????? 1 ??????");
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
            { type: "action", action: { type: "message", label: "? ??????", text: "????" } },
            ...members.map(m => {
                const isSelected = currentParticipants.includes(m);
                return { type: "action", action: { type: "message", label: `${isSelected ? '?? ' : ''}${m.substring(0, 18)}`, text: m } };
            })
        ];

        const selectedText = currentParticipants.length > 0 ? `?????????: ${currentParticipants.join(', ')}` : "?????????????????";
        const flex = createInteractiveCard("???????????", selectedText, "???????????????? '??????'");
        return replyQuickReply(replyToken, flex, actions);
    }
}

// --- LOGIC: Checking Settlement ---
async function checkSettlement(userId, replyToken) {
    const name = await getMemberNameByLineId(userId);
    if (!name) return replyText(replyToken, "?? ??????????????????????\n????? Login ????????????????????? LINE ????????");

    const today = new Date();
    const currentMonth = today.toISOString().slice(0, 7);
    const thaiMonth = today.toLocaleString('th-TH', { month: 'long' });

    const q = query(collection(db, "transactions"), where("date", ">=", currentMonth + "-01"));
    const snap = await getDocs(q);
    const transactions = snap.docs.map(d => d.data()).filter(t => t.date && t.date.startsWith(currentMonth));

    if (transactions.length === 0) return replyText(replyToken, `????? ${thaiMonth} ????????????????????????????`);

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
    return replyFlex(replyToken, "?????????????????", flex);
}

// Updated handleImageMessage for webhook.js
// Copy this function to replace the existing handleImageMessage in webhook.js

async function handleImageMessage(event) {
    const userId = event.source.userId;
    const replyToken = event.replyToken;
    const messageId = event.message.id;

    try {
        // 1. ???????????? LINE
        const imageBuffer = await getImageContent(messageId);

        if (!imageBuffer) {
            return replyText(replyToken, "? ????????????????????? ????????????????????");
        }

        // 2. ?????????? user ?????????????????????
        const userMember = await getMemberByLineIdHelper(db, userId);

        if (!userMember) {
            return replyText(replyToken, "? ????????????????? ????????????????????????");
        }

        // 3. ?????????????????? SlipOK API
        await replyText(replyToken, "?? ????????????????...");

        const slipData = await verifySlipWithSlipOK(imageBuffer);

        if (!slipData.success) {
            const errorMsg = getSlipErrorMessage(slipData.code);
            return pushMessage(userId, `? ${errorMsg}\n\n??????????????: ${slipData.code || 'Unknown'}`);
        }

        const slip = slipData.data;

        // 4. ?? Settlement ????????????????????????
        const currentMonth = new Date().toISOString().slice(0, 7);
        const matchingSettlement = await findMatchingSettlement(db, userMember.name, slip.amount, currentMonth);

        if (!matchingSettlement) {
            return pushMessage(userId,
                `?? ??????????? Settlement ?????????????????? ${slip.amount.toLocaleString()} ???\n\n` +
                `????????????????????????????????????????????????????`
            );
        }

        // 5. ?????????????????
        const receiver = await getMemberByNameHelper(db, matchingSettlement.to);

        if (!receiver || !receiver.realName) {
            return pushMessage(userId,
                `?? ?????? (${matchingSettlement.to}) ????????????????????????\n` +
                `????????????????????????? Settings ????`
            );
        }

        const matchResult = matchReceiverName(slip.receiver, receiver.realName);

        if (!matchResult.matched) {
            return pushMessage(userId,
                `? ???????????????????\n\n` +
                `?? ???????: ${receiver.realName}\n` +
                `?? ??????: ${slip.receiver.displayName}\n\n` +
                `?????????????????????????????????`
            );
        }

        // 6. ???????????
        const isDuplicate = await checkDuplicateSlip(db, slip.transRef);

        if (isDuplicate) {
            return pushMessage(userId, "?? ?????????????????????????????????");
        }

        // 7. ?????????????? Firestore
        await saveVerifiedSettlement(db, matchingSettlement, slip, userMember.name, matchResult);

        // 8. ??? LINE notification ?????????
        if (receiver.lineUserId) {
            await sendSlipVerifiedNotification(
                receiver.lineUserId,
                userMember.name,
                matchingSettlement.to,
                slip.amount,
                slip
            );
        }

        // 9. ??? Success Message
        const successFlex = createSlipSuccessMessage(slip, matchingSettlement);
        return pushFlex(userId, "? ??????????????????????", successFlex);

    } catch (error) {
        console.error("Error in handleImageMessage:", error);
        return pushMessage(userId, "? ??????????????: " + error.message);
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
    const message = { type: 'flex', altText: '???????????', contents: flex, quickReply: { items: actions } };
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
    const contents = [
        // Header with icon + title
        {
            type: "box",
            layout: "horizontal",
            contents: [
                { type: "text", text: "??", size: "xxl", flex: 0 },
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
            text: "?? " + description,
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
                { type: "text", text: "??", size: "md", flex: 0 },
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
                    text: totalAmount.toLocaleString() + " ???",
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
                { type: "text", text: "??", size: "md", flex: 0 },
                { type: "text", text: "??????:", size: "sm", color: "#64748b", margin: "sm", flex: 2 },
                { type: "text", text: "???? " + installments + " ?????", size: "sm", weight: "bold", color: "#1e293b", flex: 3, wrap: true }
            ],
            margin: "sm"
        });
    }

    // Payer
    details.push({
        type: "box",
        layout: "horizontal",
        contents: [
            { type: "text", text: "??", size: "md", flex: 0 },
            { type: "text", text: "??????:", size: "sm", color: "#64748b", margin: "sm", flex: 2 },
            { type: "text", text: data.payer, size: "sm", weight: "bold", color: "#1e293b", flex: 3 }
        ],
        margin: "sm"
    });

    // Participants
    details.push({
        type: "box",
        layout: "horizontal",
        contents: [
            { type: "text", text: "??", size: "md", flex: 0 },
            { type: "text", text: "?????:", size: "sm", color: "#64748b", margin: "sm", flex: 2 },
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
                    text: "? ????????????!",
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
                    action: { type: "uri", label: "??????????????? ?", uri: "https://dept-three.vercel.app/" },
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
                { type: "text", text: "??", size: "xxl", flex: 0 },
                {
                    type: "box",
                    layout: "vertical",
                    contents: [
                        { type: "text", text: "????????" + month, weight: "bold", size: "xl", color: "#1e293b" },
                        { type: "text", text: "????????? " + name, size: "xs", color: "#64748b", margin: "xs" }
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
                    text: "??",
                    size: "xxl",
                    align: "center"
                },
                {
                    type: "text",
                    text: "?????????????????!",
                    size: "lg",
                    weight: "bold",
                    color: "#4338ca",
                    align: "center",
                    margin: "md"
                },
                {
                    type: "text",
                    text: "???????????????????",
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
                text: "?? ???????????", 
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
                            text: "?? " + t.to, 
                            size: "sm", 
                            color: "#1e293b", 
                            flex: 3 
                        },
                        { 
                            type: "text", 
                            text: t.amount.toLocaleString() + " ?", 
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
                text: "?? ?????????", 
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
                            text: "?? " + t.from, 
                            size: "sm", 
                            color: "#1e293b", 
                            flex: 3 
                        },
                        { 
                            type: "text", 
                            text: t.amount.toLocaleString() + " ?", 
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
                    action: { type: "uri", label: "??????? Dept Money ?", uri: "https://dept-three.vercel.app/" }, 
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
        return replyFlex(replyToken, "???????????????", flex);
    } catch (e) {
        return replyText(replyToken, "? Error saving: " + e.message);
    }
}
