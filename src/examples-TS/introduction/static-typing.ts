const burger = 'hamburger';
const calories = 300;
let tasty = true;
tasty = "I haven't tried it yet";

function speak(food: string, energy: number): void {
  console.log(`Our ${food} has ${energy} calories.`);
}

speak(burger, calories);
speak('tripple cheesburger', 'a ton of');

// ts-node src/examples-TS/introduction/static-typing.ts
// Compile Error:
// Type '"I haven't tried it yet"' is not assignable to type 'boolean'.
// Argument of type '"a ton of"' is not assignable to parameter of type 'number'.
