const productModel = require('../models/productModel');

const getProducts = async () => {
  const allProducts = await productModel.getProducts();
  return allProducts;
};

const getProductById = async (id) => {
  const productById = await productModel.getProductById(id);
  return productById;
};

const postProduct = async (name, quantity) => {
  const createdProduct = await productModel.postProduct(name, quantity);
  return {
    id: createdProduct.insertId,
    name,
    quantity,
  };
};

module.exports = {
  getProducts,
  getProductById,
  postProduct,
};
