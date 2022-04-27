const express = require('express');
const { getTalkers } = require('./talkersRoutes');
const talkersMiddleware = require('../Middlewares/talkersMiddleware');

const router = express.Router();

// TALKER
router.get('/talker', talkersMiddleware, getTalkers);

// TALKER ID
router.get('/talker/:id', getTalkers);

module.exports = router;