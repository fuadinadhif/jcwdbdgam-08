{
  /* -------------------------------- .toString ------------------------------- */
  // Mengubah array menjadi string
  const array1 = [1, 2, 3, [4, 5, 6], { name: "John" }];
  console.log(array1.toString());

  /* ---------------------------------- .join --------------------------------- */
  // Menggabungkan array menjadi sebuah string. Kita bisa menentukan karakter penghubungnya
  const array2 = [1, 2, 3];
  console.log(array2.join(""));
  console.log(array2.join("-"));
  console.log(array2.join(" "));

  /* ---------------------------------- .pop ---------------------------------- */
  // Mengambil dan menghilangkan element terakhir dari suatu array
  const array3 = [1, 2, 3, 4, 5];

  const lastIndex = array3[array3.length - 1];
  console.log(lastIndex);
  console.log(array3);

  const lastIndexWithPop = array3.pop();
  console.log(lastIndexWithPop);
  console.log(array3);

  /* ---------------------------------- .push --------------------------------- */
  // Menambah element baru di akhir suatu array
  const array4 = [1, 2, 3, 4, 5];
  console.log(array4);
  array4.push(6);
  console.log(array4);

  /* --------------------------------- .shift --------------------------------- */
  // Mengambil dan menghilangkan element pertama dari suatu array
  const array5 = [1, 2, 3, 4, 5];
  console.log(array5);
  array5.shift();
  console.log(array5);

  /* --------------------------------- unshift -------------------------------- */
  // Menambah element baru di awal suatu array
  const array6 = [1, 2, 3, 4, 5];
  console.log(array6);
  array6.unshift(6);
  console.log(array6);

  /* --------------------------------- .concat -------------------------------- */
  // Menggabungkan dua atau lebih array menjadi satu array
  const array7: (number | string | null)[] = [1, 2, 3];
  const array8: (number | string | null)[] = [10, 20, 30];
  const array9: (number | string | null)[] = array7.concat(
    array8,
    "string",
    null,
    [100, 200, 300],
    1,
    2,
    3
  );
  console.log(array9);

  /* --------------------------------- .splice -------------------------------- */
  // Memotong/menghapus beberapa element dari sebuah array (CUT)
  // Array.splice(starting, deleteCount, newItem1, newItem2, ..., neItemN)
  const array10 = ["Jan", "March", "April", "June"];
  console.log(array10.splice(1)); // Yang dihapus
  console.log(array10); // Sisanya

  const array11 = ["Jan", "Feb", "March", "April", "May", "June"];
  console.log(array11.splice(1, 3)); // Yang dihapus
  console.log(array11); // Sisanya

  const array12 = ["Jan", "Feb", "March", "April", "May", "June"];
  console.log(array12.splice(1, 3, "November", "Desember")); // Yang dihapus
  console.log(array12); // Sisanya

  /* --------------------------------- .slice --------------------------------- */
  // Mengambil beberapa element dari sebuah array (COPY)
  // Array.slice(start, end)
  const array13 = ["Jan", "Feb", "March", "April", "May", "June"];
  console.log(array13.slice(1, 4));
  console.log(array13);

  /* ---------------------------------- .map ---------------------------------- */
  // Membuat array baru dari hasil manipulasi array lama
  // Array.map((value, index, array) => {})

  const array14 = [10, 20, 30];
  const array15 = array14.map((value, index, array) => {
    return value * 2;
  });
  console.log(array15);

  // array result = []

  // LOOP 1
  // value = 10
  // index = 0
  // array = [10, 20, 30]
  // return value * 2 => 10 * 2 = 20
  // array result = [20]

  // LOOP 2
  // value = 20
  // index = 1
  // array = [10, 20, 30]
  // return value * 2 => 20 * 2 = 40
  // array result = [20, 40]

  // LOOP 3
  // value = 30
  // index = 2
  // array = [10, 20, 30]
  // return value * 2 => 30 * 2 = 60
  // array result = [20, 40, 60]

  const studentData = [
    { name: "Joko", age: 22 },
    { name: "Bowo", age: 25 },
    { name: "Bahlil", age: 30 },
  ];
  const studentNames = studentData.map((value) => {
    return value.name;
  });
  console.log(studentNames);

  /* ---------------------------------- NOTES --------------------------------- */
  console.log(String(1000));
  console.log(String({ name: "Jane Doe" }));

  const userData = {
    name: "John Doe",
    greetings: function () {
      return "Hellooo";
    },
  };

  console.log(userData.name);
  console.log(userData.greetings());

  const Array = {
    pop: () => {},
    join: () => {},
  };
}
