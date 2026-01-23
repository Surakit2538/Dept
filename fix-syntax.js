const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'api', 'webhook.js');
let content = fs.readFileSync(filePath, 'utf8');

// Fix line 117 - remove extra closing quote
content = content.replace(
    'const flex = createInteractiveCard("ใครเป็นคนจ่าย?", `ยอดเงิน ${data.amount.toLocaleString()} บาท (จ่ายเต็ม)");',
    'const flex = createInteractiveCard("ใครเป็นคนจ่าย?", `ยอดเงิน ${data.amount.toLocaleString()} บาท (จ่ายเต็ม)` );'
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('✅ Fixed syntax error on line 117!');
