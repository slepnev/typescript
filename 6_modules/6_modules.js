var MyMath;
(function (MyMath) {
    var PI = 3.14;
    function calculateCurcumference(diameter) {
        return diameter * PI;
    }
    MyMath.calculateCurcumference = calculateCurcumference;
    function calculateRectangle(width, length) {
        return width * length;
    }
    MyMath.calculateRectangle = calculateRectangle;
})(MyMath || (MyMath = {}));
console.log(MyMath.calculateRectangle(10, 20));
