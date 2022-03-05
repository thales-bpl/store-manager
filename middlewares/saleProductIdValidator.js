const HTTP_BAD_REQUEST = 400;

const PRODUCT_ID_REQUIRED = {
  message: '"productId" is required',
};

const saleProductIdValidator = (req, res, next) => {
  const { body } = req;
  const hasId = body.every((product) => product.productId !== undefined);
  if (!hasId) return res.status(HTTP_BAD_REQUEST).json(PRODUCT_ID_REQUIRED);
  next();
};

module.exports = saleProductIdValidator;
