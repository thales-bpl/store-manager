const HTTP_BAD_REQUEST = 400;
const HTTP_UNPROCESSABLE_ENTITY = 422;

const NAME_REQUIRED = {
  message: '"name" is required',         
};

const INVALID_NAME = {
  message: '"name" length must be at least 5 characters long',
};

const productNameValid = (req, res, next) => {
  const { name } = req.body;

  if (!name) return res.status(HTTP_BAD_REQUEST).json(NAME_REQUIRED);
  if (name.length < 5) return res.status(HTTP_UNPROCESSABLE_ENTITY).json(INVALID_NAME);
  
  next();
};

module.exports = productNameValid;
