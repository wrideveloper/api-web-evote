const VoteModel = require('../models/vote.model');

// get employee by ID
exports.getVoteByIDUser = (req, res)=>{
    VoteModel.getVoteByIDUser(req.params.id, (err, vote)=>{
        if(err)
        res.send(err);
        res.send(vote);
    })
}

// get num of vote of user by ID
exports.getNumVote = (req, res)=>{
    VoteModel.getNumVote(req.params.id, (err, alreadyVote)=>{
        if(err)
        res.send(err);
        res.send(alreadyVote);
    })
}

// get sum of vote per candidate by id calon
exports.getSumVoteCandidate = (req, res)=>{
    VoteModel.getSumVoteCandidate(req.params.id, (err, sumVote)=>{
        if(err)
        res.send(err);
        res.send(sumVote);
    })
}