module.exports = {
  //users
  createUser: require("./users/createUser"),

  // roles working 
  createRole: require('./common/roles/createRole'),
	getRole: require('./common/roles/getRole'),
	getRoleById: require('./common/roles/getRoleById'),
	updateRole: require('./common/roles/updateRole'),
	deleteRole: require('./common/roles/deleteRole'),

  // product working 
  createProduct: require('./common/products/createProduct'),
	getProduct: require('./common/products/getProduct'),
	getProductById: require('./common/products/getProductById'),
	updateProduct: require('./common/products/updateProduct'),
	deleteProduct: require('./common/products/deleteProduct'),
};
