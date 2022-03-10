const productModel = require('../models/productModel');

const HTTP_NOT_FOUND = 404;

const NO_PRODUCT = {
  message: 'Product not found',
};

const saleProductIdVerify = async (req, res, next) => {
  const { body } = req;

  const getAllIdsInSale = body.map(({ product_id: id }) => productModel.getProductById(id));

  const allProducts = await Promise.all(getAllIdsInSale);

  const someInvalidId = allProducts.some((product) => !product);

  if (someInvalidId) return res.status(HTTP_NOT_FOUND).json(NO_PRODUCT);

  next();
};

module.exports = saleProductIdVerify;
