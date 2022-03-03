const salesModel = require('../models/salesModel');

const getSales = async () => {
  const allSales = salesModel.getSales();
  return allSales;
};

module.exports = {
  getSales,
};
