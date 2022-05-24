const { promisify } = require('util');
const exec = promisify(require('child_process').exec);


//Promise
// exec('dir')
//     .then( ({stdout, stderr})=> {
//         console.log(stdout);
//         console.log(stderr);
//     })

(async () => {
    try{
        const data = await exec('ping 8.8.8.8');
        console.log(data.stdout);
    } catch (error) {
        console.error('Oh no!', error);
        // console.error('Oh no!', error.stdout);
    }
})();


(async () => {
    try{
        const {stdout, stderr} = await exec('dir');
        console.log(stdout, stderr);
    } catch (error) {
        console.log(error);
    }
})();