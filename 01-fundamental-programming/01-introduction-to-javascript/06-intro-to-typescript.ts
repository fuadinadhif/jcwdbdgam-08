{
  /* -------------------------------- JS VS TS -------------------------------- */

  let name = "Nadhif";

  let fullName = "Abdul Rozaq"; // string - implisit type
  fullName = "Budiman Sujatmoko"; // number
  fullName = "Afan Setiawan"; // null

  let firstName: string | null | undefined | object | [] = "Joko";
  let lastName: any;

  let price: number = 50_000; // explisit type
  let discount = 10_000;

  console.log(price - discount);

  price = 20_000;

  console.log(price - discount);
  // console.log(null - undefined);
  // console.log("a" - "b");

  /* ---------------------------------- NOTES --------------------------------- */
  // Compile = mengubah suatu hal dari satu bentuk ke bentuk lainnya
  // Install typescript = `npm install typescript`
}
