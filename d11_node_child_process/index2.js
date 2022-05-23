const { exec } = require('child_process');

// const cp = exec('dir', {
//   timeout: 1000 * 60 * 2,
// }, (error, stdout, stderr) => {
//   if (error) {
//     console.log('Oh no!', error);
//   } else if (stderr) {
//     console.error('Error in app!', stderr);
//   } else {
//     console.log('Program has finished', stdout);
//   }
// });

// to ten piewrwszy błąd
exec('npm xyzxyzxyz', {
  timeout: 1000 * 60 * 2,
}, (error, stdout, stderr) => {
  if (error) {
    console.log('Oh no!', error);
  } else if (stderr) {
    console.error('Error in app!', stderr);
  } else {
    console.log('Program has finished', stdout);
  }
});

// ten drugi błąd wyskoczy jeśli dostaniemy jakieś powiadomnienie albo
// coś będzie chciało zwrócić naszą uwagę
