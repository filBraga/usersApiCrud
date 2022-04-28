function generateToken(length) {
  // edit the token allowed characters
  // https://stackoverflow.com/questions/8532406/create-a-random-token-in-javascript-based-on-user-details
  const a = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'.split('');
  const b = [];  
  for (let i = 0; i < length; i += 1) {
      const j = (Math.random() * (a.length - 1)).toFixed(0);
      b[i] = a[j];
  }
  return b.join('');
}

const loginMiddleware = (req, res) => {
  // const { email, password } = req.body; // Buffer -> JSON

  // if (!email || !password) {
  //   return res.status(401).json({ message: tokenGenerated });
  // }
  
  const tokenGenerated = generateToken(16);

  return res.status(200).json({ token: tokenGenerated });
};

module.exports = loginMiddleware; 