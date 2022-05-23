const { exec } = require('child_process');

// const cp = exec('dir'); // cp to ChildProcess
const cp = exec('ping 8.8.8.8', {
  timeout: 1000 * 60 * 2,
});

// ============================================
// strumienie
cp.stdout.on('data', (data) => {
  console.log('Out> ', data);
});

cp.stderr.on('data', (data) => {
  console.log('Error> ', data);
});

cp.on('close', () => {
  console.log('Finished!');
});

// nasz własny timeout
// setTimeout(() => {
//   cp.kill('SIGKILL');
// }, 1000 * 60 * 2);
