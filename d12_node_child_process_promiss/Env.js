const { promisify } = require('util');
const exec = promisify(require('child_process').exec);



// (async () => {
//     try{
//         const {stdout} = await exec('node test.js',{
//             NODE_ENV: 'development' //podmieni nam zmienną środowiskową
//         });
//         console.log(stdout);
//     } catch (error) {
//         console.error('Oh no!', error);
//         // console.error('Oh no!', error.stdout);
//     }
// })();

(async () => {
    try{
        const {stdout} = await exec('mkdir testowy', {
            cwd: 'C:\\', //cwd nakazuje, że właśnie w tym miejscu ma być wykonana operacja
            timeout: 1000 * 60 * 2,
        });
        console.log(stdout);
    } catch (error) {
        console.error('Oh no!', error);
        // console.error('Oh no!', error.stdout);
    }
})();
