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

    it('responde a requisição com um json', async () => {
      await productController.getProducts(request, response);

      expect(response.json.calledWith(sinon.match.array)).to.be.true;
    });
  });
});

describe('Test ProductController 2: getProductById', () => {
  const request = {};
  const response = {};

  const SERVICE_RESPONSE = {
    code: 200,
    content: {
      id: 2,
      name: "Traje de encolhimento",
      quantity: 20
    }
  };

  describe('Quando o serviço retorna o produto encontrado', () => {
    before(() => {
      request.params = { };
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(productService, 'getProductById').resolves(SERVICE_RESPONSE);
    });

    after(() => {
      productService.getProductById.restore();
    });

    it('responde a requisição com status 200', async () => {
      await productController.getProductById(request, response);

      expect(response.status.calledWith(200)).to.be.true;
    });

    it('responde a requisição com json de objeto do produto', async () => {
      await productController.getProductById(request, response);

      expect(response.json.calledWith(sinon.match.object)).to.be.true;
    });
  });
});

describe('Test ProductController 3: postProduct', () => {
  const request = {};
  const response = {};
  const SERVICE_RESPONSE = {
    code: 200,
    content: {
      id: 4,
      name: "Nintendo Switch",
      quantity: 10
    }
  };

  describe('Quando o serviço retorna o produto encontrado', () => {
    before(() => {
      request.body = {
        name: "Nintendo Switch",
        quantity: 10
      };
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(productService, 'postProduct').resolves(SERVICE_RESPONSE);
    });

    after(() => {
      productService.postProduct.restore();
    });

    it('responde a requisição com status 200', async () => {
      await productController.postProduct(request, response);

      expect(response.status.calledWith(200)).to.be.true;
    });

    it('responde a requisição com json de objeto do produto', async () => {
      await productController.postProduct(request, response);

      expect(response.json.calledWith(sinon.match.object)).to.be.true;
    });
  });
});

describe('Test ProductController 4: putProduct', () => {
  const request = {};
  const response = {};
  const SERVICE_RESPONSE = {
    code: 200,
    content: {
      id: 4,
      name: "Nintendo Switch",
      quantity: 10
    }
  };

  describe('Quando o serviço retorna o produto encontrado', () => {
    before(() => {
      request.params = { };
      request.body = {
        name: "Nintendo Switch",
        quantity: 10
      };
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(productService, 'putProduct').resolves(SERVICE_RESPONSE);
    });

    after(() => {
      productService.putProduct.restore();
    });

    it('responde a requisição com status 200', async () => {
      await productController.putProduct(request, response);

      expect(response.status.calledWith(200)).to.be.true;
    });

    it('responde a requisição com json de objeto do produto', async () => {
      await productController.putProduct(request, response);

      expect(response.json.calledWith(sinon.match.object)).to.be.true;
    });
  });
});