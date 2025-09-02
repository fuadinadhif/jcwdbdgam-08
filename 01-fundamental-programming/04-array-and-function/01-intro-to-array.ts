let array1 = []; // empty array
let array2 = new Array(); // empty array

console.log(array1);
console.log(array2);

let array3 = ["A", "B", "C"];
let array4 = new Array("A", "B", "C");

console.log(array3);
console.log(array4);

let array5 = [1, 2, 3, 4];
let array6 = [
  1,
  2,
  3,
  4,
  [
    5,
    6,
    7,
    [8, 9, 10, [11, 12, 13, "a", null, undefined, { name: "John Doe" }]],
  ],
];

console.log(array6[0]);
console.log(array6[4][3][3][6].name);

console.log("Hello"[1]);
console.log((123)[0]);
console.log(true[0]);
