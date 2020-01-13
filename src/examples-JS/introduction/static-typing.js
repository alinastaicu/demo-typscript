const burger = 'hamburger';
const calories = 300;
let tasty = true;
tasty = "I haven't tried it yet";

function speak(food, energy) {
  console.log(`Our ${food} has ${energy} calories.`);
}

speak(burger, calories);
speak('tripple cheesburger', 'cheese');

// node src/examples-JS/introduction/static-typing.js
// Our hamburger has 300 calories.
// Our tripple cheesburger cheese of calories.
