
import { matchReceiverName } from './slipok-helpers.js';

// Test Case from User
const slipReceiver = { displayName: 'น.ส. เพ็ญพิชชา เตชะเวชไพศาล', name: 'PENPITCHA TACHAVEJPAISARN' };
const databaseName = 'เพ็ญพิชชา เตชะเวชไพศาล';

console.log('--- Testing Name Match ---');
console.log(`Slip Display Name: "${slipReceiver.displayName}"`);
console.log(`Database Name:     "${databaseName}"`);

const result = matchReceiverName(slipReceiver, databaseName);

console.log('\n--- Result ---');
console.log(`Matched: ${result.matched ? '✅ YES' : '❌ NO'}`);
console.log(`Confidence: ${result.confidence}`);
console.log(`Field: ${result.field}`);

if (result.matched) {
    console.log('\n✨ FIX CONFIRMED: The names now match correctly!');
} else {
    console.error('\n⚠️ STILL FAILING: Logic needs more work.');
    process.exit(1);
}
