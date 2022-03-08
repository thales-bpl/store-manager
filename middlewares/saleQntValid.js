const HTTP_BAD_REQUEST = 400;
const HTTP_UNPROCESSABLE_ENTITY = 422;

const QUANTITY_REQUIRED = {
  message: '"quantity" is required',         
};

const INVALID_QUANTITY = {
  message: '"quantity" must be greater than or equal to 1',
};

const productQntValid = (req, res, next) => { // refatorar essa lógica pra evitar multipls returns
  const { body } = req;

  body.forEach(({ quantity }) => {
    if (!quantity && quantity !== 0) return res.status(HTTP_BAD_REQUEST).json(QUANTITY_REQUIRED);
    if (quantity < 1) return res.status(HTTP_UNPROCESSABLE_ENTITY).json(INVALID_QUANTITY);
  });
  
  next();
};

module.exports = productQntValid;
