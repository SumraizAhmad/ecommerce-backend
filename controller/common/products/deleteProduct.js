const productService = require('../../../service/productService');

module.exports = async function (req, res) {
	const data = await productService.deleteProduct(req.query.id);
	res.send(data);
};
