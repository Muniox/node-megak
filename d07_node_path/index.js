const {basename, join, dirname, extname, normalize} = require('path');


//podaje końcową nazwę pliku klub katalogu
console.log(basename(__dirname)); //d7_node_path
console.log(basename(__filename)); //index.js

//podaje zawsze ścieżkę katalogów
console.log('dirname', dirname(__dirname));
console.log('dirname', dirname(__filename));

//join łączy scieżki - nalezy podac "node index.js megakurs" w terminalu
// const fullPath = join(__dirname, process.argv[2]);
// console.log(fullPath);

//podaje rozszerzenie pliku
console.log('extname', extname(__filename)); //.js

//na końcu zawsze pokaże prawdziwą sciężkę po użyciu np ../../../../Windows
const userPath = normalize(join(__dirname, process.argv[2]));
console.log(userPath);


//============================================
//bezpieczne budowanie ścieżek
//nie pozwala po za wyjście z głównego katalogu aplikacji poprzez ../../../
// function safeJoin(base, target) {
//     const targetPath = '.' + path.normalize('/' + target);
//     return path.resolve(base, targetPath);
// }

