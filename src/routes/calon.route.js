const express = require('express');
const router = express.Router();

const calonController = require('../controller/calon.controller');

//get all calon
router.get('/', calonController.getCalonList);

//get calon by id
router.get('/:id',calonController.getCalonByID);

//tambah calon
router.post('/', calonController.createNewCalon);

//update calon
router.put('/:id', calonController.updateCalon);

//delete calon
router.delete('/:id',calonController.deleteCalon);

module.exports = router;