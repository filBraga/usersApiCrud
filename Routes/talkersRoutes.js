const getTalkers = (req, res) => {
  const { talkerJSON } = req;
  res.status(200).json(talkerJSON);
};

module.exports = {
  getTalkers,
};