const express = require('express');
const router = express.Router();

const voteController = require('../controllers/vote.controller');

router.get('/', voteController.getAllVoteList);
router.get('/:id', voteController.getVoteByIDUser);
router.post('/', voteController. createVote);
router.get('/total', voteController.getTotalVote);
router.get('/:idcalon/sumvote', voteController.getSumVoteCandidate);

module.exports = router;