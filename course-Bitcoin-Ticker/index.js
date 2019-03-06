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

  let currentCryptoWord = getCryptoWord(userChosenCrypto);
  let currentFiatSymbol = getCurrencySymbol(userChosenFiat);

  let tickerRequestURL = `https://apiv2.bitcoinaverage.com/indices/global/ticker/${userChosenCrypto}${userChosenFiat}`; 

  request(tickerRequestURL, function(error, response, body) {
    let data = JSON.parse(body); // body is the JSON data sent in response; convert to JS object to work with it
    let latestPrice = data.last; // "last" points to a key/value pair from the API data

    res.send(`The current price of ${currentCryptoWord} is ${currentFiatSymbol}${latestPrice}.`);
  });
});

app.listen(3000, function() {
  console.log("Server is running on port 3000.")
});

// Convert the user's chosen cryptocurrency to a word to make the response more readable:
function getCryptoWord(cryptoAbbreviation) {
  switch(cryptoAbbreviation) {
    case "BTC":
      return "Bitcoin"; 
    case "ETH":
      return "Ethereum";
    case "LTC":
      return "Litecoin";
    default: 
      return "this cryptocurrency";
  }
}

function getCurrencySymbol(currency) {
  switch(currency) {
    case "USD":
      return "$";
    case "GBP":
      return "£";
    case "EUR":
      return "€";
    default:
      return "";
  }
}