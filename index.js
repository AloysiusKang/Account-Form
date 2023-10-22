require("dotenv").config();
const path = require("path");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");
mongoose.connect(process.env.DB);
const main = require("./router/main")

// PORT
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "Assets")));

app.set('view engine', 'ejs');

// Sessions
app.use(session({
    secret: 'SecretOne',
    name: "authorized",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))


app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/", main)  


app.listen(PORT, () => console.log(`Server launched at port ${PORT}`));


