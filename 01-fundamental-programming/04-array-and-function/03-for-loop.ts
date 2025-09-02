{
  // for let -> general type. bisa digunakan loop secara general
  // for (let i = 0; i < 10; i++) {}

  // for of -> kita pakai untuk melakukan looping di suatu array
  // for (const i of array) {}

  // for in -> kitai pakai untuk melakukan looping di suatu array atau object
  // for (const i in array/object) {}

  /* --------------------------------- for of --------------------------------- */
  const array1 = [100, 200, 300];
  for (const element of array1) {
    console.log(element);
  }

  // LOOP 1
  // element = 100
  // console.log(element) => console.log(100)

  // LOOP 2
  // element = 200
  // console.log(element) => console.log(200)

  // LOOP 2
  // element = 300
  // console.log(element) => console.log(300)

  /* --------------------------------- for in --------------------------------- */
  const array2 = ["Joko", "Bowo", "Bahlil"];
  const object1 = { name: "Joko", age: 75, address: "Solo" };

  for (const index in array2) {
    console.log(index);
  }

  for (const key in object1) {
    console.log(key);
    console.log(object1[key]);
  }

  // LOOP 1
  // key = "name"
  // console.log(key) => "name"
  // object1["name"] => "Joko"
  // console.log(object1[key]) => "Joko"

  /* ---------------------------------- NOTES --------------------------------- */
  const studentData = { name: "Andi", score: 100 };
  console.log(studentData.score);
  console.log(studentData["score"]);
  console.log(studentData["name"]);
}
