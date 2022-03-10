const rescue = require('express-rescue');
const salesService = require('../services/salesService');

const getSales = rescue(async (_req, res) => {
  const allSales = await salesService.getSales();
  return res.status(200).json(allSales);
});

const getSaleById = rescue(async (req, res) => {
  const { id } = req.params;
  const saleById = await salesService.getSaleById(id);
  return res.status(saleById.code).json(saleById.content);
});

const postSale = rescue(async (req, res) => {
  const { body } = req;
  const newSale = await salesService.postSale(body);
  return res.status(newSale.code).json(newSale.content);
});

const putSale = rescue(async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const editedSale = await salesService.putSale(id, body);
  return res.status(editedSale.code).json(editedSale.content);
});

module.exports = {
  getSales,
  getSaleById,
  postSale,
  putSale,
};
