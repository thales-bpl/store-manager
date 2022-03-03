const productModel = require('../models/productModel');

const NO_PRODUCT = {
  message: 'Product not found',
};

const productIdValidator = async (req, res, next) => {
  const { id } = req.params;
  const validId = await productModel.getProductById(id);
  if (validId.length === 0) return res.status(404).json(NO_PRODUCT);
  next();
};

module.exports = productIdValidator;