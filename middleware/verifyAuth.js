const jwt = require('jsonwebtoken');
const CONFIG = require('../config/config');
const db = require('../models')
const User = db.user;

const verifyAuth = (req,res,next) => {
    const token = req.headers['x-access-token']
    if(!token) {
        return res.json("No token provided")
    }
    jwt.verify(token,CONFIG.aws_String,(err,decoded) => {
        if(err){
            return res.json("Unauthorized!")
        }
        else {
            req.userId = decoded.ret.id;
            next();
        }
    })
}

const verifyUser = async(req,res,next) => {
    try {
        const user = await User.findOne({
            where:{id:req.userId}
        });
        if(!user) {
            throw 'User not found';
        } 
        next();
    } catch (err) {
        console.log("Something went wrong");
    }
}

const authJwt = {
    verifyAuth,
    verifyUser
}

module.exports = authJwt;