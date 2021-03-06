const fs = require('fs').promises;
const path = require('path');
const readTalkers = require('./readTalkers');

const filePath = path.join(__dirname, '..', 'talker.json');

const writeFile = (content) => {
  const fileContent = readTalkers();
  fileContent.push(content);
  fs.writeFile(filePath, JSON.stringify(fileContent), (err) => {
    if (err) { console.log(err); } else console.log('success');
  });
};

module.exports = writeFile;