/* ----------------------------------- IF ----------------------------------- */
const parliamentSalary = 3_500_000;
const UMR = 3_500_000;

if (parliamentSalary < UMR) {
  console.log("Horee");
} else if (parliamentSalary === UMR) {
  console.log("Hmmm");
} else {
  console.log("Huu");
}

if ("aman123" === "aman123") {
  console.log("Show!");
}

// if () {} // opsi 1
// else if () {} // opsi 2
// else if () {} // opsi 3
// else {} // final option

/* ------------------------------ IF STRUCTURE ------------------------------ */
/*
if (condition) {
  code to be executed
}
*/

// if
// if else
// if elseif else

/* ------------------------------- SIWTCH CASE ------------------------------ */
const favoriteFruit = "Apple";
switch (favoriteFruit) {
  case "Apple":
    console.log("Apple is my favorite fruit");
    break;
  case "Watermelon":
    console.log("Watermelon is my favorite fruit");
    break;
  default:
    console.log("Durian is my favorite fruit");
}

const demonstration = "Not Today";
switch (demonstration) {
  case "Today": // case 1
    console.log("WFO");
    console.log("Masuk kerja");
    console.log("Tidak libur");
    break;
  default: // default case
    if (false) {
      console.log("WFH");
    } else {
      console.log("Kerja dari rumah");
    }
}

/* -------------------------- SWITCH CASE STRUCTURE ------------------------- */
/*
switch (variable) {
  case value_case1:
    code to be executed;
    break;
  case value_case1:
    code to be executed;
    break;
  default:
    code to be executed;
}
*/

/* -------------------------------- EXAMPLES -------------------------------- */
const isUserLogin = true;

if (isUserLogin === true) {
  // Tampilkan halaman dashboard
} else {
  // Tendang ke halaman login
}

if (10 < 5) {
  if (5 < 1) {
  }
}
