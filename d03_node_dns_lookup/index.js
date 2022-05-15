const fs = require('fs');
// const dns = require('node:dns');
const dns = require('node:dns/promises');

console.log('start');

const options = {
    all: true
};

// dns.lookup('google.pl', options , (err, address) => {
//     console.log(address)
// })

    (async () => {
        try {
            const myDns = await dns.lookup('google.pl', options);
            console.log(myDns);
        } catch (e) {
            console.log(e)
        }
    })();



console.log('end');




