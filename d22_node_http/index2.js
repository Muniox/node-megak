const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  res.writeHead(200, {
    'Content-type': 'text/html; charset=utf-8',
  });
  res.end('<h1>Działa</h1>');
});

server.listen(3000, 'localhost');
