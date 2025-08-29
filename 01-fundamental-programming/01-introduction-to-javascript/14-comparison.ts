/* --------------------- === Strict Equal / Triple Equal -------------------- */
// Memeriksa apakah kedua value itu setara
// 1. Langsung bandingkan kedua valuenya
console.log(10 === "10");
console.log(10 === 10);
console.log("10" === "10");
console.log("faran" === "Faran");
console.log("Faran" === "Faran");

/* ---------------------- == Loose Equal / Double Equal --------------------- */
// Memeriksa apakah kedua value itu setara
// 1. Coba samakan tipe data kedua valuenya
// 2. Bandingkan kedua valuenya
console.log(10 == "10");
console.log(10 == [10]);
console.log(10 == null);

/* ----------------------------- > Greater Than ----------------------------- */
console.log(10 > 5);
console.log(1 > 5);
console.log(10 > 10);

/* ------------------------ >= Greater Than or Equal ------------------------ */
console.log(10 >= 10);

/* ------------------------------- < Less Than ------------------------------ */

/* -------------------------- <= Less Than or Equal ------------------------- */

/* ------------------------------ !== Not Equal ----------------------------- */
console.log(10 !== 10);
console.log(10 !== 1);
