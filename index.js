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

//read

//create

//update

//delete

app.listen(port, function () {
  console.log("Express is running");
});
