const mongoose = require("mongoose");
// const passport = require("passport");
// const eoassportLocalMongoose = require("express");
const passportLocalMongoose = require("passport-local-mongoose");



const SignupSchema = new mongoose.Schema({
    name: {
    type: String,
    trim:true,
  },
    userName: {
    type:String,
    trim:true,
  },
    email:{
    type:String,
    required:true,
    unique:true,
    trim:true,
  },
   password:{
    type:String,
    trim:true,
  
  },
  role:{
    type:String,
  
  },
  

});

SignupSchema.plugin(passportLocalMongoose, {usernameField: "email"});
module.exports = mongoose.model("Signup", SignupSchema);




