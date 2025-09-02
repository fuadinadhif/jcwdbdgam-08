/* ---------------------------------- PASS ---------------------------------- */
/*
function functionName:
  pass; // placeholder
*/

function doSomething() {}
if (true) {
  // put some code here
}

/* --------------------------------- NESTED --------------------------------- */
// Nested Loop
const userData = {
  isLoggedIn: false,
  isSubscribed: true,
  age: 15,
};

if (userData.isLoggedIn) {
  console.log("User is logged in"); // Kalau sudah login

  if (userData.isSubscribed) {
    console.log("User sudah subscribed"); // Kalau sudah login dan sudah subscribed

    if (userData.age >= 18) {
      console.log("Access granted to premium content"); // Login + subscribed + umur di ata 18
    }
  }
} else {
  console.log("Please log in first");
}

if (userData.isLoggedIn) {
  console.log("User is logged in"); // Kalau sudah login
} else if (userData.isLoggedIn && userData.isSubscribed) {
  console.log("User sudah subscribed"); // Kalau sudah login dan sudah subscribed
} else if (userData.isLoggedIn && userData.isSubscribed && userData.age >= 18) {
  console.log("Access granted to premium content"); // Login + subscribed + umur di ata 18
} else {
  console.log("Please log in first");
}

// Nested Loop
const classes = [
  ["Joko. loop j pertama", "Bowo. loop j kedua", "Budi. loop j ketiga"], // loop i pertama. dimensi 1
  ["Charles", "Verstappen", "Hadjar"], // loop i kedua
  ["Abdul Qodir", "Muhammad Sumbul"],
];
console.log(classes[0][1]);

for (let i = 0; i < classes.length; i++) {
  for (let j = 0; j < classes[i].length; j++) {
    console.log(classes[i][j]);
  }
}
