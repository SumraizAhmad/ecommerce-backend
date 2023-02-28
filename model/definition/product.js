const { Sequelize, DataTypes, Model } = require("sequelize");

let sequelize = require("../../common/dbConnection");

class Product extends Model {}

Product.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING(),
    },
    description: {
      allowNull: false,
      type: DataTypes.STRING(),
    },
    category: {
      allowNull: false,
      type: DataTypes.STRING(),

    },
    price: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize,
  }
);

module.exports = Product;
