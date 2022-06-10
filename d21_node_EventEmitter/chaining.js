//możemy wszystko zrobić szybciej poprzez chaining
const { tickTock } = require('./tick-tock');

const events = tickTock();

events
  .on('secondElapsed', () => console.log('1 sec'))
  .once('secondElapsed', () => console.log('First second'))
  .on('fiveSecondsElapsed', () => console.log('5 sec!'));
