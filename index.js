const express = require('express');
const app = express();
const db = require('./config/mongoose');
require('dotenv').config();
const Router = require('./routers');
const PORT = process.env.PORT || 5050;
//set up teh view engine
app.set('view engine','ejs');
app.set('viws', './views');
//for using static file 
app.use(express.static('public'));
app.use('/', Router);
//catch-up all the routes for error:
app.use((req,res)=> {
    res.send("404:not found");
})


app.listen(PORT, (err)=> {
    if(err) {
        console.error(err);
    }
    console.log("server is running on the PORT : ", PORT);
});