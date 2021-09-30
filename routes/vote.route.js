const express = require('express');
const router = express.Router();

const voteController = require('../controllers/vote.controller');

// get vote by ID
router.get('/:id',voteController.getVoteByIDUser);

// get user hasVote
router.get('/numvote/:id',voteController.getNumVote);

// get sum of vote per candidate by id calon
router.get('/sumvote/:id', voteController.getSumVoteCandidate);

module.exports = router;