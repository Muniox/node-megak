const { exec } = require('child_process');

exec('node test.js', {
  timeout: 1000 * 60 * 2,
}, (error, stdout, stderr) => {
  if (error) {
    console.log('Oh no!', error);
  } else if (stderr) {
    console.error('Error in app!', stderr); // console.error()
  } else {
    console.log('Program has finished', stdout); // console.log()
  }
});
