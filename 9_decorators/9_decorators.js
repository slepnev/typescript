var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logged(constructonrFn) {
    console.log(constructonrFn);
}
var Person3 = /** @class */ (function () {
    function Person3() {
        console.log('Hi!');
    }
    Person3 = __decorate([
        logged
    ], Person3);
    return Person3;
}());
// Factory
function logging(value) {
    return value ? logged : null;
}
var Car3 = /** @class */ (function () {
    function Car3() {
    }
    Car3 = __decorate([
        logging(true)
    ], Car3);
    return Car3;
}());
// Advanced
function printable(constructorFn) {
    constructorFn.prototype.print = function () {
        console.log(this);
    };
}
var Plant3 = /** @class */ (function () {
    function Plant3() {
        this.name = 'Green Plant';
    }
    Plant3 = __decorate([
        logging(true),
        printable
    ], Plant3);
    return Plant3;
}());
var plant3 = new Plant3();
plant3.print();
// Method Decorators
function editable(value) {
    return function (target, propName, descriptor) {
        descriptor.writable = value;
    };
}
var Project3 = /** @class */ (function () {
    function Project3(name) {
        this.projectName = name;
    }
    Project3.prototype.calcBudget = function () {
        console.log(1000);
    };
    __decorate([
        editable(false)
    ], Project3.prototype, "calcBudget", null);
    return Project3;
}());
var project3 = new Project3('Super project');
project3.calcBudget();
project3.calcBudget = function () {
    console.log(2000);
};
project3.calcBudget();
