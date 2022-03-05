const productModel = require('../models/productModel');

const HTTP_CONFLICT = 409;

const DUPLICATE_NAME = {
  message: 'Product already exists',
};

const productNameVerify = async (req, res, next) => {
  const { name } = req.body;

  const duplicateName = await productModel.findProductByName(name);

  if (duplicateName) return res.status(HTTP_CONFLICT).json(DUPLICATE_NAME);

  next();
};

module.exports = productNameVerify;
