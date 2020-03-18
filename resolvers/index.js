const { Login, FindUser } = require('../models/users')
const User  = require('../models/users/user.model')
const LoginUser = input => {
  return Login(input)
    .then(d => {
     
      return d
    })
    .catch(e => {
      console.log(e)
      return e
    })
}

const getUser = ({username}) => {
  return FindUser(username)
    .then(r => {
        console.log(r);
      return r;
    })
    .catch(e => {
      return e;
    })
}

const register = async ({user}) =>{
    console.log(user);
    user = new User(user);
    var d = await user.save();
    return d;
}
var root = {
  login: LoginUser,
  getUser,
  register
}

module.exports = root
