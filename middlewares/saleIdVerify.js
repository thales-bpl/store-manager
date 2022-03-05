const salesModel = require('../models/salesModel');

const HTTP_NOT_FOUND = 404;

const NO_SALE = {
  message: 'Sale not found',
};

const saleIdVerify = async (req, res, next) => {
  const { id } = req.params;

  const validId = await salesModel.getSaleById(id);

  if (!validId || validId.length === 0) return res.status(HTTP_NOT_FOUND).json(NO_SALE);

  next();
};

module.exports = saleIdVerify;
