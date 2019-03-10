const express = require("express");
const app = express();

const request = require("request");
const bodyParser = require("body-parser");

app.use(express.static(`public`));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(`${__dirname}/signup.html`);
});

app.post("/", function(req, res){
  res.send(`
  First name: ${req.body.firstName}
  Last name: ${req.body.lastName}
  Email: ${req.body.email}
  `);
})

app.listen(3000, function(){
  console.log(`Server is running on port 3000.`)
});