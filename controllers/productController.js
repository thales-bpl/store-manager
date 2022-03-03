const rescue = require('express-rescue');
const productService = require('../services/productService');

const getProducts = rescue(async (_req, res) => {
  const allProducts = await productService.getProducts();
  console.log(`retorno do productController: ${allProducts}`);
  res.status(200).json(allProducts);
});

module.exports = {
  getProducts,
};
