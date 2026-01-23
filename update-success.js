const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'api', 'webhook.js');
let content = fs.readFileSync(filePath, 'utf8');

// Find and replace createSuccessBubble function
const startMarker = 'function createSuccessBubble(data, totalAmount, installments) {';
const endMarker = 'function createSettlementBubble(name, month, transfers, receivables) {';

const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker);

if (startIdx === -1 || endIdx === -1) {
    console.log('❌ Markers not found');
    process.exit(1);
}

const newFunction = `function createSuccessBubble(data, totalAmount, installments) {
    // Build detail rows with icons
    const details = [
        {
            type: "box",
            layout: "horizontal",
            contents: [
                { type: "text", text: "📝", size: "md", flex: 0 },
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
                    text: totalAmount.toLocaleString() + " บาท",
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
                { type: "text", text: "📅", size: "md", flex: 0 },
                { type: "text", text: "รูปแบบ:", size: "sm", color: "#64748b", margin: "sm", flex: 2 },
                { type: "text", text: "ผ่อน " + installments + " เดือน", size: "sm", weight: "bold", color: "#1e293b", flex: 3, wrap: true }
            ],
            margin: "sm"
        });
    }

    // Payer
    details.push({
        type: "box",
        layout: "horizontal",
        contents: [
            { type: "text", text: "💳", size: "md", flex: 0 },
            { type: "text", text: "คนจ่าย:", size: "sm", color: "#64748b", margin: "sm", flex: 2 },
            { type: "text", text: data.payer, size: "sm", weight: "bold", color: "#1e293b", flex: 3 }
        ],
        margin: "sm"
    });

    // Participants
    details.push({
        type: "box",
        layout: "horizontal",
        contents: [
            { type: "text", text: "👥", size: "md", flex: 0 },
            { type: "text", text: "คนหาร:", size: "sm", color: "#64748b", margin: "sm", flex: 2 },
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
                    text: "✅ บันทึกสำเร็จ!",
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
                    action: { type: "uri", label: "ดูประวัติในเว็บ →", uri: "https://dept-three.vercel.app/" },
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
console.log('✅ createSuccessBubble updated successfully!');
