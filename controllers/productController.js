const rescue = require('express-rescue');
const productService = require('../services/productService');

const getProducts = rescue(async (_req, res) => {
  const allProducts = await productService.getProducts();
  return res.status(200).json(allProducts);
});

const getProductById = rescue(async (req, res) => {
  const { id } = req.params;
  const productById = await productService.getProductById(id);
  return res.status(200).json(productById);
});

const postProduct = rescue(async (req, res) => {
  const { name, quantity } = req.body;
  const createdProduct = await productService.postProduct(name, quantity);
  return res.status(201).json(createdProduct);
});

const putProduct = rescue(async (req, res) => {
  const { id } = req.params;
  const { name, quantity } = req.body;
  const editedProduct = await productService.putProduct(id, name, quantity);
  return res.status(200).json(editedProduct);
});

const deleteProduct = rescue(async (req, res) => {
  const { id } = req.params;
  await productService.deleteProduct(id);
  return res.status(204).end();
});

module.exports = {
  getProducts,
  getProductById,
  postProduct,
  putProduct,
  deleteProduct,
};
