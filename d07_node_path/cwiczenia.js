const path = require('path');

const paramDir = process.argv[2];

//Pełna ścieżka
console.log(paramDir);

//Katalog nadrzędny
console.log(path.dirname(paramDir));

//Nazwa pliku
console.log(path.basename(paramDir));

//rozszerzenie
console.log(path.extname(paramDir));