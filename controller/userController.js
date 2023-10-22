const User = require("../model/user");
const mongoose = require("mongoose");

exports.signUpGet = (req, res) => {
    res.render("sign-up", {
        error: null
    });
}

exports.signUpPost = [
    async (req, res, next) => {
        try {
            if(req.body.username.length < 5){
                res.render("sign-up", {
                    error: "Username length is too short"
                })
                return;
            } else if(await User.findOne({username: req.body.username})){
                res.render("sign-up", {
                    error: "Username has been taken"
                })
                return;
            }
            next();
        } catch (err) {
            console.log(err);
            next();
        }
    },

    (req, res, next) => {
        if(req.body.email.length == 0){
            res.render("sign-up", {
                error: "Please submit an email address"
            })
        }
        next();
    },

    (req, res, next) => {
        if(req.body.password.length < 5){
            res.render("sign-up", {
                error: "Password length is too short"
            })
        }
        next();
    },

    (req, res, next) => {
        if(req.body.password != req.body.confirmPassword){
            res.render("sign-up", {
                error: "Password is not the same as the confirmed password"
            })
        }
        next();
    },

    async (req, res) =>{
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.redirect("/")
    } catch (err) {
        console.log(err);
    }
}]

exports.loginGet = (req, res) => {
    res.render("login", {
        error: null
    })
}

exports.loginPost = [
    async (req, res, next) => {
        try {
            if(req.body.username.length < 5){
                res.render("login", {
                    error: "Username length is too short"
                })
                return;
            } else if(!await User.findOne({username: req.body.username})){
                res.render("login", {
                    error: "Username is not found"
                })
                return;
            }
            next();
        } catch (err) {
            console.log(err);
            next();
        }
    },

    async (req, res, next) => {
        try {
            let username =  req.body.username;
            let password = req.body.password;
            if(password.length < 5){
                res.render("login", {
                    error: "Password length is too short"
                })
            } else if(!await User.findOne({$and: [{username: username}, {password: password}]})) {
                res.render("login",{
                    error: "Password is incorrect"
                })
            }
            next();
        } catch (err) {
            console.log(err);
            next();
        }
    },

    (req, res) => {
        req.session.authorized = true;
        res.redirect("/");
    }
]