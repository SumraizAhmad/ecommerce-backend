var express = require("express");
// const bcrypt=require('bcrypt')
var router = express.Router();
const jwt=require('jsonwebtoken');
const jwtSecret=require('../config.json');

async function authenticateToken(req,res,next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (token == null) return res.sendStatus(401)
    jwt.verify(token, jwtSecret.jwt.secret, (err, user) => {
      if (err) return res.sendStatus(403)
      req.user = user
      next()
    })
}

const { createUser, getUser, updateUser} = require("../controller/index");
router.post('/createUser',createUser);
router.put('/updateUser', updateUser),
router.post('/getUser', authenticateToken ,getUser),

// router.get('/user', authenticateToken, getUser)

// router.get("/login", login);
// router.post("/signUp", signUp)

module.exports = router;
