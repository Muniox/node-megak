const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  console.log(req.url);

  if (req.url === '/' && req.method === 'GET') {
    res.writeHead(200, {
      'Content-type': 'text/html; charset=utf-8',
    });
    res.end('<h1>Działa</h1>');
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html; charset=utf-8',
    });
    res.end('<h1>not found</h1>');
  }
});

server.listen(3000, 'localhost');
