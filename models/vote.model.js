let dbCon = require('../config/db.config');

let Vote = function(vote) {
    this.id_user = vote.id_user;
    this.id_calon = vote.id_calon;
    this.harapan = vote.harapan;
    this.saran = vote.saran;
    this.waktu_vote = new Date();
}

// get vote by Id_user
Vote.getVoteByIDUser = (id, result)=>{
    dbCon.query('SELECT * FROM vote WHERE id_user=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching vote by id user', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// get num of vote of user by ID
Vote.getNumVote = (id, result)=>{
    dbCon.query('SELECT COUNT(id_vote) as num_vote FROM vote WHERE id_user=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching num_vote by id user', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// get sum of vote of candidate from id_calon
Vote.getSumVoteCandidate = (id, result)=>{
    dbCon.query('SELECT COUNT(id_vote) as sum_vote FROM vote WHERE id_calon=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching sum_vote by id calon', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

module.exports = Vote;