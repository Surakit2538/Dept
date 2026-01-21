import { initializeApp } from "firebase/app";
import { 
    getFirestore, doc, getDoc, setDoc, deleteDoc, addDoc, 
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

// Initialize Firebase (Outside handler to reuse connection)
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// --- 2. MAIN HANDLER ---
export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

    const events = req.body.events || [];
    
    // Process all events
    await Promise.all(events.map(async (event) => {
        if (event.type === 'message' && event.message.type === 'text') {
            await handleMessage(event);
        }
    }));

    return res.status(200).send('OK');
}

// --- 3. LOGIC CORE ---
async function handleMessage(event) {
    const userId = event.source.userId;
    const text = event.message.text.trim();
    const replyToken = event.replyToken;

    // A. คำสั่งยกเลิก (Reset)
    if (text === 'ยกเลิก' || text.toLowerCase() === 'cancel') {
        await deleteDoc(doc(db, 'user_sessions', userId));
        return replyText(replyToken, "❌ ยกเลิกรายการแล้วครับ พิมพ์ชื่อรายการใหม่ได้เลย");
    }

    // B. ดึงสถานะปัจจุบัน (Session)
    const sessionRef = doc(db, 'user_sessions', userId);
    const sessionSnap = await getDoc(sessionRef);
    let session = sessionSnap.exists() ? sessionSnap.data() : null;

    // C. Step-by-Step Flow
    if (!session) {
        // --- STEP 1: เริ่มต้น (รับชื่อรายการ) ---
        await setDoc(sessionRef, {
            step: 'ASK_AMOUNT',
            data: { desc: text },
            timestamp: serverTimestamp()
        });
        return replyText(replyToken, `📝 รายการ "${text}"\n💰 ราคาเท่าไหร่ครับ? (พิมพ์ตัวเลขเลย)`);
    }

    else if (session.step === 'ASK_AMOUNT') {
        // --- STEP 2: รับราคา ---
        const amount = parseFloat(text);
        if (isNaN(amount) || amount <= 0) {
            return replyText(replyToken, "⚠️ ขอเป็นตัวเลขนะครับ เช่น 500");
        }

        // เตรียมรายชื่อสมาชิกเพื่อทำ Quick Reply
        const membersSnap = await getDocs(collection(db, 'members'));
        const members = membersSnap.docs.map(d => d.data().name);
        
        await setDoc(sessionRef, {
            step: 'ASK_PAYER',
            data: { ...session.data, amount: amount }
        }, { merge: true });

        // สร้าง Quick Reply ให้เลือกคนจ่าย
        const quickReplyItems = members.map(m => ({
            type: "action",
            action: { type: "message", label: m, text: m }
        }));

        return replyQuickReply(replyToken, `💰 ยอด ${amount.toLocaleString()} บ.\n👤 ใครเป็นคนจ่ายครับ?`, quickReplyItems);
    }

    else if (session.step === 'ASK_PAYER') {
        // --- STEP 3: รับชื่อคนจ่าย ---
        const payer = text.toUpperCase(); // บังคับตัวใหญ่
        
        // เช็คว่ามีสมาชิกนี้ไหม (Optional: ถ้าจะเคร่งครัด)
        // แต่เพื่อความง่าย เรายอมรับ Text ไปก่อน
        
        await setDoc(sessionRef, {
            step: 'ASK_OPTION',
            data: { ...session.data, payer: payer }
        }, { merge: true });

        return replyText(replyToken, 
            `👤 จ่ายโดย ${payer}\n` +
            `⚙️ เลือกรูปแบบการหาร:\n` +
            `1. พิมพ์ "ปกติ" (หารเท่าทุกคน)\n` +
            `2. พิมพ์จำนวนงวด เช่น "3งวด" หรือ "10เดือน" (ผ่อน)\n` +
            `3. พิมพ์ยอดแยก เช่น "${payer}=200, Care=100" (หารไม่เท่า)`
        );
    }

    else if (session.step === 'ASK_OPTION') {
        // --- STEP 4: จบงาน (บันทึก) ---
        const txnData = session.data;
        const membersSnap = await getDocs(collection(db, 'members'));
        const allMembers = membersSnap.docs.map(d => d.data().name); // ['GAME', 'CARE', ...]

        let paymentType = 'normal';
        let installments = 1;
        let splits = {};
        let finalDesc = txnData.desc;

        // Logic 1: ผ่อนชำระ (Check for "Xงวด" or "Xเดือน")
        const installmentMatch = text.match(/(\d+)\s*(งวด|เดือน)/);
        
        // Logic 2: Custom Split (Check for "=")
        const isCustom = text.includes('=');

        if (installmentMatch) {
            // -- แบบผ่อน --
            paymentType = 'installment';
            installments = parseInt(installmentMatch[1]);
            if (installments < 2) installments = 1;
            
            // Default split for installment is Equal Split
            allMembers.forEach(m => splits[m] = txnData.amount / allMembers.length);

        } else if (isCustom) {
            // -- แบบหารไม่เท่า --
            // Format: "Game=100, Care=200"
            const parts = text.split(/,| /).filter(p => p.trim() !== ''); // Split by comma or space
            let totalCustom = 0;
            
            parts.forEach(part => {
                const [name, val] = part.split('=');
                if (name && val) {
                    const memberName = name.trim().toUpperCase();
                    const value = parseFloat(val);
                    splits[memberName] = value;
                    totalCustom += value;
                }
            });

            // ตรวจสอบยอด (Optional)
            // if (totalCustom !== txnData.amount) ... แจ้งเตือนได้

        } else {
            // -- แบบปกติ (หารเท่า) --
            // หารเท่าทุกคนที่มีใน Database
            if (allMembers.length > 0) {
                const share = txnData.amount / allMembers.length;
                allMembers.forEach(m => splits[m] = share);
            }
        }

        // --- บันทึกข้อมูล (Save) ---
        try {
            const batch = writeBatch(db);
            const today = new Date();
            
            if (paymentType === 'installment') {
                // สร้างหลายรายการล่วงหน้า
                const amountPerMonth = txnData.amount / installments;
                
                // Recalculate splits for per-month amount
                let monthlySplits = {};
                for (let m in splits) { // Normalize ratio
                     monthlySplits[m] = (splits[m] / txnData.amount) * amountPerMonth;
                }

                for (let i = 0; i < installments; i++) {
                    const nextDate = new Date(today);
                    nextDate.setMonth(today.getMonth() + i);
                    const y = nextDate.getFullYear();
                    const mStr = String(nextDate.getMonth() + 1).padStart(2, '0');
                    const dStr = String(nextDate.getDate()).padStart(2, '0');
                    
                    const newRef = doc(collection(db, "transactions"));
                    batch.set(newRef, {
                        date: `${y}-${mStr}-${dStr}`,
                        desc: `${txnData.desc} (งวด ${i+1}/${installments})`,
                        amount: amountPerMonth,
                        payer: txnData.payer,
                        splits: monthlySplits,
                        paymentType: 'installment',
                        installments: installments,
                        timestamp: Date.now() + i
                    });
                }
            } else {
                // สร้างรายการเดียว
                const newRef = doc(collection(db, "transactions"));
                batch.set(newRef, {
                    date: today.toISOString().slice(0, 10), // YYYY-MM-DD
                    desc: txnData.desc,
                    amount: txnData.amount,
                    payer: txnData.payer,
                    splits: splits,
                    paymentType: 'normal',
                    timestamp: Date.now()
                });
            }

            await batch.commit();
            
            // ลบ Session ทิ้ง
            await deleteDoc(sessionRef);

            return replyText(replyToken, `✅ บันทึกเรียบร้อย!\nรายการ: ${txnData.desc}\nยอด: ${txnData.amount.toLocaleString()} บ.\nแบบ: ${paymentType === 'installment' ? 'ผ่อน '+installments+' งวด' : 'จ่ายเต็ม'}`);

        } catch (error) {
            console.error("Save Error", error);
            return replyText(replyToken, "❌ เกิดข้อผิดพลาดในการบันทึกครับ ลองใหม่อีกทีนะ");
        }
    }
}

// --- Helper: Reply Text ---
async function replyText(replyToken, message) {
    const token = process.env.LINE_CHANNEL_ACCESS_TOKEN; // ต้องใส่ใน Vercel Env
    await fetch('https://api.line.me/v2/bot/message/reply', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            replyToken: replyToken,
            messages: [{ type: 'text', text: message }]
        })
    });
}

// --- Helper: Reply with Quick Reply ---
async function replyQuickReply(replyToken, message, items) {
    const token = process.env.LINE_CHANNEL_ACCESS_TOKEN;
    await fetch('https://api.line.me/v2/bot/message/reply', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            replyToken: replyToken,
            messages: [{
                type: 'text',
                text: message,
                quickReply: { items: items }
            }]
        })
    });
}