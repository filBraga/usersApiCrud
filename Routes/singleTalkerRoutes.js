const getSingleTalkers = (req, res) => {
  const { talkerJSON } = req;
  const talkerId = req.params.id;
  const talker = talkerJSON[talkerId];

  if (!talker) {
    // console.log('Negativo');
    res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  } else {
    // console.log('Positivo');
    res.status(200).json(talkerJSON[talkerId - 1]);
  }
};

module.exports = {
  getSingleTalkers,
};