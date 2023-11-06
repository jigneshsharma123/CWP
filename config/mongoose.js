const mongoose = require("mongoose");
require('dotenv').config();

const url = process.env.MONGO_URL;
 //IbmcwsUtou0lrzTy
mongoose.connect(url);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'error in connecting db'));
db.once('open',()=> {
    console.log("successfully connected to the db");
});
module.exports  = db;