const {createReadStream, createWriteStream} = require('fs');

const r = createReadStream('impossibru_meme.png');
const w = createWriteStream('logo2.png');

r.on('data', data => w.write(data));
r.on('end', () => {
    w.close();
    console.log('Ready!');
});