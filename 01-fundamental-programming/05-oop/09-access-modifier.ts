// Access Modifier -> Cara kita memnetukan siapa saja yang bisa mengakses property dari object/class yang kita punya
// 1. Public
// 2. Private
// 3. Protected

/* --------------------------------- Public --------------------------------- */
// Property-nya bisa diakses dari mana saja. Baik dari dalam class ataupun di luar class

class Car {
  brand: string;
  price: number;

  constructor(brand: string, price: number) {
    this.brand = brand;
    this.price = price;
  }

  showBrand() {
    return this.brand;
  }
}

const myCar = new Car("Denzo", 1_400_000_000);
console.log(myCar.price);
console.log(myCar.brand);
console.log(myCar.showBrand());

/* --------------------------------- Private -------------------------------- */
// Hanya bisa diakses dari dalam class

class BankAccount {
  owner: string;
  #balance: number;

  constructor(owner: string, balance: number) {
    this.owner = owner;
    this.#balance = balance;
  }

  getBalance() {
    return this.#balance;
  }
}

const myAccount = new BankAccount("Nadhif", 1_000_000_000_000);
console.log(myAccount);
console.log(myAccount.owner);
console.log(myAccount.balance);
console.log(myAccount.getBalance());
