const {createReadStream, createWriteStream} = require('fs');

const r = createReadStream('impossibru_meme.png');
const w = createWriteStream('logo2.png');

//połącz "r" z "w", czyli read z write
r.pipe(w);
//jeżeli się zakończy uruchom funkcje
r.on('end', () => console.log('Ready!'));