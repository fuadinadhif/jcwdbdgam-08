{
  // 1. Object.assing()
  // Membuat sebuah object dari beberapa object lain
  const target = { name: "Megawati" };
  const source = { age: 25 };
  // const result = Object.assign(target, source);
  // console.log(result);

  const resultWithSpread = { ...source, ...target };
  console.log(resultWithSpread);

  // 2. Object.keys()
  // Akan mengambil key dari suatu object dan dimasukkan ke dalam suatu array
  const studentData = { name: "Joko", age: 50, degree: "S1" };
  console.log(Object.keys(studentData));

  // 3. Object.values()
  // Akan mengambil value dari suatu object dan dimasukkan ke dalam suatu array
  console.log(Object.values(studentData));

  // 4. Object.entries()
  // Gabungan dari Object.keys + Object.values
  console.log(Object.entries(studentData));
}
