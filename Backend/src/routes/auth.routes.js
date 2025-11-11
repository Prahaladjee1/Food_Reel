const express=require('express');
const router=express.Router();
const authController =require("../controllers/auth.controller")


router.post('/user/register', authController.registerUser) //Controler
// router.post('/user/login', authController.loginUser) //Controler


module.exports=router;