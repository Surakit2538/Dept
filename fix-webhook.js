const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'api', 'webhook.js');
let content = fs.readFileSync(filePath, 'utf8');

// Fix line 129 - replace broken template literal with simple string concatenation
const oldLine = 'const flex = createInteractiveCard("ใครเป็นคนจ่าย?", `ผ่อน ${ installments } เดือน(${(data.amount / installments).toLocaleString()} ฿/เดือน) "`);';
const newLines = `const monthlyAmt = (data.amount / installments).toLocaleString();
        const flexMsg = "ผ่อน " + installments + " เดือน (" + monthlyAmt + " บาท/เดือน)";
        const flex = createInteractiveCard("ใครเป็นคนจ่าย?", flexMsg);`;

content = content.replace(oldLine, newLines);

fs.writeFileSync(filePath, content, 'utf8');
console.log('✅ Fixed line 129 successfully!');
