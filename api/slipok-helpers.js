// Helper functions for SlipOK API integration

const SLIPOK_API_URL = 'https://api.slipok.com/api/line/apikey/59702';
const SLIPOK_API_KEY = 'SLIPOK4D5KB1A';

// Get image content from LINE
export async function getImageContent(messageId) {
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

// Verify slip with SlipOK API (Using native FormData without form-data package)
export async function verifySlipWithSlipOK(imageBuffer, expectedAmount = null) {
    try {
        // Create boundary for multipart/form-data
        const boundary = '----WebKitFormBoundary' + Math.random().toString(36).substring(2);

        // Build multipart body manually
        const parts = [];

        // Add file part
        parts.push(`--${boundary}\r\n`);
        parts.push(`Content-Disposition: form-data; name="files"; filename="slip.jpg"\r\n`);
        parts.push(`Content-Type: image/jpeg\r\n\r\n`);

        // Convert buffer to array for concatenation
        const fileData = new Uint8Array(imageBuffer);

        // Add amount if provided
        let amountPart = '';
        if (expectedAmount) {
            amountPart = `\r\n--${boundary}\r\nContent-Disposition: form-data; name="amount"\r\n\r\n${expectedAmount}`;
        }

        const endBoundary = `\r\n--${boundary}--\r\n`;

        // Combine all parts
        const headerText = parts.join('');
        const headerBuffer = new TextEncoder().encode(headerText);
        const amountBuffer = new TextEncoder().encode(amountPart);
        const endBuffer = new TextEncoder().encode(endBoundary);

        // Calculate total length
        const totalLength = headerBuffer.length + fileData.length + amountBuffer.length + endBuffer.length;

        // Create final buffer
        const body = new Uint8Array(totalLength);
        let offset = 0;

        body.set(headerBuffer, offset);
        offset += headerBuffer.length;

        body.set(fileData, offset);
        offset += fileData.length;

        body.set(amountBuffer, offset);
        offset += amountBuffer.length;

        body.set(endBuffer, offset);

        const response = await fetch(SLIPOK_API_URL, {
            method: 'POST',
            headers: {
                'x-authorization': SLIPOK_API_KEY,
                'Content-Type': `multipart/form-data; boundary=${boundary}`
            },
            body: body
        });

        const result = await response.json();

        if (!response.ok) {
            return {
                success: false,
                code: result.code,
                message: result.message
            };
        }

        return result;

    } catch (error) {
        console.error('SlipOK API Error:', error);
        return {
            success: false,
            message: 'ไม่สามารถเชื่อมต่อกับ SlipOK API ได้'
        };
    }
}

// Match receiver name
export function matchReceiverName(slipReceiver, realName) {
    const normalize = (str) => {
        if (!str) return '';
        return str.toUpperCase()
            // Remove titles (Full & Abbr)
            .replace(/^(นาย|นาง|นางสาว|ด\.ช\.|ด\.ญ\.|เด็กชาย|เด็กหญิง|น\.ส\.|น\.ส|MR\.|MRS\.|MISS\.|MS\.|MR|MRS|MISS|MS)(\s+)?/gi, '')
            // Remove common business prefixes
            .replace(/^(บจก\.|บมจ\.|หจก\.|บริษัท|ห้างหุ้นส่วนจำกัด)(\s+)?/gi, '')
            // Keep only Thai/English chars and digits
            .replace(/[^A-Z0-9ก-๙]/g, '');
    };

    const realNameNorm = normalize(realName);

    // Try displayName
    const displayNameNorm = normalize(slipReceiver.displayName);
    if (displayNameNorm.includes(realNameNorm) || realNameNorm.includes(displayNameNorm)) {
        return { matched: true, field: 'displayName', confidence: 0.95, debug: { slip: displayNameNorm, db: realNameNorm } };
    }

    // Try name
    const nameNorm = normalize(slipReceiver.name);
    if (nameNorm.includes(realNameNorm) || realNameNorm.includes(nameNorm)) {
        return { matched: true, field: 'name', confidence: 0.90, debug: { slip: nameNorm, db: realNameNorm } };
    }

    // No match
    return {
        matched: false,
        field: null,
        confidence: 0,
        debug: {
            slipDisplay: displayNameNorm,
            slipName: nameNorm,
            db: realNameNorm
        }
    };
}

// Get slip error message
export function getSlipErrorMessage(code) {
    const errorMessages = {
        1001: 'ไม่พบข้อมูลในสลิป',
        1007: 'ไม่พบ QR Code ในรูป',
        1012: 'สลิปนี้เคยถูกใช้ยืนยันแล้ว',
        1013: 'จำนวนเงินไม่ตรงกับที่คาดหวัง',
        1014: 'ผู้รับเงินไม่ตรงกัน',
        2001: 'API Key ไม่ถูกต้อง',
        2002: 'หมดโควต้าการใช้งาน'
    };

    return errorMessages[code] || 'เกิดข้อผิดพลาดในการตรวจสอบสลิป';
}

// Create slip success Flex Message
export function createSlipSuccessMessage(slip, settlement) {
    return {
        type: 'bubble',
        size: 'kilo',
        header: {
            type: 'box',
            layout: 'vertical',
            backgroundColor: '#334155',
            contents: [
                {
                    type: 'text',
                    text: 'TRANSFER SUCCESS',
                    color: '#94a3b8',
                    size: 'xxs',
                    weight: 'bold'
                },
                {
                    type: 'text',
                    text: '✅ ยืนยันการโอนสำเร็จ',
                    weight: 'bold',
                    color: '#ffffff',
                    size: 'lg',
                    margin: 'xs'
                },
                {
                    type: 'text',
                    text: 'ข้อมูลการโอนเงินชำระหนี้',
                    color: '#cbd5e1',
                    size: 'xs'
                }
            ]
        },
        body: {
            type: 'box',
            layout: 'vertical',
            contents: [
                {
                    type: "box", layout: "horizontal",
                    contents: [
                        { type: "text", text: "จำนวนเงิน", size: "xs", color: "#64748b" },
                        { type: "text", text: `${(typeof slip.amount === 'number' ? slip.amount : (slip.amount?.amount || 0)).toLocaleString()} ฿`, size: "sm", color: "#10b981", align: "end", weight: "bold" }
                    ]
                },
                { type: "separator", margin: "md" },
                {
                    type: "box", layout: "horizontal", margin: "md",
                    contents: [
                        { type: "text", text: "ผู้โอน", size: "xs", color: "#64748b", flex: 1 },
                        { type: "text", text: slip.sender.displayName, size: "sm", color: "#1e293b", align: "end", weight: "bold", wrap: true, flex: 3 }
                    ]
                },
                {
                    type: "box", layout: "horizontal", margin: "sm",
                    contents: [
                        { type: "text", text: "ผู้รับ", size: "xs", color: "#64748b", flex: 1 },
                        { type: "text", text: slip.receiver.displayName, size: "sm", color: "#1e293b", align: "end", weight: "bold", wrap: true, flex: 3 }
                    ]
                },
                {
                    type: "box", layout: "horizontal", margin: "sm",
                    contents: [
                        { type: "text", text: "วันที่", size: "xs", color: "#64748b" },
                        { type: "text", text: formatSlipDate(slip.transDate), size: "sm", color: "#1e293b", align: "end", weight: "bold" }
                    ]
                },
                {
                    type: "box", layout: "horizontal", margin: "sm",
                    contents: [
                        { type: "text", text: "เวลา", size: "xs", color: "#64748b" },
                        { type: "text", text: slip.transTime, size: "sm", color: "#1e293b", align: "end", weight: "bold" }
                    ]
                }
            ]
        }
    };
}

function formatSlipDate(dateStr) {
    // dateStr = "20260124"
    const year = parseInt(dateStr.substring(0, 4));
    const month = parseInt(dateStr.substring(4, 6));
    const day = parseInt(dateStr.substring(6, 8));

    const thaiMonths = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.',
        'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];

    return `${day} ${thaiMonths[month - 1]} ${year + 543}`;
}
