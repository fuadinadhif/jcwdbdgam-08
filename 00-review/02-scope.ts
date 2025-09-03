// Scope => lingkup => {}
// Kita hanya bisa mengakses value/variable yang ada di dalam SCOPE YANG SAMA atau SCOPE YANG LEBIH DALAM

{
  // console.log(fullName);

  {
    const fullName = "Partanu Ardi Aksa";
  }
}

for (let i = 0; i < 10; i++) {
  const score = 100;
}
console.log(score);

function someFunction() {
  const someValue = "ABC";
}
console.log(someValue);
