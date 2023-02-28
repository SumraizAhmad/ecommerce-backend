const userService=require('../../service/userService');

module.exports=async function(req, res){
const detail=await userService.signUp(req.body);
res.send(detail);
}