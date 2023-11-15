const Router = require('express').Router();

const usersController = require('../controllers/users.controller');

const passport = require('passport');


Router.get('/profile',passport.checkAuthentication, usersController.profile);
Router.get('/signup',usersController.signup);
Router.get('/signin',usersController.signin);
Router.post('/create',usersController.create);
//use passport as a middlewaer to authenticate

Router.post('/create-session', passport.authenticate('local', { failureRedirect: '/users/signin' }), usersController.createSession);
module.exports  = Router;