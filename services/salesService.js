const salesModel = require('../models/salesModel');
const productModel = require('../models/productModel');

const getSales = async () => {
  const allSales = await salesModel.getSales();
  return allSales;
};

const getSaleById = async (id) => {
  const saleById = await salesModel.getSaleById(id);

  if (saleById.length === 0) {
    return {
      code: 404,
      content: { message: 'Sale not found' },
    };
  }

  const mapper = (sale) => ({
    date: sale.date,
    productId: sale.productId,
    quantity: sale.quantity,
  });

  return {
    code: 200,
    content: saleById.map(mapper),
  };
};

const postSale = async (saleBody) => {
  const productsIdInSale = saleBody.map(({ productId }) => productModel.getProductById(productId));
  const allProducts = await Promise.all(productsIdInSale);
  const someInvalidId = allProducts.some((product) => !product);

  if (someInvalidId) {
    return {
      code: 404,
      content: { message: 'Product not found' },
    };
  }

  const newSaleId = await salesModel.postSale();
  await salesModel.insertSalesProduct(newSaleId, saleBody);

  return {
    code: 201,
    content: {
      id: newSaleId,
      itemsSold: saleBody,
    },
  };
};

module.exports = {
  getSales,
  getSaleById,
  postSale,
};
