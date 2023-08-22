const express = require('express');

const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/triangle",(req,res)=>{
    res.sendFile(__dirname+"/triangle.html");
})

app.post("/triangle",(req,res)=>{
    const height = req.body.height;
    const base = req.body.base;

    const areaTriangle =parseInt(height*base/2) ;

    res.send(`area of triangle is: ${areaTriangle}`);
})

app.get("/circle",(req,res)=>{
    res.sendFile(__dirname+"/circle.html");
})

app.post("/circle",(req,res)=>{
    const radius = req.body.radius;

    const areaCircle = 2*3.1416*radius;

    res.send(`area of circle: ${areaCircle}`);
})



app.get("/" ,(req,res)=>{
     res.sendFile(__dirname+"/index.html");
})

module.exports = app;