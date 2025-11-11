const userModel = require("../models/user.model")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

async function registerUser(req, res) {
    const { fullName, email, password } = req.body;
    const isUserAlreadyExists = await userModel.findOne({
        email
    })

    if (isUserAlreadyExists) {
        return res.status(400).json({
            message: "User already exist"
        })
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({
        fullName,
        email,
        password: hashedPassword
    })

    const token = jwt.sign(
        {
            id: user._id
        }, "05d6ae427da67a13f6d9a3190afaaa9e")


        res.cookie("token",token)
        res.status(201).json({
            message:" user registered successfully",
            user:{
                _id: user._id,
                email:user.email,
                fullName:user.fullName
            }
        })

}

module.exports={
    registerUser,
    // loginUser
}