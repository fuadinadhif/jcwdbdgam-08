/* --------------------------------- && AND --------------------------------- */
// hanya akan benar jika kedua value benar
console.log(true && true);
console.log(false && true);
console.log(true && false);
console.log(false && false);

console.log(10 < 1000 && 10 === 10);
console.log(10 < 1000 && 10 !== 10);

/* ---------------------------------- // OR --------------------------------- */
// akan benar ketika salah satu valuenya benar
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log(10 < 1000 || 10 === 10);
console.log(10 < 1000 || 10 !== 10);

/* ----------------------------- ! NOT/NEGATION ----------------------------- */
console.log(!true);
console.log(!false);
console.log(!Boolean(1000));
console.log(!1000);

/* -------------------------------- MINI QUIZ ------------------------------- */
console.log((10 === 1000 && 5 > 10) || 7 <= 5); // false
// console.log((false && 5 > 10) || 7 <= 5);
// console.log((false && false) || 7 <= 5);
// console.log(false || 7 <= 5);
// console.log(false || false);
console.log(false);

console.log(3 < 2 || (4 > 5 && true) ? true : false); // false
// console.log(3 < 2 || (false && true) ? true : false);
// console.log(3 < 2 || false ? true : false);
// console.log(false || false ? true : false);
// console.log(false ? true : false);
console.log(false);

/* ---------------------------------- NOTES --------------------------------- */
// && -> logical operator AND
// perbandingan1 && perbandingan2 -> logical operator AND
// boolean1 && boolean2 -> logical operator AND

// && -> short circuit AND
// value1 && value2 -> short circuit AND
