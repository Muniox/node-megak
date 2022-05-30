const util = require('util');
const crypto = require('crypto');
const pbkdf2 = util.promisify(crypto.pbkdf2);
const salt = 'ADM@o2amdmdoiqiao dfa2d /... . s0d9 fsa09 d8f790asd f7as09d87 f0as98d7f0 a2#$@# $@1 352efg#$T #@$YT2w4ty2345y 6345 42w3^%T#%&Y3535 345#$% 345 234 5s908d7f09as7df09as87d f0a9sd f70as9d f7a9sd 7f90asd87f ./... .';
const getPassword = process.argv[2];
// do poprawy zmienić hasło w hasha i przechowywać hasha w zmiennej ;p

const checkPassword = async () => {
    try {
        let hash = (await pbkdf2('MEGA KURS', salt, 100000, 64, 'sha512')).toString('hex');
        let Password = (await pbkdf2(getPassword, salt, 100000, 64, 'sha512')).toString('hex');
        if (Password === hash) {
            console.log('password match');
        } else {
            console.log('password don\'t match');
        }
    } catch (error) {
        console.log(error);
    }
}

void checkPassword()
