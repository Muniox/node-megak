const buff = Buffer.alloc(20);
buff.write('Hello World!', "utf8");

// console.log(buff);
// console.log(buff.toString('hex'));
// console.log(buff.toString('utf8'));

//=======================
//sprawdzanie długości
// console.log(Buffer.byteLength('ą', "utf-8"));


//=======================
//zamiast wyliczać buffer możemy zrobić:
// const buff2 = Buffer.from('Zażółć gęślą jażń!');
//
// console.log(buff2);
// console.log(buff2.toString('utf8'));
// console.log(buff2.length);


//=======================
const buff3 = Buffer.from([1, 2, 3, 4]);
console.log(buff3);
console.log(buff3.toString('utf8'));
console.log(buff3.length);

/**
 * Buffer potrafi być także m.in.:
 * Czyszczony i wypełniany
 * Kopiowany
 * Porównywany
 * Odczytywany
 * */