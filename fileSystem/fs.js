const fs = require('fs');
const { result } = require('../exportImport/student');

//console.log(fs);

fs.writeFile("demo1.txt", "hey i'm working on nodejs", function(err){
    if(err)
    {
        console.log(err);
    }

    else
    {
        console.log("sucessfull");
    }

});


fs.readFile("demo2.txt",'utf-8', (err, data) =>{
    if(err)
    {
        console.log(err);
    }

    else
    {
        console.log(data);
    }
})

fs.exists("demo1.txt", (result) =>{
    if(result)
    {
        console.log("found");
    }

    else
    {
        console.log("not found");
    }
})

//same as appendFile which will add data without removing exising data on file
//read file will read the file data

//use "rename" funcion will rename the file name
// for deleting file use "unlink" 
// use "exists" to find a file