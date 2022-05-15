const fs = require('fs/promises');
const path = require('path');

const directory = path.join(__dirname, 'projekty');


const showFilesInDirectory = async (directoryPath, tab = '') => {
    if (directoryPath === directory){
        tab = ''
    } else {
        tab += '\t';
    }

    const fileNames = await fs.readdir(directoryPath)

    for (const fileName of fileNames ){
        const getNewPath = path.join(directoryPath, fileName);
        const isFilesADirectory = (await fs.stat(getNewPath)).isDirectory();

        if (isFilesADirectory) {
            console.log(tab + '📁' + fileName);
            await showFilesInDirectory(getNewPath, tab);
        } else {
            console.log(tab + '📄' + fileName);
        }
    }
}


(async () => {
    try {
        await showFilesInDirectory(directory);
    } catch (error) {
        if (error.code === 'ENOENT'){
            console.log('Directory doesn\'t exist');
        }
        else {
            console.log('Unhandled Error', error)
        }
    }
})();


