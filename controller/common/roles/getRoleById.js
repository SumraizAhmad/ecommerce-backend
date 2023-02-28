const roleService = require('../../../service/roleService');

module.exports = async function (req, res) {
	const data = await roleService.getRoleById(req.query.id);
	res.send(data);
};
