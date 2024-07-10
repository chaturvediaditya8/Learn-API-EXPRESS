const jwt = require("jsonwebtoken")
const UserModel = require("../model/User")

const checkUserAuth = async(req,res)=>{
               const{token} = req.cookies
               if(!token){
                             req.status(401)
                              res.
               }
}