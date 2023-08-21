const express = require('express');

const router = express.Router();



router.get("/register",(req,res)=>{
   
    /* get response in json format
    res.status(200).json({
        message:"registration page",
        statusCode: 200,
    });

    res.redirect("/login"); redirect the pahe
    */

    //take response from a html file
    res.statusCode = 200;
    res.sendFile(__dirname+ "/views/register.html"); 


    
});


router.get("/login",(req,res)=>{

    //set cokkies
    res.cookie("name", "sabbir");
    res.end();

  //  res.clearCookie("name")  ->  for clearing cokkie

  //set header
  res.append("id", "120094");
});

module.exports = router;

