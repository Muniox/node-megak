const { promisify } = require("util");
const scrypt = promisify(require("crypto").scrypt);
const randomBytes = promisify(require("crypto").randomBytes);
const { createCipheriv } = require("crypto");
const { readFile, writeFile } = require("fs/promises");
const path = require("path")

const pathToFile = process.argv[2];
const password = process.argv[3];
const salt = "mySalt - 873289ec2n3c72b2n 2 $^$%YUSER^& M$#%^$#@W$ %#$& $%^$%^";


//funkcja z bezpieczną ścieżką do pliku
function safeJoin(base, target) {
    const targetPath = '.' + path.normalize('/' + target);
    return path.resolve(base, targetPath);
}

//funkcja odczytuje dane z pliku
const getFileData = async (path) => await readFile(path, 'utf-8');


//funkcja zapisuje dane do pliku
const writeToFile = async (path, data) => {
    await writeFile(path, data, 'utf-8')
}

//funkcja szyfrująca dane
async function encryptTextFile(text, password, salt) {
    const algorithm = "aes-192-cbc";
    const key = await scrypt(password, salt, 24);
    const iv = await randomBytes(16);

    const cipher = createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(text, "utf8", "hex");
    encrypted += cipher.final("hex");
    console.log(encrypted, iv.toString("hex"));
    return `${encrypted} ${iv.toString("hex")}`;
}

(async () => {
    try {
        const path = safeJoin(__dirname, pathToFile);
        const data = await getFileData(path)
        const encrypted = await encryptTextFile(data, password, salt);
        await writeToFile(pathToFile, encrypted);
    } catch (error) {
        console.log(error)
    }
})()



