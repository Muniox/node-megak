const { readFile, writeFile } = require('fs/promises');
const { encryptText, hash } = require('./cipher');
const { SALT } = require('./constants');

const [, , fileName, pwd] = process.argv;

console.log(fileName, pwd);

(async () => {
  const content = await readFile(fileName, 'utf-8');
  const encrypted = await encryptText(content, pwd, SALT);
  await writeFile(fileName, JSON.stringify(encrypted), 'utf-8');
  console.log('Done.');
})();
