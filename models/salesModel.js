const connection = require('./connection');

const getSales = async () => {
  const query = 'SELECT * FROM StoreManager.sales;';
  const [rows] = await connection.execute(query);
  return rows;
};

module.exports = {
  getSales,
};
