const express = require('express');
const mongoose = require('mongoose');
const UserRouter = require('./routes/UserRouter');
const app = express();
const bcrypt = require('bcrypt');
const session = require("express-session");
const passport = require("passport");
const User = require('./model/User');
const FileRouter = require('./routes/FileRouter');
const LocalStrategy = require('passport-local').Strategy;


require('dotenv').config();
const PORT = 3000;
const SESSION_SECRET = process.env.SESSION_SECRET;

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());



mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Mongodb Connected...");  
}).catch((err) => {
    console.log(err);
}) 

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

passport.use(
    new LocalStrategy(async(username, password, done) => {
        try {
            const user = await User.findOne({name: username});
            if(!user) {
                return done(null, false, {message: "Username or Password is Incorrect"});
            }
            const isMatch = await bcrypt.compare(password, user.password);
            if(!isMatch) {
                return done(null, false, {message: "Username or Password is Incorrect"});
            }
            return done(null, user);
        } catch(err) {
            return done(err);
        }
    })
);

passport.serializeUser((user, done) => {
    return done(null, user.id);
});

passport.deserializeUser(async(id, done) => {
    try {
        const user =  await User.findById(id);
        done(null, user);
    } catch(err) {
        done(err);
    }
})



app.use('/users',UserRouter);
app.use('/files',FileRouter);

app.get('/',(req,res) => {
    res.redirect('/users/log-in');
})

app.listen(PORT, (err) => {
    if(err) {
        throw err;
    }
    console.log(`App listening at ${PORT}`);
})