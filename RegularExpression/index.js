const express = require('express');

const app = express();

//regular expression -> only use 0-9 number otherwise wildcard
app.get("/products/:id([0-9]+)",(req,res)=>{
    res.send(`ID = ${req.params.id}`);
});

//use a to z with 3 character
app.get("/products/:title([a-zA-Z]{3})",(req,res)=>{
    res.send(`title = ${req.params.title}`);
});


//wildcard
app.use("*", (req,res)=>{
    res.status(404).send({
        message: "not a valid route"
    })
})


app.listen(3002, ()=>{
    console.log("server is running at http://localhost:3002");
})