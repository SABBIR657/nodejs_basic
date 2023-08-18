//making a server
const http = require('http');
const port = 3000;
const hostname = '127.0.0.1';


const myServer = http.createServer((req,res) =>{
    res.writeHead(202, {'content-type':'text/html'}); //adding status code and set the content type

    res.write("<h1>server is running</h1>")
    res.end();
});

myServer.listen(port,()=>{
    console.log(`server is running at http://${hostname}:${port}`)
})

