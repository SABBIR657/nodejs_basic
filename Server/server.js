//making a server
const http = require('http');
const port = 3000;
const hostname = '127.0.0.1';


const myServer = http.createServer((req,res) =>{
    res.end("<h1>server is running</h1>");
});

myServer.listen(port,()=>{
    console.log(`server is running at http://${hostname}:${port}`)
})

