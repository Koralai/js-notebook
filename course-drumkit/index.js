let allDrumKit = document.querySelectorAll(".drum"); //DOM selector for all elements with the "drum" class, returns an array

for (let i = 0; i < allDrumKit.length; i++) {

  allDrumKit[i].addEventListener("click", function() {

    let buttonInnerHTML = this.innerHTML;

    switch (buttonInnerHTML) {
      case "w":
        let tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

      case "a":
        let tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

      case "s":
        let tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

      case "d":
        let tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;

      case "j":
        let snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;

      case "k":
        let kickBass = new Audio("sounds/kick-bass.mp3");
        kickBass.play();
        break;

      case "l":
        let crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;

      default: console.log(buttonInnerHTML);
    }
  });  
}