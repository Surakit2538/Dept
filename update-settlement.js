const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'api', 'webhook.js');
let content = fs.readFileSync(filePath, 'utf8');

// Find and replace createSettlementBubble function
const startMarker = 'function createSettlementBubble(name, month, transfers, receivables) {';
const endMarker = 'async function sendToLine(replyToken, payload) {';

const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);

if (startIdx === -1 || endIdx === -1) {
    console.log('❌ Markers not found');
    process.exit(1);
}

const newFunction = `function createSettlementBubble(name, month, transfers, receivables) {
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

`;

const before = content.substring(0, startIdx);
const after = content.substring(endIdx);

content = before + newFunction + after;

fs.writeFileSync(filePath, content, 'utf8');
console.log('✅ createSettlementBubble updated successfully!');
