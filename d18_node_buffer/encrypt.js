const { readFile, writeFile } = require('fs/promises');
const { encryptBinary, hash } = require('./cipher');
const { ENCRYPTION_SALT, HASH_SALT} = require('./constants');

const [,,fileName, pwd] = process.argv;


(async () => {
  const content = await readFile(fileName);
  const encrypted = await encryptBinary(content, pwd, ENCRYPTION_SALT);
  await writeFile(fileName, JSON.stringify(encrypted), 'utf-8');
  console.log('Done.');
})();
