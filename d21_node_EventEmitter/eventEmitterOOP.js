const { EventEmitter } = require('events');

class TickTock extends EventEmitter {
  constructor() {
    super();

    setInterval(() => {
      this.emit('secondElapsed', 'Test'); //możemy przekazywać dalej parametry jak obiekt, tablicę albo string
    }, 1000);

    setInterval(() => {
      this.emit('fiveSecondsElapsed');
    }, 5000);
  }
}

module.exports = {
  TickTock,
};
