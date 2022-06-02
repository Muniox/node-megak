const { readFile, writeFile } = require('fs/promises');
const { encryptText, hash } = require('./cipher');
const { ENCRYPTION_SALT, HASH_SALT} = require('./constants');

const [, , fileName, pwd] = process.argv;

console.log(fileName, pwd);

(async () => {
  const content = await readFile(fileName, 'utf-8');
  const contentHash = hash(content, HASH_SALT);
  const encrypted = await encryptText(content, pwd, ENCRYPTION_SALT);
  encrypted.hash = contentHash;
  await writeFile(fileName, JSON.stringify(encrypted), 'utf-8');
  console.log('Done.');
})();
