/* ----------------------------- Constant - O(1) ---------------------------- */
function getFirstElement(arrayInput: any[]) {
  return arrayInput[0];
}

console.log(getFirstElement([10, 3, null, undefined]));
console.log(getFirstElement(["hello", 1]));

/* ------------------------------ Linear - O(n) ----------------------------- */
function getLastElement(arrayInput: any[]) {
  let lastElement: any;

  for (let i = 0; i < arrayInput.length; i++) {
    lastElement = arrayInput[i];
  }

  return lastElement;
}

console.log(getLastElement([1, 2, "tiga", "empat", 5, 6, null]));
console.log(getLastElement([1, 2]));

/* ----------------------------- Constant - O(1) ---------------------------- */
function getLastElementConstant(arrayInput: any[]) {
  return arrayInput[arrayInput.length - 1]; // 1
}

// 1 => O(1) => Constant

/* ------------------------------ Linear - O(n) ----------------------------- */
// [1, 2, 3] => 6

function sumArray(arrayInput: number[]): number {
  let sum = 0; // 1

  for (let i = 0; i < arrayInput.length; i++) {
    sum = sum + arrayInput[i]; // n
  }

  return sum; // 1
}

// 1 + n + 1
// n => O(n)

// 1 + 10 + 1 = 12
// 1 + 1000 + 1 = 1002
// 1 + 1_000_000_000 + 1 = 1_000_000_002

console.log(sumArray([1, 2, 3]));
console.log(sumArray([10, 20, 30]));

/* --------------------------- Quadratic - O(n^2) --------------------------- */
function printPairs(inputArray: any[]) {
  // n
  for (let i = 0; i < inputArray.length; i++) {
    // n
    for (let j = 0; j < inputArray.length; j++) {
      console.log(inputArray[i], inputArray[j]);
    }
  }
}

// n * n
// n^2 => O(n^2) => Quadratic

printPairs([1, 2, 3, 4, 5]);

/* ------------------------------------ - ----------------------------------- */
function add10ToArrayElements(arrayInput: number[]) {
  return arrayInput.map((value) => {
    return value + 10; // n
  });
}

// n => O(n) => Linear

console.log(add10ToArrayElements([1, 2, 3, 4]));
console.log(add10ToArrayElements([5, 10, 15, 20]));

/* ---------------------------------- NOTES --------------------------------- */
// 1. Lihat loop!
// 2. Hitung baris kode dan hapus konstanta!
