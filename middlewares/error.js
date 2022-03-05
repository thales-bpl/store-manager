const error = (err, _req, res, _next) => {
  res.status(err.status || 500).json({ message: err.msg || 'Internal Server Error' });
};

module.exports = error;
