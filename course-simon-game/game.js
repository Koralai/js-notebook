let gameStarted = false; //Making sure the keydown event only starts the game once

$(document).keydown(function () {
  if (!gameStarted) {
    gameStarted = true;
  
    // Initial data
    const buttonColors = ["red", "blue", "green", "yellow"];
    let gamePattern = [];
    let userClickedPattern = [];
    
    // First move: start with a random color (w/ sound & visual effects) and add it to the game pattern
    let randomChosenColor = buttonColors[nextSequence()];
    $("#" + randomChosenColor).fadeOut(125).fadeIn(125); //Make the button of the chosen color blink
    playSound(randomChosenColor);
    gamePattern.push(randomChosenColor);

    // Record the buttons pressed by the user, make sound & visual effects on button press)
    $(".btn").click(function(){
      let userChosenColor = $(this).attr("id");

      userClickedPattern.push(userChosenColor);
      playSound(userChosenColor);
      animatePress(userChosenColor);
      
      console.log(userClickedPattern);
    });

    console.log(gamePattern);
    console.log(randomChosenColor);
  }
});

// Randomly generate a number between 0 and 3 (for indexes of the buttonColors array)
function nextSequence() {
  return Math.floor(Math.random() * 4);
}

// Play the sound associated with each color
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

// Animation for pressing a button
function animatePress(currentColor) {
  let selectedBtn = $(".btn." + currentColor);
  selectedBtn.addClass("pressed");

  setTimeout(function(){
    selectedBtn.removeClass("pressed");
  }, 100);
}