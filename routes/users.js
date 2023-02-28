var express = require("express");
// const bcrypt=require('bcrypt')
var router = express.Router();

const { createUser} = require("../controller/index");
router.post('/createUser',createUser);

// router.get("/login", login);
// router.post("/signUp", signUp)

module.exports = router;
