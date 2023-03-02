var express = require("express");
var router = express.Router();

const { createRole, login } = require("../controller/index");

router.post("/createRole", createRole);
router.post("/login", login);

// router.get("/login", login);
// router.post("/signUp", signUp)

module.exports = router;
