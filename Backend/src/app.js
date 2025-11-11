// HERE SERVER IS CREATED 

const express = require('express');
const cookieParser = require('cookie-parser');
const authRoutes=require('./routes/auth.routes');
const foodRoutes=require('./routes/food.routes');

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use('/api/food', foodRoutes);

//Check server on Postman 
// This is dummy Routes
app.get('/', (req, res) => {
    res.send("Hello World kyaa haal chaal");
});
app.use('/api/auth',authRoutes);
app.use(('/api/food'),foodRoutes);
module.exports = app;