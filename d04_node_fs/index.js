const {readFile, writeFile, appendFile} = require('fs').promises;
//lub
// const {writeFile} = require('fs/promises');
// const fs = require('fs').promises;


//zapisanie pliku w async await
// const fileName = './data/hello.txt';
// (async () => {
//     try {
//         await writeFile(fileName, 'Hello World!\n', {
//             flag: 'a', encoding: 'utf8'
//         });
//     } catch (e) {
//         console.log('Oh no!', e);
//     }
// })();

//zapisanie pliku callback
// writeFile(fileName, 'Hello, World!', 'utf8', (error) => {
//     if(error) {
//         console.log('Oh no!', error);
//     } else {
//         console.log('File is saved.');
//     }
// });

const FILE_NAME = './data/number.txt';

(async () => {
    try {
        const numberFromFile = await readFile(FILE_NAME, 'utf8');
        const getLastNumberFromFile = numberFromFile.split(/\r?\n/).pop();
        console.log(`last number from file: ${getLastNumberFromFile}`);
        const setNewLastNumber = getLastNumberFromFile * 2;
        console.log(`new number will be: ${setNewLastNumber}`)
        await appendFile(FILE_NAME, `\n${setNewLastNumber}`, {encoding: 'utf8'});
        console.log('file is saved');
    } catch (error) {
        console.log('Oh no!', error);
    }
})();
