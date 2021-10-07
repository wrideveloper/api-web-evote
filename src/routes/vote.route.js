const express = require('express');
const router = express.Router();

const voteController = require('../controllers/vote.controller.js');

router.get('/', voteController.getAllVoteList);

router.post('/', voteController. createVote);

module.exports = router;