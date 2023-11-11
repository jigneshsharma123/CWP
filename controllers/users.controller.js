module.exports.profile = (req,res) => {
  res.render('user_profile');
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
module.exports.create = (req,res)=> {
    
}