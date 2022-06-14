const http = require('http');
const { readFile } = require('fs/promises');

const server = http.createServer();

server.on('request', async (req, res) => {
  const html = await readFile('./index.html', 'utf-8');
  res.writeHead(200, {
    'Content-type': 'text/html; charset=utf-8',
  });
  res.end(html);
});

server.listen(3000, 'localhost');
