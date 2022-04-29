const express = require('express');

const getTalkers = require('../Middlewares/talkersMiddleware');
const postTalkers = require('../Middlewares/postTalkersMiddleware');
const getSingleTalkers = require('../Middlewares/singleTalkerMiddleware');
const readAndParseMiddleware = require('../Middlewares/readAndParseMiddleware');
const loginMiddleware = require('../Middlewares/loginMiddleware');
const authMiddleware = require('../Middlewares/authMiddleware');

const router = express.Router();

// TALKER
router.get('/talker', readAndParseMiddleware, getTalkers);
router.post('/talker', authMiddleware, postTalkers);

// TALKER ID
router.get('/talker/:id', readAndParseMiddleware, getSingleTalkers);

// Login Post
router.post('/login', readAndParseMiddleware, loginMiddleware);

module.exports = router; 