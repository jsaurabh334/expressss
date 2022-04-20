const express = require("express");
const path = require("path");


const temppath = path.join(__dirname + "/tamplates")

const app = express();
app.set("views", temppath)

// to set the view enggine
app.set('view engine','hbs');

app.get("/",(req,res)=>{
    res.render("index",{
        myname:"saurabh",
    })
})
app.get("/about",(req,res)=>{
    res.render("about")
})

// app.get("/",(req,res)=>{
//     res.end("this is from express side")
// });

// console.log(__dirname)
app.get("/about",(req,res)=>{
//    res.write("<strong> this is bold text</strong>")
//    res.write("<strong> this is bold text</strong>")
//    res.write("<strong> this is bold text</strong>")
//    res.send("<strong> this is bold text</strong>")
//    res.send();
res.sendFile(__dirname +"/about.html")



});
app.listen(8000,()=>{
    console.log("server is runniing on port 8000")
})