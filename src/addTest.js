const fs = require('fs');
const path = require('path');

const testName = process.argv[2];

if (!testName) {
  console.error('Please provide a test name.');
  process.exit(1);
}

const testContent = `describe('${testName}', () => {
  it('should pass', () => {
    expect(true).toBe(true);
  });
});
`;

const testFile = path.join(__dirname, '..', 'tests', `${testName}.test.js`);

fs.mkdirSync(path.dirname(testFile), { recursive: true });
fs.writeFileSync(testFile, testContent);
console.log(`Test created at: ${testFile}`);
