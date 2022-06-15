const { createServer } = require('http');
const { writeFile, readFile, access, f_OK } = require('fs').promises;

const PORT = 3000;
const HOSTNAME = '127.0.0.1';
const FILE = './counter.txt';
const server = createServer();

server.on('request', async (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  console.log(req.url);

  try {
    await access(FILE, f_OK);
  } catch (error) {
    if (error.code === 'ENOENT') {
      await writeFile('./counter.txt', '0', 'utf8');
    } else {
      console.log(error);
    }
  }

  let counter = await readFile(FILE, 'utf8');

  if (req.url === '/') {
    counter++;
    console.log(counter);
  }
  await writeFile('./counter.txt', counter.toString(), 'utf8');

  res.end(`${counter}`);
});

server.on('clientError', (err, socket) => {
  console.log(err);
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

server.listen(PORT, HOSTNAME, () => {
  console.log(`serwer nasłuchuje na http://${HOSTNAME}:${PORT}/`);
});
