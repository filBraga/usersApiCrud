const fs = require('fs');
const path = require('path');

const talkersMiddleware = (req, res, next) => {
  const dirPath = path.join(__dirname, '..', 'talker.json');

// Without JSON.parse:
// {
// "type": "Buffer",
//  "data": [
//    91,
//    10,
//    32,
//    93
//  ]
// }

  const fileContent = JSON.parse(fs.readFileSync(dirPath));
  // console.log(fileContent);
  req.talkerJSON = fileContent;
  next();
};

module.exports = talkersMiddleware;