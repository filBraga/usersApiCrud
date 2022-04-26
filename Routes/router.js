const express = require('express');
const { getTalkers } = require('./talkersRoutes');

const router = express.Router();

// TALKER
router.get('/talker', getTalkers);

router.post('/talker', () => {

});

router.put('/talker', () => {

});

router.delete('/talker', () => {

});

module.exports = router;