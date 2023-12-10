const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const db = require('./config/mongoose');
const session =  require('express-session');
const MongoClient = require('mongodb').MongoClient;
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');
const passport = require('passport');
const passportLocal = require('./config/passport-local-strategy');
app.use(express.urlencoded({extended : true}));
app.use(cookieParser());
require('dotenv').config();
const PORT = process.env.PORT || 5050;
const expressLayouts = require('express-ejs-layouts');
app.use(express.static('./assets'));

app.use(expressLayouts);
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
const Router = require('./routers/index');

//set up teh view engine

app.set('view engine','ejs');
app.set('viws', __dirname + '/views');

//mongo store is used to store the session cookie in the db
app.use(
    session({
      // Session configuration options
      secret: 'your-secret-key',
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ 
        mongooseConnection: db,
        collection: 'sessions',
        autoRemove: 'disabled',
      }), 
    })
  );

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
//for using static file 
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