const connection = require('./connection');

const getProducts = async () => {
  const query = `SELECT * FROM products
    ORDER BY id;`;
  const [rows] = await connection.execute(query);
  return rows;
};

const getProductById = async (id) => {
  const query = `SELECT * FROM products
    WHERE id = ?;`;
  const [rows] = await connection.execute(query, [id]);
  return rows[0];
};

const postProduct = async (name, quantity) => {
  const query = 'INSERT INTO products (name, quantity) VALUES (?, ?);';
  const [rows] = await connection.execute(query, [name, quantity]);
  return rows;
};

const putProduct = async (id, name, quantity) => {
  const query = `UPDATE products
    SET name = ?, quantity = ?
    WHERE id = ?;`;
  await connection.execute(query, [name, quantity, id]);
};

const deleteProduct = async (id) => {
  const query = `DELETE from products
    WHERE id = ?;`;
  await connection.execute(query, [id]);
};

const findProductByName = async (name) => {
  const query = 'SELECT * FROM products WHERE name = ?;';
  const [rows] = await connection.execute(query, [name]);
  return rows[0];
};

const removeFromStock = async ({ productId, quantity }) => {
  const query = `UPDATE products
  SET quantity = quantity - ?
  WHERE id = ?
  ;`;
  await connection.execute(query, [quantity, productId]);
  console.log('removed from stock!');
};

const addToStock = async ({ productId, quantity }) => {
  const query = `UPDATE products
  SET quantity = quantity + ?
  WHERE id = ?
  ;`;
  await connection.execute(query, [quantity, productId]);
  console.log('added to stock!');
};

module.exports = {
  getProducts,
  getProductById,
  findProductByName,
  postProduct,
  putProduct,
  deleteProduct,
  removeFromStock,
  addToStock,
};
