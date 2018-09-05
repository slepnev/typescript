// Exercise 1 - Class
class Car {
  name: string;
  acceleration: number = 0;

  constructor(name: string) {
    this.name = name;
  }
  
  honk() {
    console.log('Toooot!');
  }

  accelerate(speed: number) {
    this.acceleration = this.acceleration + speed;
  }
}

const car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(20);
console.log(car.acceleration);

// Exercise 2 - Inheritance
class BaseObject {
  width = 0;
  length = 0;
}

class Rectange extends BaseObject {
  calcSize() {
    return this.width * this.length;
  }
}

const rectangle = new Rectange();
rectangle.width = 5;
rectangle.length = 10;
console.log(rectangle.calcSize());


// Exercise 3 - Getters & Setters
class NewPerson {
  private _firtName: string = "";

  get firstName(): string {
    return this._firtName;
  }

  set firstName(name: string) {
    if(name.length > 3){
      this._firtName = name;
    } else {
      this._firtName = "";
    }
  }
}

const newPerson = new NewPerson();
console.log(newPerson.firstName);
newPerson.firstName = "Maxx";
console.log(newPerson.firstName);

