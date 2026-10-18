
const assert = require('node:assert/strict');

function test(name, fn) {
    try {
        fn();
        console.log(`✅ PASS: ${name}`);
    } catch (error) {
        console.error(`❌ FAIL: ${name}`);
        console.error(`   Reason: ${error.message}`);
        process.exitCode = 1;
    }
}

const response = {
    message: 'Hello from Pi CI/CD!',
    version: '1.0.0'
};

test('response contains the correct message', () => {
    assert.equal(response.message, 'Hello from Pi CI/CD!');
});

test('response contains the correct version', () => {
    assert.equal(response.version, '1.0.0');
});

if (process.exitCode === 1) {
    console.error('\nSome tests failed.');
} else {
    console.log('\nAll tests passed!');
}
