const HTTP_BAD_REQUEST = 400;
const HTTP_UNPROCESSABLE_ENTITY = 422;

const QUANTITY_REQUIRED = {
  message: '"quantity" is required',         
};

const INVALID_QUANTITY = {
  message: '"quantity" must greater than or equal to 1',
};

const productQuantityValidator = (req, res, next) => {
  const { quantity } = req.body;
  if (!quantity) return res.status(HTTP_BAD_REQUEST).json(QUANTITY_REQUIRED);
  if (quantity < 1) return res.status(HTTP_UNPROCESSABLE_ENTITY).json(INVALID_QUANTITY);
  next();
};

module.exports = productQuantityValidator;
