interface IFood {
  name: string;
  calories: number;
}

export function speak(food: IFood): void {
  console.log(`Our ${food.name} has ${food.calories} calories.`);
}

const ice_cream: IFood = {
  nmae: 'ice cream',
  calories: 200,
};

speak(ice_cream);

const cake: IFood = {
  name: 'water',
};
speak(cake);

// ts-node src/examples-TS/introduction/interfaces.ts
// Compile Error:
// Object literal may only specify known properties, and 'nmae' does not exist in type 'IFood'.
// roperty 'calories' is missing in type '{ name: string; }' but required in type 'IFood'.
