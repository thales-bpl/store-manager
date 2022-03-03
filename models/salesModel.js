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
  const rows = await connection.execute(query, [id]);
  return rows[0];
};

module.exports = {
  getSales,
  getSaleById,
};
