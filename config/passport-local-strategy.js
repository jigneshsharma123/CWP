const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

//set up the local strategy with email as a username field
passport.use(new LocalStrategy({usernameField: 'email'},
async (email,password,done)=> {
  try {
    //find a user with the given email 
    const user  = await User.findOne({email});
    console.log(user); 
    //if user not found or password is incorrect
    if(!user || user.password !== password) {
      return done(null,false, {message : "Invalid username or password"});
    }
    //if user found  and password is correct
    return done(null,user);
  } catch (error) {
    console.error('Error in passport local strategy:', error);
    return done(error);
  }
}
));

//Serialize user to store in the session
passport.serializeUser((user,done)=> {
  done(null,user.id);
});
//deserialize user to reterive from the session
passport.deserializeUser(async(id,done)=> {
  try {
    const user = await User.findById(id);
    done(null,user);
  } catch (error) {
    done(error,null);
  }
});

//check if the user is authenticated 

//for sending the data of the user to use

passport.checkAuthentication = (req,res,next)=> {
 //if the user is singed in, then apss on the req to the next ufction(controller's action)
  if(req.isAuthenticated()) {
    return next();
  } 
  //if the user is not signin 
  return res.redirect('/users/signin');
}

passport.setAuthenticatedUser = (req,res,next)=> {
  if(req.isAuthenticated()) {
    //req.user contains the current signed in user from the sesssion cookie and we are just sending the this to the locals for the views

    res.locals.user = req.user;
  }
  next();
}

