console.log('NAMESPACE');

/// <reference path="circleMath.ts" />
/// <reference path="rectangleMath.ts" />

// console.log(MyMath.calculateRectangle(10, 20));
// console.log(MyMath.calculateCurcumference(3));


console.log('MODULES');

import * as Circle from './math/circle';
import calculateRectangle from './math/rectangle'
console.log(Circle.PI);
console.log(Circle.calculateCirumcumference(3));
console.log(calculateRectangle(10, 2));

