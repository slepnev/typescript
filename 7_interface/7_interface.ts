// Interface
interface NamedPerson {
  firstName: string;
  age?: number;
  [propName: string]: any;
  greet(lastName: string): void;
}

function greet2(person: NamedPerson) {
  console.log('Hello, ' + person.firstName);
}

function changeName(person: NamedPerson) {
  person.firstName = 'Anna';
}

const person: NamedPerson = {
  firstName: 'Max',
  age: 27,
  hobbies: ['Cooking'],
  greet(lastName: string) {
    console.log('Hi, I am ' + this.firstName + ' ' + lastName);
  }
};

person.greet('Anna');
greet2(person);
changeName(person);
greet2(person);


// Class
class Person2 implements NamedPerson{
  firstName: string;
  lastName: string;
  age?: number;
  [propName: string]: any;
  greet(lastName: string) {
    console.log('Hi, I am ' + this.firstName + ' ' + lastName);
  };
}
const myPerson = new Person2();
myPerson.firstName = 'Maximilian';
myPerson.lastName = 'Anything';
greet2(myPerson);
myPerson.greet(myPerson.lastName);


// Function Types
interface DoubleValueFunc {
  (number1: number, number2: number): number;
}

const myDoubleFunction: DoubleValueFunc = function (value1: number, value2: number) {
  return (value1 + value2) * 2;
};

console.log(myDoubleFunction(10, 20));


// Interface Inheritance
interface AgedPerson extends NamedPerson {
  age: number;
}

const oldPerson: AgedPerson = {
  age: 27,
  firstName: 'Max',
  greet(lastName: string) {
    console.log('Hello!');
  }
};

console.log(oldPerson);
