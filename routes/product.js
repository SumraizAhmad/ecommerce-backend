var express = require('express');
var router = express.Router();

const {
	createProduct,
	getProduct,
	getProductById,
	updateProduct,
	deleteProduct,
} = require('../controller/index');

router.post('/createProduct', createProduct);
router.get('/getProduct', getProduct);
router.get('/getProductById', getProductById);
router.put('/updateProduct', updateProduct);
router.delete('/deleteProduct', deleteProduct);

module.exports = router;
