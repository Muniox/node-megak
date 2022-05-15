const fs = require('fs/promises');
const {W_OK} = require('fs').constants;


//odczytywanie plików
// (async () => {
//    const fileNames = await fs.readdir('./data');
//
//
//     for(const fileName of fileNames) {
//
//         const fileContent = await fs.readFile(__dirname + '/data/' + fileName, 'utf8');
//         console.log(fileName);
//         console.log(fileContent);
//     }
// })();


//odczytywanie statystyk plików
// (async () => {
//     const fileNames = await fs.readdir('./data');
//
//
//     for(const fileName of fileNames) {
//
//         const fileStat = await fs.stat(__dirname + '/data/' + fileName);
//         console.log(fileName);
//         console.log(fileStat);
//     }
// })();

//odczyt czy dany plik jest folderem, służy do wchodzenia głębiej
// (async () => {
//     const fileNames = await fs.readdir('.',{encoding: 'utf8', withFileTypes: true});
//
//
//     for(const fileName of fileNames) {
//
//         console.log(fileName)
//     }
// })();

//sprawdzanie czy plik istnieje
const FILE_NAME = './data/hello-world.txt';
//
// (async () => {
//     try {
//         await fs.access(FILE_NAME, W_OK);
//     } catch (error) {
//         console.log('File is not valid')
//     }
// })();

//najlepszy sposob, polecany
(async () => {
    try {
        const result = await fs.readFile(FILE_NAME, 'utf8')
        console.log(result);
    } catch (error) {
        if(error.code === 'ENOENT') {
            console.log("File doesn't exist")
        } else if (error.code === "EEXIST"){
            console.log("You can't save to this file")
        } else {
            console.log("Unknown error", error);
        }
    }
})();