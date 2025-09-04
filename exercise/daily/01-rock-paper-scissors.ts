// 1. Tentutkan pilihan yang tersedia
// 2. Buat logic untuk menentukan pilihan komputer
// 3. Buat logic untuk menentukan
// pilihan sama => seri
// player = batu, komputer = kertas => kalah
// player = gunting, komputer = batu => kalah
// player = kertas, komputer = gunting => kalah
// selain pilihan atas => menang

const choices = ["batu", "gunting", "kertas"];
choices[0];
choices[1];
choices[2];

function getComputerChoice() {
  const computerIndex = Math.floor(Math.random() * 3);
  const computerChoice = choices[computerIndex];

  return computerChoice;
}

function getWinner(playerChoice: string) {
  const computerChoice = getComputerChoice();
  console.log(computerChoice);

  if (playerChoice === computerChoice) {
    return "Seri";
  } else if (
    (playerChoice === "kertas" && computerChoice === "gunting") ||
    (playerChoice === "gunting" && computerChoice === "batu") ||
    (playerChoice === "batu" && computerChoice === "kertas")
  ) {
    return "Player kalah";
  } else {
    return "Player menang";
  }
}

console.log(getWinner("gunting"));
console.log(getWinner("kertas"));
console.log(getWinner("batu"));

/* ---------------------------------- NOTES --------------------------------- */
Math.random(); // 0 - 0.99
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random() * 3);
console.log(Math.random() * 3);
console.log(Math.random() * 3);
console.log(Math.random() * 3);
console.log(Math.random() * 3);

console.log(Math.round(0.1));
console.log(Math.round(0.7));

console.log(Math.floor(Math.random() * 3));
console.log(Math.floor(Math.random() * 3));
console.log(Math.floor(Math.random() * 3));

console.log(Math.floor(0.9));
console.log(Math.ceil(0.1));
console.log(Math.round(0.1));

console.log((0.2345).toFixed(3));
