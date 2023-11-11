const Router = require('express').Router();

const usersController = require('../controllers/users.controller');

Router.get('/profile', usersController.profile);
Router.get('/signup',usersController.signup);
Router.get('/signin',usersController.signin);
Router.post('/create',usersController.create);



module.exports  = Router;