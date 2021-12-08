const HarapanModel = require('../models/harapan.model.js');

// get all harapan
exports.getAllHarapanList = (req, res) => {
    HarapanModel.getAllHarapanList((err, harapan) => {
        console.log('We are here');
        if (err) res.send(err);
        console.log('harapan', harapan);
        res.send(harapan)
    })
}

// get employee by ID
exports.getHarapanByIDHarapan = (req, res) => {
    HarapanModel.getHarapanByIdHarapan(req.params.id, (err, harapan) => {
        if (err)
            res.send(err);
        res.send(harapan);
    })
}

// create harapan
exports.createHarapan = (req, res) => {
    const ReqData = new HarapanModel(req.body);
    console.log('ReqData', ReqData);
    // check if null
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({ success: false, message: 'tolong diisi semua' });
    } else {
        HarapanModel.createHarapan(ReqData, (err, harapan) => {
            if (err) res.send(err);
            res.json({ status: true, message: 'Harapan Created Successfully', data: harapan.insert })
        })
    }
}