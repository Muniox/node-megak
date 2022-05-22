const {watch} = require('chokidar');
const path = require('path');


const initialPath = process.argv[2];

function safeJoin(base, target) {
    const targetPath = '.' + path.normalize('/' + target);
    return path.resolve(base, targetPath);
}


watch(safeJoin(__dirname, path.join(initialPath, '/**/*js')), {ignoreInitial: true})
    .on('add', path => console.log(`File ${path} has been added`))
    .on('change', path => console.log(`File ${path} has been changed`))
    .on('unlink', path => console.log(`File ${path} has been removed`));
