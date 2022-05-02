const fs = require('fs').promises;
const path = require('path');
const readTalkers = require('./readTalkers');

const filePath = path.join(__dirname, '..', 'talker.json');

const editFile = (content, talkerId) => {
  const fileContent = readTalkers();
  const { name, age, talk } = content;
  fileContent[talkerId - 1].name = name;
  fileContent[talkerId - 1].age = age;
  fileContent[talkerId - 1].talk = talk;
  fs.writeFile(filePath, JSON.stringify(fileContent), (err) => {
    if (err) { console.log(err); } else console.log('success');
  });
  return fileContent;
};

module.exports = editFile;