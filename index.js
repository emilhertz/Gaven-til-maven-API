//import external modules
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//Connect to database
mongoose.connect('mongodb+srv://emilhertz:toQfuf-qebxi6-jynqic@gaventilmaven-lbpln.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

//import local modules
const storeUserController = require('./controllers/storeUserController');
const storeRestaurantController = require('./controllers/storeRestaurantController');
const getRestaurantsController = require('./controllers/getRestaurantsController');
const getUserController = require('./controllers/getUserController');
const loginStatusController = require('./controllers/loginStatusController');
const adminRestaurantsController = require('./controllers/adminRestaurantsController');

//import middleware
const user_auth = require('./middleware/user_authorization');
const admin_auth = require('./middleware/admin_authorization');

const loginController = require('./controllers/loginController');

//initialize new express app
const app = new express();

//defines a port
app.listen(4000, (req,res)=>{
    console.log('API is listening to port 4000...');
});

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Thomas' trylledrik. Tillader samtlige CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next()
});

//read
app.get('/check', user_auth, );

app.get('/restaurant', getRestaurantsController);

app.get('/user', getUserController);

app.get('/restaurant/admin', user_auth, admin_auth, adminRestaurantsController);

//create
app.post('/user/create', storeUserController);

app.post('/restaurant/create', user_auth, admin_auth, storeRestaurantController);

app.post('/login', loginController);

