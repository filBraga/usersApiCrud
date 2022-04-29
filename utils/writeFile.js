const fs = require('fs').promises;
const path = require('path');
const readTalkers = require('./readTalkers');

const filePath = path.join(__dirname, '..', 'talker.json');

const writeFile = (content) => {
  const fileContent = readTalkers();
  const newFileContent = [
    ...fileContent,
    {
      age: 24,
      id: fileContent.length + 1,
      name: 'Zendaya Maree',
      talk: { 
        rate: 5,
        watchedAt: '25/09/2020',
      },
    },
  ];
  fileContent.push(content);
  // console.log(fileContent);
  fs.writeFile(filePath, JSON.stringify(newFileContent), (err) => {
    if (err) { console.log(err); } else console.log('success');
  });
};

module.exports = writeFile;