const chokidar = require('chokidar');

// można dać obserwuj na glob, czyli na wszystkie podfoldery, wtedy należy wpisać: './**/*'
//ważna rzecz w option usePoling coś związane z FTP
//awaitWriteFinish czekamy az plik się zapisze dopiero możemy wyswietlić informacje lub coś zrobić, pozwala się upewnić, że plik na pewno został zmieniony
//ignoreInitial ignoruje wczytanie początkowych plików, w ten sposob nie pokaże ze plik się zmienił na samym starcie aplikacji

chokidar.watch('.', { ignoreInitial: true })
    .on('add', path => console.log(`File ${path} has been added`))
    .on('change', path => console.log(`File ${path} has been changed`))
    .on('unlink', path => console.log(`File ${path} has been removed`))
    .on('addDir', path => console.log(`Directory ${path} has been added`))
    .on('unlinkDir', path => console.log(`Directory ${path} has been  removed`));

