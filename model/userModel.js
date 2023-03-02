// const { Model } = require('sequelize');
const { models } = require("../model/definition");

module.exports = {
  createUser: async function (body) {
    const result = await models.User.create(body);
    return result;
  },
  getUser: async function (body) {
    const result = await models.User.findAll({
        include:{
            model:models.Role
        },
        attributes:{exclude:['password']}
    });

    return result;
  },
  updateUser: async function (body) {
    const result = await models.User.update(
      {
        ...body,
      },
      {
        where: { id: body.id },
      }
    );
    return result;
  },
};
