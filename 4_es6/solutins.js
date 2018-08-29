console.log("\n||  SOLUTIONS  ||\n");
// Exercise 1 - Arrow Function
var double = function (value) { return value * 2; };
console.log(double(10));
// Exercise 2 - Default params
var greet = function (name) {
    if (name === void 0) { name = "Max"; }
    console.log("Hello " + name);
};
greet();
greet("Jone");
// Exercise 3 - Spread operator
var numbers = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers));
// Exercise 4 - Spread operator
var newArrray = [55, 28];
newArrray.push.apply(newArrray, numbers);
console.log(newArrray);
// Exercise 5 - Destructuring Arrays
var testResult = [1.28, 4.33, 2.29];
var result1 = testResult[0], result2 = testResult[1], result3 = testResult[2];
console.log([result1, result2, result3]);
// Exercise 6 - Destructuring Objects
var scientist = { firstName: "Will", experience: 12 };
var firstName = scientist.firstName, experience = scientist.experience;
console.log(firstName, experience);
