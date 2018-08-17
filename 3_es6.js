// REST & Spread
console.log("REST & Spread");
var number = [1, 10, 99, -5];
console.log(Math.max(33, 99, -1));
console.log(Math.max.apply(Math, number));
function makeArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
console.log(makeArray(1, 2, 3));
