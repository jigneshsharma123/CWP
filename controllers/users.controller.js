const User = require('../models/user');
module.exports.profile = (req,res) => {
  res.render('user_profile',{
    title : 'user | Profile'
  });
}
//render the sigup page 
module.exports.signup = (req,res) => {
  if(req.isAuthenticated()) {
   return   res.redirect("/users/profile")
  }
  return res.render('sign_up', {
    title : 'CWP | SIGN UP'
  });
};
//render the signin page
module.exports.signin = (req,res)=> {
  if(req.isAuthenticated()) {
   return res.redirect("/users/profile")
  }
  return res.render('sign_in', {
    title : 'CWP | SIGN IN'
  });
  
}
//get the signup data 
module.exports.create = async(req,res)=> {
  try {
      if(req.body.password !== req.body.confirm_password) {
         return res.redirect('back');
      }
       const user = await User.findOne({email : req.body.email});
       if(!user) {
        await User.create(req.body);
        return res.status(201).redirect('/users/signin');
       } else {
        return res.status(409).redirect('/users/signin');
       }
  }  catch(err) {
    console.error(err);
   return res.status(500).send({message : "Internal Server error"});
  } 

}
//sign in and createSession
module.exports.createSession = (req,res) => {
  //TODO later
  //passport.js implimention for local strategy
  return res.redirect('/');
}