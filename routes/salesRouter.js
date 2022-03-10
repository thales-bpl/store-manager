const express = require('express');

const router = express.Router();

const salesController = require('../controllers/salesController');
const saleIdVerify = require('../middlewares/saleIdVerify');
const saleQntValid = require('../middlewares/saleQntValid');
const saleProductIdValid = require('../middlewares/saleProductIdValid');
// const saleProductIdVerify = require('../middlewares/saleProductIdVerify');

router
  .get('/', salesController.getSales)
  .get('/:id', saleIdVerify, salesController.getSaleById) // verificar se o id venda existe
  .post('/', saleQntValid, saleProductIdValid, /* saleProductIdVerify, */ salesController.postSale);

module.exports = router;