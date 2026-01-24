
const { matchReceiverName } = require('./api/slipok-helpers.js');

// Test Case from User Image
const slipReceiver = { displayName: 'น.ส. เพ็ญพิชชา เตชะเวชไพศาล', name: 'PENPITCHA TACHAVEJPAISARN' };
const databaseName = 'เพ็ญพิชชา เตชะเวชไพศาล'; // Assuming this is what's in DB

console.log('Testing match...');
const result = matchReceiverName(slipReceiver, databaseName);
console.log('Result:', result);

function normalize(str) {
    if (!str) return '';
    return str.replace(/นาย|นาง|นางสาว|MR|MRS|MISS|MS|MR\.|MRS\.|MISS\.|MS\./gi, '')
        .replace(/[^A-Z0-9ก-๙]/g, '');
}

console.log('Normalized Slip:', normalize(slipReceiver.displayName));
console.log('Normalized DB:', normalize(databaseName));
