const point: number = 100;
const email: string | undefined = undefined;

/* ---------------------------- Without Interface --------------------------- */
// const people: {
//   name: string;
//   email: string;
//   age: number;
//   gender: string;
//   address: string;
//   height: number;
// } = {
//   name: "John",
//   email: "john@mail.com",
//   age: 100,
//   gender: "Male",
//   address: "England",
//   height: 200,
// };

/* ----------------------------- With Interface ----------------------------- */
interface People {
  name: string;
  email: string;
  age: number;
  gender: string;
  address: string;
  height: number;
}

const people: People = {
  name: "John",
  email: "john@mail.com",
  age: 100,
  gender: "Male",
  address: "England",
  height: 200,
};

/* ------------------------------- Implements ------------------------------- */
interface InterfaceProduct {}

class Product implements InterfaceProduct {}

/* ------------------------------ Variant Type ------------------------------ */
const studentData: { name: string; score: number } = {
  name: "John",
  score: 100,
};

interface EmployeeData {
  name: string;
  age: number;
}

const employeeData: EmployeeData[] = [
  { name: "Nadhif", age: 28 },
  { name: "John", age: 70 },
  { name: "Budi", age: 50 },
];
const customerData: string[] = ["Nadhif", "John", "Budi"];
