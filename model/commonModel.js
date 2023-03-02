const { models } = require("../model/definition");
const jwtSecret = require("../config.json");
const jwt = require("jsonwebtoken");

let refreshTokens = [];
function generateAccessToken(user) {
    return jwt.sign(user, jwtSecret.jwt.secret, { expiresIn: "3000s" });
  }


module.exports = {
  createRole: async function (body) {
    // return body;
    const result = await models.Role.create({ ...body });
    return result;
  },

  login: async function (body) {
    let user = await models.User.findOne({
      where: {
        userName: body.userName,
      },
    });
    if (!user) {
        return "invalid userName & password"
        
    }
    user = user.dataValues;
    const accessToken=generateAccessToken(user);
    const token = jwt.sign(user, jwtSecret.jwt.secret);
    refreshTokens.push(token);
    return { accessToken: accessToken, refreshToken: token };
  },
};

