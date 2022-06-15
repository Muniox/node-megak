const { createServer } = require('http');

const PORT = 3000;
const HOSTNAME = 'localhost';
const server = createServer();

server.on('request', (req, res) => {
  if (req.url !== '/favicon.ico') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    const reqArray = req.url.split('/');
    const [, operation, firstNumber, secondNumber] = reqArray;
    let result;

    console.log(operation, firstNumber, secondNumber);

    if (
      !Number.isNaN(Number(firstNumber)) &&
      !Number.isNaN(Number(secondNumber)) &&
      firstNumber !== '' &&
      secondNumber !== ''
    ) {
      switch (operation) {
        case 'add':
          result = Number(firstNumber) + Number(secondNumber);
          break;
        case 'substract':
          result = firstNumber - secondNumber;
          break;
        case 'multiply':
          result = firstNumber * secondNumber;
          break;
        case 'divide':
          result = firstNumber / secondNumber;
          break;
        default:
          result = 'please input mathematical operation';
          break;
      }
    } else {
      result = 'please input only numbers';
    }

    res.end(`${result}`);
  }
});

server.listen(PORT, HOSTNAME, () => {
  console.log(`serwer nasłuchuje na http://${HOSTNAME}:${PORT}`);
});
