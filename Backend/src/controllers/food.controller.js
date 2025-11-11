const foodModel = require("../models/food.model");
// const authMiddleware = require("../middlewares/auth.middleware");

async function createFood(req, res) {
    console.log(req.foodPartner);
    console.log(req.body);
    res.send("Food created successfully");
    console.log(req.file);
}

module.exports = {
    createFood
}