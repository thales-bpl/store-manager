const connection = require('./connection');

const getProducts = async () => {
  const query = 'SELECT * FROM StoreManager.products;';
  const [rows] = await connection.execute(query);
  console.log(`productModel: ${rows}`);
  return rows;
};

module.exports = {
  getProducts,
};
