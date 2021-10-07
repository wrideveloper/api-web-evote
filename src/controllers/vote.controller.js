const VoteModel = require('../models/vote.model.js');

// get all vote
exports.getAllVoteList = (req, res)=> {
    VoteModel.getAllVote((err, vote) =>{
        console.log('We are here');
        if(err)res.send(err);
        console.log('vote', vote);
        res.send(vote)
    })
}

// create vote
exports.createVote = (req, res) =>{
    const ReqData = new VoteModel(req.body);
    console.log('ReqData', ReqData);
    // check if null
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success: false, message: 'tolong diisi semua'});
    }else{
        VoteModel.createVote(ReqData, (err, vote)=>{
            if(err)res.send(err);
            res.json({status: true, message: 'Vote Created Successfully', data: vote.insert})
        })
    }
}