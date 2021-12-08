const sql = require('../../config/db.config');

const Vote = function(vote) {
    this.id_user = vote.id_user;
    this.id_calon = vote.id_calon;    
    this.waktu_vote = new Date();
}

// get all vote
Vote.getAllVote = (result) => {
    sql.query('SELECT vote.id_vote, user.nim as nim_pemilih, user.nama as nama_pemilih, calon.nama as memilih_calon, vote.waktu_vote FROM vote INNER JOIN user ON vote.id_user = user.id_user INNER JOIN calon ON vote.id_calon = calon.id_calon', (err, res) => {
        if (err) {
            console.log('Error while fetching vote', err);
            result(null, err);
        } else {
            console.log('vote fetched successfully');
            result(null, res);
        }
    })
}

// get vote by Id_user
Vote.getVoteByIDUser = (id, result) => {
    sql.query('SELECT * FROM vote WHERE id_user=?', id, (err, res) => {
        if (err) {
            console.log('Error while fetching vote by id user', err);
            result(null, err);
        } else {            
            result(null, res);
        }
    })
}

Vote.getTotalVote = (result) => {
    sql.query('SELECT COUNT(id_vote) as total_vote FROM vote;', (err, res) => {
        if (err) {
            console.log('Error while fetching vote', err);
            result(null, err);
        } else {
            console.log('vote fetched successfully');
            result(null, res);
        }
    })
}

Vote.getVoteScore = (result) => {
    sql.query('SELECT c.id_calon, c.nama, COUNT(v.id_vote) as total_vote FROM vote v INNER JOIN calon c on c.id_calon = v.id_calon GROUP BY c.id_calon;', (err, res) => {
        if (err) {
            console.log('Error while fetching vote', err);
            result(null, err);
        } else {
            console.log('vote fetched successfully');
            result(null, res);
        }
    })
}


// create vote
Vote.createVote = (ReqDataVote, result) => {
    sql.query('INSERT INTO vote SET ? ', ReqDataVote, (err, res) => {
        if (err) {
            console.log('Error while inserting data');
            result(null, err);
        } else {
            console.log('Vote created successfully');
            result(null, res)
        }
    })
}

// get sum of vote of candidate from id_calon
Vote.getSumVoteCandidate = (id, result) => {
    sql.query('SELECT COUNT(id_vote) as sum_vote FROM vote WHERE id_calon=?', id, (err, res) => {
        if (err) {
            console.log('Error while fetching sum_vote by id calon', err);
            result(null, err);
        } else {
            result(null, res);
        }
    })
}

module.exports = Vote;