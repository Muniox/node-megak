const {watch} = require('chokidar');
const path = require('path');
const {readFile} = require('fs');

const initialPath = process.argv[2];

function safeJoin(base, target) {
    const targetPath = '.' + path.normalize('/' + target);
    return path.resolve(base, targetPath);
}

const fileContent = (path) => {
    readFile(path, 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
    });
};

const pathInMainDirectory = safeJoin(__dirname, initialPath);

watch( path.join(pathInMainDirectory, '/**/*js'), {ignoreInitial: true, awaitWriteFinish: true})
    .on('add', path => {
        console.log(`File ${path} has been added`);
        fileContent(path);
    })
    .on('change', path => {
        console.log(`File ${path} has been changed`);
        fileContent(path);
    })
    .on('unlink', path => console.log(`File ${path} has been removed`));


//można też zrobić na promis wykorzystując 'void' przed funkcją zeby nie było błędu :)