// Function declaration -> Get hoisted
console.log(sayHi());
function sayHi() {
  return "Hi";
}

// Function expression -> Does NOT get hoisted
console.log(sayHello());
const sayHello = () => {
  return "Hello";
};
