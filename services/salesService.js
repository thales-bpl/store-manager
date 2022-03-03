const salesModel = require('../models/salesModel');

const getSales = async () => {
  const allSales = await salesModel.getSales();
  return allSales;
};

const getSaleById = async (id) => {
  const saleById = await salesModel.getSaleById(id);

  const mapper = (sale) => ({
    date: sale.date,
    productId: sale.productId,
    quantity: sale.quantity,
  });

  return saleById.map(mapper);
};

module.exports = {
  getSales,
  getSaleById,
};
