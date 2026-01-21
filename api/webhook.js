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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// --- 2. MAIN HANDLER ---
export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

    const events = req.body.events || [];
    
    // วนลูปจัดการทุก event (เผื่อมีหลายข้อความเข้ามาพร้อมกัน)
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

    // A. เช็คคำสั่งยกเลิก (Reset)
    if (['ยกเลิก', 'cancel', 'เริ่มใหม่', 'พอ'].includes(text.toLowerCase())) {
        await deleteDoc(doc(db, 'user_sessions', userId));
        return replyText(replyToken, "❌ ยกเลิกรายการแล้วครับ พิมพ์ชื่อรายการเพื่อเริ่มใหม่ได้เลย");
    }

    // B. ดึงสถานะการคุยปัจจุบัน (Session) จาก Firebase
    const sessionRef = doc(db, 'user_sessions', userId);
    const sessionSnap = await getDoc(sessionRef);
    let session = sessionSnap.exists() ? sessionSnap.data() : null;

    // --- STEP 1: เริ่มต้น (รับชื่อรายการ) ---
    if (!session) {
        // สร้าง Session ใหม่
        await setDoc(sessionRef, {
            step: 'ASK_AMOUNT',
            data: { desc: text },
            timestamp: serverTimestamp()
        });
        return replyText(replyToken, `📝 รายการ "${text}"\n💰 ราคาเท่าไหร่ครับ? (พิมพ์ตัวเลขเลย)`);
    }

    const currentStep = session.step;
    const data = session.data || {};

    // --- STEP 2: รับราคา -> ถามคนจ่าย ---
    if (currentStep === 'ASK_AMOUNT') {
        const amount = parseFloat(text.replace(/,/g, '')); // รองรับลูกน้ำ เช่น 1,000
        if (isNaN(amount) || amount <= 0) return replyText(replyToken, "⚠️ ขอเป็นตัวเลขราคานะครับ เช่น 150 หรือ 1000");

        await setDoc(sessionRef, { step: 'ASK_PAYER', data: { ...data, amount } }, { merge: true });

        // สร้างปุ่มเลือกสมาชิก (Quick Reply)
        const members = await getMemberNames();
        // สร้าง Action Object สำหรับ Quick Reply
        const actions = members.map(m => ({ 
            type: "action", action: { type: "message", label: m, text: m } 
        }));
        
        return replyQuickReply(replyToken, `💰 ยอด ${amount.toLocaleString()} บ.\n👤 ใครเป็นคนจ่ายครับ?`, actions);
    }

    // --- STEP 3: รับคนจ่าย -> ถามรูปแบบการชำระ ---
    if (currentStep === 'ASK_PAYER') {
        const payer = text.toUpperCase(); // บังคับตัวใหญ่เพื่อให้ตรงกับ DB
        await setDoc(sessionRef, { step: 'ASK_PAYMENT_TYPE', data: { ...data, payer } }, { merge: true });

        const actions = [
            { type: "action", action: { type: "message", label: "จ่ายเต็มจำนวน", text: "จ่ายเต็ม" } },
            { type: "action", action: { type: "message", label: "ผ่อนชำระ", text: "ผ่อนชำระ" } }
        ];
        return replyQuickReply(replyToken, `👤 จ่ายโดย ${payer}\n💳 รูปแบบการชำระครับ?`, actions);
    }

    // --- STEP 4: รับรูปแบบ -> ถามงวด หรือ ข้ามไปถามคนหาร ---
    if (currentStep === 'ASK_PAYMENT_TYPE') {
        if (text.includes("ผ่อน")) {
            await setDoc(sessionRef, { step: 'ASK_INSTALLMENTS', data: { ...data, paymentType: 'installment' } }, { merge: true });
            return replyText(replyToken, "📅 ผ่อนกี่งวดครับ? (พิมพ์ตัวเลขมาเลย เช่น 3, 6, 10)");
        } else {
            // จ่ายเต็ม -> ข้ามไปถามคนหารเลย (ตั้งค่า default installments = 1)
            await setDoc(sessionRef, { step: 'ASK_PARTICIPANTS', data: { ...data, paymentType: 'normal', installments: 1 } }, { merge: true });
            return askParticipants(replyToken);
        }
    }

    // --- STEP 4.5: รับจำนวนงวด (กรณีผ่อน) -> ถามคนหาร ---
    if (currentStep === 'ASK_INSTALLMENTS') {
        let installments = parseInt(text);
        if (isNaN(installments) || installments < 2) installments = 2; // Default อย่างน้อย 2 งวด
        
        await setDoc(sessionRef, { step: 'ASK_PARTICIPANTS', data: { ...data, installments } }, { merge: true });
        return askParticipants(replyToken);
    }

    // --- STEP 5: รับคนหาร -> ถามวิธีหาร ---
    if (currentStep === 'ASK_PARTICIPANTS') {
        let participants = [];
        if (text === 'ทุกคน' || text.toLowerCase() === 'all') {
            participants = await getMemberNames(); // หารทุกคนในระบบ
        } else {
            // แยกชื่อด้วยเว้นวรรค หรือ คอมมา เช่น "Game Care" หรือ "Game, Care"
            participants = text.split(/[\s,]+/).map(n => n.trim().toUpperCase()).filter(n => n);
        }

        if (participants.length === 0) return replyText(replyToken, "⚠️ ไม่พบรายชื่อคนหาร ลองพิมพ์ใหม่ครับ หรือเลือก 'ทุกคน'");

        await setDoc(sessionRef, { step: 'ASK_SPLIT_METHOD', data: { ...data, participants } }, { merge: true });

        const actions = [
            { type: "action", action: { type: "message", label: "หารเท่ากัน", text: "หารเท่า" } },
            { type: "action", action: { type: "message", label: "ระบุจำนวนเอง", text: "ระบุจำนวน" } }
        ];
        return replyQuickReply(replyToken, `👥 หารกับ: ${participants.join(', ')}\n➗ คิดเงินยังไงดี?`, actions);
    }

    // --- STEP 6: รับวิธีหาร -> จบงาน หรือ ถามยอดแยก ---
    if (currentStep === 'ASK_SPLIT_METHOD') {
        if (text.includes("ระบุ")) {
            // กรณีระบุเอง -> ไป Step พิเศษ
            await setDoc(sessionRef, { step: 'ASK_CUSTOM_AMOUNTS', data: { ...data, splitMethod: 'custom' } }, { merge: true });
            const participants = data.participants;
            // สร้างตัวอย่างให้ดู
            const example = participants.map(p => `${p}=100`).join(', ');
            return replyText(replyToken, `📝 พิมพ์ยอดของแต่ละคนมาเลยครับ\n(รูปแบบ: ชื่อ=ยอดเงิน, ชื่อ=ยอดเงิน)\n\nเช่น: ${example}`);
        } else {
            // กรณีหารเท่า -> บันทึกเลย
            return await saveTransaction(replyToken, userId, { ...data, splitMethod: 'equal' });
        }
    }

    // --- STEP 7: รับยอดแยก (Custom Amounts) -> บันทึก ---
    if (currentStep === 'ASK_CUSTOM_AMOUNTS') {
        return await saveTransaction(replyToken, userId, { ...data, customAmountStr: text });
    }
}

// --- HELPER FUNCTIONS ---

// ดึงชื่อสมาชิกทั้งหมดจาก DB เพื่อใช้ทำปุ่ม
async function getMemberNames() {
    const snap = await getDocs(collection(db, 'members'));
    if (snap.empty) return ["GAME", "CARE"]; // Fallback ถ้ายังไม่มีข้อมูล
    return snap.docs.map(d => d.data().name);
}

// ฟังก์ชันถามคนหาร (แยกออกมาเพราะใช้ซ้ำได้)
async function askParticipants(replyToken) {
    const members = await getMemberNames();
    // สร้างปุ่ม "ทุกคน" ไว้แรกสุด ตามด้วยชื่อสมาชิก (ตัดที่ 12 คนแรกเพราะ LINE Limit 13 ปุ่ม)
    const actions = [
        { type: "action", action: { type: "message", label: "ทุกคน (All)", text: "ทุกคน" } },
        ...members.slice(0, 12).map(m => ({ type: "action", action: { type: "message", label: m, text: m } }))
    ];
    return replyQuickReply(replyToken, "👥 หารกับใครบ้างครับ?\n(เลือก 'ทุกคน' หรือพิมพ์ชื่อเว้นวรรคได้เลย)", actions);
}

// ฟังก์ชันหัวใจสำคัญ: คำนวณและบันทึกข้อมูล
async function saveTransaction(replyToken, userId, finalData) {
    try {
        const batch = writeBatch(db);
        const today = new Date();
        const splits = {};
        
        // 1. คำนวณส่วนแบ่ง (Splits Logic)
        if (finalData.splitMethod === 'custom') {
            // แกะข้อความ Custom เช่น "Game=100, Care=200"
            const parts = finalData.customAmountStr.split(/[\s,]+/);
            let totalCustom = 0;
            parts.forEach(p => {
                const [name, val] = p.split('=');
                if(name && val) {
                    const n = name.trim().toUpperCase();
                    const v = parseFloat(val);
                    if (!isNaN(v)) {
                        splits[n] = v;
                        totalCustom += v;
                    }
                }
            });
            // เราอาจจะปรับ finalData.amount ให้เท่ากับยอดรวมที่ระบุมาจริงๆ เพื่อความเป๊ะ
            // finalData.amount = totalCustom; 
        } else {
            // หารเท่า (Equal Split)
            const share = finalData.amount / finalData.participants.length;
            finalData.participants.forEach(p => splits[p] = share);
        }

        // 2. เตรียมข้อมูลบันทึก (Transaction Logic)
        if (finalData.paymentType === 'installment') {
            // --- กรณีผ่อนชำระ (สร้างหลาย Transaction ล่วงหน้า) ---
            const installments = finalData.installments;
            const amountPerMonth = finalData.amount / installments;
            
            // ปรับส่วนแบ่งให้เป็นยอดต่อเดือน (Normalize Splits)
            const monthlySplits = {};
            for (let p in splits) {
                // (สัดส่วนเดิม / ยอดรวม) * ยอดต่อเดือน = สัดส่วนต่อเดือน
                monthlySplits[p] = (splits[p] / finalData.amount) * amountPerMonth;
            }

            for (let i = 0; i < installments; i++) {
                const nextDate = new Date();
                nextDate.setMonth(today.getMonth() + i);
                const y = nextDate.getFullYear();
                const mStr = String(nextDate.getMonth() + 1).padStart(2, '0');
                const dStr = String(nextDate.getDate()).padStart(2, '0');
                
                const newRef = doc(collection(db, "transactions"));
                batch.set(newRef, {
                    date: `${y}-${mStr}-${dStr}`,
                    desc: `${finalData.desc} (งวด ${i+1}/${installments})`,
                    amount: amountPerMonth,
                    payer: finalData.payer,
                    splits: monthlySplits,
                    paymentType: 'installment',
                    installments: installments,
                    timestamp: Date.now() + i // บวก i เพื่อให้ timestamp ไม่ซ้ำกันเป๊ะๆ
                });
            }
        } else {
            // --- กรณีจ่ายปกติ (สร้าง 1 Transaction) ---
            const newRef = doc(collection(db, "transactions"));
            batch.set(newRef, {
                date: today.toISOString().slice(0, 10), // YYYY-MM-DD
                desc: finalData.desc,
                amount: finalData.amount,
                payer: finalData.payer,
                splits: splits,
                paymentType: 'normal',
                timestamp: Date.now()
            });
        }

        // 3. Commit ลง DB และล้าง Session
        await batch.commit();
        await deleteDoc(doc(db, 'user_sessions', userId));

        // 4. แจ้งผลสำเร็จ
        let msg = `✅ บันทึกเรียบร้อย!\n📝 รายการ: ${finalData.desc}\n💰 ยอดรวม: ${finalData.amount.toLocaleString()} บ.\n👤 จ่ายโดย: ${finalData.payer}`;
        if (finalData.paymentType === 'installment') msg += `\n📅 (ผ่อนชำระ ${finalData.installments} งวด)`;
        
        return replyText(replyToken, msg);

    } catch (e) {
        console.error("Save Error", e);
        return replyText(replyToken, `❌ เกิดข้อผิดพลาดระบบ: ${e.message}\n(ลองพิมพ์ 'ยกเลิก' แล้วเริ่มใหม่นะครับ)`);
    }
}

// --- LINE API Helpers ---
// ส่งข้อความ Text ธรรมดา
async function replyText(replyToken, message) {
    const token = process.env.LINE_CHANNEL_ACCESS_TOKEN;
    await fetch('https://api.line.me/v2/bot/message/reply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ replyToken, messages: [{ type: 'text', text: message }] })
    });
}

// ส่งข้อความพร้อมปุ่มกด (Quick Reply)
async function replyQuickReply(replyToken, message, items) {
    const token = process.env.LINE_CHANNEL_ACCESS_TOKEN;
    await fetch('https://api.line.me/v2/bot/message/reply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({
            replyToken,
            messages: [{
                type: 'text',
                text: message,
                quickReply: { items: items }
            }]
        })
    });
}
