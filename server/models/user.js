const mongoose = require("mongoose");
const Schema = mongoose.Schema

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
    max: 20,
    min: 3,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    required: true,
  },
  name: {
    type: String,
    maxlength: 100,
    required: true,
  },
  password:{
    type: String,
    required: true,
    minlength: 5
},
  lastname: {
    type: String,
    required: true,
    maxlength: 100,
  },
  profilePicture: {
    type: String,
    default: "",
  },
  coverPicture: {
    type: String,
    default: "",
  },
  following: {
    type: Array,
    default: [],
  },
  followers: {
    type: Array,
    default: [],
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  token: {
    type: String,
  },
  role: {
    type: Number,
    default: 0
  }

}, {timestamps: true});

module.exports = mongoose.model("User", UserSchema);

