const http = require('http');
const fs = require('fs');
const { url } = require('inspector');
const port = 3000;
const hostname = '127.0.0.1';

const myServer = http.createServer((req,res)=>{


    //function for read write file
    const handleFile = (statusCode, fileLocation)=>{
        fs.readFile(fileLocation,(err,data)=>{
            res.writeHead(statusCode,{"content-type": "text/html"});
  
            res.write(data);
  
            res.end();
          } )
    }




    if(req.url == '/') //requesting home route
    {
       handleFile(200,"index.html");
    }

   else if(req.url == '/about') //requesting about route
    {
       handleFile(200,"about.html")
    }

    else if(req.url == '/contact') //requesting contact route
    {
        handleFile(200,"contact.html");
    }

    else{
       handleFile(404,"error.html");
    }
});


myServer.listen(port,()=>{
   console.log(`server is runnng at http://${hostname}:${port}`);
})
