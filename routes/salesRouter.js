const express = require('express');

const router = express.Router();

const salesController = require('../controllers/salesController');
const saleIdVerify = require('../middlewares/saleIdVerify');
const saleQntValid = require('../middlewares/saleQntValid');
const saleProductIdValid = require('../middlewares/saleProductIdValid');

router
  .get('/', salesController.getSales)
  .get('/:id', saleIdVerify, salesController.getSaleById)
  .post('/', saleQntValid, saleProductIdValid, salesController.postSale);

module.exports = router;