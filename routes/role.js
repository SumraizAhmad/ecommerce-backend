var express = require('express');
var router = express.Router();

const {
	createRole,
	getRole,
	getRoleById,
	updateRole,
	deleteRole,
} = require('../controller/index');

router.post('/createRole', createRole);
router.post('/getRole', getRole);
router.get('/getRoleById', getRoleById);
router.put('/updateRole', updateRole);
router.delete('/deleteRole', deleteRole);

module.exports = router;
