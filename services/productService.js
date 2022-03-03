const productModel = require('../models/productModel');

const getProducts = async () => {
  const allProducts = await productModel.getProducts();
  return allProducts;
};

const getProductById = async (id) => {
  const productById = await productModel.getProductById(id);
  return productById;
};

module.exports = {
  getProducts,
  getProductById,
};
