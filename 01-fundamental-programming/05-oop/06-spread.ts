// Spread -> menyebarkan element/property dari array/object
// Biasanya kita pakai untuk menyalin sebagian/seluruh data dari sebuah array/object

/* ------------------------------ Array spread ------------------------------ */
const arrayOfNames = ["Nadine", "Malik", "Khrisna", "Pimpie", "Devina"];
// const otherArrayOfNames = [
//   arrayOfNames[0],
//   arrayOfNames[1],
//   arrayOfNames[2],
//   arrayOfNames[3],
// ];
// console.log(otherArrayOfNames);

const otherArrayOfNames = ["Dadit", ...arrayOfNames];
console.log(otherArrayOfNames);
console.log(arrayOfNames);

/* ------------------------------ Object spread ----------------------------- */
const childrenData = { name: "Maziya", age: 3, address: "Setiabudhi, Bandung" };
// const otherChildrenData = {
//   name: childrenData.name,
//   age: childrenData.age,
//   address: childrenData.address,
// };
// console.log(otherChildrenData);

const otherChildrenData = { ...childrenData, gender: "Female", age: 4 };
console.log(otherChildrenData);

/* ---------------------------------- NOTES --------------------------------- */
function findSecondSmallest(...restParams) {
  console.log(restParams);
  console.log(...restParams);
  console.log(Math.min(...restParams));
}

findSecondSmallest(1, 2, 5, 6, 10, 5, -100, 1000);
