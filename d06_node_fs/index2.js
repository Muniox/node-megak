// console.log(global.process);
//lub zeby podejrzec wszystkie zmienne process nodejs
// console.log(process);

console.log(process.argv);
//uruchom node index2.js
//zostaną wyświetlone 2 ścieżki 1 z scieżką do noda a druga to scieżka do pliku
//te właśnie zestawienie uruchamiamy w terminalu

//uruchom w terminalu dla przykładu:
//argumenty oddzielamy spacjami, aby połaączyc zamieszczamy w ""
// node index2.js xxx zzz 123

//przekazywanie argumentów z zewnątrz do zmiennych
const a = Number(process.argv[2]);
const b = Number(process.argv[3]);

console.log(a + b);