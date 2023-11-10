const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/codeial0');

const db = mongoose.connection;
db.on('error',console.error.bind(console, 'error in connecting to db'));
db.once('open',()=> {
    console.log("successfully connected to the db");
});
module.exports = db;