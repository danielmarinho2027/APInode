const express = require('express');
const bodyParse = require('body-parser');

const app = express();
const router = express.Router(); 

//Carrega as Rotas
const index = require('./routes/index');
const products= require('./routes/products-routes');



app.use('/', index);
app.use('/post', products);


module.exports = app;