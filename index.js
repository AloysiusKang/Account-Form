const path = require("path");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://aloysiuskang:aloy123@account-form.k8it3a2.mongodb.net/account-form?retryWrites=true&w=majority");

const main = require("./router/main")

// PORT
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "Assets")));

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/", main)  


app.listen(PORT, () => console.log(`Server launched at port ${PORT}`));


