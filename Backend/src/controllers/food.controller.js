const foodModel = require("../models/food.model");
// const authMiddleware = require("../middlewares/auth.middleware");
const storageService = require("../services/storage.service");
const {  v4: uuid } = require('uuid');

async function createFood(req, res) {
    console.log(req.foodPartner);
    console.log(req.body);
    console.log(req.file);
    const fileUploadResult = await storageService.uploadFile(req.file.buffer, uuid());
    
    const foodItem = await foodModel.create({
        name: req.body.name,
        video: fileUploadResult.url,
        description: req.body.description,
        foodPartner: req.foodPartner._id
    });
    res.status(201).json({
        message: "Food Item created successfully",
        foodItem: foodItem
    });
}

async function getFoodItems(req, res) {
    const foodItems = await foodModel.find({})
    res.status(200).json({
        message: "Food Items fetched successfully",
        foodItems
    });
}

module.exports = {  
    createFood,
    getFoodItems   
}

