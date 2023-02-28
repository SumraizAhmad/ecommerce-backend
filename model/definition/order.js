const { Sequelize, INTEGER , Model} = require("sequelize");

let sequelize = require("../../common/dbConnection");

class Order extends Model {}

Order.init({
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: INTEGER,
  },
  total: {
    allowNull: false,
    type: INTEGER,
  },
},
{
    timestamps: true, 
    paranoid: true, 
    sequelize,
}
);

module.exports = Order;
