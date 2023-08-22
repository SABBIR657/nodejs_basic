const express = require('express');

const app = express();

const userRouter = require("./routes/users.route");

const bodyParser = require('body-parser');

app.use("/api/user",userRouter);


//use post method to send json data

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.post("/register",(req,res)=>{
    //requesting the body for the full name in html the name will be same.
    const fullName = req.body.fullName;
    const Age = req.body.Age;

   res.send(`user name is:${fullName} &age is ${Age}`);
});



//use html form to send data
app.get("/register",(req, res)=>{
    res.sendFile(__dirname + "/registerForm.html");
})



app.use((req,res)=>{
    res.send("<h1>404 not found!!</h1>")
})










app.get("/",(req,res)=>{

    //set qyery parameter 
    //for accesing this query write on url-> /?age=12&id=65
    
    const age = req.query.age;
    res.send(`user age is: ${age}`);
    const id = req.query.id;
    res.send(`user id : ${id}`); 


    //route parameter
    //for accesing the parameter http://localhost:3001/userid/101/userAge/45
    /*
    const id = req.params.id;
    const age = req.params.age; */


    //header parameter 
    /*
    const id = req.header('id');
    const age = req.header('age');*/



    res.send(`user id is${id}& user age is${age}`);



    


    res.statusCode = 200;
    res.sendFile(__dirname+"/views/index.html"); 
});





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