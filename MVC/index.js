const express = require('express');
const app = express();

const bodyParser = require("body-parser");

const userRouter = require("./routes/usersRoute");
const productRouter = require("./routes/productsRoute");

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(userRouter); //accesing the userROuter
app.use(productRouter);


const port = 3000;

//app.use(express.urlencoded({extended:true})); //accesing the body 




//ES6 form making




app.use((req,res,next)=>{
    res.status(404).json({
      message:"invalid route"
})
})

app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`);
})