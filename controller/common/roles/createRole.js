const roleService = require('../../../service/roleService');

module.exports = async function ( req, res ) {
    const data = await roleService.createRole( req.body );
    res.send( data );
}