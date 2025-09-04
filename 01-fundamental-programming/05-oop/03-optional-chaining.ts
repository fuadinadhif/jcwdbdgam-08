// Menghalau error ketika kita mengakses property dari sebuah undefined value

const citizenData = {
  name: "Budi Doremi",
  citizenship: "Indonesia",
  gender: "Male",
  // address: {
  //   street: "Jalan Kaliurang",
  //   city: "DIY"
  // }
};

console.log(citizenData.name);
console.log(citizenData.nik);
console.log(citizenData.address?.street);
