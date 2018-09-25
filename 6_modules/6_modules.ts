console.log('NAMESPACE');

/// <reference path="circleMath.ts" />
/// <reference path="rectangleMath.ts" />

// console.log(MyMath.calculateRectangle(10, 20));
// console.log(MyMath.calculateCurcumference(3));


console.log('MODULES');

import { PI, calculateCirumcumference } from './math/circle';
console.log(PI);
console.log(calculateCirumcumference(3));

