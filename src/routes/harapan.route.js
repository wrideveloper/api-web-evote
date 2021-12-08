const express = require('express');
const router = express.Router();

const harapanController = require('../controllers/harapan.controller');

router.get('/', harapanController.getAllHarapanList);
router.get('/:id', harapanController.getHarapanByIDHarapan);
router.post('/', harapanController. createHarapan);

module.exports = router;