export default async function handler(req, res) {
    // 1. อนุญาตเฉพาะ Method POST
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        const { month, debts } = req.body;
        const CHANNEL_ACCESS_TOKEN = process.env.LINE_CHANNEL_ACCESS_TOKEN;
        const TARGET_ID = process.env.LINE_GROUP_ID; // ถ้ามีค่านี้จะส่งหาคน/กลุ่มนี้ ถ้าไม่มีจะ Broadcast

        if (!CHANNEL_ACCESS_TOKEN) {
            console.error("Missing LINE_CHANNEL_ACCESS_TOKEN");
            return res.status(500).json({ message: 'Server Config Error' });
        }

        if (!debts || debts.length === 0) {
            return res.status(400).json({ message: 'No debts to report' });
        }

        // 2. สร้างส่วนรายการหนี้ (Rows) สำหรับ Flex Message
        const debtRows = debts.map((d, index) => ({
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

        // 3. ประกอบร่าง Flex Message (JSON Template)
        const flexMessage = {
            type: "flex",
            altText: `สรุปยอดเคลียร์เงินเดือน ${month}`, // ข้อความที่ขึ้นแจ้งเตือนก่อนกดเข้ามาดู
            contents: {
                type: "bubble",
                size: "giga",
                header: {
                    type: "box",
                    layout: "vertical",
                    backgroundColor: "#f0fdf4",
                    paddingAll: "xl",
                    contents: [
                        {
                            type: "text",
                            text: "ADMIN REPORT",
                            color: "#166534",
                            size: "xxs",
                            weight: "bold"
                        },
                        {
                            type: "text",
                            text: "สรุปยอดเคลียร์เงิน 💸",
                            weight: "bold",
                            size: "xl",
                            color: "#15803d",
                            margin: "xs"
                        },
                        {
                            type: "text",
                            text: `ประจำเดือน: ${month}`,
                            size: "xs",
                            color: "#86efac",
                            margin: "xs"
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
                                uri: "https://deptmoney-6682a.vercel.app/" // เปลี่ยนเป็น URL เว็บของคุณ
                            },
                            style: "primary",
                            color: "#15803d",
                            margin: "md"
                        }
                    ]
                }
            }
        };

        // 4. เลือกวิธียิง API (Broadcast หรือ Push)
        let apiUrl = 'https://api.line.me/v2/bot/message/broadcast'; // ค่าเริ่มต้น: ส่งหาทุกคน
        let bodyPayload = { messages: [flexMessage] };

        // ถ้ามี Target ID (User ID หรือ Group ID) ให้เปลี่ยนเป็น Push Message
        if (TARGET_ID) {
            apiUrl = 'https://api.line.me/v2/bot/message/push';
            bodyPayload = {
                to: TARGET_ID,
                messages: [flexMessage]
            };
        }

        // 5. ส่งข้อมูลไปหา LINE
        const lineRes = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${CHANNEL_ACCESS_TOKEN}`
            },
            body: JSON.stringify(bodyPayload)
        });

        if (!lineRes.ok) {
            const errorText = await lineRes.text();
            console.error("LINE API Error:", errorText);
            return res.status(500).json({ message: 'Failed to send to LINE', error: errorText });
        }

        return res.status(200).json({ success: true, message: 'Notification sent!' });

    } catch (error) {
        console.error("Handler Error:", error);
        return res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}
