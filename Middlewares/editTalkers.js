const Joi = require('joi');
const editFile = require('../utils/editFile');
const readTalkers = require('../utils/readTalkers');

const regexDate = /^(0[1-9]|[12][0-9]|3[01])[/](0[1-9]|1[012])[/]\d{4}/i;

const schema = Joi.object({
  name: Joi.string().min(3).required()
    .messages({
      'string.min': 'O "name" deve ter pelo menos 3 caracteres',
      'any.required': 'O campo "name" é obrigatório',
  }),
  age: Joi.number().integer().min(18).required()
    .messages({
      'number.min': 'A pessoa palestrante deve ser maior de idade',
      'any.required': 'O campo "age" é obrigatório',
  }),
  talk: Joi.object({
    rate: Joi.number().integer().min(1).max(5)
    .required()
    .messages({
      'number.min': 'O campo "rate" deve ser um inteiro de 1 à 5',
      'number.max': 'O campo "rate" deve ser um inteiro de 1 à 5',
      'any.required': 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
    }),
    watchedAt: Joi.string().regex(regexDate).required().messages({
      'string.pattern.base': 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
      'any.required': 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
    }),
  }).required().messages({
    'any.required': 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
  }),
//   watchedAt: Joi.date().iso(),
//   rate: Joi.number().min(1).max(5),
});

const editTalkers = (req, res) => {
  const validation = schema.validate(req.body);

  if (validation.error !== undefined) {
    return res.status(400).json({ message: validation.error.details[0].message });
  }
  const returnFrom = editFile(req.body, req.params.id);
  res.status(200).json(returnFrom[req.params.id - 1]);
};

module.exports = editTalkers;