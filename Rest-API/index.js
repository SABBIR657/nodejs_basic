require("dotenv").config();
const app = require("./app")

const port = process.env.port || 5000;


app.listen(port,()=>{
    console.log(`server running at http://localhost:${port}`);
})

