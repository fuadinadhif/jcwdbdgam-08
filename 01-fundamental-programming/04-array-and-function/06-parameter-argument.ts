/* -------------------------------- paramater ------------------------------- */
// Pintu masuk untuk value yang dibutuhkan oleh sebuah fungsi ketika fungsi itu dijalankan
function add(number1: number, number2: number): number | string {
  const result = number1 + number2;
  return result;
}

console.log(add(10, 5));
console.log(add("9", 11));

/* -------------------------------- argument -------------------------------- */
// Value yang kita masukkan ke dalam sebuah parameter
function minus10(number1: number): number {
  const result = number1 - 10;
  return result;
}

minus10(100);
minus10(10);

/* ---------------------------- default parameter --------------------------- */
function multiply(number1: number, number2: number = 2): number {
  const result = number1 * number2;
  return result;
}

console.log(multiply(10, 10));
console.log(multiply(5, 9));
console.log(multiply(3));

/* ----------------------------- rest parameters ---------------------------- */
function addAllParameters(number1: number, ...restParams): number {
  console.log(restParams);
  let restParamsTotal = 0;

  for (const element of restParams) {
    restParamsTotal = restParamsTotal + Number(element);
  }

  // LOOP 1
  // element = 20
  // restParamsTotal = restParamsTotal + Number(element) => 0 + Number(20) => 0 + 20 = 20

  // LOOP 2
  // element = 30
  // restParamsTotal = restParamsTotal + Number(element) => 20 + Number(30) => 20 + 30 = 50

  // LOOP 3
  // element = "5"
  // restParamsTotal = restParamsTotal + Number(element) => 50 + Number("5") => 50 + 5 = 5

  console.log(restParamsTotal);

  const result = number1 + restParamsTotal;
  return result;
}

console.log(addAllParameters(10, 20, 30, "5"));
