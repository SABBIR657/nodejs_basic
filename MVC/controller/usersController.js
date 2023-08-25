
const express = require("express")
const path = require("path"); //for joining the html file

const users = require("../models/usersModel");

const app = express();

app.use(express.urlencoded({extended:true})); //accesing the body 



exports.getUsers = (req,res)=>{
    res.sendFile(path.join(__dirname + "/../views/index.html"));
};

exports.saveUsers = (req,res)=>{
    //adding the data in users array

    const name = req.body.name;
    const age = Number(req.body.age);
 

    const user = {
        name,
        age
    };
    users.push(user); //adding user in users array
    res.status(201).json({
        success: true,
        message: "user created succefully",
        users,
    });
}