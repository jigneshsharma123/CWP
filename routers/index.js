const Router = require('express').Router();
const HomeController = require('../controllers/home.controller');

Router.get('/', HomeController.home);

Router.use('/users', require('./users'));




module.exports = Router;