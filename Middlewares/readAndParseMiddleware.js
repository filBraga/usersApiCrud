const fs = require('fs');
const path = require('path');

const readAndParseMiddleware = (req, res, next) => {
  // Reading the directory path
  const dirPath = path.join(__dirname, '..', 'talker.json');
  // About __dirname above:
  // https://stackoverflow.com/questions/8131344/what-is-the-difference-between-dirname-and-in-node-js
  // console.log(dirPath);
  // Returning without JSON.parse in readFileSync below:
  // { "type": "Buffer", "data": [ 91, ... 93 ] }
  const fileContent = JSON.parse(fs.readFileSync(dirPath));
  // console.log(fileContent);
  req.talkerJSON = fileContent;
  next();
};

module.exports = readAndParseMiddleware; 