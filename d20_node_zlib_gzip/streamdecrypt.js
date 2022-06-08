const {pipeline} = require('stream/promises');
const {createReadStream, createWriteStream} = require('fs');
const {createDecipher} = require('crypto'); //a w drugim createDecipher
const {promisify} = require('util');
const scrypt = promisify(require('crypto').scrypt);
const {ENCRYPTION_SALT} = require('./constants');

(async () => {

    const [,, inputFile, outputFile, pwd] = process.argv;
    const algorithm = "aes-192-cbc";
    const key = await scrypt(pwd, ENCRYPTION_SALT, 24);

    await pipeline(
        createReadStream(inputFile),
        createDecipher(algorithm, key),
        createWriteStream(outputFile),
    );
    console.log('Done.');

})();

//createCipher oraz createDecipher przy nich dostajemy Deprecation Warning ponieważ zostały wycofane
//bez iv są mniej bezpieczne. Ale z iv są już wspierne w node



//jak będę sie kład to powiedzieć o żelazie