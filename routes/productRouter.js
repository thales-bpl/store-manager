const express = require('express');

const router = express.Router();

const productController = require('../controllers/productController');
const productIdValidator = require('../middlewares/productIdValidator');

router
  .get('/', productController.getProducts)
  .get('/:id', productIdValidator, productController.getProductById);

module.exports = router;
