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

const findProductByName = async (name) => {
  const query = 'SELECT * FROM StoreManager.products WHERE name = ?;';
  const [rows] = await connection.execute(query, [name]);
  return rows[0];
};

const postProduct = async (name, quantity) => {
  const query = 'INSERT INTO StoreManager.products (name, quantity) VALUES (?, ?);';
  const [rows] = await connection.execute(query, [name, quantity]);
  return rows;
};

const putProduct = async (id, name, quantity) => {
  const query = `UPDATE StoreManager.products
    SET name = ?, quantity = ?
    WHERE id = ?;`;
  await connection.execute(query, [name, quantity, id]);
};

module.exports = {
  getProducts,
  getProductById,
  findProductByName,
  postProduct,
  putProduct,
};
