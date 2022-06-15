const { createServer} = require("http");
const {writeFile, readFile} = require('fs').promises;


const PORT = 3000;
const HOSTNAME = '127.0.0.1';

const server = createServer();

let counter = 0;
server.on('request',     async (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    console.log(req.url);

    if (req.url === '/') {
        counter++;
        console.log(counter);
    }
    await writeFile('./counter.txt', String(counter), "utf8");

    res.end(`${counter}`);

});

server.on('clientError', (err, socket) => {
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

server.listen(PORT,HOSTNAME, () => {
    console.log(`serwer nasłuchuje na http://${HOSTNAME}:${PORT}/`);
});