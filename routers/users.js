const Router = require('express').Router();

const usersController = require('../controllers/users.controller');

Router.get('/profile', usersController.profile);





module.exports  = Router;