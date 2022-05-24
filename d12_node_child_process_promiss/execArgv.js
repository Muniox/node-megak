const { promisify } = require('util');
const exec = promisify(require('child_process').exec);


//zly sposób przekazywania parametrów (można w ten sposób wstrzyknąć cokolwiek
//"1.1.1.1 && mkdir Wirus"
//jest niedopuszczalne, aby dać możliwość komuś podania dowolnego parametru
const ip = process.argv[2];

(async () => {
    try{
        const data = await exec(`ping ${ip}`);
        console.log(data.stdout);
    } catch (error) {
        console.error('Oh no!', error);
        // console.error('Oh no!', error.stdout);
    }
})();
//jednym rozwiązaniem jest podanie samych liczb i kropek nic więcej!



