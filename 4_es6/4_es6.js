// Rest & Spread
console.log("REST & Spread");
var number = [1, 10, 99, -5];
console.log(Math.max(33, 99, -1));
console.log(Math.max.apply(Math, number));
function makeArray(name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return args;
}
console.log(makeArray("Name", 1, 2, 3));
// Destructuring
console.log("DESTRUCTURING");
var myHobbiies = ["Cooking", "Sports"];
var hobby1 = myHobbiies[0], hobby2 = myHobbiies[1];
console.log(hobby1, hobby2);
var userData = { userName: "Max", age: 23 };
var myAge = userData.age, userName = userData.userName;
console.log(userName, myAge);
// Template literals
var myName = "Max";
var greeting = "\n  I'm " + myName + ", \n  This is cool.";
console.log(greeting);
