const { models } = require('../model/definition');

module.exports = {
	createRole: async function (body) {
		const result = await models.Role.create(body);
		return result;
	},
	getRole: async function (body) {
		const result = await models.Role.findAll();
		return result;
	},
	getRoleById: async function (ids) {
		const result = await models.Role.findAll({
			where: { id: ids },
		});
		return result;
	},
	updateRole: async function (body) {
		const result = await models.Role.update(
			{
				...body,
			},
			{
				where: { id: body.id },
			},
		);
		return result;
	},
	deleteRole: async function (ids) {
		const result = await models.Role.destroy({
			where: { id: ids },
		});
		return 'Deleted Role';
	},
};
