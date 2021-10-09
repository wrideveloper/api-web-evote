const express = require('express');
const router = express.Router();
const route = require('../controllers/user.controller');

router.route('/')
  .get(route.getAllData)
  .post(route.createData);

router.route('/:id')
  .get(route.getDataByID)
  .delete(route.deleteDataByID)
  .put(route.updateData);

module.exports = router;
