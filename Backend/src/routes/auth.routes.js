const express=require('express');
const router=express.Router();
const authController =require("../controllers/auth.controller")

// user auth APIs
router.post('/user/register', authController.registerUser) //Controler
router.post('/user/login', authController.loginUser) //Controler
router.get('/user/logout', authController.logoutUser) 


// food partner auth APIs
router.post('/food-partner/register', authController.registerFoodPartner)
router.post('/food-partner/login', authController.loginFoodPartner)
router.get('/food-partner/logout', authController.logoutFoodPartner)


module.exports=router;