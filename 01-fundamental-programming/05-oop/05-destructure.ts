// Cara kita mengambil sebagian value dari sebuah array atau object

/* --------------------------- Array destructuring -------------------------- */
const studentList = ["Joko", "Bowo", "Andi"];
// const student1 = studentList[0];
// const student2 = studentList[1];
// const student3 = studentList[2];
// console.log(student1, student2, student3);

const [student1, student2, student3] = studentList;
console.log(student1, student2, student3);

/* -------------------------- Object destructuring -------------------------- */
const studentData = { name: "Andhika Giri", semester: 5, ipk: 3.75 };
// const name = studentData.name;
// const semester = studentData.semester;
// const ipk = studentData.ipk;
// console.log(name, semester, ipk);

const { semester, ipk, name } = studentData;
console.log(name, semester, ipk);
