const express = require('express');

const router = express.Router();

const productController = require('../controllers/productController');
const productIdVerify = require('../middlewares/productIdVerify');
const productNameValid = require('../middlewares/productNameValid');
const productQntValid = require('../middlewares/productQntValid');
const productNameVerify = require('../middlewares/productNameVerify');

router
  .get('/', productController.getProducts)
  .get('/:id', productIdVerify, productController.getProductById)
  .post('/', productQntValid, productNameValid, productNameVerify, productController.postProduct)
  .put('/:id', productIdVerify, productController.putProduct);

module.exports = router;
