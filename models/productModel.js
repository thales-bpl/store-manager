const connection = require('./connection');

const getProducts = async () => {
  const query = `SELECT * FROM StoreManager.products
    ORDER BY id;`;
  const [rows] = await connection.execute(query);
  return rows;
};

const getProductById = async (id) => {
  const query = `SELECT * FROM StoreManager.products
    WHERE id = ?
    ORDER BY id;`;
  const [rows] = await connection.execute(query, [id]);
  return rows[0];
};

module.exports = {
  getProducts,
  getProductById,
};
