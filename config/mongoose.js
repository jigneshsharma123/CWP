const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/codeial0');

const db = mongoose.connection;
db.on('error',console.error.bind(console, 'error in connecting to db'));
db.once('open',()=> {
    console.log("successfully connected to the db");
    console.log('Mongoose connection status:', mongoose.connection.readyState);

});
module.exports = db;