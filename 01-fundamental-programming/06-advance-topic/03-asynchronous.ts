console.log(1);
console.log(2);
setTimeout(() => {
  console.log(3);
}, 10);
setTimeout(() => {
  console.log(4);
}, 0);
setTimeout(() => {
  console.log(5);
}, 10);
setTimeout(() => {
  console.log(6);
}, 0);

// A. 1, 2, 5, 6, 4, 3
// B. 1, 2, 5, 6, 3, 4

/* ----------- Kode yang membuat kode JS dioper ke Browser/Node.js ---------- */
// 1. setTimeout()
// 2. setInterval()
// 3. fetch() -> Promise
// 4. Promise
