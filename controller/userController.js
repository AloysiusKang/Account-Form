const User = require("../model/user");
const mongoose = require("mongoose");

exports.signUpGet = (req, res) => {
    res.render("sign-up", {
        error: null
    });
}

exports.signUpPost = [
    (req, res, next) => {
        if(req.body.username.length < 5){
            res.render("sign-up", {
                error: "Username length is too short"
            })
        }
        next();
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