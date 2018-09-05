class Person {
  private type: string;
  protected age: number = 22;
  public name: string;
  public username: string;

  constructor(name: string, username: string) {
    this.name = name;
    this.username = username;
  }

  printAge() {
    console.log(this.age);
    this.setType("Old guy");
  }

  private setType(type: string) {
    this.type = type;
    console.log(this.type);
  }
}

const person1 = new Person("Max", "max");
console.log(person1.name, person1.username);
person1.printAge();
// person.setType("Cool guy"); // Won't work with private method

// Inheritance
class Max extends Person {
  // name = "Max";

  constructor(username: string) {
    super("Max", username);
    this.age = 27;
  }

}
const max = new Max("max");
console.log(max);

// Getter & Setter
class Plant {
  private _species: string;

  get species() {
    return this._species;
  }

  set species(value: string) {
    if (value.length > 3) {
      this._species = value;
    } else {
      this._species = "Default";
    }
  }
}

let plant = new Plant();
console.log(plant.species);
plant.species = "AB";
console.log(plant.species);
plant.species = "Green Plant";
console.log(plant.species);

// Static Properties & Methods
class Helpers {
  static PI: number = 3.14;
  static calcCircumference(diameter: number): number{
    return this.PI * diameter;
  }
}
console.log(2 * Helpers.PI);
console.log(2 * Helpers.calcCircumference(8));

// Abstract Classes
abstract class Project {
  projectName: string = "Default";
  budget: number = 100;

  abstract changeName(name: string): void;

  calcBudget() {
    return this.budget * 2;
  }
}

class ITProject extends Project {
  changeName(name: string): void {
    this.projectName = name;
  }
}

let newProject = new ITProject();
console.log(newProject);
newProject.changeName("ChangeName");
console.log(newProject);

// SINGLETON private constructors
class OnlyOne {
  private static instance: OnlyOne;
  public readonly name: string;

  private constructor(name: string) {
    this.name =  name;
  }

  static getInstance() {
    if(!OnlyOne.instance) {
      OnlyOne.instance = new OnlyOne('The Only One');
    }
    return OnlyOne.instance;
  }
}

// let wrong = new OnlyOne('The Only One');
let right = OnlyOne.getInstance();
console.log(right.name);
// right.name = 'Something else';

