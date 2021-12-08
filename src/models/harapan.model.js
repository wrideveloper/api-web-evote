const sql = require('../../config/db.config');

const Harapan = function(harapan) {
    this.id_user = harapan.id_user;    
    this.deskripsi = harapan.deskripsi;
}

// get all harapan
Harapan.getAllHarapanList = (result) => {
    sql.query('SELECT harapan.id_harapan, user.nama as nama, harapan.deskripsi FROM harapan INNER JOIN user ON harapan.id_user = user.id_user', (err, res) => {
        if (err) {
            console.log('Error while fetching harapan', err);
            result(null, err);
        } else {
            console.log('harapan fetched successfully');
            result(null, res);
        }
    })
}

// get harapan by Id_user
Harapan.getHarapanByIdHarapan = (id, result) => {
    sql.query('SELECT harapan.id_harapan, user.nama as nama, harapan.deskripsi FROM harapan INNER JOIN user ON harapan.id_user = user.id_user WHERE harapan.id_harapan = ?', id, (err, res) => {
        if (err) {
            console.log('Error while fetching harapan by id user', err);
            result(null, err);
        } else {            
            result(null, res);
        }
    })
}

// create harapan
Harapan.createHarapan = (req, result) => {
    sql.query('INSERT INTO harapan SET ? ', req, (err, res) => {
        if (err) {
            console.log('Error while inserting data');
            result(null, err);
        } else {
            console.log('Harapan created successfully');
            result(null, res)
        }
    })
}

module.exports = Harapan;