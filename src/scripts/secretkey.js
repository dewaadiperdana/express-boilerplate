const fs = require('fs');
const crypto = require('crypto');
const path = require('path');

crypto.randomBytes(32, (err, buffer) => {
  if (err) throw err;

  const key = buffer.toString('hex');
  const secretKey = `APP_KEY=${key}`;
  const envFile = path.join(process.cwd(), '.env');

  fs.readFile(envFile, 'utf-8', (readFileError, data) => {
    if (readFileError) throw readFileError;

    let newEnv = '';

    const envDataArray = data.split('\n');
    const searchAppKey = 'APP_KEY=';
    let lastIndex = -1;
    let found = false;

    for (let index = 0; index < envDataArray.length; index += 1) {
      if (envDataArray[index].includes(searchAppKey)) {
        lastIndex = index;
        found = true;
        break;
      }
    }

    if (found) {
      envDataArray.splice(lastIndex, 1);
      envDataArray.unshift(secretKey);

      newEnv = envDataArray.join('\n');
    } else {
      newEnv = `${secretKey}\n\n`;
      newEnv += data;
    }

    fs.writeFile(envFile, newEnv, (writeFileError) => {
      if (writeFileError) throw writeFileError;

      console.log('The app key was successfully generated');
    });
  });
});
