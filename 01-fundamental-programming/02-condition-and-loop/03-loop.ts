// console.log("Hai");
// console.log("Hai");
// console.log("Hai");
// console.log("Hai");
// console.log("Hai");
// console.log("Hai");
// console.log("Hai");
// console.log("Hai");
// console.log("Hai");
// console.log("Hai");

/* -------------------------------- FOR LOOP -------------------------------- */
for (let i = 0; i < 3; i++) {
  console.log("Hai");
}

// LOOP 1
// i = 0
// i < 3 => 0 < 3 = true => jalankan kode yang ada di dalam loop
// i++ => i = i + 1 => i = 0 + 1 = 1

// LOOP 2
// i = 1
// i < 3 => 1 < 3 = true => jalankan kode yang ada di dalam loop
// i++ => i = i + 1 => i = 1 + 1 = 2

// LOOP 3
// i = 2
// i < 3 => 2 < 3 = true => jalankan kode yang ada di dalam loop
// i++ => i = i + 1 => i = 2 + 1 = 3

// LOOP 4
// i = 3
// i < 3 => 3 < 3 = false => hentikan loopnya

// STRUCTURE
/*
for (counter variable; loop condition; counter increment;) {
  code to be executed
}
*/

/* ------------------------------- WHILE LOOP ------------------------------- */
let i = 0;
while (i < 3) {
  console.log("Hai");
  i++;
}

// Pembuatan variable counter => let i = 0;

// LOOP 1
// i < 3 => 0 < 3 = true => jalankan kode yang ada di dalam loop
// i++ => i = i + 1 => i = 0 + 1 = 1

// LOOP 2
// i < 3 => 1 < 3 = true => jalankan kode yang ada di dalam loop
// i++ => i = i + 1 => i = 1 + 1 = 2

// LOOP 3
// i < 3 => 2 < 3 = true => jalankan kode yang ada di dalam loop
// i++ => i = i + 1 => i = 2 + 1 = 3

// LOOP 4
// i < 3 => 3 < 3 = false => hentikan loop

/* ------------------------------ DO WHILE LOOP ----------------------------- */
let k = 0;
do {
  console.log("Hai");
  k++;
} while (k < 3);

/* ------------------------- DO WHILE VS WHILE LOOP ------------------------- */
let j = 10;
do {
  console.log("Hai");
  j++;
} while (j < 3);

let h = 10;
while (h < 3) {
  console.log("Hai");
  h++;
}

/* --------------------------------- REWIND --------------------------------- */
let counterPostfix = 0;
console.log(counterPostfix++);
console.log(counterPostfix);

let counterPrefix = 0;
console.log(++counterPrefix);
console.log(counterPrefix);

/* ---------------------------------- NOTES --------------------------------- */
const array = [[1, 2, 3], [4, 5, 6], [], []];

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < i; i++) {}
}
