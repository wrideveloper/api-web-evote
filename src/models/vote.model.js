const dbConn  = require('../../config/db.config');

const Vote = function(vote) {
    this.id_user = vote.id_user;
    this.id_calon = vote.id_calon;
    this.harapan = vote.harapan;
    this.saran = vote.saran;
    this.waktu_vote = new Date();
}

// get all vote
Vote.getAllVote = (result) =>{
    dbConn.query('SELECT vote.id_vote, user.nim as nim_pemilih, user.nama as nama_pemilih, calon.nama as memilih_calon, vote.harapan, vote.saran, vote.waktu_vote FROM vote INNER JOIN user ON vote.id_user = user.id_user INNER JOIN calon ON vote.id_calon = calon.id_calon', (err, res)=>{
        if(err){
            console.log('Error while fetching vote', err);
            result(null,err);
        }else{
            console.log('vote fetched successfully');
            result(null,res);
        }
    })
}

// create vote
Vote.createVote = (ReqDataVote, result) => {
    dbConn.query('INSERT INTO vote SET ? ', ReqDataVote, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('Vote created successfully');
            result(null, res)
        }
    })
}

module.exports = Vote;