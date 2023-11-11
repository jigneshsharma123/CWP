module.exports.profile = (req,res) => {
  res.render('user_profile');
}
module.exports.signup = (req,res) => {
  return res.render('sign_up');
};
module.exports.signin = (req,res)=> {
  return res.render('sign_in');
}