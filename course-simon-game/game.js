let gameStarted = false; //Making sure the keydown event only starts the game once
const buttonColors = ["red", "blue", "green", "yellow"];
let level = 0;
let gamePattern = [];
let userClickedPattern = [];

// Begin gameplay
$(document).keydown(function () {
  if (!gameStarted) {
    gameStarted = true;
    nextSequence();
  }
});

// The user's move: animate button pressed by the user and add it to the user's sequence; check the user's answer
$(".btn").click(function () {
  let userChosenColor = $(this).attr("id");

  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);

  checkAnswer(userClickedPattern.length - 1); // Last index will be at position length-1.
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
}

function checkAnswer(currentLevel) {

  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {

    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence()
      }, 1000);
      userClickedPattern = [];
    }
  } else {
    playSound("wrong");

    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    $("#level-title").text("Game Over, Press Any Key to Restart");
    startOver();
  }
}

function startOver() {
  gameStarted = false;
  level = 0;
  gamePattern = [];
  userClickedPattern = [];
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