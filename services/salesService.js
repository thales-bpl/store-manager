const salesModel = require('../models/salesModel');

const getSales = async () => {
  const allSales = await salesModel.getSales();
  return allSales;
};

const getSaleById = async (id) => {
  const saleById = await salesModel.getSaleById(id);
  return saleById;
};

const postSale = async (sale) => {
  const newSaleId = await salesModel.postSale();
  await salesModel.insertSalesProduct(newSaleId, sale);

  return {
    id: newSaleId,
    itemsSold: sale,
  };
};

module.exports = {
  getSales,
  getSaleById,
  postSale,
};
