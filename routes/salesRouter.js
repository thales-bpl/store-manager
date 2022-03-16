const express = require('express');
const rescue = require('express-rescue');

const router = express.Router();

const salesController = require('../controllers/salesController');
const saleQntValid = require('../middlewares/saleQntValid');
const saleProductIdValid = require('../middlewares/saleProductIdValid');

router
  .get('/', rescue(salesController.getSales))
  .get('/:id', rescue(salesController.getSaleById))
  .post('/', saleQntValid, saleProductIdValid, rescue(salesController.postSale))
  .put('/:id', saleQntValid, saleProductIdValid, rescue(salesController.putSale))
  .delete('/:id', rescue(salesController.deleteSale));

module.exports = router;