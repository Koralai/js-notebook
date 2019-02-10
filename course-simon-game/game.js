let gameStarted = false; //Making sure the keydown event only starts the game once
let userClickedPattern = [];

$(document).keydown(function () {
  if (!gameStarted) {
    gameStarted = true;

    const buttonColors = ["red", "blue", "green", "yellow"];
    let randomChosenColor = buttonColors[nextSequence()];

    let gamePattern = [];
    gamePattern.push(randomChosenColor);

    $("#" + randomChosenColor).fadeOut(125).fadeIn(125); //Make the button of the chosen color blink
    playSound(randomChosenColor);

    $(".btn").click(function(){
      let userChosenColor = $(this).attr("id");
      userClickedPattern.push(userChosenColor);
      console.log(userClickedPattern);
    });

    console.log(gamePattern);
    console.log(randomChosenColor);
  }
});

function nextSequence() {
  return Math.floor(Math.random() * 4);
}

function playSound(colorName) {
  switch (colorName) {
    case "blue":
      let soundBlue = new Audio("sounds/blue.mp3");
      soundBlue.play();
      break;

    case "green":
      let soundGreen = new Audio("sounds/green.mp3");
      soundGreen.play();
      break;

    case "red":
      let soundRed = new Audio("sounds/red.mp3");
      soundRed.play();
      break;

    case "yellow":
      let soundYellow = new Audio("sounds/yellow.mp3");
      soundYellow.play();
      break;

    case "wrong":
      let soundWrong = new Audio("sounds/wrong.mp3");
      soundWrong.play();
      break;
  }
}