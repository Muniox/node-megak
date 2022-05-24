const { promisify } = require('util');
const exec = promisify(require('child_process').exec);

//dzięki RegExp możemy użyć, aby liczb i kropek
const ip = process.argv[2].replace(/[^0-9.]+/g, '');

(async () => {
    try{
        const data = await exec(`ping ${ip}`);
        console.log(data.stdout);
    } catch (error) {
        console.error('Oh no!', error);
        // console.error('Oh no!', error.stdout);
    }
})();



