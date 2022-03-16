const sinon = require('sinon');
const { expect } = require('chai');
const productController = require('../../../controllers/productController');
const productService = require('../../../services/productService');

describe('Ao chamar a função getProducts no controller de produto', () => { // OK
  const ALL_PRODUCTS = [
    {
      "id": 1,
      "name": "Martelo de Thor",
      "quantity": 10
    },
    {
      "id": 2,
      "name": "Traje de encolhimento",
      "quantity": 20
    },
    {
      "id": 3,
      "name": "Escudo do Capitão América",
      "quantity": 30
    }
  ];

  describe('quando há sucesso na resposta', async () => {
    const request = {};
    const response = {};

    before(() => {
      response.status = sinon.stub().returns(response);
      response.send = sinon.stub().returns();
      sinon.stub(productController, 'getProducts').resolves(ALL_PRODUCTS);
    })

    after(() => {
      productController.getProducts.restore();
    })

    it('é retornado um array de objetos', async () => {
      const result = await productController.getProducts(request, response);

      expect(result).to.be.a('array');
    });
  });
});

describe('Ao chamar o productController.getProducts', () => { // OK
  let request = {}
  let response = {}
  let next = {};

  describe('Quando o serviço retorna um array de filmes', () => {

    before(() => {

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(productService, 'getProducts').resolves([]);
    });

    after(() => {
      productService.getProducts.restore();
    });

    it('responde a requisição com status 200', async () => {
      await productController.getProducts(request, response); // next()? Pedro usou no course

      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it('res.json() é chamado passando um array', async () => {
      await productController.getProducts(request, response); // next()? Pedro usou no course

      expect(response.json.calledWith(sinon.match.array)).to.be.equal(true);
    });
  });
});