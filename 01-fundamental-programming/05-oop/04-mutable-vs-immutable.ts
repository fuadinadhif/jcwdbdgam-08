// Mutable -> Diubah. Diubah !== Diganti

/* --------------------- Contoh mengganti sebuah object --------------------- */
const playerData = { name: "Suwandi", rating: 9.5 };
console.log(playerData === playerData);

let backupPlayerData = playerData;
console.log(backupPlayerData === playerData);

backupPlayerData = { name: "Suwandi", rating: 9.5 };
console.log(backupPlayerData === playerData);

/* ----------------- Contoh mengubah sebuah object dan array ---------------- */
const sellerData = { name: "Joko", storeName: "Joko Store" };
sellerData.name = "Gibran";
console.log(sellerData);

const arrayOfNum = [1, 2, 3, 4];
arrayOfNum.pop();
console.log(arrayOfNum);
arrayOfNum[0] = 10;
console.log(arrayOfNum);

/* -------------------------------- Mini Quiz ------------------------------- */
const person = { name: "Angelica", age: 35 };
// const anotherPerson = { ...person };
const anotherPerson = person;

console.log(person);
console.log(anotherPerson);

person.age = 90;
person.address = "Jakarta";

console.log(person);
console.log(anotherPerson);

/* ---------------------------------- NOTES --------------------------------- */
let counter = 10;
counter = counter + 1;
