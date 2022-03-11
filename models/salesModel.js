const connection = require('./connection');

const getSales = async () => {
  const query = `SELECT
    sales.id AS saleId, sales.date, products.product_id AS productId, products.quantity
    FROM StoreManager.sales AS sales
    INNER JOIN StoreManager.sales_products AS products ON sale_id = sales.id;`;
  const [rows] = await connection.execute(query);
  return rows;
};

const getSaleById = async (id) => {
  const query = `SELECT
  sales.id AS saleId, sales.date, products.product_id AS productId, products.quantity
  FROM StoreManager.sales AS sales
  INNER JOIN StoreManager.sales_products AS products ON sale_id = sales.id
  WHERE id = ?
  ORDER BY saleId, productId DESC;`;
  const [rows] = await connection.execute(query, [id]);
  return rows;
};

const postSale = async () => {
  const query = 'INSERT INTO StoreManager.sales (id, date) VALUES (default, default);';
  const [rows] = await connection.execute(query);
  return rows;
};

const insertSalesProduct = async (saleId, saleBody) => {
  const query = `INSERT INTO StoreManager.sales_products
  (sale_id, product_id, quantity)
  VALUES (?, ?, ?);`;

  const insertedSale = saleBody.map(({ productId, quantity }) =>
    connection.execute(query, [saleId, productId, quantity]));

  await Promise.all(insertedSale);
};

const putSale = async (id, saleBody) => {
  const query = `UPDATE StoreManager.sales_products
  SET product_id = ?, quantity = ?
  WHERE sale_id = ?;`;

  const editedSale = saleBody.map(({ productId, quantity }) =>
    connection.execute(query, [productId, quantity, id]));

  await Promise.all(editedSale);
};

module.exports = {
  getSales,
  getSaleById,
  postSale,
  insertSalesProduct,
  putSale,
};
