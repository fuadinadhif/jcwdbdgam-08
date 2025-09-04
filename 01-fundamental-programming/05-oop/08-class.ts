// Class -> Blueprint untuk membuat sebuah object

// const employee1 = {
//   name: "Adrian",
//   age: 28,
//   salary: 1000,
//   address: "DKI",
//   gender: "Male",
// };

// const employee2 = {
//   name: "Budi",
//   age: 32,
//   salary: 1200,
//   address: "Bandung",
//   gender: "Male",
// };

// const employee3 = {
//   name: "Citra",
//   age: 25,
//   salary: 950,
//   address: "Surabaya",
//   gender: "Female",
// };

class Employee {
  name: string;
  age: number;
  salary: number;
  address: string;
  gender: string;

  constructor(
    name: string,
    age: number,
    salary: number,
    address: string,
    gender: string
  ) {
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.address = address;
    this.gender = gender;
  }
}

const employee1 = new Employee("Adrian", 28, 1000, "DKI", "Male");
const employee2 = new Employee("Budi", 32, 1200, "Bandung", "Male");
const employee3 = new Employee("Citra", 25, 950, "Surabaya", "Female");

console.log(employee1);
console.log(employee2);
console.log(employee3);
