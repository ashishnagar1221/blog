
const valid = require('validator');
const db = require('../models')
const jwt = require('jsonwebtoken');
const CONFIG = require('../config/config');
const User = db.user


exports.signup = async (req, res, next) => {
    console.log(req.body)
    let { name, phone_number, email, password, repassword } = req.body
    if (name == null || phone_number == null || email == null || password == null || repassword == null) {
        return res.json("field should not be null")
    }
    if (valid.isEmpty(name) || valid.isEmpty(phone_number) || valid.isEmpty(email) || valid.isEmpty(password) || valid.isEmpty(repassword)) {
        return res.json("All fields are required");
    }
    if (!valid.isAlpha(name)) {
        return res.json("Name shold not cointain numbers and characters")
    }
    if (!valid.isEmail(email)) {
        return res.json("Invalid email")
    }
    if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,40}$/)) {
        return res.json("Password is invalid")
    }
    if (!valid.equals(password, repassword)) {
        return res.json("password are not matching")
    }

    let ret = null;
    ret = await User.findOne({ where: { email } })
    if (ret) {
        return res.json("email already registered")
    }
    ret = await User.findOne({ where: { phone_number } })
    if (ret) {
        return res.json("phone number already registered")
    }
    email.toLowerCase();
    ret = await User.create({ name, phone_number, email, password });
    return res.json(ret);
}

exports.login = async (req, res, next) => {
    console.log(req.body)
    const email = req.body.email;
    const password = req.body.password;
    let ret = null;
    ret = await User.findOne({ where: { email } })
    if (ret === null) {
        return res.json("User not found");
    }
    console.log(ret)
    if (ret.dataValues.password.stringify != password) {
        return res.json("Invalid email or password");
    }else {
        const data = {
            accessToken: jwt.sign({
                ret
            },CONFIG.aws_String, {
                expiresIn: 86400, // 24 hours
            },
            )
        }
        return res.json({data, message:"Login Successfully"});
    }
}
