const { Sequelize, DataTypes, Model } = require("sequelize");

let sequelize = require("../../common/dbConnection");

class Role extends Model {}

Role.init(
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    role: {
      allowNull:false,
      type: DataTypes.STRING(40),
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize : sequelize,
  }
);
module.exports = Role;

