const HTTP_BAD_REQUEST = 400;

const PRODUCT_ID_REQUIRED = {
  message: '"productId" is required',
};

const saleProductIdValid = (req, res, next) => {
  const { body } = req;

  const missingId = body.some(({ product_id: id }) => !id);

  if (missingId) return res.status(HTTP_BAD_REQUEST).json(PRODUCT_ID_REQUIRED);

  next();
};

module.exports = saleProductIdValid;
