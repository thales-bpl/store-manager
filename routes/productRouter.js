const express = require('express');
const rescue = require('express-rescue');

const router = express.Router();

const productController = require('../controllers/productController');
const productNameValid = require('../middlewares/productNameValid');
const productQntValid = require('../middlewares/productQntValid');

router
  .get('/', rescue(productController.getProducts))
  .get('/:id', rescue(productController.getProductById))
  .post('/', productQntValid, productNameValid, rescue(productController.postProduct))
  .put('/:id', productQntValid, productNameValid, rescue(productController.putProduct))
  .delete('/:id', rescue(productController.deleteProduct));

module.exports = router;
