const express = require("express")
const path = require("path")
const mongoose = require("mongoose")
const passportLocalMongoose = require("passport-local-mongoose");
const session = require('express-session');
const passport = require("passport");

const app = express();
app.locals.moment = ("moment") //Moment for date formating and global variable

//user schema
const Signup = require("./models/signUp")

const loginRoutes = require("./routes/loginRoutes")
const workerRoutes = require("./routes/workerRoutes")
const signupRoutes = require("./routes/signUpRoutes")
const produceRoutes = require("./routes/produceRoutes")
const salesRoutes = require("./routes/salesRoutes")
const creditRoutes = require("./routes/creditRoutes")
const purchaseRoutes = require("./routes/purchaseRoutes")
// const uploads = require("./routes/randomRoutes")




//creating ssession
const expressSession = require('express-session')({
    secret: 'secret',
    resave:false,
    saveUninitialized:false,
  });

  //  Database configuration
   mongoose.connect("mongodb://localhost:27017/karibu",
   { useNewUrlParser: true,
   useUnifiedTopology: true},
   (err) => {
       if(!err) console.log("Connected to mongoDB");
       else console.log("Error connecting to mongoDB  " + err)
   })


    // app.use(express.urlencoded({ extended: true }));

   //Load view engine
app.set('view engine', 'pug');
// app.set('views', './views');
app.set("views", path.join(__dirname, "/views"))

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use('/public/images', express.static(__dirname + '/public'));

   
    app.use(expressSession)

    // configuring passport
    app.use(passport.initialize());
    app.use(passport.session());
    
    //-----------------------------------
    passport.use(Signup.createStrategy());
    passport.serializeUser(Signup.serializeUser());
    passport.deserializeUser(Signup.deserializeUser());
    

    app.use("/",loginRoutes)
    app.use("/workers",workerRoutes)
    app.use("/",produceRoutes)
    // app.use("/images",express.static("images"))
    app.use("/signup",signupRoutes)
    app.use("/purchase",purchaseRoutes)
    app.use("/sales",salesRoutes)
    app.use("/",creditRoutes)
    // app.use("/",uploads)

app.listen(process.env.port || 5051)//should alwways be the last line of code
console.log("server running on port" + (process.env.port || 5051))