const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(`${__dirname}/index.html`);
});

app.post("/", function(req, res){
  let userChosenCrypto = req.body.crypto;
  let userChosenFiat = req.body.fiat;

  let tickerRequestURL = `https://apiv2.bitcoinaverage.com/indices/global/ticker/${userChosenCrypto}${userChosenFiat}`; 

  request(tickerRequestURL, function(error, response, body) {
    let data = JSON.parse(body); // body is the JSON data sent in response; convert to JS object to work with it
    let latestPrice = data.last; // "last" points to a key/value pair from the API data

    res.send(`The current price of ${userChosenCrypto} is ${latestPrice} ${userChosenFiat}.`);
  });
});

app.listen(3000, function() {
  console.log("Server is running on port 3000.")
});