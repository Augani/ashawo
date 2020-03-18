let mongoose = require('mongoose')
const Bcrypt = require('bcryptjs')
let specSchema = new mongoose.Schema(
  {
    username: {
      required: true,
      unique: true,
      type: String,
      lowercase: true
    },
    email: {
      type: String,
      unique: true
    },
    active: {
      type: Boolean,
      default: false
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



module.exports = mongoose.model('Spec', specSchema)
