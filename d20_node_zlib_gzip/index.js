const {createReadStream, createWriteStream} = require('fs');
const {pipeline} = require('stream/promises');
const {createGzip, createGunzip} = require('zlib');


//kompresja
(async () => {
    await pipeline(
        createReadStream('impossibru_meme.png'),
        createGzip(),
        createWriteStream('logo2.png'),
    );
    console.log('Done');
})();

//dekompresja
// (async () => {
//     await pipeline(
//         createReadStream('logo2.png'),
//         createGunzip(),
//         createWriteStream('logo3.png'),
//     );
//     console.log('Done');
// })();