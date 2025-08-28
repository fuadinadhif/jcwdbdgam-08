/* --------------------------------- Object --------------------------------- */
// Menyimpan kumpulan data yang saling memiliki keterkaitan
/* 
{
  key1:value1,
  key2:value2
}
*/
const fullName = "John Doe";
const email = "john.doe@mail.com";
const age = 70;
const address = "Pantai Papuma";

const userData = {
  address: { city: "Jember", favPlace: "Pantai Papuma" },
  fullName: "John Doe",
  email: "john.doe@mail.com",
  age: 70,
};

console.log(userData);
console.log(userData.address.favPlace);
console.log(userData.email);

/* ---------------------------------- Array --------------------------------- */
// Menyimpan kumpulan data yang memiliki urutan
// []

// [1, 2, 3, 4, 5];
// ["Hello", 10, null, undefined];
const playlist = [
  "Indonesia Raya",
  "Mejikuhibiniu",
  "Aba-aba",
  "Garam dan Madu",
];

console.log(playlist);
console.log(playlist[1]);

/* ---------------------------------- NOTES --------------------------------- */
const country = "Indonesia";
console.log(country);
