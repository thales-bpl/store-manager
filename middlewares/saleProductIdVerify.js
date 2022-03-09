const productModel = require('../models/productModel');

const HTTP_NOT_FOUND = 404;

const NO_PRODUCT = {
  message: 'Product not found',
};

// MW funciona perfeitamente, mas me retorna 500 ao invés de 404
// Se mudar a L20 pra 'if (!someInvalidId)...', ele me retorna o erro correto (404), mas quebra a lógica do MW
const saleProductIdVerify = async (req, res, next) => {
  const { body } = req;

  const getAllIdsInSale = body.map(({ product_id: id }) => productModel.getProductById(id));

  await Promise.all(getAllIdsInSale);

  const someInvalidId = getAllIdsInSale.some((product) => !product);

  if (someInvalidId) return res.status(HTTP_NOT_FOUND).json(NO_PRODUCT);

  next();
};

module.exports = saleProductIdVerify;
