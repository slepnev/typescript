var MyMath;
(function (MyMath) {
    var PI = 3.14;
    function calculateCurcumference(diameter) {
        return diameter * PI;
    }
    MyMath.calculateCurcumference = calculateCurcumference;
})(MyMath || (MyMath = {}));
