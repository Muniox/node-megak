const { tickTock } = require('./tick-tock');

const events = tickTock();

//zdarzenie odbywa sie co jakiś czas więc nasz listener jak tylko wydarzy się wyemitowane zdarzenie informuje nas o tym
events.on('secondElapsed', (data) => {
  console.log('1 sec', data);
});

//zdarzenie odbywa się cały czas ale nasz listener poinformuje nas o tym tylko za pierwszym razem
events.once('secondElapsed', (data) => {
  console.log('First second', data);
});

//możemy stworzyć wiele lisenerów,
events.on('secondElapsed', (data) => {
  console.log('Tick!', data);
});

//możemy stworzyć listenera pod wiele emiterów
events.on('fiveSecondsElapsed', () => {
  console.log('5 sec!');
});
