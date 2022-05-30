const {createHmac} = require('crypto');

const salt = 'ADM@o2amdmdoiqiao dfa2d /... . s0d9 fsa09 d8f790asd f7as09d87 f0as98d7f0 a2#$@# $@1 352efg#$T #@$YT2w4ty2345y 6345 42w3^%T#%&Y3535 345#$% 345 234 5s908d7f09as7df09as87d f0a9sd f70as9d f7a9sd 7f90asd87f ./... .'


const hash = createHmac('sha512', salt)
  .update('tekst do zhashowanbia')
  .digest('hex');
console.log(hash);