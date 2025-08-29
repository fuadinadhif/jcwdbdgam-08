/* ---------------------------- String Conversion --------------------------- */
String(50);
console.log(String(20));
console.log(String(null));
console.log(String(undefined));
console.log(String(true));
console.log(String({ name: "John Doe" }));
console.log(String([1, 2, null, undefined, "something", 3]));

/* --------------------------- Numeric Conversion --------------------------- */
Number("500");
const score = "100";
console.log(Number(score));
console.log(Number("100A"));

console.log(parseInt("1000"));
console.log(parseInt("10!00A)!01"));

console.log(+"1000");

/* --------------------------- Boolean Conversion --------------------------- */
Boolean("string here");

console.log(Boolean("Hello"));
console.log(Boolean(""));
console.log(Boolean(1));
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(true));

// Falsy Values
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(-0));
console.log(Boolean(NaN));
