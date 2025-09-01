/* ---------------------------------- BREAK --------------------------------- */
// HARD STOP. (Switch case & Loop)
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log("Angka 5 ditemukan!");
    break; // stop the loop
  }
  console.log("Loop running");
}

const studentList = ["Joko", "Karina", "Budi", "Bowo", "Siti", "Andi"];
for (let i = 0; i < studentList.length; i++) {
  if (studentList[i] === "Karina") {
    console.log("Karina ditemukan!");
    break;
  } else {
    console.log("Karina tidak ada");
  }
}

/* -------------------------------- CONTINUE -------------------------------- */
// SOFT STOP/SKIPPED
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue; // skip
  }

  console.log(i);
}

/* ---------------------------------- NOTES --------------------------------- */
const arrayRandom = [1, 2, null, undefined, "hello"];
console.log(arrayRandom.length);
