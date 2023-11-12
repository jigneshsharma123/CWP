const User = require('../models/user');
module.exports.profile = async(req,res) => {
   try {
     if(req.cookies.user_id) {
      const user  = await User.findById(req.cookies.user_id);
      if(user) {
        return res.render('user_profile', {
          title : 'user | Profile',
          user : user,
        });
      } 
      return res.redirect('/users/signin');
     } else {
      return res.redirect('/users/signin');
     }
   } catch (error) {
     console.error('error in fetching user profile:', error);
     return res.status(500).send("Internal server error");
   }
}
//render the sigup page 
module.exports.signup = (req,res) => {
  return res.render('sign_up', {
    title : 'CWP | SIGN UP'
  });
};
//render the signin page
module.exports.signin = (req,res)=> {
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
module.exports.createSession = async (req, res) => {
  try {
      // Find the user
      const user = await User.findOne({ email: req.body.email });

      // Handle user found
      if (user) {
          // Handle incorrect password
          if (user.password !== req.body.password) {
              return res.redirect('back');
          }

          // Handle session creation
          res.cookie('user_id', user.id);
          return res.redirect('/users/profile');
      } else {
          // Handle user not found
          return res.redirect('back');
      }

  } catch (error) {
      console.error(error);
      return res.status(500).send({ message: "Internal Server error" });
  }
};
