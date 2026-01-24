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

// Verify slip with SlipOK API
export async function verifySlipWithSlipOK(imageBuffer, expectedAmount = null) {
    try {
        // Import form-data dynamically
        const formDataModule = await import('form-data');
        const FormData = formDataModule.default || formDataModule;
        const formData = new FormData();

        formData.append('files', imageBuffer, {
            filename: 'slip.jpg',
            contentType: 'image/jpeg'
        });

        if (expectedAmount) {
            formData.append('amount', expectedAmount);
        }

        formData.append('log', 'false');

        const response = await fetch(SLIPOK_API_URL, {
            method: 'POST',
            headers: {
                'x-authorization': SLIPOK_API_KEY,
                ...formData.getHeaders()
            },
            body: formData
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
            .replace(/นาย|นาง|นางสาว|MR|MRS|MISS|MS|MR\.|MRS\.|MISS\.|MS\./gi, '')
            .replace(/[^A-Z0-9ก-๙]/g, '');
    };

    const realNameNorm = normalize(realName);

    // Try displayName
    const displayNameNorm = normalize(slipReceiver.displayName);
    if (displayNameNorm.includes(realNameNorm) || realNameNorm.includes(displayNameNorm)) {
        return {
            matched: true,
            field: 'displayName',
            confidence: 0.95
        };
    }

    // Try name
    const nameNorm = normalize(slipReceiver.name);
    if (nameNorm.includes(realNameNorm) || realNameNorm.includes(nameNorm)) {
        return {
            matched: true,
            field: 'name',
            confidence: 0.90
        };
    }

    // No match
    return {
        matched: false,
        field: null,
        confidence: 0
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
            contents: [
                {
                    type: 'text',
                    text: '✅ ยืนยันการโอนเงินสำเร็จ',
                    weight: 'bold',
                    color: '#ffffff',
                    size: 'sm'
                }
            ],
            backgroundColor: '#10b981',
            paddingAll: '15px'
        },
        body: {
            type: 'box',
            layout: 'vertical',
            contents: [
                {
                    type: 'text',
                    text: 'ข้อมูลการโอนเงิน',
                    weight: 'bold',
                    size: 'lg',
                    margin: 'none'
                },
                {
                    type: 'box',
                    layout: 'vertical',
                    margin: 'lg',
                    spacing: 'sm',
                    contents: [
                        {
                            type: 'box',
                            layout: 'baseline',
                            spacing: 'sm',
                            contents: [
                                {
                                    type: 'text',
                                    text: 'จำนวนเงิน',
                                    color: '#aaaaaa',
                                    size: 'sm',
                                    flex: 2
                                },
                                {
                                    type: 'text',
                                    text: `${slip.amount.toLocaleString()} บาท`,
                                    wrap: true,
                                    color: '#10b981',
                                    size: 'md',
                                    weight: 'bold',
                                    flex: 3
                                }
                            ]
                        },
                        {
                            type: 'box',
                            layout: 'baseline',
                            spacing: 'sm',
                            contents: [
                                {
                                    type: 'text',
                                    text: 'ผู้โอน',
                                    color: '#aaaaaa',
                                    size: 'sm',
                                    flex: 2
                                },
                                {
                                    type: 'text',
                                    text: slip.sender.displayName,
                                    wrap: true,
                                    color: '#666666',
                                    size: 'sm',
                                    flex: 3
                                }
                            ]
                        },
                        {
                            type: 'box',
                            layout: 'baseline',
                            spacing: 'sm',
                            contents: [
                                {
                                    type: 'text',
                                    text: 'ผู้รับ',
                                    color: '#aaaaaa',
                                    size: 'sm',
                                    flex: 2
                                },
                                {
                                    type: 'text',
                                    text: slip.receiver.displayName,
                                    wrap: true,
                                    color: '#666666',
                                    size: 'sm',
                                    flex: 3
                                }
                            ]
                        },
                        {
                            type: 'box',
                            layout: 'baseline',
                            spacing: 'sm',
                            contents: [
                                {
                                    type: 'text',
                                    text: 'วันที่',
                                    color: '#aaaaaa',
                                    size: 'sm',
                                    flex: 2
                                },
                                {
                                    type: 'text',
                                    text: formatSlipDate(slip.transDate),
                                    wrap: true,
                                    color: '#666666',
                                    size: 'sm',
                                    flex: 3
                                }
                            ]
                        },
                        {
                            type: 'box',
                            layout: 'baseline',
                            spacing: 'sm',
                            contents: [
                                {
                                    type: 'text',
                                    text: 'เวลา',
                                    color: '#aaaaaa',
                                    size: 'sm',
                                    flex: 2
                                },
                                {
                                    type: 'text',
                                    text: slip.transTime,
                                    wrap: true,
                                    color: '#666666',
                                    size: 'sm',
                                    flex: 3
                                }
                            ]
                        }
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
