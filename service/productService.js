const bcrypt = require("bcrypt");
const productModel = require("../model/productModel");

module.exports = {
  createProduct: async function (body) {
    const product = await productModel.getUserByAttribute(body);
    if (product.count != 0) {
      return "product already exists!";
    }

    const data = await productModel.createProduct(body);
    return data;
  },
  getProduct: async function (body) {
    const data = await productModel.getProduct(body);
    return data;
  },
  getProductById: async function (id) {
    const data = await productModel.getProductById(id);
    return data;
  },
  updateProduct: async function (body) {
    const data = await productModel.updateProduct(body);
    return data;
  },
  deleteProduct: async function (id) {
    const product = await productModel.getUserById(body);
    if (product.count != 0) {
      return "user already exists!";
    }
    const data = await productModel.deleteProduct(id);

    return data;
  },
};
