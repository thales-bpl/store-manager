const productModel = require('../models/productModel');

const getProducts = async () => {
  const allProducts = await productModel.getProducts();
  console.log(`retorno do productService: ${allProducts}`);
  return allProducts;
};

module.exports = {
  getProducts,
};
