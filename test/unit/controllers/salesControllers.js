const sinon = require('sinon');
const { expect } = require('chai');
const salesController = require('../../../controllers/salesController');
const salesService = require('../../../services/salesService');

describe('Test salesController 1: getSales', () => {
  const request = {};
  const response = {};
  const ALL_SALES = [
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
      sinon.stub(salesService, 'getSales').resolves(ALL_SALES);
    })

    after(() => {
      salesService.getSales.restore();
    })

    it('responde a requisição com status 200', async () => {
      await salesController.getSales(request, response);

      expect(response.status.calledWith(200)).to.be.true;
    });

    it('responde a requisição com um json de array de objetos', async () => {
      await salesController.getSales(request, response);

      expect(response.json.calledWith(sinon.match.array)).to.be.true;
    });
  });
});

describe('Test salesController 2: getSaleById', () => {
  const request = {};
  const response = {};
  const SERVICE_RESPONSE = {
    code: 200,
    content: [
      {
        date: "2022-03-18T00:44:05.000Z",
        productId: 3,
        quantity: 15
      }
    ]
  };

  describe('No caso de sucesso na requisição:', () => {
    before(() => {
      request.params = { };
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(request);
      sinon.stub(salesService, 'getSaleById').resolves(SERVICE_RESPONSE);
    });

    after(() => {
      salesService.getSaleById.restore()
    });

    it('responde a requisição com status 200', async () => {
      await salesController.getSaleById(request, response);

      expect(response.status.calledWith(200)).to.be.true;
    });
  });

});

describe('Test salesController 3: postSale', () => {
  const request = {};
  const response = {};
  const SERVICE_RESPONSE = {
    code: 201,
    content: {
      id: 3,
      itemsSold: [
        {
          productId: 3,
          quantity: 5
        }
      ]
    }
  };

  describe('Quando o serviço retorna o produto encontrado', () => {
    before(() => {
      request.body = [
        {
          productId: 3,
          quantity: 5
        }
      ];
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(salesService, 'postSale').resolves(SERVICE_RESPONSE);
    });

    after(() => {
      salesService.postSale.restore();
    });

    it('responde a requisição com status 201', async () => {
      await salesController.postSale(request, response);

      expect(response.status.calledWith(201)).to.be.true;
    });

    it('responde a requisição com json de objeto do produto', async () => {
      await salesController.postSale(request, response);

      expect(response.json.calledWith(sinon.match.object)).to.be.true;
    });
  });
});