// Assuming 'student' is a type with properties like name, age, and course
type student = {
  name: string;
  age: number;
  course: string;
};

// Expanded 'sadikInfo' object with type annotation
const sadikInfo: student = {
  name: 'Sadik',
  age: 21,
  course: 'Computer Science'
};

// Optimizing the code by using a class to encapsulate the student data
class Student {
  name: string;
  age: number;
  course: string;

  constructor(name: string, age: number, course: string) {
    this.name = name;
    this.age = age;
    this.course = course;
  }

  // Method to display student information
  displayInfo(): void {
    console.log(`Name: ${this.name}, Age: ${this.age}, Course: ${this.course}`);
  }
}

// Creating an instance of the Student class for Sadik
const sadik = new Student('Sadik', 21, 'Computer Science');
sadik.displayInfo();
