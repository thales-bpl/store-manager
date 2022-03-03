const rescue = require('express-rescue');
const salesService = require('../services/salesService');

const getSales = rescue(async (_req, res) => {
  const allSales = await salesService.getSales();
  res.status(200).json(allSales);
});

const getSaleById = rescue(async (req, res) => {
  const { id } = req.params;
  const saleById = await salesService.getSaleById(id);
  console.log(saleById);
  res.status(200).json(saleById);
});

module.exports = {
  getSales,
  getSaleById,
};
