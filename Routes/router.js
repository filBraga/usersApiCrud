const express = require('express');

const getTalkers = require('../Middlewares/talkersMiddleware');
const getSingleTalkers = require('../Middlewares/singleTalkerMiddleware');
const readAndParseMiddleware = require('../Middlewares/readAndParseMiddleware');

const router = express.Router();

// TALKER
router.get('/talker', readAndParseMiddleware, getTalkers);

// TALKER ID
router.get('/talker/:id', readAndParseMiddleware, getSingleTalkers);

module.exports = router; 