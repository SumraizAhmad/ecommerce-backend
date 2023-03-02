const bcrypt = require("bcrypt");
const userModel = require("../model/userModel");

module.exports = {
  createUser: async function (body) {
    body.password = await bcrypt.hashSync(body.password, 10);
    const data = await userModel.createUser(body);
    return data;
  },
  updateUser: async function (body) {
    const data = await userModel.updateUser(body);
    return data;
  },
  getUser: async function (body) {
    const data = await userModel.getUser(body);
    return data;
  },
};
