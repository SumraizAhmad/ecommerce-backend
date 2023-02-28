const { Sequelize, DataTypes, Model } = require("sequelize");

let sequelize = require("../../common/dbConnection");

class Cart extends Model {}

Cart.init(
  {
    id: {
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    // userName: {
    //   allowNull: false,
    //   type: DataTypes.STRING(),
    // },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize: sequelize,
    modelName: "Cart",
  }
);

module.exports = Cart;
