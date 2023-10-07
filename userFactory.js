const mongoose = require('mongoose');

// Shema is basically the table/collection in your database
// This is where you validate what goes inside the collection
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
}, {collection: "Users"})


// This is where you specify the name of the collection
module.exports = mongoose.model("Users", userSchema);
