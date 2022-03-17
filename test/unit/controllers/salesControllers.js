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