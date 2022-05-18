const path = require('path');




const fileDirectory = process.argv[2];

function safeJoin(base, target) {
    const targetPath = '.' + path.normalize('/' + target);
    return path.resolve(base, targetPath);
}

safeJoin(__dirname, fileDirectory);
