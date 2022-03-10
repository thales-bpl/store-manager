const express = require('express');

const router = express.Router();

const productController = require('../controllers/productController');
const productNameValid = require('../middlewares/productNameValid');
const productQntValid = require('../middlewares/productQntValid');

router
  .get('/', productController.getProducts) // OK
  .get('/:id', productController.getProductById) // OK
  .post('/', productQntValid, productNameValid, productController.postProduct) // OK
  .put('/:id', productQntValid, productNameValid, productController.putProduct) // OK
  .delete('/:id', productController.deleteProduct); // OK

module.exports = router;
