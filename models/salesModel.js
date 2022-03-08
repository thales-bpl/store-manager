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
  return rows.insertId;
};

const insertSalesProduct = async (newSaleId, saleBody) => {
  const query = `INSERT INTO StoreManager.sales_products
  (sale_id, product_id, quantity)
  VALUES (?, ?, ?);`;

  const insertSales = saleBody.map(({ product_id: productId, quantity }) =>
    connection.execute(query, [newSaleId, productId, quantity]));

  await Promise.all(insertSales);
};

module.exports = {
  getSales,
  getSaleById,
  postSale,
  insertSalesProduct,
};
