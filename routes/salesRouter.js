const express = require('express');

const router = express.Router();

const salesController = require('../controllers/salesController');
const saleIdVerify = require('../middlewares/saleIdVerify');
const saleQntValid = require('../middlewares/saleQntValid');

router
  .get('/', salesController.getSales)
  .get('/:id', saleIdVerify, salesController.getSaleById)
  .post('/', saleQntValid, salesController.postSale);

module.exports = router;