const { exec } = require('child_process');

exec('node test.js', {
  timeout: 1000 * 60 * 2,
}, (error, stdout, stderr) => {
  console.error('Error in app!', stderr); // console.error()
  console.log('Program has finished', stdout); // console.log()
});
