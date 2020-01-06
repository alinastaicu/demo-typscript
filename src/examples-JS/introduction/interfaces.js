function speak(food) {
  console.log(`Our ${food.name} has ${food.calories} calories.`);
}

const ice_cream = {
  nmae: 'ice cream',
  calories: 200,
};

speak(ice_cream);

const cake = {
  name: 'chocolote dream',
};
speak(cake);

// node src/examples-JS/introduction/interfaces.js
// Our undefined has 200 calories.
// Our chocolote dream has undefined calories.
