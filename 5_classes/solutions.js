var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Exercise 1 - Class
var Car = /** @class */ (function () {
    function Car(name) {
        this.acceleration = 0;
        this.name = name;
    }
    Car.prototype.honk = function () {
        console.log('Toooot!');
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    };
    return Car;
}());
var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(20);
console.log(car.acceleration);
// Exercise 2 - Inheritance
var BaseObject = /** @class */ (function () {
    function BaseObject() {
        this.width = 0;
        this.length = 0;
    }
    return BaseObject;
}());
var Rectange = /** @class */ (function (_super) {
    __extends(Rectange, _super);
    function Rectange() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rectange.prototype.calcSize = function () {
        return this.width * this.length;
    };
    return Rectange;
}(BaseObject));
var rectangle = new Rectange();
rectangle.width = 5;
rectangle.length = 10;
console.log(rectangle.calcSize());
// Exercise 3 - Getters & Setters
var NewPerson = /** @class */ (function () {
    function NewPerson() {
        this._firtName = "";
    }
    Object.defineProperty(NewPerson.prototype, "firstName", {
        get: function () {
            return this._firtName;
        },
        set: function (name) {
            if (name.length > 3) {
                this._firtName = name;
            }
            else {
                this._firtName = "";
            }
        },
        enumerable: true,
        configurable: true
    });
    return NewPerson;
}());
var newPerson = new NewPerson();
console.log(newPerson.firstName);
newPerson.firstName = "Maxx";
console.log(newPerson.firstName);
