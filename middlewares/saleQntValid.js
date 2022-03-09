const HTTP_BAD_REQUEST = 400;
const HTTP_UNPROCESSABLE_ENTITY = 422;

const QUANTITY_REQUIRED = {
  message: '"quantity" is required',         
};

const INVALID_QUANTITY = {
  message: '"quantity" must be greater than or equal to 1',
};

const saleQntValid = (req, res, next) => {
  const { body } = req;

  const missingQuantity = body.some(({ quantity }) => (!quantity && quantity !== 0));
  const invalidQuantity = body.some(({ quantity }) => quantity < 1);
  
  if (missingQuantity) return res.status(HTTP_BAD_REQUEST).json(QUANTITY_REQUIRED);
  if (invalidQuantity) return res.status(HTTP_UNPROCESSABLE_ENTITY).json(INVALID_QUANTITY);

  next();
};

module.exports = saleQntValid;
