const salesModel = require('../models/salesModel');
const productModel = require('../models/productModel');

const updateStock = async (dbSaleBody, newSaleBody) => {
  if (dbSaleBody.quantity > newSaleBody.quantity) {
    const productToAdd = {
      productId: dbSaleBody.id,
      quantity: dbSaleBody.quantity - newSaleBody.quantity,
    };
    console.log('productToAdd from salesService.updateStock:');
    console.log(productToAdd);
    // TO-DO: temos algum problema de contagem aqui
    await productModel.addToStock(productToAdd);
  }
  
  if (dbSaleBody.quantity < newSaleBody.quantity) {
    const productToRemove = {
      productId: dbSaleBody.id,
      quantity: newSaleBody.quantity - dbSaleBody.quantity,
    };
    console.log('productToRemove from salesService.updateStock:');
    console.log(productToRemove);
    // TO-DO: provavelmente aqui tb
    await productModel.removeFromStock(productToRemove);
  }
};

const validateRemoveFromStock = async (saleBody) => {
  const targetProducts = saleBody.map(({ productId }) => productModel.getProductById(productId));
  const storageProducts = await Promise.all(targetProducts);
  const invalidSale = saleBody.some(({ quantity }, index) =>
    quantity > storageProducts[index].quantity);

  return invalidSale; // retorna true se alguma compra é maior que o estoque
};

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
  if (someInvalidId) return { code: 404, content: { message: 'Product not found' } };

  const invalidQt = await validateRemoveFromStock(saleBody);
  if (invalidQt) return { code: 422, content: { message: 'Such amount is not permitted to sell' } };

  const updatedItems = saleBody.map((product) => productModel.removeFromStock(product));
  await Promise.all(updatedItems);
  const newSaleId = await salesModel.postSale();
  await salesModel.insertSalesProduct(newSaleId.insertId, saleBody);

  return { code: 201, content: { id: newSaleId.insertId, itemsSold: saleBody } };
};

const putSale = async (id, saleBody) => {
  const productsIdInSale = saleBody.map(({ productId }) => productModel.getProductById(productId));
  const allProducts = await Promise.all(productsIdInSale);
  const someInvalidId = allProducts.some((product) => !product);
  if (someInvalidId) return { code: 404, content: { message: 'Product not found' } };

  const saleById = await salesModel.getSaleById(id);
  if (saleById.length === 0) return { code: 404, content: { message: 'Sale not found' } };

  const updated = allProducts.map((dbSaleBody, index) => updateStock(dbSaleBody, saleBody[index]));
  await Promise.all(updated);
  // Pode ser subtração ou adição
  // Verificar quantidade aqui. if ok, seguir, else: early return

  await salesModel.putSale(id, saleBody);
  return { code: 200, content: { saleId: id, itemUpdated: saleBody } };
};

const deleteSale = async (id) => {
  const saleById = await salesModel.getSaleById(id);
  if (saleById.length === 0) {
    return {
      code: 404,
      content: { message: 'Sale not found' },
    };
  }

  const updatedItems = saleById.map((product) => productModel.addToStock(product));
  await Promise.all(updatedItems);

  await salesModel.deleteSale(id);
  return {
    code: 204,
    content: {},
  };
};

module.exports = {
  getSales,
  getSaleById,
  postSale,
  putSale,
  deleteSale,
};
