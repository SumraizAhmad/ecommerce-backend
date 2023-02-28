const bcrypt = require("bcrypt");
const roleModel = require("../model/roleModel");

module.exports = {
  createRole: async function (body) {
    const data = await roleModel.createRole(body);
    return data;
  },
  getRole: async function (body) {
    const data = await roleModel.getRole(body);
    return data;
  },
  getRoleById: async function (id) {
    const data = await roleModel.getRoleById(id);
    return data;
  },
  updateRole: async function (body) {
    const data = await roleModel.updateRole(body);
    return data;
  },
  deleteRole: async function (id) {
    const data = await roleModel.deleteRole(id);
    return data;
  },
};
