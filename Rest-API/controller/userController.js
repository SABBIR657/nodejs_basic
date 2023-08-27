let users = require("../models/usersModel"); //for pushing the data in model you have to use let

const {v4: uuidv4} = require("uuid");

//get users
exports.allUsers = (req,res)=>{
    res.status(201).json({
     users});
 };

 //create users ->post
 exports.createUser = (req,res)=>{
    
  const newUser = {
    id: uuidv4(),
   userName : req.body.userName,
   userEmail :  req.body.userEmail
  }

  users.push(newUser);
    res.status(200).json({users});
};


//update users -> put

exports.updateUsers =(req,res)=>{
  
    const  userId = req.params.id; 
    const {userName, userEmail} = req.body;
    users.filter((user) => user.id == userId).map((selecteduser)=>{
        selecteduser.userName = userName;
        selecteduser.userEmail = userEmail;
    })
    res.status(201).json({
        message: "user updated",
        users
    })
}


//delete user -> delete


exports.deleteUser = (req,res)=>{
    const userId = req.params.id;

  users =  users.filter((user) => user.id != userId )//for deleting we are showing the other user from users list not the mathcing userid's user

    res.status(201).json({
        message:"user deleted",
        users
    })
}

 