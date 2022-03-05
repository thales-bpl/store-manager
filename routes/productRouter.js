const express = require('express');

const router = express.Router();

const productController = require('../controllers/productController');
const productIdVerify = require('../middlewares/productIdVerify');

router
  .get('/', productController.getProducts)
  .get('/:id', productIdVerify, productController.getProductById);

module.exports = router;
