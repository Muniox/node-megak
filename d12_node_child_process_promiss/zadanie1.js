const { promisify } = require('util');
const exec = promisify(require('child_process').exec);

//mspaint, calc

const runApp = async (app)=> {
    try {
        await exec(app);
    } catch (error) {
        console.error(error);
    }
};

const app = process.argv[2];

if (app === 'Kalkulator') {
    void runApp('calc.exe');
} else if (app === 'Paint'){
    void runApp('mspaint.exe');
} else {
    console.log('Wrong Parametr, write only Paint or Kalkulator');
}