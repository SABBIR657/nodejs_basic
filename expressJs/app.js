const express = require('express');

const app = express();

const userRouter = require("./routes/users.route");

app.use("/api/user",userRouter);




app.get("/",(req,res)=>{
    res.statusCode = 200;
    res.sendFile(__dirname+"/views/index.html"); 
});

app.use((req,res)=>{
    res.send("<h1>404 not found!!</h1>")
})


/*
app.post("/", (req,res)=>{
    res.send("post request");
})

app.put("/", (req,res)=>{
    res.send("put request");
})
app.delete("/", (req,res)=>{
    res.send("delete request");
}) */






module.exports = app;