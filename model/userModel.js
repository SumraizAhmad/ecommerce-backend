// const { Model } = require('sequelize');
const {models}=require('../model/definition');

module.exports={
    createUser: async function(body){
        return body;
        const result =await models.User.create(body);
        return result;
    }
};