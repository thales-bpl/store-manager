const express = require('express');

const router = express.Router();

const salesController = require('../controllers/salesController');
const saleQntValid = require('../middlewares/saleQntValid');
const saleProductIdValid = require('../middlewares/saleProductIdValid');

router
  .get('/', salesController.getSales) // OK
  .get('/:id', salesController.getSaleById) // OK
  .post('/', saleQntValid, saleProductIdValid, salesController.postSale) // OK
  .put('/:id', saleQntValid, saleProductIdValid, salesController.putSale); // OK

module.exports = router;