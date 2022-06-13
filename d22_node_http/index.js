const http = require('http');

http.createServer(
    () => {
        console.log('Hello, World!');
    }
).listen(3000, '127.0.0.1');
