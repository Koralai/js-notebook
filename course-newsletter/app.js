const express = require("express");
const app = express();

const request = require("request");
const bodyParser = require("body-parser");

app.listen(3000, function(){
  console.log(`Server is running on port 3000.`)
});