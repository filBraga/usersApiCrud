const talkerJSON = require('../talker.json');

const getTalkers = (req, res) => res.status(200).json(talkerJSON);

module.exports = {
  getTalkers,
};