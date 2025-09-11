/* ----------------------------- Constant - O(1) ---------------------------- */
function sumArray(arrayInput: number[]): number {
  let sum = 0; // 1

  // 1
  for (let i = 0; i < arrayInput.length; i++) {
    sum = sum + arrayInput[i];
  }

  return sum;
}

// 1 + 1 => O(1)

/* ------------------------------ Linear - O(n) ----------------------------- */
function uppercaseTodos(todos: string[]) {
  let result: string[] = []; // n

  // 1
  for (let i = 0; i < todos.length; i++) {
    result.push(todos[i].toUpperCase());
  }

  return result;
}

// n + 1
// n => O(n) => Linear

console.log(uppercaseTodos(["makan", "minum", "mandi"]));

/* ---------------------------------- NOTES --------------------------------- */
// 1. Lihat array!
// 2. Hitung jumlah variable
