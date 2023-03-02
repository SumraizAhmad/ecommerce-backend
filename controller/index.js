module.exports = {

  // roles working
  createRole: require("./common/roles/createRole"),
  getRole: require("./common/roles/getRole"),
  getRoleById: require("./common/roles/getRoleById"),
  updateRole: require("./common/roles/updateRole"),
  deleteRole: require("./common/roles/deleteRole"),

  // product working
  createProduct: require("./common/products/createProduct"),
  getProduct: require("./common/products/getProduct"),
  getProductById: require("./common/products/getProductById"),
  updateProduct: require("./common/products/updateProduct"),
  deleteProduct: require("./common/products/deleteProduct"),

  //userWorking
  createUser: require("./users/createUser"),
  getUser: require("./users/getUser"),
  updateUser: require("./users/updateUser"),



  //   authentication
  login: require("./common/login"),
};
