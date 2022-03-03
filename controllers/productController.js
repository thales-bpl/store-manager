const rescue = require('express-rescue');
const productService = require('../services/productService');

const getProducts = rescue(async (_req, res) => {
  const allProducts = await productService.getProducts();
  res.status(200).json(allProducts);
});

const getProductById = rescue(async (req, res) => {
  const { id } = req.params;
  const productById = await productService.getProductById(id);
  res.status(200).json(productById);
});

module.exports = {
  getProducts,
  getProductById,
};
