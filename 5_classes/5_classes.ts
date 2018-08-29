class Person {
  private type: string;
  protected age: number = 22;

  constructor(public name: string, public username: string) {
    this.name = name;
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

const person = new Person("Max", "max");
console.log(person.name, person.username);
person.printAge();
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