const express = require('express');

const router = express.Router();

const productController = require('../controllers/productController');

router
  .get('/', productController.getProducts)
  .get('/:id', productController.getProductById);

module.exports = router;
