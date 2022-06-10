const { EventEmitter } = require('events');

//poprzednio
// setInterval(() => {
//   console.log('Hi');
// }, 1000);

//chcemy aby tu został sam setInterval

function tickTock() {
  const ee = new EventEmitter();

  setInterval(() => {
    ee.emit('secondElapsed', 'Test'); //możemy przekazywać dalej parametry jak obiekt, tablicę albo string
  }, 1000);

  setInterval(() => {
    ee.emit('fiveSecondsElapsed');
  }, 5000);

  return ee;
}

module.exports = {
  tickTock,
};
