const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../../models/connection');
const salesModel = require('../../../models/salesModel');

// describe('Testa getSales do Model', () => {
//   before(() => {
//     const ALL_SALES = [
//       {
//         saleId: 1,
//         date: "2022-03-11T07:22:12.000Z",
//         productId: 1,
//         quantity: 5
//       },
//       {
//         saleId: 1,
//         date: "2022-03-11T07:22:12.000Z",
//         productId: 2,
//         quantity: 10
//       },
//       {
//         saleId: 2,
//         date: "2022-03-11T07:22:12.000Z",
//         productId: 3,
//         quantity: 15
//       }
//     ]

//     sinon.stub(connection, 'execute').resolves(ALL_SALES);
//   });

//   after(() => {
//     connection.execute.restore();
//   });

//   it('retorna um array de objetos', async () => {
//     const result = await salesModel.getSales();

//     expect(result).to.be.an('array');
//     expect(result).not.to.be.empty;
//   });
// });

// describe('Testa getSaleById do Model', () => {
//   before(async () => {
//     const SALE_BY_ID = [
//       {
//         date: "2022-03-11T07:22:12.000Z",
//         productId: 2,
//         quantity: 10
//       },
//       {
//         date: "2022-03-11T07:22:12.000Z",
//         productId: 1,
//         quantity: 5
//       }
//     ]

//     sinon.stub(connection, 'execute').resolves(SALE_BY_ID);
//   });

//   after(() => {
//     connection.execute.restore();
//   });

//   it('retorna um objeto com o produto', async () => {
//     const result = await salesModel.getSaleById();

//     expect(result).to.be.an('object');
//     expect(result).not.to.be.empty;
//   });
// });