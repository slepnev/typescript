var MyMath;
(function (MyMath) {
    var PI = 3.14;
    function calculateCurcumference(diameter) {
        return diameter * PI;
    }
    MyMath.calculateCurcumference = calculateCurcumference;
})(MyMath || (MyMath = {}));
var MyMath;
(function (MyMath) {
    function calculateRectangle(width, length) {
        return width * length;
    }
    MyMath.calculateRectangle = calculateRectangle;
})(MyMath || (MyMath = {}));
/// <reference path="circleMath.ts" />
/// <reference path="rectangleMath.ts" />
console.log(MyMath.calculateRectangle(10, 20));
console.log(MyMath.calculateCurcumference(3));
