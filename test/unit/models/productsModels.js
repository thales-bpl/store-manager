const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../../models/connection');
const productModel = require('../../../models/productModel');

describe('Test ProductModel 1: getProducts', () => { // OK
  const ALL_PRODUCTS = [
    {
      id: 1,
      name: "Martelo de Thor",
      quantity: 10
    },
    {
      id: 2,
      name: "Traje de encolhimento",
      quantity: 20
    },
    {
      id: 3,
      name: "Escudo do Capitão América",
      quantity: 30
    }
  ];

  const MOCK = [[ALL_PRODUCTS], []]

  before(() => {
    sinon.stub(connection, 'execute').resolves(MOCK);
  });

  after(() => {
    connection.execute.restore();
  });

  it('retorna um array de objetos', async () => {
    const result = await productModel.getProducts();

    expect(result[0]).to.be.a('array');
    expect(result[0]).not.to.be.empty;
    result[0].forEach(product => expect(product).to.be.an('object'));
    result[0].forEach(product => expect(product).not.to.be.empty);
  });
});

describe('Test ProductModel 2: getProductById', () => { // OK
  before(async () => {
    const PRODUCT = {
      id: 2,
      name: "Traje de encolhimento",
      quantity: 20
    }

    const MOCK = [[PRODUCT], []]
    
    sinon.stub(connection, 'execute').resolves(MOCK);
  });

  after(() => {
    connection.execute.restore();
  });

  it('retorna um objeto com o produto', async () => {
    // const ID = 2;
    const result = await productModel.getProductById();

    expect(result).to.be.an('object');
    expect(result).to.have.property('id'); // verificar multiplas properties simultaneamente
    expect(result).not.to.be.empty;
  });
});

describe('Test ProductModel 3: postProduct', () => { // OK
  before(async () => {
    const NEW_PRODUCT = {
      id: 4,
      name: "Magic Book",
      quantity: 1
    }

    const MOCK = [[NEW_PRODUCT], []]

    sinon.stub(connection, 'execute').resolves(MOCK);
  });

  after(async () => {
    connection.execute.restore();
  });
  
  it('retorna um objeto com o id do produto inserido', async () => {
    const response = await productModel.postProduct()

    expect(response[0]).to.be.a('object');
    expect(response[0]).to.have.a.property('id');
  });
});

describe('Test ProductModel 4: deleteProduct', () => { // OK
  before(async () => {
    const MOCK = [[], []]

    sinon.stub(connection, "execute").resolves(MOCK);
  });

  after(async () => {
    connection.execute.restore();
  });
  
  it('Testa se a função retorna "undefined" após executar a query', async () => {
    const response = await productModel.deleteProduct()

    expect(response).to.be.undefined;
  });
});

describe('Test ProductModel 5: putProduct', () => { // OK
  before(async () => {
    const MOCK = [[], []]

    sinon.stub(connection, "execute").resolves(MOCK);
  });

  after(async () => {
    connection.execute.restore();
  });
  
  it("Testa se o produto é editado com sucesso", async () => {
    const response = await productModel.putProduct()

    expect(response).to.be.undefined;
  });
});

describe('Test ProductModel 6: findProductByName', () => { // OK
  before(async () => {
    const PRODUCT = {
      id: 2,
      name: "Traje de encolhimento",
      quantity: 20
    }

    const MOCK = [[PRODUCT], []]
    
    sinon.stub(connection, 'execute').resolves(MOCK);
  });

  after(() => {
    connection.execute.restore();
  });

  it('retorna um objeto com o produto', async () => {
    const result = await productModel.findProductByName();

    expect(result).to.have.property('id');
    expect(result).to.have.property('name');
    expect(result).to.have.property('quantity');
    expect(result).not.to.be.empty;
  });
});
