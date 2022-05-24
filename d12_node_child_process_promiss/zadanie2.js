const { promisify } = require('util');
const exec = promisify(require('child_process').exec);
const path = require('path');


const dirPath = process.argv[2];

function safeJoin(base, target) {
    const targetPath = '.' + path.normalize('/' + target);
    return path.resolve(base, targetPath);
}

(async () => {
    try {
        const {stdout} = await exec('dir', {
            cwd: safeJoin('C:\\', dirPath),
        });
        console.log(stdout);
    } catch (error) {
        console.error(error);
    }
})();



