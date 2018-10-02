function greet2(person) {
    console.log('Hello, ' + person.firstName);
}
function changeName(person) {
    person.firstName = 'Anna';
}
var person = {
    firstName: 'Max',
    age: 27,
    hobbies: ['Cooking'],
    greet: function (lastName) {
        console.log('Hi, I am ' + this.firstName + ' ' + lastName);
    }
};
person.greet('Anna');
greet2(person);
changeName(person);
greet2(person);
// Class
var Person2 = /** @class */ (function () {
    function Person2() {
    }
    Person2.prototype.greet = function (lastName) {
        console.log('Hi, I am ' + this.firstName + ' ' + lastName);
    };
    ;
    return Person2;
}());
var myPerson = new Person2();
myPerson.firstName = 'Maximilian';
myPerson.lastName = 'Anything';
greet2(myPerson);
myPerson.greet(myPerson.lastName);
var myDoubleFunction = function (value1, value2) {
    return (value1 + value2) * 2;
};
console.log(myDoubleFunction(10, 20));
var oldPerson = {
    age: 27,
    firstName: 'Max',
    greet: function (lastName) {
        console.log('Hello!');
    }
};
console.log(oldPerson);
