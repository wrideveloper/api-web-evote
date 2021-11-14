const sql = require('../../config/db.config');
const md5 = require('md5');

let User = function(user) {
    this.id_user = user.id_user;
    this.nama = user.nama;
    this.nim = user.nim;
    this.password = md5(user.password);
    this.miniclass = user.miniclass;
    this.role = user.role;
}

// Create Data
User.createData = (userNew, result) => {
    // sql.query('INSERT INTO (nama, nim, password, role) user VALUES(?, ?, ?, ?)', [userNew.nama, userNew.nim, userNew.password, userNew.role], (err, res) => {
    sql.query('INSERT INTO user set ?', [userNew], (err, res) => {
        if (err) {
            console.error(err);
            result(null, err);
        } else {
            console.log("Successfully to added data");
            result(null, res);
        }
    });
}

// Update Data By ID
User.updateData = (id, userNew, result) => {
    sql.query("UPDATE user SET nama = ?, nim = ?, password = ?, miniclass = ?, role = ? WHERE id_user=?", [userNew.nama, userNew.nim, userNew.password, userNew.miniclass, userNew.role, id], (err, res) => {
        if (err) {
            console.log("Failed to Update Data");
            result(null, err);
        } else {
            console.log("Successfully to Update Data");
            result(null, err);
        }
    })
}

// Delete Data by ID
User.deleteDataByID = (id, result) => {
    sql.query("DELETE FROM user WHERE id_user=?", id, (err, res) => {
        if (err) {
            console.log("Data is not available");
            result(null, err);
        } else {
            console.log("Deleted");
            result(null, res);
        }
    });
}


// Get Data by ID with password
User.getDataByID = (id, result) => {
    sql.query("SELECT * FROM user WHERE id_user=?", id, (err, res) => {
        if (err) {
            console.log("Data is not available");
            result(null, err);
        } else {
            console.log("Data will be show", res);
            result(null, res);
        }
    })
}

// Get All Data with password
User.getAllData = (result) => {
    sql.query("SELECT * FROM user", result, (err, user) => {
        if (err) {
            console.log("Data is not available");
            result(null, err);
        } else {
            console.log("Data will be show", user);
            result(null, user);
        }
    });
}

// Login
User.login = (nim, password, result) => {
    sql.query("SELECT * FROM user WHERE nim = ? AND password = ?", [nim, password], (err, user) => {
        if (err) {
            console.log("Data is not available");
            result(null, err);
        } else {
            console.log("found user: ", user);
            result(null, user);
            return;
        }
    });
};

module.exports = User;