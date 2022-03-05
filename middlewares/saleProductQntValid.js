const HTTP_BAD_REQUEST = 400;
const HTTP_UNPROCESSABLE_ENTITY = 422;

const QUANTITY_REQUIRED = {
  message: '"quantity" is required',         
};

const INVALID_QUANTITY = {
  message: '"quantity" must be greater than or equal to 1',
};

const saleProductQuantityValidator = (req, res, next) => {
  const { body } = req;

  const hasQuantity = body.every((sale) => sale.quantity !== undefined);
  const isValidQuantity = body.every((sale) => sale.quantity > 1);

  if (!hasQuantity) return res.status(HTTP_BAD_REQUEST).json(QUANTITY_REQUIRED);
  if (!isValidQuantity) return res.status(HTTP_UNPROCESSABLE_ENTITY).json(INVALID_QUANTITY);

  next();
};

module.exports = saleProductQuantityValidator;
