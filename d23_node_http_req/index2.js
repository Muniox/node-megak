const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  console.log(req.headers['cache-control']);

  res.writeHead(200, {
    'Content-type': 'text/html; charset=utf-8',
  });
  res.write('<h1>Hello from MegaK</h1>');
  res.write('<h1>Hello from MegaK</h1>');
  res.write('<h1>Hello from MegaK</h1>');
  res.write('<h1>Hello from MegaK</h1>');
  res.end();
});

server.listen(3000, 'localhost');
