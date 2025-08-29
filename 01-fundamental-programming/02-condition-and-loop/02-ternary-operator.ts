{
  /* -------------------------------- Example 1 ------------------------------- */
  if (10 === 10) {
    console.log(true);
  } else {
    console.log(false);
  }

  10 === 10 ? console.log(true) : console.log(false);

  /* -------------------------------- Example 2 ------------------------------- */
  const parliamentSalary = 3_500_000;
  const UMR = 3_500_000;

  if (parliamentSalary < UMR) {
    console.log("Horee");
  } else if (parliamentSalary === UMR) {
    console.log("Hmmm");
  } else {
    console.log("Huu");
  }

  parliamentSalary < UMR
    ? console.log("Horee")
    : parliamentSalary === UMR
    ? console.log("Hmmm")
    : console.log("Huu");
}
