const productModel = require('../models/productModel');

const getProducts = async () => {
  const allProducts = await productModel.getProducts();
  return allProducts;
};

const getProductById = async (id) => {
  const productById = await productModel.getProductById(id);
  if (!productById) {
    return {
      code: 404,
      content: { message: 'Product not found' },
    };
  }

  return {
    code: 200,
    content: productById,
  };
};

const postProduct = async (name, quantity) => {
  const duplicateName = await productModel.findProductByName(name);
  if (duplicateName) {
    return {
      code: 409,
      content: { message: 'Product already exists' },
    };
  }

  const createdProduct = await productModel.postProduct(name, quantity);
  return {
    code: 201,
    content: {
      id: createdProduct.insertId,
      name,
      quantity,
    },
  };
};

const putProduct = async (id, name, quantity) => {
  const productById = await productModel.getProductById(id);
  if (!productById) {
    return {
      code: 404,
      content: { message: 'Product not found' },
    };
  }

  await productModel.putProduct(id, name, quantity);
  return {
    code: 200,
    content: {
      id,
      name,
      quantity,
    },
  };
};

// const deleteProduct = async (id) => {
//   const productById = await productModel.getProductById(id);
//   if (!productById) {
//     return {
//       code: 404,
//       content: { message: 'Product not found' },
//     };
//   }

//   await productModel.deleteProduct(id);
//   return {
//     code: 204,
//     content: {},
//   };
// };

module.exports = {
  getProducts,
  getProductById,
  postProduct,
  putProduct,
  // deleteProduct,
};
