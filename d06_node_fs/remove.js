const {unlink, rm} = require('fs/promises');

//funkcja do usuwania plików
// (async () => {
//     const oldFile = process.argv[2];
//
//
//     try {
//         await unlink(oldFile);
//     } catch (error) {
//         if (error.code === 'ENOENT') {
//             console.log(`${oldFile} does not exist.`);
//         } else {
//             console.log('Oh no!', error);
//         }
//     }
// })();

//jeśli chcemy pliku i foldery nalezy użyć rm
(async () => {
    const oldFile = process.argv[2];


    try {
        await rm(oldFile, { recursive: true });
    } catch (error) {
        if (error.code === 'ENOENT') {
            console.log(`${oldFile} does not exist.`);
        } else {
            console.log('Oh no!', error);
        }
    }
})();