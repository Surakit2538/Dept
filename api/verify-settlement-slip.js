import { getDbInstance } from "./auth-helpers.js";
import * as fsModule from "./auth-helpers.js";
import { createLineIdAuthenticator } from "../lib/line-auth.mjs";
import { verifySlipWithSlipOK, matchReceiverName, getSlipErrorMessage } from './slipok-helpers.js';
import { 
    getMemberByName as getMemberByNameHelper, 
    findSettlementForSlip,
    checkDuplicateSlip, 
    saveVerifiedSettlement, 
    sendSlipVerifiedNotification 
} from './firestore-helpers.js';

const db = getDbInstance();
const authenticateIdToken = createLineIdAuthenticator({
    db,
    fs: fsModule,
    channelId: process.env.LINE_LOGIN_CHANNEL_ID || "2008948704"
});

export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ success: false, message: 'Method Not Allowed' });

    try {
        // ต้องล็อกอินด้วย LINE: ผู้โอนคือสมาชิกที่ล็อกอินอยู่ ไม่เชื่อชื่อที่ส่งมาจากหน้าเว็บ (กันแอบอ้างเป็นคนอื่น)
        const auth = await authenticateIdToken(req.body && req.body.idToken);
        if (!auth.authenticated) return res.status(auth.status || 401).json({ success: false, message: auth.message });
        const from = auth.name;

        const { base64Image } = req.body;

        if (!base64Image) {
            return res.status(400).json({ success: false, message: 'ไม่พบไฟล์รูปภาพสลิป หรือไฟล์ใหญ่เกินส่งผ่านระบบได้' });
        }

        // 1. แปลงสตริง Base64 กลับเป็น Buffer (รูปภาพ)
        const imageBuffer = Buffer.from(base64Image, 'base64');

        // 2. เรียกใช้ SlipOK API โดยส่ง Buffer
        const slipDataResult = await verifySlipWithSlipOK(imageBuffer);

        if (!slipDataResult.success) {
            const errorMsg = getSlipErrorMessage(slipDataResult.code, slipDataResult.message);
            return res.status(400).json({ success: false, message: `SlipOK แจ้งว่า: ${errorMsg}` });
        }

        const slip = slipDataResult.data;

        // 3. ตรวจสอบข้อมูลสลิป (ยอดเงิน)
        const slipAmount = typeof slip.amount === 'number' ? slip.amount : (slip.amount?.amount || 0);

        if (!slipAmount || slipAmount <= 0) {
            return res.status(400).json({ 
                success: false, 
                message: '❌ ไม่สามารถอ่านยอดเงินจากสลิปได้แบบแน่ชัด' 
            });
        }

        // 4. หา Settlement ที่ตรงประเด็น (ยอด และ ผู้โอน และ เดือน)
        const matchOutcome = await findSettlementForSlip(db, from, slipAmount, slip.receiver);
        const matchingSettlement = matchOutcome.ok ? matchOutcome.settlement : null;

        if (!matchingSettlement) {
            let message = `⚠️ ยอดเงินในสลิป (${slipAmount}) ไม่ถูกจับคู่กับรายการค้างชำระของ ${from}`;
            if (matchOutcome.reason === 'no_debt') message = `ℹ️ ${from} ไม่มียอดค้างชำระที่ต้องโอนให้เพื่อนในตอนนี้`;
            if (matchOutcome.reason === 'overpay') message = `⚠️ ยอดในสลิป (${slipAmount} บาท) มากกว่ายอดที่ ${from} ค้างชำระ (สูงสุด ${matchOutcome.owed} บาท)`;
            return res.status(400).json({ success: false, message });
        }

        // 5. ตรวจสอบชื่อผู้รับโอนบัญชี
        const receiver = await getMemberByNameHelper(db, matchingSettlement.to);
        if (!receiver || !receiver.realName) {
            return res.status(400).json({
                success: false,
                message: `⚠️ ผู้รับ (${matchingSettlement.to}) ยังไม่ได้ตั้งค่าชื่อจริงในระบบ กรุณาแจ้งให้พวกเขาตัังค่าชื่อจริงก่อน`
            });
        }

        const matchResult = matchReceiverName(slip.receiver, receiver.realName);
        if (!matchResult.matched) {
            return res.status(400).json({
                success: false,
                message: `❌ ชื่อบัญชีผู้รับเงินสลิปไม่ตรงกัน!\nพบหน้าจอ: ${slip.receiver.displayName || slip.receiver.name}\nตั้งไว้ในระบบเป็น: ${receiver.realName}`
            });
        }

        // 6. ตรวจสอบสลิปซ้ำ (เคยอัปโหลดเข้าระบบหรือยัง)
        const isDuplicate = await checkDuplicateSlip(db, slip.transRef);
        if (isDuplicate) {
            return res.status(400).json({ success: false, message: '⚠️ สลิปใบนี้เคยถูกยืนยันการเคลียร์หนี้เข้าระบบไปแล้วครับ' });
        }

        // 7. บันทึกเข้าระบบ
        await saveVerifiedSettlement(db, matchingSettlement, slip, from, matchResult);

        // 8. แจ้งเตือนผู้รับผ่าน LINE (ถ้าระบุ)
        if (receiver.lineUserId) {
            await sendSlipVerifiedNotification(
                receiver.lineUserId,
                from,
                receiver.name,
                slipAmount,
                slip
            );
        }

        // 9. สำเร็จ คืนค่าไปให้หน้าเว็บแสดงผล Modal ล้ำๆ
        return res.status(200).json({
            success: true,
            slip: slip,
            partial: Boolean(matchingSettlement.partial),
            remaining: matchingSettlement.partial ? matchingSettlement.remaining : 0
        });

    } catch (error) {
        console.error('API Verification Error:', error);
        return res.status(500).json({ success: false, message: 'เกิดข้อผิดพลาดภายในเซิร์ฟเวอร์: ' + error.message });
    }
}
