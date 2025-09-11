// 1. Buat fungsi yang memeriksa apakah sebuah string itu palindrome atau tidak!
// 1.1 Palindrome? Palindrome => Kata yang kalau dibolak-balik urutan hurufnya, artinya tetep akan sama
// 1.2 Palindrome = "madam" => "madam", Not Palindome = "agus" => "suga"
// 1.3 Input = "madam", Output = "madam". Input = "agus", Output = "suga"

// 2. Steps
// 2.1 Ambil inputnya
// 2.2 Putar urutan inputnya
// - Putar menggunakan reverse method
// -
// -
// 2.3 Kecilkan/samakan semua character yang ada
// 2.4 Bandingkan hasil yang sudah diputar dengan input original
// 2.5 Kalau sama => hasil true
// 2.6 Kalau beda => hasil false

const input = "madam";
const reverseInput = input.split("").reverse();
const isPalindrome =
  input.toLowerCase() === reverseInput.join("").toLowerCase();
console.log(isPalindrome);

function checkPalindrome(input: string): boolean {
  const reverseInput = input.split("").reverse();
  const isPalindrome =
    input.toLowerCase() === reverseInput.join("").toLowerCase();
  return isPalindrome;
}

console.log(checkPalindrome("madam"));
console.log(checkPalindrome("MaDAm"));
console.log(checkPalindrome("agus"));
console.log(checkPalindrome("kasur"));

/* ---------------------------------- NOTES --------------------------------- */
const arrayOfNums = [1, 2, 3, 4];
const reverseArrayOfNums = arrayOfNums.reverse();

console.log(arrayOfNums);
console.log(reverseArrayOfNums);

console.log("hello world".split(" "));

"madam" === ["m", "a", "d", "a", "m"];

console.log(["m", "a", "d", "a", "m"].join(""));
