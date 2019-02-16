const superheroes = require("superheroes");     // "Require" used to import external modules
const supervillains = require("supervillains");

let goodieName = superheroes.random();          // .random() is a method from these modules
let baddieName = supervillains.random();

console.log(`"You'll never catch me, ${goodieName}!" ${baddieName} shouted just before leaping out the window.

${goodieName} calmy watched ${baddieName} go, knowing she'd be back once she realized she'd left her Laser of Evil behind.`);