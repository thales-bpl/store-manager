const productModel = require('../models/productModel');

const HTTP_NOT_FOUND = 404;

const NO_PRODUCT = {
  message: 'Product not found',
};

const productIdVerify = async (req, res, next) => {
  const { id } = req.params;
  const validId = await productModel.getProductById(id);
  if (!validId) return res.status(HTTP_NOT_FOUND).json(NO_PRODUCT);
  next();
};

module.exports = productIdVerify;