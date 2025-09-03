// Hoisting: Proses penarikan wadah variable ke baris 0. Sehingga variable tersebut sudah bisa diakses dari sejak awal code dijalankan

console.log(fullName);
console.log(fullName);

{
  var fullName = "fadil Rifaldy";
}

console.log(fullName);
