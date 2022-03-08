const express = require('express');

const router = express.Router();

const salesController = require('../controllers/salesController');
const saleIdVerify = require('../middlewares/saleIdVerify');
// const saleQntValid = require('../middlewares/saleQntValid');
// const productQntValid = require('../middlewares/productQntValid');

router
  .get('/', salesController.getSales)
  .get('/:id', saleIdVerify, salesController.getSaleById)
  .post('/', salesController.postSale);

module.exports = router;