const http = require('http');

http.createServer(
    (req, res) => {
        res.writeHead(200, {
           'Content-type': 'text/html; charset=utf-8'

        });
        res.end('<h1>Działa</h1>');
    }
).listen(3000, '127.0.0.1');
