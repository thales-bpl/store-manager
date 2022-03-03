require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const errorMiddleware = require('./middlewares/error');
const productRouter = require('./routes/productRouter');
// const salesRouter = require('./routes/salesRouter');

const app = express();

app.use(bodyParser.json());
app.use('/products', productRouter);
// app.use('/sales', salesRouter);
app.use(errorMiddleware);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.listen(process.env.PORT, () => {
  console.log(`Escutando na porta ${process.env.PORT}`);
});
