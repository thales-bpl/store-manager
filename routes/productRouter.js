const express = require('express');

const router = express.Router();

const productController = require('../controllers/productController');
const productNameValid = require('../middlewares/productNameValid');
const productQntValid = require('../middlewares/productQntValid');

router
  .get('/', productController.getProducts)
  .get('/:id', productController.getProductById)
  .post('/', productQntValid, productNameValid, productController.postProduct)
  .put('/:id', productQntValid, productNameValid, productController.putProduct)
  .delete('/:id', productController.deleteProduct);

module.exports = router;
