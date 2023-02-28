var express = require("express");
var router = express.Router();

const { createRole} = require("../controller/index");
router.post('/createRole',createRole);

// router.get("/login", login);
// router.post("/signUp", signUp)

module.exports = router;
