const express = require('express');

const router = express.Router();

const salesController = require('../controllers/salesController');

router
  .get('/', salesController.getSales);

module.exports = router;