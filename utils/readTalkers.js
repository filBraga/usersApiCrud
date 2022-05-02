const fs = require('fs');
const path = require('path');

const readTalkers = () => {
  // Reading the directory path
  const filePath = path.join(__dirname, '..', 'talker.json');
  // About __dirname above:
  // https://stackoverflow.com/questions/8131344/what-is-the-difference-between-dirname-and-in-node-js
  // Returning without JSON.parse in readFileSync below:
  // { "type": "Buffer", "data": [ 91, ... 93 ] }
  return JSON.parse(fs.readFileSync(filePath));
};

module.exports = readTalkers;