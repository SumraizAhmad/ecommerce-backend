const {models}=require('../model/definition');

module.exports={
    createRole: async function(body){
        // return body;
        const result = await models.Role.create({...body});
        return result;
    }
};