const readTalkers = require('../utils/readTalkers');

const readAndParseMiddleware = (req, res, next) => {
  const fileContent = readTalkers();
  req.talkerJSON = fileContent;
  next();
};

module.exports = readAndParseMiddleware; 