function ValidateNewUsername(username){
    if(username.length == 0){
        return "Please input a username"
    }
    if(username.length <= 4){
        return "Username is too short";
    }
    return true;
}

function ValidateNewEmail(email){
    if(email.length == 0){
        return "Please input a email"
    }
    if(email.length <= 4){
        return "Email is too short";
    }
    return true;
}

function ValidateNewPassword(password){
    if(password.length == 0){
        return "Please input a password"
    }
    if(password.length <= 4){
        return "password is too short";
    }
    return true;
}

function Run(req, res, next){
    const {username, email, password, confirmPassword} = req.body;
    res.locals.error = {
        msg: "",
        created: false 
    };
    if(req.body.username == null){
        res.locals.error = {
            msg: "",
            created: false 
        };
        next()
        return;
    }


    if(ValidateNewUsername(username) != true){
        res.locals.error.msg = ValidateNewUsername(username);
    }
    else if(ValidateNewEmail(email) != true){
        res.locals.error.msg = ValidateNewEmail(email);
    }
    else if(ValidateNewPassword(password) != true){
        res.locals.error.msg = ValidateNewPassword(password);
    }
    else if(password != confirmPassword){
        res.locals.error.msg = "Confirm password is not the same as password"
    }
    else{
        res.locals.error = {
            msg: "Data Created",
            created: true
        }
    }
    next();

}

module.exports = {Run}