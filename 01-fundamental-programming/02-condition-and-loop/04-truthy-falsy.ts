console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(null));
console.log(Boolean(undefined));

console.log(!Boolean(""));

/* -------------------------------- EXAMPLES -------------------------------- */
const name = "";

if (!name) {
  // Kalau variable name hasil boolean conversion-nya adalah true maka jalankan kode di dalam if
  console.log("Name is not defined");
}
