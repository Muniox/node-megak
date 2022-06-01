const {readFile, writeFile} = require('fs/promises');
const {decryptText, encryptText} = require('./cipher');
const {SALT} = require('./constants');


const [,,fileName, pwd] = process.argv;

(async () => {
    const json = await readFile(fileName, 'utf-8');
    const encrypted = JSON.parse(json);
    const decrypted = await decryptText(encrypted.encrypted, pwd, SALT, encrypted.iv);
    await writeFile(fileName, decrypted, 'utf-8');
    console.log('Done.');
})();