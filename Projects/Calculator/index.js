const express = require('express');

const app = require("./app")



const Port = 3002;

app.listen(Port, ()=>{
    console.log(`server is running at http://localhost:${Port}`);
})