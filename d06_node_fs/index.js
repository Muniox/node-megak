const {mkdir, rename} = require('fs/promises');


//stworzenie folderu i podfolderów, opcja recursive pozwala nam na kolejne tworzenie folderów
(async () => {
    await mkdir('./megakurs/nodejs/filesystem', { recursive: true });
    })();

//zmiana nazwy folderu
(async () => {
    try {
        await rename('./zmianaNazwy.txt', './zmianaNazwy.txt');
    } catch (error) {
        if(error.code === 'ENOENT') {
            console.log('GIVEN file name does not exist');
        } else {
            console.log('Oh no!', error);
        }
    }
    })();

//przenoszenie pliku
(async () => {
    try {
        await rename('./hello.txt', './megakurs/nodejs/filesystem/hello.txt');
    } catch (error) {
        if(error.code === 'ENOENT') {
            console.log('GIVEN file name does not exist');
        } else {
            console.log('Oh no!', error);
        }
    }
})();


