/*
function functionName(parameter1, parameter2) {
  // kode yang akan dieksekusi ketika fungsinya dijalankan/dipanggil
}

const functionName = (paramater1, parameter2) => {
  // kode yang akan dieksekusi ketika fungsinya dijalankan/dipanggil
}
*/

/* ----------------------------- Normal function ---------------------------- */
function multiplyByFive(num: number): number {
  const result = num * 5;
  return result;
}

console.log(multiplyByFive(7));

/* ---------------------------- Callback function --------------------------- */
// Sebuah fungsi yang dipanggil di dalam sebuah fungsi lain

// Example 1
function showDiscount(
  discountFormula: (price: number, discountRate: number) => number,
  price: number,
  discountRate: number
) {
  return discountFormula(price, discountRate);
}

const showDiscountResult = showDiscount(
  (price, discountRate) => {
    return price * discountRate;
  },
  10_000,
  50 / 100
);

console.log(showDiscountResult);

// Example 2
function sayHi(callbackFunction: () => string) {
  return callbackFunction();
}

const sayHiResult = sayHi(() => {
  return "Hello";
});
console.log(sayHiResult);

/* ---------------------------------- NOTES --------------------------------- */
interface ParamInterface {
  param1: number;
  param2: string;
  param3: string | undefined;
  param4: [];
}

function someFunction({ param1, param2, param3, param4 }: ParamInterface) {}
someFunction({ param4: [], param1: 10, param2: "Hello", param3: "Hi" });

function anotherFunction(...restParams: (number | string)[]) {
  console.log(restParams);
}
anotherFunction(10);
anotherFunction(10, 11);
anotherFunction(10, 11, 14, "string");

/* -------------------------- REST PARAMS VS SPREAD ------------------------- */
// Rest Params -> Mengumpulkan paramaters yang ada ke dalam sebuah array
// Spread -> Menyebarkan isi sebuah array ke tempat lain

function restFunction(...abc) {
  console.log(abc);
  const copyAbc = [...abc];
}

restFunction(10, 20, 30);

/* ------------------------------ REAL EXAMPLE ------------------------------ */
const scores = [100, 50, 20, 30];
scores.map(() => {});
