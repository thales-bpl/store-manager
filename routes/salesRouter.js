const express = require('express');

const router = express.Router();

const salesController = require('../controllers/salesController');
const saleQntValid = require('../middlewares/saleQntValid');
const saleProductIdValid = require('../middlewares/saleProductIdValid');

router
  .get('/', salesController.getSales)
  .get('/:id', salesController.getSaleById)
  .post('/', saleQntValid, saleProductIdValid, salesController.postSale)
  .put('/:id', saleQntValid, saleProductIdValid, salesController.putSale);

module.exports = router;