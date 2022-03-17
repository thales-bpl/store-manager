const sinon = require('sinon');
const { expect } = require('chai');
const productController = require('../../../controllers/productController');
const productService = require('../../../services/productService');

describe('Test ProductController 1: getProducts', () => { // OK
  const request = {};
  const response = {};
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
    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(productService, 'getProducts').resolves(ALL_PRODUCTS);
    })

    after(() => {
      productService.getProducts.restore();
    })

    it('responde a requisição com status 200', async () => {
      await productController.getProducts(request, response);

      expect(response.status.calledWith(200)).to.be.true;
    });

    it('responde a requisição com um json de array de objetos', async () => {
      await productController.getProducts(request, response);

      expect(response.json.calledWith(sinon.match.array)).to.be.true;
    });
  });
});

// describe('Test ProductController 2: getProductById', () => { // OK
//   const request = {}
//   const response = {}
//   // let next = () => {}
//   const PRODUCT = {
//     id: 2,
//     name: "Traje de encolhimento",
//     quantity: 20
//   }

//   describe('Quando o serviço retorna o produto encontrado', () => {
//     before(() => {
//       request.params = { };
//       response.status = sinon.stub().returns(response);
//       response.json = sinon.stub().returns();
//       sinon.stub(productService, 'getProductById').resolves(PRODUCT.id);
//     });

//     after(() => {
//       productService.getProductById.restore();
//     });

//     it('responde a requisição com status 200', async () => {
//       await productController.getProductById(request, response);

//       expect(response.status.calledWith(200)).to.be.true;
//     });

//     it('responde a requisição com json de objeto do produto', async () => {
//       await productController.getProductById(request, response);

//       expect(response.json.calledWith(sinon.match.object)).to.be.true;
//     });
//   });
// });