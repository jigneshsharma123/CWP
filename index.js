const express = require('express');
const app = express();
const db = require('./config/mongoose');
require('dotenv').config();
const Router = require('./routers/index.Routes');
const PORT = process.env.PORT || 5050;
//set up teh view engine
app.set('view engine','ejs');
app.set('viws', './views');
//for using static file 
app.use(express.static('public'));


app.get('/', Router);


app.listen(PORT, (err)=> {
    if(err) {
        console.error(err);
    }
    console.log("server is running on the PORT : ", PORT);
});