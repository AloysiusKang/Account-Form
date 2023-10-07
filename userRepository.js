const mongoose = require('mongoose');
const UserFactory = require("./userFactory");

// Creates a Model/Data to insert to collection
async function CreateUser(userObj){
    const user = await User.create({
        name: name,
        age: age
    })
    console.log(UserFactory)
} 
// Run("Mama", 35)

async function UpdateName(oldName, newName){
    try{
        const id = await User.exists({name: oldName});
        const user = await User.findById(id);

        user.name = newName;
        user.save();
        console.log(user);
    }
    catch(err){
        console.log(err);
    }
}

async function DeleteDocument(name){
    try{
        const id = await User.exists({name: name});
        if(id === null){
            throw "Id not found!";
        }
        console.log(await User.find({name: name}));

        const deletedUser = await User.deleteOne(id);
        console.log(deletedUser);
    }
    catch(err){
        console.log(err);
    }
}

async function GetAllData(req, res, next){
    res.locals.allUser =  await User.find();
    
    next();
}


module.exports = {Run, UpdateName, DeleteDocument, GetAllData};