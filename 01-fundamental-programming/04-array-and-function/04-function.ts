// finalPrice = originalPrice - (originalPrice * discountRate)
/* ------------------------------ Manual Reuse ------------------------------ */
const price1 = 100_000;
const discountRate1 = 50 / 100;
const finalPrice1 = price1 - price1 * discountRate1;
console.log(finalPrice1);

const price2 = 500_000;
const discountRate2 = 25 / 100;
const finalPrice2 = price2 - price2 * discountRate2;
console.log(finalPrice2);

/* ----------------------------- Function Reuse ----------------------------- */
function calculateDiscountPrice(originalPrice, discountRate) {
  const result = originalPrice - originalPrice * discountRate;
  return result;
}

const finalPrice3 = calculateDiscountPrice(1_000_000, 10 / 100);
console.log(finalPrice3);

/*
1. const finalPrice3 = calculateDiscountPrice(1_000_000, 10 / 100);
2. const finalPrice3 = function calculateDiscountPrice(originalPrice, discountRate) {
    return originalPrice - originalPrice * discountRate;
  }
3. const finalPrice3 = function calculateDiscountPrice(1_000_000, 10 / 100) {
    return 1_000_000 - 1_000_000 * 10 / 100;
  }
4. const finalPrice3 = function calculateDiscountPrice(1_000_000, 10 / 100) {
    return 900_000
  }
5. 4. const finalPrice3 = 900_000
*/

const finalPrice4 = calculateDiscountPrice(10_000_000, 90 / 100);
console.log(finalPrice4);

/* -------------------------------- Structure ------------------------------- */
/*
function functionName(parameter1, parameter2, paramter3) {
  code to be executed
  return functionResult
}
*/

/* ------------------- Function declaration vs expression ------------------- */
// Perbedaan: 1. syntax, 2. hoisting

// Function declaration
function greeting1() {
  return "Helloooo";
}

console.log(greeting1());

// Function expression
// const greeting2 = function greeting() {
//   return "Helloooo";
// }; // bentuk 1

// const greeting2 = function () {
//   return "Helloooo";
// }; // bentuk 2

const greeting2 = () => {
  return "Helloooo";
}; // bentuk 3 | arrow function

console.log(greeting2());

/* ---------------------------------- NOTES --------------------------------- */
const someArray = [1, 2, 3];
someArray.map((value) => {});
someArray.map(function (value) {});
someArray.map(function someFunction(value) {});
