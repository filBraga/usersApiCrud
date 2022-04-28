const Joi = require('joi');

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

const schema = Joi.object({
  email: Joi.string().min(3).required().email()
    .messages({
      'string.email': 'O "email" deve ter o formato "email@email.com"',
      'any.required': 'O campo "email" é obrigatório',
  }),
  password: Joi.string().min(3).required()
    .messages({
      'string.min': 'O "password" deve ter pelo menos 6 caracteres',
      'any.required': 'O campo "password" é obrigatório',
  }),
});

// https://www.youtube.com/watch?v=u9kxYilQ9l8

const loginMiddleware = (req, res) => {
  const { email, password } = req.body; // Buffer -> JSON
  const validation = schema.validate(req.body);
  if (validation.error !== undefined) {
    return res.status(400).json({ message: validation.error.details[0].message });
  }
  if (!email) {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  }
  if (!password) {
    return res.status(400).json({ message: 'O campo "password" é obrigatório' });
  }
  const tokenGenerated = generateToken(16);
  return res.status(200).json({ token: tokenGenerated });
};

module.exports = loginMiddleware; 