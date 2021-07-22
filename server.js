//jshint esversion:6
const express = require("express");
const app = express();

app.get("/",function(request,response){
    console.log(request); //displayed request
    response.send("<h1 style='color:red;'>Hello</h1>"); //sends respond 
});

app.get("/new",function(request,response){
    response.send("<h1 style='color:blue;'>Contact Me later</h1>"); //sends respond 
});

app.get("/about",function(request,response){
    response.send("This page is handled by <em><strong>Avoy Sarkar</strong></em> who is pursuing Masters of Computer Applications in Pondicherry University."); //sends respond 
});

app.listen(3000,function(){
    console.log("Server started at 3000");
});