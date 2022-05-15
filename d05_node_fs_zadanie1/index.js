const fs = require('fs/promises');

const INPUT_FILE = './data/input.json';
const OUTPUT_FILE = './data/sum.txt';

(async () => {
    try {
        const data = JSON.parse(await fs.readFile(INPUT_FILE, 'utf8'));
        const sum = data.reduce((prev, next) => prev + next, 0);
        await fs.writeFile(OUTPUT_FILE, sum.toString(), 'utf8');
        console.log('File created successfully!');
    } catch (error) {
        if(error.code === 'ENOENT'){
            console.log("File doesn't exist or wrong path");
        }
        else {
            console.log("Unhandled error", error);
        }
    }
})();


