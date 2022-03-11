const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../../models/connection');
const productModel = require('../../../models/productModel');

describe('Testa getProducts do Model', () => {
  before(() => {
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
    ]

    sinon.stub(connection, 'execute').resolves(ALL_PRODUCTS);
  });

  after(() => {
    connection.execute.restore();
  });

  it('retorna um array de objetos', async () => {
    const result = await productModel.getProducts();

    expect(result).to.be.an('array');
    expect(result).not.to.be.empty;
  });
});

describe('Testa getProductById do Model', () => {
  before(async () => {
    const PRODUCT = {
      id: 2,
      name: "Traje de encolhimento",
      quantity: 20
    }

    sinon.stub(connection, 'execute').resolves(PRODUCT);
  });

  after(() => {
    connection.execute.restore();
  });

  it('retorna um objeto com o produto', async () => {
    const result = await productModel.getProductById();

    expect(result).to.be.an('object');
    expect(result).not.to.be.empty;
  });
});

describe('Testa postProduct do Model', () => {
  const newProduct = {
    name: "Magic Book",
    quantity: 1
  };

  before(async () => {
    const NEW_PRODUCT = {
      id: 4,
      name: "Magic Book",
      quantity: 1
    }

    sinon.stub(connection, "execute").resolves(NEW_PRODUCT);
  });

  after(async () => {
    connection.execute.restore();
  });

  describe("Quando é inserido com sucesso", async () => {
    it("retorna um objeto", async () => {
      const response = await productModel.postProduct(newProduct)

      expect(response).to.be.a("object");
    });

    it('objeto retornado possui o "id" do novo produto inserido', async () => {
      const response = await productModel.postProduct(newProduct)

      expect(response).to.have.a.property("id");
    });
  });
});

describe('Testa putProduct do Model', () => {
  const productToBeEdited = {
    name: "Nintendo Switch",
    quantity: 1
  };

  before(async () => {
    const EDITED_PRODUCT = {
      id: 2,
      name: "Nintendo Switch",
      quantity: 1
    }

    sinon.stub(connection, "execute").resolves(EDITED_PRODUCT);
  });

  after(async () => {
    connection.execute.restore();
  });

  describe("Quando é editado com sucesso", async () => {
    it("retorna um objeto", async () => {
      const response = await productModel.putProduct(productToBeEdited)

      expect(response).to.be.a("object");
    });
  });
});
