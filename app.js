const mongoose = require("mongoose");
const express = require("express");
const app  = express();
// const router = express.Router();
const bodyParser = require("body-parser");
const { json } = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));    //Take data from frontend
const port =  3003 ;
const DB = "mongodb+srv://Admin:123578b6@cluster1.kx0vjtl.mongodb.net/client?retryWrites=true&w=majority"
mongoose.set('strictQuery', false) 
mongoose.connect(DB,{
}).then(()=>{
  console.log("connected successful");
}).catch((err) =>{
  console.log(err);
});


const schema = {
  VehicleType : String,
  Plan: String,
  Name : String,
  Email : String,
  VehicleNo : String,
  Address :String,
  PhoneNo : Number,
  City : String,
}

const Note = mongoose.model("Note",schema);

app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html")
  Note.find({},function(notes) {
    // console.log(notes);
  })
})



app.get("/index.html",function(req,res){
  res.sendFile(__dirname + "/index.html")
  Note.find({},function(err,notes) {
    console.log(notes);
    // const response =  notes.toJSON()
    // const dataString = JSON.stringify(notes);
    // const parsed = JSON.parse(dataString);
    // // Convert to json.......,// 
    module.exports.Data = notes ;

  })

})
app.get("/untitled.js",function(req,res){
  res.sendFile(__dirname + "/untitled.js")
})
app.get("/Untitledcopy.js",function(req,res){
  res.sendFile(__dirname + "/Untitledcopy.js")
})

app.get("/pricing.html",function(req,res){
  res.sendFile(__dirname + "/pricing.html")
})
app.get("/aboutus.html",function(req,res){
  res.sendFile(__dirname + "/aboutus.html")
})

let nowdate = new Date()


app.post("/",function(req,res){
  let newnote = new Note({
    VehicleType : req.body.VehicleType,
    Plan        : req.body.Plan,
    Name        : req.body.Name,
    Email       : req.body.Email,
    VehicleNo   : req.body.VehicleNo,
    Address     : req.body.Address,
    PhoneNo     : req.body.PhoneNo,
    City        : req.body.City,
  });
  newnote.save();
  res.redirect("/")

})

// app.get("/index.html",(req,res)=>{
// schema.find({})
// .then((x)=>{
//   res.render("./index.html",{x})
// })
// .catch((y)=>{
//   console.log(y);
// })
// })


app.listen(port,function(){
  console.log("server is running on port : ",port);
})
// mongoexport --uri="DB" --collection=client --out=notes.json ;

             
