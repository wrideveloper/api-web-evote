const VoteModel = require('../models/vote.model.js');

// get all vote
exports.getAllVoteList = (req, res) => {
    VoteModel.getAllVote((err, vote) => {
        console.log('We are here');
        if (err) res.send(err);
        console.log('vote', vote);
        res.send(vote)
    })
}

// get employee by ID
exports.getVoteByIDUser = (req, res) => {
    VoteModel.getVoteByIDUser(req.params.id, (err, vote) => {
        if (err)
            res.send(err);
        res.send(vote);
    })
}

exports.getTotalVote = (req, res) => {
    VoteModel.getTotalVote((err, vote) => {
        if (err)
            res.send(err);
        else
            res.send(vote);        
    })
}

// get num of vote of user by ID
exports.getVoteScore = (req, res) => {
    VoteModel.getVoteScore((err, vote) => {
        if (err)
            res.send(err);
        else
            res.send(vote);        
    })
}

// create vote
exports.createVote = (req, res) => {
    const ReqData = new VoteModel(req.body);
    console.log('ReqData', ReqData);
    // check if null
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({ success: false, message: 'tolong diisi semua' });
    } else {
        VoteModel.createVote(ReqData, (err, vote) => {
            if (err) res.send(err);
            res.json({ status: true, message: 'Vote Created Successfully', data: vote.insert })
        })
    }
}

// get sum of vote per candidate by id calon
exports.getSumVoteCandidate = (req, res) => {
    VoteModel.getSumVoteCandidate(req.params.idcalon, (err, sumVote) => {
        if (err)
            res.send(err);
        res.send(sumVote);
    })
}