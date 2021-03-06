function logged(constructonrFn: Function) {
  console.log(constructonrFn);
}

@logged
class Person3 {
  constructor() {
    console.log('Hi!');
  }
}

// Factory
function logging(value: boolean) {
  return value ? logged: null;
}

@logging(true)
class Car3 {

}

// Advanced
function printable(constructorFn: Function) {
  constructorFn.prototype.print = function() {
    console.log(this);
  }
}

@logging(true)
@printable
class Plant3 {
  name = 'Green Plant';
}
const plant3 = new Plant3();
(<any>plant3).print();


// Method Decorator
// Property Decorator
function editable(value: boolean) {
  return function (target: any, propName: string, descriptor: PropertyDescriptor) {
    descriptor.writable = value;
  }
}

function overwritable(value: boolean) {
  return function (target: any, propName: string): any {
    const newDescriptor: PropertyDescriptor = {
      writable: value
    };
    return newDescriptor;
  }
}

class Project3 {
  @overwritable(false)
  projectName: string;

  constructor(name: string) {
    this.projectName = name;
  }

  @editable(false)
  calcBudget() {
    console.log(1000);
  }
}

const project3 = new Project3('Super project');
project3.calcBudget();
project3.calcBudget = function () {
  console.log(2000);
};
project3.calcBudget();
console.log(project3);


// Parameter Decorator
function printInfo(target: any, methodName: string, paramIndex: number) {
  console.log("Target: ", target);
  console.log("methodName: ", methodName);
  console.log("paramIndex: ", paramIndex);
}

class Course {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  printStudentNumbers(mode: string, @printInfo printAll: boolean) {
    if (printAll) {
      console.log(10000);
    } else {
      console.log(2000);
    }
  }
}

const course = new Course("Super Course");
course.printStudentNumbers("anything", true);
course.printStudentNumbers("anything", false);

