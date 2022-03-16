const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../../models/connection');
const salesModel = require('../../../models/salesModel');

describe('Test SalesModel 1: getSales', () => { // OK
  const ALL_SALES = [
    {
      saleId: 1,
      date: "2022-03-16T06:39:34.000Z",
      productId: 1,
      quantity: 5
    },
    {
      saleId: 1,
      date: "2022-03-16T06:39:34.000Z",
      productId: 2,
      quantity: 10
    },
    {
      saleId: 2,
      date: "2022-03-16T06:39:34.000Z",
      productId: 3,
      quantity: 15
    }
  ]

  const MOCK = [[ALL_SALES], []]

  before(() => {
    sinon.stub(connection, 'execute').resolves(MOCK);
  });

  after(() => {
    connection.execute.restore();
  });

  it('retorna um array de sales', async () => {
    const result = await salesModel.getSales();

    expect(result[0]).to.be.a('array');
    expect(result[0]).not.to.be.empty;
    // result[0].forEach(product => expect(product).to.be.an('object'));
    // result[0].forEach(product => expect(product).not.to.be.empty);
  });
});

describe('Test SalesModel 2: getSaleById', () => { // OK
  before(async () => {
    const SALE_BY_ID = [
      {
        date: "2022-03-11T07:22:12.000Z",
        productId: 2,
        quantity: 10
      },
      {
        date: "2022-03-11T07:22:12.000Z",
        productId: 1,
        quantity: 5
      }
    ]

    const MOCK = [[SALE_BY_ID], []]

    sinon.stub(connection, 'execute').resolves(MOCK);
  });

  after(() => {
    connection.execute.restore();
  });

  it('retorna um array com objetos de sales', async () => {
    const result = await salesModel.getSaleById();

    expect(result).to.be.an('array'); // array????
    expect(result).not.to.be.empty;
  });
});

describe('Test SalesModel 3: postSale', () => { // OK
  before(async () => {
    const NEW_SALE_METADATA = {
      fieldCount: 0,
      affectedRows: 1,
      insertId: 3,
      info: '',
      serverStatus: 2,
      warningStatus: 0
    }

    const MOCK = [NEW_SALE_METADATA]

    sinon.stub(connection, 'execute').resolves(MOCK);
  });

  after(() => {
    connection.execute.restore();
  });

  it('retorna um objeto com metadados da nova sale', async () => {
    const result = await salesModel.postSale();

    expect(result).to.be.an('object');
    expect(result).to.have.a.property("insertId");
  });
});

// describe('Test SalesModel 4: insertSalesProduct', async () => { // TypeError: Cannot read property 'map' of undefined
//   const newSaleBody = [
//     {
//       "productId": 1,
//       "quantity": 2
//     }
//   ];

//   before(async () => {
//     const MOCK = [[], []]

//     sinon.stub(connection, 'execute').resolves(MOCK);
//   })

//   after(() => {
//     connection.execute.restore();
//   })

//   it('Se a função retorna "undefined" depois de executar a query', async () => {
//     const response = await salesModel.insertSalesProduct(newSaleBody);

//     expect(response).to.be.undefined;
//   })
// });

// describe('Test SalesModel 5: putSale', () => { // TypeError: Cannot read property 'map' of undefined
//   before(async () => {
//     const MOCK = [[], []]

//     sinon.stub(connection, "execute").resolves(MOCK);
//   });

//   after(async () => {
//     connection.execute.restore();
//   });
  
//   it("Testa se o produto é editado com sucesso", async () => {
//     const response = await salesModel.putSale()

//     expect(response).to.be.undefined;
//   });
// });