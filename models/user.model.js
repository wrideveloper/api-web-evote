const sql = require('../config/db.config');
const md5 = require('md5');

let User = function(user) {
    this.id = user.id;
    this.nama = user.nama;
    this.nim = user.nim;
    md5(this.password) = md5(user.password);
    this.role = user.role;
}

// Create Data
User.createData = (userNew, result) => {
    sql.query("INSERT INTO user SET ?", [userNew], (err, res) => {
        if (err) {
            console.log("Failed to create data");
            result(null, err);
        } else {
            console.log("Successfully to added data");
            result(null, err);
        }
    })
}

// Update Data By ID
User.updateData = (id, userNew, result) => {
    sql.query("UPDATE user SET nama = ?, nim = ?, password = ?, role = ? WHERE id_user=?", [userNew.nama, userNew.nim, userNew.password, userNew.role, id], (err, res) => {
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
            console.log("Deleted", user);
            result(null, res);
        }
    });
}


// Get Data by ID without password
User.getDataByID = (id, result) => {
    sql.query("SELECT id_user,nama,nim,role FROM user WHERE id_user=?", id, (err, res) => {
        if (err) {
            console.log("Data is not available");
            result(null, err);
        } else {
            console.log("Data will be show", res);
            result(null, res);
        }
    })
}

// Get All Data without password
User.getAllData = (result) => {
    sql.query("SELECT id_user,nama,nim,role FROM user", result, (err, user) => {
        if (err) {
            console.log("Data is not available");
            result(null, err);
        } else {
            console.log("Data will be show", user);
            result(null, user);
        }
    });
}

module.exports = User;