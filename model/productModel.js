const { models } = require('../model/definition');
const { Op } = require("sequelize");

module.exports = {
	createProduct: async function (body) {
		const result = await models.Product.create(body);
		return result;
	},
	getProduct: async function (body) {
		const result = await models.Product.findAll();
		return result;
	},
	getProductById: async function (ids) {
		const result = await models.Product.findAll({
			where: { id: ids },
		});
		return result;
	},
	updateProduct: async function (body) {
		const result = await models.Product.update(
			{
				...body,
			},
			{
				where: { id: body.id },
			},
		);
		return result;
	},
	deleteProduct: async function (ids) {
		const result = await models.Product.destroy({
			where: { id: ids },
		});
		return 'Deleted Product';
	},

	//validation
	getUserByAttribute  : async function(body){
		const result = await models.Product.findAndCountAll({
			where: {
				[Op.or]: [
				//   { title: body.title },
				//   { price: body.price },
				//   {description:body.description},
				//   {category:body.category},
				]
			  }
		});
		return result;
	},
};
