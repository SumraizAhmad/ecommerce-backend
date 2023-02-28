const Sequelize = require("sequelize");
var config = require("../../config.json");
const db = {};
config = config.db;
let sequelize = require("../../common/dbConnection");
const  User  = require("../definition/users");
const Cart=require('../definition/cart');
const Order=require('../definition/order');
const Product=require('../definition/product');
const Role=require('../definition/role');
const CartItems=require('../definition/cartItems');
const models = {
  User,
  Cart,
  Order,
  Product,
  Role
};

//relations

//Roles-users one to many
Role.hasMany(User, {onDelete:'CASCADE', foreignKey: 'roleId'});
User.belongsTo(Role, {onDelete :'CASCADE', foreignKey: 'roleId'})

//Users-cart one to one
User.hasOne(Cart, {onDelete:'CASCADE', foreignKey: 'userId'});
Cart.belongsTo(User, {onDelete :'CASCADE', foreignKey: 'userId'})

//products-cartItems one to many
Product.hasMany(CartItems, {onDelete:"CASCADE", foreignKey:'productId'});
CartItems.belongsTo(Product, {onDelete:'CASCADE', foreignKey:'productId'});

// Cart-CartItems one to many
Cart.hasMany(Cart, {onDelete: 'CASCADE', foreignKey:'cartId'});
CartItems.belongsTo(Cart, {onDelete: 'CASCADE', foreignKey:'cartId'});

sequelize.model=models;
db.sequelize=sequelize;
db.Sequelize=Sequelize;

module.exports={db, models};
