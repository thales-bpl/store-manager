const rescue = require('express-rescue');
const salesService = require('../services/salesService');

const getSales = rescue(async (_req, res) => {
  const allSales = await salesService.getSales();
  res.status(200).json(allSales);
});

module.exports = {
  getSales,
};
