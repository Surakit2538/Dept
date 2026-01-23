const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'api', 'webhook.js');
let content = fs.readFileSync(filePath, 'utf8');

//  Just insert the new lines before the problematic line
const marker = 'const flex = createInteractiveCard("ใครเป็นคนจ่าย?",';

if (content.includes(marker)) {
    // Find all occurrences
    const lines = content.split('\n');
    let newLines = [];
    let fixed = false;

    for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes(marker) && lines[i].includes('installments }') && !fixed) {
            // Found the problematic line - replace it
            const indent = '        ';
            newLines.push(indent + 'const monthlyAmt = (data.amount / installments).toLocaleString();');
            newLines.push(indent + 'const flexMsg = "ผ่อน " + installments + " เดือน (" + monthlyAmt + " บาท/เดือน)";');
            newLines.push(indent + 'const flex = createInteractiveCard("ใครเป็นคนจ่าย?", flexMsg);');
            fixed = true;
        } else {
            newLines.push(lines[i]);
        }
    }

    content = newLines.join('\n');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('✅ Fixed successfully!');
} else {
    console.log('❌ Marker not found');
}
