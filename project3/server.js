//SERVER side js file,root file
//parse is suitable for only some input fields like form data,and used for api creation purpose .so we use multer
//app.set is used to call the template engine
//serialise-diff uers in same place
//deserialize-diff place same user
//post is inscertion 
// Filename - App.js

const express = require("express"),
    mongoose = require("mongoose"),
    passport = require("passport"),
    bodyParser = require("body-parser"),
    LocalStrategy = require("passport-local"),
    passportLocalMongoose = 
        require("passport-local-mongoose");
const Matriuser = require("./model/gdb");
let app = express();

mongoose.connect("mongodb://localhost/matrimony");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require("express-session")({
    secret: "Rusty is a dog",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(Matriuser.authenticate()));
passport.serializeUser(Matriuser.serializeUser());
passport.deserializeUser(Matriuser.deserializeUser());

//=====================
// ROUTES
//=====================

// Showing home page
app.get("/", function (req, res) {
    res.render("home");
});

// Showing secret page
app.get("/secret", isLoggedIn, function (req, res) {
    res.render("secret");
});

// Showing register formisLoggedIn
app.get("/register", function (req, res) {
    res.render("register");
});

// Handling user signup
app.post("/register", async (req, res) => {
    const user = await Matriuser.create({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      dob: req.body.dob,
      ages: req.body.ages
    });
  
    return res.status(200).json(user);
  });

//Showing login form
app.get("/login", function (req, res) {
    res.render("login");
});

//Handling user login
app.post("/login", async function(req, res){
    try {
        // check if the user exists
        const user = await Matriuser.findOne({ username: req.body.username });
        if (user) {
          //check if password matches
          const result = req.body.password === user.password;
          if (result) {
            res.render("secret");
          } else {
            res.status(400).json({ error: "password doesn't match" });
          }
        } else {
          res.status(400).json({ error: "User doesn't exist" });
        }
      } catch (error) {
        res.status(400).json({ error });
      }
});

//Handling user logout 
app.get("/logout", function (req, res) {
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
      });
});



function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/login");
}


app.listen(4000, function () {
    console.log("Server Has Started!");
});