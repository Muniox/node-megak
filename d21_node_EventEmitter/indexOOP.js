const { TickTock } = require('./eventEmitterOOP');

//dodatkowe informacje: wszystko odbywa się synchronicznie i nic nie możemy z tym zrobić
new TickTock()
  .once('secondElapsed', () => console.log('First second'))
  .on('secondElapsed', () => console.log('1 sec'))
  .on('fiveSecondsElapsed', () => console.log('5 sec!'));
