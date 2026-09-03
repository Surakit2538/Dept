export default async function handler(req, res) {
    // 1. อนุญาตเฉพาะ Method POST
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        const { month, debts, targetUsers } = req.body;
        const CHANNEL_ACCESS_TOKEN = process.env.LINE_CHANNEL_ACCESS_TOKEN;
        const TARGET_ID = process.env.LINE_GROUP_ID; // ถ้ามีค่านี้จะส่งหาคน/กลุ่มนี้

        if (!CHANNEL_ACCESS_TOKEN) {
            console.error("Missing LINE_CHANNEL_ACCESS_TOKEN");
            return res.status(500).json({ message: 'Server Config Error' });
        }

        if (!debts || debts.length === 0) {
            return res.status(400).json({ message: 'No debts to report' });
        }

        // Helper function to create Flex Message
        const createFlexMessage = (month, displayDebts, headerTitleText = "ADMIN REPORT") => {
            const debtRows = displayDebts.map((d, index) => ({
                type: "box",
                layout: "horizontal",
                margin: "md",
                contents: [
                    {
                        type: "text",
                        text: `${index + 1}. ${d.from}`,
                        size: "sm",
                        color: "#555555",
                        flex: 3
                    },
                    {
                        type: "text",
                        text: "➡️",
                        size: "sm",
                        color: "#aaaaaa",
                        align: "center",
                        flex: 1
                    },
                    {
                        type: "text",
                        text: d.to,
                        size: "sm",
                        color: "#555555",
                        align: "center",
                        flex: 3
                    },
                    {
                        type: "text",
                        text: `${d.amount.toLocaleString()} ฿`,
                        size: "sm",
                        color: "#111111",
                        weight: "bold",
                        align: "end",
                        flex: 3
                    }
                ]
            }));

            return {
                type: "flex",
                altText: `สรุปยอดเคลียร์เงินเดือน ${month}`, // ข้อความที่ขึ้นแจ้งเตือนก่อนกดเข้ามาดู
                contents: {
                    type: "bubble",
                    size: "giga",
                    header: {
                        type: "box",
                        layout: "vertical",
                        backgroundColor: "#334155",
                        contents: [
                            {
                                type: "text",
                                text: headerTitleText,
                                color: "#94a3b8",
                                size: "xxs",
                                weight: "bold"
                            },
                            {
                                type: "text",
                                text: "สรุปยอดเคลียร์เงิน 💸",
                                weight: "bold",
                                size: "lg",
                                color: "#ffffff",
                                margin: "xs"
                            },
                            {
                                type: "text",
                                text: `ประจำเดือน: ${month}`,
                                size: "xs",
                                color: "#cbd5e1"
                            }
                        ]
                    },
                    body: {
                        type: "box",
                        layout: "vertical",
                        contents: [
                            {
                                type: "text",
                                text: "รายการที่ต้องโอน",
                                weight: "bold",
                                size: "sm",
                                color: "#333333",
                                margin: "md"
                            },
                            {
                                type: "separator",
                                margin: "md",
                                color: "#f0f0f0"
                            },
                            // ใส่รายการหนี้ที่สร้างไว้ข้างบน
                            ...debtRows,
                            {
                                type: "separator",
                                margin: "xl",
                                color: "#f0f0f0"
                            }
                        ]
                    },
                    footer: {
                        type: "box",
                        layout: "vertical",
                        contents: [
                            {
                                type: "text",
                                text: "กรุณาตรวจสอบและโอนเงินให้เรียบร้อย",
                                size: "xxs",
                                color: "#aaaaaa",
                                align: "center"
                            },
                            {
                                type: "button",
                                action: {
                                    type: "uri",
                                    label: "เปิดแอป Dept Money",
                                    uri: "https://dept-game.vercel.app/" // เปลี่ยนเป็น URL เว็บของคุณ
                                },
                                style: "primary",
                                color: "#15803d",
                                margin: "md"
                            }
                        ]
                    }
                }
            };
        };

        let messagesSent = 0;

        if (targetUsers && Array.isArray(targetUsers) && targetUsers.length > 0) {
            // Send to specific users
            const sendPromises = targetUsers.map(async (user) => {
                // Filter debts for this user
                const userDebts = debts.filter(d => d.from === user.name);
                
                if (userDebts.length === 0) return true; // Skip if no debts for this user
                
                const flexMsg = createFlexMessage(month, userDebts, "สรุปยอดค้างชำระของคุณ");
                
                const lineRes = await fetch('https://api.line.me/v2/bot/message/push', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${CHANNEL_ACCESS_TOKEN}`
                    },
                    body: JSON.stringify({
                        to: user.userId,
                        messages: [flexMsg]
                    })
                });
                
                if (!lineRes.ok) {
                    const errorText = await lineRes.text();
                    console.error(`LINE API Error for user ${user.userId}:`, errorText);
                    throw new Error(`Failed to send to user ${user.userId}`);
                }
                
                messagesSent++;
                return true;
            });
            
            await Promise.all(sendPromises);
            
            return res.status(200).json({ success: true, message: 'Notifications sent!', sent: messagesSent });
        } else {
            // Group fallback
            if (!TARGET_ID) {
                // Return error if no group ID and no targetUsers, preventing broadcast
                return res.status(400).json({ message: 'No target users provided and LINE_GROUP_ID is not configured' });
            }

            const flexMessage = createFlexMessage(month, debts);
            
            const lineRes = await fetch('https://api.line.me/v2/bot/message/push', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${CHANNEL_ACCESS_TOKEN}`
                },
                body: JSON.stringify({
                    to: TARGET_ID,
                    messages: [flexMessage]
                })
            });

            if (!lineRes.ok) {
                const errorText = await lineRes.text();
                console.error("LINE API Error:", errorText);
                return res.status(500).json({ message: 'Failed to send to LINE', error: errorText });
            }

            messagesSent = 1;
            return res.status(200).json({ success: true, message: 'Notification sent!', sent: messagesSent });
        }

    } catch (error) {
        console.error("Handler Error:", error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}

