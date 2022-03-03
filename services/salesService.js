const salesModel = require('../models/salesModel');

const getSales = async () => {
  const allSales = salesModel.getSales();
  return allSales;
};

const getSaleById = async (id) => {
  const saleById = salesModel.getSaleById(id);
  return saleById;
};

module.exports = {
  getSales,
  getSaleById,
};
