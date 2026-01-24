// Updated handleImageMessage for webhook.js
// Copy this function to replace the existing handleImageMessage in webhook.js

async function handleImageMessage(event) {
    const userId = event.source.userId;
    const replyToken = event.replyToken;
    const messageId = event.message.id;

    try {
        // 1. ดึงรูปภาพจาก LINE
        const imageBuffer = await getImageContent(messageId);

        if (!imageBuffer) {
            return replyText(replyToken, "❌ ไม่สามารถดึงรูปภาพได้ กรุณาลองใหม่อีกครั้ง");
        }

        // 2. ตรวจสอบว่า user มีข้อมูลสมาชิกหรือไม่
        const userMember = await getMemberByLineId(db, userId);

        if (!userMember) {
            return replyText(replyToken, "❌ ไม่พบข้อมูลสมาชิก กรุณาลงทะเบียนก่อนใช้งาน");
        }

        // 3. ส่งรูปไปตรวจสอบกับ SlipOK API
        await replyText(replyToken, "🔍 กำลังตรวจสอบสลิป...");

        const slipData = await verifySlipWithSlipOK(imageBuffer);

        if (!slipData.success) {
            const errorMsg = getSlipErrorMessage(slipData.code);
            return pushMessage(userId, `❌ ${errorMsg}\n\nรหัสข้อผิดพลาด: ${slipData.code || 'Unknown'}`);
        }

        const slip = slipData.data;

        // 4. หา Settlement ที่ตรงกับจำนวนเงินในสลิป
        const currentMonth = new Date().toISOString().slice(0, 7);
        const matchingSettlement = await findMatchingSettlement(db, userMember.name, slip.amount, currentMonth);

        if (!matchingSettlement) {
            return pushMessage(userId,
                `⚠️ ไม่พบรายการ Settlement ที่ตรงกับจำนวนเงิน ${slip.amount.toLocaleString()} บาท\n\n` +
                `กรุณาตรวจสอบว่าคุณมีรายการที่ต้องชำระจำนวนนี้หรือไม่`
            );
        }

        // 5. ตรวจสอบชื่อผู้รับ
        const receiver = await getMemberByName(db, matchingSettlement.to);

        if (!receiver || !receiver.realName) {
            return pushMessage(userId,
                `⚠️ ผู้รับ (${matchingSettlement.to}) ยังไม่ได้ตั้งค่าชื่อจริง\n` +
                `กรุณาแจ้งให้ตั้งค่าในหน้า Settings ก่อน`
            );
        }

        const matchResult = matchReceiverName(slip.receiver, receiver.realName);

        if (!matchResult.matched) {
            return pushMessage(userId,
                `❌ ชื่อผู้รับไม่ตรงกัน\n\n` +
                `🎯 คาดหวัง: ${receiver.realName}\n` +
                `📄 ในสลิป: ${slip.receiver.displayName}\n\n` +
                `กรุณาตรวจสอบว่าโอนให้ถูกคนหรือไม่`
            );
        }

        // 6. เช็คสลิปซ้ำ
        const isDuplicate = await checkDuplicateSlip(db, slip.transRef);

        if (isDuplicate) {
            return pushMessage(userId, "⚠️ สลิปนี้เคยใช้ยืนยันการโอนเงินแล้ว");
        }

        // 7. บันทึกข้อมูลใน Firestore
        await saveVerifiedSettlement(db, matchingSettlement, slip, userMember.name, matchResult);

        // 8. ส่ง LINE notification ให้ผู้รับ
        if (receiver.lineUserId) {
            await sendSlipVerifiedNotification(
                receiver.lineUserId,
                userMember.name,
                matchingSettlement.to,
                slip.amount,
                slip
            );
        }

        // 9. ส่ง Success Message
        const successFlex = createSlipSuccessMessage(slip, matchingSettlement);
        return pushFlex(userId, "✅ ยืนยันการโอนเงินสำเร็จ", successFlex);

    } catch (error) {
        console.error("Error in handleImageMessage:", error);
        return pushMessage(userId, "❌ เกิดข้อผิดพลาด: " + error.message);
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
