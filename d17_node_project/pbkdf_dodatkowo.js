const {promisify} = require('util');
const pbkdf2 = promisify(require('crypto').pbkdf2);
const salt = 'ADM@o2amdmdoiqiao dfa2d /... . s0d9 fsa09 d8f790asd f7as09d87 f0as98d7f0 a2#$@# $@1 352efg#$T #@$YT2w4ty2345y 6345 42w3^%T#%&Y3535 345#$% 345 234 5s908d7f09as7df09as87d f0a9sd f70as9d f7a9sd 7f90asd87f ./... .';
const getPassword = process.argv[2];
const GOOD_PASSWORD = '045c6b25e8f670c06c5cf02aff2f1eb29143fb793fa2023bc9f6f6cfe922d19659396c0f8dfa739f53544bdf15504a6d748ad68a8b62ee91d8ba773cedd1b594';
//"MEGA KURS"

const checkPassword = async () => {
    try {
        let Password = (await pbkdf2(getPassword, salt, 100000, 64, 'sha512')).toString('hex');
        if (Password === GOOD_PASSWORD) {
            console.log('password match');
        } else {
            console.log('password don\'t match');
        }
    } catch (error) {
        console.log(error);
    }
}

void checkPassword()