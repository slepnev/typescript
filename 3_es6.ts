// Rest & Spread
console.log("REST & Spread");
const number = [1, 10, 99, -5];
console.log(Math.max(33, 99, -1));
console.log(Math.max(...number));

function makeArray(name: string, ...args: number[]) {
  return args;
}
console.log(makeArray("Name", 1, 2, 3));

// Destructuring
console.log("DESTRUCTURING");
const myHobbiies = ["Cooking", "Sports"];
const [hobby1, hobby2] = myHobbiies;
console.log(hobby1, hobby2);
