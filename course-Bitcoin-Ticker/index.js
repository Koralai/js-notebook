const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(`${__dirname}/index.html`);
});

app.post("/", function(req, res){
  // Getting data from the form (req.body.[field name])
  let userChosenCrypto = req.body.crypto;
  let userChosenFiat = req.body.fiat;
  let userChosenAmount = req.body.amount;

  let currentCryptoWord = getCryptoWord(userChosenCrypto);
  let currentFiatSymbol = getCurrencySymbol(userChosenFiat);

  // The npm request package lets the first arg of request(x,y) be a URL or options object, which is more customizable
  let options = {
    url: "https://apiv2.bitcoinaverage.com/convert/global",
    method: "GET",
    qs: {
      from: userChosenCrypto,
      to: userChosenFiat,
      amount: userChosenAmount
    },
  };

  request(options, function(error, response, body) {
    let data = JSON.parse(body); // body is the JSON data sent in response; convert to JS object to work with it
    let latestPrice = data.price.toFixed(2); // "last" points to a key/value pair from the API data

    res.send(`
      <p>The latest price of ${userChosenAmount} ${currentCryptoWord} is ${currentFiatSymbol}${latestPrice}.</p>
    `);
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