const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const loginSchema = new  mongoose.Schema({
    userName: {
    type: String,
    trim:true,
  },
    Email:{
    type:String,
    required:true,
    unique:true,
    trim:true,
  },
    password:{
    type:String,
    trim:true,
  },
 
  

});
loginSchema.plugin(passportLocalMongoose, { userNameField: "email" });

module.exports = mongoose.model("login", loginSchema);