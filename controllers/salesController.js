const rescue = require('express-rescue');
const salesService = require('../services/salesService');

const getSales = rescue(async (_req, res) => {
  const allSales = await salesService.getSales();
  return res.status(200).json(allSales);
});

const getSaleById = rescue(async (req, res) => {
  const { id } = req.params;
  const saleById = await salesService.getSaleById(id);
  return res.status(200).json(saleById);
});

module.exports = {
  getSales,
  getSaleById,
};
