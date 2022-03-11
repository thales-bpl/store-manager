const sinon = require("sinon");
const { expect } = require("chai");
const salesModel = require('../../../models/salesModel');
const saleService = require('../../../services/salesService');

describe("Testa getSales no Service", () => {
  describe('quando retorna sales com sucesso', () => {
    before(() => {
      const MOCK_RETURN = [
        {
          saleId: 1,
          date: "2022-03-11T07:22:12.000Z",
          productId: 1,
          quantity: 5
        },
        {
          saleId: 1,
          date: "2022-03-11T07:22:12.000Z",
          productId: 2,
          quantity: 10
        },
        {
          saleId: 2,
          date: "2022-03-11T07:22:12.000Z",
          productId: 3,
          quantity: 15
        }
      ]

      sinon.stub(salesModel, "postSales").resolves(MOCK_RETURN);
    });

    after(() => {
      salesModel.getSales.restore();
    });

    it("retorna um objeto", async () => {
      const response = await saleService.getSales();

      expect(response).to.be.a("array");
    });
  });
});

describe("Testa postSale no Service", () => {
  describe("quando é inserido com sucesso", async () => {
    const NEW_SALE = [
      {
        productId: 1,
        quantity: 2
      }
    ]

    before(() => {
      const MOCK_RETURN = {
        id: 3,
        itemsSold: [
          {
            productId: 1,
            quantity: 2
          }
        ]
      }

      sinon.stub(salesModel, "postSales").resolves(MOCK_RETURN);
    });

    after(() => {
      salesModel.postSale.restore();
    });

    it("retorna um objeto", async () => {
      const response = await saleService.postProduct(NEW_SALE);

      expect(response).to.be.a("object");
    });
  });
});
