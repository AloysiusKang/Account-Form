const path = require("path");
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const UserController = require("./userController");
const { error } = require("console");

const database = "account-form";

mongoose.connect(`mongodb+srv://aloysiuskang:aloy123@${database}.k8it3a2.mongodb.net/?retryWrites=true&w=majority`);

// PORT
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "Assets")));

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.get("/", (req, res) => {
    res.render("home", {
        url: {
            login: "/login",
            signup: "/signup"
        }
    })
})

app.get("/login", (req, res) => {
    res.render("login")
})

app.get("/signup", UserController.Run, (req, res) => {
    res.render("sign-up")
})
app.post("/signup", UserController.Run, (req, res) => {
    if(res.locals.error.created){
        res.redirect("/");
    }
    else{
        res.render("sign-up")
   }
})


app.listen(PORT, () => console.log(`Server launched at port ${PORT}`));


