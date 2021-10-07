const express = require('express');
const router = express.Router();
const route = require('../controllers/user.controller');

router.get('/', route.getAllData);
router.get('/:id', route.getDataByID);
router.delete('/:id', route.deleteDataByID);
router.post('/', route.createData);
router.put('/:id', route.updateData);
module.exports = router;