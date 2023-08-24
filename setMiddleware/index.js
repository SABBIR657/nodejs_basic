const express = require('express');
const app = express();

const port = 3001;

const myMiddleWare = (req,res,next) =>{

 console.log('middleware function');

 req.currentTime = new Date(Date.now()); //change in req,res

 next();  //after completing the work on middleware it will back on the working function in this case the get method. if here another middleware was here then after calling next function it will go to the next middleware function.

}

//app.use(myMiddleWare); //every route can use the middleware

app.use(express.static("public")); //using static middleware -> when we want to work with image or styling stuff.


//error  handeling middleware
app.use((req,res,next)=>{
    res.send("404 bad url request");
});

//another error
app.use((err,req,res,next)=>{
    res.status(500).send('something broke!');
})

//use static middleware
app.get("/",(req,res)=>{

   res.sendFile(__dirname+"/index.html");
})

app.get("/about",myMiddleWare,(req,res)=>{

    console.log("about page: "+req.currentTime);
    res.send("<h2>about route</h2>")
})

app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
})