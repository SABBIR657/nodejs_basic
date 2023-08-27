const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const userRouter = require("./Routes/userRoutes");

const app = express();

app.use(cors()); //for fetching the data from different port or, medium

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());



app.get("/", (req,res)=>{
   res.sendFile((__dirname +"/views/index.html"));
})

app.use("/users",userRouter);


//invalid route error
app.use((req,res,next)=>{
  res.status(404).json({
    message: "route not found"})
})




//server error
app.use((err,req,res,next)=>{
    res.status(500).json({
        message: "sommething broke"
    })
})




module.exports = app;




