
// Roll for die #1 (random number & corresponding image)

let randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6
let randomDiceImgSrc1 = "images/dice" + randomNumber1 + ".png"; // /images/dice1.png - /images/dice6.png
let img1 = document.querySelector(".img1"); // DOM element for the first image
img1.setAttribute("src", randomDiceImgSrc1);


// Roll for die #2 (same process)

let randomNumber2 = Math.floor(Math.random() * 6) + 1; 
let randomDiceImgSrc2 = "images/dice" + randomNumber2 + ".png";
let img2 = document.querySelector(".img2");
img2.setAttribute("src", randomDiceImgSrc2);


// Header to declare the winner

let pageHeading = document.querySelector("h1"); // DOM element for the page heading
pageHeading.textContent = getWinnerText(randomNumber1, randomNumber2);

function getWinnerText (playerOneScore, playerTwoScore) {
  if (playerOneScore > playerTwoScore) {
    return "🚩 Player 1 wins!";
  } else if (playerOneScore < playerTwoScore) {
    return "Player 2 wins! 🚩";
  } else {
    return "🚩 Draw! 🚩";
  }
}