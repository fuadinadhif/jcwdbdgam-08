/* ------------------------------ if shorthand ------------------------------ */
if (true) {
  console.log("Hello");
}

if (true) console.log("Hello");

if (true) {
  console.log("Hi");
  console.log("Salam");
}

const age = 20;

if (age > 18) {
  console.log("Above 18");
} else if (age > 15) {
  console.log("Above 15");
} else {
  console.log("Minor");
}

if (age > 18) return console.log("Above 18");
if (age > 15) return console.log("Above 18");
console.log("Minor");

/* --------------------------- function shorthand --------------------------- */
const divide = (num1, num2) => {
  const result = num1 / num2;
  return result;
};

// const power = (num1, num2) => { return num1 ** num2; }
const power = (num1, num2) => num1 ** num2;

console.log(power(4, 2));
