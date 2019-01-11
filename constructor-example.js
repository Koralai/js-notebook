function Yarn (name, weight, color, fiberContents, windSkein) {
  this.name = name;
  this.weight = weight;
  this.color = color;
  this.fiberContents = fiberContents;
  this.windSkein = function() {
      console.log("Winding a new skein of " + this.name + "...");
  };
}

let yarn1 = new Yarn("Baa-velous", 4, "cream", ["merino", "alpaca", "nylon"]);