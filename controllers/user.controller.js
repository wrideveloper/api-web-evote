const User = require('../models/user.model');
const md5 = require('md5');

// Get All Data
exports.getAllData = (req, res) => {
    User.getAllData((err, user) => {
        if (err) {
            res.send(err);
        } else {
            res.send(user);
        }
    });
}

// Get Data by ID
exports.getDataByID = (req, res) => {
    User.getDataByID(req.params.id, (err, user) => {
        if (err) {
            res.send(err);
        } else {
            res.send(user);
        }
    });
}

// Delete Data by ID
exports.deleteDataByID = (req, res) => {
    User.deleteDataByID(req.params.id, (err, user) => {
        if (err) {
            res.send(err);
        } else {
            res.send(user);
        }
    });
}

// Create Data
exports.createData = (req, res) => {
    const userNew = new User(req.body);
    console.log('userNew', userNew);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({
            success: false,
            message: "Please complete all fields"
        });
    } else {
        User.createData(userNew, (err, user) => {
            if (err)
                res.send(err);
            res.json({
                success: true,
                message: "Success",
                data: user.insertId
            });

        });
    }
}

// Update Data
exports.updateData = (req, res) => {
    const userNew = new User(req.body);
    console.log('userNew', userNew);
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({
            success: false,
            message: "Please complete all fields"
        });
    } else {
        User.updateData(req.params.id, userNew, (err, user) => {
            if (err) {
                res.send(err);
            } else {
                res.json({
                    success: true,
                    message: "Success to add data",
                });
            }
        });
    }
}