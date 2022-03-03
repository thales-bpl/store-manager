const salesModel = require('../models/salesModel');

const NO_SALE = {
  message: 'Sale not found',
};

const saleIdValidator = async (req, res, next) => {
  const { id } = req.params;
  const validId = await salesModel.getSaleById(id);
  if (!validId || validId.length === 0) return res.status(404).json(NO_SALE);
  next();
};

module.exports = saleIdValidator;