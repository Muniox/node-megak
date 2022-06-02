const {createReadStream, createWriteStream} = require('fs');
const {pipeline} = require('stream/promises');

// const openFileStream = createReadStream('impossibru_meme.png');
// const writeFileStream = createWriteStream('logo2.png');

// (async () => {
//     await pipeline(
//       openFileStream,
//       writeFileStream,
//     );
//     console.log('Done');
// })();

//zmiana na mniejszą liczbę kodu:
(async () => {
    await pipeline(
        createReadStream('impossibru_meme.png'),
        createWriteStream('logo2.png'),
    );
    console.log('Done');
})();