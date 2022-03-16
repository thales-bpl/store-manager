const productService = require('../services/productService');

const getProducts = async (_req, res) => {
  const allProducts = await productService.getProducts();
  return res.status(200).json(allProducts);
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const productById = await productService.getProductById(id);
  return res.status(productById.code).json(productById.content);
};

const postProduct = async (req, res) => {
  const { name, quantity } = req.body;
  const createdProduct = await productService.postProduct(name, quantity);
  return res.status(createdProduct.code).json(createdProduct.content);
};

const putProduct = async (req, res) => {
  const { id } = req.params;
  const { name, quantity } = req.body;
  const editedProduct = await productService.putProduct(id, name, quantity);
  return res.status(editedProduct.code).json(editedProduct.content);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const deletedProduct = await productService.deleteProduct(id);
  return res.status(deletedProduct.code).json(deletedProduct.content);
};

module.exports = {
  getProducts,
  getProductById,
  postProduct,
  putProduct,
  deleteProduct,
};
