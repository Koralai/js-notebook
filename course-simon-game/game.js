let gameStarted = false; //Making sure the keydown event only starts the game once

// Initial data
const buttonColors = ["red", "blue", "green", "yellow"];
let level = 0;
let gamePattern = [];
let userClickedPattern = [];

// Gameplay
$(document).keydown(function () {
  if (!gameStarted) {
    gameStarted = true;
    nextSequence();
  }
});

// The user's move: animate button pressed by the user and add it to the user's sequence
$(".btn").click(function () {
  let userChosenColor = $(this).attr("id");

  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);

  console.log(userClickedPattern);
});

// The game's move: increase the game level, randomly select/animate a button and add to the game's sequence
function nextSequence() {
  $("#level-title").text("Level " + level);
  level++;

  let randomNumber = Math.floor(Math.random() * 4); // Between 0 and 3 because the colors array has only 4 indexes
  let randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor).fadeOut(125).fadeIn(125); // Makes the button of the chosen color blink
  playSound(randomChosenColor);

  console.log(gamePattern);
}

// Play the sound associated with each color
function playSound(colorName) {
  let audio = new Audio("sounds/" + colorName + ".mp3");
  audio.play();
}

// Animation for pressing a button
function animatePress(currentColor) {
  let selectedBtn = $(".btn." + currentColor);
  selectedBtn.addClass("pressed");

  setTimeout(function () {
    selectedBtn.removeClass("pressed");
  }, 100);
}