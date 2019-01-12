//Pseudocode to understand event listeners...

function addPseudoEventListener (typeOfEvent, callback) {
  //Code that detects the event...

  //Create an object to capture data about the event.
  let eventData = {
      duration: 2,
      type: "click",
      otherInfo: "More information"
  }; 
 
  //Run the callback, which can take the event object as a parameter.
  if (eventData.type === typeOfEvent) {
      callback(eventData);
  }

}

addPseudoEventListener("click", function(event) { //The parameter of the function will be the event object.
  console.log(event);
});