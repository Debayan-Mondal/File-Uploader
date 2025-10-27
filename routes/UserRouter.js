const { Router } = require("express");
const bcrypt = require('bcrypt');
const User = require("../model/User");
const passport = require("passport");



const UserRouter = Router();

UserRouter.get('/sign-up',(req, res) => {
    return res.status(200).render('SignUp');
})

UserRouter.get('/log-in',(req,res) => {
    return res.status(200).render('Login');
})

UserRouter.post('/log-in', passport.authenticate("local",{
        successRedirect: "/files",
        failureRedirect:"/users/log-in"
    })
)

UserRouter.get('/log-out',(req, res, next) => {
    req.logout((err) => {
        if(err) {
            next(err);
        }
        res.redirect("/users/log-in");
    })
})



UserRouter.post('/sign-up',async (req, res) => {
    const {username, password, email,} =req.body;
    const hasUser = await User.findOne({email: email});
    if(hasUser) {
       return res.status(409).json({message: "Email already exists"})
    }

    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = await User.create({
        name: username,
        password: hashedPassword,
        email: email
    })
    res.redirect("/users/log-in");
    } catch(err) {
        throw err;
    }
})

module.exports = UserRouter;