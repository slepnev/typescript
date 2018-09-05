console.log(`
||  SOLUTIONS  ||
`);

// Exercise 1 - Arrow Function
const double = (value: number) => value * 2;
console.log(double(10));

// Exercise 2 - Default params
const greet = (name = "Max") => {
  console.log(`Hello ${name}`)
};
greet();
greet("Jone");

// Exercise 3 - Spread operator
const numbers = [-3, 33, 38, 5];
console.log(Math.min(...numbers));

// Exercise 4 - Spread operator
const newArrray = [55, 28];
newArrray.push(...numbers);
console.log(newArrray);

// Exercise 5 - Destructuring Arrays
const testResult = [1.28, 4.33, 2.29];
const [result1, result2, result3] = testResult;
console.log([result1, result2, result3]);

// Exercise 6 - Destructuring Objects
const scientist = {firstName: "Will", experience: 12};
const {firstName, experience} = scientist;
console.log(firstName, experience);

