const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const port = 3001;

//connect db
mongoose.connect(
  "mongodb+srv://darshana:darshana@cluster0.zm2qv.mongodb.net/items?retryWrites=true&w=majority"
);

//data schema
const itemSchema = {
  title: String,
  description: String,
};

//data model
const Item = mongoose.model("Item", itemSchema);

//read
app.get("/items",(req,res)=>{
  Item.find().then((items)=>res.json(items)).catch((err)=>res.status(400).json("Error : "+ err))
})


//create

//update

//delete

app.listen(port, function () {
  console.log("Express is running");
});
