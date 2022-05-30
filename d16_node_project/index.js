const bcrypt = require('bcrypt');

const getPassword = process.argv[2];


const checkPassword = async () => {
    try{
        const hashPassword = await bcrypt.hash('MEGA KURS', 10);
        const result = await bcrypt.compare(getPassword, hashPassword);
        if (result === true) {
            console.log('Password match');
        } else {
            console.log('Password don\'t match');
        }
    } catch (error) {
        console.log(error);
    }
}

void checkPassword()



