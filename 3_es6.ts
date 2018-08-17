// REST & Spread
console.log("REST & Spread");
const number = [1, 10, 99, -5];
console.log(Math.max(33, 99, -1));
console.log(Math.max(...number));

function makeArray(...args: number[]) {
  return args;
}
console.log(makeArray(1, 2, 3));