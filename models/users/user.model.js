let mongoose = require('mongoose')
const Bcrypt = require('bcryptjs')
let userSchema = new mongoose.Schema(
  {
    username: {
      required: true,
      unique: true,
      type: String,
      lowercase: true
    },
    firstName:{
      type: String,
      required: true
    },
    dob:{
      type: String,
      required: true
    },
    lastName:{
      type: String,
      required: true
    },
    email: {
      type: String,
      unique: true
    },
    phoneNumber:{
      type: String,
      unique: true
    },
    country:{
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    },
    spec:{
      type: Array,
      default: []
    },
    bookings: {
      type: Number,
      default: 0
    },
    password: {
      type: String,
      required: true
    },
    ratings: {
      type: Number,
      default: 0
    },
    socketId:{
        type: String,
        default: ''
    }
  },
  { timestamps: true }
)

userSchema.pre('save', function (next) {
  if (!this.isModified('password')) {
    return next()
  }
  this.password = Bcrypt.hashSync(this.password, 10)
  next()
})

userSchema.methods.findSocket = function(username, cb){
    return this.find({username}).exec(cb);
}

userSchema.methods.comparePassword = function (user) {
  var self = this;
  return new Promise((resolve, reject)=>{
    var userFound = self.findOne({username:user.username}).exec((o)=>o);
    console.log(user);
    if(!userFound)reject('User doesn\'t exist');
    if(Bcrypt.compareSync(user.password, userFound.password))reject('User password invalid');
    resolve(user);
  })
  
}

module.exports = mongoose.model('User', userSchema)
