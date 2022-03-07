const express = require('express');

const router = express.Router();

const salesController = require('../controllers/salesController');
const saleIdVerify = require('../middlewares/saleIdVerify');

router
  .get('/', salesController.getSales)
  .get('/:id', saleIdVerify, salesController.getSaleById);
  // .post('/', salesController.postSales);

module.exports = router;