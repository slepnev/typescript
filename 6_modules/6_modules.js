"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('NAMESPACE');
/// <reference path="circleMath.ts" />
/// <reference path="rectangleMath.ts" />
// console.log(MyMath.calculateRectangle(10, 20));
// console.log(MyMath.calculateCurcumference(3));
console.log('MODULES');
var Circle = require("./math/circle");
var rectangle_1 = require("./math/rectangle");
console.log(Circle.PI);
console.log(Circle.calculateCirumcumference(3));
console.log(rectangle_1.default(10, 2));
