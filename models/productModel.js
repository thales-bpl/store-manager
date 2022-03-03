const connection = require('./connection');

const getProducts = async () => {
  const query = 'SELECT * FROM StoreManager.products;';
  const [rows] = await connection.execute(query);
  return rows;
};

const getProductById = async (id) => {
  const query = 'SELECT * FROM StoreManager.products WHERE id = ?;';
  const [rows] = await connection.execute(query, [id]);
  return rows;
};

module.exports = {
  getProducts,
  getProductById,
};
