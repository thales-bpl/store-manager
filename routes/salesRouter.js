const express = require('express');

const router = express.Router();

const salesController = require('../controllers/salesController');
const saleIdValidator = require('../middlewares/saleIdValidator');

router
  .get('/', salesController.getSales)
  .get('/:id', saleIdValidator, salesController.getSaleById);

module.exports = router;